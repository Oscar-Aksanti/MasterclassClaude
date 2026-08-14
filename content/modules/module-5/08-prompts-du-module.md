# Prompts du module — Module 5 — Automatiser son travail avec l'IA

20 prompts liés à ce module, extraits de la bibliothèque complète des 100 prompts professionnels (`bibliotheque-100-prompts/`, Phase 5 — la structure JSON ci-dessous sert de source pour l'agrégation). Préfixe de catégorie : `AUTO` (Automatisation & agents).

---

### AUTO-001 — Cartographier une tâche avec la grille fréquence × pénibilité × risque

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** En début de démarche, pour trancher si une tâche répétitive mérite une automatisation complète.
- **Prompt :** *"Voici une tâche que je refais régulièrement : {description_tache}. Fréquence : {frequence}. Évalue-la sur trois critères — fréquence, pénibilité, risque d'erreur si un problème passait inaperçu — et dis-moi si c'est une bonne candidate à l'automatisation complète, à une simple Skill, ou à rien du tout pour l'instant."*
- **Exemple rempli :** "Voici une tâche que je refais régulièrement : rédiger la synthèse hebdomadaire de ventes et stock pour mon client DELTA Distribution. Fréquence : chaque semaine. Évalue-la sur trois critères..."
- **Résultat attendu :** Une recommandation justifiée (automatiser / Skill / ne rien changer), pas une réponse générique.
- **module_lie :** 5

### AUTO-002 — Décider entre une Skill et une automatisation complète

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand une tâche semble répétitive mais qu'on hésite sur le niveau d'automatisation adapté.
- **Prompt :** *"Cette tâche demande-t-elle un jugement humain à chaque exécution, ou est-elle mécanique une fois les règles fixées ? Tâche : {description_tache}. Si un jugement est nécessaire, recommande une Skill ; sinon, recommande une automatisation complète et explique où placer le déclencheur."*
- **Résultat attendu :** Une décision argumentée plutôt qu'un choix par défaut vers "toujours tout automatiser".
- **module_lie :** 5

### AUTO-003 — Rédiger la synthèse automatique d'une ligne de suivi (module Claude dans Make)

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Étape de traitement d'un scénario Make, entre un déclencheur de données et une action de distribution.
- **Prompt :** *"Voici les données de la semaine du {semaine_debut} pour la région {region} de {client} : stock disponible {stock_disponible_unites} unités, seuil d'alerte {seuil_alerte_unites} unités, ventes de la semaine {ventes_semaine_fcfa} FCFA, commentaire terrain : {commentaire_terrain}. Rédige une synthèse factuelle en 2 phrases maximum, puis une recommandation courte en 1 phrase si le stock est sous le seuil d'alerte. N'invente aucun chiffre absent des données fournies."*
- **Exemple rempli :** "Voici les données de la semaine du 2026-08-10 pour la région Nord de DELTA Distribution : stock disponible 340 unités, seuil d'alerte 300 unités, ventes de la semaine 4 900 000 FCFA, commentaire terrain : Léger retard camion. Rédige une synthèse factuelle..."
- **Résultat attendu :** Un texte court, factuel, directement insérable dans une base Notion ou un message, sans relecture lourde.
- **module_lie :** 5

### AUTO-004 — Générer le texte d'une alerte conditionnelle (WhatsApp/Notion)

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Pour la branche "alerte" d'un scénario, quand une condition précise est remplie.
- **Prompt :** *"Rédige un message d'alerte court (3 lignes maximum, ton professionnel et direct) signalant que {condition_declenchee}, à partir de ces données : {donnees}. Le message doit se terminer par une question ou une action suggérée, pas juste un constat."*
- **Résultat attendu :** Un message d'alerte actionnable, pas un simple rapport de chiffres.
- **module_lie :** 5

### AUTO-005 — Définir le mapping de champs entre un déclencheur et une action

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Avant de configurer un module Make, pour clarifier quel champ source alimente quel champ destination.
- **Prompt :** *"J'ai un déclencheur qui fournit ces champs : {liste_champs_source}. Je veux les envoyer vers {outil_destination} qui attend ces champs : {liste_champs_destination}. Propose-moi le mapping champ par champ, et signale les champs source qui n'ont pas d'équivalent évident côté destination."*
- **Résultat attendu :** Un tableau de correspondance clair, avec les cas ambigus signalés avant la configuration réelle plutôt que découverts en cours de route.
- **module_lie :** 5

### AUTO-006 — Choisir le bon déclencheur Make pour une tâche donnée

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Au moment de démarrer un nouveau scénario, avant de choisir le premier module.
- **Prompt :** *"Je veux automatiser ceci : {description_tache}. Quel type de déclencheur Make est le plus adapté — nouvelle ligne dans une feuille, nouvel email reçu, heure programmée, ou webhook — et pourquoi ?"*
- **Résultat attendu :** Une recommandation de déclencheur justifiée par la nature de l'événement à surveiller, pas par défaut le plus connu.
- **module_lie :** 5

### AUTO-007 — Trier et résumer les emails clients du jour

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make connecté à Gmail)
- **Contexte d'usage :** Pour un scénario qui traite chaque email entrant d'une boîte professionnelle.
- **Prompt :** *"Voici le contenu d'un email reçu : {contenu_email}. Résume-le en une phrase, classe-le dans une des catégories suivantes : {liste_categories}, et indique s'il nécessite une réponse urgente (oui/non) avec une justification courte."*
- **Résultat attendu :** Une classification exploitable directement par une étape suivante (ex. router vers Notion selon la catégorie).
- **module_lie :** 5

