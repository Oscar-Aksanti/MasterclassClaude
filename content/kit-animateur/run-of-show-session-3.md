<!-- Contenu Phase 6 — script consolidé pour l'animateur. Ce fichier ne duplique PAS le contenu déjà écrit dans modules/module-3-data-analyst/ : il y renvoie précisément (fichier + section) et n'ajoute QUE la couche propre à l'animation live (script d'ouverture/clôture mot à mot, transitions, gestion du temps, FAQ terrain). Structure alignée sur le gabarit `kit-animateur/run-of-show-session-1.md`. -->

# Run of show — Animateur — Session 3

**Module 3 — Transformer Claude en Data Analyst personnel · Vendredi 21 août 2026 · 18h00–19h45 GMT · Teams**

Avant d'ouvrir la session : dérouler `kit-animateur/checklist-technique-avant-live.md` en entier — section 1 (générique) puis section 2, sous-section "Module 3 — Data Analyst (Session 3)" (ne pas la reproduire ici, elle liste déjà le fichier brut à ouvrir, la base ventes/clients SQL et le dashboard connecté).

## Documents à garder ouverts pendant la session

- `modules/module-3-data-analyst/02-run-of-show-session.md` (minutage détaillé du bloc démo + gestion du temps)
- `modules/module-3-data-analyst/05-demo-commentee.md` (texte exact à taper/dire pendant la démo)
- `modules/module-3-data-analyst/06-exercices/exercice-guide-depart.md` et `defi-autonomie.md`
- `modules/module-3-data-analyst/07-etude-de-cas.md` (en réserve — utile si un participant demande "et si on ne pouvait financer qu'une seule action ?" pendant la pratique guidée)
- `01-programme/parcours-portfolio-participant.md` (rappel du persona Fatou et de la Section 3 du Portfolio)
- Le support de slides (gabarit `00-marque-et-design/gabarit-slide-master.pptx`, contenu dans `modules/module-3-data-analyst/03-support-slides.md`)
- `modules/module-3-data-analyst/06-exercices/ventes-delta-distribution-brut.xlsx` et `ventes-delta-distribution-nettoye.xlsx` (ne pas ouvrir la version nettoyée avant le nettoyage en direct)

---

## [18h00–18h10] Bloc 1 — Reconnexion (10 min)

**Script d'ouverture (à dire quasi mot pour mot — le callback narratif est ce qui donne le sentiment de progression aux participants) :**

> "Bonsoir à tous, bienvenue dans cette troisième session. Rappelez-vous où on a laissé Fatou. Au Module 1, elle a installé Claude Code, créé sa première Skill et connecté son Google Drive. Au Module 2, elle a repris ses emails et ses relances les plus répétitives et elle en a fait une vraie bibliothèque de prompts avec la méthode C.L.A.R.T.É. Elle est équipée, elle sait formuler une demande précise. Mais jusqu'ici, elle n'a rien fait avec un vrai jeu de données.
>
> Ce soir, ça change. Vous vous souvenez des notes de réunion désordonnées du 15 août qu'on avait utilisées au Module 1 ? Trois problèmes y étaient mentionnés chez son client DELTA Distribution : une rupture de stock répétée à l'entrepôt Nord, un retard chez le partenaire transport, et un budget marketing Q4 pas encore validé — ce dernier point, on l'a traité côté communication au Module 2. Ce soir, DELTA vient d'envoyer à Fatou l'export réel de ses ventes des 6 derniers mois. Un vrai fichier, avec de vrais défauts. Et ce fichier contient déjà, si on sait le lire, la preuve chiffrée des deux problèmes qui restaient en suspens."

**Interaction chat Teams (callback M2, à lancer immédiatement après) :** "Dans le chat, en un mot : avez-vous réutilisé au moins un prompt de votre bibliothèque du Module 2 cette semaine, sur votre propre métier ? Oui/Non/Presque." (Laisser défiler 60-90 secondes, commenter 2-3 réponses à voix haute — ça vérifie que le défi du Module 2 a été fait avant d'enchaîner sur un module qui présuppose l'aisance avec le prompt.)

**Transition vers le Bloc 2 :**

> "Fatou reçoit ce fichier et elle a deux réflexes possibles : le corriger à la main, ligne par ligne, comme elle le faisait avant la formation — ou décrire à Claude ce qu'elle veut et vérifier chaque étape. On va voir pourquoi la deuxième option n'est pas réservée aux data analysts de métier."

