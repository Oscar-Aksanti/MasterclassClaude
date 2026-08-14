// Liste récursivement les fichiers téléchargeables sous plateforme-web/public/downloads/<relativeDir>.
// Retourne des liens prêts à l'emploi (/downloads/...), pour tout fichier réellement présent sur disque.
import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");

export function listDownloads(relativeDir) {
  const rootPath = path.join(PUBLIC_DIR, "downloads", relativeDir);
  const results = [];

  function walk(absDir, relPath) {
    if (!fs.existsSync(absDir)) return;
    const entries = fs
      .readdirSync(absDir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name, "fr"));
    for (const entry of entries) {
      const abs = path.join(absDir, entry.name);
      const rel = relPath ? `${relPath}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        walk(abs, rel);
      } else {
        const stat = fs.statSync(abs);
        results.push({
          name: rel,
          href: `/downloads/${relativeDir}/${rel}`,
          ext: path.extname(entry.name).slice(1).toLowerCase(),
          sizeKB: Math.max(1, Math.round(stat.size / 1024)),
        });
      }
    }
  }

  walk(rootPath, "");
  return results;
}

export function fileExistsInPublic(relativeHref) {
  const abs = path.join(PUBLIC_DIR, relativeHref.replace(/^\//, ""));
  return fs.existsSync(abs);
}

export const EXT_LABELS = {
  pdf: "PDF",
  docx: "Word",
  doc: "Word",
  xlsx: "Excel",
  xls: "Excel",
  csv: "CSV",
  md: "Markdown",
  json: "JSON",
  py: "Python",
  html: "HTML",
  css: "CSS",
  txt: "Texte",
  pptx: "PowerPoint",
};