### AUTO-008 — Préparer un brouillon de réponse email à valider avant envoi

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Quand la relation client (garde-fou n° 3) exige une relecture humaine avant tout envoi.
- **Prompt :** *"À partir de cet email reçu : {contenu_email}, rédige un brouillon de réponse professionnelle qui répond aux points soulevés, sans l'envoyer. Signale explicitement en fin de texte : 'Brouillon à valider avant envoi.'"*
- **Résultat attendu :** Un brouillon prêt à relire, jamais envoyé automatiquement — le scénario s'arrête à la préparation, l'action d'envoi reste manuelle ou soumise à validation.
- **module_lie :** 5

### AUTO-009 — Transformer un texte libre en entrée Notion structurée

- **Niveau :** Débutant
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Quand la donnée source (email, note, message) n'est pas déjà organisée en colonnes.
- **Prompt :** *"Voici un texte brut : {texte}. Extrais-en les champs suivants pour les insérer dans une base Notion : {liste_champs}. Si un champ est absent du texte, indique 'à préciser' plutôt que d'inventer une valeur."*
- **Résultat attendu :** Des champs structurés fiables, avec les absences signalées plutôt que masquées par une valeur inventée.
- **module_lie :** 5

### AUTO-010 — Résumer une feuille Google Sheets pour un rapport périodique

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make ou Claude Code)
- **Contexte d'usage :** Pour un rapport hebdomadaire ou mensuel agrégeant plusieurs lignes plutôt qu'une seule.
- **Prompt :** *"Voici les données de la période {periode} : {donnees_agregees}. Rédige un résumé de 5 lignes maximum avec : le total, la tendance par rapport à la période précédente, et un point d'attention si une région ou une catégorie sort de la norme."*
- **Résultat attendu :** Un résumé de niveau "lecture de 30 secondes", pas une reformulation exhaustive de chaque ligne.
- **module_lie :** 5

### AUTO-011 — Détecter une anomalie dans une nouvelle ligne avant de déclencher une action

- **Niveau :** Avancé
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Filtre de sécurité avant une action automatique, pour éviter qu'une donnée aberrante ne déclenche une alerte absurde.
- **Prompt :** *"Voici une nouvelle ligne de données : {donnees_ligne}. Compare-la aux valeurs habituelles suivantes : {valeurs_de_reference}. Signale si une valeur semble aberrante (ex. quantité négative, chiffre disproportionné) avant que je ne déclenche l'action suivante."*
- **Résultat attendu :** Une vérification de vraisemblance qui évite qu'une erreur de saisie humaine déclenche une alerte automatique incohérente.
- **module_lie :** 5

### AUTO-012 — Traduire une règle en langage naturel vers une condition de filtre Make

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Avant de configurer le filtre d'un routeur, pour être certain que la logique est correcte avant de la coder dans l'interface.
- **Prompt :** *"Je veux que cette branche du scénario s'exécute uniquement quand : {regle_en_francais}. Formule cette règle sous forme de condition logique claire (ET / OU / seuils précis) que je peux reproduire dans un filtre Make."*
- **Exemple rempli :** "Je veux que cette branche du scénario s'exécute uniquement quand : la région est Nord et le stock est descendu sous le seuil d'alerte. Formule cette règle sous forme de condition logique..."
- **Résultat attendu :** Une condition explicite (ex. `region = Nord ET stock_disponible_unites < seuil_alerte_unites`), sans ambiguïté au moment de la configurer.
- **module_lie :** 5

### AUTO-013 — Construire une checklist de test avant d'activer un scénario

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Juste avant de basculer un scénario Make sur "ON".
- **Prompt :** *"Voici mon scénario : {description_scenario}. Donne-moi une checklist de tests à effectuer manuellement avant de l'activer, en incluant au moins un cas qui doit déclencher l'action et un cas qui ne doit pas la déclencher."*
- **Résultat attendu :** Une liste de vérifications concrètes, pas un conseil générique de "tester avant de déployer".
- **module_lie :** 5

