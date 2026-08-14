# Défi en autonomie — Module 4

**À faire avant la Session 5 (mercredi 26 août 2026).** Ce défi produit le livrable de
ce module : une application ou un site **déployé**, accessible par une URL — pas
seulement du code qui fonctionne sur votre machine.

## Votre mission

Sur **votre propre contexte professionnel** (pas seulement la version DELTA
Distribution vue en session — c'est le moment de transposer) :

1. **Choisissez votre livrable** parmi les deux options vues ce module :
   - **Option A — Dashboard** : adaptez `app-solution/app.py` à un jeu de données qui
     vous concerne réellement (vos propres ventes, votre suivi de projets, un export
     de votre activité) — même 30-40 lignes suffisent pour démarrer.
   - **Option B — Site vitrine** : adaptez `site-vitrine/index.html` à votre propre
     offre professionnelle (pas celle de Fatou) — votre positionnement, votre
     tarification, votre preuve.
   - Vous pouvez faire les deux si le temps le permet, mais un seul est exigé pour le
     livrable du module.

2. **Décrivez votre projet à Claude Code en langage naturel** avant de repartir du
   gabarit fourni — reproduisez l'anatomie de projet vue en Partie 1 de la leçon
   (`04-lecon-ecrite-complete.md`) : contexte, données ou contenu disponibles,
   résultat attendu, contraintes de style. Ne partez pas d'une page blanche sans
   avoir formulé cette description complète.

3. **Testez votre application ou site en local** avant de déployer — un bug non
   corrigé en local se retrouve identique une fois en ligne, juste plus difficile à
   déboguer dans l'urgence.

4. **Déployez** :
   - Dashboard Streamlit → [Streamlit Community Cloud](https://streamlit.io/cloud)
     (gratuit, connecté à un dépôt GitHub).
   - Site HTML/CSS → Netlify, Vercel ou GitHub Pages (les trois sont gratuits pour ce
     niveau d'usage — voir la checklist de déploiement dans
     `../09-ressources-telechargeables/checklist-deploiement.pdf`).

5. **Vérifiez le lien final** dans une fenêtre de navigation privée (pas seulement
   depuis votre propre machine déjà connectée) pour confirmer qu'il fonctionne pour
   n'importe qui.

6. **Postez le lien** dans la communauté privée, canal `#par-module`, avec une phrase
   sur ce que montre votre application ou site.

## Pourquoi ce défi précisément

Le Module 5 (automatisation) part du principe que vous savez déjà faire tourner un
projet Claude Code de bout en bout, du prompt initial jusqu'à un résultat en ligne.
Sans ce défi complété, l'automatisation du Module 5 n'aurait rien à automatiser.

## Si vous êtes bloqué

- Un déploiement qui échoue n'est pas un échec du module — c'est une occasion
  supplémentaire d'appliquer la méthode de debugging assisté (Partie 4 de la leçon) :
  copiez le message d'erreur du service de déploiement, demandez un diagnostic à
  Claude Code avant de corriger.
- Rejoignez `#entraide` dans la communauté privée — les erreurs de déploiement les
  plus fréquentes (`requirements.txt` incomplet, chemin de fichier de données
  incorrect une fois en ligne) sont presque toujours les mêmes.
- Si le déploiement en ligne reste bloqué malgré tout après plusieurs tentatives, une
  application qui fonctionne parfaitement en local avec une capture d'écran claire
  reste un livrable partiel acceptable pour ne pas bloquer votre progression — mais
  visez le lien fonctionnel, c'est la promesse du module.

## Une fois terminé

Cochez la checklist de livrable dans `01-fiche-pedagogique.md` et ajoutez votre lien
fonctionnel à la **Section 4 de votre Portfolio IA Professionnel**
(voir `01-programme/parcours-portfolio-participant.md`).
