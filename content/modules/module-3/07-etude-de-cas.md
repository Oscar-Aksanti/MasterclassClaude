# Étude de cas — Module 3 — Où concentrer les efforts commerciaux de DELTA Distribution au prochain trimestre ?

## Contexte métier complet

**Le client :** DELTA Distribution, grossiste-distributeur en agroalimentaire et biens de consommation courante, actif dans 5 régions du Sénégal (Dakar, Thiès, Nord, Sud, Casamance), via 3 canaux de vente (Grossiste, Détail, E-commerce).

**La demande :** lors de la réunion du 15 août (déjà évoquée au Module 1), la direction de DELTA a mandaté Fatou pour deux choses : (1) comprendre pourquoi l'entrepôt Nord subit des ruptures de stock répétées, et (2) préparer les recommandations commerciales du prochain trimestre (T4). DELTA fournit à Fatou l'export de ventes des 6 derniers mois (février-juillet 2026) pour ce travail.

**Les parties prenantes :**
- La **direction commerciale** de DELTA, qui doit décider où réallouer le budget marketing du T4 (le même budget évoqué en réunion, non encore validé — voir Module 2 pour le volet communication/relance de ce sujet).
- Le **responsable logistique**, en charge du stock de l'entrepôt Nord et de la relation avec le partenaire transport.
- **Fatou**, qui doit livrer une analyse chiffrée et actionnable, pas un simple constat.

**Les contraintes :**
- Le fichier de ventes reçu est un export brut, jamais nettoyé (voir les 5 défauts détaillés en `04-lecon-ecrite-complete.md`, Partie 1).
- DELTA n'a pas de data analyst interne — Fatou doit produire une analyse compréhensible par des décideurs non-techniques, pas un rapport statistique.
- Le délai est court : la réunion de restitution est dans une semaine.

## Votre mission

Avant de lire la résolution ci-dessous, à partir de votre propre nettoyage et analyse du fichier (Partie C/D de `06-exercices/exercice-guide-depart.md`), répondez par écrit (10 minutes) :

1. Si DELTA ne pouvait financer qu'**une seule** action commerciale au T4, laquelle recommanderiez-vous en priorité, et sur la base de quel chiffre précis ?
2. Le canal E-commerce est minoritaire en valeur (moins de 15 % du chiffre d'affaires) — cela veut-il dire qu'il faut l'ignorer au profit des canaux dominants ? Justifiez.
3. Comment présenteriez-vous le problème du Nord à un responsable logistique qui n'a jamais vu un tableau croisé dynamique ?

## Résolution modèle

### Ce que révèlent les données nettoyées

| Question posée par DELTA | Ce que montre le fichier nettoyé |
|---|---|
| Pourquoi les ruptures de stock au Nord ? | La quantité vendue dans le Nord chute de 63 % pendant 3 mois consécutifs (mars-avril-mai), avec un délai de livraison moyen de 10,8 jours contre 3,0 jours dans les autres régions — le réassort n'arrive pas assez vite pour suivre la demande |
| Où concentrer les efforts commerciaux au T4 ? | L'E-commerce croît 3 fois plus vite en volume que la moyenne des autres canaux (8 % à 24 % de part de volume en 6 mois) tout en restant sous-financé (moins de 15 % du chiffre d'affaires) |

### Réponse à la question 1 (priorité unique)

**Sécuriser l'approvisionnement de l'entrepôt Nord** est la priorité absolue, avant même d'investir sur la croissance E-commerce. Justification chiffrée : la rupture Nord a déjà coûté environ **8 961 000 FCFA de chiffre d'affaires non réalisé** sur seulement 3 mois — un problème déjà en cours, quantifié, qui continuera à s'aggraver si rien ne change. Investir sur l'E-commerce sans résoudre le Nord reviendrait à financer la croissance d'une main tout en laissant une fuite d'argent ouverte de l'autre.

### Réponse à la question 2 (E-commerce minoritaire mais stratégique)

Non — la valeur actuelle n'est pas le bon indicateur pour juger ce canal, c'est sa **dynamique** qui compte. Un canal qui triple sa part de volume en 6 mois est un canal en train de changer de statut, pas un canal marginal à ignorer : au rythme actuel, si la tendance se maintient, l'E-commerce deviendra un canal majeur bien avant la fin de l'année. Sous-investir maintenant, au moment où la demande client se déplace déjà vers ce canal, revient à laisser un concurrent mieux préparé s'installer sur ce segment en croissance. La recommandation n'est pas "arrêter d'investir dans le Grossiste", mais "commencer à réallouer une part croissante et proportionnée du budget marketing vers l'E-commerce, avant qu'il ne soit trop tard pour en profiter".

### Réponse à la question 3 (communiquer à un non-technique)

Pas de jargon, pas de tableau croisé dynamique montré brut : une phrase et un chiffre. *"En mars, avril et mai, la région Nord a vendu environ 63 % de moins que d'habitude — soit près de 9 millions de FCFA de ventes qu'on n'a pas pu faire, sur seulement 3 mois. En parallèle, les livraisons vers le Nord prennent en moyenne 3 fois plus de temps que dans les autres régions. Ce n'est pas une preuve à 100 % que le transport est l'unique responsable, mais c'est le premier point à vérifier avec le prestataire avant la prochaine campagne."* Un seul graphique (la courbe des ventes du Nord sur 6 mois) suffit à l'appuyer visuellement.

## Ce que ça change pour DELTA, en chiffres

- **Rupture Nord** : ~8 961 000 FCFA de perte estimée sur 3 mois (~2 987 000 FCFA/mois) si rien ne change — le chiffre à présenter en priorité à la direction.
- **E-commerce** : de 8,0 % à 24,1 % de part de volume en 6 mois (x3) — le chiffre qui justifie une réallocation de budget, pas une remise en cause du modèle actuel.
- **Transport** : 10,8 jours de délai moyen vers le Nord contre 3,0 jours ailleurs — le chiffre à mettre sur la table lors de la prochaine négociation avec le partenaire transport.

## Et vous ?

Le défi en autonomie (`06-exercices/defi-autonomie.md`) vous demande de refaire ce même exercice de priorisation, mais sur un jeu de données de votre propre contexte si vous en avez un. L'objectif n'est pas de mémoriser les chiffres de DELTA, mais de savoir répéter la même démarche — nettoyer, chiffrer, prioriser, recommander — sur n'importe quel jeu de données professionnel qui vous sera confié demain.