### AUTO-014 — Diagnostiquer un scénario Make qui échoue

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Quand une exécution Make renvoie une erreur incomprise.
- **Prompt :** *"Mon scénario Make échoue à cette étape : {nom_module}, avec ce message d'erreur : {message_erreur}. Voici ce que le module précédent envoie : {donnees_entrantes}. Que dois-je vérifier en priorité ?"*
- **Résultat attendu :** Un diagnostic pas-à-pas qui évite de recommencer le scénario de zéro par frustration.
- **module_lie :** 5

### AUTO-015 — Évaluer si une automatisation manipule une donnée personnelle sensible

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** En phase de conception d'un scénario, avant de connecter un outil qui transmet des informations personnelles.
- **Prompt :** *"Mon scénario transmet ces données entre ces outils : {description_flux_donnees}. Certaines concernent-elles des informations personnelles sensibles ? Si oui, recommande les précautions minimales avant de mettre ce scénario en production."*
- **Résultat attendu :** Une évaluation de risque avant l'activation, pas après un incident.
- **module_lie :** 5

### AUTO-016 — Rédiger un message WhatsApp Business professionnel et court

- **Niveau :** Débutant
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Pour toute notification envoyée par WhatsApp dans un scénario, qui doit rester lisible sur mobile en quelques secondes.
- **Prompt :** *"Rédige un message WhatsApp professionnel de 3 lignes maximum à partir de ces informations : {donnees}. Le ton doit rester direct et factuel, sans formule de politesse superflue — c'est une notification, pas un email."*
- **Résultat attendu :** Un message lisible d'un coup d'œil sur téléphone, sans superflu.
- **module_lie :** 5

### AUTO-017 — Prioriser plusieurs candidates à l'automatisation en une seule liste

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Après avoir rempli sa grille de cartographie sur plusieurs tâches, pour décider par laquelle commencer.
- **Prompt :** *"Voici mes tâches candidates avec leur fréquence, pénibilité et risque : {liste_taches_notees}. Classe-les par ordre de priorité pour une première automatisation, en expliquant pourquoi la première du classement est la plus rentable à court terme."*
- **Résultat attendu :** Un ordre de priorité argumenté, qui évite de se disperser sur plusieurs scénarios à la fois en début d'apprentissage.
- **module_lie :** 5

### AUTO-018 — Documenter un scénario pour qu'un collègue puisse le reprendre

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Une fois le scénario stabilisé, pour ne pas rester seul détenteur de sa logique.
- **Prompt :** *"Voici la structure de mon scénario Make : {description_modules_et_conditions}. Rédige une documentation courte (1 page) qu'un collègue non technique pourrait lire pour comprendre ce que fait le scénario, sans avoir besoin d'ouvrir Make."*
- **Résultat attendu :** Une documentation lisible par un non-technicien, cohérente avec la règle de production "zéro dépendance à une seule personne".
- **module_lie :** 5

### AUTO-019 — Simuler un cas limite pour vérifier la robustesse d'une condition d'alerte

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Avant activation, pour chercher les cas que le filtre pourrait mal gérer (valeur exactement au seuil, champ vide, etc.).
- **Prompt :** *"Voici ma condition de déclenchement : {condition}. Liste-moi 5 cas limites (valeurs exactement au seuil, champ manquant, valeur négative, doublon) qui pourraient la faire échouer ou se déclencher à tort, pour que je les teste avant d'activer le scénario."*
- **Résultat attendu :** Une liste de cas de test que l'on n'aurait pas pensé à essayer spontanément.
- **module_lie :** 5

### AUTO-020 — Décider où arrêter l'automatisation et garder une étape manuelle

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Question de conception à se poser systématiquement avant d'automatiser une chaîne jusqu'au bout, y compris l'action finale vers un tiers externe.
- **Prompt :** *"Mon scénario va jusqu'à {derniere_action_prevue}. Est-ce que cette dernière étape devrait rester manuelle (validation humaine) plutôt qu'automatique, compte tenu de {contexte_sensibilite} ? Justifie ta recommandation."*
- **Résultat attendu :** Une décision explicite sur la limite de l'automatisation, cohérente avec les garde-fous de la Partie 4 de la leçon écrite (décisions sensibles, données personnelles, relation client).
- **module_lie :** 5

---

**Rappel schéma complet (pour agrégation Phase 5) :** chaque entrée ci-dessus correspond aux champs `id / categorie / titre / niveau / outil_recommande / contexte_usage / prompt_template / variables / exemple_rempli / resultat_attendu / module_lie: 5` définis en section 6 du prompt maître.
