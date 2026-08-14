<!-- Contenu Phase 6 — script consolidé pour l'animateur. Ce fichier ne duplique PAS le contenu déjà écrit dans modules/module-2-prompting-expert/ : il y renvoie précisément (fichier + section) et n'ajoute QUE la couche propre à l'animation live (script d'ouverture/clôture mot à mot, transitions, gestion du temps, FAQ terrain). Structure alignée sur le gabarit `run-of-show-session-1.md`. -->

# Run of show — Animateur — Session 2

**Module 2 — Communiquer avec Claude comme un expert · Mercredi 19 août 2026 · 18h00–19h45 GMT · Teams**

Avant d'ouvrir la session : dérouler `kit-animateur/checklist-technique-avant-live.md` en entier (section "Module 2 — Prompting expert (Session 2)").

## Documents à garder ouverts pendant la session

- `modules/module-2-prompting-expert/02-run-of-show-session.md` (minutage détaillé du bloc démo)
- `modules/module-2-prompting-expert/05-demo-commentee.md` (texte exact à taper/dire pendant la démo)
- `modules/module-2-prompting-expert/06-exercices/exercice-guide-depart.md`, `exercice-guide-solution.md`, `extrait-contrat-DELTA.md` et `defi-autonomie.md`
- `modules/module-2-prompting-expert/09-ressources-telechargeables/gabarit-CLARTE.md` (à montrer à l'écran au bon moment)
- `01-programme/parcours-portfolio-participant.md` (rappel du persona Fatou et de la Section 2 du Portfolio)
- Le support de slides (`00-marque-et-design/gabarit-slide-master.pptx`, contenu dans `modules/module-2-prompting-expert/03-support-slides.md`, 15 slides)

---

## [18h00–18h10] Bloc 1 — Reconnexion (10 min)

**Script d'ouverture (à dire quasi mot pour mot) :**

> "Bonsoir à tous, ravi de vous revoir pour cette Session 2. Petit rappel avant de commencer : au Module 1, Fatou a fait un travail qu'on ne refait qu'une seule fois — elle a configuré son environnement Claude. Claude Code installé, une Skill créée pour ses comptes-rendus de réunion client, un connecteur MCP Google Drive branché. Elle a maintenant un outil prêt à travailler.
>
> Sauf que ce soir, on va découvrir qu'avoir l'outil ne suffit pas si on ne sait pas lui parler correctement. Parce que Fatou, comme beaucoup d'entre vous très probablement cette semaine, utilise Claude tous les jours — et tape des phrases courtes, improvisées. 'Écris-moi un email pour relancer un client.' 'Aide-moi avec ce tableau Excel.' Résultat : elle reformule trois, quatre fois en moyenne avant d'obtenir quelque chose d'exploitable. Sur une semaine chargée en emails et comptes-rendus, ça lui coûte facilement une heure en aller-retours qui auraient pu être évités dès le premier message."

**Sondage chat Teams (lancer immédiatement après) :** "Combien de fois avez-vous reformulé une demande à Claude avant d'obtenir ce que vous vouliez, cette semaine ?" (Laisser défiler 60-90 secondes, commenter à voix haute 2-3 réponses qui arrivent — ça montre que le problème de Fatou est aussi celui de la salle, pas un cas isolé.)

**Transition vers le Bloc 2 :**

> "Le problème n'est pas que Claude comprend mal. C'est qu'on lui donne une phrase là où il faudrait lui donner un brief complet — et qu'on attend un résultat parfait en un seul message là où il faudrait, sur les tâches importantes, construire le résultat en plusieurs étapes courtes. Ce soir, on règle ça avec une méthode en 6 lettres que vous n'oublierez plus : C.L.A.R.T.É."

## [18h10–18h25] Bloc 2 — Mini-concept : la méthode C.L.A.R.T.É (15 min)

Support : slides 2 à 7 (`03-support-slides.md`). Points à couvrir dans l'ordre :
1. C.L.A.R.T.É en 6 lettres (slide 3) — insister : ce n'est pas une formule à réciter en entier chaque fois, c'est une checklist mentale ; chaque lettre doit apporter une information utile, jamais une formule de politesse.
2. Citation Fatou avant/après (slide 4) — poser le contraste "un email générique" vs "un email prêt à envoyer du premier coup" sans encore révéler le prompt complet (il arrive dans la démo).
3. Tableau avant/après réel (slide 5) — pointer explicitement l'encadré : "le prompt le plus long n'est pas le meilleur, c'est celui où chaque lettre apporte une information utile."
4. Question ou mission (slides 6-7) — poser la distinction (question = réponse directe ; mission = livrable construit à plusieurs contraintes) et introduire le réflexe "réfléchis étape par étape, présente ton plan avant d'exécuter" — sans le démontrer encore, juste l'annoncer.

**Transition vers le Bloc 3 :**

> "On arrête la théorie ici. Je vais maintenant faire, en direct, exactement ce qui coûte du temps à Fatou depuis des semaines : un prompt vague, tapé sans réfléchir. Regardez ce que ça donne, puis regardez ce que 90 secondes de méthode changent."

## [18h25–19h00] Bloc 3 — Démonstration live commentée (35 min)

**Ne pas improviser ce bloc : suivre `05-demo-commentee.md` texte en main.** Repères de minutage pour ne pas dériver :

| Sous-bloc | Fenêtre horaire | Objectif non négociable |
|---|---|---|
| A — Réécriture C.L.A.R.T.É en direct | 18h25–18h33 | **Le cœur du livrable — ne jamais sacrifier ce sous-bloc.** C'est ici que la salle voit, sur le même prompt, l'écart entre un résultat générique et un résultat prêt à envoyer — c'est ce qui justifie tout le reste de la session |
| B — Mission vs question / plan avant exécution | 18h33–18h40 | Faire vivre concrètement le réflexe "présente ton plan avant de rédiger" sur la proposition commerciale — si le temps manque, peut être résumé verbalement (voir table de retard) |
| C — Prompt → gabarit à variables | 18h40–18h46 | **Deuxième moment non négociable — ne jamais sacrifier.** C'est littéralement la compétence qui transforme un prompt en pièce de la bibliothèque de 15+ prompts, le livrable exact de cette session |
| D — Workflow multi-étapes (brief → brouillon → critique → version finale) | 18h46–18h54 | Montrer en priorité le rôle de l'étape de critique — c'est l'étape que presque tout le monde saute naturellement (voir `07-etude-de-cas.md`) |
| E — Analyse du contrat DELTA | 18h54–19h00 | Sous-bloc à raccourcir en premier si retard (voir table de triage) — repris intégralement dans l'exercice guidé Partie D |

**Transition vers la pratique (déjà rédigée dans `05-demo-commentee.md`, section finale) :**

> "À vous maintenant : reprenez les 3 mauvais prompts de l'exercice guidé, retravaillez-les avec C.L.A.R.T.É, transformez au moins un prompt réussi en gabarit à variables, et testez l'upload/analyse sur le contrat DELTA. Je circule dans le chat si vous bloquez."

## [19h00–19h35] Bloc 4 — Pratique guidée (35 min)

Les participants travaillent sur `06-exercices/exercice-guide-depart.md` (Parties A à D) et peuvent commencer à lister leurs propres tâches pour le défi. Rôle de l'animateur : circuler dans le chat Teams, PAS attendre passivement. Poser une relance à 19h15 si le chat est silencieux : "Dites-moi où vous en êtes — diagnostic des 3 prompts, gabarit à variables, ou upload du contrat ?"

**FAQ terrain anticipée (réponse en une ligne, ne pas transformer en mini-cours) :**

| Blocage probable | Réponse rapide |
|---|---|
| "Je ne sais pas si mon prompt a vraiment toutes les lettres C.L.A.R.T.É" | Proposer de demander directement à Claude : reprendre COM-002 (`08-prompts-du-module.md`) — coller le prompt décevant et demander quelles lettres manquent probablement |
| "Mon gabarit à variables ne marche plus dès que je change de client/situation" | Rappeler l'étape 4 de la méthode (`04-lecon-ecrite-complete.md`, Partie 3) : un gabarit qui ne fonctionne que sur son exemple d'origine n'est pas encore un vrai gabarit — le tester sur un deuxième cas réel différent |
| "Le plan que Claude propose avant rédaction est trop générique, je ne sais pas quoi corriger" | Rappeler qu'il faut donner une contrainte concrète et précise à ajuster (ex. "le prix mentionné en dernier, pas en premier"), pas juste valider ou refuser en bloc |
| "Je n'ai pas de vrai brouillon à critiquer, je ne sais pas quoi demander" | Réutiliser tel quel le prompt COM-007 (`08-prompts-du-module.md`) en changeant seulement `{audience_cible}` |
| "L'upload du contrat DELTA ne fonctionne pas / je n'ai pas de vrai fichier à uploader" | Proposer de coller directement le contenu de `extrait-contrat-DELTA.md` dans le chat — pour cet exercice précis, le résultat est équivalent ; l'upload de vrais fichiers PDF/Word/Excel reste la bonne pratique sur les documents personnels |
| "Je n'ai que 5-6 prompts, je n'arriverai jamais à 15 avant vendredi" | Rassurer : `defi-autonomie.md` précise qu'arriver avec 10 prompts plutôt que 15 n'est pas grave — l'essentiel non négociable est d'arriver avec au moins un workflow multi-étapes complet documenté |

## [19h35–19h45] Bloc 5 — Défi + clôture (10 min)

**Script de clôture :**

> "On s'arrête là pour la pratique. Avant de partir, trois choses. Un : votre défi avant vendredi est dans `defi-autonomie.md` — sur VOTRE métier cette fois : au moins 15 tâches réelles transformées en prompts C.L.A.R.T.É, chacune testée dans Claude, chacune transformée en gabarit avec au moins une `{variable}`, classées par usage. Et surtout : un workflow multi-étapes complet — brief, brouillon, critique, version finale — documenté sur une tâche à enjeu réel de votre semaine, pas un exercice fictif. Deux : rassemblez tout ça dans un document unique et ajoutez-le à la Section 2 de votre Portfolio IA Professionnel, 'Ma bibliothèque de prompts'. Postez le lien dans `#par-module` avec une phrase sur le prompt qui vous fait gagner le plus de temps. Trois : vendredi, Fatou revient, et cette fois elle a entre les mains un fichier Excel de ventes de son client DELTA Distribution — brut, avec des doublons, des valeurs manquantes, et une rupture de stock côté Nord qui lui coûte réellement de l'argent. Elle va apprendre à faire parler ce fichier sans écrire une seule formule de mémoire. Si vous n'avez jamais ouvert un tableau croisé dynamique ou entendu parler de SQL, ce n'est pas un problème : ce module part de zéro sur ces trois points, Claude fait le travail technique, vous validez qu'il répond à la bonne question business. À vendredi 18h."

**Q&A rapide (5 min si le temps le permet) — sinon rediriger explicitement vers `#entraide` dans la communauté plutôt que de laisser une question sans réponse en suspens.**

---

## Si vous êtes en retard — table de triage (spécifique à cette session)

Ordre de sacrifice, du premier au dernier (ne jamais couper plus bas que nécessaire) :

1. Couper le Q&A de clôture (déjà prévu comme variable).
2. Raccourcir le sous-bloc E (analyse du contrat DELTA) à une présentation du tableau déjà préparé, sans refaire l'upload en direct — l'exercice complet reste couvert par écrit dans `06-exercices/exercice-guide-depart.md` Partie D et son corrigé.
3. Raccourcir le sous-bloc D (workflow multi-étapes) en ne montrant que l'étape de critique et la version finale, sans repasser par tout le brief déjà généré au sous-bloc B — le raisonnement complet est repris dans `04-lecon-ecrite-complete.md` Partie 4 et dans `07-etude-de-cas.md`.
4. Réduire le sondage chat d'ouverture à 30 secondes au lieu de 90.
5. Ne jamais couper les sous-blocs A (réécriture C.L.A.R.T.É) et C (prompt → gabarit à variables) ni le temps de pratique guidée — ce sont les moments qui produisent réellement la bibliothèque de prompts, le livrable de la session.
