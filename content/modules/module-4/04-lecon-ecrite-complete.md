# Module 4 — Créer des solutions numériques avec Claude Code

> Document autoportant : si vous lisez ceci sans avoir assisté à la session live, vous pouvez suivre l'intégralité du module avec le même résultat. Comptez environ 1h45 à votre rythme (un peu plus qu'un module de lecture pure — vous allez réellement construire et déployer quelque chose).

## Pourquoi ça compte pour vous

Fatou Diallo a passé le Module 3 à nettoyer et analyser les ventes de son client
DELTA Distribution. Elle a trouvé trois choses importantes : une rupture de stock
récurrente dans la région Nord, une croissance rapide mais sous-exploitée du canal
E-commerce, et des retards de livraison concentrés sur un partenaire transport. Elle
a rédigé ses recommandations dans un document — et elle s'apprête à faire ce qu'elle
a toujours fait : envoyer un fichier Excel et un PDF par email à son client, en
espérant qu'il les ouvre vraiment.

Le problème n'est pas son analyse — elle est solide. C'est son mode de restitution.
Un fichier envoyé par email est déjà obsolète le mois suivant, personne ne le
rouvre après la première lecture, et Fatou doit refaire tout le travail de mise en
forme à chaque nouveau mois de données.

Ce que ce module change : au lieu d'un fichier statique, Fatou construit une
**application web** que son client peut ouvrir n'importe quand, par un simple lien,
et qui affiche toujours les données à jour. Elle construit aussi une **page vitrine**
pour présenter sa nouvelle offre "conseil augmenté à l'IA" — parce qu'un consultant
qui sait construire ce genre d'outil ne vend plus seulement son temps.

Vous n'avez besoin d'aucune expérience de développement pour ce module. Vous allez
décrire ce que vous voulez en français à Claude Code, comme dans les modules
précédents — la différence, c'est que le résultat cette fois est une application
que d'autres personnes peuvent utiliser, pas seulement un document que vous lisez
vous-même.

## Ce que vous allez faire aujourd'hui

Cinq parties, dans l'ordre où vous les utiliserez en pratique : d'abord comprendre
comment décrire une idée d'application à Claude Code pour obtenir un vrai projet
structuré (Partie 1), puis construire un dashboard Streamlit pas à pas en réutilisant
les données nettoyées du Module 3 (Partie 2), puis créer une page vitrine
professionnelle pour une offre de service (Partie 3), puis apprendre la méthode de
debugging assisté — indispensable dès qu'un projet a plus de dix lignes (Partie 4),
et enfin déployer votre travail pour repartir avec un lien fonctionnel, pas juste du
code qui tourne sur votre machine (Partie 5).

---

## Partie 1 — Anatomie d'un projet Claude Code

Dans les modules précédents, vous avez demandé à Claude Code de produire un fichier
unique : un compte-rendu, un notebook d'analyse, un fichier nettoyé. Une application
ou un site est différent : c'est **plusieurs fichiers qui travaillent ensemble** — le
code lui-même, la liste des librairies nécessaires, les données, parfois du style
visuel séparé. Claude Code sait construire cette structure à partir d'une description
en langage naturel, mais la qualité de ce que vous obtenez dépend directement de la
qualité de votre description de départ.

### Ce qu'il faut donner à Claude Code pour démarrer un bon projet

| Élément | Pourquoi c'est nécessaire | Exemple (cas de Fatou) |
|---|---|---|
| **Le contexte** | Qui va utiliser ça, et pour quoi faire | "Un dashboard que j'envoie à un client pour qu'il suive ses ventes mensuelles" |
| **Les données ou le contenu disponible** | Sans ça, Claude Code invente une structure qui ne correspondra pas à vos vraies données | "Un fichier CSV avec ces colonnes : date, région, canal de vente, montant..." |
| **Le résultat attendu** | La forme concrète, pas juste l'intention | "Une page web avec des graphiques, pas un fichier Excel" |
| **Les contraintes** | Ce qui doit être respecté ou évité | "Doit rester lisible sur mobile", "pas de couleurs autres que ma charte" |

**Mauvaise description (trop vague) :** *"Fais-moi un dashboard de ventes."*
Claude Code va produire quelque chose — mais probablement pas ce que vous aviez en
tête, et vous perdrez du temps en allers-retours à corriger la structure plutôt que
le détail.

**Bonne description :** *"Je veux un dashboard Streamlit qui charge le fichier
`data/ventes-delta-nettoye.csv` (colonnes : date_vente, region, canal_vente,
categorie_produit, produit, quantite, prix_unitaire_fcfa, montant_total_fcfa,
commercial). Il doit afficher : le chiffre d'affaires total, les ventes mensuelles
par région sous forme de graphique, une alerte visuelle si une région chute
fortement sur plusieurs mois, et la répartition des ventes par canal de vente. Utilise
cette palette de couleurs : {couleurs de la charte}."*

