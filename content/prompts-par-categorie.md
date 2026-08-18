<!-- Contenu Phase 5 — généré automatiquement depuis bibliotheque-100-prompts/prompts.json à partir des 08-prompts-du-module.md des 6 modules. Pour mettre à jour : modifier prompts.json (ou les fichiers module sources) puis régénérer ce fichier, ne pas éditer à la main. -->

# Les 100 prompts professionnels — Claude AI Mastery 2.0

Bibliothèque complète, classée par catégorie (alignée sur les 6 modules du programme). Version consultable et interactive avec recherche et copie en un clic : [`portail-recherche-prompts.html`](portail-recherche-prompts.html). Version machine-readable pour intégration : [`prompts.json`](prompts.json).

## Sommaire

- [Écosystème & configuration Claude — Module 1](#écosystème-configuration-claude-module-1) (10 prompts)
- [Communication & prompting expert — Module 2](#communication-prompting-expert-module-2) (15 prompts)
- [Analyse de données — Module 3](#analyse-de-données-module-3) (20 prompts)
- [Développement & solutions numériques — Module 4](#développement-solutions-numériques-module-4) (20 prompts)
- [Automatisation & agents — Module 5](#automatisation-agents-module-5) (20 prompts)
- [Carrière & monétisation — Module 6](#carrière-monétisation-module-6) (15 prompts)

## Écosystème & configuration Claude — Module 1

### ECO-001 — Choisir le bon outil Claude pour une tâche

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand vous hésitez entre plusieurs outils Claude pour une tâche précise.
- **Prompt :** *"Voici une tâche que je dois faire : {description_tache}. Parmi Claude.ai (chat), Claude Code, Claude Cowork, Claude in Chrome et Claude Design, lequel est le plus adapté, et pourquoi en une phrase ?"*
- **Variables :** `{description_tache}`
- **Exemple rempli :** Voici une tâche que je dois faire : comparer les tarifs de 5 concurrents sur leurs sites web. Parmi Claude.ai (chat), Claude Code, Claude Cowork, Claude in Chrome et Claude Design, lequel est le plus adapté, et pourquoi en une phrase ?
- **Résultat attendu :** Une recommandation d'outil justifiée en une phrase, sans avoir à connaître l'arbre de décision par cœur.

### ECO-002 — Générer une Skill à partir d'une tâche répétitive

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour transformer une tâche que vous refaites chaque semaine en méthode réutilisable.
- **Prompt :** *"Aide-moi à créer une Skill nommée `{nom_skill}`. Elle doit {description_tache}, avec exactement ces règles : {liste_regles}. Elle ne doit jamais {erreur_a_eviter}."*
- **Variables :** `{description_tache}`, `{erreur_a_eviter}`, `{liste_regles}`, `{nom_skill}`
- **Exemple rempli :** Aide-moi à créer une Skill nommée `resume-reunion-client`. Elle doit transformer des notes brutes de réunion en compte-rendu structuré, avec exactement ces règles : 4 sections (Décisions, Actions, Blocages, Prochaine étape). Elle ne doit jamais inventer une décision absente des notes.
- **Résultat attendu :** Un fichier `SKILL.md` complet, prêt à tester immédiatement.

### ECO-003 — Tester une Skill sur un cas réel avant de la valider

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Applique la Skill `{nom_skill}` à ces notes/ce texte : {contenu}. Si un élément attendu manque dans le résultat, explique-moi pourquoi."*
- **Variables :** `{contenu}`, `{nom_skill}`
- **Résultat attendu :** Une validation concrète que la Skill fonctionne comme prévu, avec diagnostic en cas d'écart.

### ECO-004 — Diagnostiquer un problème d'installation

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai (depuis un autre appareil si l'installation bloque)
- **Prompt :** *"J'essaie d'installer Claude Code sur {Mac/Windows} et j'obtiens ce message : {message_erreur}. Que dois-je vérifier, étape par étape ?"*
- **Variables :** `{Mac/Windows}`, `{message_erreur}`
- **Résultat attendu :** Un diagnostic pas-à-pas sans jargon excessif.

### ECO-005 — Choisir quel connecteur MCP activer en premier

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Voici les outils que j'utilise le plus au quotidien : {liste_outils}. Si je ne pouvais connecter qu'un seul connecteur MCP pour commencer, lequel me ferait gagner le plus de temps immédiatement, et pourquoi ?"*
- **Variables :** `{liste_outils}`
- **Résultat attendu :** Une priorisation justifiée plutôt qu'une liste générique de tous les connecteurs disponibles.

### ECO-006 — Rédiger son fichier de mémoire personnelle

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"Aide-moi à rédiger un fichier de mémoire personnelle pour mes conversations Claude. Voici mon métier : {metier}. Mes clients/projets récurrents : {liste}. Mes préférences de ton et de format : {preferences}."*
- **Variables :** `{liste}`, `{metier}`, `{preferences}`
- **Résultat attendu :** Un fichier court (10-15 lignes) à réutiliser en début de nouvelle conversation.

### ECO-007 — Résumer une conversation longue avant de repartir à neuf

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand une conversation devient longue ou mélange plusieurs sujets.
- **Prompt :** *"Résume toutes les décisions et informations importantes de cette conversation en moins de 10 lignes, pour que je puisse les recopier au début d'un nouveau chat."*
- **Résultat attendu :** Un résumé compact réutilisable, qui évite de perdre le contexte utile en changeant de conversation.

### ECO-008 — Repérer le signal qu'il faut changer de conversation

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Dans cette conversation, est-ce que tu remarques une contradiction avec quelque chose que j'ai dit plus tôt, ou une information que tu sembles avoir oubliée ? Réponds honnêtement, même si la réponse est non."*
- **Résultat attendu :** Une auto-vérification qui aide à décider s'il est temps de résumer et repartir (voir Partie 4 de la leçon).

### ECO-009 — Évaluer si une tâche mérite une Skill ou une automatisation complète

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour ne pas construire une Skill sur une tâche trop rare, ou au contraire sous-exploiter une tâche très répétitive (lien vers Module 5).
- **Prompt :** *"Je fais cette tâche {frequence} : {description_tache}. Est-ce que ça vaut le coup d'en faire une Skill, ou est-ce que ça mériterait directement une automatisation complète sans intervention humaine ?"*
- **Variables :** `{description_tache}`, `{frequence}`
- **Résultat attendu :** Une recommandation Skill vs automatisation, avec justification liée à la fréquence et à la variabilité de la tâche.

### ECO-010 — Comparer deux façons de faire la même tâche pour choisir la plus rapide

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Je veux faire {tache}. Est-ce plus rapide de te le demander directement dans le chat, ou de passer par Claude Code ? Explique la différence pour ce cas précis."*
- **Variables :** `{tache}`
- **Résultat attendu :** Une décision éclairée cas par cas, plutôt qu'une règle rigide appliquée sans réflexion.

---

## Communication & prompting expert — Module 2

### COM-001 — Construire un prompt complet avec la méthode C.L.A.R.T.É

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Point de départ pour n'importe quelle demande de rédaction ou de production de contenu, quand vous partez d'une idée encore floue.
- **Prompt :** *"Je veux te demander {tache_a_realiser}. Avant que je formule ma demande complète, aide-moi à clarifier : quel est le contexte utile, quel livrable exact j'attends, à qui il est destiné, quelles contraintes je dois te donner, quel ton, et si j'ai un exemple à te fournir."*
- **Variables :** `{tache_a_realiser}`
- **Exemple rempli :** Je veux te demander de rédiger une réponse à un client mécontent. Avant que je formule ma demande complète, aide-moi à clarifier : quel est le contexte utile, quel livrable exact j'attends, à qui il est destiné, quelles contraintes je dois te donner, quel ton, et si j'ai un exemple à te fournir.
- **Résultat attendu :** Une liste de questions de clarification qui vous aide à construire vous-même un prompt C.L.A.R.T.É complet, avant même de lancer la vraie demande.

### COM-002 — Réécrire un mauvais prompt existant avec C.L.A.R.T.É

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand un prompt court a donné un résultat décevant et que vous voulez comprendre pourquoi avant de recommencer.
- **Prompt :** *"Voici le prompt que je viens d'utiliser et qui a donné un résultat décevant : '{prompt_original}'. Quelles informations C.L.A.R.T.É (Contexte, Livrable, Audience, Restrictions, Ton, Exemples) manquaient probablement ? Aide-moi à le reformuler complètement."*
- **Variables :** `{prompt_original}`
- **Exemple rempli :** Voici le prompt que je viens d'utiliser et qui a donné un résultat décevant : 'Fais-moi un rapport'. Quelles informations C.L.A.R.T.É manquaient probablement ? Aide-moi à le reformuler complètement.
- **Résultat attendu :** Un diagnostic des lettres manquantes, puis une version C.L.A.R.T.É complète prête à être testée.

### COM-003 — Rédiger un email de relance client personnalisé

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Relance d'un client ou partenaire sur une facture, une réponse en attente, ou un engagement pris.
- **Prompt :** *"Je suis {votre_activite}. Rédige un email de relance à {nom_client} : {objet_relance}, {duree_attente} sans réponse. L'email s'adresse à {nom_contact}, {relation_avec_contact}. Maximum {longueur_max} mots, ton {ton_souhaite}, ne jamais {chose_a_eviter}."*
- **Variables :** `{chose_a_eviter}`, `{duree_attente}`, `{longueur_max}`, `{nom_client}`, `{nom_contact}`, `{objet_relance}`, `{relation_avec_contact}`, `{ton_souhaite}`, `{votre_activite}`
- **Exemple rempli :** Je suis consultante indépendante en gestion de projets. Rédige un email de relance à DELTA Distribution : facture de 850 000 FCFA impayée, 3 semaines sans réponse. L'email s'adresse à Awa Ndiaye, ma contact habituelle depuis 2 ans. Maximum 120 mots, ton direct et professionnel, ne jamais mentionner de menace juridique à ce stade.
- **Résultat attendu :** Un email prêt à envoyer, sans reformulation nécessaire.

### COM-004 — Demander un plan avant l'exécution d'une mission complexe

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Sur une mission à plusieurs contraintes (budget, délai, format imposé) où une erreur de direction coûterait cher à corriger après rédaction complète.
- **Prompt :** *"{brief_complet_de_la_mission}. Avant de produire la version complète, présente-moi en 3-4 puces ton plan : ce que tu vas mettre en avant, dans quel ordre, et comment tu respectes chaque contrainte donnée. J'attends ta validation de plan avant que tu rédiges."*
- **Variables :** `{brief_complet_de_la_mission}`
- **Exemple rempli :** Prépare une proposition commerciale d'une page pour une PME de distribution, budget maximum 1 200 000 FCFA sur 3 mois, besoin : tableau de suivi hebdomadaire des stocks. Avant de produire la version complète, présente-moi ton plan...
- **Résultat attendu :** Un plan en 3-4 puces à valider ou corriger avant toute rédaction complète.

### COM-005 — Transformer un prompt réussi en gabarit réutilisable

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Après avoir obtenu un bon résultat une fois, pour ne jamais avoir à réécrire le même prompt de zéro sur un cas similaire.
- **Prompt :** *"Voici un prompt qui a bien fonctionné : '{prompt_reussi}'. Transforme-le en gabarit réutilisable en remplaçant par des variables entre accolades toutes les informations qui changeraient si je l'utilisais pour un autre cas similaire."*
- **Variables :** `{prompt_reussi}`
- **Résultat attendu :** Un gabarit à variables nommées clairement, réutilisable sans réécriture complète.

### COM-006 — Lancer un brief de workflow multi-étapes

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Première étape d'un workflow brief → brouillon → critique → version finale, sur un livrable à enjeu réel.
- **Prompt :** *"{contexte_et_role}. Produis un premier brouillon de {type_livrable} pour {destinataire}, en respectant : {liste_contraintes}. Je vais te demander une critique de ce brouillon avant la version finale, donc ne cherche pas à produire un résultat parfait du premier coup — un bon point de départ suffit."*
- **Variables :** `{contexte_et_role}`, `{destinataire}`, `{liste_contraintes}`, `{type_livrable}`
- **Résultat attendu :** Un brouillon exploitable comme base de travail, pas nécessairement final.

### COM-007 — Faire critiquer honnêtement un brouillon

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Étape de critique d'un workflow multi-étapes, sur un document qui sera lu par un tiers (client, employeur, public).
- **Prompt :** *"Relis ce brouillon avec un œil critique, du point de vue de {audience_cible} : qu'est-ce qui pourrait ne pas convaincre, être trop long, trop vague, ou mal passer ? Sois honnête, ne me dis pas que tout est parfait si ce n'est pas le cas."*
- **Variables :** `{audience_cible}`
- **Résultat attendu :** Une liste de faiblesses concrètes et exploitables, pas un simple compliment poli.

### COM-008 — Produire la version finale après critique

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Dernière étape d'un workflow multi-étapes, une fois la critique reçue et les points à corriger identifiés.
- **Prompt :** *"Intègre uniquement ce(s) point(s) de la critique : {points_retenus}. Ne touche pas au reste du texte qui fonctionne déjà. Donne-moi la version finale complète."*
- **Variables :** `{points_retenus}`
- **Résultat attendu :** Une version finale ciblée, sans régression sur les parties déjà satisfaisantes du brouillon.

### COM-009 — Rédiger une proposition commerciale complète pour un nouveau prospect

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Réponse à une sollicitation d'un nouveau client potentiel, avec budget et besoin déjà exprimés.
- **Prompt :** *"Je suis {votre_activite}. Rédige une proposition commerciale d'une page pour {nom_prospect}, {secteur_prospect}, besoin exprimé : {besoin_exprime}. Budget maximum : {budget_max} sur {duree_mission}. Lue par {decideur_prospect}, qui compare plusieurs prestataires. Mets en avant : {points_forts}. Ne promets jamais un résultat chiffré non garanti. Ton professionnel orienté résultat."*
- **Variables :** `{besoin_exprime}`, `{budget_max}`, `{decideur_prospect}`, `{duree_mission}`, `{nom_prospect}`, `{points_forts}`, `{secteur_prospect}`, `{votre_activite}`
- **Résultat attendu :** Une proposition d'une page prête à être critiquée puis finalisée (voir COM-007/COM-008).

### COM-010 — Extraire une information structurée d'un document réel

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai (upload de fichier)
- **Contexte d'usage :** Analyse d'un contrat, rapport ou tableau reçu, pour en extraire les informations qui comptent sans le relire ligne par ligne.
- **Prompt :** *"Voici {type_document}. Extrais dans un tableau : {liste_champs_a_extraire}. Si une information demandée n'apparaît pas dans le document, écris 'non précisé' plutôt que de la déduire ou de l'inventer."*
- **Variables :** `{liste_champs_a_extraire}`, `{type_document}`
- **Exemple rempli :** Voici un extrait de contrat de prestation. Extrais dans un tableau : montants et modalités de paiement, échéances et délais, clauses de résiliation, obligations de chaque partie. Si une information demandée n'apparaît pas dans le document, écris 'non précisé'.
- **Résultat attendu :** Un tableau structuré, à vérifier systématiquement contre l'original avant utilisation.

### COM-011 — Résumer un document long en points clés pour un décideur pressé

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai (upload de fichier)
- **Contexte d'usage :** Un rapport ou compte-rendu volumineux doit être compris en quelques minutes par quelqu'un qui n'a pas le temps de le lire en entier.
- **Prompt :** *"Voici {type_document}. Résume-le en 5 points maximum pour {destinataire}, qui a {temps_disponible} pour le lire. Priorise les informations qui demandent une décision ou une action de sa part."*
- **Variables :** `{destinataire}`, `{temps_disponible}`, `{type_document}`
- **Résultat attendu :** Un résumé actionnable, pas une simple compression du texte original.

### COM-012 — Comparer deux versions d'un même texte pour choisir la meilleure

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand vous avez deux versions d'un même texte (par exemple un ancien et un nouveau brouillon) et hésitez sur laquelle envoyer.
- **Prompt :** *"Voici deux versions du même texte : Version A : {version_a}. Version B : {version_b}. Pour une audience de type {audience_cible}, laquelle est la plus efficace, et pourquoi en 3 points maximum ?"*
- **Variables :** `{audience_cible}`, `{version_a}`, `{version_b}`
- **Résultat attendu :** Une recommandation justifiée plutôt qu'une préférence stylistique non expliquée.

### COM-013 — Adapter le ton d'un texte existant à une nouvelle audience

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Réutiliser un contenu déjà écrit (email, présentation, post) pour un public différent sans repartir de zéro.
- **Prompt :** *"Voici un texte destiné à {audience_originale} : {texte_original}. Adapte-le pour {nouvelle_audience}, en gardant le même message de fond mais en changeant : {elements_a_changer}."*
- **Variables :** `{audience_originale}`, `{elements_a_changer}`, `{nouvelle_audience}`, `{texte_original}`
- **Résultat attendu :** Une version adaptée qui conserve le fond tout en changeant la forme pour le nouveau public.

### COM-014 — Vérifier la cohérence d'un document avant envoi

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Dernière vérification avant d'envoyer un document important (contrat, proposition, rapport), pour repérer des incohérences internes.
- **Prompt :** *"Relis ce document et signale toute incohérence interne : un chiffre répété différemment à deux endroits, une date qui ne correspond pas à une autre partie du texte, une affirmation qui se contredit. Ne relève que des incohérences factuelles, pas des préférences de style."*
- **Résultat attendu :** Une liste d'incohérences factuelles concrètes à corriger avant envoi, ou la confirmation qu'aucune n'a été détectée.

### COM-015 — Construire un prompt réutilisable pour répondre à une objection commerciale récurrente

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand vous entendez régulièrement la même objection de prospects ou clients ("c'est trop cher", "je n'ai pas le temps") et voulez une réponse cohérente et testée plutôt qu'improvisée chaque fois.
- **Prompt :** *"Je suis {votre_activite}. Un prospect/client m'objecte régulièrement : '{objection_recurrente}'. Aide-moi à construire une réponse de {longueur_max} qui reconnaît l'objection sans la balayer, puis apporte {argument_cle}, sans jamais {chose_a_eviter}. Ton {ton_souhaite}."*
- **Variables :** `{argument_cle}`, `{chose_a_eviter}`, `{longueur_max}`, `{objection_recurrente}`, `{ton_souhaite}`, `{votre_activite}`
- **Résultat attendu :** Un gabarit de réponse réutilisable à chaque fois que la même objection revient, plutôt qu'une improvisation à chaque échange.

---

## Analyse de données — Module 3

### DATA-001 — Diagnostic complet avant tout nettoyage

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Première étape systématique face à n'importe quel fichier de données reçu d'un tiers, avant de corriger quoi que ce soit.
- **Prompt :** *"Voici un fichier de données ({nom_fichier}). Avant de le corriger, fais-moi un diagnostic complet : doublons stricts, valeurs manquantes par colonne, incohérences de format sur {colonnes_texte}, formats mélangés sur {colonnes_date}, et valeurs qui semblent aberrantes. Ne corrige rien encore."*
- **Variables :** `{colonnes_date}`, `{colonnes_texte}`, `{nom_fichier}`
- **Exemple rempli :** Voici un fichier de données (ventes-delta-distribution-brut.xlsx). Avant de le corriger, fais-moi un diagnostic complet : doublons stricts, valeurs manquantes par colonne, incohérences de format sur region, formats mélangés sur date_vente, et valeurs qui semblent aberrantes. Ne corrige rien encore.
- **Résultat attendu :** Une liste précise et quantifiée des défauts, sans aucune correction appliquée.

### DATA-002 — Nettoyage étape par étape avec justification

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Corrige le fichier dans cet ordre : {liste_etapes}. Résume ce qui a changé à chaque étape et pourquoi."*
- **Variables :** `{liste_etapes}`
- **Résultat attendu :** Un nettoyage traçable, étape par étape, avec un résumé vérifiable à chaque étape plutôt qu'une correction globale opaque.

### DATA-003 — Choisir une méthode de traitement des valeurs manquantes

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"J'ai {nombre} valeurs manquantes sur la colonne {colonne}. Quelles sont mes options (suppression, imputation par moyenne/médiane, imputation par groupe) et laquelle recommandes-tu pour ce cas précis, avec les risques de chaque choix ?"*
- **Variables :** `{colonne}`, `{nombre}`
- **Résultat attendu :** Une décision méthodologique justifiée, pas une correction automatique appliquée sans réflexion.

### DATA-004 — Détecter les anomalies dans un tableau de ventes

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Repérer une variation anormale (rupture de stock, pic suspect) dans une série de ventes.
- **Prompt :** *"Analyse les ventes de {periode} pour {nom_fichier} et signale toute variation supérieure à {seuil_anomalie} par rapport à la moyenne habituelle, par {dimension_analyse}."*
- **Variables :** `{dimension_analyse}`, `{nom_fichier}`, `{periode}`, `{seuil_anomalie}`
- **Exemple rempli :** Analyse les ventes de février à juillet 2026 pour ventes-delta-distribution-nettoye.xlsx et signale toute variation supérieure à 40 % par rapport à la moyenne habituelle, par région et par mois.
- **Résultat attendu :** Une liste des anomalies significatives, avec le mois et la région concernés, pas une liste de toutes les variations mineures.

### DATA-005 — Générer un tableau croisé dynamique expliqué

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"Crée un tableau croisé dynamique qui montre {mesure} par {dimension_ligne} (en lignes) et {dimension_colonne} (en colonnes). Explique ensuite en une phrase ce que révèle ce tableau."*
- **Variables :** `{dimension_colonne}`, `{dimension_ligne}`, `{mesure}`
- **Résultat attendu :** Un tableau croisé dynamique correct, accompagné d'une lecture business en une phrase.

### DATA-006 — Obtenir une formule Excel/Sheets expliquée

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Écris-moi la formule Excel qui calcule {calcul_voulu} en filtrant sur {conditions}, et explique chaque partie de la formule."*
- **Variables :** `{calcul_voulu}`, `{conditions}`
- **Résultat attendu :** Une formule fonctionnelle accompagnée d'une explication compréhensible sans être expert Excel.

### DATA-007 — Générer et comprendre une requête SQL simple

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour lire et comprendre une requête générée sur une base ventes/clients, sans devoir l'écrire seul.
- **Prompt :** *"Écris une requête SQL qui calcule {mesure} par {dimension} pour {periode}, dans une table {nom_table} qui a les colonnes {liste_colonnes}. Explique-moi chaque clause comme si je n'avais jamais écrit de SQL."*
- **Variables :** `{dimension}`, `{liste_colonnes}`, `{mesure}`, `{nom_table}`, `{periode}`
- **Résultat attendu :** Une requête correcte accompagnée d'une explication clause par clause (SELECT, FROM, WHERE, GROUP BY).

### DATA-008 — Faire adapter une requête SQL existante

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici une requête SQL : {requete}. Modifie-la pour qu'elle {nouvelle_condition}, et explique ce qui change par rapport à la version originale."*
- **Variables :** `{nouvelle_condition}`, `{requete}`
- **Résultat attendu :** Une variante de la requête, avec une comparaison explicite de ce qui a changé — utile pour apprendre en modifiant plutôt qu'en écrivant de zéro.

### DATA-009 — Reproduire un nettoyage Excel en pandas (niveau 2)

- **Niveau :** Avancé
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Quand un fichier devient trop volumineux pour Excel, ou qu'un nettoyage doit être répété régulièrement.
- **Prompt :** *"Ouvre {nom_fichier} avec pandas et applique le même nettoyage qu'on a fait manuellement dans Excel : {liste_etapes}. Explique ce que fait chaque ligne du script généré."*
- **Variables :** `{liste_etapes}`, `{nom_fichier}`
- **Résultat attendu :** Un script pandas court et commenté, produisant le même résultat que le nettoyage manuel — vérifiable en comparant le nombre de lignes final.

### DATA-010 — Comprendre un script R reçu d'un tiers

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand un partenaire ou un chercheur envoie un script R et qu'il faut en comprendre le résultat sans le réécrire.
- **Prompt :** *"Voici un script R : {script}. Explique-moi en français, sans jargon statistique, ce qu'il calcule et ce que signifie son résultat pour mon activité."*
- **Variables :** `{script}`
- **Résultat attendu :** Une explication en langage métier, sans nécessité de comprendre la syntaxe R par soi-même.

### DATA-011 — Recommander un type de graphique selon la question

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Je veux montrer {ce_que_je_veux_montrer} pour {objectif_business}. Quel type de graphique recommandes-tu, et pourquoi celui-là plutôt qu'un autre ?"*
- **Variables :** `{ce_que_je_veux_montrer}`, `{objectif_business}`
- **Exemple rempli :** Je veux montrer l'évolution de la quantité vendue dans la région Nord sur 6 mois pour visualiser la chute liée à la rupture de stock. Quel type de graphique recommandes-tu, et pourquoi celui-là plutôt qu'un autre ?
- **Résultat attendu :** Une recommandation justifiée (courbe, barres, camembert...), pas seulement le graphique produit sans explication.

### DATA-012 — Construire un dashboard simple

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"À partir de {nom_fichier}, propose-moi une structure de dashboard à 3 graphiques maximum qui répond à cette question business : {question_business}. Justifie chaque graphique choisi."*
- **Variables :** `{nom_fichier}`, `{question_business}`
- **Résultat attendu :** Une proposition de dashboard simple et priorisé, pas une liste exhaustive de tous les graphiques possibles.

### DATA-013 — Rédiger un insight business chiffré

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Transformer un résultat d'analyse brut en recommandation actionnable pour un décideur non-technique.
- **Prompt :** *"À partir de ce résultat d'analyse : {resultat_brut}, rédige un insight business en 3 parties : constat (1 phrase), chiffrage précis, recommandation actionnable. Pas de jargon technique."*
- **Variables :** `{resultat_brut}`
- **Résultat attendu :** Un insight structuré et compréhensible par un décideur, avec un chiffre précis et une action concrète à la fin.

### DATA-014 — Vérifier la cohérence d'un chiffrage avant de le présenter

- **Niveau :** Avancé
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici mon calcul de {ce_qui_est_chiffre} : {methode_de_calcul}. Vérifie s'il y a une erreur de logique ou une hypothèse fragile avant que je le présente à {audience}."*
- **Variables :** `{audience}`, `{ce_qui_est_chiffre}`, `{methode_de_calcul}`
- **Résultat attendu :** Une relecture critique du raisonnement, pas juste une validation automatique du calcul.

### DATA-015 — Comparer deux périodes ou deux segments

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"Compare {segment_A} et {segment_B} sur {mesure} pendant {periode}, et dis-moi si l'écart est significatif ou s'il pourrait être dû au hasard/à la taille de l'échantillon."*
- **Variables :** `{mesure}`, `{periode}`, `{segment_A}`, `{segment_B}`
- **Résultat attendu :** Une comparaison chiffrée accompagnée d'une mise en garde sur la fiabilité de l'écart observé, pas une affirmation catégorique non nuancée.

### DATA-016 — Distinguer corrélation et cause avant de conclure

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Avant de présenter une recommandation basée sur deux indicateurs qui évoluent ensemble.
- **Prompt :** *"J'observe que {indicateur_A} et {indicateur_B} évoluent ensemble dans mes données. Est-ce que ça prouve un lien de cause à effet, ou juste une corrélation ? Comment formuler ma recommandation de façon honnête ?"*
- **Variables :** `{indicateur_A}`, `{indicateur_B}`
- **Résultat attendu :** Une formulation nuancée de la recommandation, qui ne présente pas une corrélation comme une preuve de causalité.

### DATA-017 — Préparer une base ventes/clients simplifiée pour une démo SQL

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"À partir de {nom_fichier}, propose-moi une structure de 2 tables SQL ({table_1} et {table_2}) qui permettrait de répondre à des questions comme {exemple_question}, avec les colonnes et types de chacune."*
- **Variables :** `{exemple_question}`, `{nom_fichier}`, `{table_1}`, `{table_2}`
- **Résultat attendu :** Une structure de tables simple et cohérente, prête à être utilisée pour s'exercer aux requêtes SQL.

### DATA-018 — Estimer une perte ou un gain business à partir d'une variation

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Sur {periode}, {indicateur} est passé de {valeur_normale} à {valeur_anormale}. Aide-moi à estimer l'impact financier de cet écart, en explicitant chaque étape du calcul."*
- **Variables :** `{indicateur}`, `{periode}`, `{valeur_anormale}`, `{valeur_normale}`
- **Résultat attendu :** Un chiffrage d'impact avec le raisonnement visible à chaque étape, réutilisable pour d'autres variations similaires.

### DATA-019 — Choisir entre Excel, SQL et Python pour une tâche donnée

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Éviter de sur-outiller (Python pour 50 lignes) ou de sous-outiller (Excel pour 2 millions de lignes) une tâche d'analyse.
- **Prompt :** *"J'ai une tâche d'analyse : {description_tache}, sur un fichier d'environ {volume_donnees} lignes. Excel, SQL ou Python (pandas) est le plus adapté, et pourquoi ?"*
- **Variables :** `{description_tache}`, `{volume_donnees}`
- **Résultat attendu :** Une recommandation d'outil proportionnée au volume et à la complexité réels de la tâche, pas un réflexe systématique vers l'outil le plus avancé.

### DATA-020 — Préparer la restitution d'une analyse à un public non-technique

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Voici mes 3 insights chiffrés : {liste_insights}. Reformule-les pour une présentation orale de 5 minutes à des décideurs non-techniques, avec une phrase d'accroche par insight et sans jargon d'analyste."*
- **Variables :** `{liste_insights}`
- **Résultat attendu :** Une version orale, courte et sans jargon, prête pour une réunion de restitution — pas une reformulation qui reste aussi technique que l'original.

---

## Développement & solutions numériques — Module 4

### DEV-001 — Décrire un projet d'application complet avant de le lancer

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Avant de démarrer n'importe quel projet d'application ou de site, pour éviter les allers-retours dus à une description trop vague.
- **Prompt :** *"Je veux construire {type d'application}. Contexte d'usage : {qui va l'utiliser et pourquoi}. Données ou contenu disponible : {description précise}. Résultat attendu : {forme concrète}. Contraintes : {style, plateforme, limites}."*
- **Variables :** `{description précise}`, `{forme concrète}`, `{qui va l'utiliser et pourquoi}`, `{style, plateforme, limites}`, `{type d'application}`
- **Exemple rempli :** Je veux construire un dashboard Streamlit. Contexte d'usage : mon client DELTA Distribution doit pouvoir suivre ses ventes mensuelles sans me redemander un rapport. Données disponibles : un fichier CSV avec les colonnes date_vente, region, canal_vente, quantite, montant_total_fcfa. Résultat attendu : une page web avec 4 indicateurs et 2 graphiques. Contraintes : rester lisible pour un non-technicien.
- **Résultat attendu :** Un projet structuré et fonctionnel dès la première génération, sans étape de clarification supplémentaire.

### DEV-002 — Générer un dashboard Streamlit à partir d'un fichier de données

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Crée un dashboard Streamlit qui charge le fichier {nom_fichier} (colonnes : {liste_colonnes}). Affiche : {liste_indicateurs_et_graphiques souhaités}."*
- **Variables :** `{liste_colonnes}`, `{liste_indicateurs_et_graphiques souhaités}`, `{nom_fichier}`
- **Résultat attendu :** Un fichier `app.py` et un `requirements.txt` prêts à être lancés avec `streamlit run app.py`.

### DEV-003 — Ajouter des filtres interactifs à un dashboard existant

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Une fois le dashboard de base fonctionnel, pour le rendre exploitable par la personne qui le consulte.
- **Prompt :** *"Ajoute des filtres dans une barre latérale pour {liste_des_champs_a_filtrer}, et applique-les à tous les graphiques et indicateurs de la page."*
- **Variables :** `{liste_des_champs_a_filtrer}`
- **Résultat attendu :** Une barre latérale avec des sélecteurs, et un dashboard qui se met à jour dynamiquement selon les choix filtrés.

### DEV-004 — Créer une alerte visuelle automatique sur un seuil métier

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour signaler automatiquement une anomalie (chute de ventes, dépassement de seuil) sans avoir à la chercher soi-même chaque mois.
- **Prompt :** *"Ajoute une alerte visuelle qui se déclenche automatiquement si {condition métier précise, ex. le chiffre d'affaires d'une région tombe sous 60% de la moyenne des autres régions sur un mois}. Affiche un message explicite quand elle se déclenche."*
- **Variables :** `{condition métier précise, ex. le chiffre d'affaires d'une région tombe sous 60% de la moyenne des autres régions sur un mois}`
- **Résultat attendu :** Un encadré ou un message conditionnel qui n'apparaît que lorsque l'anomalie est réellement détectée dans les données.

### DEV-005 — Créer une page vitrine à partir d'une charte graphique

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Crée une page HTML/CSS unique pour présenter {votre offre}. Structure : en-tête avec accroche, section problème, section offre en {nombre} blocs, une preuve, un tarif, un appel à l'action final. Couleurs exactes : {couleurs en hexadécimal}. {contraintes de style, ex. coins arrondis}."*
- **Variables :** `{contraintes de style, ex. coins arrondis}`, `{couleurs en hexadécimal}`, `{nombre}`, `{votre offre}`
- **Résultat attendu :** Un fichier `index.html` (et éventuellement `style.css`) prêt à être ouvert dans un navigateur, cohérent avec la charte donnée.

### DEV-006 — Adapter le texte d'une page vitrine au point de vue du client

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code ou Claude.ai
- **Contexte d'usage :** Quand une page vitrine parle trop de soi ("je sais faire...") plutôt que du problème du client.
- **Prompt :** *"Relis le texte de cette section et reformule-le du point de vue du client : quel problème concret il vit, pas ce que je sais faire techniquement. Voici le texte actuel : {texte}."*
- **Variables :** `{texte}`
- **Résultat attendu :** Un texte centré sur la douleur/le bénéfice client, sans jargon technique visible.

### DEV-007 — Diagnostiquer une erreur avant de la corriger

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Dès qu'une application affiche un message d'erreur — première réaction à avoir, avant toute demande de correction.
- **Prompt :** *"Voici l'erreur exacte que j'obtiens : {collez le message d'erreur complet}. Avant de corriger quoi que ce soit, explique-moi en une phrase simple ce que ça signifie et à quelle ligne ça se produit."*
- **Variables :** `{collez le message d'erreur complet}`
- **Résultat attendu :** Une explication compréhensible du problème, sans jargon excessif, avant toute modification du code.

### DEV-008 — Vérifier une hypothèse de bug avant de valider une correction

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Peux-tu me montrer {l'information réelle à vérifier, ex. les noms exacts des colonnes de ce fichier / le contenu de ce dossier / la valeur actuelle de cette variable} pour que je vérifie l'hypothèse avant de corriger ?"*
- **Variables :** `{l'information réelle à vérifier, ex. les noms exacts des colonnes de ce fichier / le contenu de ce dossier / la valeur actuelle de cette variable}`
- **Résultat attendu :** Une confirmation ou une infirmation factuelle de l'hypothèse de diagnostic, plutôt qu'une correction appliquée à l'aveugle.

### DEV-009 — Demander une correction ciblée sans réécriture complète

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Une fois le diagnostic confirmé, pour corriger sans risquer de casser ce qui fonctionne déjà.
- **Prompt :** *"Le problème vient de {élément précis identifié}. Corrige uniquement {la ligne/la fonction concernée}, sans modifier le reste du fichier."*
- **Variables :** `{la ligne/la fonction concernée}`, `{élément précis identifié}`
- **Résultat attendu :** Une modification localisée et vérifiable, qui laisse intact le reste du projet.

### DEV-010 — Vérifier la cohérence métier d'un résultat après correction

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Après une correction, pour s'assurer que l'absence d'erreur affichée ne masque pas un résultat faux.
- **Prompt :** *"Maintenant que l'erreur est corrigée, peux-tu vérifier que {le chiffre/la tendance} affiché est cohérent avec {référence de comparaison, ex. mon calcul précédent, l'ordre de grandeur attendu} ?"*
- **Variables :** `{le chiffre/la tendance}`, `{référence de comparaison, ex. mon calcul précédent, l'ordre de grandeur attendu}`
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
- **Variables :** `{message d'erreur de la plateforme de déploiement}`
- **Résultat attendu :** Une liste priorisée de vérifications (requirements.txt, chemin du fichier principal, fichier de données manquant) plutôt qu'un essai-erreur au hasard.

### DEV-014 — Choisir la bonne plateforme de déploiement gratuite

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"J'ai construit {type de projet, ex. un dashboard Streamlit / un site HTML statique}. Quelle plateforme de déploiement gratuite est la plus adaptée, et pourquoi en une phrase ?"*
- **Variables :** `{type de projet, ex. un dashboard Streamlit / un site HTML statique}`
- **Résultat attendu :** Une recommandation justifiée (Streamlit Community Cloud pour un dashboard Streamlit, Netlify/Vercel/GitHub Pages pour un site statique).

### DEV-015 — Ajouter une charte graphique cohérente à une application Streamlit

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Applique cette palette de couleurs à mon dashboard Streamlit : {couleurs en hexadécimal}. Le fond doit être {couleur}, les encadrés d'indicateurs {couleur}, les accents {couleur}."*
- **Variables :** `{couleur}`, `{couleurs en hexadécimal}`
- **Résultat attendu :** Un dashboard visuellement cohérent avec une identité de marque donnée, pas le thème par défaut de Streamlit.

### DEV-016 — Transformer une analyse de données en projet d'application

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour faire le pont entre un travail d'analyse déjà fait (Module 3) et un livrable applicatif (Module 4).
- **Prompt :** *"J'ai déjà ces insights à partir de mes données : {liste des insights}. Construis un dashboard qui les met en évidence visuellement, pas juste qui affiche toutes les colonnes brutes."*
- **Variables :** `{liste des insights}`
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
- **Variables :** `{description du besoin}`
- **Résultat attendu :** Une décision motivée par l'usage réel (consultation répétée et à jour vs. lecture ponctuelle), pas par la technologie la plus impressionnante.

---

## Automatisation & agents — Module 5

### AUTO-001 — Cartographier une tâche avec la grille fréquence × pénibilité × risque

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** En début de démarche, pour trancher si une tâche répétitive mérite une automatisation complète.
- **Prompt :** *"Voici une tâche que je refais régulièrement : {description_tache}. Fréquence : {frequence}. Évalue-la sur trois critères — fréquence, pénibilité, risque d'erreur si un problème passait inaperçu — et dis-moi si c'est une bonne candidate à l'automatisation complète, à une simple Skill, ou à rien du tout pour l'instant."*
- **Variables :** `{description_tache}`, `{frequence}`
- **Exemple rempli :** Voici une tâche que je refais régulièrement : rédiger la synthèse hebdomadaire de ventes et stock pour mon client DELTA Distribution. Fréquence : chaque semaine. Évalue-la sur trois critères...
- **Résultat attendu :** Une recommandation justifiée (automatiser / Skill / ne rien changer), pas une réponse générique.

### AUTO-002 — Décider entre une Skill et une automatisation complète

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand une tâche semble répétitive mais qu'on hésite sur le niveau d'automatisation adapté.
- **Prompt :** *"Cette tâche demande-t-elle un jugement humain à chaque exécution, ou est-elle mécanique une fois les règles fixées ? Tâche : {description_tache}. Si un jugement est nécessaire, recommande une Skill ; sinon, recommande une automatisation complète et explique où placer le déclencheur."*
- **Variables :** `{description_tache}`
- **Résultat attendu :** Une décision argumentée plutôt qu'un choix par défaut vers "toujours tout automatiser".

### AUTO-003 — Rédiger la synthèse automatique d'une ligne de suivi (module Claude dans Make)

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Étape de traitement d'un scénario Make, entre un déclencheur de données et une action de distribution.
- **Prompt :** *"Voici les données de la semaine du {semaine_debut} pour la région {region} de {client} : stock disponible {stock_disponible_unites} unités, seuil d'alerte {seuil_alerte_unites} unités, ventes de la semaine {ventes_semaine_fcfa} FCFA, commentaire terrain : {commentaire_terrain}. Rédige une synthèse factuelle en 2 phrases maximum, puis une recommandation courte en 1 phrase si le stock est sous le seuil d'alerte. N'invente aucun chiffre absent des données fournies."*
- **Variables :** `{client}`, `{commentaire_terrain}`, `{region}`, `{semaine_debut}`, `{seuil_alerte_unites}`, `{stock_disponible_unites}`, `{ventes_semaine_fcfa}`
- **Exemple rempli :** Voici les données de la semaine du 2026-08-10 pour la région Nord de DELTA Distribution : stock disponible 340 unités, seuil d'alerte 300 unités, ventes de la semaine 4 900 000 FCFA, commentaire terrain : Léger retard camion. Rédige une synthèse factuelle...
- **Résultat attendu :** Un texte court, factuel, directement insérable dans une base Notion ou un message, sans relecture lourde.

### AUTO-004 — Générer le texte d'une alerte conditionnelle (WhatsApp/Notion)

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Pour la branche "alerte" d'un scénario, quand une condition précise est remplie.
- **Prompt :** *"Rédige un message d'alerte court (3 lignes maximum, ton professionnel et direct) signalant que {condition_declenchee}, à partir de ces données : {donnees}. Le message doit se terminer par une question ou une action suggérée, pas juste un constat."*
- **Variables :** `{condition_declenchee}`, `{donnees}`
- **Résultat attendu :** Un message d'alerte actionnable, pas un simple rapport de chiffres.

### AUTO-005 — Définir le mapping de champs entre un déclencheur et une action

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Avant de configurer un module Make, pour clarifier quel champ source alimente quel champ destination.
- **Prompt :** *"J'ai un déclencheur qui fournit ces champs : {liste_champs_source}. Je veux les envoyer vers {outil_destination} qui attend ces champs : {liste_champs_destination}. Propose-moi le mapping champ par champ, et signale les champs source qui n'ont pas d'équivalent évident côté destination."*
- **Variables :** `{liste_champs_destination}`, `{liste_champs_source}`, `{outil_destination}`
- **Résultat attendu :** Un tableau de correspondance clair, avec les cas ambigus signalés avant la configuration réelle plutôt que découverts en cours de route.

### AUTO-006 — Choisir le bon déclencheur Make pour une tâche donnée

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Au moment de démarrer un nouveau scénario, avant de choisir le premier module.
- **Prompt :** *"Je veux automatiser ceci : {description_tache}. Quel type de déclencheur Make est le plus adapté — nouvelle ligne dans une feuille, nouvel email reçu, heure programmée, ou webhook — et pourquoi ?"*
- **Variables :** `{description_tache}`
- **Résultat attendu :** Une recommandation de déclencheur justifiée par la nature de l'événement à surveiller, pas par défaut le plus connu.

### AUTO-007 — Trier et résumer les emails clients du jour

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make connecté à Gmail)
- **Contexte d'usage :** Pour un scénario qui traite chaque email entrant d'une boîte professionnelle.
- **Prompt :** *"Voici le contenu d'un email reçu : {contenu_email}. Résume-le en une phrase, classe-le dans une des catégories suivantes : {liste_categories}, et indique s'il nécessite une réponse urgente (oui/non) avec une justification courte."*
- **Variables :** `{contenu_email}`, `{liste_categories}`
- **Résultat attendu :** Une classification exploitable directement par une étape suivante (ex. router vers Notion selon la catégorie).

### AUTO-008 — Préparer un brouillon de réponse email à valider avant envoi

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Quand la relation client (garde-fou n° 3) exige une relecture humaine avant tout envoi.
- **Prompt :** *"À partir de cet email reçu : {contenu_email}, rédige un brouillon de réponse professionnelle qui répond aux points soulevés, sans l'envoyer. Signale explicitement en fin de texte : 'Brouillon à valider avant envoi.'"*
- **Variables :** `{contenu_email}`
- **Résultat attendu :** Un brouillon prêt à relire, jamais envoyé automatiquement — le scénario s'arrête à la préparation, l'action d'envoi reste manuelle ou soumise à validation.

### AUTO-009 — Transformer un texte libre en entrée Notion structurée

- **Niveau :** Débutant
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Quand la donnée source (email, note, message) n'est pas déjà organisée en colonnes.
- **Prompt :** *"Voici un texte brut : {texte}. Extrais-en les champs suivants pour les insérer dans une base Notion : {liste_champs}. Si un champ est absent du texte, indique 'à préciser' plutôt que d'inventer une valeur."*
- **Variables :** `{liste_champs}`, `{texte}`
- **Résultat attendu :** Des champs structurés fiables, avec les absences signalées plutôt que masquées par une valeur inventée.

### AUTO-010 — Résumer une feuille Google Sheets pour un rapport périodique

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude (via module Make ou Claude Code)
- **Contexte d'usage :** Pour un rapport hebdomadaire ou mensuel agrégeant plusieurs lignes plutôt qu'une seule.
- **Prompt :** *"Voici les données de la période {periode} : {donnees_agregees}. Rédige un résumé de 5 lignes maximum avec : le total, la tendance par rapport à la période précédente, et un point d'attention si une région ou une catégorie sort de la norme."*
- **Variables :** `{donnees_agregees}`, `{periode}`
- **Résultat attendu :** Un résumé de niveau "lecture de 30 secondes", pas une reformulation exhaustive de chaque ligne.

### AUTO-011 — Détecter une anomalie dans une nouvelle ligne avant de déclencher une action

- **Niveau :** Avancé
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Filtre de sécurité avant une action automatique, pour éviter qu'une donnée aberrante ne déclenche une alerte absurde.
- **Prompt :** *"Voici une nouvelle ligne de données : {donnees_ligne}. Compare-la aux valeurs habituelles suivantes : {valeurs_de_reference}. Signale si une valeur semble aberrante (ex. quantité négative, chiffre disproportionné) avant que je ne déclenche l'action suivante."*
- **Variables :** `{donnees_ligne}`, `{valeurs_de_reference}`
- **Résultat attendu :** Une vérification de vraisemblance qui évite qu'une erreur de saisie humaine déclenche une alerte automatique incohérente.

### AUTO-012 — Traduire une règle en langage naturel vers une condition de filtre Make

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Avant de configurer le filtre d'un routeur, pour être certain que la logique est correcte avant de la coder dans l'interface.
- **Prompt :** *"Je veux que cette branche du scénario s'exécute uniquement quand : {regle_en_francais}. Formule cette règle sous forme de condition logique claire (ET / OU / seuils précis) que je peux reproduire dans un filtre Make."*
- **Variables :** `{regle_en_francais}`
- **Exemple rempli :** Je veux que cette branche du scénario s'exécute uniquement quand : la région est Nord et le stock est descendu sous le seuil d'alerte. Formule cette règle sous forme de condition logique...
- **Résultat attendu :** Une condition explicite (ex. `region = Nord ET stock_disponible_unites < seuil_alerte_unites`), sans ambiguïté au moment de la configurer.

### AUTO-013 — Construire une checklist de test avant d'activer un scénario

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Juste avant de basculer un scénario Make sur "ON".
- **Prompt :** *"Voici mon scénario : {description_scenario}. Donne-moi une checklist de tests à effectuer manuellement avant de l'activer, en incluant au moins un cas qui doit déclencher l'action et un cas qui ne doit pas la déclencher."*
- **Variables :** `{description_scenario}`
- **Résultat attendu :** Une liste de vérifications concrètes, pas un conseil générique de "tester avant de déployer".

### AUTO-014 — Diagnostiquer un scénario Make qui échoue

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Quand une exécution Make renvoie une erreur incomprise.
- **Prompt :** *"Mon scénario Make échoue à cette étape : {nom_module}, avec ce message d'erreur : {message_erreur}. Voici ce que le module précédent envoie : {donnees_entrantes}. Que dois-je vérifier en priorité ?"*
- **Variables :** `{donnees_entrantes}`, `{message_erreur}`, `{nom_module}`
- **Résultat attendu :** Un diagnostic pas-à-pas qui évite de recommencer le scénario de zéro par frustration.

### AUTO-015 — Évaluer si une automatisation manipule une donnée personnelle sensible

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** En phase de conception d'un scénario, avant de connecter un outil qui transmet des informations personnelles.
- **Prompt :** *"Mon scénario transmet ces données entre ces outils : {description_flux_donnees}. Certaines concernent-elles des informations personnelles sensibles ? Si oui, recommande les précautions minimales avant de mettre ce scénario en production."*
- **Variables :** `{description_flux_donnees}`
- **Résultat attendu :** Une évaluation de risque avant l'activation, pas après un incident.

### AUTO-016 — Rédiger un message WhatsApp Business professionnel et court

- **Niveau :** Débutant
- **Outil recommandé :** Claude (via module Make)
- **Contexte d'usage :** Pour toute notification envoyée par WhatsApp dans un scénario, qui doit rester lisible sur mobile en quelques secondes.
- **Prompt :** *"Rédige un message WhatsApp professionnel de 3 lignes maximum à partir de ces informations : {donnees}. Le ton doit rester direct et factuel, sans formule de politesse superflue — c'est une notification, pas un email."*
- **Variables :** `{donnees}`
- **Résultat attendu :** Un message lisible d'un coup d'œil sur téléphone, sans superflu.

### AUTO-017 — Prioriser plusieurs candidates à l'automatisation en une seule liste

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Après avoir rempli sa grille de cartographie sur plusieurs tâches, pour décider par laquelle commencer.
- **Prompt :** *"Voici mes tâches candidates avec leur fréquence, pénibilité et risque : {liste_taches_notees}. Classe-les par ordre de priorité pour une première automatisation, en expliquant pourquoi la première du classement est la plus rentable à court terme."*
- **Variables :** `{liste_taches_notees}`
- **Résultat attendu :** Un ordre de priorité argumenté, qui évite de se disperser sur plusieurs scénarios à la fois en début d'apprentissage.

### AUTO-018 — Documenter un scénario pour qu'un collègue puisse le reprendre

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Une fois le scénario stabilisé, pour ne pas rester seul détenteur de sa logique.
- **Prompt :** *"Voici la structure de mon scénario Make : {description_modules_et_conditions}. Rédige une documentation courte (1 page) qu'un collègue non technique pourrait lire pour comprendre ce que fait le scénario, sans avoir besoin d'ouvrir Make."*
- **Variables :** `{description_modules_et_conditions}`
- **Résultat attendu :** Une documentation lisible par un non-technicien, cohérente avec la règle de production "zéro dépendance à une seule personne".

### AUTO-019 — Simuler un cas limite pour vérifier la robustesse d'une condition d'alerte

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Avant activation, pour chercher les cas que le filtre pourrait mal gérer (valeur exactement au seuil, champ vide, etc.).
- **Prompt :** *"Voici ma condition de déclenchement : {condition}. Liste-moi 5 cas limites (valeurs exactement au seuil, champ manquant, valeur négative, doublon) qui pourraient la faire échouer ou se déclencher à tort, pour que je les teste avant d'activer le scénario."*
- **Variables :** `{condition}`
- **Résultat attendu :** Une liste de cas de test que l'on n'aurait pas pensé à essayer spontanément.

### AUTO-020 — Décider où arrêter l'automatisation et garder une étape manuelle

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Question de conception à se poser systématiquement avant d'automatiser une chaîne jusqu'au bout, y compris l'action finale vers un tiers externe.
- **Prompt :** *"Mon scénario va jusqu'à {derniere_action_prevue}. Est-ce que cette dernière étape devrait rester manuelle (validation humaine) plutôt qu'automatique, compte tenu de {contexte_sensibilite} ? Justifie ta recommandation."*
- **Variables :** `{contexte_sensibilite}`, `{derniere_action_prevue}`
- **Résultat attendu :** Une décision explicite sur la limite de l'automatisation, cohérente avec les garde-fous de la Partie 4 de la leçon écrite (décisions sensibles, données personnelles, relation client).

---

## Carrière & monétisation — Module 6

### CARR-001 — Rédiger la page Avant/Après de son portfolio

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Pour ouvrir son Portfolio IA Professionnel avec une accroche factuelle, sans formule marketing vide.
- **Prompt :** *"Voici ma situation avant cette formation : {situation_avant}. Voici ce qui a concrètement changé : {ce_qui_a_change}. Rédige une page 'Avant/Après' en 2 phrases maximum, factuelle, sans superlatif marketing."*
- **Variables :** `{ce_qui_a_change}`, `{situation_avant}`
- **Exemple rempli :** Voici ma situation avant cette formation : j'utilisais Claude.ai pour tout, y compris copier-coller des colonnes Excel à la main. Voici ce qui a concrètement changé : j'ai un dashboard déployé, une automatisation active et une bibliothèque de prompts que je réutilise chaque semaine. Rédige une page 'Avant/Après' en 2 phrases maximum, factuelle, sans superlatif marketing.
- **Résultat attendu :** Une accroche courte et crédible, réutilisable en tête de portfolio et sur LinkedIn.

### CARR-002 — Assembler ses livrables en portfolio cohérent

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici mes {nombre_livrables} livrables : {description_courte_de_chaque_livrable}. Aide-moi à les organiser en une page de portfolio cohérente, avec un titre court et percutant pour chaque section."*
- **Variables :** `{description_courte_de_chaque_livrable}`, `{nombre_livrables}`
- **Résultat attendu :** Une structure de portfolio prête à mettre en forme (Notion ou PDF), sans avoir à réfléchir seul à l'ordre ou aux titres.

### CARR-003 — Transformer une compétence technique en offre orientée résultat

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour sortir du langage "je fais de l'IA" et formuler une offre vendable.
- **Prompt :** *"Voici ce que je sais faire techniquement : {competence}. Reformule ça en une offre de service orientée résultat métier, sans jargon technique, en une phrase que comprendrait un client qui ne connaît rien à l'IA."*
- **Variables :** `{competence}`
- **Exemple rempli :** Voici ce que je sais faire techniquement : automatiser la génération d'un rapport de ventes via Make et Claude. Reformule ça en une offre de service orientée résultat métier, sans jargon technique, en une phrase que comprendrait un client qui ne connaît rien à l'IA.
- **Résultat attendu :** Une phrase d'offre du type "J'automatise votre reporting mensuel pour qu'il soit prêt sans que vous y touchiez".

### CARR-004 — Rédiger un pitch en 1 page (interne ou client)

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code ou Claude.ai
- **Contexte d'usage :** Pour proposer un projet pilote IA à un employeur, ou une nouvelle offre à un client existant.
- **Prompt :** *"Aide-moi à rédiger un pitch d'une page pour proposer {projet}. Structure exacte : 1) Problème (avec un chiffre) 2) Solution Claude (sans jargon) 3) Gain chiffré (temps ou argent) 4) Prochaine étape (une action datée). Contexte : {contexte_detaille}."*
- **Variables :** `{contexte_detaille}`, `{projet}`
- **Résultat attendu :** Un pitch structuré en 4 blocs, avec un chiffre concret dans chaque section clé, prêt à envoyer.

### CARR-005 — Chiffrer le gain d'une automatisation ou d'un projet IA

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand la section "gain chiffré" d'un pitch reste vague.
- **Prompt :** *"Voici ma tâche avant automatisation : {description_avant} (fréquence : {frequence}, temps par occurrence : {temps}). Aide-moi à calculer le gain annuel en heures, puis à le formuler en une phrase convaincante pour un décideur non technique."*
- **Variables :** `{description_avant}`, `{frequence}`, `{temps}`
- **Résultat attendu :** Un calcul simple (fréquence × temps × 52 semaines) transformé en argument chiffré crédible.

### CARR-006 — Rédiger un post LinkedIn "retour d'expérience"

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Rédige un post LinkedIn de format 'retour d'expérience' sur mon apprentissage de Claude en formation. Situation avant : {situation_avant}. Ce qui a changé : {ce_qui_a_change}. Ton direct et professionnel, pas de superlatifs, maximum 150 mots, 2-3 hashtags pertinents à la fin."*
- **Variables :** `{ce_qui_a_change}`, `{situation_avant}`
- **Résultat attendu :** Un post prêt à relire et publier, orienté crédibilité plutôt qu'autopromotion.

### CARR-007 — Rédiger un post LinkedIn "étude de cas anonymisée"

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour montrer un résultat client sans exposer d'informations confidentielles.
- **Prompt :** *"Rédige un post LinkedIn 'étude de cas anonymisée' à partir de ce projet : {description_projet_anonymise}. N'utilise aucun nom réel de client ni de chiffre d'affaires exact. Termine par un résultat mesurable et 2-3 hashtags."*
- **Variables :** `{description_projet_anonymise}`
- **Résultat attendu :** Une preuve de compétence publiable sans risque de confidentialité.

### CARR-008 — Rédiger un post LinkedIn "avant/après"

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Rédige un post LinkedIn de format 'Avant/Après' : Avant, je faisais {liste_taches_avant}. Après, je fais {liste_taches_apres}. Style visuel avec deux blocs clairement séparés, ton direct, maximum 150 mots."*
- **Variables :** `{liste_taches_apres}`, `{liste_taches_avant}`
- **Résultat attendu :** Un post à fort impact visuel, facile à lire même en scrollant vite.

### CARR-009 — Rédiger un post LinkedIn "contenu éducatif"

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Rédige un post LinkedIn éducatif sur ce sujet : {sujet_metier}. Structure : une liste de 3 signes/critères concrets, puis une phrase personnelle sur comment je l'ai appliqué moi-même, avec un chiffre si possible. Pas de ton professoral, ton de pair à pair."*
- **Variables :** `{sujet_metier}`
- **Résultat attendu :** Un post qui construit l'autorité sans paraître donneur de leçons.

### CARR-010 — Fixer un prix pour une offre de service

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand l'ancrage tarifaire bloque le lancement d'une offre.
- **Prompt :** *"Je veux vendre cette offre : {description_offre}, sur le marché {marche_geographique}. Voici le temps que ça me prend : {temps_estime}. Propose-moi une fourchette de prix réaliste en FCFA et en USD, avec une justification en une phrase."*
- **Variables :** `{description_offre}`, `{marche_geographique}`, `{temps_estime}`
- **Résultat attendu :** Une fourchette tarifaire argumentée, pas juste un chiffre au hasard.

### CARR-011 — Transformer un savoir-faire en produit digital

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici un savoir-faire que je maîtrise bien : {savoir_faire}. Propose-moi 3 formats de produit digital réalistes que je pourrais construire à partir de ça en moins de 2 semaines, avec pour chacun un prix indicatif et une plateforme de vente adaptée."*
- **Variables :** `{savoir_faire}`
- **Résultat attendu :** Une liste courte et priorisée d'options concrètes, pas une liste générique de tous les formats possibles.

### CARR-012 — Se positionner dans la grille de décision (salariat/freelance/produit)

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Voici ma situation : temps disponible par semaine {temps_disponible}, tolérance au risque financier {tolerance_risque}, besoin de revenu immédiat {besoin_revenu}. Entre salariat augmenté, freelance et produit digital, quelle voie recommandes-tu en priorité pour les 90 prochains jours, et pourquoi ?"*
- **Variables :** `{besoin_revenu}`, `{temps_disponible}`, `{tolerance_risque}`
- **Résultat attendu :** Une recommandation argumentée à partir de la situation réelle, pas une réponse générique.

### CARR-013 — Formuler sa stratégie de valorisation à 90 jours

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Aide-moi à formuler ma stratégie de valorisation à 90 jours à partir de ce positionnement : {positionnement_choisi}. Structure : positionnement en 1 phrase, 3 actions datées sous 2 semaines, jalons à 30/60/90 jours."*
- **Variables :** `{positionnement_choisi}`
- **Résultat attendu :** Un document d'une page, daté et vérifiable, prêt à devenir la Section 6 du Portfolio IA Professionnel.

### CARR-014 — Préparer une prospection sur une plateforme freelance

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour rédiger un profil ou un premier message de prospection sur Malt, Comet, Upwork ou Fiverr.
- **Prompt :** *"Aide-moi à rédiger la description de mon profil freelance pour {plateforme}, à partir de cette offre : {description_offre}. Maximum 100 mots, oriente sur le résultat client, pas sur les outils techniques utilisés."*
- **Variables :** `{description_offre}`, `{plateforme}`
- **Résultat attendu :** Un texte de profil prêt à publier, cohérent avec le positionnement orienté résultat du module.

### CARR-015 — Vérifier qu'une offre ou un pitch n'utilise pas de jargon technique

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Contrôle qualité avant publication ou envoi d'un pitch/offre à un client ou un employeur.
- **Prompt :** *"Relis ce texte : {texte}. Identifie chaque mot ou expression qui suppose une connaissance technique de l'IA, et propose une reformulation 100 % métier pour chacun, compréhensible par quelqu'un qui n'a jamais utilisé Claude."*
- **Variables :** `{texte}`
- **Résultat attendu :** Une liste des termes à remplacer, avec une alternative concrète pour chacun — un filtre qualité avant tout envoi public.

---
