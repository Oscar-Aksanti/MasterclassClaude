import { EXT_LABELS } from "@/lib/downloads";

export default function DownloadList({ items, emptyLabel = "Aucun fichier disponible." }) {
  if (!items || items.length === 0) {
    return <p className="text-sm text-ink/50">{emptyLabel}</p>;
  }
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            download
            className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm transition hover:border-violet/40 hover:shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-[11px] font-bold uppercase text-violet">
              {EXT_LABELS[item.ext] ?? item.ext ?? "?"}
            </span>
            <span className="flex-1 truncate font-medium text-ink" title={item.name}>
              {item.name}
            </span>
            <span className="shrink-0 text-xs text-ink/40">{item.sizeKB} Ko</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
