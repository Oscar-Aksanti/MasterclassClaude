# Prompts du module — Module 3 — Transformer Claude en Data Analyst personnel

20 prompts liés à ce module, extraits de la bibliothèque complète des 100 prompts professionnels (`bibliotheque-100-prompts/`, Phase 5 — la structure ci-dessous sert de source pour l'agrégation). Préfixe de catégorie : `DATA` (Analyse de données).

---

### DATA-001 — Diagnostic complet avant tout nettoyage

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Première étape systématique face à n'importe quel fichier de données reçu d'un tiers, avant de corriger quoi que ce soit.
- **Prompt :** *"Voici un fichier de données ({nom_fichier}). Avant de le corriger, fais-moi un diagnostic complet : doublons stricts, valeurs manquantes par colonne, incohérences de format sur {colonnes_texte}, formats mélangés sur {colonnes_date}, et valeurs qui semblent aberrantes. Ne corrige rien encore."*
- **Variables :** `nom_fichier`, `colonnes_texte`, `colonnes_date`
- **Exemple rempli :** "Voici un fichier de données (ventes-delta-distribution-brut.xlsx). Avant de le corriger, fais-moi un diagnostic complet : doublons stricts, valeurs manquantes par colonne, incohérences de format sur region, formats mélangés sur date_vente, et valeurs qui semblent aberrantes. Ne corrige rien encore."
- **Résultat attendu :** Une liste précise et quantifiée des défauts, sans aucune correction appliquée.

### DATA-002 — Nettoyage étape par étape avec justification

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Corrige le fichier dans cet ordre : {liste_etapes}. Résume ce qui a changé à chaque étape et pourquoi."*
- **Variables :** `liste_etapes`
- **Résultat attendu :** Un nettoyage traçable, étape par étape, avec un résumé vérifiable à chaque étape plutôt qu'une correction globale opaque.

### DATA-003 — Choisir une méthode de traitement des valeurs manquantes

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"J'ai {nombre} valeurs manquantes sur la colonne {colonne}. Quelles sont mes options (suppression, imputation par moyenne/médiane, imputation par groupe) et laquelle recommandes-tu pour ce cas précis, avec les risques de chaque choix ?"*
- **Variables :** `nombre`, `colonne`
- **Résultat attendu :** Une décision méthodologique justifiée, pas une correction automatique appliquée sans réflexion.

### DATA-004 — Détecter les anomalies dans un tableau de ventes

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Repérer une variation anormale (rupture de stock, pic suspect) dans une série de ventes.
- **Prompt :** *"Analyse les ventes de {periode} pour {nom_fichier} et signale toute variation supérieure à {seuil_anomalie} par rapport à la moyenne habituelle, par {dimension_analyse}."*
- **Variables :** `periode`, `nom_fichier`, `seuil_anomalie`, `dimension_analyse`
- **Exemple rempli :** "Analyse les ventes de février à juillet 2026 pour ventes-delta-distribution-nettoye.xlsx et signale toute variation supérieure à 40 % par rapport à la moyenne habituelle, par région et par mois."
- **Résultat attendu :** Une liste des anomalies significatives, avec le mois et la région concernés, pas une liste de toutes les variations mineures.

### DATA-005 — Générer un tableau croisé dynamique expliqué

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"Crée un tableau croisé dynamique qui montre {mesure} par {dimension_ligne} (en lignes) et {dimension_colonne} (en colonnes). Explique ensuite en une phrase ce que révèle ce tableau."*
- **Variables :** `mesure`, `dimension_ligne`, `dimension_colonne`
- **Résultat attendu :** Un tableau croisé dynamique correct, accompagné d'une lecture business en une phrase.

### DATA-006 — Obtenir une formule Excel/Sheets expliquée

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Écris-moi la formule Excel qui calcule {calcul_voulu} en filtrant sur {conditions}, et explique chaque partie de la formule."*
- **Variables :** `calcul_voulu`, `conditions`
- **Résultat attendu :** Une formule fonctionnelle accompagnée d'une explication compréhensible sans être expert Excel.

### DATA-007 — Générer et comprendre une requête SQL simple

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour lire et comprendre une requête générée sur une base ventes/clients, sans devoir l'écrire seul.
- **Prompt :** *"Écris une requête SQL qui calcule {mesure} par {dimension} pour {periode}, dans une table {nom_table} qui a les colonnes {liste_colonnes}. Explique-moi chaque clause comme si je n'avais jamais écrit de SQL."*
- **Variables :** `mesure`, `dimension`, `periode`, `nom_table`, `liste_colonnes`
- **Résultat attendu :** Une requête correcte accompagnée d'une explication clause par clause (SELECT, FROM, WHERE, GROUP BY).

### DATA-008 — Faire adapter une requête SQL existante

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici une requête SQL : {requete}. Modifie-la pour qu'elle {nouvelle_condition}, et explique ce qui change par rapport à la version originale."*
- **Variables :** `requete`, `nouvelle_condition`
- **Résultat attendu :** Une variante de la requête, avec une comparaison explicite de ce qui a changé — utile pour apprendre en modifiant plutôt qu'en écrivant de zéro.

### DATA-009 — Reproduire un nettoyage Excel en pandas (niveau 2)

- **Niveau :** Avancé
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Quand un fichier devient trop volumineux pour Excel, ou qu'un nettoyage doit être répété régulièrement.
- **Prompt :** *"Ouvre {nom_fichier} avec pandas et applique le même nettoyage qu'on a fait manuellement dans Excel : {liste_etapes}. Explique ce que fait chaque ligne du script généré."*
- **Variables :** `nom_fichier`, `liste_etapes`
- **Résultat attendu :** Un script pandas court et commenté, produisant le même résultat que le nettoyage manuel — vérifiable en comparant le nombre de lignes final.

### DATA-010 — Comprendre un script R reçu d'un tiers

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand un partenaire ou un chercheur envoie un script R et qu'il faut en comprendre le résultat sans le réécrire.
- **Prompt :** *"Voici un script R : {script}. Explique-moi en français, sans jargon statistique, ce qu'il calcule et ce que signifie son résultat pour mon activité."*
- **Variables :** `script`
- **Résultat attendu :** Une explication en langage métier, sans nécessité de comprendre la syntaxe R par soi-même.

### DATA-011 — Recommander un type de graphique selon la question

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Je veux montrer {ce_que_je_veux_montrer} pour {objectif_business}. Quel type de graphique recommandes-tu, et pourquoi celui-là plutôt qu'un autre ?"*
- **Variables :** `ce_que_je_veux_montrer`, `objectif_business`
- **Exemple rempli :** "Je veux montrer l'évolution de la quantité vendue dans la région Nord sur 6 mois pour visualiser la chute liée à la rupture de stock. Quel type de graphique recommandes-tu, et pourquoi celui-là plutôt qu'un autre ?"
- **Résultat attendu :** Une recommandation justifiée (courbe, barres, camembert...), pas seulement le graphique produit sans explication.

### DATA-012 — Construire un dashboard simple

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"À partir de {nom_fichier}, propose-moi une structure de dashboard à 3 graphiques maximum qui répond à cette question business : {question_business}. Justifie chaque graphique choisi."*
- **Variables :** `nom_fichier`, `question_business`
- **Résultat attendu :** Une proposition de dashboard simple et priorisé, pas une liste exhaustive de tous les graphiques possibles.

### DATA-013 — Rédiger un insight business chiffré

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Transformer un résultat d'analyse brut en recommandation actionnable pour un décideur non-technique.
- **Prompt :** *"À partir de ce résultat d'analyse : {resultat_brut}, rédige un insight business en 3 parties : constat (1 phrase), chiffrage précis, recommandation actionnable. Pas de jargon technique."*
- **Variables :** `resultat_brut`
- **Résultat attendu :** Un insight structuré et compréhensible par un décideur, avec un chiffre précis et une action concrète à la fin.

### DATA-014 — Vérifier la cohérence d'un chiffrage avant de le présenter

- **Niveau :** Avancé
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici mon calcul de {ce_qui_est_chiffre} : {methode_de_calcul}. Vérifie s'il y a une erreur de logique ou une hypothèse fragile avant que je le présente à {audience}."*
- **Variables :** `ce_qui_est_chiffre`, `methode_de_calcul`, `audience`
- **Résultat attendu :** Une relecture critique du raisonnement, pas juste une validation automatique du calcul.

### DATA-015 — Comparer deux périodes ou deux segments

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"Compare {segment_A} et {segment_B} sur {mesure} pendant {periode}, et dis-moi si l'écart est significatif ou s'il pourrait être dû au hasard/à la taille de l'échantillon."*
- **Variables :** `segment_A`, `segment_B`, `mesure`, `periode`
- **Résultat attendu :** Une comparaison chiffrée accompagnée d'une mise en garde sur la fiabilité de l'écart observé, pas une affirmation catégorique non nuancée.

### DATA-016 — Distinguer corrélation et cause avant de conclure

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Avant de présenter une recommandation basée sur deux indicateurs qui évoluent ensemble.
- **Prompt :** *"J'observe que {indicateur_A} et {indicateur_B} évoluent ensemble dans mes données. Est-ce que ça prouve un lien de cause à effet, ou juste une corrélation ? Comment formuler ma recommandation de façon honnête ?"*
- **Variables :** `indicateur_A`, `indicateur_B`
- **Résultat attendu :** Une formulation nuancée de la recommandation, qui ne présente pas une corrélation comme une preuve de causalité.

### DATA-017 — Préparer une base ventes/clients simplifiée pour une démo SQL

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"À partir de {nom_fichier}, propose-moi une structure de 2 tables SQL ({table_1} et {table_2}) qui permettrait de répondre à des questions comme {exemple_question}, avec les colonnes et types de chacune."*
- **Variables :** `nom_fichier`, `table_1`, `table_2`, `exemple_question`
- **Résultat attendu :** Une structure de tables simple et cohérente, prête à être utilisée pour s'exercer aux requêtes SQL.

### DATA-018 — Estimer une perte ou un gain business à partir d'une variation

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Sur {periode}, {indicateur} est passé de {valeur_normale} à {valeur_anormale}. Aide-moi à estimer l'impact financier de cet écart, en explicitant chaque étape du calcul."*
- **Variables :** `periode`, `indicateur`, `valeur_normale`, `valeur_anormale`
- **Résultat attendu :** Un chiffrage d'impact avec le raisonnement visible à chaque étape, réutilisable pour d'autres variations similaires.

### DATA-019 — Choisir entre Excel, SQL et Python pour une tâche donnée

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Éviter de sur-outiller (Python pour 50 lignes) ou de sous-outiller (Excel pour 2 millions de lignes) une tâche d'analyse.
- **Prompt :** *"J'ai une tâche d'analyse : {description_tache}, sur un fichier d'environ {volume_donnees} lignes. Excel, SQL ou Python (pandas) est le plus adapté, et pourquoi ?"*
- **Variables :** `description_tache`, `volume_donnees`
- **Résultat attendu :** Une recommandation d'outil proportionnée au volume et à la complexité réels de la tâche, pas un réflexe systématique vers l'outil le plus avancé.

### DATA-020 — Préparer la restitution d'une analyse à un public non-technique

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Voici mes 3 insights chiffrés : {liste_insights}. Reformule-les pour une présentation orale de 5 minutes à des décideurs non-techniques, avec une phrase d'accroche par insight et sans jargon d'analyste."*
- **Variables :** `liste_insights`
- **Résultat attendu :** Une version orale, courte et sans jargon, prête pour une réunion de restitution — pas une reformulation qui reste aussi technique que l'original.

---

**Rappel schéma complet (pour agrégation Phase 5) :** chaque entrée ci-dessus correspond aux champs `id / categorie / titre / niveau / outil_recommande / contexte_usage / prompt_template / variables / exemple_rempli / resultat_attendu / module_lie: 3` définis en section 6 du prompt maître.
