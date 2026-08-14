# Étude de cas — Module 2 — Fatou et ses propositions commerciales

## Contexte

Fatou Diallo, consultante indépendante en gestion de projets à Dakar, reçoit en moyenne 2 à 3 sollicitations par mois de nouvelles PME (distribution, agroalimentaire, services) qui souhaitent un accompagnement. Chaque fois, elle doit produire une **proposition commerciale** : une page qui présente son offre, ses points forts, et un tarif adapté au budget du prospect.

Avant ce module, sa méthode était la suivante :

- Elle part d'une page blanche dans Word, ou recopie une ancienne proposition qu'elle adapte à la main.
- La rédaction lui prend en moyenne **45 minutes**, souvent en fin de journée, quand elle est le moins disponible mentalement pour bien vendre son offre.
- Elle doute systématiquement du ton : trop commercial ou pas assez ? Elle envoie régulièrement le brouillon à un ami pour relecture avant envoi, ce qui ajoute **1 à 2 jours de délai** avant que la proposition ne parte réellement.
- Sur les 3 dernières propositions envoyées avant la formation, un seul prospect a signé — Fatou n'a jamais formellement identifié pourquoi les deux autres n'ont pas donné suite.

## Le problème, formulé clairement

Fatou n'a pas de problème de compétence : elle connaît son métier et sait ce qu'elle veut proposer. Elle a un problème de **méthode de production** : elle attend un résultat convaincant dès le premier jet, sans jamais structurer explicitement l'étape où elle se demande "qu'est-ce qui, dans ce que je viens d'écrire, ne convaincrait pas un prospect qui compare plusieurs offres ?" — cette question, elle ne se la pose qu'implicitement, en relisant vite, ou en la déléguant à un ami qui n'a pas plus de méthode qu'elle.

## Votre mission

Avant de lire la résolution ci-dessous, répondez par écrit (5 minutes) :

1. À quelle étape du workflow C.L.A.R.T.É + brief/brouillon/critique/version finale (voir `04-lecon-ecrite-complete.md`) la méthode de Fatou est-elle actuellement la plus faible ?
2. Si Fatou n'avait droit qu'à UN seul changement dans sa façon de produire ses propositions commerciales, lequel recommanderiez-vous en priorité ?
3. Comment mesureriez-vous, dans 3 mois, si le changement a vraiment amélioré son taux de signature — pas seulement son temps de rédaction ?

## Résolution modèle : le workflow documenté de Fatou

**Étape 1 — Brief (prompt C.L.A.R.T.É complet), écrit une seule fois puis transformé en gabarit :**

> *"Je suis consultante indépendante en gestion de projets, 8 ans d'expérience, spécialisée dans l'accompagnement de PME en distribution/agroalimentaire/services (Contexte). Rédige une proposition commerciale d'une page pour {nom_prospect}, {secteur_prospect}, dont le besoin exprimé est : {besoin_exprime}. Budget maximum communiqué : {budget_max} sur {duree_mission} (Livrable attendu). Ce document est lu par {decideur_prospect}, qui compare probablement plusieurs prestataires cette semaine (Audience). Maximum 1 page, mettre en avant ces 3 points forts : {points_forts}, ne jamais promettre un résultat chiffré que je ne peux pas garantir (Restrictions). Ton professionnel, orienté résultat, sans jargon de consultant (Ton). Voici une proposition précédente qui a fonctionné, reprends sa structure : {exemple_proposition_precedente} (Exemples)."*

**Étape 2 — Brouillon :** Claude produit une première version complète à partir du brief.

**Étape 3 — Critique (l'étape que Fatou sautait avant) :**

> *"Un dirigeant de PME qui reçoit 3 propositions concurrentes cette semaine : qu'est-ce qui, dans ce brouillon, ne le convaincrait pas de me choisir plutôt qu'un autre consultant ? Sois honnête, ne me dis pas que tout est parfait si ce n'est pas le cas."*

Sur ses 3 dernières propositions retravaillées avec cette méthode, la critique a fait ressortir systématiquement le même point faible : le gain pour le client n'était jamais chiffré concrètement (temps gagné, argent économisé) — seulement décrit en termes généraux ("meilleure organisation", "plus de visibilité").

**Étape 4 — Version finale :**

> *"Intègre ce point : chiffre concrètement le gain de temps ou d'argent attendu pour {nom_prospect}, en te basant sur {donnee_chiffree_disponible}, sans toucher au reste qui fonctionne déjà."*

## Ce que ça change pour elle, en chiffres

- **Temps de production :** 45 minutes de rédaction incertaine + 1-2 jours d'attente d'une relecture externe → environ **20 minutes** au total (brief déjà en gabarit + 2 échanges courts de critique/version finale), envoyée le jour même.
- **Fiabilité du résultat :** la proposition intègre systématiquement un chiffrage concret du gain client, un point que Fatou oubliait ou minimisait à chaque fois qu'elle rédigeait seule.
- **Ce qui reste à mesurer dans le temps :** le taux de signature sur les 3-6 prochaines propositions envoyées avec cette méthode, comparé aux 3 précédentes (1 signature sur 3) — Fatou note désormais ce chiffre dans son fichier de mémoire personnelle pour suivre l'évolution.

## Et vous ?

Le défi en autonomie (`06-exercices/defi-autonomie.md`) vous demande de documenter le même type de workflow, mais sur une tâche à enjeu réel de VOTRE semaine — pas nécessairement une proposition commerciale. L'objectif n'est pas de copier le brief de Fatou, mais de repérer l'étape que vous, comme elle, avez tendance à sauter (le plus souvent : la critique honnête avant la version finale).
