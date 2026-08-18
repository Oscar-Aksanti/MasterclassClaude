#!/usr/bin/env node
// Script de synchronisation du contenu source -> plateforme-web/content et plateforme-web/public.
// Ce script ne fait que LIRE les dossiers sources (racine du dépôt, un niveau au-dessus de
// plateforme-web/) et ECRIT uniquement dans plateforme-web/content et plateforme-web/public.
// Il ne modifie jamais les fichiers sources. À relancer après toute mise à jour du contenu source
// (voir README.md, section "Mettre à jour le contenu").

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(WEB_ROOT, "..");

const CONTENT_DIR = path.join(WEB_ROOT, "content");
const PUBLIC_DIR = path.join(WEB_ROOT, "public");
const DOWNLOADS_DIR = path.join(PUBLIC_DIR, "downloads");

// Garde-fou déploiement : si ce script tourne dans un environnement où seul le dossier
// plateforme-web/ a été mis à disposition (ex. Vercel avec "Root Directory" = plateforme-web
// et l'option "Include files outside root directory" désactivée, ou un déploiement CLI lancé
// depuis l'intérieur de plateforme-web/), les dossiers sources (../modules, ../kit-animateur,
// etc.) n'existent pas sur la machine de build. Dans ce cas, NE PAS vider content/ et
// public/downloads/ : on préserve les fichiers déjà committés (résultat d'une synchronisation
// précédente faite en local) plutôt que de déployer un site vidé de tout son contenu.
if (!fs.existsSync(path.join(REPO_ROOT, "modules"))) {
  console.warn(
    "! Dossiers sources introuvables (racine du dépôt non disponible dans cet environnement de build).\n" +
    "  Synchronisation ignorée — le contenu déjà présent dans content/ et public/downloads/\n" +
    "  (committé lors d'une synchronisation précédente en local) est conservé tel quel.\n" +
    "  Pensez à relancer `node scripts/sync-content.mjs` en local après toute mise à jour du\n" +
    "  contenu source, puis à committer content/ et public/downloads/ avant de déployer."
  );
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Utilitaires
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function exists(p) {
  return fs.existsSync(p);
}

function copyFile(src, dest) {
  if (!exists(src)) {
    console.warn(`  ! introuvable, ignoré : ${path.relative(REPO_ROOT, src)}`);
    return false;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  return true;
}

function copyDirRecursive(srcDir, destDir) {
  if (!exists(srcDir)) {
    console.warn(`  ! dossier introuvable, ignoré : ${path.relative(REPO_ROOT, srcDir)}`);
    return;
  }
  ensureDir(destDir);
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      ensureDir(destDir);
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyTopLevelFiles(srcDir, destDir, { extensions = null } = {}) {
  if (!exists(srcDir)) {
    console.warn(`  ! dossier introuvable, ignoré : ${path.relative(REPO_ROOT, srcDir)}`);
    return;
  }
  ensureDir(destDir);
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (extensions && !extensions.some((ext) => entry.name.toLowerCase().endsWith(ext))) continue;
    fs.copyFileSync(path.join(srcDir, entry.name), path.join(destDir, entry.name));
  }
}

function resetDir(dir) {
  if (exists(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  ensureDir(dir);
}

// ---------------------------------------------------------------------------
// 0. Réinitialisation des dossiers de destination (source de vérité = dossiers sources)
// ---------------------------------------------------------------------------

console.log("Synchronisation du contenu source vers plateforme-web/content et plateforme-web/public...\n");

resetDir(CONTENT_DIR);
resetDir(DOWNLOADS_DIR);

// ---------------------------------------------------------------------------
// 1. Modules (6 dossiers)
// ---------------------------------------------------------------------------

const MODULE_FOLDERS = [
  "module-1-ecosysteme-claude",
  "module-2-prompting-expert",
  "module-3-data-analyst",
  "module-4-solutions-numeriques",
  "module-5-automatisation",
  "module-6-monetisation",
];

const MODULE_CONTENT_FILES = [
  "04-lecon-ecrite-complete.md",
  "07-etude-de-cas.md",
  "10-grille-evaluation-livrable.md",
  "11-quiz-autoevaluation.md",
  "08-prompts-du-module.md",
  "01-fiche-pedagogique.md",
];

console.log("Modules...");
MODULE_FOLDERS.forEach((folder, idx) => {
  const n = idx + 1;
  const srcModuleDir = path.join(REPO_ROOT, "modules", folder);
  const destModuleSlug = `module-${n}`;

  // Fichiers de contenu Markdown -> content/modules/module-N/
  const destContentDir = path.join(CONTENT_DIR, "modules", destModuleSlug);
  ensureDir(destContentDir);
  MODULE_CONTENT_FILES.forEach((filename) => {
    copyFile(path.join(srcModuleDir, filename), path.join(destContentDir, filename));
  });

  // Exercices -> public/downloads/module-N/exercices/ (récursif, tous formats)
  copyDirRecursive(
    path.join(srcModuleDir, "06-exercices"),
    path.join(DOWNLOADS_DIR, destModuleSlug, "exercices")
  );

  // Ressources téléchargeables -> public/downloads/module-N/ressources/ (récursif, tous formats)
  copyDirRecursive(
    path.join(srcModuleDir, "09-ressources-telechargeables"),
    path.join(DOWNLOADS_DIR, destModuleSlug, "ressources")
  );

  // Slides -> public/downloads/module-N/
  copyFile(
    path.join(srcModuleDir, "03-support-slides.pptx"),
    path.join(DOWNLOADS_DIR, destModuleSlug, "03-support-slides.pptx")
  );
  copyFile(
    path.join(srcModuleDir, "03-support-slides.pdf"),
    path.join(DOWNLOADS_DIR, destModuleSlug, "03-support-slides.pdf")
  );

  console.log(`  ✓ ${destModuleSlug} (${folder})`);
});

// ---------------------------------------------------------------------------
// 2. Bibliothèque des 100 prompts
// ---------------------------------------------------------------------------

console.log("\nBibliothèque des 100 prompts...");
copyFile(
  path.join(REPO_ROOT, "bibliotheque-100-prompts", "prompts.json"),
  path.join(CONTENT_DIR, "prompts.json")
);
copyFile(
  path.join(REPO_ROOT, "bibliotheque-100-prompts", "prompts-par-categorie.md"),
  path.join(CONTENT_DIR, "prompts-par-categorie.md")
);

// ---------------------------------------------------------------------------
// 3. Manuel complet
// ---------------------------------------------------------------------------

console.log("Manuel complet...");
copyTopLevelFiles(
  path.join(REPO_ROOT, "manuel-complet"),
  path.join(DOWNLOADS_DIR, "manuel"),
  { extensions: [".docx", ".pdf"] }
);

// ---------------------------------------------------------------------------
// 4. Ressources transverses / programme / certification / communauté
// ---------------------------------------------------------------------------

console.log("Ressources transverses, programme, certification, communauté...");
copyTopLevelFiles(
  path.join(REPO_ROOT, "ressources-transverses"),
  path.join(CONTENT_DIR, "ressources"),
  { extensions: [".md"] }
);
copyTopLevelFiles(
  path.join(REPO_ROOT, "01-programme"),
  path.join(CONTENT_DIR, "programme"),
  { extensions: [".md"] }
);
copyTopLevelFiles(
  path.join(REPO_ROOT, "certification"),
  path.join(CONTENT_DIR, "certification"),
  { extensions: [".md"] }
);
copyTopLevelFiles(
  path.join(REPO_ROOT, "communaute-privee"),
  path.join(CONTENT_DIR, "communaute"),
  { extensions: [".md"] }
);

// ---------------------------------------------------------------------------
// 5. Kit animateur (garde la structure des sous-dossiers)
// ---------------------------------------------------------------------------

console.log("Kit animateur...");
copyTopLevelFiles(
  path.join(REPO_ROOT, "kit-animateur"),
  path.join(CONTENT_DIR, "kit-animateur"),
  { extensions: [".md"] }
);
copyTopLevelFiles(
  path.join(REPO_ROOT, "kit-animateur", "slides-animateur"),
  path.join(CONTENT_DIR, "kit-animateur", "slides-animateur"),
  { extensions: [".md"] }
);
// Versions Word/PDF imprimables (mêmes fichiers, formats réels) -> téléchargements
copyTopLevelFiles(
  path.join(REPO_ROOT, "kit-animateur"),
  path.join(DOWNLOADS_DIR, "kit-animateur"),
  { extensions: [".docx", ".pdf"] }
);
copyTopLevelFiles(
  path.join(REPO_ROOT, "kit-animateur", "slides-animateur"),
  path.join(DOWNLOADS_DIR, "kit-animateur", "slides-animateur"),
  { extensions: [".docx", ".pdf"] }
);

// ---------------------------------------------------------------------------
// 6. Marque et design (affiche source + gabarit slide master)
// ---------------------------------------------------------------------------

console.log("Marque et design...");
copyFile(
  path.join(REPO_ROOT, "00-marque-et-design", "logo-et-assets", "affiche-source-claude-ai-mastery.png"),
  path.join(PUBLIC_DIR, "affiche-source.png")
);
copyFile(
  path.join(REPO_ROOT, "00-marque-et-design", "gabarit-slide-master.pptx"),
  path.join(DOWNLOADS_DIR, "gabarit-slide-master.pptx")
);

console.log("\nSynchronisation terminée.");
