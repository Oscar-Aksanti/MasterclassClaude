import { readContentFile } from "@/lib/content";
import Markdown from "@/components/Markdown";
import CollapsibleSection from "@/components/CollapsibleSection";
import DarkCallout from "@/components/DarkCallout";

export const metadata = {
  title: "Kit animateur — Claude AI Mastery 2.0",
};

const SESSIONS = [1, 2, 3, 4, 5, 6];

function DownloadPair({ basePath, label }) {
  return (
    <div className="mb-4 flex flex-wrap gap-3">
      <a
        href={`${basePath}.docx`}
        download
        className="rounded-full bg-violet px-4 py-2 text-xs font-bold text-white transition hover:opacity-90"
      >
        Télécharger {label} .docx
      </a>
      <a
        href={`${basePath}.pdf`}
        download
        className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-bold text-ink transition hover:border-corail hover:text-corail"
      >
        Télécharger {label} .pdf
      </a>
    </div>
  );
}

export default function KitAnimateurPage() {
  const runOfShows = SESSIONS.map((n) => ({
    n,
    contenu: readContentFile(`kit-animateur/run-of-show-session-${n}.md`),
  }));
  const notesPresentateur = SESSIONS.map((n) => ({
    n,
    contenu: readContentFile(`kit-animateur/slides-animateur/module-${n}-notes.md`),
  }));
  const faqObjections = readContentFile("kit-animateur/script-faq-objections.md");
  const checklistTechnique = readContentFile("kit-animateur/checklist-technique-avant-live.md");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-titres text-3xl font-extrabold text-ink sm:text-4xl">Kit animateur</h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Section réservée au formateur : run-of-show, notes présentateur, script FAQ/objections et
        checklist technique.
      </p>

      <div className="mt-6">
        <DarkCallout title="Usage">
          <p>
            Ce contenu ne duplique jamais ce qui est déjà écrit dans les modules — il y renvoie
            précisément par nom de fichier. À consulter avant et pendant chaque session live.
            Chaque section est aussi téléchargeable en Word/PDF pour être imprimée ou annotée.
          </p>
        </DarkCallout>
      </div>

      <section className="mt-12">
        <h2 className="font-titres mb-5 border-b border-ink/10 pb-2 text-2xl font-bold text-ink">
          Run-of-show par session
        </h2>
        <div className="space-y-4">
          {runOfShows.map((r) => (
            <CollapsibleSection key={r.n} title={`Session ${r.n} — Run-of-show`}>
              <DownloadPair
                basePath={`/downloads/kit-animateur/run-of-show-session-${r.n}`}
                label={`Session ${r.n}`}
              />
              {r.contenu ? <Markdown content={r.contenu} /> : <p className="text-sm text-ink/50">Contenu indisponible.</p>}
            </CollapsibleSection>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-titres mb-5 border-b border-ink/10 pb-2 text-2xl font-bold text-ink">
          Notes présentateur par module
        </h2>
        <div className="space-y-4">
          {notesPresentateur.map((r) => (
            <CollapsibleSection key={r.n} title={`Module ${r.n} — Notes présentateur`}>
              <DownloadPair
                basePath={`/downloads/kit-animateur/slides-animateur/module-${r.n}-notes`}
                label={`Module ${r.n}`}
              />
              {r.contenu ? <Markdown content={r.contenu} /> : <p className="text-sm text-ink/50">Contenu indisponible.</p>}
            </CollapsibleSection>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-titres mb-5 border-b border-ink/10 pb-2 text-2xl font-bold text-ink">
          Script FAQ / objections
        </h2>
        <DownloadPair basePath="/downloads/kit-animateur/script-faq-objections" label="le script" />
        {faqObjections ? <Markdown content={faqObjections} /> : <p className="text-sm text-ink/50">Contenu indisponible.</p>}
      </section>

      <section className="mt-12">
        <h2 className="font-titres mb-5 border-b border-ink/10 pb-2 text-2xl font-bold text-ink">
          Checklist technique avant live
        </h2>
        <DownloadPair basePath="/downloads/kit-animateur/checklist-technique-avant-live" label="la checklist" />
        {checklistTechnique ? (
          <Markdown content={checklistTechnique} />
        ) : (
          <p className="text-sm text-ink/50">Contenu indisponible.</p>
        )}
      </section>
    </div>
  );
}
