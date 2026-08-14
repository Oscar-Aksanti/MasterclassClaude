# Fiche pédagogique — Module 4 — Créer des solutions numériques avec Claude Code

**Session 4 · Lundi 24 août 2026 · 18h00–19h45 GMT · Teams**

## Objectifs pédagogiques

À la fin de cette session, chaque participant est capable de :

1. **Décrire** une idée d'application ou de site en langage naturel de façon
   suffisamment précise pour obtenir un projet Claude Code structuré dès la première
   tentative.
2. **Construire** un dashboard Streamlit qui charge un jeu de données réel et
   affiche des indicateurs, une alerte et des graphiques.
3. **Créer** une page vitrine HTML/CSS professionnelle et cohérente avec une charte
   graphique donnée.
4. **Diagnostiquer** une erreur Python à partir de son message avant de la corriger,
   plutôt que de corriger au hasard ou de tout réécrire.
5. **Déployer** une application ou un site pour obtenir une URL fonctionnelle,
   accessible par n'importe qui.

## Prérequis

- Module 1 complété (Claude Code installé et fonctionnel).
- Idéalement, Module 3 complété (le dataset nettoyé de DELTA Distribution est réutilisé
  ici — mais ce module reste suivable en autonomie même sans avoir fait le Module 3,
  voir la note de continuité ci-dessous).
- Un compte GitHub gratuit (créé en session si besoin — aucune expérience préalable
  de Git n'est nécessaire, Claude Code guide chaque commande).
- `pip` et Python fonctionnels sur la machine (déjà vérifié indirectement si Claude
  Code est installé).

## Matériel nécessaire côté participant

- Ordinateur portable, connexion stable.
- Terminal disponible (déjà utilisé au Module 1).
- Le dossier `06-exercices/` de ce module téléchargé avant la session.
- Un compte GitHub et un compte Streamlit Community Cloud créés avant la session si
  possible (gagne du temps sur le bloc pratique guidée) — voir
  `09-ressources-telechargeables/checklist-deploiement.pdf`.

## Continuité de données (Module 3 → Module 4)

Ce module réutilise le jeu de ventes nettoyé de DELTA Distribution (client fil rouge
de Fatou, introduit au Module 1, nettoyé et analysé au Module 3). Le fichier fourni
dans `06-exercices/app-depart/data/ventes-delta-nettoye.csv` est une copie de travail
autonome, cohérente avec les faits verrouillés en `01-programme/continuite-inter-modules.md`
(mêmes colonnes, même anomalie région Nord, même croissance E-commerce) — un
participant qui suit ce module sans avoir fait le Module 3 dispose donc de tout ce
qu'il faut pour réussir l'exercice.

## Lien avec le fil narratif et le portfolio

Fatou transforme son analyse du Module 3 en deux livrables concrets : un dashboard
qu'elle peut envoyer par lien à son client DELTA Distribution, et une page vitrine
pour son nouveau positionnement "conseil augmenté à l'IA". Le livrable de cette
session alimente la **Section 4 du Portfolio IA Professionnel** ("Mon application
ou site déployé").

## Livrable attendu

**Une application ou un site fonctionnel et déployé, accessible par une URL**,
matérialisé par une checklist cochée :

- [ ] Un dashboard Streamlit ou une page vitrine construit à partir d'une description
      en langage naturel donnée à Claude Code
- [ ] Le bug volontaire de l'exercice guidé diagnostiqué et corrigé avec la méthode
      vue en session (pas juste "ça marche maintenant" sans comprendre pourquoi)
- [ ] Le projet déployé (Streamlit Community Cloud, Netlify, Vercel ou GitHub Pages)
- [ ] Le lien testé en navigation privée pour confirmer qu'il fonctionne pour
      n'importe qui
- [ ] Le lien posté dans la communauté privée, canal `#par-module`

Critères de complétion détaillés : `10-grille-evaluation-livrable.md`.

## Erreurs fréquentes à anticiper (côté animateur)

- **Peur de "casser" le projet en le déployant** : rassurer — un déploiement gratuit
  sur Streamlit Community Cloud ou Netlify ne touche à rien d'autre, et peut être
  supprimé à tout moment sans conséquence.
- **Description de projet trop vague donnée à Claude Code** ("fais-moi un site")
  menant à plusieurs allers-retours frustrants : rappeler l'anatomie de projet
  (Partie 1 de la leçon) avant même d'ouvrir Claude Code.
- **Panique face au premier message d'erreur** : c'est précisément le sujet de la
  Partie 4 — normaliser l'erreur comme une étape normale, pas un échec.
- **Confusion entre "ça s'affiche" et "c'est juste"** : un dashboard qui s'affiche
  sans erreur peut encore contenir un chiffre faux — insister sur la vérification du
  fond, pas seulement de la forme, à l'étape 5 de l'exercice guidé.
- **Oubli du fichier `requirements.txt` lors du déploiement**, cause n°1 d'échec de
  déploiement Streamlit chez un débutant.

## Plan de la session

Voir `02-run-of-show-session.md` pour le minutage détaillé. Structure en 5 blocs (105 min) : Reconnexion (10) → Mini-concept : anatomie d'un projet (15) → Démonstration commentée (35) → Pratique guidée (35) → Défi + clôture (10).
