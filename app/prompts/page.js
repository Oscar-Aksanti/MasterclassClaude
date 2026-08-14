import { readJsonContent, readContentFile } from "@/lib/content";
import PromptsExplorer from "@/components/PromptsExplorer";
import Markdown from "@/components/Markdown";
import CollapsibleSection from "@/components/CollapsibleSection";

export const metadata = {
  title: "Les 100 prompts professionnels — Claude AI Mastery 2.0",
};

export default function PromptsPage() {
  const prompts = readJsonContent("prompts.json") ?? [];
  const parCategorie = readContentFile("prompts-par-categorie.md");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-titres text-3xl font-extrabold text-ink sm:text-4xl">
        Les 100 prompts professionnels
      </h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Recherche par mot-clé, filtres par catégorie / niveau / module, copie en un clic.
      </p>
      <div className="mt-8">
        <PromptsExplorer prompts={prompts} />
      </div>
      {parCategorie && (
        <div className="mt-10">
          <CollapsibleSection title="Version imprimable, classée par catégorie">
            <Markdown content={parCategorie} />
          </CollapsibleSection>
        </div>
      )}
    </div>
  );
}
