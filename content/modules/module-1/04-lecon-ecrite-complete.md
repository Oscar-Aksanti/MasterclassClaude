# Module 1 — Maîtriser l'écosystème Claude : les fondations du Top 1 %

> Document autoportant : si vous lisez ceci sans avoir assisté à la session live, vous pouvez suivre l'intégralité du module avec le même résultat. Comptez environ 1h30 à votre rythme.

## Pourquoi ça compte pour vous

Fatou Diallo est consultante indépendante en gestion de projets à Dakar. Depuis deux ans, elle utilise Claude — mais uniquement comme un moteur de recherche amélioré : elle ouvre le chat, pose une question, copie la réponse, referme l'onglet. Elle recommence à zéro à chaque fois. Elle ne sait pas que Claude peut : retrouver un document dans son Google Drive sans qu'elle ait à le chercher elle-même, appliquer automatiquement sa méthode personnelle à chaque nouveau compte-rendu de réunion sans qu'elle ait à la retaper, ou garder en mémoire le contexte de ses clients d'une conversation à l'autre.

Le problème n'est pas Claude. C'est qu'elle n'utilise qu'une seule porte d'entrée sur quatre, et qu'elle n'a jamais configuré l'outil pour qu'il travaille *pour elle* plutôt que de répondre *à elle*.

Ce module règle exactement ça. À la fin, vous aurez un environnement Claude configuré une fois pour toutes — et vous saurez, pour n'importe quelle tâche future, immédiatement quel outil ouvrir.

## Ce que vous allez faire aujourd'hui

Quatre parties, dans cet ordre logique : d'abord choisir le bon outil (Partie 1), puis apprendre à utiliser le plus polyvalent d'entre eux, Claude Code (Partie 2), puis étendre ses capacités avec des Skills et des connexions MCP (Partie 3), puis apprendre à gérer la durée de vie d'une conversation pour ne jamais subir une réponse qui perd en qualité (Partie 4).

---

## Partie 1 — Panorama : quel Claude pour quelle tâche ?

Il n'existe pas "un" Claude, mais plusieurs façons de l'utiliser, chacune adaptée à un type de travail différent. Se tromper de porte d'entrée, c'est comme essayer de couper du bois avec un couteau de cuisine : ça marche à peu près, mais c'est inutilement laborieux.

| Outil | À quoi il sert vraiment | Exemple concret |
|---|---|---|
| **Claude.ai (le chat)** | Une tâche ponctuelle, autonome, qui ne touche pas de fichiers externes | Rédiger un email, reformuler un paragraphe, répondre à une question rapide |
| **Claude Code** | Une tâche qui implique des fichiers (documents, tableaux, code), plusieurs étapes, ou la création d'un livrable (document, appli, site) | Nettoyer un fichier Excel, construire un dashboard, analyser un dossier de documents |
| **Claude Cowork** | Un projet à suivre dans la durée, avec plusieurs tâches, un planning, une progression à orchestrer | Piloter un projet client sur plusieurs semaines, avec relances et échéances |
| **Claude in Chrome** | Une tâche qui nécessite de naviguer sur le web ou d'interagir avec des pages/applications en ligne | Comparer les tarifs de 5 concurrents sur leurs sites, remplir un formulaire en ligne |

### L'arbre de décision (à garder sous la main)

```
Ma tâche du jour...

├─ ...est ponctuelle, je n'ai pas de fichier à donner
│  → Claude.ai (chat)
│
├─ ...implique un ou plusieurs fichiers, ou je veux un livrable construit
│  → Claude Code
│
├─ ...doit être suivie sur plusieurs jours/semaines avec plusieurs étapes
│  → Claude Cowork
│
├─ ...nécessite d'aller chercher/agir sur des pages web
│  → Claude in Chrome
│
└─ ...est une tâche que je refais chaque semaine à l'identique
   → une Skill (Partie 3), éventuellement une automatisation complète (Module 5)
```

Une version imprimable de cet arbre est disponible dans `09-ressources-telechargeables/arbre-decision-outils-claude.pdf`.

**Le cas de Fatou :** avant cette formation, elle utilisait Claude.ai pour tout, y compris pour analyser des tableaux de ventes en copiant-collant des colonnes à la main. Elle perdait un temps considérable non pas parce que Claude n'y arrivait pas, mais parce qu'elle utilisait le mauvais outil pour la tâche.

---

## Partie 2 — Claude Code : votre atelier personnel

Claude Code est une application qui tourne sur votre ordinateur (pas seulement dans le navigateur) et qui peut lire, créer et modifier des fichiers, exécuter des actions en plusieurs étapes, et construire des livrables complets (documents, tableaux, sites, applications). **Vous ne tapez aucune ligne de code vous-même** : vous décrivez ce que vous voulez en français, Claude Code s'occupe du reste et vous montre ce qu'il fait à chaque étape.

