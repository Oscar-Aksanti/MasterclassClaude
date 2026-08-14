# Prompts du module — Module 2 — Communiquer avec Claude comme un expert

15 prompts liés à ce module, extraits de la bibliothèque complète des 100 prompts professionnels (`bibliotheque-100-prompts/`, Phase 5 — la structure JSON ci-dessous sert de source pour l'agrégation). Préfixe de catégorie : `COM` (Communication & prompting).

---

### COM-001 — Construire un prompt complet avec la méthode C.L.A.R.T.É

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Point de départ pour n'importe quelle demande de rédaction ou de production de contenu, quand vous partez d'une idée encore floue.
- **Prompt :** *"Je veux te demander {tache_a_realiser}. Avant que je formule ma demande complète, aide-moi à clarifier : quel est le contexte utile, quel livrable exact j'attends, à qui il est destiné, quelles contraintes je dois te donner, quel ton, et si j'ai un exemple à te fournir."*
- **Variables :** `tache_a_realiser`
- **Exemple rempli :** "Je veux te demander de rédiger une réponse à un client mécontent. Avant que je formule ma demande complète, aide-moi à clarifier : quel est le contexte utile, quel livrable exact j'attends, à qui il est destiné, quelles contraintes je dois te donner, quel ton, et si j'ai un exemple à te fournir."
- **Résultat attendu :** Une liste de questions de clarification qui vous aide à construire vous-même un prompt C.L.A.R.T.É complet, avant même de lancer la vraie demande.
- **Module lié :** 2

### COM-002 — Réécrire un mauvais prompt existant avec C.L.A.R.T.É

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand un prompt court a donné un résultat décevant et que vous voulez comprendre pourquoi avant de recommencer.
- **Prompt :** *"Voici le prompt que je viens d'utiliser et qui a donné un résultat décevant : '{prompt_original}'. Quelles informations C.L.A.R.T.É (Contexte, Livrable, Audience, Restrictions, Ton, Exemples) manquaient probablement ? Aide-moi à le reformuler complètement."*
- **Variables :** `prompt_original`
- **Exemple rempli :** "Voici le prompt que je viens d'utiliser et qui a donné un résultat décevant : 'Fais-moi un rapport'. Quelles informations C.L.A.R.T.É manquaient probablement ? Aide-moi à le reformuler complètement."
- **Résultat attendu :** Un diagnostic des lettres manquantes, puis une version C.L.A.R.T.É complète prête à être testée.
- **Module lié :** 2

### COM-003 — Rédiger un email de relance client personnalisé

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Relance d'un client ou partenaire sur une facture, une réponse en attente, ou un engagement pris.
- **Prompt :** *"Je suis {votre_activite}. Rédige un email de relance à {nom_client} : {objet_relance}, {duree_attente} sans réponse. L'email s'adresse à {nom_contact}, {relation_avec_contact}. Maximum {longueur_max} mots, ton {ton_souhaite}, ne jamais {chose_a_eviter}."*
- **Variables :** `votre_activite`, `nom_client`, `objet_relance`, `duree_attente`, `nom_contact`, `relation_avec_contact`, `longueur_max`, `ton_souhaite`, `chose_a_eviter`
- **Exemple rempli :** "Je suis consultante indépendante en gestion de projets. Rédige un email de relance à DELTA Distribution : facture de 850 000 FCFA impayée, 3 semaines sans réponse. L'email s'adresse à Awa Ndiaye, ma contact habituelle depuis 2 ans. Maximum 120 mots, ton direct et professionnel, ne jamais mentionner de menace juridique à ce stade."
- **Résultat attendu :** Un email prêt à envoyer, sans reformulation nécessaire.
- **Module lié :** 2

### COM-004 — Demander un plan avant l'exécution d'une mission complexe

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Sur une mission à plusieurs contraintes (budget, délai, format imposé) où une erreur de direction coûterait cher à corriger après rédaction complète.
- **Prompt :** *"{brief_complet_de_la_mission}. Avant de produire la version complète, présente-moi en 3-4 puces ton plan : ce que tu vas mettre en avant, dans quel ordre, et comment tu respectes chaque contrainte donnée. J'attends ta validation de plan avant que tu rédiges."*
- **Variables :** `brief_complet_de_la_mission`
- **Exemple rempli :** "Prépare une proposition commerciale d'une page pour une PME de distribution, budget maximum 1 200 000 FCFA sur 3 mois, besoin : tableau de suivi hebdomadaire des stocks. Avant de produire la version complète, présente-moi ton plan..."
- **Résultat attendu :** Un plan en 3-4 puces à valider ou corriger avant toute rédaction complète.
- **Module lié :** 2

### COM-005 — Transformer un prompt réussi en gabarit réutilisable

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Après avoir obtenu un bon résultat une fois, pour ne jamais avoir à réécrire le même prompt de zéro sur un cas similaire.
- **Prompt :** *"Voici un prompt qui a bien fonctionné : '{prompt_reussi}'. Transforme-le en gabarit réutilisable en remplaçant par des variables entre accolades toutes les informations qui changeraient si je l'utilisais pour un autre cas similaire."*
- **Variables :** `prompt_reussi`
- **Résultat attendu :** Un gabarit à variables nommées clairement, réutilisable sans réécriture complète.
- **Module lié :** 2

### COM-006 — Lancer un brief de workflow multi-étapes

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Première étape d'un workflow brief → brouillon → critique → version finale, sur un livrable à enjeu réel.
- **Prompt :** *"{contexte_et_role}. Produis un premier brouillon de {type_livrable} pour {destinataire}, en respectant : {liste_contraintes}. Je vais te demander une critique de ce brouillon avant la version finale, donc ne cherche pas à produire un résultat parfait du premier coup — un bon point de départ suffit."*
- **Variables :** `contexte_et_role`, `type_livrable`, `destinataire`, `liste_contraintes`
- **Résultat attendu :** Un brouillon exploitable comme base de travail, pas nécessairement final.
- **Module lié :** 2

### COM-007 — Faire critiquer honnêtement un brouillon

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Étape de critique d'un workflow multi-étapes, sur un document qui sera lu par un tiers (client, employeur, public).
- **Prompt :** *"Relis ce brouillon avec un œil critique, du point de vue de {audience_cible} : qu'est-ce qui pourrait ne pas convaincre, être trop long, trop vague, ou mal passer ? Sois honnête, ne me dis pas que tout est parfait si ce n'est pas le cas."*
- **Variables :** `audience_cible`
- **Résultat attendu :** Une liste de faiblesses concrètes et exploitables, pas un simple compliment poli.
- **Module lié :** 2

### COM-008 — Produire la version finale après critique

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Dernière étape d'un workflow multi-étapes, une fois la critique reçue et les points à corriger identifiés.
- **Prompt :** *"Intègre uniquement ce(s) point(s) de la critique : {points_retenus}. Ne touche pas au reste du texte qui fonctionne déjà. Donne-moi la version finale complète."*
- **Variables :** `points_retenus`
- **Résultat attendu :** Une version finale ciblée, sans régression sur les parties déjà satisfaisantes du brouillon.
- **Module lié :** 2

### COM-009 — Rédiger une proposition commerciale complète pour un nouveau prospect

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Réponse à une sollicitation d'un nouveau client potentiel, avec budget et besoin déjà exprimés.
- **Prompt :** *"Je suis {votre_activite}. Rédige une proposition commerciale d'une page pour {nom_prospect}, {secteur_prospect}, besoin exprimé : {besoin_exprime}. Budget maximum : {budget_max} sur {duree_mission}. Lue par {decideur_prospect}, qui compare plusieurs prestataires. Mets en avant : {points_forts}. Ne promets jamais un résultat chiffré non garanti. Ton professionnel orienté résultat."*
- **Variables :** `votre_activite`, `nom_prospect`, `secteur_prospect`, `besoin_exprime`, `budget_max`, `duree_mission`, `decideur_prospect`, `points_forts`
- **Résultat attendu :** Une proposition d'une page prête à être critiquée puis finalisée (voir COM-007/COM-008).
- **Module lié :** 2

### COM-010 — Extraire une information structurée d'un document réel

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai (upload de fichier)
- **Contexte d'usage :** Analyse d'un contrat, rapport ou tableau reçu, pour en extraire les informations qui comptent sans le relire ligne par ligne.
- **Prompt :** *"Voici {type_document}. Extrais dans un tableau : {liste_champs_a_extraire}. Si une information demandée n'apparaît pas dans le document, écris 'non précisé' plutôt que de la déduire ou de l'inventer."*
- **Variables :** `type_document`, `liste_champs_a_extraire`
- **Exemple rempli :** "Voici un extrait de contrat de prestation. Extrais dans un tableau : montants et modalités de paiement, échéances et délais, clauses de résiliation, obligations de chaque partie. Si une information demandée n'apparaît pas dans le document, écris 'non précisé'."
- **Résultat attendu :** Un tableau structuré, à vérifier systématiquement contre l'original avant utilisation.
- **Module lié :** 2

### COM-011 — Résumer un document long en points clés pour un décideur pressé

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai (upload de fichier)
- **Contexte d'usage :** Un rapport ou compte-rendu volumineux doit être compris en quelques minutes par quelqu'un qui n'a pas le temps de le lire en entier.
- **Prompt :** *"Voici {type_document}. Résume-le en 5 points maximum pour {destinataire}, qui a {temps_disponible} pour le lire. Priorise les informations qui demandent une décision ou une action de sa part."*
- **Variables :** `type_document`, `destinataire`, `temps_disponible`
- **Résultat attendu :** Un résumé actionnable, pas une simple compression du texte original.
- **Module lié :** 2

### COM-012 — Comparer deux versions d'un même texte pour choisir la meilleure

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand vous avez deux versions d'un même texte (par exemple un ancien et un nouveau brouillon) et hésitez sur laquelle envoyer.
- **Prompt :** *"Voici deux versions du même texte : Version A : {version_a}. Version B : {version_b}. Pour une audience de type {audience_cible}, laquelle est la plus efficace, et pourquoi en 3 points maximum ?"*
- **Variables :** `version_a`, `version_b`, `audience_cible`
- **Résultat attendu :** Une recommandation justifiée plutôt qu'une préférence stylistique non expliquée.
- **Module lié :** 2

### COM-013 — Adapter le ton d'un texte existant à une nouvelle audience

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Réutiliser un contenu déjà écrit (email, présentation, post) pour un public différent sans repartir de zéro.
- **Prompt :** *"Voici un texte destiné à {audience_originale} : {texte_original}. Adapte-le pour {nouvelle_audience}, en gardant le même message de fond mais en changeant : {elements_a_changer}."*
- **Variables :** `audience_originale`, `texte_original`, `nouvelle_audience`, `elements_a_changer`
- **Résultat attendu :** Une version adaptée qui conserve le fond tout en changeant la forme pour le nouveau public.
- **Module lié :** 2

### COM-014 — Vérifier la cohérence d'un document avant envoi

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Dernière vérification avant d'envoyer un document important (contrat, proposition, rapport), pour repérer des incohérences internes.
- **Prompt :** *"Relis ce document et signale toute incohérence interne : un chiffre répété différemment à deux endroits, une date qui ne correspond pas à une autre partie du texte, une affirmation qui se contredit. Ne relève que des incohérences factuelles, pas des préférences de style."*
- **Variables :** aucune (le document est fourni en pièce jointe ou collé directement)
- **Résultat attendu :** Une liste d'incohérences factuelles concrètes à corriger avant envoi, ou la confirmation qu'aucune n'a été détectée.
- **Module lié :** 2

### COM-015 — Construire un prompt réutilisable pour répondre à une objection commerciale récurrente

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand vous entendez régulièrement la même objection de prospects ou clients ("c'est trop cher", "je n'ai pas le temps") et voulez une réponse cohérente et testée plutôt qu'improvisée chaque fois.
- **Prompt :** *"Je suis {votre_activite}. Un prospect/client m'objecte régulièrement : '{objection_recurrente}'. Aide-moi à construire une réponse de {longueur_max} qui reconnaît l'objection sans la balayer, puis apporte {argument_cle}, sans jamais {chose_a_eviter}. Ton {ton_souhaite}."*
- **Variables :** `votre_activite`, `objection_recurrente`, `longueur_max`, `argument_cle`, `chose_a_eviter`, `ton_souhaite`
- **Résultat attendu :** Un gabarit de réponse réutilisable à chaque fois que la même objection revient, plutôt qu'une improvisation à chaque échange.
- **Module lié :** 2

---

**Rappel schéma complet (pour agrégation Phase 5) :** chaque entrée ci-dessus correspond aux champs `id / categorie / titre / niveau / outil_recommande / contexte_usage / prompt_template / variables / exemple_rempli / resultat_attendu / module_lie: 2` définis en section 6 du prompt maître.
