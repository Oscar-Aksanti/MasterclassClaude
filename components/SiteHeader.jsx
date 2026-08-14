import Link from "next/link";

const LIENS = [
  { href: "/", label: "Accueil" },
  { href: "/modules", label: "Modules" },
  { href: "/portfolio", label: "Mon Portfolio" },
  { href: "/prompts", label: "100 Prompts" },
  { href: "/manuel", label: "Manuel" },
  { href: "/ressources", label: "Ressources" },
  { href: "/kit-animateur", label: "Kit animateur" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl gradient-brand text-sm font-black text-white font-titres">
            AI
          </span>
          <span className="font-titres text-sm font-extrabold leading-tight text-ink sm:text-base">
            Claude AI Mastery <span className="text-corail">2.0</span>
          </span>
        </Link>
        <nav className="flex flex-1 flex-wrap justify-end gap-x-1 gap-y-1 text-sm font-semibold">
          {LIENS.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="rounded-full px-3 py-1.5 text-ink/70 transition hover:bg-ink/5 hover:text-violet"
            >
              {lien.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
