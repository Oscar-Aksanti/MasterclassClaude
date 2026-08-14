# Prompts du module — Module 4 — Créer des solutions numériques avec Claude Code

20 prompts liés à ce module, extraits de la bibliothèque complète des 100 prompts professionnels (`bibliotheque-100-prompts/`, Phase 5 — la structure JSON ci-dessous sert de source pour l'agrégation). Préfixe de catégorie : `DEV` (Développement, apps, sites, debugging).

---

### DEV-001 — Décrire un projet d'application complet avant de le lancer

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Avant de démarrer n'importe quel projet d'application ou de site, pour éviter les allers-retours dus à une description trop vague.
- **Prompt :** *"Je veux construire {type d'application}. Contexte d'usage : {qui va l'utiliser et pourquoi}. Données ou contenu disponible : {description précise}. Résultat attendu : {forme concrète}. Contraintes : {style, plateforme, limites}."*
- **Exemple rempli :** "Je veux construire un dashboard Streamlit. Contexte d'usage : mon client DELTA Distribution doit pouvoir suivre ses ventes mensuelles sans me redemander un rapport. Données disponibles : un fichier CSV avec les colonnes date_vente, region, canal_vente, quantite, montant_total_fcfa. Résultat attendu : une page web avec 4 indicateurs et 2 graphiques. Contraintes : rester lisible pour un non-technicien."
- **Résultat attendu :** Un projet structuré et fonctionnel dès la première génération, sans étape de clarification supplémentaire.

### DEV-002 — Générer un dashboard Streamlit à partir d'un fichier de données

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Crée un dashboard Streamlit qui charge le fichier {nom_fichier} (colonnes : {liste_colonnes}). Affiche : {liste_indicateurs_et_graphiques souhaités}."*
- **Résultat attendu :** Un fichier `app.py` et un `requirements.txt` prêts à être lancés avec `streamlit run app.py`.

### DEV-003 — Ajouter des filtres interactifs à un dashboard existant

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Une fois le dashboard de base fonctionnel, pour le rendre exploitable par la personne qui le consulte.
- **Prompt :** *"Ajoute des filtres dans une barre latérale pour {liste_des_champs_a_filtrer}, et applique-les à tous les graphiques et indicateurs de la page."*
- **Résultat attendu :** Une barre latérale avec des sélecteurs, et un dashboard qui se met à jour dynamiquement selon les choix filtrés.

### DEV-004 — Créer une alerte visuelle automatique sur un seuil métier

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour signaler automatiquement une anomalie (chute de ventes, dépassement de seuil) sans avoir à la chercher soi-même chaque mois.
- **Prompt :** *"Ajoute une alerte visuelle qui se déclenche automatiquement si {condition métier précise, ex. le chiffre d'affaires d'une région tombe sous 60% de la moyenne des autres régions sur un mois}. Affiche un message explicite quand elle se déclenche."*
- **Résultat attendu :** Un encadré ou un message conditionnel qui n'apparaît que lorsque l'anomalie est réellement détectée dans les données.

### DEV-005 — Créer une page vitrine à partir d'une charte graphique

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Crée une page HTML/CSS unique pour présenter {votre offre}. Structure : en-tête avec accroche, section problème, section offre en {nombre} blocs, une preuve, un tarif, un appel à l'action final. Couleurs exactes : {couleurs en hexadécimal}. {contraintes de style, ex. coins arrondis}."*
- **Résultat attendu :** Un fichier `index.html` (et éventuellement `style.css`) prêt à être ouvert dans un navigateur, cohérent avec la charte donnée.

### DEV-006 — Adapter le texte d'une page vitrine au point de vue du client

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code ou Claude.ai
- **Contexte d'usage :** Quand une page vitrine parle trop de soi ("je sais faire...") plutôt que du problème du client.
- **Prompt :** *"Relis le texte de cette section et reformule-le du point de vue du client : quel problème concret il vit, pas ce que je sais faire techniquement. Voici le texte actuel : {texte}."*
- **Résultat attendu :** Un texte centré sur la douleur/le bénéfice client, sans jargon technique visible.

### DEV-007 — Diagnostiquer une erreur avant de la corriger

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Dès qu'une application affiche un message d'erreur — première réaction à avoir, avant toute demande de correction.
- **Prompt :** *"Voici l'erreur exacte que j'obtiens : {collez le message d'erreur complet}. Avant de corriger quoi que ce soit, explique-moi en une phrase simple ce que ça signifie et à quelle ligne ça se produit."*
- **Résultat attendu :** Une explication compréhensible du problème, sans jargon excessif, avant toute modification du code.

### DEV-008 — Vérifier une hypothèse de bug avant de valider une correction

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Peux-tu me montrer {l'information réelle à vérifier, ex. les noms exacts des colonnes de ce fichier / le contenu de ce dossier / la valeur actuelle de cette variable} pour que je vérifie l'hypothèse avant de corriger ?"*
- **Résultat attendu :** Une confirmation ou une infirmation factuelle de l'hypothèse de diagnostic, plutôt qu'une correction appliquée à l'aveugle.

### DEV-009 — Demander une correction ciblée sans réécriture complète

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Une fois le diagnostic confirmé, pour corriger sans risquer de casser ce qui fonctionne déjà.
- **Prompt :** *"Le problème vient de {élément précis identifié}. Corrige uniquement {la ligne/la fonction concernée}, sans modifier le reste du fichier."*
- **Résultat attendu :** Une modification localisée et vérifiable, qui laisse intact le reste du projet.

### DEV-010 — Vérifier la cohérence métier d'un résultat après correction

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Après une correction, pour s'assurer que l'absence d'erreur affichée ne masque pas un résultat faux.
- **Prompt :** *"Maintenant que l'erreur est corrigée, peux-tu vérifier que {le chiffre/la tendance} affiché est cohérent avec {référence de comparaison, ex. mon calcul précédent, l'ordre de grandeur attendu} ?"*
- **Résultat attendu :** Une double vérification qui distingue "ça s'affiche" de "c'est juste".

### DEV-011 — Préparer un projet pour le déploiement

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Vérifie que mon fichier requirements.txt liste bien toutes les librairies importées dans app.py, et que tous les chemins de fichiers sont relatifs (pas de chemin propre à ma machine)."*
- **Résultat attendu :** Un projet prêt à être déployé sans erreur d'import ou de fichier introuvable une fois en ligne.

### DEV-012 — Créer un dépôt GitHub et y pousser son code

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour la première fois qu'on utilise Git/GitHub, sans expérience préalable.
- **Prompt :** *"Aide-moi à créer un dépôt GitHub pour ce projet et à y pousser mon code, étape par étape, en m'expliquant chaque commande avant de l'exécuter."*
- **Résultat attendu :** Un dépôt GitHub fonctionnel contenant le projet, avec une compréhension minimale de chaque étape effectuée.

### DEV-013 — Diagnostiquer un échec de déploiement

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Le déploiement de mon application a échoué avec ce message : {message d'erreur de la plateforme de déploiement}. Que dois-je vérifier en priorité ?"*
- **Résultat attendu :** Une liste priorisée de vérifications (requirements.txt, chemin du fichier principal, fichier de données manquant) plutôt qu'un essai-erreur au hasard.

### DEV-014 — Choisir la bonne plateforme de déploiement gratuite

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"J'ai construit {type de projet, ex. un dashboard Streamlit / un site HTML statique}. Quelle plateforme de déploiement gratuite est la plus adaptée, et pourquoi en une phrase ?"*
- **Résultat attendu :** Une recommandation justifiée (Streamlit Community Cloud pour un dashboard Streamlit, Netlify/Vercel/GitHub Pages pour un site statique).

### DEV-015 — Ajouter une charte graphique cohérente à une application Streamlit

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Applique cette palette de couleurs à mon dashboard Streamlit : {couleurs en hexadécimal}. Le fond doit être {couleur}, les encadrés d'indicateurs {couleur}, les accents {couleur}."*
- **Résultat attendu :** Un dashboard visuellement cohérent avec une identité de marque donnée, pas le thème par défaut de Streamlit.

### DEV-016 — Transformer une analyse de données en projet d'application

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour faire le pont entre un travail d'analyse déjà fait (Module 3) et un livrable applicatif (Module 4).
- **Prompt :** *"J'ai déjà ces insights à partir de mes données : {liste des insights}. Construis un dashboard qui les met en évidence visuellement, pas juste qui affiche toutes les colonnes brutes."*
- **Résultat attendu :** Un dashboard organisé autour des messages clés de l'analyse, pas une simple visualisation exhaustive et non hiérarchisée.

### DEV-017 — Simplifier une page vitrine trop chargée

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Cette page vitrine contient trop d'informations à la fois. Identifie les 3 éléments essentiels que le visiteur doit retenir en 10 secondes, et réorganise la page autour d'eux."*
- **Résultat attendu :** Une hiérarchie visuelle claire, avec les éléments secondaires déplacés plus bas dans la page plutôt que supprimés.

### DEV-018 — Rendre un dashboard lisible sur mobile

- **Niveau :** Avancé
- **Outil recommandé :** Claude Code
- **Prompt :** *"Vérifie que ce dashboard reste lisible sur un écran de smartphone. Si certains éléments se chevauchent ou débordent, corrige la mise en page sans changer le contenu."*
- **Résultat attendu :** Une disposition qui s'adapte à une largeur d'écran réduite, sans perte de contenu informationnel.

### DEV-019 — Documenter un projet pour qu'un tiers puisse le reprendre

- **Niveau :** Avancé
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Avant de partager un projet avec un collègue ou un client technique, ou avant de l'ajouter au Portfolio IA Professionnel.
- **Prompt :** *"Ajoute un court commentaire en en-tête de ce fichier expliquant à quoi sert le projet, quelles données il utilise, et comment le lancer localement."*
- **Résultat attendu :** Un fichier auto-documenté, compréhensible par quelqu'un qui n'a pas participé à sa création.

### DEV-020 — Décider si une tâche mérite une application ou reste un simple fichier

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour éviter de construire une application quand un simple document suffirait, ou l'inverse.
- **Prompt :** *"Je dois livrer {description du besoin}. Est-ce que ça justifie de construire une application/un site, ou est-ce qu'un simple fichier partagé suffirait ? Justifie ta réponse."*
- **Résultat attendu :** Une décision motivée par l'usage réel (consultation répétée et à jour vs. lecture ponctuelle), pas par la technologie la plus impressionnante.

---

**Rappel schéma complet (pour agrégation Phase 5) :** chaque entrée ci-dessus correspond aux champs `id / categorie / titre / niveau / outil_recommande / contexte_usage / prompt_template / variables / exemple_rempli / resultat_attendu / module_lie: 4` définis en section 6 du prompt maître.
