<!-- Contenu Phase 2 — verrouille la trame narrative utilisée dans les modules/ (Phase 3/4). Ne pas changer le persona une fois les modules rédigés : toute modification ici doit être répercutée dans les 6 modules. -->

# Parcours & Portfolio IA Professionnel du participant

Ce document verrouille deux choses qui doivent rester identiques du Module 1 au Module 6 : **le persona récurrent** (fil narratif des démonstrations et études de cas) et **la structure du Portfolio IA Professionnel** (le livrable cumulatif que chaque participant construit en parallèle de sa propre situation).

## 1. Le persona récurrent

> **Fatou Diallo, 34 ans, consultante indépendante en gestion de projets, basée à Dakar.**

**Contexte :** Fatou a quitté un poste de cheffe de projet en entreprise il y a deux ans pour se lancer en freelance. Elle accompagne aujourd'hui 5 à 6 PME clientes (distribution, agroalimentaire, services) sur leur organisation et leur pilotage d'activité. Elle n'est pas informaticienne — elle est excellente sur le terrain métier, mais elle perd un temps considérable sur des tâches répétitives à faible valeur : rapports mensuels sous Excel, comptes-rendus de réunion, relances clients, mise en forme de propositions commerciales.

**Pourquoi ce persona et pas un autre :** le public de la formation est majoritairement non technique et hétérogène (comptables, chefs de projet, analystes, entrepreneurs — voir les profils des témoignages de la page de vente : comptable en RDC, data analyst au Mali, chef de projets en Côte d'Ivoire). Fatou est délibérément généraliste côté métier (gestion de projet/conseil) mais ses problèmes — reporting chronophage, communication répétitive, envie de proposer plus de valeur analytique à ses clients sans savoir coder, besoin de vendre mieux ses compétences — sont reconnaissables par *tous* les profils de la cohorte, quel que soit leur secteur. C'est un point d'identification, pas un carcan : chaque participant transpose l'exercice à sa propre situation, Fatou sert de fil rouge dans les démonstrations et les études de cas.

**Ce qui NE change JAMAIS d'un module à l'autre :**
- Son prénom, son métier, sa ville, ses clients (PME en distribution/agroalimentaire/services).
- Le jeu de données de son client "distribution" (introduit au Module 3 dans `modules/module-3-data-analyst/06-exercices/`, réutilisé identique aux Modules 4 et 5 — indexé aussi depuis `ressources-transverses/datasets/`).
- Sa "douleur" initiale : elle vend son temps, pas son expertise, parce qu'elle est engluée dans l'opérationnel répétitif.

### Comment Fatou traverse les 6 modules

| Module | Ce que fait Fatou | Ce que le participant reproduit sur SON métier |
|---|---|---|
| 1 — Écosystème Claude | Configure Claude Code, crée une Skill "Compte-rendu de réunion client", connecte Google Drive en MCP | Son propre environnement Claude, adapté à ses outils |
| 2 — Prompting expert | Reprend 3 emails/relances qu'elle envoie chaque semaine et les transforme en prompts réutilisables avec la méthode C.L.A.R.T.É | Sa propre bibliothèque de prompts à partir de SES tâches répétitives |
| 3 — Data Analyst | Reçoit un export de ventes sale de son client "distribution" (6 mois, doublons, valeurs manquantes) et en tire 3 recommandations | Analyse d'un jeu de données réel de son propre contexte (ou le dataset fourni si le participant n'en a pas) |
| 4 — Solutions numériques | Transforme son analyse en dashboard Streamlit qu'elle peut envoyer par lien à son client, plus une page vitrine pour son nouveau positionnement "conseil augmenté à l'IA" | Son propre dashboard ou site déployé |
| 5 — Automatisation | Automatise la génération de son rapport mensuel client (Google Sheets → résumé Claude → envoi Notion/WhatsApp) | Sa propre automatisation, sur une tâche réellement répétitive |
| 6 — Monétisation | Package tout ça en une nouvelle offre "reporting augmenté à l'IA", révise ses tarifs, prépare son positionnement LinkedIn | Sa propre stratégie de valorisation à 90 jours |

**Consigne pour l'animateur (voir aussi `kit-animateur/`) :** commencer chaque session par une phrase de rappel narratif ("Rappelez-vous, Fatou avait...") avant d'introduire la nouveauté du jour — ce callback prend 30 secondes et ancre la progressivité pédagogique dans la tête des participants.

## 2. Le Portfolio IA Professionnel (livrable cumulatif du participant)

Chaque module produit **une pièce** de ce portfolio. Il ne se construit pas d'un coup au Module 6 : c'est le fil qui donne un sens cumulatif aux 6 sessions, et c'est ce que le participant montre à son employeur ou à un client en fin de formation.

### Format recommandé

Une page unique (Notion, gratuit, lien partageable) — gabarit fourni dans `ressources-transverses/templates-notion/`. Alternative pour qui préfère un document : un PDF one-pager basé sur le gabarit `00-marque-et-design/gabarit-pdf-workbook.md`.

### Structure imposée (6 sections + 1 page de garde)

```
PORTFOLIO IA PROFESSIONNEL — [Prénom NOM]
─────────────────────────────────────────
0. À propos — Avant / Après
   "Avant Claude AI Mastery : [1 phrase sur la situation de départ]"
   "Après : [1 phrase sur ce qui a changé concrètement]"

1. Mon environnement Claude professionnel        (Module 1)
   → capture d'écran : Claude Code installé, 1 Skill créée, 1 MCP connecté

2. Ma bibliothèque de prompts                     (Module 2)
   → lien vers le document de 15+ prompts personnels (C.L.A.R.T.É)

3. Mon projet d'analyse de données                (Module 3)
   → dataset avant/après nettoyage + 3 insights + 1 visualisation

4. Mon application ou site déployé                (Module 4)
   → lien URL fonctionnel (dashboard ou site)

5. Mon automatisation réelle                       (Module 5)
   → capture d'écran du scénario actif + preuve de test réussi

6. Ma stratégie de valorisation à 90 jours          (Module 6)
   → positionnement choisi + 3 actions concrètes sous 2 semaines
```

### Règles de production

- **Chaque module se termine par l'instruction explicite** : "ajoutez ceci à la section N de votre portfolio" — ne jamais laisser le remplissage du portfolio à la fin.
- Le portfolio est présenté au Module 6 comme un objet déjà quasiment complet à assembler et polir, pas à créer de zéro — c'est ce qui rend le Module 6 réalisable en une seule session.
- Le lien ou fichier du portfolio est ce qui est vérifié pour la certification (voir `certification/criteres-obtention.md`, Phase 8) — au moins 4 des 6 sections renseignées pour une certification standard.
- Le gabarit Notion doit reprendre la charte graphique (couleurs, coins arrondis) dans la mesure des capacités de personnalisation de Notion — sinon rester sobre plutôt que d'improviser une autre identité visuelle.
