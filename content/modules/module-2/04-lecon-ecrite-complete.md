# Module 2 — Communiquer avec Claude comme un expert : prompts, méthodes et workflows

> Document autoportant : si vous lisez ceci sans avoir assisté à la session live, vous pouvez suivre l'intégralité du module avec le même résultat. Comptez environ 1h30 à votre rythme.

## Pourquoi ça compte pour vous

Fatou Diallo a terminé le Module 1 avec un environnement Claude configuré : Claude Code installé, une Skill créée, un connecteur MCP branché. Mais elle a encore un réflexe qui lui coûte du temps : chaque fois qu'elle a besoin de quelque chose, elle tape une phrase courte et improvisée — "écris-moi un email pour relancer un client", "aide-moi avec ce tableau Excel" — puis elle reformule, encore et encore, jusqu'à obtenir quelque chose d'exploitable. En moyenne, elle reformule trois à quatre fois avant d'être satisfaite. Sur une semaine chargée en emails et comptes-rendus, ça représente facilement une heure perdue en aller-retours qui auraient pu être évités dès le premier message.

Le problème n'est pas que Claude comprend mal. C'est que Fatou lui donne une phrase là où elle devrait lui donner un **brief complet** — et qu'elle attend un résultat parfait en un seul message là où elle devrait, sur les tâches importantes, construire le résultat en plusieurs étapes courtes.

Ce module règle exactement ça. À la fin, vous saurez construire un prompt complet du premier coup avec une méthode mémorisable, transformer vos meilleurs prompts en gabarits réutilisables, enchaîner un vrai workflow professionnel en plusieurs étapes, et faire analyser un document réel par Claude au lieu de le recopier à la main.

## Ce que vous allez faire aujourd'hui

Cinq parties, dans cet ordre logique : d'abord la méthode pour construire un bon prompt du premier coup (Partie 1), puis la différence entre poser une question et confier une mission (Partie 2), puis transformer un bon prompt en gabarit réutilisable (Partie 3), puis enchaîner plusieurs prompts en un workflow professionnel (Partie 4), puis faire analyser un document réel par Claude (Partie 5).

---

## Partie 1 — La méthode C.L.A.R.T.É : construire un bon prompt du premier coup

Un prompt imprécis, c'est comme donner une consigne orale incomplète à un nouveau collaborateur : il va produire *quelque chose*, mais vous allez probablement devoir corriger, parce que vous n'avez jamais dit à qui c'était destiné, dans quel ton, ou ce qu'il ne fallait surtout pas faire. La méthode **C.L.A.R.T.É** est une checklist mémorisable en 6 lettres pour ne plus oublier ces informations :

| Lettre | Ce que ça veut dire | La question à se poser |
|---|---|---|
| **C** — Contexte | La situation dans laquelle s'inscrit la demande | Qui suis-je, pour qui je travaille, quelle est la situation ? |
| **L** — Livrable attendu | Le résultat concret que je veux obtenir | Un email ? Un tableau ? Un plan ? Combien de lignes/paragraphes ? |
| **A** — Audience | À qui le résultat est destiné | Un client ? Mon équipe ? Un partenaire que je ne connais pas encore ? |
| **R** — Restrictions | Les contraintes à respecter, ce qu'il ne faut pas faire | Longueur maximale, informations à ne jamais inventer, mots à éviter |
| **T** — Ton | Le registre de langage attendu | Formel ? Direct ? Chaleureux mais professionnel ? |
| **É** — Exemples | Un exemple de ce que vous voulez (ou ne voulez pas) | Un email précédent qui a bien fonctionné, ou au contraire un contre-exemple |

Vous n'avez pas besoin d'écrire six paragraphes numérotés à chaque fois — la méthode sert à vérifier mentalement que rien d'important ne manque, puis à l'écrire en un seul prompt fluide.

### Avant / après sur un cas réel de Fatou

**Situation :** DELTA Distribution, client de Fatou, n'a pas payé une facture de 850 000 FCFA depuis 3 semaines. Fatou doit envoyer un email de relance.

**Avant (prompt brut, tel que Fatou le tapait avant cette formation) :**

> *"Écris-moi un email pour relancer un client qui n'a pas payé."*

Résultat obtenu avec ce prompt : un email générique, poli mais impersonnel, qui pourrait avoir été envoyé par n'importe qui à n'importe qui — ton trop mou pour une facture en retard de 3 semaines, aucune mention du montant ni de l'échéance, et Fatou doit tout réécrire à la main pour l'adapter à sa relation réelle avec ce client.

**Après (prompt C.L.A.R.T.É complet) :**

