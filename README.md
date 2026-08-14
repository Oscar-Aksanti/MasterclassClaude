# Plateforme web — Claude AI Mastery 2.0

Application Next.js (App Router, JavaScript, Tailwind v4) qui centralise tout le contenu de la
formation « Claude AI Mastery 2.0 » : les 6 modules (slides, leçons, études de cas, exercices,
ressources téléchargeables), la bibliothèque des 100 prompts, le manuel complet, les ressources
transverses, le kit animateur et le tracker de Portfolio IA Professionnel.

Le contenu réel (fichiers `.md`, `.pptx`, `.pdf`, `.docx`, `.xlsx`, `.json`, code…) vit dans le
dépôt de production à la racine (`../modules/`, `../bibliotheque-100-prompts/`, etc.) et n'est
**jamais dupliqué à la main** : un script de synchronisation copie tout automatiquement dans
`content/` (Markdown/JSON lus côté serveur) et `public/downloads/` (fichiers téléchargeables,
servis statiquement par Next.js/Vercel) avant chaque build.

## Démarrage local

```bash
npm install
npm run dev
```

`npm run dev` ne relance pas automatiquement la synchronisation du contenu (le hook `prebuild`
ne se déclenche que sur `npm run build`). Si vous travaillez en local sur du contenu source
fraîchement modifié, lancez d'abord :

```bash
npm run sync-content
```

## Déploiement sur Vercel

1. Poussez ce dépôt entier (`MasterClass Claude/`, pas seulement `plateforme-web/`) sur GitHub —
   le script de synchronisation lit les dossiers sources un niveau au-dessus de
   `plateforme-web/` (`../modules/`, `../bibliotheque-100-prompts/`, `../manuel-complet/`, etc.),
   ils doivent donc être présents dans le même dépôt.
2. Sur Vercel, créez un nouveau projet à partir de ce dépôt GitHub.
3. Dans les réglages du projet, **Root Directory** → `plateforme-web`.
4. Le Framework Preset (« Next.js ») est détecté automatiquement. Aucune variable
   d'environnement n'est nécessaire (pas de base de données, pas d'authentification).
5. Déployez. Le build Vercel exécute automatiquement `npm run build`, qui déclenche le hook
   `prebuild` (`node scripts/sync-content.mjs`) avant `next build` — le contenu est donc toujours
   synchronisé à partir des dossiers sources au moment du build, sans étape manuelle.

## Mettre à jour le contenu après une modification des fichiers source

Le contenu affiché par la plateforme n'est jamais édité directement dans `plateforme-web/` :
1. Modifiez le fichier source à sa place d'origine (ex. `modules/module-3-data-analyst/04-lecon-ecrite-complete.md`).
2. Relancez `npm run sync-content` (ou faites confiance au hook `prebuild` au prochain
   `npm run build` / prochain déploiement Vercel).
3. Commitez et poussez — Vercel redéploiera avec le contenu à jour.

Le script (`scripts/sync-content.mjs`) écrase entièrement `content/` et `public/downloads/` à
chaque exécution (source de vérité = dossiers originaux) : il ne fait que **lire** les dossiers
sources, jamais les modifier.

## Où vit quoi

| Dossier | Contenu | Consommé par |
|---|---|---|
| `content/modules/module-N/` | Leçon, étude de cas, grille d'évaluation, quiz, prompts, fiche pédagogique (Markdown) | `app/modules/[slug]/page.js` |
| `content/prompts.json` | Les 100 prompts (schéma complet) | `app/prompts/page.js` |
| `content/ressources/`, `content/programme/`, `content/certification/`, `content/communaute/` | Ressources transverses | `app/ressources/page.js` |
| `content/kit-animateur/` | Run-of-show, notes présentateur, FAQ/objections, checklist technique | `app/kit-animateur/page.js` |
| `public/downloads/module-N/` | Slides (`.pptx`/`.pdf`), `exercices/`, `ressources/` (tous formats, sous-dossiers inclus) | Boutons de téléchargement + `<iframe>` |
| `public/downloads/manuel/` | Manuel complet (`.docx`/`.pdf`) | `app/manuel/page.js` |
| `public/affiche-source.png` | Affiche officielle source | Référence visuelle |

## Limites connues

- **Pas de recherche plein texte côté serveur.** La recherche de `/prompts` filtre côté client
  sur les 100 prompts chargés en une fois depuis `content/prompts.json` — largement suffisant
  pour ce volume, mais ne s'étend pas au contenu des leçons/études de cas.
- **`localStorage` par appareil et par navigateur.** Le tracker `/portfolio` ne synchronise rien
  entre appareils ou navigateurs : c'est un choix délibéré (pas de compte, pas de serveur), mais
  cela veut dire qu'un participant qui change d'ordinateur repart de zéro sur cette page.
- **Aucune base de données, aucune authentification.** Le site est un site de contenu statique
  côté données (Markdown/JSON lus au moment du build ou de la requête) — aucune donnée
  utilisateur n'est envoyée à un serveur, hormis le `localStorage` du navigateur.
- **Les aperçus PDF (`<iframe>`) dépendent du visualiseur PDF natif du navigateur** — pas de
  librairie PDF.js embarquée. Le rendu peut légèrement varier d'un navigateur à l'autre, mais le
  bouton de téléchargement reste toujours disponible en complément.

## Charte graphique

Les couleurs, la typographie et les éléments graphiques récurrents (grille filigrane, puces
corail, encadrés sombres « À retenir », coins très arrondis) suivent
`../00-marque-et-design/charte-graphique.md` — source de vérité unique, définie via un bloc
`@theme` dans `app/globals.css` (`--color-cream`, `--color-ink`, `--color-violet`,
`--color-indigo`, `--color-corail`).
