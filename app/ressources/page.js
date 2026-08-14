import { readContentFile, readContentDirMarkdown } from "@/lib/content";
import Markdown from "@/components/Markdown";

export const metadata = {
  title: "Ressources — Claude AI Mastery 2.0",
};

const LABELS = {
  "glossaire-ia-metier.md": "Glossaire IA — métier",
  "FAQ-avant-inscription.md": "FAQ avant inscription",
  "sondage-pre-formation.md": "Sondage pré-formation",
  "criteres-obtention.md": "Critères d'obtention de la certification",
  "gabarit-certificat.md": "Gabarit du certificat",
  "structure-canaux.md": "Structure des canaux de la communauté",
  "message-onboarding.md": "Message d'onboarding",
  "calendrier-animation-post-formation.md": "Calendrier d'animation post-formation",
  "syllabus-complet.md": "Syllabus complet",
  "planning-detaille-6-sessions.md": "Planning détaillé des 6 sessions",
  "parcours-portfolio-participant.md": "Parcours & Portfolio participant",
  "continuite-inter-modules.md": "Continuité inter-modules",
};

function labelFor(filename) {
  return LABELS[filename] ?? filename.replace(/\.md$/, "").replace(/-/g, " ");
}

const SOUS_SECTIONS = [
  { id: "ressources-transverses", titre: "Ressources transverses", dir: "ressources" },
  { id: "programme", titre: "Programme de la formation", dir: "programme" },
  { id: "certification", titre: "Certification", dir: "certification" },
  { id: "communaute", titre: "Communauté privée", dir: "communaute" },
];

export default function RessourcesPage() {
  const sections = SOUS_SECTIONS.map((s) => ({
    ...s,
    fichiers: readContentDirMarkdown(s.dir).map((filename) => ({
      filename,
      slug: filename.replace(/\.md$/, ""),
      titre: labelFor(filename),
      contenu: readContentFile(`${s.dir}/${filename}`),
    })),
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-titres text-3xl font-extrabold text-ink sm:text-4xl">Ressources</h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Glossaire, FAQ, sondage, programme, certification et communauté — tout ce qui est
        commun aux 6 modules.
      </p>

      <nav className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="font-titres mb-3 text-sm font-bold uppercase tracking-wide text-ink/50">
          Sommaire
        </h2>
        <ul className="space-y-3">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="font-bold text-violet hover:text-corail">
                {s.titre}
              </a>
              <ul className="mt-1 space-y-1 pl-4">
                {s.fichiers.map((f) => (
                  <li key={f.slug}>
                    <a href={`#${s.id}-${f.slug}`} className="text-sm text-ink/70 hover:text-corail">
                      {f.titre}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="mt-12">
          <h2 className="font-titres mb-5 border-b border-ink/10 pb-2 text-2xl font-bold text-ink">
            {s.titre}
          </h2>
          {s.fichiers.length === 0 ? (
            <p className="text-sm text-ink/50">Aucun fichier disponible pour le moment.</p>
          ) : (
            <div className="space-y-8">
              {s.fichiers.map((f) => (
                <article key={f.slug} id={`${s.id}-${f.slug}`} className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="font-titres mb-4 text-lg font-bold text-violet">{f.titre}</h3>
                  {f.contenu ? (
                    <Markdown content={f.contenu} />
                  ) : (
                    <p className="text-sm text-ink/50">Contenu indisponible.</p>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
