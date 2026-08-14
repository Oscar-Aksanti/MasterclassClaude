import Link from "next/link";
import { MODULES, HORAIRE, formaterDateModule } from "@/lib/modules";
import ModuleStatusBadge from "@/components/ModuleStatusBadge";
import WatermarkBg from "@/components/WatermarkBg";

export const metadata = {
  title: "Les 6 modules — Claude AI Mastery 2.0",
};

export default function ModulesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10">
        <WatermarkBg />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h1 className="font-titres text-3xl font-extrabold text-ink sm:text-4xl">
            Les 6 modules
          </h1>
          <p className="mt-3 max-w-2xl text-ink/70">
            Statut calculé automatiquement selon la date d&apos;aujourd&apos;hui et le calendrier
            réel de la cohorte ({HORAIRE} par session).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {MODULES.map((m) => (
            <Link
              key={m.slug}
              href={`/modules/${m.slug}`}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-violet px-3 py-1 text-xs font-bold text-white">
                  Module {m.n}
                </span>
                <ModuleStatusBadge date={m.date} />
              </div>
              <h2 className="font-titres mt-4 text-xl font-bold text-ink">{m.titre}</h2>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                {formaterDateModule(m.date)} · {HORAIRE}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                <strong className="text-ink">Livrable attendu :</strong> {m.livrable}
              </p>
              <span className="mt-4 text-sm font-bold text-violet group-hover:text-corail">
                Ouvrir le module →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
