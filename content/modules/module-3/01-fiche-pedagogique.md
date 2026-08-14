# Fiche pédagogique — Module 3 — Transformer Claude en Data Analyst personnel

**Session 3 · Vendredi 21 août 2026 · 18h00–19h45 GMT · Teams**

## Objectifs pédagogiques

À la fin de cette session, chaque participant est capable de :

1. **Nettoyer** un fichier Excel réel comportant des défauts courants (doublons, valeurs manquantes, formats incohérents, valeurs aberrantes) en pilotant Claude par le prompt, sans formule manuelle fastidieuse.
2. **Analyser** des données de ventes via Excel piloté par prompts (formules et tableau croisé dynamique générés et expliqués par Claude).
3. **Lire et comprendre** une requête SQL simple générée par Claude sur une base ventes/clients, et savoir en demander une variante.
4. **Situer** pandas (Python) et R comme des "niveaux 2" optionnels — savoir quand ils deviennent utiles, sans en avoir besoin pour produire le livrable du jour.
5. **Recommander** un type de graphique adapté à une question business et construire un dashboard simple (Power BI ou Google Sheets/Looker Studio).
6. **Rédiger** 3 insights business chiffrés à partir d'un jeu de données nettoyé, et les traduire en recommandation pour un client.

## Prérequis

- Module 1 terminé : Claude Code installé et fonctionnel (le nettoyage de ce module se fait avec Claude Code, pas seulement le chat).
- Module 2 terminé (méthode C.L.A.R.T.É) : les prompts d'analyse de ce module s'appuient sur cette méthode, ils ne la réexpliquent pas.
- Un tableur accessible (Excel ou Google Sheets). Power BI Desktop est un bonus, pas un prérequis — Google Sheets/Looker Studio est l'alternative pleinement acceptée si le participant n'y a pas accès.
- Aucune connaissance préalable en SQL, Python ou R : ce module part de zéro sur ces trois points.

## Matériel nécessaire côté participant

- Ordinateur portable, connexion stable, Claude Code ouvert.
- Le fichier `06-exercices/ventes-delta-distribution-brut.xlsx` téléchargé avant la session.
- Un tableur (Excel ou Google Sheets) installé/accessible.

## Lien avec le fil narratif et le portfolio

Fatou Diallo (voir `01-programme/parcours-portfolio-participant.md`) reçoit un export de ventes de son client **DELTA Distribution**, déjà évoqué au Module 1 (notes de réunion du 15/08 : rupture de stock à l'entrepôt Nord, retard du partenaire transport — voir `modules/module-1-ecosysteme-claude/05-demo-commentee.md`). Ce module répond enfin, avec des chiffres, à ces deux problèmes laissés en suspens. Le livrable de cette session alimente la **Section 3 du Portfolio IA Professionnel** ("Mon projet d'analyse de données").

## Livrable attendu

**Un projet complet d'analyse de données**, matérialisé par une checklist cochée :

- [ ] Fichier `ventes-delta-distribution-brut.xlsx` nettoyé (doublons supprimés, valeurs manquantes traitées, région et dates standardisées, valeurs aberrantes corrigées)
- [ ] Au moins un tableau croisé dynamique construit et expliqué (Excel ou Google Sheets)
- [ ] Les 3 insights business rédigés et chiffrés : rupture région Nord, croissance E-commerce, retards de livraison
- [ ] Une visualisation exportable (graphique Power BI, Google Sheets ou Looker Studio) illustrant au moins l'insight Nord
- [ ] Capture d'écran ou lien du dashboard/graphique posté dans la communauté privée, canal `#par-module`

Critères de complétion détaillés : `10-grille-evaluation-livrable.md`.

## Erreurs fréquentes à anticiper (côté animateur)

- **"Je ne suis pas à l'aise avec Excel"** : rassurer — l'objectif n'est pas de mémoriser des formules, mais de décrire à Claude le résultat voulu ("fais-moi un tableau croisé dynamique qui montre les ventes par région et par mois") et de comprendre la formule proposée, pas de la retaper de mémoire.
- **Peur du SQL/Python** ("je ne suis pas développeur") : insister dès l'introduction — personne n'écrit une requête SQL ou un script pandas seul dans ce module ; Claude l'écrit et l'explique ligne par ligne, le participant valide qu'elle répond à la bonne question.
- **Nettoyer "à l'œil" sans méthode** : un participant qui corrige 2-3 lignes visibles à la main et déclare le fichier "propre" — insister sur la nécessité de vérifier systématiquement chaque type de défaut (doublons, valeurs manquantes, formats, valeurs aberrantes), pas seulement ce qui saute aux yeux en survolant le tableau.
- **Confondre corrélation et cause** sur l'insight transport/Nord : le retard de livraison est un facteur aggravant corrélé à la rupture de stock, pas une cause unique prouvée — faire formuler la recommandation avec cette nuance plutôt que comme une certitude absolue.

## Plan de la session

Voir `02-run-of-show-session.md` pour le minutage détaillé. Structure en 5 blocs (105 min) : Reconnexion (10) → Mini-concept : le raisonnement d'un data analyst (15) → Démonstration commentée (35) → Pratique guidée (35) → Défi + clôture (10).
