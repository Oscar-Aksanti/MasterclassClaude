# Module 5 — Automatiser son travail avec l'intelligence artificielle

> Document autoportant : si vous lisez ceci sans avoir assisté à la session live, vous pouvez suivre l'intégralité du module avec le même résultat. Comptez environ 1h30 à votre rythme, plus le temps de créer vos comptes gratuits (Make, et si possible Notion) avant de commencer la pratique.

## Pourquoi ça compte pour vous

Fatou Diallo a fait beaucoup de chemin depuis le Module 1. Elle a un environnement Claude configuré, une bibliothèque de prompts personnels, une analyse propre des ventes de son client **DELTA Distribution** (grossiste-distributeur au Sénégal), et un dashboard Streamlit qu'elle peut envoyer par lien. Ce dashboard a confirmé, chiffres à l'appui, un problème que DELTA évoquait déjà en réunion dès le Module 1 : des **ruptures de stock récurrentes sur la région Nord**, qui coûtent des ventes à chaque occurrence.

Il reste un problème que ni l'analyse ni le dashboard ne règlent : **quelqu'un doit encore ouvrir le dashboard chaque semaine pour vérifier si le problème se reproduit.** Ce quelqu'un, c'est Fatou. Si elle est en déplacement, en réunion, ou simplement fatiguée un lundi, elle peut manquer une semaine — et c'est précisément la semaine où la rupture se reproduit.

Ce module règle cet angle mort. Vous allez apprendre à construire un système qui surveille lui-même une situation et vous prévient au bon moment, sans que vous ayez à vous souvenir d'aller vérifier. Ce n'est pas de la magie ni un remplacement de votre jugement : c'est un enchaînement d'étapes simples, chacune compréhensible, que vous assemblez une fois et qui tourne ensuite seul.

## Ce que vous allez faire aujourd'hui

Quatre parties, dans cet ordre logique : d'abord apprendre à repérer QUELLES tâches méritent d'être automatisées (Partie 1), puis comprendre la différence entre un simple prompt, un workflow et un agent autonome (Partie 2), puis construire un scénario Make complet de bout en bout sur le cas de Fatou (Partie 3), puis apprendre les garde-fous qui évitent de transformer un gain de temps en incident (Partie 4).

---

## Partie 1 — Cartographier ses tâches automatisables

Toutes les tâches répétitives ne méritent pas le même traitement. Certaines gagnent à devenir une Skill (Module 1) — une méthode que vous appliquez encore vous-même, juste plus vite. D'autres gagnent à devenir une automatisation complète — un système qui tourne sans que vous interveniez du tout. Pour savoir laquelle est laquelle, une grille simple à trois critères suffit.

### La grille fréquence × pénibilité × risque d'erreur

| Critère | Ce qu'il mesure | Question à se poser |
|---|---|---|
| **Fréquence** | Combien de fois vous refaites cette tâche | Une fois par mois ? Une fois par semaine ? Tous les jours ? |
| **Pénibilité** | Le temps perdu et la valeur ajoutée de le faire vous-même | Est-ce que vous apprenez ou décidez quelque chose en le faisant, ou est-ce du pur recopiage/vérification mécanique ? |
| **Risque d'erreur** | La conséquence si une erreur passait inaperçue | Une coquille sans importance, ou un chiffre faux envoyé à un client, une donnée personnelle mal transmise ? |

**Comment lire la combinaison :**

- **Fréquence haute + pénibilité haute + risque faible** → candidate n° 1 à l'automatisation complète (c'est le cas du rapport hebdo de Fatou : elle le refait chaque semaine, ça ne demande aucune décision créative, et une synthèse imparfaite ne cause pas de dégât grave puisqu'elle la relit avant tout envoi externe).
- **Fréquence haute + pénibilité haute + risque élevé** → automatiser la préparation, mais garder une validation humaine avant l'action finale (voir Partie 4 — c'est exactement le principe retenu pour l'alerte région Nord : le système prépare et notifie, Fatou décide de la suite).
- **Fréquence basse, peu importe le reste** → ne pas automatiser : le temps investi à construire le scénario dépasserait le temps gagné. Une Skill ou un bon prompt (Module 1/2) suffit largement.
- **Risque élevé + jugement humain nécessaire à chaque fois** → ne jamais automatiser entièrement, quelle que soit la fréquence (voir Partie 4).