### Installation — Mac

1. Ouvrez l'application **Terminal** (déjà installée sur tout Mac — dans Applications > Utilitaires, ou recherchez "Terminal" avec la loupe en haut à droite).
2. Copiez-collez cette commande, puis appuyez sur Entrée :
   ```
   curl -fsSL claude.ai/install.sh | sh
   ```
3. Suivez les instructions affichées à l'écran (connexion avec votre compte Claude).
4. Vérifiez que l'installation a réussi en tapant :
   ```
   claude --version
   ```
   Si un numéro de version s'affiche, c'est prêt.

### Installation — Windows

1. Ouvrez **PowerShell** (recherchez "PowerShell" dans le menu Démarrer).
2. Copiez-collez cette commande, puis appuyez sur Entrée :
   ```
   irm claude.ai/install.ps1 | iex
   ```
3. Suivez les instructions affichées à l'écran (connexion avec votre compte Claude).
4. Vérifiez avec :
   ```
   claude --version
   ```

> **Rassurez-vous :** installer Claude Code ne modifie rien d'autre sur votre machine. C'est un programme isolé, comme installer n'importe quelle application. Vous ne pouvez pas "casser" votre ordinateur en suivant ces étapes.

### Première utilisation

Dans le terminal, placez-vous dans un dossier de travail (par exemple votre Bureau) et lancez :
```
claude
```
Une conversation démarre, dans le terminal cette fois. Essayez immédiatement une tâche simple pour valider que tout fonctionne, par exemple : *"Crée un fichier notes.md avec la liste de mes 3 clients principaux : Client A, Client B, Client C."* Claude Code crée réellement le fichier dans le dossier — ouvrez-le pour vérifier.

---

## Partie 3 — Skills & MCP : étendre les capacités de Claude

### Les Skills : donner une méthode à retenir à Claude

Une Skill, c'est une **fiche de méthode réutilisable** que vous écrivez une fois, et que Claude applique ensuite chaque fois que vous lui redonnez ce type de tâche — sans que vous ayez à réexpliquer votre méthode à chaque fois.

Analogie : c'est la différence entre expliquer à un nouveau stagiaire comment vous voulez qu'un compte-rendu soit structuré à chaque réunion, et lui donner une fois pour toutes un modèle qu'il applique désormais seul.

Une Skill est un simple fichier texte nommé `SKILL.md`, avec une structure minimale :

```markdown
---
name: resume-reunion-client
description: Transformer des notes brutes de réunion client en compte-rendu structuré (décisions, actions, échéances)
---

Quand on te donne des notes de réunion (même désordonnées), produis un compte-rendu
avec exactement ces 4 sections :

1. **Décisions prises**
2. **Actions à faire** (qui, quoi, pour quand)
3. **Points de blocage / risques**
4. **Prochaine étape**

Reste fidèle aux notes fournies : n'invente jamais une décision ou une échéance qui
n'y figure pas. Si une information manque (ex. pas de date), écris "à préciser"
plutôt que de deviner.
```

C'est exactement la Skill que Fatou crée dans la démonstration de ce module — elle correspond à une tâche qu'elle refait après chaque réunion client, et qui lui prenait 30 à 45 minutes chaque fois.

