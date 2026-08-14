export default function CollapsibleSection({ title, defaultOpen = false, children }) {
  return (
    <details
      className="group rounded-3xl border border-ink/10 bg-white/60 px-5 py-4 open:bg-white"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-titres text-base font-bold text-ink">
        {title}
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/5 text-sm text-ink/60 transition group-open:rotate-45 group-open:bg-corail group-open:text-white">
          +
        </span>
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
