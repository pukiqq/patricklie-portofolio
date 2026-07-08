import { ReactNode } from 'react';
import { Check } from 'lucide-react';

/* ---------------------------------------------------------------------------
   Small composable blocks shared across case studies. Content is always
   passed in verbatim; these only own the visual vocabulary.
--------------------------------------------------------------------------- */

/** Icon tile + title + description row ("What I built" lists). */
export function IconFeature({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group flex items-start gap-5">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-copper-500/25 bg-copper-500/[0.08] text-copper-300 transition-colors duration-500 group-hover:bg-copper-500/[0.16]">
        {icon}
      </span>
      <div>
        <h3 className="font-medium text-mist-50">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-mist-400">{children}</p>
      </div>
    </div>
  );
}

/** Check-marked list item. */
export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-sage/30 bg-sage/10">
        <Check className="h-3 w-3 text-sage" />
      </span>
      <span className="leading-relaxed text-mist-300">{children}</span>
    </li>
  );
}

/** Copper-tick list item (plain bullets). */
export function TickItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="mt-[9px] h-px w-4 flex-shrink-0 bg-copper-500/60" aria-hidden="true" />
      <span className="leading-relaxed text-mist-300">{children}</span>
    </li>
  );
}

/** Numbered step in a data-flow / process list. */
export function FlowStep({ index, children }: { index: number; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] font-mono text-[10px] text-copper-300">
        {index}
      </span>
      <span className="text-sm text-mist-300">{children}</span>
    </div>
  );
}

/** Big-number stat tile. */
export function StatCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="panel p-7 text-center transition-colors duration-500 hover:border-copper-500/25">
      <p className="font-display text-4xl font-semibold tracking-tight text-copper-300">{value}</p>
      <p className="mt-2 font-medium text-mist-50">{label}</p>
      {note && <p className="mt-1 font-mono text-[11px] text-mist-500">{note}</p>}
    </div>
  );
}

/** Titled mini-card for grids of short facts. */
export function MiniCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="panel-quiet p-5">
      <h4 className="font-medium text-mist-50">{title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{children}</p>
    </div>
  );
}

/** Challenge card: problem statement + highlighted fix. */
export function ChallengeCard({
  title,
  problem,
  fixLabel = 'Fix',
  fix,
}: {
  title: string;
  problem: ReactNode;
  fixLabel?: string;
  fix: ReactNode;
}) {
  return (
    <div className="panel relative overflow-hidden p-7">
      <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-copper-400/70 to-copper-700/30" aria-hidden="true" />
      <h4 className="font-display text-lg font-medium text-mist-50">{title}</h4>
      <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{problem}</p>
      <div className="mt-4 rounded-xl border border-copper-500/20 bg-copper-500/[0.06] p-4">
        <p className="text-sm leading-relaxed text-mist-200">
          <span className="font-mono text-[11px] uppercase tracking-wider text-copper-300">
            {fixLabel}:
          </span>{' '}
          {fix}
        </p>
      </div>
    </div>
  );
}

/** Insight / engineering-challenge card with icon. */
export function InsightCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="panel h-full p-7 transition-colors duration-500 hover:border-copper-500/25">
      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-copper-500/25 bg-copper-500/[0.08] text-copper-300">
        {icon}
      </span>
      <h4 className="font-medium text-mist-50">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-mist-400">{children}</p>
    </div>
  );
}

/** Centered pipeline-stage card (icon on top). */
export function StageCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="panel-quiet h-full p-6 text-center">
      <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-copper-500/25 bg-copper-500/[0.08] text-copper-300">
        {icon}
      </span>
      <h4 className="text-sm font-medium text-mist-50">{title}</h4>
      <p className="mt-1.5 text-xs leading-relaxed text-mist-400">{children}</p>
    </div>
  );
}

/** Inline code fragment tuned for the dark surface. */
export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-white/[0.08] bg-ink-950/80 px-1.5 py-0.5 font-mono text-[0.85em] text-copper-200">
      {children}
    </code>
  );
}
