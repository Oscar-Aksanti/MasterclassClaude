import Link from "next/link";
import { notFound } from "next/navigation";
import { MODULES, getModule, getAdjacentModules, HORAIRE, formaterDateModule } from "@/lib/modules";
import { readContentFile } from "@/lib/content";
import { listDownloads } from "@/lib/downloads";
import ModuleStatusBadge from "@/components/ModuleStatusBadge";
import Markdown from "@/components/Markdown";
import DownloadList from "@/components/DownloadList";
import CollapsibleSection from "@/components/CollapsibleSection";

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) return {};
  return { title: `Module ${mod.n} — ${mod.titre} — Claude AI Mastery 2.0` };
}

export default async function ModuleDetailPage({ params }) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();

  const lecon = readContentFile(`modules/${slug}/04-lecon-ecrite-complete.md`);
  const etudeDeCas = readContentFile(`modules/${slug}/07-etude-de-cas.md`);
  const grilleEvaluation = readContentFile(`modules/${slug}/10-grille-evaluation-livrable.md`);
  const quiz = readContentFile(`modules/${slug}/11-quiz-autoevaluation.md`);
  const prompts = readContentFile(`modules/${slug}/08-prompts-du-module.md`);

  const exercices = listDownloads(`${slug}/exercices`);
  const ressources = listDownloads(`${slug}/ressources`);
  const slidesPdf = `/downloads/${slug}/03-support-slides.pdf`;
  const slidesPptx = `/downloads/${slug}/03-support-slides.pptx`;

  const { prev, next } = getAdjacentModules(slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      {/* En-tête */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-violet px-3 py-1 text-xs font-bold text-white">
            Module {mod.n}
          </span>
          <ModuleStatusBadge date={mod.date} />
        </div>
        <h1 className="font-titres mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
          {mod.titre}
        </h1>
        <p className="mt-2 text-sm uppercase tracking-wide text-ink/50">
          {formaterDateModule(mod.date)} · {HORAIRE}
        </p>
        <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-ink/80">
          <strong className="text-ink">Livrable attendu :</strong> {mod.livrable}
          <br />
          <span className="text-ink/60">Alimente le {mod.portfolioSection} du Portfolio IA Professionnel.</span>
        </p>
      </div>

      {/* Bloc présentation : slides */}
      <section className="mb-10">
        <h2 className="font-titres mb-3 text-xl font-bold text-ink">Support de présentation</h2>
        <iframe
          src={slidesPdf}
          title={`Slides du module ${mod.n}`}
          className="h-[600px] w-full rounded-2xl border border-ink/10 bg-white"
        />
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href={slidesPptx}
            download
            className="rounded-full bg-violet px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
          >
            Télécharger .pptx
          </a>
          <a
            href={slidesPdf}
            download
            className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:border-corail hover:text-corail"
          >
            Télécharger .pdf
          </a>
        </div>
      </section>

      {/* Leçon complète */}
      <section className="mb-10">
        <h2 className="font-titres mb-3 text-xl font-bold text-ink">Leçon écrite complète</h2>
        {lecon ? (
          <Markdown content={lecon} />
        ) : (
          <p className="text-sm text-ink/50">Contenu indisponible.</p>
        )}
      </section>

      {/* Étude de cas */}
      <section className="mb-10">
        <h2 className="font-titres mb-3 text-xl font-bold text-ink">Étude de cas</h2>
        {etudeDeCas ? (
          <Markdown content={etudeDeCas} />
        ) : (
          <p className="text-sm text-ink/50">Contenu indisponible.</p>
        )}
      </section>

      {/* Exercices */}
      <section className="mb-10">
        <h2 className="font-titres mb-3 text-xl font-bold text-ink">Exercices</h2>
        <DownloadList items={exercices} emptyLabel="Aucun exercice disponible pour ce module." />
      </section>

      {/* Ressources téléchargeables */}
      <section className="mb-10">
        <h2 className="font-titres mb-3 text-xl font-bold text-ink">Ressources téléchargeables</h2>
        <DownloadList items={ressources} emptyLabel="Aucune ressource disponible pour ce module." />
      </section>

      {/* Prompts du module */}
      <section className="mb-10">
        <h2 className="font-titres mb-3 text-xl font-bold text-ink">Prompts du module</h2>
        {prompts ? (
          <Markdown content={prompts} />
        ) : (
          <p className="text-sm text-ink/50">Contenu indisponible.</p>
        )}
      </section>

      {/* Grille d'évaluation + Quiz, repliables */}
      <section className="mb-10 space-y-4">
        <CollapsibleSection title="Grille d'évaluation du livrable">
          {grilleEvaluation ? (
            <Markdown content={grilleEvaluation} />
          ) : (
            <p className="text-sm text-ink/50">Contenu indisponible.</p>
          )}
        </CollapsibleSection>
        <CollapsibleSection title="Quiz d'autoévaluation">
          {quiz ? <Markdown content={quiz} /> : <p className="text-sm text-ink/50">Contenu indisponible.</p>}
        </CollapsibleSection>
      </section>

      {/* Navigation entre modules */}
      <nav className="flex items-center justify-between border-t border-ink/10 pt-6 text-sm font-bold">
        {prev ? (
          <Link href={`/modules/${prev.slug}`} className="text-violet hover:text-corail">
            ← Module {prev.n}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/modules" className="text-ink/50 hover:text-ink">
          Tous les modules
        </Link>
        {next ? (
          <Link href={`/modules/${next.slug}`} className="text-violet hover:text-corail">
            Module {next.n} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