> *"Je suis consultante indépendante en gestion de projets (Contexte). Rédige un email de relance de facture impayée à mon client DELTA Distribution (Livrable attendu) : facture de 850 000 FCFA émise il y a 3 semaines, aucune réponse à mes deux précédents messages. L'email s'adresse à Awa Ndiaye, ma contact habituelle chez DELTA, avec qui j'ai une relation professionnelle cordiale depuis 2 ans (Audience). Maximum 120 mots, une seule relance ferme mais pas agressive, mentionner explicitement le montant et le nombre de jours de retard, proposer un appel si besoin, ne jamais mentionner de pénalité ou de menace juridique à ce stade (Restrictions). Ton : direct et professionnel, jamais froid — je garde une relation de confiance avec elle (Ton). Voici un email de relance que j'ai déjà envoyé à un autre client et qui a bien fonctionné, reprends ce style : {exemple d'email précédent} (Exemples)."*

Résultat obtenu : un email prêt à envoyer du premier coup, avec le bon montant, le bon ton, la bonne longueur, et le style que Fatou utilise réellement — zéro reformulation nécessaire.

**Ce qui a changé :** rien de plus "intelligent" n'a été demandé à Claude. La différence entière tient à l'information donnée en amont. C'est le prompt qui a changé, pas l'outil.

**Le cas de Fatou :** elle admet volontiers que le prompt C.L.A.R.T.É paraît plus long à écrire au départ — mais elle le tape une fois, l'enregistre comme gabarit (Partie 3), et ne le retape jamais entièrement à l'identique. Le temps "perdu" à la première écriture est remboursé dès la deuxième utilisation.

---

## Partie 2 — Poser une question ou confier une mission ?

Toutes les demandes à Claude ne se valent pas. Une **question** attend une réponse directe, souvent courte, sur un fait ou une information ("Quel est le délai légal de préavis pour un CDI au Sénégal ?"). Une **mission**, elle, demande un livrable construit, avec plusieurs contraintes à respecter simultanément, parfois plusieurs étapes de raisonnement avant même de commencer à écrire ("Prépare-moi une proposition commerciale pour ce nouveau prospect, en respectant son budget maximum et en mettant en avant nos 3 points forts par rapport à son besoin exprimé.").

**Analogie :** une question, c'est comme demander l'heure à un collègue qui passe dans le couloir. Une mission, c'est lui confier un dossier — vous ne vous attendez pas à ce qu'il vous rende un résultat parfait sans jamais vérifier son plan d'abord.

Sur une mission qui a plusieurs contraintes à concilier (un budget, un délai, un public, un format imposé), demander à Claude de **réfléchir étape par étape avant d'exécuter** change nettement la qualité du résultat. Concrètement, cela veut dire ajouter une consigne du type :

> *"Avant de rédiger, présente-moi en 3-4 puces ton plan : quelles informations tu vas mettre en avant, dans quel ordre, et comment tu vas respecter la contrainte de budget. Une fois que j'ai validé le plan, rédige la version complète."*

**Pourquoi ça fonctionne :** cela vous donne l'occasion de corriger une mauvaise direction *avant* qu'elle soit rédigée en entier — beaucoup plus rapide que de corriger un texte fini qui part dans le mauvais sens. C'est l'équivalent professionnel de valider un plan de dossier avec un collaborateur avant qu'il ne rédige les 4 pages.

