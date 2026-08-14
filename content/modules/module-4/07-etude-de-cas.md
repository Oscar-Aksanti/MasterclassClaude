# Étude de cas — Module 4 — Construire en 90 minutes un mini-dashboard de suivi d'activité

## Contexte

DELTA Distribution, le client de Fatou, a validé les 3 recommandations issues de
l'analyse du Module 3 :

1. Rupture de stock récurrente à l'entrepôt Nord (confirmée sur plusieurs mois).
2. Canal E-commerce en forte croissance relative, sous-exploité.
3. Retards de livraison concentrés sur un partenaire transport.

Le directeur de DELTA Distribution envoie un message à Fatou : *"C'est du bon
travail, mais je ne vais pas relire un PDF chaque mois. Vous pouvez me faire un
truc que je consulte quand je veux, sans vous redemander un rapport ?"*

Fatou a 90 minutes avant son prochain rendez-vous pour lui donner une réponse
concrète — pas une promesse, un objet réel.

## Votre mission

Avant de lire la résolution ci-dessous, répondez par écrit (5 minutes) :

1. Quel type de livrable répond réellement à la demande du directeur ("consulter
   quand je veux", "sans redemander un rapport") ?
2. Quelles sont, dans l'ordre de priorité, les 3-4 informations que ce livrable doit
   absolument afficher pour rester fidèle aux 3 recommandations déjà validées ?
3. Si Fatou n'a que 90 minutes, que doit-elle **ne pas** essayer de faire (pour rester
   réaliste), et que doit-elle absolument livrer avant la fin ?

## Résolution modèle — le déroulé des 90 minutes de Fatou

| Temps | Étape | Détail |
|---|---|---|
| 0–10 min | Cadrer la description du projet | Fatou reformule sa demande en une description complète pour Claude Code : contexte (client DELTA, suivi mensuel), données (le fichier nettoyé du Module 3), résultat attendu (un dashboard, pas un rapport), contraintes (doit rester simple à comprendre pour un non-technicien) |
| 10–35 min | Construire le dashboard | Description donnée à Claude Code (voir `05-demo-commentee.md` pour le texte exact) : 4 indicateurs, alerte région Nord, évolution mensuelle par région, répartition par canal. Test en local avec `streamlit run app.py` |
| 35–50 min | Rencontrer et corriger un bug | Une colonne mal référencée provoque une erreur au lancement — Fatou applique la méthode de debugging assisté (lire l'erreur, diagnostic, vérification, correction ciblée) plutôt que de perdre du temps à deviner |
| 50–65 min | Vérifier le fond, pas seulement la forme | Fatou compare les chiffres affichés avec ses propres calculs du Module 3 — le total et la tendance Nord doivent correspondre à ce qu'elle a déjà présenté en réunion |
| 65–85 min | Déployer | Création d'un dépôt GitHub, déploiement sur Streamlit Community Cloud, test du lien en navigation privée |
| 85–90 min | Envoyer le lien | Fatou répond au directeur avec l'URL, en une phrase : "Voici votre suivi, à jour, consultable à tout moment : {lien}" |

**Réponse à la question 3 (ce qu'il ne faut pas faire en 90 minutes) :** ne pas
essayer d'ajouter des fonctionnalités non demandées (comptes utilisateurs, export PDF
automatique, notifications par email) — le brief du directeur est "consulter quand il
veut", pas "recevoir des alertes automatiques" (ce sera le sujet du Module 5). Ajouter
ces fonctionnalités maintenant ferait perdre le temps nécessaire au cœur du livrable :
les 4 indicateurs et les 2 graphiques qui répondent directement aux 3 recommandations
déjà validées.

## Ce que ça change pour Fatou, concrètement

- Avant : un PDF envoyé une fois, jamais rouvert, qui doit être entièrement refait
  le mois suivant.
- Après : un lien unique, toujours à jour dès que le fichier de données est remplacé,
  que le directeur peut ouvrir depuis son téléphone en réunion.
- Ce dashboard devient aussi une preuve concrète à montrer à ses **autres** clients
  PME — c'est exactement ce qui alimente la page vitrine "conseil augmenté à l'IA"
  construite dans la même session (voir `06-exercices/site-vitrine/`).

## Et vous ?

Le défi en autonomie (`06-exercices/defi-autonomie.md`) vous demande de reproduire ce
même exercice de contrainte de temps, mais sur votre propre contexte : choisissez un
livrable simple (dashboard ou site), donnez-vous une limite de temps réaliste, et
allez jusqu'au lien déployé — pas jusqu'au "ça marche sur ma machine".
