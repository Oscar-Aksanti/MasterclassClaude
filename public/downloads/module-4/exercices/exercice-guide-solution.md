# Corrigé commenté — Exercice guidé Module 4

## Le bug, expliqué en détail

**Type de bug :** mauvais nom de colonne après un renommage — l'un des trois types de
bug volontaire annoncés dans la leçon (`04-lecon-ecrite-complete.md`), avec l'erreur de
type sur une colonne numérique et le chemin de fichier incorrect.

**Ce qui s'est passé (scénario réaliste) :** au Module 3, en nettoyant le fichier de
ventes de DELTA Distribution, la colonne a été renommée de `montant_total` à
`montant_total_fcfa` — un bon réflexe de nettoyage : préciser l'unité dans le nom de
la colonne évite les erreurs de calcul plus tard. Mais le code du dashboard, écrit à
partir d'une version antérieure du fichier (ou d'un exemple copié avant le
renommage), a été laissé tel quel à un endroit.

**La ligne fautive**, dans `app-depart/app.py`, section "Indicateurs clés (KPI)` :

```python
chiffre_affaires_total = df_filtre["montant_total"].sum()
```

**Le message d'erreur exact que Streamlit affiche à l'écran :**

```
KeyError: 'montant_total'
```

Avec la trace remontant jusqu'à cette ligne précise — c'est exactement ce qu'il faut
copier-coller à Claude Code à l'étape 2 de l'exercice, en entier, pas seulement le
mot `KeyError`.

## Pourquoi ce bug est réaliste (et pas artificiel)

C'est l'un des bugs les plus fréquents dans un vrai projet de données : un
renommage de colonne fait à un endroit (ici, pendant le nettoyage), pas répercuté
partout où l'ancien nom était utilisé. Ni le nettoyage du Module 3, ni le code du
dashboard ne sont "faux" en eux-mêmes — c'est l'incohérence entre les deux qui casse
tout. C'est exactement le type d'erreur qu'un débutant abandonne en boucle
("ça ne marche toujours pas") faute de lire le message jusqu'au bout.

## Le diagnostic attendu de Claude Code (étape 2)

Une réponse correcte doit dire, en substance : *"Cette erreur `KeyError: 'montant_total'`
signifie que le code essaie d'accéder à une colonne nommée `montant_total` dans votre
tableau de données, mais cette colonne n'existe pas sous ce nom — c'est une erreur
Python très courante qui n'a rien à voir avec un bug de Streamlit."* Si Claude Code
propose directement une correction sans expliquer le "pourquoi", c'est l'occasion de
reformuler la demande en insistant sur le diagnostic d'abord (voir la Partie
Debugging assisté de `04-lecon-ecrite-complete.md`).

## Vérification de l'hypothèse (étape 3)

En listant les colonnes réelles du fichier :

```
date_vente, region, canal_vente, categorie_produit, produit, quantite,
prix_unitaire_fcfa, montant_total_fcfa, commercial
```

La colonne s'appelle bien `montant_total_fcfa`, pas `montant_total`. L'écart est
visible dès qu'on met les deux noms côte à côte — c'est tout l'intérêt de vérifier
avant de corriger à l'aveugle.

## La correction

```python
# Avant (bug)
chiffre_affaires_total = df_filtre["montant_total"].sum()

# Après (corrigé)
chiffre_affaires_total = df_filtre["montant_total_fcfa"].sum()
```

C'est la **seule** ligne à modifier dans tout le fichier — toutes les autres
occurrences de `montant_total_fcfa` dans `app.py` étaient déjà correctes. La version
complète et corrigée est fournie dans `../app-solution/app.py`.

## Résultat attendu une fois corrigé

En relançant `streamlit run app.py` depuis `app-solution/` (ou depuis `app-depart/`
une fois votre correction appliquée) :

- 4 indicateurs s'affichent en haut (chiffre d'affaires, quantité vendue, nombre de
  commandes, panier moyen) sans erreur.
- Une alerte sombre avec un accent corail apparaît, mentionnant la région **Nord** et
  au moins 3 mois d'anomalie (avril, mai, juin 2026 dans le jeu de données fourni).
- Le graphique "Ventes mensuelles par région" affiche 5 courbes (une par région), avec
  un net décrochage visible sur la courbe Nord au printemps 2026.
- Le graphique "Croissance de l'E-commerce" montre une part de volume qui augmente de
  façon régulière de février à juillet 2026.

Si l'un de ces éléments manque, vérifiez que `data/ventes-delta-nettoye.csv` est bien
présent dans le dossier `data/` relatif à `app.py` (c'est le 3ᵉ type de bug possible
mentionné dans la leçon — un chemin de fichier incorrect — mais il n'est pas présent
dans cette version de l'exercice).

## Ce que cet exercice devait vous apprendre

Ce n'est pas la ligne corrigée qui compte — c'est la séquence : **lire l'erreur en
entier → demander un diagnostic avant une correction → vérifier l'hypothèse avec une
question simple → corriger de façon ciblée → vérifier le résultat sur le fond, pas
seulement l'absence d'erreur.** Réutilisez cette séquence à chaque bug que vous
rencontrerez après cette formation, avec n'importe quel projet.
