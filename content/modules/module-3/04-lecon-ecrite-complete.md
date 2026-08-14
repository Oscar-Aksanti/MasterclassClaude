# Module 3 — Transformer Claude en Data Analyst personnel

> Document autoportant : si vous lisez ceci sans avoir assisté à la session live, vous pouvez suivre l'intégralité du module avec le même résultat. Comptez environ 2h à votre rythme (le nettoyage et l'écriture des insights demandent un peu plus de temps que la simple lecture).

## Pourquoi ça compte pour vous

Souvenez-vous de la semaine de Fatou avant cette formation (Module 1) : le mercredi, elle recevait un fichier Excel de 500 lignes de ventes de son client DELTA Distribution, et elle **copiait-collait des colonnes une par une** dans un chat Claude, parce qu'elle ne savait pas que Claude pouvait travailler directement sur le fichier. Elle perdait la moitié de son après-midi — et elle n'en sortait même pas de recommandation claire.

Aujourd'hui, cette situation se répète, mais Fatou est prête. DELTA Distribution vient de lui envoyer un export réel de ses ventes des 6 derniers mois. Les notes de la réunion du 15 août mentionnaient trois problèmes non résolus : une rupture de stock répétée à l'entrepôt Nord, un retard de livraison chez le partenaire transport, et un budget marketing Q4 pas encore validé (ce dernier point reste du ressort du Module 2). Ce fichier de ventes contient déjà, si on sait le lire, la preuve chiffrée des deux premiers problèmes.

Le problème n'est presque jamais "je ne sais pas analyser des données". C'est : le fichier reçu est sale (doublons, trous, incohérences), et l'outil semble réservé aux spécialistes (SQL, Python) qui ont fait des années d'études pour ça. Ce module démonte les deux blocages en même temps : vous allez nettoyer un vrai fichier imparfait avec Claude comme copilote, puis en tirer 3 recommandations chiffrées, sans écrire une seule ligne de code par vous-même.

## Ce que vous allez faire aujourd'hui

Quatre parties, dans l'ordre où un data analyst professionnel les enchaîne réellement : nettoyer les données brutes (Partie 1), les analyser avec les outils du quotidien — Excel/Sheets puis, en approfondissement, SQL et Python (Partie 2), visualiser et recommander (Partie 3), puis transformer tout ça en 3 insights business rédigés, le livrable du module (Partie 4).

Le fichier que vous allez utiliser est un vrai fichier `.xlsx` — pas un exemple simplifié — disponible dans `06-exercices/ventes-delta-distribution-brut.xlsx` : 310 lignes de ventes de DELTA Distribution (grossiste-distributeur agroalimentaire et biens de consommation courante, plusieurs régions du Sénégal) sur la période février–juillet 2026, volontairement imparfait.

---

## Partie 1 — Nettoyer des données avec Claude

Un fichier de ventes réel n'arrive presque jamais propre. Celui de DELTA contient exactement les 5 types de défauts que vous rencontrerez dans n'importe quel export professionnel :

| Défaut | Ce qu'on trouve dans le fichier DELTA |
|---|---|
| **Doublons stricts** | 10 lignes strictement identiques à une autre ligne du fichier |
| **Valeurs manquantes** | 15 lignes avec `quantite` ou `prix_unitaire_fcfa` vide |
| **Formats incohérents** | La colonne `region` contient "Nord", "nord", "NORD " et "Nord " (avec espace) pour désigner la même région |
| **Dates mélangées** | La colonne `date_vente` mélange deux formats : `14/02/2026` et `2026-02-22` |
| **Valeurs aberrantes** | Une quantité à 99999, un prix unitaire négatif, un prix multiplié par 100 par erreur de saisie |

**La méthode : décrire le diagnostic avant la correction.** Ne demandez jamais directement "nettoie ce fichier" — c'est trop vague, et vous ne saurez pas vérifier ce qui a été fait. Demandez d'abord un diagnostic, puis validez chaque correction.

```
Voici un fichier de ventes (ventes-delta-distribution-brut.xlsx). Avant de le corriger,
fais-moi un diagnostic complet : combien de lignes strictement dupliquées, combien de
valeurs manquantes par colonne, quelles incohérences de format sur la colonne region,
quels formats de date différents coexistent, et repère les valeurs de quantite ou de
prix_unitaire_fcfa qui semblent aberrantes (trop grandes, négatives, ou incohérentes
avec le reste de la colonne). Ne corrige rien encore, donne-moi juste le diagnostic.
```

