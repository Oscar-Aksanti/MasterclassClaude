# Run of show — Animateur — Session 5

**Module 5 — Automatiser son travail avec l'IA · Mercredi 26 août 2026 · 18h00–19h45 GMT · Teams**

Avant d'ouvrir la session : dérouler `kit-animateur/checklist-technique-avant-live.md` en entier, section générique **et** section "Module 5 — Automatisation (Session 5)" — cette session est **la plus exposée à un incident technique** de toute la cohorte, car Make dépend entièrement du réseau et de connexions tierces (Google Sheets, Notion, WhatsApp Business) déjà établies avant le live. Ne rien laisser à improviser sur les connexions.

## Documents à garder ouverts pendant la session

- `modules/module-5-automatisation/02-run-of-show-session.md` (minutage détaillé du bloc démo)
- `modules/module-5-automatisation/05-demo-commentee.md` (texte exact à taper/dire pendant la démo Make)
- `modules/module-5-automatisation/06-exercices/exercice-guide-depart.md`, `grille-cartographie-taches.md` et `defi-autonomie.md`
- `modules/module-5-automatisation/06-exercices/blueprint-scenario-delta-reporting.json` (référence de structure — ne jamais l'importer littéralement en direct, voir son avertissement d'en-tête)
- `01-programme/parcours-portfolio-participant.md` (rappel du persona Fatou et de la Section 5 du Portfolio)
- Le support de slides (gabarit `00-marque-et-design/gabarit-slide-master.pptx`, contenu dans `modules/module-5-automatisation/03-support-slides.md`)
- Le compte Make de démonstration, déjà connecté et testé avant la session à Google Sheets, Notion et WhatsApp Business (ou compte de test WhatsApp)

---

## [18h00–18h10] Bloc 1 — Reconnexion (10 min)

**Script d'ouverture (à dire quasi mot pour mot) :**

> "Bonsoir à tous, bienvenue pour la cinquième session. On a laissé Fatou avec un dashboard DELTA déployé, en ligne, accessible par lien — un vrai livrable. Mais je vous pose la question qu'elle s'est posée elle-même la semaine suivante : qui ouvre ce dashboard chaque lundi pour vérifier si la région Nord est repassée sous le seuil de stock critique ? Réponse : elle. Toujours elle. Et le mois qui a précédé cette session, elle a raté exactement la semaine où c'est arrivé — elle était en déplacement chez un autre client, elle s'est dit 'je regarderai plus tard', et elle a découvert la rupture Nord une semaine après qu'elle a commencé, avec les ventes perdues qui vont avec.
>
> Le dashboard n'était pas le problème. Le problème, c'est que rien ni personne ne surveillait la situation à sa place. Et en plus de ça, chaque mois, elle rédige à la main la même synthèse pour DELTA — 20 minutes à reprendre les mêmes chiffres, dans le même format, quasiment mot pour mot différent d'un mois à l'autre.
>
> Ce soir, on règle les deux d'un coup. On va construire un système qui surveille tout seul la feuille de suivi de DELTA, qui rédige lui-même la synthèse, et qui prévient Fatou par WhatsApp — uniquement quand ça compte vraiment. Elle n'aura plus jamais besoin de se souvenir d'aller vérifier."

**Callback narratif complémentaire (si le temps le permet, sinon enchaîner directement) :** rappeler en une phrase que la rupture Nord est le même problème identifié dès les notes de réunion du Module 1 et quantifié au Module 3 (-63 %, environ 8 961 000 FCFA de CA non réalisé) — "ce n'est pas un exemple inventé pour ce soir, c'est le fil qu'on suit depuis le premier jour."

**Sondage chat Teams (lancer immédiatement après) :** "Dans le chat : quelle tâche, chez vous, ressemble à ça — une vérification que vous savez faire, mais que vous oubliez parfois de faire au bon moment, pas par manque de compétence mais par manque de temps ou de mémoire ?" (Laisser défiler 60 secondes, en reprendre 2-3 réponses à voix haute — ce sont les meilleures candidates pour le défi en autonomie, le dire explicitement.)

**Transition vers le Bloc 2 :**

> "Avant de foncer dans Make, une question à trancher : est-ce que TOUT ce qui est répétitif mérite une automatisation complète ? Non — et c'est important de savoir pourquoi, sinon vous allez soit perdre du temps à automatiser ce qui ne le vaut pas, soit automatiser dangereusement ce qui a besoin d'un jugement humain."

## [18h10–18h25] Bloc 2 — Mini-concept : cartographie et agents (15 min)

