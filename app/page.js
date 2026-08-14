import Link from "next/link";
import WatermarkBg from "@/components/WatermarkBg";
import DarkCallout from "@/components/DarkCallout";

const ACCES_RAPIDE = [
  {
    href: "/modules",
    emoji: "📚",
    titre: "6 modules",
    desc: "Slides, leçons complètes, études de cas, exercices et ressources de chaque session.",
    cta: "Voir le programme",
  },
  {
    href: "/portfolio",
    emoji: "🗂️",
    titre: "Mon Portfolio",
    desc: "Suivez la progression de votre Portfolio IA Professionnel, sauvegardée sur cet appareil.",
    cta: "Suivre ma progression",
  },
  {
    href: "/prompts",
    emoji: "💬",
    titre: "100 prompts",
    desc: "La bibliothèque complète de prompts professionnels, cherchable et copiable en un clic.",
    cta: "Ouvrir la bibliothèque",
  },
  {
    href: "/manuel",
    emoji: "📘",
    titre: "Manuel complet",
    desc: "Le manuel de référence de la formation, en aperçu PDF et téléchargeable (Word/PDF).",
    cta: "Ouvrir le manuel",
  },
  {
    href: "/ressources",
    emoji: "🧰",
    titre: "Ressources transverses",
    desc: "Glossaire métier, FAQ, sondage, certification, communauté et programme complet.",
    cta: "Explorer les ressources",
  },
  {
    href: "/kit-animateur",
    emoji: "🎤",
    titre: "Kit animateur",
    desc: "Run-of-show, notes présentateur, FAQ/objections et checklist technique par session.",
    cta: "Ouvrir le kit animateur",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <WatermarkBg />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-violet shadow-sm">
            Cohorte live · 65 places
          </span>
          <h1 className="font-titres mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
            <span className="text-gradient-brand">Claude AI Mastery</span> 2.0
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
            La plateforme centrale de la formation : accédez à vos slides, leçons, exercices,
            ressources téléchargeables et à votre Portfolio IA Professionnel — tout au même
            endroit, sans ouvrir des dizaines de fichiers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/modules"
              className="gradient-brand rounded-full px-6 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-90"
            >
              Voir les 6 modules
            </Link>
            <Link
              href="/prompts"
              className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-corail hover:text-corail"
            >
              Explorer les 100 prompts
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { n: "6", l: "modules complets" },
              { n: "100", l: "prompts professionnels" },
              { n: "17→28 août", l: "cohorte 2026" },
              { n: "18h00–19h45", l: "GMT par session" },
            ].map((stat) => (
              <div key={stat.l} className="rounded-2xl bg-white/80 px-4 py-4 shadow-sm">
                <div className="font-titres text-2xl font-extrabold text-violet">{stat.n}</div>
                <div className="text-xs text-ink/60">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-titres mb-6 text-2xl font-bold text-ink">Accès rapide</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACCES_RAPIDE.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-titres mt-3 text-lg font-bold text-ink">{item.titre}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{item.desc}</p>
              <span className="mt-4 text-sm font-bold text-violet group-hover:text-corail">
                {item.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <DarkCallout title="Rappel important">
          <p>
            Ce portail est un <strong>complément</strong> de production — les sessions live, les
            replays vidéo et les inscriptions restent gérés sur{" "}
            <a href="https://formations4data.systeme.io/claudemastery" target="_blank" rel="noopener noreferrer">
              formations4data.systeme.io/claudemastery
            </a>{" "}
            (page de vente et hébergement vidéo officiels) et sur le lien Microsoft Teams unique
            de la cohorte, partagé dans la communauté privée. Rien ici ne remplace ces deux
            canaux.
          </p>
        </DarkCallout>
      </section>
    </div>
  );
}
