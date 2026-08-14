<!-- Contenu Phase 8 — chaque terme suit le format : définition en 1 phrase → analogie métier → exemple concret (souvent Fatou). À linker depuis chaque leçon écrite dès la première occurrence d'un terme (ancre #terme en minuscules-avec-tirets). Termes retenus après relecture des 6 modules/*/04-lecon-ecrite-complete.md — aucun terme inventé qui n'apparaît pas réellement dans le programme. -->

# Glossaire IA — métier

Classé par ordre alphabétique. Chaque terme technique du programme est expliqué sans jargon : une phrase de définition, une analogie tirée du monde du travail, un exemple concret.

## Agent IA {#agent-ia}

**Définition :** un programme qui prend des décisions et déclenche des actions sans qu'un humain valide chaque étape, à la différence d'un simple prompt ponctuel.
**Analogie métier :** un prompt classique, c'est demander à un assistant de rédiger UN email quand vous le lui demandez. Un agent, c'est cet assistant qui surveille votre boîte mail toute la journée et répond seul aux emails qui correspondent à une règle que vous avez fixée.
**Exemple :** au Module 5, le scénario Make qui résume automatiquement les emails clients de Fatou chaque matin sans qu'elle déclenche quoi que ce soit agit comme un agent limité — il surveille et agit selon des règles, sans validation humaine à chaque fois.

## API {#api}

**Définition :** le canal standardisé par lequel deux logiciels échangent des informations automatiquement.
**Analogie métier :** c'est le comptoir d'une administration : vous ne rentrez pas fouiller vous-même dans les dossiers, vous déposez une demande au comptoir dans un format précis, et vous recevez une réponse dans un format précis.
**Exemple :** quand Claude Code envoie une donnée à Google Sheets ou reçoit un déclencheur de Make, il utilise l'API de cet outil — vous n'avez jamais besoin de voir ce détail, mais c'est ce qui rend la connexion possible.

## Blueprint (Make) {#blueprint}

**Définition :** le fichier qui décrit intégralement un scénario d'automatisation Make — déclencheur, étapes, conditions — exportable et réimportable.
**Analogie métier :** le plan détaillé d'une recette de cuisine : quelqu'un d'autre peut le suivre à la lettre et obtenir le même résultat, sans avoir vu la première fois où vous l'avez cuisinée.
**Exemple :** `modules/module-5-automatisation/06-exercices/blueprint-scenario-delta-reporting.json` est le blueprint du scénario de reporting DELTA — importable directement dans Make.

## Cloud {#cloud}

**Définition :** des serveurs informatiques accessibles par internet plutôt qu'un ordinateur physique dans votre bureau.
**Analogie métier :** louer un espace de stockage en ville plutôt que garder ses archives dans son propre garage — quelqu'un d'autre gère le bâtiment, vous accédez à votre contenu depuis n'importe où.
**Exemple :** déployer un dashboard sur Streamlit Community Cloud (Module 4) le rend accessible par un lien, sans que l'ordinateur de Fatou ait besoin de rester allumé.

## Contexte / fenêtre de contexte {#contexte}

**Définition :** tout ce que Claude "a sous les yeux" au moment de répondre — la conversation en cours, les fichiers partagés, les instructions données.
**Analogie métier :** la taille du bureau sur lequel vous étalez vos dossiers pour travailler. Un petit bureau vous force à ranger certains dossiers pour en sortir d'autres ; Claude fait de même quand la conversation devient très longue.
**Exemple :** au Module 1, le signal "il faut changer de conversation" (`08-prompts-du-module.md`, ECO-008) survient quand le bureau devient trop encombré pour que Claude retrouve facilement une information donnée au début.

## Dashboard {#dashboard}

**Définition :** un tableau de bord visuel qui résume des données en indicateurs et graphiques, mis à jour automatiquement.
**Analogie métier :** le tableau de bord d'une voiture — vous ne lisez pas le moteur directement, vous lisez la vitesse et le niveau d'essence déjà traduits en chiffres lisibles.
**Exemple :** le dashboard Streamlit du Module 4 traduit les 300 lignes du fichier de ventes DELTA de Fatou en indicateurs clés et graphiques, plutôt que de laisser son client rouvrir un fichier Excel chaque mois.

## Dataset {#dataset}

**Définition :** un jeu de données organisé (le plus souvent en lignes et colonnes) qui sert de matière première à une analyse.
**Analogie métier :** la pile de factures avant de faire sa comptabilité — des informations brutes, pas encore transformées en résultat utile.
**Exemple :** le fichier `ventes-delta-distribution-brut.xlsx` du Module 3 est le dataset de départ de Fatou, avant nettoyage.

## Déploiement {#deploiement}

**Définition :** l'action de rendre une application ou un site accessible par une adresse internet, au lieu qu'il ne fonctionne que sur un seul ordinateur.
**Analogie métier :** la différence entre répéter un spectacle dans son salon et le jouer sur une vraie scène ouverte au public.
**Exemple :** le Module 4 se termine par le déploiement du dashboard ou du site — sans cette étape, le livrable reste un fichier local, pas un lien partageable avec un client.

## Dépôt (GitHub) {#depot-github}

**Définition :** un espace de stockage en ligne pour le code d'un projet, avec un historique des versions.
**Analogie métier :** un classeur partagé où chaque modification est datée et conservée, plutôt qu'un seul fichier réécrit sans trace des versions précédentes.
**Exemple :** au Module 4, créer un dépôt GitHub est souvent l'étape intermédiaire nécessaire avant de déployer un dashboard sur certaines plateformes gratuites.

