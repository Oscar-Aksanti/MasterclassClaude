// Utilitaires de lecture du contenu Markdown synchronisé dans plateforme-web/content/
// (voir scripts/sync-content.mjs). Usage exclusivement côté serveur (Node fs).
import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Les fichiers source commencent par un commentaire HTML de production
// (<!-- Contenu Phase X — ... -->), potentiellement multi-lignes et répété
// plusieurs fois dans le document. Il ne doit jamais apparaître sur une page rendue.
export function stripProductionComments(markdown) {
  if (!markdown) return "";
  return markdown.replace(/<!--[\s\S]*?-->/g, "").trim();
}

export function readContentFile(relativePath) {
  const fullPath = path.join(CONTENT_DIR, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  return stripProductionComments(raw);
}

export function readContentDirMarkdown(relativeDir) {
  const fullPath = path.join(CONTENT_DIR, relativeDir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name)
    .sort();
}

export function readJsonContent(relativePath) {
  const fullPath = path.join(CONTENT_DIR, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  return JSON.parse(fs.readFileSync(fullPath, "utf-8"));
}
