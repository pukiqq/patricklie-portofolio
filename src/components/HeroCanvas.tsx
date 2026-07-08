import { useEffect, useRef } from 'react';

/**
 * Signature hero visual: a 3D "sensor constellation" — a rotating network of
 * nodes with data pulses travelling along its edges. Hand-rolled perspective
 * projection on a 2D canvas: no WebGL, no dependencies.
 *
 * - Mouse steers the rotation (soft inertia)
 * - Pauses when off-screen or when the tab is hidden
 * - prefers-reduced-motion renders a single static frame
 */

interface Node3D {
  x: number;
  y: number;
  z: number;
  /** A few nodes are "sensors" — copper, ringed. */
  sensor: boolean;
  phase: number;
}

interface Edge {
  a: number;
  b: number;
}

interface Pulse {
  edge: Edge;
  t: number;
  speed: number;
  forward: boolean;
}

const NODE_COUNT = 130;
const RADIUS = 300;
const EDGE_DIST = 118;
const FOV = 780;
const MAX_PULSES = 9;

function buildNodes(): Node3D[] {
  const nodes: Node3D[] = [];
  // Fibonacci sphere for even distribution, plus jitter so it reads organic
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const jitter = 0.82 + Math.random() * 0.3;
    nodes.push({
      x: Math.cos(theta) * r * RADIUS * jitter,
      y: y * RADIUS * jitter,
      z: Math.sin(theta) * r * RADIUS * jitter,
      sensor: i % 16 === 0,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return nodes;
}

function buildEdges(nodes: Node3D[]): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dz = nodes[i].z - nodes[j].z;
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < EDGE_DIST) {
        edges.push({ a: i, b: j });
      }
    }
  }
  return edges;
}

export default function HeroCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = buildNodes();
    const edges = buildEdges(nodes);
    const pulses: Pulse[] = [];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rotY = 0.4;
    let rotX = -0.18;
    let targetY = rotY;
    let targetX = rotX;
    let raf = 0;
    let running = true;
    let inView = true;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Resizing resets the bitmap; without a loop running, repaint now.
      if (reduced) draw();
    };

    const spawnPulse = () => {
      if (pulses.length >= MAX_PULSES || edges.length === 0) return;
      pulses.push({
        edge: edges[Math.floor(Math.random() * edges.length)],
        t: 0,
        speed: 0.006 + Math.random() * 0.011,
        forward: Math.random() > 0.5,
      });
    };

    const project = (n: Node3D, wobble: number) => {
      // breathing: nodes drift slightly on their own phase
      const br = 1 + Math.sin(n.phase + wobble) * 0.02;
      const x = n.x * br;
      const y = n.y * br;
      const z = n.z * br;
      // rotate Y then X
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const x1 = x * cy - z * sy;
      const z1 = x * sy + z * cy;
      const y1 = y * cx - z1 * sx;
      const z2 = y * sx + z1 * cx;
      const s = FOV / (FOV + z2);
      return {
        x: width * 0.5 + x1 * s,
        y: height * 0.5 + y1 * s,
        s,
        z: z2,
      };
    };

    const draw = () => {
      t += 0.016;
      // inertia toward mouse-steered target + constant slow spin
      targetY += 0.0011;
      rotY += (targetY - rotY) * 0.045;
      rotX += (targetX - rotX) * 0.045;

      ctx.clearRect(0, 0, width, height);

      const projected = nodes.map((n) => project(n, t * 0.7));

      // edges — depth-faded hairlines
      for (const e of edges) {
        const a = projected[e.a];
        const b = projected[e.b];
        const depth = Math.min(a.s, b.s);
        const alpha = Math.max(0, (depth - 0.62) * 0.34);
        if (alpha <= 0.004) continue;
        ctx.strokeStyle = `rgba(150, 165, 205, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // pulses — copper packets travelling along edges
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const from = projected[p.forward ? p.edge.a : p.edge.b];
        const to = projected[p.forward ? p.edge.b : p.edge.a];
        const px = from.x + (to.x - from.x) * p.t;
        const py = from.y + (to.y - from.y) * p.t;
        const depth = from.s + (to.s - from.s) * p.t;
        const fade = Math.sin(p.t * Math.PI); // ease in/out of existence
        const alpha = Math.max(0, (depth - 0.55) * 1.5) * fade;
        if (alpha <= 0.01) continue;
        const r = 2.4 * depth;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, r * 5);
        glow.addColorStop(0, `rgba(229, 167, 110, ${alpha})`);
        glow.addColorStop(1, 'rgba(229, 167, 110, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, r * 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(245, 211, 176, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const p = projected[i];
        const depthAlpha = Math.max(0, (p.s - 0.6) * 1.15);
        if (depthAlpha <= 0.01) continue;
        if (n.sensor) {
          const blink = 0.65 + Math.sin(t * 1.6 + n.phase) * 0.35;
          ctx.fillStyle = `rgba(229, 167, 110, ${depthAlpha * blink})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.3 * p.s, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = `rgba(229, 167, 110, ${depthAlpha * blink * 0.4})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 5.5 * p.s, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(196, 203, 218, ${depthAlpha * 0.75})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.4 * p.s, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (Math.random() < 0.05) spawnPulse();
    };

    const loop = () => {
      if (running && inView && !document.hidden) draw();
      raf = requestAnimationFrame(loop);
    };

    const onMouse = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      targetY = rotY + nx * 0.24;
      targetX = -0.18 + ny * -0.2;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    io.observe(canvas);

    if (reduced) {
      // one static, fully-composed frame
      draw();
    } else {
      window.addEventListener('mousemove', onMouse, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