Une fois le diagnostic confirmé, demandez la correction étape par étape (pas tout d'un coup, pour pouvoir vérifier chaque type de correction) :

```
Corrige maintenant le fichier dans cet ordre : (1) supprime les doublons stricts,
(2) standardise la colonne region sur les 5 valeurs exactes Dakar/Thiès/Nord/Sud/Casamance
en gérant la casse et les espaces, (3) uniformise toutes les dates au format AAAA-MM-JJ,
(4) traite les valeurs manquantes de quantite et prix_unitaire_fcfa en les remplaçant par
la médiane du même produit dans la même région et le même canal de vente, (5) corrige les
valeurs aberrantes en les remplaçant par cette même médiane et recalcule montant_total_fcfa
en conséquence. Donne-moi un résumé de ce qui a été modifié à chaque étape.
```

**Pourquoi la médiane, et pourquoi le même produit/région/canal ?** Parce qu'une quantité manquante sur "Riz parfumé 25kg" vendu en Grossiste dans le Nord ressemble davantage aux autres ventes de ce même produit, dans cette même région et ce même canal, qu'à la moyenne générale de tout le fichier — qui mélangerait des produits et des volumes très différents. C'est un choix méthodologique à assumer et à documenter, pas une case à cocher automatique : une entreprise pourrait tout aussi bien décider de **supprimer** les lignes incomplètes plutôt que de les estimer. Il n'y a pas de règle universelle : il y a un choix, et l'obligation de l'expliquer.

**Vérifiez toujours le résultat.** Un nettoyage n'est validé que si vous avez confirmé, après coup : le nombre de lignes final (300 dans le cas de DELTA, après suppression des 10 doublons), l'absence de valeur manquante restante, la présence des 5 régions et d'elles seules, un format de date unique, et l'absence de valeur extrême injustifiée. La version nettoyée de référence est dans `06-exercices/ventes-delta-distribution-nettoye.xlsx`.

---

## Partie 2 — Analyser : Excel/Sheets, puis SQL et Python en approfondissement

### Excel/Sheets piloté par prompts — le niveau qui suffit dans 80 % des cas

Vous n'avez pas besoin de mémoriser une formule pour l'utiliser : vous décrivez le résultat voulu, Claude produit la formule ou le tableau croisé dynamique, et vous demandez toujours l'explication en plus du résultat.

```
Dans le fichier ventes-delta-distribution-nettoye.xlsx, crée un tableau croisé dynamique
qui montre la quantite totale vendue par region (en lignes) et par mois (en colonnes).
Explique-moi ensuite, en une phrase simple, ce que révèle ce tableau sur la région Nord.
```

Le résultat que vous devez obtenir : la région Nord affiche une quantité mensuelle qui s'effondre sur trois mois consécutifs (mars, avril, mai) avant de remonter partiellement en juin-juillet — visible immédiatement dans un tableau croisé dynamique bien construit, sans avoir à faire un seul calcul à la main.

Pour une formule équivalente sans tableau croisé (utile pour un total ponctuel) :

```
Écris-moi la formule Excel qui calcule la somme de montant_total_fcfa pour la region
"Nord" ET le mois de mars 2026 uniquement, et explique-moi ce que fait chaque partie
de la formule.
```

Claude proposera une formule du type `=SOMME.SI.ENS(montant;region;"Nord";mois;"Mars")` (ou `SUMIFS` en anglais) — l'essentiel n'est pas de la retenir par cœur, mais de comprendre qu'elle additionne une colonne sous plusieurs conditions à la fois, et de savoir la faire adapter à une autre question la prochaine fois.

### SQL assisté — comprendre plus que produire

SQL (Structured Query Language) est le langage utilisé pour interroger une base de données. **Analogie :** si Excel est un classeur que vous consultez à l'œil, une base de données interrogée en SQL est un entrepôt immense où vous ne pouvez pas tout regarder à la fois — vous devez poser une question précise ("montre-moi seulement les ventes du Nord en mars") pour qu'on vous rapporte uniquement ce qui compte. Vous n'avez pas besoin de savoir écrire du SQL par cœur : vous devez savoir **lire** une requête que Claude génère pour vous, comprendre ce qu'elle fait, et demander une variante si elle ne répond pas exactement à votre question.

Sur une base ventes/clients simplifiée dérivée du fichier DELTA (deux tables : `ventes` et `clients` — voir la démonstration complète dans `05-demo-commentee.md`), un prompt type :

```
Écris une requête SQL qui calcule la quantite totale vendue par region et par mois
pour l'année 2026, dans une table ventes qui a les colonnes date_vente, region,
canal_vente, quantite, montant_total_fcfa. Explique-moi chaque clause de la requête
comme si je n'avais jamais écrit de SQL.
```

Résultat attendu (à titre d'exemple) :

```sql
SELECT
    region,
    STRFTIME('%Y-%m', date_vente) AS mois,
    SUM(quantite) AS quantite_totale
FROM ventes
WHERE STRFTIME('%Y', date_vente) = '2026'
GROUP BY region, mois
ORDER BY region, mois;
```

**Ce qu'il faut en retenir, phrase par phrase :** `SELECT` choisit les colonnes à afficher en sortie ; `FROM` indique dans quelle table chercher ; `WHERE` filtre les lignes avant tout calcul (ici, seulement l'année 2026) ; `GROUP BY` regroupe les lignes qui partagent la même région et le même mois avant de les additionner ; `SUM(quantite)` fait l'addition à l'intérieur de chaque groupe ; `ORDER BY` trie juste l'affichage final. C'est la même logique qu'un tableau croisé dynamique — SQL est simplement la version texte de la même question, utile quand les données sont trop nombreuses ou trop dispersées pour rester dans un simple fichier Excel.

### Python assisté (pandas) — le niveau 2, optionnel

Si vous êtes à l'aise avec Excel et SQL décrits ci-dessus, vous avez déjà tout ce qu'il faut pour produire le livrable de ce module. Pandas (une bibliothèque Python spécialisée dans les tableaux de données) devient utile quand vos fichiers dépassent largement Excel (plusieurs millions de lignes) ou quand vous voulez répéter exactement le même nettoyage chaque mois sans tout refaire à la main. Dans Claude Code, vous décrivez toujours ce que vous voulez, sans écrire le code vous-même :

```
Dans Claude Code, ouvre ventes-delta-distribution-brut.xlsx avec pandas, applique le
même nettoyage que celui qu'on a fait dans Excel (doublons, region, dates, valeurs
manquantes, valeurs aberrantes), et explique-moi ce que fait chaque ligne du script
généré.
```

Claude Code produit un script Python court (5-10 lignes utiles) qui fait exactement ce que vous avez déjà fait à la main dans Excel — l'intérêt n'est pas la performance sur ce fichier de 310 lignes, mais de voir que la **même logique de nettoyage** s'exprime dans un autre outil, et qu'elle devient réutilisable en une commande sur un futur fichier du même type. Ce n'est pas un prérequis du module : ne bloquez pas sur cette section si le code vous semble abstrait, revenez-y plus tard si vous en avez l'usage.

### R — un aperçu, pas un approfondissement

R est un langage utilisé principalement en recherche académique et en statistiques poussées (tests statistiques avancés, modèles économétriques, analyses cliniques). Si votre métier ne s'y prête pas, vous n'en avez probablement jamais besoin : Excel, SQL et pandas couvrent la quasi-totalité des besoins d'un professionnel non-data-scientist. Retenez simplement que Claude peut aussi générer et expliquer du code R si un jour un client ou un partenaire vous envoie un script R à comprendre — le principe (décrire la question, demander l'explication) reste identique.