## [18h10–18h25] Bloc 2 — Mini-concept : le raisonnement d'un data analyst (15 min)

Support : slides 2 à 5 (`03-support-slides.md`). Points à couvrir dans l'ordre :
1. Callback M1/M2 explicite (slide 2) — ancrer en une phrase que l'environnement et les prompts sont déjà acquis, aujourd'hui on ajoute la donnée.
2. Les 4 étapes universelles d'un data analyst (slide 3) — comprendre la question, nettoyer, explorer, recommander. Insister sur l'encadré : "un chiffre juste sur une mauvaise question ne sert à rien" — la question métier vient toujours avant l'outil.
3. La boîte à outils, pas une hiérarchie (slide 4) — désamorcer explicitement la peur : "personne ici n'écrira une ligne de SQL ou de Python seul ce soir. Excel/Sheets suffit pour 80 % de ce qu'on va faire."
4. Callback Fatou (slide 5) — la citation sur le copier-coller de colonnes à la main, déjà vue au Module 1. C'est le pont naturel vers la démo.

**Transition vers le Bloc 3 :**

> "On arrête la théorie ici. Je vais maintenant faire exactement ce que Fatou doit faire ce soir : diagnostiquer et nettoyer ce fichier avec Claude, en tirer un tableau qui parle, une requête SQL qu'on comprend sans l'avoir écrite, et un graphique qui vaut plus qu'un long discours."

## [18h25–19h00] Bloc 3 — Démonstration live commentée (35 min)

**Ne pas improviser ce bloc : suivre `05-demo-commentee.md` texte en main.** Repères de minutage pour ne pas dériver :

| Sous-bloc | Fenêtre horaire | Objectif non négociable |
|---|---|---|
| A — Nettoyage avec Claude Code | 18h25–18h37 | Montrer le diagnostic complet puis la correction étape par étape sur `ventes-delta-distribution-brut.xlsx` — sans ce sous-bloc, aucun des 3 insights chiffrés qui suivent n'est fiable, donc ne jamais le raccourcir en dessous du diagnostic + correction complète |
| B — Excel/Sheets piloté par prompts | 18h37–18h45 | **Faire apparaître à l'écran la chute visible de la région Nord sur mars-avril-mai (-63 %) dans le tableau croisé dynamique** — c'est le premier des 3 insights du module, vu en direct : ne jamais sacrifier ce sous-bloc, même en retard |
| C — SQL assisté | 18h45–18h52 | Montrer une requête `SELECT ... GROUP BY` qui pose la même question que le tableau croisé, et la lire clause par clause — sous-bloc réductible en cas de retard (voir table de triage) |
| D — Aperçu pandas (niveau 2) + mention R | 18h52–18h56 | Montrer que la même logique de nettoyage s'exprime en 5-10 lignes pandas — explicitement présenté comme optionnel, c'est le premier sous-bloc à couper en cas de retard |
| E — Visualisation & dashboard | 18h56–19h00 | Construire en direct la courbe des ventes Nord sur 6 mois et un graphique de répartition E-commerce par canal (**8,0 % en février → 24,1 % en juillet**) — preuve visuelle du deuxième insight, pont direct vers la pratique guidée |

Le troisième insight du module (retards de livraison Nord : **10,8 jours contre 3,0 jours ailleurs, un facteur ×3,7**) n'est pas démontré à l'écran dans ce bloc — il est calculé par les participants eux-mêmes en pratique guidée (`06-exercices/exercice-guide-depart.md`, Partie C/D) à partir de la même méthode. Le rappeler à voix haute avant la transition, sans le démontrer en live, évite qu'un participant croie l'avoir manqué.

**Transition vers la pratique (déjà rédigée dans `05-demo-commentee.md`, section finale) :**

> "À vous maintenant : prenez votre copie de `ventes-delta-distribution-brut.xlsx`, nettoyez-la avec Claude en suivant la même méthode, construisez votre tableau croisé dynamique, et rédigez les 3 insights à partir de `06-exercices/exercice-guide-depart.md`. Je circule dans le chat si vous bloquez."

## [19h00–19h35] Bloc 4 — Pratique guidée (35 min)