**Comment créer la vôtre :**
1. Identifiez UNE tâche que vous refaites régulièrement, avec un résultat toujours structuré de la même façon (un compte-rendu, un type d'email, un format de rapport).
2. Décrivez cette méthode à Claude Code : *"Aide-moi à créer une Skill nommée [nom] qui fait [description de la tâche], avec ces règles précises : [vos règles]."*
3. Claude Code génère le fichier `SKILL.md` pour vous — vous n'avez pas besoin de connaître la syntaxe exacte par cœur.
4. Testez-la immédiatement sur un exemple réel.

Un gabarit vierge à copier-coller est disponible dans `09-ressources-telechargeables/gabarit-skill.md`.

### MCP : brancher Claude sur vos outils

MCP (Model Context Protocol), c'est une **prise électrique universelle** entre Claude et vos outils habituels — Google Drive, Notion, Gmail, Slack. Sans MCP, Claude ne connaît que ce que vous lui copiez-collez à la main. Avec un connecteur MCP branché, Claude peut aller consulter directement vos documents, vos bases, vos messages — avec votre autorisation explicite, outil par outil.

**Connecter Google Drive (démonstration de référence) :**
1. Dans Claude.ai (ou Claude Desktop), ouvrez **Paramètres → Connecteurs**.
2. Cherchez "Google Drive" et cliquez sur **Connecter**.
3. Une fenêtre Google s'ouvre : c'est normal, c'est l'écran d'autorisation officiel de Google, pas une tentative d'hameçonnage. Connectez-vous et autorisez l'accès.
4. De retour dans Claude, testez immédiatement : *"Cherche dans mon Google Drive un document qui parle de [sujet] et résume-le en 5 points."*

Si Claude retrouve et résume effectivement le document sans que vous l'ayez copié-collé vous-même, la connexion fonctionne.

> **Sur la sécurité :** un connecteur MCP ne donne jamais l'accès à autre chose que ce que vous autorisez explicitement, et vous pouvez le déconnecter à tout moment dans les mêmes paramètres. N'installez ou n'autorisez jamais un connecteur suggéré par un email ou un site tiers — seulement depuis les paramètres officiels de Claude.

---

## Partie 4 — Gérer tokens et contexte comme un pro

Un **token**, c'est l'unité de base avec laquelle Claude "lit" et "écrit" — grossièrement un mot ou un fragment de mot. Ce qui compte pour vous n'est pas le mot en lui-même, mais la notion de **fenêtre de contexte** : la quantité totale de texte (votre conversation entière, du premier au dernier message) que Claude peut garder activement "en tête" en même temps.

**Analogie :** imaginez un collaborateur humain à qui vous parlez sans interruption depuis trois heures, en changeant plusieurs fois de sujet. Même excellent, il commence à mélanger des détails du début de la conversation avec ceux dits plus récemment. Ce n'est pas un manque d'intelligence — c'est une limite de mémoire de travail sur une session ininterrompue.

**Pourquoi une conversation "ralentit" ou devient moins pertinente :** plus une conversation s'allonge (surtout si elle mélange plusieurs sujets ou contient de gros documents collés), plus Claude doit garder de contexte actif, et plus il devient probable qu'un détail ancien soit moins bien pris en compte qu'un détail récent.

**Bonnes pratiques :**
- **Une conversation = un sujet.** Ne poursuivez pas indéfiniment le même fil pour des tâches sans rapport entre elles — ouvrez un nouveau chat.
- **Un fichier de mémoire personnel.** Créez un court fichier (`memoire-personnelle.md` par exemple) qui résume qui vous êtes, vos clients récurrents, vos préférences de style — et donnez-le en début de nouvelle conversation plutôt que de tout retaper. C'est l'équivalent du fichier `CLAUDE.md` utilisé par Claude Code pour se souvenir du contexte d'un projet.
- **Résumez avant de continuer.** Si une conversation devient longue mais doit continuer, demandez à Claude de résumer les décisions prises jusqu'ici, puis démarrez un nouveau chat avec ce résumé en premier message.
- **Signal d'alerte :** si Claude commence à répéter une erreur déjà corrigée, ou oublie une contrainte donnée plus tôt, c'est le signal qu'il est temps de résumer et de repartir sur une conversation neuve — pas d'insister dans la même conversation.

Un gabarit de fichier de mémoire personnelle est disponible dans `09-ressources-telechargeables/gabarit-memoire-personnelle.md` — c'est la 4ᵉ case de votre checklist de livrable.

---

## Démonstration commentée

Le déroulé exact, avec les commandes et prompts utilisés en direct, est disponible dans [`05-demo-commentee.md`](05-demo-commentee.md). Si vous suivez ce module en autonomie, reproduisez chaque étape avec vos propres exemples plutôt que de simplement lire le script.

## Exercice guidé

Rendez-vous dans [`06-exercices/exercice-guide-depart.md`](06-exercices/exercice-guide-depart.md) : cinq tâches professionnelles variées à associer au bon outil Claude, avec justification. Corrigé commenté dans `exercice-guide-solution.md`.

## Défi en autonomie

Avant la Session 2, complétez l'intégralité de la checklist de livrable (Partie 1 de la fiche pédagogique) sur VOTRE propre contexte professionnel — pas seulement l'exemple de Fatou. Détail complet dans [`06-exercices/defi-autonomie.md`](06-exercices/defi-autonomie.md).

## Ce qu'il faut retenir

1. **Il n'y a pas un seul "Claude"** — il y a quatre portes d'entrée, et choisir la bonne vous fait gagner un temps disproportionné par rapport à l'effort d'apprentissage.
2. **Une Skill, c'est votre méthode écrite une fois et réutilisée à l'infini** — la rentabilité arrive dès la 2ᵉ ou 3ᵉ utilisation.
3. **Une conversation a une durée de vie utile** — savoir la couper et repartir avec un résumé/fichier de mémoire est une compétence, pas un contournement.
