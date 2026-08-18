# Prompts du module — Module 1 — Maîtriser l'écosystème Claude

10 prompts liés à ce module, extraits de la bibliothèque complète des 100 prompts professionnels (`bibliotheque-100-prompts/`, Phase 5 — la structure JSON ci-dessous sert de source pour l'agrégation). Préfixe de catégorie : `ECO` (Écosystème & configuration).

---

### ECO-001 — Choisir le bon outil Claude pour une tâche

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand vous hésitez entre plusieurs outils Claude pour une tâche précise.
- **Prompt :** *"Voici une tâche que je dois faire : {description_tache}. Parmi Claude.ai (chat), Claude Code, Claude Cowork, Claude in Chrome et Claude Design, lequel est le plus adapté, et pourquoi en une phrase ?"*
- **Exemple rempli :** "Voici une tâche que je dois faire : comparer les tarifs de 5 concurrents sur leurs sites web. Parmi Claude.ai (chat), Claude Code, Claude Cowork, Claude in Chrome et Claude Design, lequel est le plus adapté, et pourquoi en une phrase ?"
- **Résultat attendu :** Une recommandation d'outil justifiée en une phrase, sans avoir à connaître l'arbre de décision par cœur.

### ECO-002 — Générer une Skill à partir d'une tâche répétitive

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Contexte d'usage :** Pour transformer une tâche que vous refaites chaque semaine en méthode réutilisable.
- **Prompt :** *"Aide-moi à créer une Skill nommée `{nom_skill}`. Elle doit {description_tache}, avec exactement ces règles : {liste_regles}. Elle ne doit jamais {erreur_a_eviter}."*
- **Exemple rempli :** "Aide-moi à créer une Skill nommée `resume-reunion-client`. Elle doit transformer des notes brutes de réunion en compte-rendu structuré, avec exactement ces règles : 4 sections (Décisions, Actions, Blocages, Prochaine étape). Elle ne doit jamais inventer une décision absente des notes."
- **Résultat attendu :** Un fichier `SKILL.md` complet, prêt à tester immédiatement.

### ECO-003 — Tester une Skill sur un cas réel avant de la valider

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Applique la Skill `{nom_skill}` à ces notes/ce texte : {contenu}. Si un élément attendu manque dans le résultat, explique-moi pourquoi."*
- **Résultat attendu :** Une validation concrète que la Skill fonctionne comme prévu, avec diagnostic en cas d'écart.

### ECO-004 — Diagnostiquer un problème d'installation

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai (depuis un autre appareil si l'installation bloque)
- **Prompt :** *"J'essaie d'installer Claude Code sur {Mac/Windows} et j'obtiens ce message : {message_erreur}. Que dois-je vérifier, étape par étape ?"*
- **Résultat attendu :** Un diagnostic pas-à-pas sans jargon excessif.

### ECO-005 — Choisir quel connecteur MCP activer en premier

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Voici les outils que j'utilise le plus au quotidien : {liste_outils}. Si je ne pouvais connecter qu'un seul connecteur MCP pour commencer, lequel me ferait gagner le plus de temps immédiatement, et pourquoi ?"*
- **Résultat attendu :** Une priorisation justifiée plutôt qu'une liste générique de tous les connecteurs disponibles.

### ECO-006 — Rédiger son fichier de mémoire personnelle

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Prompt :** *"Aide-moi à rédiger un fichier de mémoire personnelle pour mes conversations Claude. Voici mon métier : {metier}. Mes clients/projets récurrents : {liste}. Mes préférences de ton et de format : {preferences}."*
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
- **Résultat attendu :** Une recommandation Skill vs automatisation, avec justification liée à la fréquence et à la variabilité de la tâche.

### ECO-010 — Comparer deux façons de faire la même tâche pour choisir la plus rapide

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Je veux faire {tache}. Est-ce plus rapide de te le demander directement dans le chat, ou de passer par Claude Code ? Explique la différence pour ce cas précis."*
- **Résultat attendu :** Une décision éclairée cas par cas, plutôt qu'une règle rigide appliquée sans réflexion.

---

**Rappel schéma complet (pour agrégation Phase 5) :** chaque entrée ci-dessus correspond aux champs `id / categorie / titre / niveau / outil_recommande / contexte_usage / prompt_template / variables / exemple_rempli / resultat_attendu / module_lie: 1` définis en section 6 du prompt maître.