**Le cas de Fatou :** en appliquant cette grille à sa semaine, trois tâches sortent nettement en tête : le rapport hebdomadaire de suivi ventes/stock pour DELTA (fréquence haute, pénibilité haute, risque faible si elle garde un œil sur les alertes), la relance des clients en retard de paiement (fréquence moyenne, risque plus élevé — nécessite du tact, à garder en Skill plutôt qu'en automatisation complète), et le tri de ses emails clients du matin (fréquence haute, pénibilité moyenne, risque moyen selon le contenu). Le module retient la première comme démonstration de référence : c'est celle qui combine le meilleur ratio gain de temps / risque maîtrisé.

Une version imprimable de cette grille, avec la méthode de notation complète, est disponible dans `09-ressources-telechargeables/grille-priorisation-automatisation.pdf`. La version à remplir en exercice se trouve dans `06-exercices/grille-cartographie-taches.md`.

---

## Partie 2 — Agents IA : trois niveaux à ne pas confondre

Le mot "agent" est utilisé pour des choses très différentes. Clarifions les trois niveaux, du plus simple au plus autonome.

| Niveau | Ce que c'est | Qui déclenche l'action suivante | Exemple |
|---|---|---|---|
| **Prompt ponctuel** | Une question, une réponse, fin | Vous, à chaque fois | "Résume-moi cet email" |
| **Workflow** | Plusieurs étapes enchaînées, éventuellement automatisées dans leur exécution, mais vous restez le déclencheur ou le validateur à un moment donné | Vous démarrez la chaîne, ou vous validez une étape intermédiaire | Le workflow brief → brouillon → critique → version finale du Module 2 |
| **Agent autonome** | Un système qui surveille un événement et déclenche lui-même une suite d'actions dans un ou plusieurs outils, sans attendre que vous cliquiez | Un événement (nouvelle ligne, nouvel email, heure programmée) | Le scénario Make de ce module : une nouvelle ligne dans Google Sheets déclenche, sans vous, la génération d'un résumé puis son envoi dans Notion et potentiellement une alerte WhatsApp |

**Analogie :** un prompt ponctuel, c'est demander à un collègue de vous rendre un service précis, une fois. Un workflow, c'est lui confier une mission en plusieurs étapes que vous validez au fur et à mesure. Un agent autonome, c'est lui laisser une procédure écrite une fois pour toutes, avec l'autorisation d'agir seul dès qu'une situation précise se présente — exactement comme on délègue une procédure à un assistant de confiance, avec des limites claires sur ce qu'il peut décider seul (Partie 4).

**Ce que Make ajoute par rapport à un prompt Claude seul :** Claude, seul, ne surveille rien en continu — il répond quand vous lui parlez. Make (et les outils équivalents, comme Zapier ou n8n) est la couche qui **surveille un événement** (une nouvelle ligne, un nouvel email, une heure programmée) et qui **relie plusieurs outils entre eux**, en insérant Claude comme une étape de traitement au milieu de la chaîne plutôt que comme le point de départ. C'est ce qui transforme "je peux demander à Claude de rédiger ce résumé" en "ce résumé se rédige et se distribue tout seul chaque semaine".

---

## Partie 3 — Construire un scénario Make de A à Z : le rapport DELTA de Fatou

### Le problème métier exact à résoudre

Chaque semaine, l'équipe terrain de DELTA remplit une feuille Google Sheets de suivi (ventes de la semaine, stock disponible par région). Fatou veut que, dès qu'une nouvelle semaine est renseignée : (1) une synthèse rédigée et une recommandation soient automatiquement ajoutées à sa base de rapports DELTA dans Notion, et (2) elle reçoive elle-même une alerte WhatsApp **uniquement** si la région Nord retombe sous le seuil de stock critique déjà identifié comme problématique au Module 1 et quantifié au Module 3.

### Les trois briques du scénario

**1. Déclencheur — Google Sheets ("Watch Rows")**

Le scénario surveille une feuille nommée `Suivi hebdo DELTA`, avec ces colonnes (mêmes noms de région que le dataset ventes du Module 3, pour rester cohérent : Dakar, Thiès, Nord, Sud, Casamance) :

| Colonne | Exemple |
|---|---|
| `semaine_debut` | 2026-08-17 |
| `region` | Nord |
| `stock_disponible_unites` | 120 |
| `seuil_alerte_unites` | 300 |
| `ventes_semaine_fcfa` | 4 850 000 |
| `commentaire_terrain` | "Camion de réassort retardé, partenaire transport" |

Make déclenche le scénario dès qu'une nouvelle ligne est ajoutée en bas de cette feuille — c'est-à-dire dès que l'équipe terrain valide la semaine.

**2. Traitement — module Claude**

Le module suivant envoie les valeurs de la ligne à Claude avec un prompt de synthèse (voir le prompt exact utilisé dans `05-demo-commentee.md` et dans `08-prompts-du-module.md`, prompt AUTO-003). Claude renvoie un texte de 3-4 phrases : un résumé factuel de la semaine pour cette région, et une recommandation courte si le stock est sous le seuil.

**3. Routeur à deux branches**

- **Branche A (toujours exécutée) — Notion :** crée une nouvelle entrée dans la base "Rapports hebdo DELTA" avec les colonnes Semaine / Région / Ventes / Stock / Synthèse (le texte généré par Claude) / Statut.
- **Branche B (condition) — WhatsApp Business :** exécutée uniquement si `region = "Nord"` **et** `stock_disponible_unites < seuil_alerte_unites`. Envoie à Fatou un message court : *"Alerte DELTA — région Nord : stock à {stock_disponible_unites} unités, sous le seuil de {seuil_alerte_unites}. {synthèse Claude}. Semaine du {semaine_debut}."*

La structure complète, module par module, avec le mapping exact des champs, est documentée dans `06-exercices/blueprint-scenario-delta-reporting.json` — **un document pédagogique qui décrit la structure du scénario, pas un fichier à importer directement dans Make** (voir l'avertissement en tête de ce fichier).

### Pourquoi ce découpage précisément

- Le routeur sépare la branche "toujours" (archivage/reporting, sans risque) de la branche "conditionnelle" (alerte, qui mérite un filtre précis pour ne pas noyer Fatou de notifications inutiles chaque semaine).
- Notion reçoit systématiquement le rapport : même sans rupture, l'historique complet reste consultable — c'est la mémoire à long terme du suivi DELTA.
- WhatsApp ne reçoit que l'exception qui mérite une action immédiate : c'est le principe même d'une bonne alerte — rare, ciblée, actionnable. Une alerte qui arrive chaque semaine, même sans problème, cesse d'être lue au bout de quelques semaines.

### Tester avant d'activer — l'étape qu'il ne faut jamais sauter

Dans Make, chaque scénario peut être exécuté **une fois manuellement**, sans attendre le prochain déclenchement réel. Avant de basculer un scénario sur "ON" :

1. Ajoutez une ligne de test dans la feuille Google Sheets, avec des valeurs qui déclenchent volontairement la condition d'alerte (région Nord, stock sous le seuil).
2. Lancez une exécution manuelle ("Run once") dans Make.
3. Vérifiez le résultat dans Notion (l'entrée est-elle correcte, bien formatée ?) et dans WhatsApp (le message est-il reçu, lisible, correct ?).
4. Ajoutez une seconde ligne de test qui ne déclenche PAS l'alerte (une autre région, ou un stock au-dessus du seuil) et vérifiez qu'aucun message WhatsApp n'est envoyé cette fois — un routeur mal configuré qui alerte à chaque exécution est l'erreur la plus fréquente à ce stade.
5. Ce n'est qu'après ces deux tests réussis que vous activez le scénario (statut "ON").

---

## Partie 4 — Garde-fous : quand NE PAS automatiser entièrement

L'automatisation est puissante précisément parce qu'elle agit sans supervision continue — ce qui veut dire qu'une erreur de conception se répète elle aussi sans supervision, potentiellement pendant des semaines avant d'être remarquée. Trois lignes rouges à respecter systématiquement :

### 1. Décisions sensibles

Ne jamais laisser un scénario prendre seul une décision qui aurait des conséquences si elle était fausse : valider un budget, décider d'un licenciement, fixer un tarif client, passer une commande fournisseur. Le scénario DELTA **prépare une recommandation et alerte un humain** — il ne décide jamais lui-même de commander un réassort ou de modifier un prix. La règle pratique : si vous ne seriez pas à l'aise de laisser un stagiaire junior prendre cette décision seul sans vous demander, ne laissez pas non plus un scénario automatisé la prendre seul.

### 2. Données personnelles

Toute automatisation qui manipule des informations personnelles (coordonnées de clients, données de santé, informations financières individuelles) doit être conçue avec un minimum strict de transmission : n'envoyez à un outil tiers que ce qui est nécessaire à l'action, vérifiez toujours quel outil reçoit quelle donnée (un module Notion public n'a pas la même sensibilité qu'un message WhatsApp privé), et ne branchez jamais un connecteur suggéré par un lien reçu par email — seulement depuis les paramètres officiels de l'outil, comme pour les connecteurs MCP du Module 1.

### 3. Relation client finale

Ne jamais faire partir un message automatique directement vers un client final sans relecture humaine, même si le texte est généré par Claude. Un ton légèrement décalé, une erreur de nom, un chiffre mal mappé passent facilement inaperçus dans un scénario qui tourne seul — et le dégât relationnel avec un client est plus coûteux que le temps gagné. C'est pour cette raison que le scénario DELTA notifie **Fatou**, jamais DELTA directement : elle reste le point de passage humain avant toute communication externe.

### La règle générale à retenir

**Automatisez la préparation et la notification. Gardez la décision et la communication externe sensible entre des mains humaines**, au moins jusqu'à ce que le scénario ait fait ses preuves sur plusieurs cycles et que la confiance soit réellement établie — et même alors, réévaluez régulièrement plutôt que d'oublier que le scénario existe.

---

## Démonstration commentée

Le déroulé exact, avec les prompts et les configurations Make utilisés en direct, est disponible dans [`05-demo-commentee.md`](05-demo-commentee.md). Si vous suivez ce module en autonomie, reproduisez chaque étape avec vos propres comptes plutôt que de simplement lire le script.

## Exercice guidé

Rendez-vous dans [`06-exercices/exercice-guide-depart.md`](06-exercices/exercice-guide-depart.md) : un scénario Make à compléter à partir d'un squelette, avec le blueprint pédagogique de référence en appui. Corrigé commenté dans `exercice-guide-solution.md`.

## Défi en autonomie

Avant la Session 6, déployez et activez une automatisation réelle sur VOTRE propre tâche répétitive identifiée dans votre grille de cartographie — pas une simple copie du scénario DELTA. Détail complet dans [`06-exercices/defi-autonomie.md`](06-exercices/defi-autonomie.md).

## Ce qu'il faut retenir

1. **Toute tâche répétitive ne mérite pas une automatisation complète** — la grille fréquence × pénibilité × risque évite de perdre du temps à automatiser ce qui ne le vaut pas, ou d'automatiser dangereusement ce qui demande un jugement humain.
2. **Un agent autonome se déclenche seul, mais il ne doit jamais décider seul d'une action sensible** — la puissance de Make vient de la surveillance et de l'enchaînement d'outils, pas d'un remplacement du jugement professionnel.
3. **Tester avant d'activer n'est pas optionnel** — une exécution manuelle réussie sur un cas qui doit alerter, et une autre sur un cas qui ne doit pas alerter, sont le minimum avant de basculer un scénario sur "ON".