La différence entre les deux n'est pas la longueur pour la longueur — c'est que la
seconde description donne à Claude Code tout ce qu'il faut pour produire un projet
structuré dès la première tentative, plutôt qu'un brouillon à corriger cinq fois.

### Ce que produit Claude Code à partir d'une bonne description

Pour un dashboard Streamlit, une structure de projet typique ressemble à ceci :

```
mon-projet/
├── app.py              ← le code de l'application
├── requirements.txt     ← la liste des librairies nécessaires (streamlit, pandas...)
└── data/
    └── mon-fichier.csv  ← vos données
```

Vous n'avez pas besoin de créer ces fichiers vous-même : décrivez le projet, Claude
Code les génère, vous les ouvrez ensuite pour vérifier — exactement comme vous avez
vérifié un fichier `notes.md` au Module 1.

---

## Partie 2 — Construire un dashboard Streamlit pas à pas

**Streamlit** est un outil qui transforme un script Python en application web
consultable dans un navigateur, sans avoir à apprendre le développement web
(HTML/CSS/JavaScript) pour autant. Vous décrivez ce que vous voulez afficher,
Claude Code écrit le script, et Streamlit se charge de le transformer en page
interactive.

### Le fil rouge de cette partie : le dashboard de Fatou pour DELTA Distribution

Fatou reprend le fichier nettoyé du Module 3 (`ventes-delta-nettoye.csv`) et
construit un dashboard en 4 blocs, exactement ceux annoncés dans le cahier des
charges de son client :

1. **Indicateurs clés** : chiffre d'affaires total, quantité vendue, nombre de
   commandes, panier moyen — les chiffres qu'un dirigeant regarde en premier.
2. **Alerte région Nord** : un encadré visuel qui se déclenche automatiquement si le
   chiffre d'affaires d'un mois donné pour la région Nord est anormalement bas par
   rapport aux autres régions — la confirmation quantitative du problème évoqué en
   réunion client au Module 1.
3. **Ventes mensuelles par région** : un graphique à plusieurs courbes, une par
   région, pour visualiser l'évolution dans le temps.
4. **Répartition par canal de vente** : un graphique qui montre la part de chaque
   canal (Grossiste, Détail, E-commerce) — et un second graphique dédié à la
   croissance de l'E-commerce en particulier, l'opportunité identifiée au Module 3.

Le projet complet (fonctionnel) est dans `06-exercices/app-solution/`. Le déroulé
exact de sa construction, prompt par prompt, est dans `05-demo-commentee.md`.

### Le rôle des filtres

Un bon dashboard n'affiche pas seulement des chiffres figés : il laisse la personne
qui consulte choisir une période, une région, un canal. Dans le projet de Fatou, la
barre latérale (« sidebar ») contient ces filtres — demandez-les explicitement dans
votre description de projet si vous voulez cette fonctionnalité : *"Ajoute des
filtres dans une barre latérale pour la région, le canal de vente et une période de
dates."*

### Lancer votre dashboard en local

Une fois le projet généré par Claude Code, dans un terminal, à l'intérieur du dossier
du projet :

```
pip install -r requirements.txt
streamlit run app.py
```

Une page s'ouvre automatiquement dans votre navigateur à l'adresse
`http://localhost:8501`. C'est votre application, mais elle ne tourne encore que sur
votre machine — la Partie 5 (Déploiement) vous montrera comment obtenir un lien que
n'importe qui peut ouvrir.

---

## Partie 3 — Créer un site vitrine simple

Un dashboard sert à **restituer des données**. Une page vitrine sert à **présenter
une offre** — c'est ce dont Fatou a besoin pour son nouveau positionnement "conseil
augmenté à l'IA" : une page unique, professionnelle, qui explique ce qu'elle propose
et donne envie de la contacter.

### Ce qu'une bonne page vitrine contient (structure éprouvée)

1. **Un en-tête clair** : qui vous êtes, ce que vous proposez en une phrase, un
   premier bouton d'action ("Découvrir l'offre" ou équivalent).
2. **Le problème que vous résolvez** : formulé du point de vue du client, pas du
   vôtre — pas "je sais utiliser Claude" mais "vos rapports mensuels vous prennent
   trop de temps".
3. **Votre offre concrète** : 2 à 4 blocs décrivant ce que vous livrez réellement,
   pas des mots-clés vagues.
4. **Une preuve** : un exemple, un témoignage, une démonstration (Fatou montre
   justement le dashboard de la Partie 2 comme preuve concrète).
5. **Un tarif ou une accroche de tarif** : même une fourchette rassure plus qu'une
   absence totale d'information.