## Hallucination {#hallucination}

**Définition :** une réponse formulée avec assurance par une IA mais qui est factuellement incorrecte ou inventée.
**Analogie métier :** un collègue qui répond du tac au tac à une question sans être sûr de la réponse, plutôt que de dire "je ne sais pas" ou de vérifier — le ton confiant ne garantit pas l'exactitude.
**Exemple :** c'est pour limiter ce risque que le Module 3 insiste sur la vérification d'un chiffrage avant de le présenter (`08-prompts-du-module.md`, DATA-014) — on ne prend jamais un résultat de Claude comme vérité sans le confronter aux données sources.

## MCP — Model Context Protocol {#mcp}

**Définition :** le standard qui permet à Claude de se connecter directement à d'autres outils (Google Drive, Notion, Gmail...) plutôt que de rester enfermé dans une seule fenêtre de discussion.
**Analogie métier :** des prises électriques universelles — au lieu qu'un appareil ne fonctionne qu'avec sa propre prise propriétaire, MCP est le format de prise commun qui permet de brancher Claude sur vos outils déjà en place.
**Exemple :** au Module 1, Fatou connecte son Google Drive à Claude via un connecteur MCP, pour que Claude puisse lire directement ses documents clients sans qu'elle ait à les copier-coller.

## Pandas {#pandas}

**Définition :** un outil du langage Python spécialisé dans la manipulation de tableaux de données.
**Analogie métier :** Excel, mais piloté par des instructions écrites plutôt que par des clics — utile quand un tableau devient trop volumineux pour être manipulé confortablement à la souris.
**Exemple :** le Module 3 présente pandas comme un "niveau 2" optionnel pour reproduire en code ce qui a été fait à la main sous Excel.

## Prompt {#prompt}

**Définition :** l'instruction donnée à Claude — une question, une consigne, une mission.
**Analogie métier :** le brief que vous donneriez à un collaborateur avant de lui confier une tâche : plus il est précis, moins il y a d'allers-retours pour corriger un résultat mal calibré.
**Exemple :** toute la méthode C.L.A.R.T.É du Module 2 sert à construire un prompt complet dès le premier essai, plutôt qu'un prompt vague qu'il faut reformuler trois fois.

## Requête (SQL) {#requete-sql}

**Définition :** une instruction écrite dans le langage SQL pour extraire ou filtrer des informations précises dans une base de données.
**Analogie métier :** une demande précise faite à un archiviste ("donnez-moi tous les dossiers clients de la région Nord ouverts depuis mars") plutôt que de fouiller vous-même dans toutes les armoires.
**Exemple :** au Module 3, Claude génère et explique une requête SQL qui isole les ventes de la région Nord sur la période de rupture de stock.

## Scénario (Make) {#scenario-make}

**Définition :** l'ensemble configuré des étapes d'une automatisation dans l'outil Make — un déclencheur suivi d'actions.
**Analogie métier :** une chaîne de montage : un événement de départ (une nouvelle commande, un nouvel email) déclenche une suite d'étapes toujours exécutées dans le même ordre.
**Exemple :** le scénario du Module 5 part d'une mise à jour du fichier de ventes de Fatou et se termine par l'envoi d'un résumé sur WhatsApp ou Notion, sans qu'elle intervienne.

## Skill (Claude) {#skill}

**Définition :** un ensemble d'instructions réutilisables qu'on enseigne une fois à Claude pour qu'il exécute la même tâche correctement, à chaque fois qu'on la lui demande, sans tout réexpliquer.
**Analogie métier :** former un collaborateur une seule fois sur une procédure interne, plutôt que lui réexpliquer les mêmes étapes chaque semaine.
**Exemple :** au Module 1, Fatou crée une Skill "Compte-rendu de réunion client" — elle ne réexplique plus jamais le format attendu, Claude s'en souvient d'une fois sur l'autre.

## Token {#token}

**Définition :** la plus petite unité de texte que Claude lit et écrit (un mot ou un fragment de mot) — c'est ce qui est compté pour mesurer la taille d'une conversation.
**Analogie métier :** les minutes facturées sur un forfait téléphonique : chaque échange en consomme, et il existe une limite au-delà de laquelle il faut "changer de forfait" — ici, ouvrir une nouvelle conversation.
**Exemple :** le Module 1 explique comment repérer qu'une conversation approche de sa limite de tokens avant qu'elle ne devienne difficile à suivre pour Claude.

## Webhook {#webhook}

**Définition :** un signal automatique envoyé par un outil à un autre dès qu'un événement précis se produit, sans vérification manuelle répétée.
**Analogie métier :** une sonnette connectée qui prévient automatiquement quand quelqu'un arrive, plutôt que quelqu'un qui doit surveiller la porte en permanence.
**Exemple :** au Module 5, un webhook peut déclencher le scénario Make dès qu'une nouvelle ligne est ajoutée au fichier de ventes de Fatou.

## Workflow {#workflow}

**Définition :** un enchaînement structuré de plusieurs étapes (souvent plusieurs prompts) organisées pour produire un résultat, plutôt qu'une seule demande isolée.
**Analogie métier :** une procédure en plusieurs étapes validées une à une, plutôt qu'une tâche confiée d'un bloc en espérant que tout soit bon du premier coup.
**Exemple :** le Module 2 enseigne le workflow "brief → brouillon → critique → version finale" pour une proposition commerciale, plutôt que d'attendre un résultat parfait en un seul prompt.
