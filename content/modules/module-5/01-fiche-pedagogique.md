# Fiche pédagogique — Module 5 — Automatiser son travail avec l'intelligence artificielle

**Session 5 · Mercredi 26 août 2026 · 18h00–19h45 GMT · Teams**

## Objectifs pédagogiques

À la fin de cette session, chaque participant est capable de :

1. **Cartographier** ses propres tâches répétitives avec une grille fréquence × pénibilité × risque d'erreur, et identifier laquelle automatiser en priorité.
2. **Distinguer** un prompt ponctuel, un workflow multi-étapes et un agent autonome qui déclenche lui-même des actions — et savoir dire lequel correspond à son besoin.
3. **Construire dans Make (Integromat) un scénario complet** : déclencheur → traitement/texte généré par Claude → action dans un outil métier (Notion ou WhatsApp Business).
4. **Approfondir au moins 2 intégrations** (Google Sheets + Notion, ou Gmail + WhatsApp Business selon le profil) plutôt que survoler les quatre.
5. **Reconnaître** les situations où NE PAS automatiser entièrement (décision sensible, donnée personnelle, relation client) et appliquer un test avant mise en production plutôt qu'un déploiement direct.

## Prérequis

- Avoir terminé le défi en autonomie du Module 4 (application ou site déployé) — ce module réutilise le même réflexe de "livrable qui tourne seul", cette fois sans interface visible.
- Un compte Make (Integromat) gratuit créé avant la session (le plan gratuit suffit pour tout le module — aucune carte bancaire requise).
- Un compte Google (Sheets) et, si possible, un compte Notion gratuit. WhatsApp Business est démontré mais pas indispensable en pratique guidée si le participant n'y a pas accès (Notion seul suffit pour valider le livrable).
- Avoir lu `01-programme/parcours-portfolio-participant.md` (rappel du persona Fatou Diallo et de son client DELTA Distribution, déjà rencontrés aux Modules 1, 3 et 4).

## Matériel nécessaire côté participant

- Ordinateur portable, connexion stable (Make fonctionne entièrement dans le navigateur, aucune installation).
- Le compte Make créé et testé (connexion réussie) avant la session.
- Le fichier `06-exercices/exercice-guide-depart.md` ouvert avant la session.
- Une tâche personnelle répétitive déjà identifiée si possible (sinon, la grille de cartographie du bloc 2 s'en occupe en direct).

## Lien avec le fil narratif et le portfolio

Fatou a désormais un environnement Claude configuré (Module 1), une bibliothèque de prompts (Module 2), une analyse de données propre (Module 3) et un dashboard déployé (Module 4) pour son client **DELTA Distribution**, grossiste-distributeur sénégalais. Le problème de fond identifié dès le Module 1 et quantifié au Module 3 — **ruptures de stock récurrentes sur la région Nord** — n'est toujours pas surveillé automatiquement : Fatou doit ouvrir son dashboard chaque semaine pour vérifier si la situation s'est reproduite. Ce module règle exactement ça : Fatou automatise la génération de son rapport et ajoute une alerte qui la prévient elle-même, sans qu'elle ait à aller chercher l'information. Le livrable alimente la **Section 5 du Portfolio IA Professionnel** ("Mon automatisation réelle").

## Livrable attendu

**Une automatisation réelle déployée**, matérialisée par :

- [ ] Un scénario Make actif (statut "ON", pas juste enregistré en brouillon) comportant au moins 3 modules : 1 déclencheur + 1 traitement Claude + 1 action dans un outil métier
- [ ] Au moins 2 intégrations approfondies parmi Google Sheets / Gmail / Notion / WhatsApp Business (pas 4 survolées)
- [ ] Une condition d'alerte fonctionnelle testée au moins une fois avec succès (déclenchée intentionnellement, pas seulement en théorie)
- [ ] Une capture d'écran du scénario actif + une capture de l'exécution réussie (historique Make vert, "Succeeded")
- [ ] Une checklist de garde-fous vérifiée avant activation (voir `10-grille-evaluation-livrable.md`)

Critères de complétion détaillés : `10-grille-evaluation-livrable.md`.

## Erreurs fréquentes à anticiper (côté animateur)

- **Confondre "automatiser" et "déléguer une décision sensible"** : rappeler dès le mini-concept que l'automatisation démontrée notifie et prépare, elle ne décide jamais seule d'une action irréversible (envoi direct à un client final, commande fournisseur, etc.).
- **Vouloir automatiser 4 intégrations d'un coup en pratique guidée** : recentrer systématiquement sur "2 bien faites" — un scénario à 2 intégrations qui tourne vraiment vaut plus qu'un scénario à 4 qui plante.
- **Peur de "casser" un vrai compte Google/Notion en connectant Make** : rassurer — Make demande une autorisation explicite outil par outil (même logique que le MCP du Module 1), révocable à tout moment dans les paramètres du compte concerné.
- **Oublier de tester avant d'activer** : insister sur le réflexe "Exécuter une fois manuellement" dans Make avant de basculer le scénario sur "ON" — plusieurs participants activeront sinon un scénario qui envoie un message d'erreur en boucle.
- **Sous-estimer la case "risque d'erreur" de la grille de cartographie** : certains participants classent toutes leurs tâches en "à automatiser" sans distinguer celles où une erreur silencieuse serait grave (ex. données personnelles, chiffres envoyés à un client).

## Plan de la session

Voir `02-run-of-show-session.md` pour le minutage détaillé. Structure en 5 blocs (105 min) : Reconnexion (10) → Mini-concept — cartographie et agents (15) → Démonstration commentée — scénario Make DELTA (35) → Pratique guidée (35) → Défi + clôture (10).
