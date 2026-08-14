# Étude de cas — Module 1 — La semaine de Fatou avant Claude AI Mastery

## Contexte

Fatou Diallo, 34 ans, consultante indépendante en gestion de projets à Dakar, accompagne 6 PME clientes. Voici, sans exagération, une semaine typique de son rapport à Claude avant cette formation :

- **Lundi** : elle ouvre Claude.ai pour rédiger un email de relance à un client (DELTA Distribution) qui n'a pas payé une facture depuis 3 semaines. Ça prend 5 minutes, c'est efficace — jusque là, rien à changer.
- **Mardi** : elle a une réunion avec ce même client. Elle prend des notes en désordre sur son téléphone. Le soir, elle retape elle-même un compte-rendu structuré à la main, en s'appliquant à respecter le format qu'elle envoie toujours à ses clients. Ça lui prend 40 minutes, et elle le fait pour chacun de ses 6 clients, chaque semaine.
- **Mercredi** : elle reçoit un fichier Excel de 500 lignes de ventes de DELTA. Elle ouvre Claude.ai et **copie-colle des colonnes une par une** dans le chat pour poser ses questions, parce qu'elle ne sait pas que Claude peut travailler directement sur le fichier. Elle perd la moitié de son après-midi.
- **Jeudi** : elle cherche un ancien compte-rendu dans son Google Drive pour vérifier un engagement pris il y a deux mois. Elle met 15 minutes à le retrouver en fouillant dans les dossiers.
- **Vendredi** : elle a une longue conversation avec Claude.ai qui a démarré sur un sujet et a dérivé sur trois autres au fil de la journée. En fin d'après-midi, elle lui repose une question sur un détail donné le matin — la réponse est approximative. Elle abandonne et recommence à zéro.

## Le problème, formulé clairement

Fatou n'a pas un problème d'outil — Claude sait déjà faire tout ce dont elle a besoin. Elle a un problème **d'usage** : elle utilise une seule porte d'entrée (le chat) pour des tâches qui demanderaient chacune un outil différent, elle n'a jamais écrit sa méthode de compte-rendu une seule fois pour que Claude la réapplique, elle ne sait pas que Claude peut aller chercher un document à sa place, et elle ne sait pas repérer le moment où une conversation devient trop longue pour rester fiable.

## Votre mission

Avant de lire la résolution ci-dessous, répondez par écrit (5 minutes) :

1. Pour chacune des 5 journées de Fatou, quel outil ou quelle pratique du Module 1 aurait changé le résultat ?
2. Combien de temps, approximativement, Fatou perd-elle chaque semaine sur des tâches qui pourraient être largement accélérées ?
3. Si vous deviez l'aider à ne changer qu'UNE seule chose cette semaine, laquelle choisiriez-vous en priorité, et pourquoi ?

## Résolution modèle

| Jour | Ce qui a coûté du temps | Ce qui change avec le Module 1 |
|---|---|---|
| Lundi | (rien à changer — c'est le bon usage) | Claude.ai reste le bon choix pour un email ponctuel |
| Mardi | Retaper manuellement le même format de compte-rendu, 6 fois par semaine | Une Skill `resume-reunion-client` (voir `05-demo-commentee.md`) : les notes brutes suffisent, le format est automatique |
| Mercredi | Copier-coller des colonnes Excel une par une dans un chat | Claude Code peut ouvrir et traiter directement le fichier (approfondi au Module 3 pour l'analyse elle-même) |
| Jeudi | Chercher un document à la main dans Google Drive | Un connecteur MCP Google Drive : Claude retrouve le document à sa place |
| Vendredi | Une conversation trop longue, mélangeant plusieurs sujets, qui perd en fiabilité | Un fichier de mémoire personnelle + le réflexe de repartir sur un chat neuf dès qu'un sujet change vraiment |

**Réponse à la question 3 (priorité) :** dans l'ordre de retour sur investissement immédiat, la Skill du mardi est le choix le plus rentable — c'est la tâche la plus répétitive (6 fois par semaine, format fixe), donc celle où écrire la méthode une fois rapporte le plus vite. C'est délibérément celle choisie comme démonstration de référence de ce module.

## Ce que ça change pour elle, en chiffres

- Compte-rendu (mardi) : 40 min × 6 clients → environ 10 min × 6 avec la Skill (relecture + ajustement) → **environ 3h gagnées par semaine**, soit près de 150h par an.
- Recherche de documents (jeudi) : 15 min perdues à chercher → quasi instantané avec le connecteur MCP.
- Fiabilité du vendredi : moins d'aller-retours à recommencer une conversation à zéro par frustration.

## Et vous ?

Le défi en autonomie (`06-exercices/defi-autonomie.md`) vous demande de faire le même diagnostic, mais sur votre propre semaine de travail réelle — pas celle de Fatou. L'objectif n'est pas de copier sa Skill, mais de repérer VOTRE équivalent du "compte-rendu du mardi" : la tâche répétitive, au format toujours identique, qui vous coûte le plus de temps chaque semaine.