**Quand ce n'est pas nécessaire :** pour une tâche simple à une seule contrainte (reformuler un paragraphe, traduire une phrase), demander un plan avant d'exécuter est un détour inutile — réservez ce réflexe aux missions à plusieurs contraintes ou à fort enjeu (un document envoyé à un client, une décision qui engage de l'argent ou du temps).

**Le cas de Fatou :** pour sa proposition commerciale à un nouveau prospect (voir Partie 4), elle a appris à toujours demander le plan avant la rédaction complète — elle a gagné l'habitude de repérer en 30 secondes si Claude est parti dans une direction qui ne correspond pas au budget du prospect, plutôt que de le découvrir après avoir lu 2 pages rédigées.

---

## Partie 3 — Transformer un bon prompt en gabarit réutilisable

Un prompt C.L.A.R.T.É réussi une fois est une bonne nouvelle ponctuelle. Un prompt transformé en **gabarit à variables** est un actif professionnel réutilisable indéfiniment — c'est exactement le principe d'une Skill (Module 1), appliqué cette fois à un prompt simple plutôt qu'à un fichier de méthode complet.

**La méthode :** repérez, dans votre prompt réussi, les informations qui changeraient si vous l'utilisiez pour une autre personne, un autre montant, une autre date — et remplacez-les par des `{variables}` entre accolades.

**Exemple — transformation du prompt de relance de facture de la Partie 1 :**

> *"Je suis consultante indépendante en gestion de projets. Rédige un email de relance de facture impayée à mon client {nom_client} : facture de {montant} émise il y a {nombre_jours} jours, aucune réponse à mes {nombre_relances} précédents messages. L'email s'adresse à {nom_contact}, {relation_avec_contact}. Maximum {longueur_max} mots, une seule relance ferme mais pas agressive, mentionner explicitement le montant et le retard, proposer un appel si besoin, ne jamais mentionner de pénalité ou de menace juridique à ce stade. Ton : direct et professionnel, jamais froid. Voici un exemple de mon style habituel : {exemple_style}."*

**Ce que Fatou obtient :** le même prompt, réutilisable pour n'importe lequel de ses 6 clients, en changeant seulement 6 informations au lieu de tout réécrire. Sur une tâche qu'elle fait plusieurs fois par mois, la rentabilité est immédiate.

**Comment procéder pour vos propres prompts :**
1. Écrivez d'abord le prompt C.L.A.R.T.É complet sur un cas réel précis (jamais directement en abstrait — un gabarit écrit sans cas réel derrière est toujours moins précis).
2. Une fois qu'il fonctionne bien, identifiez les 4 à 8 informations qui changeraient si vous l'utilisiez sur un autre cas.
3. Remplacez-les par des `{variables}` nommées clairement (pas `{x}` ou `{1}`, mais `{nom_client}`, `{montant}`, `{echeance}`).
4. Testez le gabarit sur un deuxième cas réel différent pour vérifier qu'il tient — un gabarit qui ne fonctionne que sur son exemple d'origine n'est pas encore un vrai gabarit.

Un gabarit de méthode vierge (la structure C.L.A.R.T.É à copier-coller pour n'importe quel nouveau prompt) est disponible dans `09-ressources-telechargeables/gabarit-CLARTE.md`.

---

## Partie 4 — Workflows multi-étapes : brief → brouillon → critique → version finale

La plupart des débutants attendent un résultat parfait en un seul message, puis se découragent en voyant qu'il ne l'est jamais tout à fait. Les utilisateurs expérimentés de Claude font l'inverse : ils **enchaînent volontairement plusieurs prompts courts**, chacun avec un rôle précis, parce que c'est plus rapide *au total* que de réécrire un prompt géant six fois depuis zéro.

**Le workflow en 4 étapes :**

1. **Brief.** Un prompt C.L.A.R.T.É complet qui pose le contexte, la mission, les contraintes.
2. **Brouillon.** Claude produit une première version — ne vous attendez pas à ce qu'elle soit finale, c'est un point de départ à réagir.
3. **Critique.** Vous demandez explicitement à Claude de challenger son propre brouillon : *"Relis ton brouillon avec un œil critique : qu'est-ce qui pourrait ne pas convaincre {audience} ? Qu'est-ce qui est trop long, trop vague, ou risque de mal passer ?"* Cette étape est celle que la plupart des gens sautent — c'est pourtant la plus rentable : elle fait remonter des faiblesses qu'on ne verrait pas soi-même en relisant vite.
4. **Version finale.** Vous demandez d'intégrer les points de critique retenus (pas forcément tous) dans une version finale prête à envoyer.

**Le cas de Fatou — une proposition commerciale pour un nouveau prospect :**

Fatou doit régulièrement préparer des propositions commerciales pour de nouvelles PME qui la contactent. C'était historiquement sa tâche la plus stressante : elle partait d'une page blanche, écrivait un brouillon en 45 minutes, doutait du ton, la faisait relire par un ami avant envoi. Voici comment elle procède maintenant :

- **Brief :** un prompt C.L.A.R.T.É qui décrit le prospect (secteur, taille, besoin exprimé), le budget maximum communiqué, les 3 points forts de Fatou à mettre en avant, et le format attendu (1 page, ton professionnel mais pas rigide).
- **Brouillon :** Claude produit une première proposition complète.
- **Critique :** Fatou demande *"Un dirigeant de PME qui reçoit 3 propositions concurrentes cette semaine : qu'est-ce qui, dans ce brouillon, ne le convaincrait pas de me choisir plutôt qu'un autre consultant ?"* — Claude identifie par exemple que le brouillon ne chiffre pas assez concrètement le gain attendu pour le client.
- **Version finale :** Fatou demande d'intégrer un chiffrage concret du gain (temps ou argent) dans la proposition, sans toucher au reste qui fonctionnait déjà.

**Ce que ça change :** le temps total (brief + 3 échanges courts) est souvent plus court que l'ancienne méthode "un brouillon, une relecture humaine, plusieurs allers-retours par email avec un ami" — et le résultat est systématiquement meilleur qu'un unique prompt, même très détaillé, parce que l'étape de critique fait apparaître des angles morts qu'aucun brief initial, même parfait, ne peut anticiper à l'avance.

**Règle pratique :** réservez ce workflow complet aux livrables à enjeu réel (une proposition commerciale, un rapport envoyé à un client, un post public). Pour une tâche mineure, le brief seul suffit très bien.

---

## Partie 5 — Analyser un document réel : PDF, Word, Excel

Une grande partie du travail de Fatou (et du vôtre, probablement) consiste à lire un document reçu — un contrat, un rapport, un tableau — pour en extraire l'essentiel. Le réflexe naturel, sans formation, est de copier-coller des extraits dans le chat. C'est lent, source d'erreurs de recopie, et ça oblige à déjà savoir quel passage est important avant même de l'avoir analysé.

**La bonne méthode : uploader le document directement.** Dans Claude.ai comme dans Claude Code, vous pouvez joindre un fichier PDF, Word (`.docx`) ou Excel (`.xlsx`) entier à votre conversation. Claude le lit dans son intégralité, sans que vous ayez à deviner à l'avance quel passage compte.

**Un bon prompt d'analyse de document reprend les mêmes réflexes que C.L.A.R.T.É**, appliqués à l'extraction :
- **Livrable attendu** précis : une extraction structurée (une liste de champs), pas juste "résume-moi ça".
- **Restrictions** explicites : ne jamais inventer un montant ou une clause absente du document, signaler clairement ce qui n'est pas trouvé plutôt que de le deviner.

**Exemple de prompt d'analyse de contrat :**

> *"Voici un extrait de contrat de prestation entre moi et un client. Extrais dans un tableau : (1) les montants et modalités de paiement, (2) les échéances et délais, (3) les clauses de résiliation, (4) les obligations de chaque partie. Si une information demandée n'apparaît pas dans le document, écris 'non précisé dans l'extrait' plutôt que de la déduire ou de l'inventer."*

**Exercice avec un document réel :** l'exercice guidé de ce module (`06-exercices/exercice-guide-depart.md`, Partie D) vous fait pratiquer cette méthode sur un vrai extrait de contrat de prestation entre Fatou et son client DELTA Distribution (`06-exercices/extrait-contrat-DELTA.md`) — un document plausible avec de vrais montants, de vraies clauses, de vraies échéances, pas une description abstraite.

**Point de vigilance non négociable :** Claude lit vite et bien, mais **c'est vous qui restez responsable de vérifier les chiffres qui comptent** avant de vous en servir (un montant, une date d'échéance, un taux). Une extraction structurée est un gain de temps énorme sur le tri et la mise en forme — ce n'est pas une dispense de relecture sur les informations qui ont des conséquences financières ou contractuelles.

---

## Démonstration commentée

Le déroulé exact, avec les prompts utilisés en direct, est disponible dans [`05-demo-commentee.md`](05-demo-commentee.md). Si vous suivez ce module en autonomie, reproduisez chaque étape avec vos propres exemples plutôt que de simplement lire le script.

## Exercice guidé

Rendez-vous dans [`06-exercices/exercice-guide-depart.md`](06-exercices/exercice-guide-depart.md) : trois mauvais prompts réels à retravailler avec C.L.A.R.T.É, et un exercice d'analyse du contrat DELTA. Corrigé commenté dans `exercice-guide-solution.md`.

## Défi en autonomie

Avant la Session 3, constituez votre bibliothèque personnelle d'au moins 15 prompts testés, construits avec C.L.A.R.T.É, classés par usage — sur VOS tâches réelles, pas seulement les exemples de Fatou. Détail complet dans [`06-exercices/defi-autonomie.md`](06-exercices/defi-autonomie.md).

## Ce qu'il faut retenir

1. **Un bon prompt n'est pas plus long par hasard — chaque information (C.L.A.R.T.É) évite une reformulation.** Le temps "perdu" à bien écrire un prompt la première fois est remboursé dès la deuxième utilisation.
2. **Une mission n'est pas une question — sur un enjeu réel, faites présenter le plan avant l'exécution complète**, et construisez le résultat en plusieurs étapes courtes (brief → brouillon → critique → version finale) plutôt qu'en un seul message parfait.
3. **Uploader un document réel plutôt que le recopier à la main** donne une extraction plus fiable et plus rapide — à condition de toujours vérifier vous-même les chiffres qui ont des conséquences réelles.
