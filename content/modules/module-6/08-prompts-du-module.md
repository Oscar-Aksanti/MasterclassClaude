# Prompts du module — Module 6 — Transformer ses compétences IA en opportunités

15 prompts liés à ce module, extraits de la bibliothèque complète des 100 prompts professionnels (`bibliotheque-100-prompts/`, Phase 5 — la structure JSON ci-dessous sert de source pour l'agrégation). Préfixe de catégorie : `CARR` (Carrière, freelancing, contenu, monétisation).

---

### CARR-001 — Rédiger la page Avant/Après de son portfolio

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai ou Claude Code
- **Contexte d'usage :** Pour ouvrir son Portfolio IA Professionnel avec une accroche factuelle, sans formule marketing vide.
- **Prompt :** *"Voici ma situation avant cette formation : {situation_avant}. Voici ce qui a concrètement changé : {ce_qui_a_change}. Rédige une page 'Avant/Après' en 2 phrases maximum, factuelle, sans superlatif marketing."*
- **Exemple rempli :** "Voici ma situation avant cette formation : j'utilisais Claude.ai pour tout, y compris copier-coller des colonnes Excel à la main. Voici ce qui a concrètement changé : j'ai un dashboard déployé, une automatisation active et une bibliothèque de prompts que je réutilise chaque semaine. Rédige une page 'Avant/Après' en 2 phrases maximum, factuelle, sans superlatif marketing."
- **Résultat attendu :** Une accroche courte et crédible, réutilisable en tête de portfolio et sur LinkedIn.
- **Variables :** ["situation_avant", "ce_qui_a_change"]
- **module_lie :** 6

### CARR-002 — Assembler ses livrables en portfolio cohérent

- **Niveau :** Débutant
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici mes {nombre_livrables} livrables : {description_courte_de_chaque_livrable}. Aide-moi à les organiser en une page de portfolio cohérente, avec un titre court et percutant pour chaque section."*
- **Résultat attendu :** Une structure de portfolio prête à mettre en forme (Notion ou PDF), sans avoir à réfléchir seul à l'ordre ou aux titres.
- **Variables :** ["nombre_livrables", "description_courte_de_chaque_livrable"]
- **module_lie :** 6

### CARR-003 — Transformer une compétence technique en offre orientée résultat

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour sortir du langage "je fais de l'IA" et formuler une offre vendable.
- **Prompt :** *"Voici ce que je sais faire techniquement : {competence}. Reformule ça en une offre de service orientée résultat métier, sans jargon technique, en une phrase que comprendrait un client qui ne connaît rien à l'IA."*
- **Exemple rempli :** "Voici ce que je sais faire techniquement : automatiser la génération d'un rapport de ventes via Make et Claude. Reformule ça en une offre de service orientée résultat métier, sans jargon technique, en une phrase que comprendrait un client qui ne connaît rien à l'IA."
- **Résultat attendu :** Une phrase d'offre du type "J'automatise votre reporting mensuel pour qu'il soit prêt sans que vous y touchiez".
- **Variables :** ["competence"]
- **module_lie :** 6

### CARR-004 — Rédiger un pitch en 1 page (interne ou client)

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code ou Claude.ai
- **Contexte d'usage :** Pour proposer un projet pilote IA à un employeur, ou une nouvelle offre à un client existant.
- **Prompt :** *"Aide-moi à rédiger un pitch d'une page pour proposer {projet}. Structure exacte : 1) Problème (avec un chiffre) 2) Solution Claude (sans jargon) 3) Gain chiffré (temps ou argent) 4) Prochaine étape (une action datée). Contexte : {contexte_detaille}."*
- **Résultat attendu :** Un pitch structuré en 4 blocs, avec un chiffre concret dans chaque section clé, prêt à envoyer.
- **Variables :** ["projet", "contexte_detaille"]
- **module_lie :** 6

### CARR-005 — Chiffrer le gain d'une automatisation ou d'un projet IA

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand la section "gain chiffré" d'un pitch reste vague.
- **Prompt :** *"Voici ma tâche avant automatisation : {description_avant} (fréquence : {frequence}, temps par occurrence : {temps}). Aide-moi à calculer le gain annuel en heures, puis à le formuler en une phrase convaincante pour un décideur non technique."*
- **Résultat attendu :** Un calcul simple (fréquence × temps × 52 semaines) transformé en argument chiffré crédible.
- **Variables :** ["description_avant", "frequence", "temps"]
- **module_lie :** 6

### CARR-006 — Rédiger un post LinkedIn "retour d'expérience"

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Rédige un post LinkedIn de format 'retour d'expérience' sur mon apprentissage de Claude en formation. Situation avant : {situation_avant}. Ce qui a changé : {ce_qui_a_change}. Ton direct et professionnel, pas de superlatifs, maximum 150 mots, 2-3 hashtags pertinents à la fin."*
- **Résultat attendu :** Un post prêt à relire et publier, orienté crédibilité plutôt qu'autopromotion.
- **Variables :** ["situation_avant", "ce_qui_a_change"]
- **module_lie :** 6

### CARR-007 — Rédiger un post LinkedIn "étude de cas anonymisée"

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour montrer un résultat client sans exposer d'informations confidentielles.
- **Prompt :** *"Rédige un post LinkedIn 'étude de cas anonymisée' à partir de ce projet : {description_projet_anonymise}. N'utilise aucun nom réel de client ni de chiffre d'affaires exact. Termine par un résultat mesurable et 2-3 hashtags."*
- **Résultat attendu :** Une preuve de compétence publiable sans risque de confidentialité.
- **Variables :** ["description_projet_anonymise"]
- **module_lie :** 6

### CARR-008 — Rédiger un post LinkedIn "avant/après"

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Rédige un post LinkedIn de format 'Avant/Après' : Avant, je faisais {liste_taches_avant}. Après, je fais {liste_taches_apres}. Style visuel avec deux blocs clairement séparés, ton direct, maximum 150 mots."*
- **Résultat attendu :** Un post à fort impact visuel, facile à lire même en scrollant vite.
- **Variables :** ["liste_taches_avant", "liste_taches_apres"]
- **module_lie :** 6

### CARR-009 — Rédiger un post LinkedIn "contenu éducatif"

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Rédige un post LinkedIn éducatif sur ce sujet : {sujet_metier}. Structure : une liste de 3 signes/critères concrets, puis une phrase personnelle sur comment je l'ai appliqué moi-même, avec un chiffre si possible. Pas de ton professoral, ton de pair à pair."*
- **Résultat attendu :** Un post qui construit l'autorité sans paraître donneur de leçons.
- **Variables :** ["sujet_metier"]
- **module_lie :** 6

### CARR-010 — Fixer un prix pour une offre de service

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Quand l'ancrage tarifaire bloque le lancement d'une offre.
- **Prompt :** *"Je veux vendre cette offre : {description_offre}, sur le marché {marche_geographique}. Voici le temps que ça me prend : {temps_estime}. Propose-moi une fourchette de prix réaliste en FCFA et en USD, avec une justification en une phrase."*
- **Résultat attendu :** Une fourchette tarifaire argumentée, pas juste un chiffre au hasard.
- **Variables :** ["description_offre", "marche_geographique", "temps_estime"]
- **module_lie :** 6

### CARR-011 — Transformer un savoir-faire en produit digital

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Voici un savoir-faire que je maîtrise bien : {savoir_faire}. Propose-moi 3 formats de produit digital réalistes que je pourrais construire à partir de ça en moins de 2 semaines, avec pour chacun un prix indicatif et une plateforme de vente adaptée."*
- **Résultat attendu :** Une liste courte et priorisée d'options concrètes, pas une liste générique de tous les formats possibles.
- **Variables :** ["savoir_faire"]
- **module_lie :** 6

### CARR-012 — Se positionner dans la grille de décision (salariat/freelance/produit)

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Prompt :** *"Voici ma situation : temps disponible par semaine {temps_disponible}, tolérance au risque financier {tolerance_risque}, besoin de revenu immédiat {besoin_revenu}. Entre salariat augmenté, freelance et produit digital, quelle voie recommandes-tu en priorité pour les 90 prochains jours, et pourquoi ?"*
- **Résultat attendu :** Une recommandation argumentée à partir de la situation réelle, pas une réponse générique.
- **Variables :** ["temps_disponible", "tolerance_risque", "besoin_revenu"]
- **module_lie :** 6

### CARR-013 — Formuler sa stratégie de valorisation à 90 jours

- **Niveau :** Intermédiaire
- **Outil recommandé :** Claude Code
- **Prompt :** *"Aide-moi à formuler ma stratégie de valorisation à 90 jours à partir de ce positionnement : {positionnement_choisi}. Structure : positionnement en 1 phrase, 3 actions datées sous 2 semaines, jalons à 30/60/90 jours."*
- **Résultat attendu :** Un document d'une page, daté et vérifiable, prêt à devenir la Section 6 du Portfolio IA Professionnel.
- **Variables :** ["positionnement_choisi"]
- **module_lie :** 6

### CARR-014 — Préparer une prospection sur une plateforme freelance

- **Niveau :** Débutant
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Pour rédiger un profil ou un premier message de prospection sur Malt, Comet, Upwork ou Fiverr.
- **Prompt :** *"Aide-moi à rédiger la description de mon profil freelance pour {plateforme}, à partir de cette offre : {description_offre}. Maximum 100 mots, oriente sur le résultat client, pas sur les outils techniques utilisés."*
- **Résultat attendu :** Un texte de profil prêt à publier, cohérent avec le positionnement orienté résultat du module.
- **Variables :** ["plateforme", "description_offre"]
- **module_lie :** 6

### CARR-015 — Vérifier qu'une offre ou un pitch n'utilise pas de jargon technique

- **Niveau :** Avancé
- **Outil recommandé :** Claude.ai
- **Contexte d'usage :** Contrôle qualité avant publication ou envoi d'un pitch/offre à un client ou un employeur.
- **Prompt :** *"Relis ce texte : {texte}. Identifie chaque mot ou expression qui suppose une connaissance technique de l'IA, et propose une reformulation 100 % métier pour chacun, compréhensible par quelqu'un qui n'a jamais utilisé Claude."*
- **Résultat attendu :** Une liste des termes à remplacer, avec une alternative concrète pour chacun — un filtre qualité avant tout envoi public.
- **Variables :** ["texte"]
- **module_lie :** 6

---

**Rappel schéma complet (pour agrégation Phase 5) :** chaque entrée ci-dessus correspond aux champs `id / categorie / titre / niveau / outil_recommande / contexte_usage / prompt_template / variables / exemple_rempli / resultat_attendu / module_lie: 6` définis en section 6 du prompt maître.