Support : slides 2 à 5 (`03-support-slides.md`). Points à couvrir dans l'ordre :
1. Slide 3 — la grille fréquence × pénibilité × risque d'erreur : l'appliquer en direct à 3-4 tâches proposées par le chat pendant le sondage d'ouverture, pas seulement aux tâches de Fatou. Insister sur la lecture de la combinaison : "fréquence haute + pénibilité haute + risque faible, c'est le cas n° 1 — c'est exactement le rapport hebdo de Fatou."
2. Slide 4 — les trois niveaux prompt ponctuel / workflow / agent autonome : utiliser l'analogie orale du collègue de confiance ("un prompt, c'est un service ponctuel ; un workflow, c'est une mission validée étape par étape ; un agent autonome, c'est une procédure écrite une fois, avec l'autorisation d'agir seul dans un périmètre précis").
3. Slide 5 — citation Fatou ("elle vérifiait le stock Nord à la main chaque lundi, quand elle y pensait") : ton posé, c'est le pont direct vers la démo — ne pas s'attarder, elle a déjà été utilisée en écho au script d'ouverture.

**Transition vers le Bloc 3 :**

> "On arrête la théorie ici. Ce que je vais construire devant vous dans les 35 prochaines minutes, c'est exactement l'agent autonome dont on vient de parler : un déclencheur Google Sheets, un traitement Claude qui rédige, et une action — deux, en fait — dans Notion et WhatsApp. Rien de magique, trois briques simples, assemblées une fois."

## [18h25–19h00] Bloc 3 — Démonstration live commentée (35 min)

**Ne pas improviser ce bloc : suivre `05-demo-commentee.md` texte en main.** Repères de minutage pour ne pas dériver :

