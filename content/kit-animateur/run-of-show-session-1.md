<!-- Contenu Phase 6 — script consolidé pour l'animateur. Ce fichier ne duplique PAS le contenu déjà écrit dans modules/module-1-ecosysteme-claude/ : il y renvoie précisément (fichier + section) et n'ajoute QUE la couche propre à l'animation live (script d'ouverture/clôture mot à mot, transitions, gestion du temps, FAQ terrain). Gabarit de référence pour les sessions 2 à 6. -->

# Run of show — Animateur — Session 1

**Module 1 — Maîtriser l'écosystème Claude · Lundi 17 août 2026 · 18h00–19h45 GMT · Teams**

Avant d'ouvrir la session : dérouler `kit-animateur/checklist-technique-avant-live.md` en entier (première session = zéro marge d'erreur technique, c'est celle qui donne le ton).

## Documents à garder ouverts pendant la session

- `modules/module-1-ecosysteme-claude/02-run-of-show-session.md` (minutage détaillé du bloc démo)
- `modules/module-1-ecosysteme-claude/05-demo-commentee.md` (texte exact à taper/dire pendant la démo)
- `modules/module-1-ecosysteme-claude/06-exercices/exercice-guide-depart.md` et `defi-autonomie.md`
- `01-programme/parcours-portfolio-participant.md` (rappel du persona Fatou et de la Section 1 du Portfolio)
- Le support de slides (gabarit `00-marque-et-design/gabarit-slide-master.pptx`, contenu dans `modules/module-1-ecosysteme-claude/03-support-slides.md`)

---

## [18h00–18h10] Bloc 1 — Reconnexion (10 min)

**Script d'ouverture (à dire quasi mot pour mot — c'est la première impression de toute la cohorte) :**

> "Bonsoir à tous, bienvenue dans Claude AI Mastery 2.0. Je m'appelle [prénom], et pendant les deux prochaines semaines, on va faire quelque chose de précis : transformer Claude d'un outil que vous questionnez, en un collaborateur à qui vous confiez des missions. Pas de théorie pour la théorie ici — à la fin de chaque session, vous avez un livrable concret entre les mains.
>
> Pour qu'on parle le même langage pendant ces deux semaines, je vous présente quelqu'un : Fatou Diallo, consultante indépendante en gestion de projets à Dakar. Fatou n'est pas informaticienne — elle est excellente sur le terrain, mais elle perd un temps fou sur des tâches répétitives. On va la suivre module après module, et vous allez transposer chaque étape à VOTRE métier. À la fin, vous aurez un Portfolio IA Professionnel construit pièce par pièce, comme elle."

**Sondage chat Teams (lancer immédiatement après) :** "Dans le chat, dites-moi en un mot votre métier — je veux voir la diversité de la salle." (Laisser défiler 60-90 secondes en les nommant à voix haute au fil de l'arrivée — ça installe l'énergie de groupe dès la 2ᵉ minute.)

**Transition vers le Bloc 2 :**

> "Fatou, comme beaucoup d'entre vous probablement, utilise Claude pour TOUT à travers une seule fenêtre de chat. Ça marche, mais elle laisse énormément de valeur sur la table. Regardons pourquoi."

## [18h10–18h25] Bloc 2 — Mini-concept : panorama des outils (15 min)

Support : slides 2 à 5 (`03-support-slides.md`). Points à couvrir dans l'ordre :
1. Les 4 outils Claude et leur usage distinct (slide 3) — insister sur l'analogie "le mauvais outil = 3x plus de temps pour le même résultat", pas sur une liste de fonctionnalités.
2. L'arbre de décision (slide 4) — annoncer explicitement : "gardez cette slide, elle répond à 80 % de vos hésitations les premières semaines."
3. Callback Fatou (slide 5) — la citation sur le copier-coller de tableaux à la main. C'est le pont naturel vers la démo.

**Transition vers le Bloc 3 :**

> "On arrête la théorie ici. Je vais maintenant faire, en direct, exactement ce que Fatou va faire : installer Claude Code, créer sa première Skill, connecter un outil, et vous montrer une limite qu'il faut connaître avant qu'elle vous surprenne en plein travail."

## [18h25–19h00] Bloc 3 — Démonstration live commentée (35 min)

**Ne pas improviser ce bloc : suivre `05-demo-commentee.md` texte en main.** Repères de minutage pour ne pas dériver :

