# Fiche pédagogique — Module 2 — Communiquer avec Claude comme un expert : prompts, méthodes et workflows

**Session 2 · Mercredi 19 août 2026 · 18h00–19h45 GMT · Teams**

## Objectifs pédagogiques

À la fin de cette session, chaque participant est capable de :

1. **Construire** un prompt complet avec la méthode C.L.A.R.T.É (Contexte, Livrable attendu, Audience, Restrictions, Ton, Exemples) au lieu d'un prompt "one-shot" imprécis.
2. **Distinguer** poser une question ponctuelle et confier une mission à Claude, et savoir quand demander un raisonnement étape par étape avant l'exécution.
3. **Transformer** un bon prompt ponctuel en gabarit réutilisable avec des `{variables}`.
4. **Enchaîner** un workflow multi-étapes (brief → brouillon → critique → version finale) plutôt que d'attendre un résultat parfait en un seul message.
5. **Faire analyser** un document réel (PDF/Word/Excel) par Claude pour en extraire une synthèse structurée, sans tout recopier à la main.

## Prérequis

- Module 1 terminé : Claude Code installé, au moins une Skill créée, un connecteur MCP testé (voir `modules/module-1-ecosysteme-claude/01-fiche-pedagogique.md`).
- Avoir identifié, pendant le défi en autonomie du Module 1, une ou deux tâches répétitives de son propre métier — cette session s'appuie directement sur ce repérage.
- Un compte Claude.ai actif (mois d'accès inclus).

## Matériel nécessaire côté participant

- Ordinateur portable, connexion stable, Claude.ai (et Claude Code si utilisé au Module 1) ouverts.
- Trois exemples réels et personnels de tâches d'écriture répétitives (un email, une demande d'aide sur un tableau, une rédaction quelconque) — à défaut, les 3 mauvais prompts fournis dans `06-exercices/exercice-guide-depart.md` suffisent.
- Le fichier `06-exercices/extrait-contrat-DELTA.md` ouvert avant la session (pour l'exercice d'analyse de document).

## Lien avec le fil narratif et le portfolio

Cette session reprend **Fatou Diallo** (voir `01-programme/parcours-portfolio-participant.md`) au moment où elle a un environnement Claude configuré (Module 1) mais tape encore des prompts approximatifs, différents chaque fois, sans jamais les réutiliser. Le livrable de cette session alimente la **Section 2 du Portfolio IA Professionnel** ("Ma bibliothèque de prompts").

## Livrable attendu

**Une bibliothèque personnelle de 15+ prompts testés**, construits avec la méthode C.L.A.R.T.É, classés par usage :

- [ ] Au moins 15 prompts personnels rédigés avec C.L.A.R.T.É (pas copiés depuis la démonstration)
- [ ] Chaque prompt transformé en gabarit réutilisable avec au moins une `{variable}`
- [ ] Les 3 mauvais prompts de l'exercice guidé retravaillés et comparés (avant/après)
- [ ] Un workflow multi-étapes documenté sur une tâche personnelle (brief → brouillon → critique → version finale)
- [ ] Le document ajouté ou lié à la **Section 2** du Portfolio IA Professionnel

Critères de complétion détaillés : `10-grille-evaluation-livrable.md`.

## Erreurs fréquentes à anticiper (côté animateur)

- **Confondre "plus long" et "plus précis"** : un prompt C.L.A.R.T.É complet n'est pas un prompt verbeux — insister sur le fait que chaque lettre du framework doit apporter une information utile, pas une formule de politesse.
- **Sauter l'étape Audience** : beaucoup de participants savent décrire ce qu'ils veulent (Livrable) mais oublient de préciser à qui le résultat s'adresse — c'est souvent ce qui change le plus le ton et le niveau de détail obtenu.
- **Vouloir un résultat parfait en un seul message** : rappeler que le workflow brief → brouillon → critique → version finale est plus rapide *au total* qu'un prompt géant réécrit 6 fois depuis zéro.
- **Copier-coller un document entier dans le chat au lieu de l'uploader** : montrer explicitement qu'uploader le fichier (PDF/Word/Excel) donne un résultat plus fiable que de copier un extrait à la main, surtout sur un document de plusieurs pages.

## Plan de la session

Voir `02-run-of-show-session.md` pour le minutage détaillé. Structure en 5 blocs (105 min) : Reconnexion (10) → Mini-concept C.L.A.R.T.É (15) → Démonstration commentée (35) → Pratique guidée (35) → Défi + clôture (10).