6. **Un appel à l'action final** : un moyen simple et unique de vous contacter.

### Décrire ce projet à Claude Code

Exactement comme pour le dashboard, la qualité de votre description conditionne le
résultat. Pour une page vitrine, précisez explicitement votre charte graphique si
vous en avez une (couleurs exactes, coins arrondis ou non, style de typographie) —
sinon Claude Code choisira un style par défaut qui ne vous ressemblera pas
forcément :

> *"Crée une page HTML/CSS unique pour présenter mon offre de {votre activité}. Structure
> : en-tête avec accroche, section problème, section offre en 3 blocs, une preuve,
> un tarif, un bandeau d'appel à l'action final. Couleurs : {vos couleurs exactes en
> hexadécimal}. Coins arrondis partout, pas d'angle droit dur sur les éléments
> d'accent."*

Le projet complet de Fatou (adapté à son offre) est dans `06-exercices/site-vitrine/`.

### Une page vitrine n'a pas besoin d'être une application

Contrairement au dashboard, une page vitrine simple ne nécessite ni serveur Python,
ni base de données : un fichier `index.html` (et éventuellement un fichier `.css`
séparé pour le style) suffit. C'est plus simple à créer, à comprendre, et — vous le
verrez en Partie 5 — plus simple à déployer.

---

## Partie 4 — Debugging assisté : lire l'erreur avant de la corriger

Tôt ou tard, votre projet va afficher un message d'erreur au lieu du résultat
attendu. C'est normal — ça arrive aux développeurs professionnels tous les jours, pas
seulement aux débutants. Ce qui distingue quelqu'un qui progresse de quelqu'un qui
reste bloqué, c'est la méthode face à l'erreur, pas l'absence d'erreur elle-même.

### La méthode en 4 étapes

1. **Lire le message d'erreur en entier.** La réaction la plus fréquente (et la
   moins efficace) est de paniquer devant un bloc de texte technique et de le
   copier-coller en entier sans le lire, en demandant juste "corrige ça". Le message
   d'erreur contient presque toujours : le **type d'erreur** (ex. `KeyError`,
   `TypeError`, `FileNotFoundError`) et la **ligne exacte** où ça se produit.

2. **Demander un diagnostic avant une correction.** Ne demandez pas "corrige mon
   code" en premier réflexe. Demandez : *"Voici l'erreur exacte que j'obtiens :
   {collez le message en entier}. Avant de corriger, explique-moi en une phrase
   simple ce que ça signifie."* Cette étape évite deux pièges : corriger le mauvais
   problème, ou obtenir une correction que vous ne comprenez pas et qui recrée le
   même bug plus tard.

3. **Vérifier l'hypothèse vous-même quand c'est simple.** Si le diagnostic pointe
   vers un nom de colonne, un chemin de fichier ou une valeur suspecte, demandez à
   Claude Code de vous montrer l'information réelle (*"Liste les colonnes exactes de
   ce fichier"*) avant de valider la correction. Ce réflexe transforme une correction
   subie en une correction comprise.

4. **Corriger de façon ciblée, puis vérifier le résultat sur le fond.** Une fois la
   correction appliquée, l'absence d'erreur affichée n'est pas la preuve que tout est
   juste — vérifiez que le résultat a du sens (les bons chiffres, les bonnes
   tendances), pas seulement que la page s'affiche.

### Les 3 familles de bugs les plus fréquentes pour un débutant

| Famille de bug | Signal typique | Exemple |
|---|---|---|
| **Mauvais nom de colonne après un renommage** | `KeyError: 'nom_colonne'` | Une colonne renommée à une étape de nettoyage, mais pas mise à jour partout dans le code |
| **Erreur de type sur une colonne numérique lue comme texte** | `TypeError` lors d'un calcul, ou un total qui affiche `0` sans erreur | Une colonne de prix contenant un symbole ou un espace, lue comme du texte plutôt que comme un nombre |
| **Chemin de fichier incorrect** | `FileNotFoundError` | Un fichier de données déplacé ou renommé, sans que le chemin dans le code soit mis à jour |

L'exercice guidé de ce module (`06-exercices/exercice-guide-depart.md`) vous fait
vivre la première famille en conditions réelles, sur le dashboard de Fatou.

### Ce qu'il ne faut jamais faire

- Insister avec exactement la même demande ("ça ne marche toujours pas") sans
  fournir de nouvelle information à chaque tentative — Claude Code ne peut pas
  deviner ce qu'il ne voit pas.
- Demander une réécriture complète d'un projet qui fonctionne à 90 % pour corriger
  un bug localisé — le risque de perdre ce qui marchait déjà dépasse le bénéfice.