| Sous-bloc | Fenêtre horaire | Objectif non négociable |
|---|---|---|
| A — Installation Claude Code | 18h25–18h35 | Prouver que ça marche en 2 commandes — même si le réseau est lent, ne pas paniquer à l'écran, commenter en attendant |
| B — Créer la Skill de Fatou | 18h35–18h45 | **Le cœur du livrable de la session — ne jamais sacrifier ce sous-bloc, même en retard** |
| C — Connexion MCP Google Drive | 18h45–18h53 | Montrer l'écran d'autorisation réel — c'est ce qui désamorce la peur "l'IA accède à tout sans me demander" |
| D — Saturation de contexte | 18h53–19h00 | Si le temps manque déjà, c'est le sous-bloc à raccourcir (voir table de retard plus bas) — le concept est repris intégralement dans `04-lecon-ecrite-complete.md` Partie 4 |

**Transition vers la pratique (déjà rédigée dans `05-demo-commentee.md`, section finale) :**

> "À vous maintenant : installez Claude Code sur votre machine, créez votre propre Skill à partir d'une tâche que VOUS refaites chaque semaine, connectez votre Google Drive, et faites l'exercice des 5 tâches. Je circule dans le chat si vous bloquez."

## [19h00–19h35] Bloc 4 — Pratique guidée (35 min)

Les participants travaillent sur `06-exercices/exercice-guide-depart.md`. Rôle de l'animateur : circuler dans le chat Teams, PAS attendre passivement. Poser une relance à 19h15 si le chat est silencieux : "Dites-moi où vous en êtes — installation, Skill, ou MCP ?"

**FAQ terrain anticipée (réponse en une ligne, ne pas transformer en mini-cours) :**

| Blocage probable | Réponse rapide |
|---|---|
| "L'installation échoue, permissions refusées" (souvent poste professionnel verrouillé) | Proposer l'alternative Claude.ai web pour continuer la session, installation à refaire depuis un compte admin/personnel avant le défi |
| "Je ne sais pas quelle tâche choisir pour ma Skill" | Renvoyer à la question du sondage pré-formation : "quelle tâche répétitive avez-vous citée ? Commencez par celle-là." |
| "L'écran d'autorisation Google ne s'affiche pas" | Vérifier bloqueur de pop-up du navigateur ; sinon proposer Notion comme MCP alternatif pour ne pas bloquer sur ce point |
| "Ma Skill ne fonctionne pas comme prévu" | Rappeler `ECO-003` (`08-prompts-du-module.md`) : demander à Claude d'expliquer pourquoi le résultat diffère de l'attendu, plutôt que de réécrire la Skill de zéro |
| "Je n'ai pas fini l'exercice des 5 tâches" | Rassurer : c'est un exercice d'entraînement, pas le livrable noté — le vrai objectif de ce soir est l'environnement configuré |

## [19h35–19h45] Bloc 5 — Défi + clôture (10 min)

**Script de clôture :**

> "On s'arrête là pour la pratique. Avant de partir, trois choses. Un : votre défi avant mercredi est dans `defi-autonomie.md` — installez, créez une Skill sur VOTRE tâche à vous cette fois, connectez un MCP, et remplissez votre fichier de mémoire personnelle. Deux : prenez une capture d'écran de ces 4 éléments et postez-la dans `#par-module` — c'est ce qui remplit la Section 1 de votre Portfolio IA Professionnel. Trois : mercredi, Fatou revient, et cette fois elle a un problème de communication — elle envoie des prompts vagues et récupère des résultats à moitié utiles. On va corriger ça ensemble avec une méthode simple. À mercredi 18h."

**Q&A rapide (5 min si le temps le permet) — sinon rediriger explicitement vers `#entraide` dans la communauté plutôt que de laisser une question sans réponse en suspens.**

---

## Si vous êtes en retard — table de triage (spécifique à cette session)

Ordre de sacrifice, du premier au dernier (ne jamais couper plus bas que nécessaire) :

1. Couper le Q&A de clôture (déjà prévu comme variable).
2. Raccourcir le sous-bloc D (saturation de contexte) à une explication verbale sans la faire vivre en direct — le concept est entièrement couvert par écrit dans `04-lecon-ecrite-complete.md`.
3. Réduire le sondage chat d'ouverture à 30 secondes au lieu de 90.
4. Ne jamais couper le sous-bloc B (création de la Skill) ni le temps de pratique guidée — ce sont les deux moments qui produisent réellement le livrable de la session.