---

## Partie 3 — Visualiser et recommander

Un insight sans visualisation convainc moins vite qu'un insight avec un graphique lisible en 3 secondes. La question à se poser n'est jamais "quel graphique est le plus joli", mais "quel graphique répond le plus directement à la question posée" :

| Question | Type de graphique | Pourquoi |
|---|---|---|
| Comment une valeur évolue-t-elle dans le temps ? | **Courbe** (ligne) | Le regard suit naturellement une tendance sur un axe temporel |
| Comparer plusieurs catégories entre elles à un instant donné | **Barres** | Les hauteurs se comparent plus facilement que des angles |
| Montrer une répartition en parts d'un tout | **Camembert** (avec modération, jamais plus de 5 parts) | Au-delà de 5 catégories, un camembert devient illisible — préférer des barres |

Demandez toujours à Claude de justifier son choix, pas seulement de produire le graphique :

```
Je veux montrer l'évolution de la quantite vendue dans la region Nord sur les 6 mois
(fevrier a juillet 2026), pour visualiser la chute liee a la rupture de stock. Quel
type de graphique recommandes-tu, et pourquoi celui-là plutôt qu'un autre ?
```

**Construire le dashboard** : Power BI (si vous y avez accès) ou Google Sheets/Looker Studio (accessibles à tous, gratuits) permettent tous les deux de connecter le fichier nettoyé et de produire un graphique clair en quelques minutes. Le choix de l'outil compte moins que la clarté du résultat : un dashboard simple à 2-3 graphiques bien choisis (ventes par région et par mois, part de chaque canal de vente, alerte visuelle sur le Nord) vaut mieux qu'un tableau de bord surchargé de 15 graphiques que personne ne lit.

