export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="flex items-center gap-2.5 font-mono text-xs text-mist-500">
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-copper-500/30 bg-copper-500/10 text-[9px] font-medium text-copper-300">
            PL
          </span>
          © {new Date().getFullYear()} Portfolio. Built with React &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widecaps text-mist-600">
          Sensors → Cloud → Insight
        </p>
      </div>
    </footer>
  );
}
