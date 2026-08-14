# Lisez-moi avant d'utiliser le blueprint

Le fichier `blueprint-scenario-delta-reporting.json` documente la structure du scénario Make de référence de ce module (déclencheur → traitement Claude → routeur → actions Notion/WhatsApp), dans un format inspiré de l'export "blueprint" de Make (Integromat).

## Ce que ce fichier EST

- Un plan de construction pédagogique complet : quel module utiliser à chaque étape, quels champs mapper vers quels champs, quelle condition écrire pour l'alerte région Nord, quels tests effectuer avant activation.
- Une référence à garder ouverte pendant que vous reconstruisez le scénario module par module dans l'interface Make, en suivant `04-lecon-ecrite-complete.md` (Partie 3) et `05-demo-commentee.md`.
- Un JSON valide (vérifiable avec `python3 -m json.tool blueprint-scenario-delta-reporting.json`).

## Ce que ce fichier N'EST PAS

- **Ce n'est PAS un blueprint Make exportable/importable tel quel.** Un vrai export Make contient des identifiants de connexion (`connectionId`), des identifiants d'application internes, des positions visuelles de modules, et une structure interne propre au moteur Make — rien de tout cela ne peut être fabriqué de façon fiable sans un compte Make réel connecté. Tenter d'importer ce fichier via "Importer un blueprint" dans Make échouera ou produira un résultat incorrect.
- Ce n'est pas une garantie que les modules exacts nommés (ex. "Anthropic Claude — Create a Message") existent sous ce nom précis dans votre version de Make au moment où vous suivez ce module — l'écosystème d'applications Make évolue. Si le module natif Claude n'est pas disponible sur votre compte, utilisez un module HTTP générique vers l'API Claude : le prompt et le mapping de champs documentés restent identiques.

## Comment l'utiliser concrètement

1. Ouvrez Make, créez un nouveau scénario vide.
2. Ajoutez chaque module dans l'ordre indiqué par le champ `etapes` (et le `declencheur` en premier), en configurant vous-même les connexions à vos comptes réels (Google Sheets, Notion, WhatsApp Business).
3. Reprenez les `mapping_champs` et le `prompt_template` du fichier pour configurer chaque module — recopiez la logique, pas un fichier.
4. Reprenez la condition de la branche B (`region = "Nord" ET stock_disponible_unites < seuil_alerte_unites`) dans le filtre du routeur.
5. Exécutez les 3 tests listés dans `tests_obligatoires_avant_activation` avant de basculer le scénario sur "ON".

Cette limitation est signalée volontairement, conformément à la règle de production de ce projet : ne jamais surpromettre une compatibilité technique qui n'a pas été testée dans cet environnement.
