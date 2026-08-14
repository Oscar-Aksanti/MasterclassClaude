# Étude de cas — Module 5 — Le lundi oublié de Fatou

## Contexte

Fatou Diallo, consultante indépendante en gestion de projets à Dakar, suit depuis le Module 3 les ventes et le stock de son client **DELTA Distribution** grâce à un dashboard qu'elle a construit au Module 4. Le dashboard est fiable — le problème n'est pas le dashboard. Voici, sans exagération, ce qui s'est passé le mois précédant ce module.

- **Semaine 1 :** Fatou ouvre le dashboard le lundi matin comme prévu. Tout va bien, elle passe à autre chose.
- **Semaine 2 :** elle est en déplacement chez un autre client. Elle se dit qu'elle vérifiera le dashboard "un peu plus tard dans la journée" — elle ne le fait pas. Le stock de la région Nord était pourtant descendu sous le seuil critique cette semaine-là.
- **Semaine 3 :** de retour, elle ouvre le dashboard et découvre la baisse de la semaine 2, avec une semaine de retard. La rupture s'est confirmée entre-temps : DELTA a perdu des ventes sur la région Nord pendant cette période, exactement le problème identifié dès les notes de réunion du Module 1 et quantifié au Module 3.
- **Semaine 4 :** Fatou rédige à la main, comme chaque mois, un message de synthèse pour l'équipe DELTA — 20 minutes de rédaction, en reprenant les chiffres du dashboard un par un.

## Le problème, formulé clairement

Fatou n'a pas un problème d'outil : le dashboard est bon, l'analyse est bonne. Elle a un problème de **surveillance continue** — personne ni rien ne vérifie la situation à sa place quand elle n'a pas le temps d'ouvrir le dashboard elle-même. Elle découvre les problèmes après qu'ils se sont produits, jamais au moment où ils commencent, et elle continue de rédiger à la main une synthèse dont la structure est identique chaque semaine.

## Votre mission

Avant de lire la résolution ci-dessous, répondez par écrit (5 minutes) :

1. Si Fatou avait eu, à la semaine 2, un système qui la prévient automatiquement dès que le stock Nord passe sous le seuil, qu'est-ce qui aurait changé concrètement ?
2. Quelle est la partie de sa synthèse mensuelle qui pourrait être générée automatiquement, et quelle partie devrait rester écrite ou validée par elle ?
3. Si vous deviez fixer UNE seule règle pour que cette automatisation reste sûre (ne jamais faire X), laquelle choisiriez-vous ?

## Résolution modèle

| Semaine | Ce qui a coûté du temps / de l'information | Ce qui change avec le Module 5 |
|---|---|---|
| 1 | (rien à changer — la vérification manuelle a fonctionné cette fois) | Le scénario tourne en fond, la vérification manuelle devient un filet de sécurité plutôt qu'une nécessité |
| 2 | Le déplacement a empêché la vérification, la rupture est passée inaperçue au moment où elle commençait | Le scénario Make surveille la feuille de suivi en continu et envoie une alerte WhatsApp dès que la condition région Nord + stock sous seuil est remplie — peu importe où se trouve Fatou |
| 3 | Découverte tardive, une semaine après le début du problème | L'alerte arrive le jour même où l'équipe terrain renseigne le stock, pas une semaine plus tard |
| 4 | 20 minutes de rédaction manuelle, chaque mois, sur un format toujours identique | Le module Claude du scénario génère la synthèse factuelle automatiquement ; Fatou garde seulement la relecture et l'ajout d'une touche personnelle avant tout envoi à DELTA |

**Réponse à la question 3 (la règle de sécurité) :** la réponse retenue par ce module est explicite : **le scénario notifie Fatou, il n'envoie jamais rien directement à DELTA.** L'automatisation raccourcit le délai de détection et le temps de rédaction, mais garde un humain — Fatou — entre le système et la relation client. C'est le garde-fou n° 3 de la Partie 4 de la leçon écrite, appliqué très concrètement à ce cas.

## Ce que ça change pour elle, en chiffres

- **Délai de détection d'une rupture Nord** : jusqu'à 1 semaine de retard (découverte au prochain moment où elle pense à ouvrir le dashboard) → **le jour même**, dès que la ligne est renseignée dans Google Sheets.
- **Rédaction de la synthèse hebdomadaire** : environ 20 minutes chaque semaine (ou chaque mois selon la cadence réelle) → **moins de 2 minutes** de relecture, la rédaction factuelle étant déjà faite.
- **Charge mentale** : Fatou n'a plus besoin de "se souvenir de vérifier" — c'est précisément la différence entre un outil qu'on doit aller consulter et un système qui vient vous chercher au bon moment.

## Et vous ?

Le défi en autonomie (`06-exercices/defi-autonomie.md`) vous demande de faire le même diagnostic sur votre propre travail : quelle vérification répétitive oubliez-vous parfois de faire à temps, faute d'y penser au bon moment ? C'est souvent une meilleure candidate à l'automatisation qu'une tâche que vous faites déjà sans faute chaque semaine — l'automatisation a le plus de valeur là où l'oubli humain coûte le plus cher.