| Sous-bloc | Fenêtre horaire | Objectif non négociable |
|---|---|---|
| A — Déclencheur Google Sheets | 18h25–18h33 | Connecter et montrer le module "Watch Rows" sur la feuille `Suivi hebdo DELTA` — l'écran d'autorisation Google réel doit apparaître au moins une fois dans la session, même si le compte de démo est déjà connecté (rouvrir la fenêtre de gestion des connexions pour la montrer, sinon l'objection "l'IA accède à tout sans me demander" du Module 1 revient intacte) |
| B — Traitement Claude | 18h33–18h43 | **Montrer le texte généré et le comparer à ce que Fatou écrirait à la main — c'est ce qui rend l'automatisation crédible, pas la configuration technique du module** |
| C — Routeur + actions Notion/WhatsApp | 18h43–18h55 | **Le cœur du livrable de la session, celui qui ne se sacrifie jamais même en retard : le filtre à double critère (`region = Nord ET stock < seuil`) doit être vu et compris, pas juste mentionné** — montrer les deux exécutions (une qui alerte, une qui n'alerte pas) |
| D — Test avant activation | 18h55–19h00 | Basculer le scénario sur "ON" seulement après les deux tests réussis à l'écran — si le temps manque, c'est ce sous-bloc à raccourcir en gardant au minimum un test réussi visible (voir table de retard plus bas) |

**Transition vers la pratique (déjà rédigée dans `05-demo-commentee.md`, section finale) :**

> "À vous maintenant : remplissez votre propre grille de cartographie, choisissez la tâche qui sort en tête, et construisez votre premier scénario Make — un déclencheur, un traitement Claude, une action. Deux intégrations bien maîtrisées valent mieux que quatre approximatives. Je circule dans le chat si vous bloquez."

## [19h00–19h35] Bloc 4 — Pratique guidée (35 min)

Les participants travaillent sur `06-exercices/exercice-guide-depart.md` et `grille-cartographie-taches.md`. Rôle de l'animateur : circuler dans le chat Teams, PAS attendre passivement — cette session a le taux de blocage technique le plus élevé de la cohorte (comptes à connecter, webhooks, permissions), une relance systématique à 19h10 est nécessaire : "Dites-moi où vous en êtes — grille remplie, déclencheur connecté, ou déjà au routeur ?"

**FAQ terrain anticipée (réponse en une ligne, ne pas transformer en mini-cours) :**

| Blocage probable | Réponse rapide |
|---|---|
| "Make me demande de me reconnecter à Google/Notion en boucle, ou l'autorisation échoue" | Vérifier que le compte utilisé pour Make est bien celui qui a accès à la feuille/base concernée (erreur la plus fréquente : deux comptes Google différents) ; sinon proposer de continuer avec Google Sheets + Notion seulement, WhatsApp n'est pas indispensable pour valider l'exercice guidé |
| "Je n'ai pas de compte WhatsApp Business, je ne peux pas tester la branche alerte" | Rassurer immédiatement : Notion seul suffit pour valider le livrable de la pratique guidée (voir `01-fiche-pedagogique.md`) — remplacer WhatsApp par un second module Notion ou un email comme branche B pour comprendre le principe du routeur, sans bloquer sur l'intégration manquante |
| "Le webhook/déclencheur ne se déclenche pas quand j'ajoute une ligne" | Ne jamais laisser attendre le déclenchement automatique en pratique guidée — utiliser systématiquement "Exécuter une fois" (Run once) dans Make pour forcer l'exécution manuelle sur la ligne existante, c'est le réflexe enseigné dans la leçon, pas une astuce de secours |
| "Je ne suis pas sûr que la donnée que je transmets à Make soit sensible ou pas" | Rappeler `AUTO-015` (`08-prompts-du-module.md`) : demander directement à Claude d'évaluer le flux de données plutôt que de trancher seul dans le doute — et par défaut, ne jamais connecter une donnée personnelle individuelle (nom de client final, coordonnées) tant que ce doute n'est pas levé |
| "Mon filtre de condition alerte à chaque exécution, même quand il ne devrait pas" | Rappeler qu'un filtre à deux critères (région ET seuil) doit être testé séparément sur chaque critère — demander : "avez-vous testé une ligne où UN seul des deux critères est vrai ?" C'est l'erreur la plus fréquente de ce module (voir `04-lecon-ecrite-complete.md`, Partie 3) |
| "Je ne sais pas quelle tâche personnelle automatiser, aucune ne me semble assez répétitive" | Renvoyer à la réponse du sondage chat de la reconnexion : "la tâche que vous avez citée en ouverture — c'est celle-là, pas une nouvelle idée à chercher maintenant" |

## [19h35–19h45] Bloc 5 — Défi + clôture (10 min)

**Script de clôture :**

> "On s'arrête là pour la pratique. Avant de partir, trois choses. Un : votre défi avant vendredi est dans `defi-autonomie.md` — pas une copie du scénario DELTA, mais VOTRE propre tâche répétitive : un déclencheur, un traitement Claude, une action, une condition testée dans les deux sens, et vous activez le scénario seulement après ces deux tests. Deux : postez la capture du scénario actif et de l'exécution réussie dans `#par-module` — c'est ce qui remplit la Section 5 de votre Portfolio IA Professionnel. Trois : vendredi, dernière session de la cohorte live. Fatou a maintenant les cinq pièces de son portfolio — son environnement Claude, ses prompts, son analyse, son dashboard, et maintenant son automatisation. Vendredi, elle transforme tout ça en une offre qu'elle peut vendre : positionnement, tarifs, posts LinkedIn. On va faire pareil pour vous. À vendredi 18h, pour la dernière ligne droite."

**Q&A rapide (5 min si le temps le permet) — sinon rediriger explicitement vers `#entraide` dans la communauté plutôt que de laisser une question sans réponse en suspens.** Les blocages Make non résolus en direct sont un bon candidat pour `#entraide` : quelqu'un dans la cohorte a presque toujours déjà rencontré le même écran d'erreur.

---

## Si vous êtes en retard — table de triage (spécifique à cette session)

**Particularité de cette session : elle dépend entièrement du réseau et de connexions tierces déjà établies (Make, Google, Notion, WhatsApp Business).** Un retard ici vient plus souvent d'un incident de connexion en direct que d'un simple dépassement de minutage — voir aussi `checklist-technique-avant-live.md`, section "Plan B" ("Make.com ou une automatisation ne se déclenche pas"). Si un module refuse de s'authentifier ou qu'une exécution ne se déclenche pas dans les 2 minutes, basculer immédiatement sur l'historique d'un scénario déjà exécuté avec succès en amont plutôt que de déboguer à l'écran.

Ordre de sacrifice, du premier au dernier (ne jamais couper plus bas que nécessaire) :

1. Couper le Q&A de clôture (déjà prévu comme variable).
2. Raccourcir le sous-bloc D (test avant activation) à un seul test montré à l'écran (le cas qui alerte) plutôt que les deux — préciser à voix haute que le second test (cas qui ne doit pas alerter) est décrit intégralement dans `04-lecon-ecrite-complete.md`, Partie 3.
3. Réduire le sondage chat d'ouverture à 30 secondes au lieu de 60.
4. Si un incident réseau/connexion dépasse 2 minutes de dépannage en direct sur le sous-bloc A ou C, basculer sans hésiter sur une capture d'écran/historique déjà préparé (voir `checklist-technique-avant-live.md`) plutôt que de continuer à insister — le concept reste enseigné même sans démonstration live réussie.
5. Ne jamais couper le sous-bloc C (routeur + actions Notion/WhatsApp) ni le temps de pratique guidée — ce sont les deux moments qui produisent réellement le livrable de la session.
