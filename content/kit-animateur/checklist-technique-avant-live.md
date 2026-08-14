<!-- Contenu Phase 6 — consolide en un seul document les checklists "Matériel à préparer" déjà écrites au bas de chaque modules/module-X/02-run-of-show-session.md, pour que l'animateur n'ait qu'un seul fichier à dérouler avant d'ouvrir Teams. Les détails fins restent dans le fichier du module si besoin de recontextualiser. -->

# Checklist technique avant chaque session live

**À dérouler entièrement 30 minutes avant chaque session, sans exception — y compris pour les sessions qui semblent "faciles".** La majorité des incidents live viennent d'une connexion testée la veille mais pas le jour même.

## 1. Checklist générique (les 6 sessions, sans exception)

- [ ] Connexion internet stable vérifiée — idéalement filaire plutôt que Wi-Fi pour l'animateur, avec une connexion de secours identifiée (partage de connexion mobile) en cas de coupure.
- [ ] Microsoft Teams ouvert, micro et caméra testés, partage d'écran testé sur l'application réellement utilisée en démo (pas seulement sur le bureau).
- [ ] Notifications désactivées sur tout l'appareil de démonstration (emails, messages, mises à jour) — une notification personnelle visible pendant un partage d'écran à 65 personnes est l'incident le plus fréquent et le plus évitable.
- [ ] Claude Code / Claude.ai / Claude Cowork déjà connectés avec le compte de démonstration (pas de connexion à faire en direct, sauf quand la connexion elle-même est le sujet de la démo — voir Module 1).
- [ ] Le lien Teams unique de la cohorte vérifié dans le calendrier — envoyer un rappel dans la communauté 1h avant si ce n'est pas déjà automatisé.
- [ ] Le fichier `kit-animateur/run-of-show-session-N.md` du jour ouvert, ainsi que `05-demo-commentee.md` et les fichiers d'exercice correspondants du module.
- [ ] Une bouteille d'eau et un chronomètre/minuteur visible — 1h45 de présentation continue se ressent, et le minutage par bloc doit rester visible sans avoir à faire le calcul mentalement.

## 2. Checklist spécifique par module

### Module 1 — Écosystème Claude (Session 1)
- [ ] Une machine "propre" (ou VM/second compte) prête pour montrer l'installation de Claude Code depuis zéro, sans tricher.
- [ ] Les notes brutes de réunion désordonnées de Fatou prêtes à copier-coller (`05-demo-commentee.md`).
- [ ] Compte Google de démonstration avec au moins 1 document Drive réaliste pour la démo MCP.
- [ ] Une conversation Claude.ai déjà longue préparée en amont pour illustrer la saturation de contexte sans attendre 20 minutes en live.

### Module 2 — Prompting expert (Session 2)
- [ ] Les 3 mauvais prompts de l'exercice prêts à copier-coller.
- [ ] Le brouillon de proposition commerciale de Fatou déjà préparé.
- [ ] `extrait-contrat-DELTA.md` téléchargé et prêt à être uploadé dans Claude.ai en direct.
- [ ] Le gabarit C.L.A.R.T.É ouvert et prêt à être montré à l'écran.

### Module 3 — Data Analyst (Session 3)
- [ ] `ventes-delta-distribution-brut.xlsx` ouvert et prêt à partager — **ne pas ouvrir la version nettoyée avant d'avoir montré le nettoyage en direct** (effet avant/après nécessaire pédagogiquement).
- [ ] Base ventes/clients simplifiée prête pour la démo SQL.
- [ ] Google Sheets ou Power BI Desktop déjà connecté au fichier nettoyé pour la démo dashboard.

### Module 4 — Solutions numériques (Session 4)
- [ ] `app-depart/` et `app-solution/` déjà testés sur la machine de démonstration.
- [ ] Compte GitHub et compte Streamlit Community Cloud de démonstration déjà créés et loggés.
- [ ] `site-vitrine/` prêt à être adapté en direct, charte graphique en tête ou affichée sur un second écran.
- [ ] Terminal en grande taille de police (lisibilité à distance pour 65 participants).
- [ ] **Plan B déploiement :** si le déploiement en direct échoue pour une raison réseau, montrer une capture d'écran d'un déploiement déjà réussi en amont plutôt que de déboguer 10 minutes un problème de plateforme non pédagogique.

### Module 5 — Automatisation (Session 5)
- [ ] Google Sheets "Suivi hebdo DELTA" pré-rempli (3-4 semaines d'historique) + une ligne vierge prête à déclencher le scénario en direct.
- [ ] Compte Make déjà connecté à Google Sheets, Notion et WhatsApp Business (ou compte de test) — **connexions testées avant la session**, jamais d'écran d'autorisation improvisé en direct.
- [ ] Base Notion "Rapports hebdo DELTA" déjà créée avec les bonnes colonnes.
- [ ] Connexion internet de secours prête — Make dépend entièrement du réseau, c'est la session la plus exposée à un incident technique.

### Module 6 — Monétisation (Session 6)
- [ ] Les 5 livrables de Fatou (Modules 1 à 5) réunis dans un seul dossier de démonstration, accessibles sans recherche à l'écran.
- [ ] Le pitch client et les 4 posts LinkedIn de Fatou déjà rédigés en amont.
- [ ] La grille tarifaire indicative affichée et prête à être commentée (blocage le plus fréquent de ce module).
- [ ] Critères de certification + calendrier communautaire post-formation ouverts dans un onglet pour la clôture.
- [ ] Un message de remerciement personnalisé de fin de cohorte préparé (2-3 phrases) — dernière impression laissée aux 65 participants.

## 3. Plan B — si un outil ou une intégration plante en direct

| Incident | Réaction immédiate |
|---|---|
| Claude.ai/Claude Code inaccessible (panne du service) | Basculer sur une capture d'écran/vidéo d'une démo déjà enregistrée en amont (à préparer pour chaque session par précaution) plutôt que de faire attendre 65 personnes en silence. Annoncer clairement : "Le service a un incident, je continue avec un enregistrement, ça ne change rien à ce que vous devez retenir." |
| Un connecteur MCP refuse de s'authentifier en direct (Module 1, 3, 5) | Ne jamais dépasser 2 minutes de dépannage à l'écran — basculer sur le connecteur alternatif déjà identifié dans la checklist du module, ou sur une capture d'écran du résultat attendu, et continuer. Le dépannage en direct casse le rythme plus qu'il n'apporte de valeur pédagogique. |
| Make.com ou une automatisation ne se déclenche pas (Module 5) | Montrer le scénario déjà exécuté avec succès en amont (historique d'exécution Make) plutôt que d'insister sur un déclenchement live qui ne vient pas. |
| Coupure internet côté animateur | Basculer immédiatement sur la connexion de secours (partage mobile) ; si l'interruption dépasse 3 minutes, prévenir dans le chat Teams et dans la communauté qu'un léger décalage de clôture est possible plutôt que de laisser un silence sans explication. |
| Débordement de temps général | Suivre la table de triage spécifique à la session en cours, en bas de chaque `kit-animateur/run-of-show-session-N.md` — jamais d'improvisation sur ce qui doit être coupé, la priorité est déjà décidée à froid. |
