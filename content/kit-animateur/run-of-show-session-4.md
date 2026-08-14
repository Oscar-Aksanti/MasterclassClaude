<!-- Contenu Phase 6 — script consolidé pour l'animateur. Ce fichier ne duplique PAS le contenu déjà écrit dans modules/module-4-solutions-numeriques/ : il y renvoie précisément (fichier + section) et n'ajoute QUE la couche propre à l'animation live (script d'ouverture/clôture mot à mot, transitions, gestion du temps, FAQ terrain). Structure alignée sur le gabarit `kit-animateur/run-of-show-session-1.md`. -->

# Run of show — Animateur — Session 4

**Module 4 — Créer des solutions numériques avec Claude Code · Lundi 24 août 2026 · 18h00–19h45 GMT · Teams**

Avant d'ouvrir la session : dérouler `kit-animateur/checklist-technique-avant-live.md` en entier, en particulier la section "Module 4 — Solutions numériques (Session 4)" (comptes GitHub et Streamlit Community Cloud de démonstration déjà créés et loggés, `app-depart/` et `app-solution/` déjà testés, Plan B déploiement).

## Documents à garder ouverts pendant la session

- `modules/module-4-solutions-numeriques/02-run-of-show-session.md` (minutage détaillé du bloc démo)
- `modules/module-4-solutions-numeriques/05-demo-commentee.md` (texte exact à taper/dire pendant la démo, y compris le sous-bloc debugging)
- `modules/module-4-solutions-numeriques/06-exercices/exercice-guide-depart.md` et `defi-autonomie.md`
- `modules/module-4-solutions-numeriques/06-exercices/app-depart/` et `app-solution/` (déjà lancés une fois en amont pour éviter tout aléa d'installation en direct)
- `01-programme/parcours-portfolio-participant.md` (rappel du persona Fatou et de la Section 4 du Portfolio)
- Le support de slides (gabarit `00-marque-et-design/gabarit-slide-master.pptx`, contenu dans `modules/module-4-solutions-numeriques/03-support-slides.md`)

---

## [18h00–18h10] Bloc 1 — Reconnexion (10 min)

**Script d'ouverture (à dire quasi mot pour mot) :**

> "Bonsoir à tous, bienvenue pour cette quatrième session. Rappelez-vous où on a laissé Fatou vendredi : elle avait nettoyé les ventes de DELTA Distribution et elle en avait tiré trois choses très concrètes — une rupture de stock qui revient chaque mois dans la région Nord, un canal E-commerce qui monte vite mais que personne n'exploite encore, et des retards de livraison concentrés sur un seul partenaire transport. Elle a mis tout ça dans un document, et elle s'apprêtait à faire ce qu'elle a toujours fait : l'envoyer par email à son client, en PDF, et espérer qu'il l'ouvre.
>
> Sauf que son analyse n'était pas le problème. Son mode de restitution, si. Un PDF envoyé une fois, c'est déjà obsolète le mois suivant, et personne ne le rouvre après la première lecture. Ce soir, Fatou change ça : elle transforme son analyse en un dashboard que son client peut ouvrir n'importe quand, par un simple lien — et elle en profite pour se construire une page vitrine pour son nouveau positionnement, 'conseil augmenté à l'IA'. Deux livrables, un seul principe : on arrête d'envoyer des fichiers, on envoie des liens."

**Sondage chat Teams (lancer immédiatement après) :** "Dans le chat, dites-moi en un mot : dashboard ou page vitrine, lequel des deux vous parle le plus pour VOTRE activité ?" (Nommer 2-3 réponses à voix haute — ça annonce déjà le choix binaire du défi de fin de session.)

**Transition vers le Bloc 2 :**

> "L'enjeu du jour n'est pas seulement de construire — vous savez déjà décrire une tâche à Claude Code depuis le Module 1. L'enjeu, c'est de construire ET déployer. Un projet qui tourne uniquement sur votre ordinateur n'est pas encore un livrable. Avant de foncer dans la démo, il faut un minimum de méthode pour bien décrire ce qu'on veut — sinon on passe la session à corriger un malentendu plutôt qu'un vrai bug."

## [18h10–18h25] Bloc 2 — Mini-concept : anatomie d'un projet Claude Code (15 min)

Support : slides 2 à 4 (`03-support-slides.md`). Points à couvrir dans l'ordre :
1. Différence fichier unique / projet structuré (slide 2) — dans les modules précédents on demandait un fichier, aujourd'hui on demande "plusieurs fichiers qui travaillent ensemble" (le code, `requirements.txt`, les données).
2. Les 4 éléments d'une bonne description (slide 3) : contexte, données disponibles, résultat attendu, contraintes. Insister sur l'encadré "À retenir" tel qu'écrit sur la slide : une description complète = un projet juste dès la 1ère tentative.
3. Comparaison avant/après explicite, à l'oral, sans notes : "Fais-moi un dashboard de ventes" contre la description complète de Fatou (celle qui sera tapée mot pour mot dans la démo, `04-lecon-ecrite-complete.md` Partie 1) — laisser un vrai silence de 2-3 secondes après avoir lu la version vague pour que le contraste soit ressenti, pas juste entendu.
4. Callback Fatou (slide 4) — la citation sur le fichier Excel envoyé par email contre le lien envoyé maintenant. C'est le pont naturel vers la démo.

**Transition vers le Bloc 3 :**

> "On arrête la théorie ici. Je vais maintenant construire, en direct, le dashboard de Fatou à partir d'une description complète — puis je vais volontairement casser quelque chose, pour vous montrer la méthode avant que vous n'y soyez seuls face à votre écran. On termine par la page vitrine et le déploiement."

## [18h25–19h00] Bloc 3 — Démonstration live commentée (35 min)

**Ne pas improviser ce bloc : suivre `05-demo-commentee.md` texte en main, sous-bloc par sous-bloc.** Repères de minutage pour ne pas dériver :

| Sous-bloc | Fenêtre horaire | Objectif non négociable |
|---|---|---|
| A — Construction du dashboard | 18h25–18h39 | Prouver qu'une description complète produit un projet structuré et fonctionnel dès la première tentative — pas un brouillon à corriger cinq fois |
| B — Debugging assisté en direct | 18h39–18h49 | **Le contenu le plus rentable de la session pour un public non technique — ne jamais sacrifier ni raccourcir ce sous-bloc, même en retard.** Provoquer le `KeyError: 'montant_total'`, dérouler les 4 étapes (lire l'erreur en entier → diagnostic avant correction → vérifier l'hypothèse → corriger de façon ciblée) exactement comme écrit dans `05-demo-commentee.md` sous-bloc B, y compris le contre-exemple volontaire ("ça marche pas" collé tel quel) |
| C — Page vitrine | 18h49–18h55 | Montrer le changement de nature de la description (vendre une offre, pas restituer des données) — si le temps presse, présenter directement le résultat déjà préparé dans `06-exercices/site-vitrine/` plutôt que de la construire ligne à ligne (c'est déjà la première case de la table de triage plus bas) |
| D — Déploiement en direct | 18h55–19h00 | Obtenir une vraie URL et l'ouvrir en navigation privée devant tout le monde — c'est la preuve que "ça marche pour n'importe qui", pas seulement sur la machine de démo. Si le réseau lâche : Plan B de `checklist-technique-avant-live.md` (capture d'écran d'un déploiement déjà réussi), ne jamais déboguer une plateforme en direct devant 65 personnes |

**Transition vers la pratique (déjà rédigée dans `05-demo-commentee.md`, section finale) :**

> "À vous maintenant : ouvrez `06-exercices/app-depart/`, lancez l'application, elle va planter — c'est normal, c'est l'exercice. Appliquez exactement la méthode que je viens de montrer : lire l'erreur, demander un diagnostic, vérifier, corriger. Je circule dans le chat si vous bloquez."

## [19h00–19h35] Bloc 4 — Pratique guidée (35 min)

Les participants travaillent sur `06-exercices/exercice-guide-depart.md` : lancer `app-depart/`, laisser planter, puis dérouler les 5 étapes (lire l'erreur, diagnostic, vérification des noms de colonnes, correction ciblée, vérification du fond). Ceux qui terminent en avance commencent leur propre page vitrine à partir de `site-vitrine/`.

Rôle de l'animateur : circuler dans le chat Teams, PAS attendre passivement. Poser une relance à 19h15 si le chat est silencieux : "Dites-moi où vous en êtes — app qui plante encore, diagnostic en cours, ou déjà corrigée ?"

**FAQ terrain anticipée (réponse en une ligne, ne pas transformer en mini-cours) :**

| Blocage probable | Réponse rapide |
|---|---|
| "Je n'ai jamais eu de compte GitHub, je ne sais pas par où commencer" | Rassurer : Claude Code guide chaque commande (prompt `DEV-012`, `08-prompts-du-module.md`) — créer le compte gratuit maintenant, on ne pousse le code que dans le bloc suivant si le temps le permet, sinon ce sera fait dans le défi |
| "Mon app plante mais je ne comprends rien au message d'erreur" | Ne pas expliquer le message à sa place — renvoyer directement au prompt de diagnostic `DEV-007` : "colle l'erreur en entier et demande une explication en une phrase, avant toute correction" |
| "Claude Code a corrigé mon bug mais un autre est apparu" | Rappeler : ne jamais demander une réécriture complète (`04-lecon-ecrite-complete.md`, Partie 4, "Ce qu'il ne faut jamais faire") — traiter la nouvelle erreur avec la même méthode en 4 étapes, une à la fois |
| "Le déploiement Streamlit échoue avec une erreur d'installation" | Cause la plus fréquente : `requirements.txt` incomplet — utiliser le prompt `DEV-011` ("vérifie que requirements.txt liste bien toutes les librairies importées") avant de chercher plus loin |
| "Je veux changer les couleurs de ma page vitrine mais je ne sais pas quoi demander" | Renvoyer au prompt `DEV-005` ou `DEV-015` : donner les couleurs exactes en hexadécimal, jamais une description approximative comme "quelque chose de pro" |
| "J'ai un compte GitHub mais Streamlit Community Cloud ne voit pas mon dépôt" | Vérifier que le dépôt a bien été poussé (`git push` terminé sans erreur) et que la connexion GitHub↔Streamlit a été autorisée lors de la création du compte Streamlit — si ça bloque plus de 2 minutes, proposer de continuer en local et déployer après la session (le défi laisse le temps) |

## [19h35–19h45] Bloc 5 — Défi + clôture (10 min)

**Script de clôture :**

> "On s'arrête là pour la pratique. Avant de partir, trois choses. Un : votre défi avant mercredi est dans `defi-autonomie.md` — choisissez un dashboard ou une page vitrine, mais sur VOTRE contexte professionnel cette fois, pas la version DELTA Distribution qu'on a construite ensemble. Décrivez votre projet à Claude Code avec les 4 éléments vus ce soir, testez en local, et surtout : déployez. Un lien, pas juste 'ça marche sur ma machine'. Deux : une fois le lien obtenu, testez-le en navigation privée, postez-le dans `#par-module`, et ajoutez-le à la Section 4 de votre Portfolio IA Professionnel — 'Mon application ou site déployé'. Trois : mercredi, Fatou revient, et cette fois elle en a assez de reconstruire son rapport mensuel à la main chaque mois pour DELTA Distribution. On va lui apprendre à l'automatiser — Google Sheets qui se remplit, Claude qui résume, et le résumé qui part seul vers Notion ou WhatsApp. Vous n'aurez plus besoin d'être devant votre écran pour que le travail se fasse. À mercredi 18h."

**Q&A rapide (5 min si le temps le permet) — sinon rediriger explicitement vers `#entraide` dans la communauté plutôt que de laisser une question sans réponse en suspens.** Les questions de déploiement bloquant après la session sont explicitement anticipées dans `defi-autonomie.md`, section "Si vous êtes bloqué" — s'y référer plutôt que de rouvrir un dépannage en direct hors temps.

---

## Si vous êtes en retard — table de triage (spécifique à cette session)

Reprend et développe la règle déjà posée dans `modules/module-4-solutions-numeriques/02-run-of-show-session.md` ("Règle de dépassement de temps spécifique à ce module"). Ordre de sacrifice, du premier au dernier (ne jamais couper plus bas que nécessaire) :

1. Couper le Q&A de clôture (déjà prévu comme variable).
2. Réduire le sous-bloc C (page vitrine) à une simple présentation du résultat déjà préparé dans `06-exercices/site-vitrine/`, plutôt que de la construire ligne à ligne en direct — le prompt qui l'a générée reste commenté à voix haute, seule la frappe en direct est sacrifiée.
3. Réduire le sondage chat d'ouverture à 30 secondes au lieu de 90.
4. Si le sous-bloc D (déploiement) manque encore de temps après les coupes précédentes, basculer directement sur le Plan B de `checklist-technique-avant-live.md` (capture d'écran d'un déploiement déjà réussi) plutôt que de le sacrifier entièrement — les participants doivent voir un lien final, même montré plutôt que construit en direct.
5. Ne jamais couper le sous-bloc B (debugging assisté) ni le temps de pratique guidée — ce sont les deux moments qui produisent réellement la compétence la plus rentable de la session pour un public non technique, et sans lesquels l'exercice guidé de la pratique devient infaisable en autonomie.
