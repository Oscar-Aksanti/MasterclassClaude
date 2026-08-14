# Exercice guidé — Module 4 — Debugging assisté sur le dashboard DELTA Distribution

**Durée : 30-35 minutes, en session (bloc pratique guidée).**

## Contexte

Vous avez reçu un projet Streamlit déjà commencé : un dashboard qui doit afficher les
ventes de DELTA Distribution (le client fil rouge de Fatou, déjà nettoyées au
Module 3) — ventes mensuelles par région, alerte région Nord, répartition par canal
de vente. Le dossier `app-depart/` contient ce projet. **Il ne fonctionne pas encore.**

Ce n'est pas un accident pédagogique caché : c'est l'exercice. Vous allez appliquer
la méthode de debugging assisté vue dans la démonstration (`05-demo-commentee.md`)
plutôt que de deviner ou de tout réécrire.

## Ce que vous avez sous la main

```
app-depart/
├── app.py                          ← le dashboard (contient le bug)
├── requirements.txt                ← les librairies nécessaires
└── data/
    └── ventes-delta-nettoye.csv    ← le dataset nettoyé (celui du Module 3)
```

## Étape 1 — Lancez l'application et laissez-la planter

Dans un terminal, à l'intérieur du dossier `app-depart/` :

```
pip install -r requirements.txt
streamlit run app.py
```

Une page s'ouvre dans votre navigateur. Elle ne doit **pas** s'afficher normalement :
une erreur Python doit apparaître directement dans la page (c'est une des forces de
Streamlit : il affiche l'erreur à l'écran, pas seulement dans le terminal).

**Ne corrigez rien encore.** Lisez le message d'erreur en entier, du début à la fin.

## Étape 2 — Donnez l'erreur à Claude Code avant de toucher au code

C'est le cœur de la méthode enseignée dans ce module : **ne pas** corriger au hasard,
**ne pas** demander directement "corrige mon code". À la place :

1. Copiez le message d'erreur complet affiché par Streamlit (le "traceback" — le bloc
   de texte qui indique la ligne fautive et le type d'erreur).
2. Ouvrez Claude Code dans le dossier `app-depart/`.
3. Collez le traceback et demandez un **diagnostic d'abord**, pas une correction :

   > *"Voici l'erreur exacte que j'obtiens en lançant mon app Streamlit : {collez le
   > traceback complet}. Avant de corriger quoi que ce soit, explique-moi en une
   > phrase simple ce que cette erreur signifie et à quelle ligne elle se produit."*

4. Lisez l'explication. Est-ce que vous comprenez maintenant **pourquoi** ça plante,
   pas seulement **où** ?

## Étape 3 — Vérifiez l'hypothèse vous-même avant de corriger

Avant de laisser Claude Code corriger, vérifiez l'indice le plus simple possible :
le nom exact des colonnes du fichier de données.

> *"Peux-tu lister les noms exacts des colonnes du fichier `data/ventes-delta-nettoye.csv` ?"*

Comparez cette liste avec le nom de colonne utilisé à la ligne fautive identifiée à
l'étape 2. Une différence vous saute-t-elle aux yeux ?

## Étape 4 — Demandez la correction, en précisant la contrainte

Une fois que vous avez compris le problème, demandez la correction en donnant le
contexte (pas juste "corrige") :

> *"Le fichier de données utilise le nom de colonne `{nom_reel}`, mais le code à la
> ligne {numero} utilise `{nom_utilise_dans_le_code}`. Corrige cette ligne pour
> qu'elle utilise le bon nom de colonne, sans toucher au reste du fichier."*

Relancez `streamlit run app.py`. Le dashboard doit maintenant s'afficher normalement :
4 indicateurs en haut, une alerte ou un message sur la région Nord, un graphique
d'évolution mensuelle par région, une répartition par canal de vente.

## Étape 5 — Vérifiez que le résultat a du sens métier, pas seulement qu'il s'affiche

Une app qui s'affiche sans erreur n'est pas automatiquement correcte. Vérifiez :

- Le chiffre d'affaires total affiché vous semble-t-il cohérent avec l'ordre de
  grandeur du fichier de données (quelques dizaines de millions de FCFA sur 6 mois) ?
- La région **Nord** déclenche-t-elle bien une alerte sur au moins 3 mois ?
- Le graphique de croissance de l'E-commerce montre-t-il une tendance clairement
  croissante sur les 6 mois ?

Si l'un de ces points ne correspond pas, c'est le signal qu'il reste un problème —
retournez à l'étape 2 avec cette nouvelle observation.

## Si vous êtes bloqué

- Ne demandez pas à Claude Code de "réécrire toute l'app" — ça masquerait la leçon de
  cet exercice (isoler UNE cause précise) et risquerait d'introduire de nouveaux bugs.
- Le corrigé complet et commenté, avec l'explication détaillée du bug, est dans
  `exercice-guide-solution.md` — mais essayez sérieusement les étapes 1 à 4 avant de
  l'ouvrir : l'objectif est la méthode, pas la ligne corrigée elle-même.

## Une fois terminé

Passez au défi en autonomie (`defi-autonomie.md`) : vous allez déployer cette version
corrigée pour obtenir un lien fonctionnel, puis construire votre propre site vitrine.