Les participants travaillent sur `06-exercices/exercice-guide-depart.md` (Parties A à D : diagnostic, nettoyage, analyse, rédaction des 3 insights). Rôle de l'animateur : circuler dans le chat Teams, PAS attendre passivement. Poser une relance à 19h15 si le chat est silencieux : "Dites-moi où vous en êtes — diagnostic, nettoyage, ou déjà sur les insights ?"

**FAQ terrain anticipée (réponse en une ligne, ne pas transformer en mini-cours) :**

| Blocage probable | Réponse rapide |
|---|---|
| "Mon tableau croisé ne montre pas de chute nette dans le Nord" | Vérifier d'abord que les 4 variantes de "Nord" ont bien été fusionnées en une seule région à l'étape de nettoyage — un TCD sur un nettoyage incomplet dilue l'insight, ce n'est presque jamais le TCD qui est en cause |
| "Je ne sais pas si je dois supprimer les lignes vides ou les remplacer" | Rappeler `DATA-003` (`08-prompts-du-module.md`) : demander à Claude les options et les risques de chacune plutôt que d'appliquer un choix par défaut — c'est un choix méthodologique à assumer, pas une case à cocher automatique (voir `04-lecon-ecrite-complete.md`, Partie 1) |
| "Mon Excel est en anglais, SOMME.SI.ENS n'existe pas" | Rassurer : c'est `SUMIFS`, exactement la même formule — demander à Claude directement la version anglaise si besoin |
| "Je ne comprends pas une clause de la requête SQL générée" | Renvoyer à `DATA-008` (`08-prompts-du-module.md`) : redemander à Claude d'expliquer cette clause précise, plus lentement, plutôt que de rester bloqué sur l'ensemble de la requête |
| "Je pense que le retard transport EST la cause de la rupture Nord, pas juste un facteur lié" | Renvoyer à `DATA-016` et à la nuance de `04-lecon-ecrite-complete.md` (Partie 4, insight 3) : c'est un facteur aggravant fortement corrélé, pas une cause unique prouvée — la recommandation doit garder cette nuance |
| "Je n'aurai pas le temps de finir mes 3 insights avant la fin de la session" | Rassurer : le nettoyage complet est la priorité de ce soir, les insights peuvent se terminer via `defi-autonomie.md` — mais rappeler que le fichier nettoyé, lui, doit être fini avant le Module 4 |

## [19h35–19h45] Bloc 5 — Défi + clôture (10 min)

**Script de clôture :**

> "On s'arrête là pour la pratique. Avant de partir, trois choses. Un : votre défi avant lundi est dans `defi-autonomie.md` — terminez le nettoyage complet si besoin, finalisez vos 3 insights chiffrés (rupture Nord, croissance E-commerce, retards de livraison), et produisez une visualisation exportable. Deux : postez votre graphique et vos 3 insights en une phrase chacun dans `#par-module` — c'est ce qui remplit la Section 3 de votre Portfolio IA Professionnel, dataset avant/après plus insights plus visualisation. Trois : lundi, Fatou a son analyse chiffrée en main, mais un fichier Excel nettoyé et trois insights ne se montrent pas facilement à un client pressé. On va transformer tout ça en un dashboard qu'elle peut envoyer par un simple lien — le Module 4, Solutions numériques. À lundi 18h."

**Q&A rapide (5 min si le temps le permet) — sinon rediriger explicitement vers `#entraide` dans la communauté plutôt que de laisser une question sans réponse en suspens.**

---

## Si vous êtes en retard — table de triage (spécifique à cette session)

Ordre de sacrifice, du premier au dernier (ne jamais couper plus bas que nécessaire) :

1. Couper le Q&A de clôture (déjà prévu comme variable).
2. Réduire l'aperçu pandas/R du sous-bloc D à une mention orale sans démonstration tapée — le concept est entièrement couvert par écrit dans `04-lecon-ecrite-complete.md`, Partie 2.
3. Réduire le sous-bloc C (SQL assisté) à une seule requête déjà préparée plutôt que d'en construire une seconde en direct ou de faire lire une variante — la requête unique suffit à faire le pont avec le tableau croisé dynamique.
4. Réduire l'interaction chat d'ouverture (rappel Module 2) à 30 secondes au lieu de 90.
5. Ne jamais couper le sous-bloc B (tableau croisé révélant la chute Nord) ni le temps de pratique guidée — ce sont les deux moments qui produisent réellement les insights, donc le livrable de la session.
