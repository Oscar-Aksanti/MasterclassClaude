# Checklist de déploiement — Module 4

Cochez chaque ligne dans l'ordre. Cette checklist existe aussi en version PDF stylée
(`checklist-deploiement.pdf`) — imprimable ou consultable hors ligne pendant votre
déploiement.

## Avant de déployer (quel que soit le projet)

- [ ] L'application ou le site fonctionne **en local**, sans erreur affichée, avant
      toute tentative de déploiement.
- [ ] Tous les chemins de fichiers dans le code sont **relatifs**
      (`data/mon-fichier.csv`), jamais un chemin absolu propre à votre machine
      (`/Users/votrenom/Bureau/...` ou `C:\Utilisateurs\...`).
- [ ] Aucune donnée personnelle ou confidentielle ne se trouve dans un dossier qui
      sera rendu public (vérifiez le contenu de `data/` en particulier).
- [ ] Le résultat affiché a été vérifié sur le fond (les bons chiffres, les bonnes
      tendances), pas seulement l'absence d'erreur à l'écran.

## Pour un dashboard Streamlit → Streamlit Community Cloud

- [ ] Le fichier `requirements.txt` liste **toutes** les librairies importées dans
      `app.py` (demandez à Claude Code de vérifier cette liste avant de continuer).
- [ ] Un compte GitHub est créé (gratuit).
- [ ] Le projet est poussé dans un dépôt GitHub (demandez à Claude Code de vous
      guider commande par commande si c'est la première fois).
- [ ] Un compte Streamlit Community Cloud est créé sur streamlit.io/cloud (connexion
      possible directement avec le compte GitHub).
- [ ] Dans Streamlit Community Cloud : "New app" → dépôt choisi → branche choisie →
      fichier principal renseigné (`app.py`) → "Deploy".
- [ ] Le déploiement se termine sans erreur (patientez 1 à 2 minutes) et une URL du
      type `https://votre-app.streamlit.app` est obtenue.

## Pour un site HTML/CSS → Netlify, Vercel ou GitHub Pages

- [ ] Le dossier du site contient un fichier `index.html` à la racine (pas dans un
      sous-dossier), avec ses éventuels fichiers `.css`/images à côté.
- [ ] **Option la plus rapide (Netlify)** : rendez-vous sur
      app.netlify.com/drop et glissez-déposez le dossier directement dans la page —
      aucun compte n'est nécessaire pour ce premier essai.
- [ ] **Option avec compte (Vercel ou GitHub Pages)** : le projet est poussé sur
      GitHub, puis connecté à la plateforme choisie en suivant ses instructions
      d'import de dépôt.
- [ ] Une URL fonctionnelle est obtenue (`https://nom-aleatoire.netlify.app` ou
      équivalent).

## Après le déploiement (ne jamais sauter cette étape)

- [ ] Le lien est ouvert dans une **fenêtre de navigation privée** (pas seulement
      depuis votre propre machine déjà connectée) pour confirmer qu'il fonctionne
      pour n'importe qui.
- [ ] Si une erreur apparaît uniquement en ligne (pas en local) : c'est presque
      toujours un chemin de fichier incorrect ou une librairie manquante dans
      `requirements.txt` — appliquez la méthode de debugging assisté (Partie 4 de la
      leçon) avec le message d'erreur affiché par la plateforme de déploiement.
- [ ] Le lien est ajouté à la **Section 4 du Portfolio IA Professionnel**.
- [ ] Le lien est posté dans la communauté privée, canal `#par-module`, avec une
      phrase sur ce que montre l'application ou le site.

## Signal que quelque chose ne va pas

Si vous avez coché toutes les cases ci-dessus mais que le lien ne fonctionne toujours
pas pour un visiteur externe, ne recommencez pas le déploiement en boucle sans
changement : copiez le message d'erreur exact affiché par la plateforme et donnez-le
à Claude Code avec la question *"Voici l'erreur exacte obtenue lors du déploiement :
{message}. Que dois-je vérifier en priorité ?"* — exactement la même méthode que pour
un bug local.