---

## Partie 4 — Les 3 insights business : le livrable du module

Une fois le fichier nettoyé et exploré, la dernière étape — la plus importante — est de transformer les chiffres en recommandations qu'un client comme DELTA Distribution peut agir dès la semaine suivante. Voici les 3 insights attendus, avec les chiffres exacts obtenus sur le fichier nettoyé de référence (vos propres chiffres, si vous refaites l'exercice vous-même, devraient être très proches) :

**1. Rupture récurrente région Nord.** La région Nord vend en moyenne **2 876 unités/mois** en période normale (février, juin, juillet) contre seulement **1 071 unités/mois** pendant les 3 mois de rupture identifiés (mars, avril, mai 2026) — une baisse de **63 %**. Cela représente une perte estimée de 1 805 unités/mois, soit **5 416 unités sur les 3 mois**, et au prix moyen unitaire constaté dans le Nord (1 655 FCFA), environ **8 961 000 FCFA de chiffre d'affaires non réalisé** sur la période (~2 987 000 FCFA/mois). C'est la confirmation chiffrée exacte des "3 ruptures ce mois" mentionnées en réunion au Module 1.

**2. E-commerce en forte croissance mais sous-exploité.** La part du canal E-commerce dans le volume total vendu passe de **8,0 % en février à 24,1 % en juillet** (multipliée par 3 en 6 mois) — le volume brut vendu en ligne passe de 1 243 à 3 634 unités. Pourtant, l'E-commerce ne représente que **14,9 % de la valeur totale** en juillet (9,1 % du chiffre d'affaires sur l'ensemble des 6 mois) : le canal devient majeur en volume tout en restant minoritaire en valeur — un signal clair pour y allouer davantage de stock et de budget marketing avant qu'un concurrent n'occupe la place.

**3. Retards de livraison concentrés sur la région Nord.** Le délai moyen de livraison vers le Nord est de **10,8 jours**, contre **3,0 jours** en moyenne pour les 4 autres régions — un facteur 3,7 fois plus lent. Le sous-cas le plus touché est le canal Grossiste vers le Nord (12,1 jours en moyenne). Ce retard n'est pas prouvé comme la cause unique de la rupture de stock, mais il est un facteur aggravant fortement corrélé : un réassort qui arrive systématiquement en retard explique en partie pourquoi le stock ne se reconstitue pas à temps. C'est la donnée qui doit appuyer une discussion directe avec le partenaire transport actuel.

Le gabarit exact pour rédiger ces 3 insights (constat → chiffrage → recommandation) est fourni dans `09-ressources-telechargeables/checklist-nettoyage-donnees.md` et dans `06-exercices/exercice-guide-solution.md`.

---

## Démonstration commentée

Le déroulé exact, avec les prompts utilisés en direct sur le fichier DELTA, est disponible dans [`05-demo-commentee.md`](05-demo-commentee.md). Si vous suivez ce module en autonomie, reproduisez chaque étape sur votre propre copie du fichier plutôt que de simplement lire le script.

## Exercice guidé

Rendez-vous dans [`06-exercices/exercice-guide-depart.md`](06-exercices/exercice-guide-depart.md) : nettoyez `ventes-delta-distribution-brut.xlsx` étape par étape et rédigez les 3 insights. Corrigé commenté dans `exercice-guide-solution.md`.

## Défi en autonomie

Avant la Session 4, complétez l'intégralité de votre projet d'analyse — nettoyage documenté, 3 insights chiffrés, 1 visualisation exportée — sur le fichier DELTA (ou, si vous préférez, sur un jeu de données réel de votre propre activité). Détail complet dans [`06-exercices/defi-autonomie.md`](06-exercices/defi-autonomie.md).

## Ce qu'il faut retenir

1. **Nettoyer n'est jamais optionnel et jamais "à l'œil"** — vérifiez systématiquement les 5 types de défauts (doublons, valeurs manquantes, formats, dates, valeurs aberrantes) avant toute analyse, sinon le meilleur graphique du monde s'appuiera sur de mauvais chiffres.
2. **Excel/Sheets suffit pour la grande majorité des analyses professionnelles** — SQL et Python (pandas) sont des niveaux d'approfondissement à comprendre, pas des prérequis à maîtriser avant de produire un livrable utile.
3. **Un insight sans chiffre précis et sans recommandation actionnable n'est pas un insight** — "les ventes du Nord ont baissé" n'aide personne ; "63 % de baisse sur 3 mois, ~8,96 millions FCFA de perte estimée, sécuriser l'approvisionnement avant le prochain pic" donne à un client de quoi agir dès le lundi suivant.
