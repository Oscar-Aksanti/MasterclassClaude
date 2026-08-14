# Corrigé commenté — Exercice guidé Module 5

## Réponse à la question de contrôle (Étape 1)

**Pourquoi un déclencheur "nouvelle ligne" plutôt qu'un déclencheur programmé ("tous les lundis à 9h") ?**

Parce que l'événement qui doit déclencher le traitement, c'est **la disponibilité de la donnée**, pas une heure arbitraire. Si l'équipe terrain remplit la feuille en retard (mardi au lieu de lundi), un déclencheur programmé au lundi 9h ne trouverait rien à traiter et manquerait le rapport de la semaine. Un déclencheur "nouvelle ligne" réagit exactement au bon moment, quel que soit le jour réel de saisie — c'est plus robuste face aux aléas humains du terrain, qui sont la norme, pas l'exception.

**Piège fréquent à surveiller (côté animateur) :** plusieurs participants proposeront spontanément un déclencheur programmé par réflexe ("c'est plus simple à comprendre : chaque lundi"). C'est l'occasion de montrer qu'un déclencheur événementiel bien choisi élimine une classe entière de bugs silencieux (la semaine "oubliée" parce que la donnée n'était pas encore là à l'heure prévue).

## Étape 2 — Points de vérification sur le prompt

- Si le résultat de Claude est trop long : ajoutez une contrainte explicite de longueur ("2 phrases maximum") plutôt que de compter sur le bon sens du modèle — soyez aussi précis dans un prompt automatisé que dans un prompt tapé à la main (Module 2).
- Si le résultat invente un chiffre absent des données : c'est le signal que la consigne "n'invente aucun chiffre absent des données fournies" doit être renforcée ou reformulée plus tôt dans le prompt, pas en fin de texte où elle est moins respectée.
- Un bon résultat à ce stade doit être **directement collable** dans Notion sans retouche — si vous devez systématiquement le reformuler, le prompt n'est pas encore assez précis.

## Étape 3 — Points de vérification sur le routeur

- Le filtre de la branche B doit combiner **les deux conditions avec un ET**, pas un OU : `region = "Nord" ET stock_disponible_unites < seuil_alerte_unites`. Un OU déclencherait l'alerte pour n'importe quelle région dès que son propre stock est bas, ce qui n'est pas le comportement souhaité (le scénario ne surveille que la région Nord dans cette version).
- Une erreur fréquente est d'inverser la comparaison (`stock_disponible_unites > seuil_alerte_unites` au lieu de `<`) — relire la condition à voix haute en français avant de la configurer évite cette inversion silencieuse.

## Étape 4 — Ce que "réussi" veut dire concrètement

- **Test positif réussi** : la ligne région Nord / stock sous le seuil produit une entrée dans Notion (ou l'onglet de remplacement) ET une notification (WhatsApp ou email).
- **Test négatif réussi** : la ligne qui ne remplit pas la condition produit une entrée dans Notion, mais **aucune** notification. Si une notification part malgré tout, le filtre est mal configuré — revenez à l'étape 3 avant de continuer.
- Une automatisation "conforme" au sens de la grille d'évaluation (`10-grille-evaluation-livrable.md`) exige les deux tests réussis, pas seulement le premier.

## Exemple de résultat Claude attendu sur la ligne de test fournie

> "Semaine du 17/08 pour la région Nord : stock à 280 unités, sous le seuil de 300. Ventes de la semaine à 4 600 000 FCFA. Recommandation : signaler la situation à l'équipe logistique DELTA avant la semaine suivante pour éviter une rupture prolongée."

Ce texte est directement exploitable dans la branche A (archivage) et sert de base au message de la branche B (alerte), exactement comme dans le scénario de démonstration.