- Ignorer un avertissement (« warning ») en se concentrant uniquement sur les erreurs
  bloquantes — un avertissement aujourd'hui devient parfois une erreur demain.

---

## Partie 5 — Déployer pour obtenir un lien fonctionnel

Un projet qui ne tourne que sur votre ordinateur n'est pas encore un livrable
professionnel — vous ne pouvez pas l'envoyer par lien à un client, ni l'ajouter tel
quel à votre Portfolio IA Professionnel. Le déploiement est l'étape qui transforme
votre travail en quelque chose que n'importe qui peut ouvrir, gratuitement, sans
installer quoi que ce soit sur sa machine.

### Pour un dashboard Streamlit → Streamlit Community Cloud

1. Créez un compte gratuit sur [streamlit.io/cloud](https://streamlit.io/cloud) (ou
   connectez-vous avec votre compte GitHub existant).
2. Votre projet doit être hébergé sur GitHub (un dépôt, même privé au départ, avec
   `app.py`, `requirements.txt` et votre dossier `data/`) — demandez à Claude Code de
   vous guider pour créer ce dépôt si vous ne l'avez jamais fait : *"Aide-moi à créer
   un dépôt GitHub pour ce projet et à y pousser mon code, étape par étape."*
3. Dans Streamlit Community Cloud, cliquez sur **"New app"**, choisissez votre dépôt,
   la branche, et le fichier principal (`app.py`).
4. Cliquez sur **"Deploy"**. Après quelques minutes, vous obtenez une URL du type
   `https://votre-app.streamlit.app` — c'est ce lien qui va dans votre Portfolio.

### Pour un site HTML/CSS → Netlify, Vercel ou GitHub Pages

Les trois options sont gratuites à ce niveau d'usage et fonctionnent de façon très
similaire — glisser-déposer votre dossier (Netlify propose littéralement un glisser-
déposer dans le navigateur, sans compte GitHub nécessaire pour démarrer) et obtenir
un lien en quelques minutes.

1. Rendez-vous sur [app.netlify.com/drop](https://app.netlify.com/drop).
2. Glissez le dossier contenant votre `index.html` (et son `style.css` si séparé)
   directement dans la page.
3. Un lien du type `https://nom-aleatoire.netlify.app` est généré immédiatement.

### Ce qui casse le plus souvent au moment du déploiement (et comment l'éviter)

- **Un chemin de fichier qui fonctionnait en local mais pas en ligne** : utilisez
  toujours des chemins relatifs (`data/mon-fichier.csv`), jamais un chemin absolu
  propre à votre ordinateur (`/Users/votrenom/Bureau/...`).
- **Une librairie oubliée dans `requirements.txt`** : si votre app utilise une
  librairie que vous avez installée manuellement en local sans la lister, le
  déploiement échoue avec une erreur d'import. Demandez à Claude Code de vérifier que
  `requirements.txt` contient bien tout ce que `app.py` importe.
- **Des données personnelles ou confidentielles dans le dépôt public** : si votre
  projet contient des données sensibles, utilisez un dépôt GitHub privé (les deux
  plateformes de déploiement gratuit le permettent).

La checklist complète, dans l'ordre, est disponible dans
`09-ressources-telechargeables/checklist-deploiement.pdf`.

---

## Démonstration commentée

Le déroulé exact, avec les prompts utilisés en direct pour construire le dashboard et
diagnostiquer le bug, est disponible dans [`05-demo-commentee.md`](05-demo-commentee.md).
Si vous suivez ce module en autonomie, reproduisez chaque étape sur votre machine
plutôt que de simplement lire le script.

## Exercice guidé

Rendez-vous dans [`06-exercices/exercice-guide-depart.md`](06-exercices/exercice-guide-depart.md) :
un dashboard Streamlit qui contient un bug volontaire et réaliste à corriger en
appliquant la méthode de la Partie 4. Corrigé commenté dans `exercice-guide-solution.md`.

## Défi en autonomie

Avant la Session 5, construisez et **déployez** votre propre dashboard ou site
vitrine, sur votre contexte professionnel réel. Détail complet dans
[`06-exercices/defi-autonomie.md`](06-exercices/defi-autonomie.md).

## Ce qu'il faut retenir

1. **La qualité d'un projet Claude Code dépend de la qualité de votre description de
   départ** — contexte, données disponibles, résultat attendu et contraintes,
   donnés d'emblée, évitent des heures d'allers-retours.
2. **Face à une erreur, diagnostiquer avant de corriger** — lire le message en
   entier, comprendre le "pourquoi" avant le "comment", vérifier l'hypothèse quand
   c'est simple.
3. **Un projet n'est un livrable professionnel qu'une fois déployé** — un lien que
   n'importe qui peut ouvrir vaut infiniment plus qu'un dossier qui ne tourne que sur
   votre machine.
