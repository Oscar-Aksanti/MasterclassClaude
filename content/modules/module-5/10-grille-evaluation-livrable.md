# Grille d'évaluation du livrable — Module 5

**Livrable : une automatisation réelle déployée.** Auto-évaluation — cochez chaque ligne honnêtement ; ce n'est pas noté par un tiers, c'est ce qui conditionne votre réussite au Module 6 (assemblage du Portfolio complet).

## Grille

| Critère | Insuffisant | Conforme | Excellent |
|---|---|---|---|
| **Scénario Make** | Aucun scénario créé, ou créé mais jamais exécuté avec succès | Un scénario avec déclencheur + traitement + action, exécuté au moins une fois avec succès | Un scénario complet avec routeur/condition, exécuté avec succès ET activé (statut "ON") |
| **Intégrations** | Une seule intégration utilisée, ou plusieurs mais aucune réellement fonctionnelle | Au moins 2 intégrations parmi Google Sheets / Gmail / Notion / WhatsApp Business, fonctionnelles | 2 intégrations approfondies avec un mapping de champs réfléchi, pas seulement des valeurs par défaut |
| **Condition d'alerte / filtre** | Aucune logique conditionnelle dans le scénario | Une condition simple testée une fois | Une condition testée dans les deux sens (cas qui déclenche, cas qui ne déclenche pas), avec cas limites envisagés |
| **Test avant activation** | Scénario activé sans test manuel préalable | Au moins une exécution manuelle réussie avant activation | Exécution manuelle sur un cas positif ET un cas négatif avant activation, documentée |
| **Garde-fous appliqués** | Le scénario automatise une action sensible (envoi direct à un client final, décision irréversible) sans validation humaine | Le scénario s'arrête à une notification/préparation pour toute action sensible identifiée | Une checklist explicite des garde-fous a été vérifiée et le point d'arrêt humain est clairement identifié dans la documentation du scénario |

## Seuil de complétion du module

Le livrable est considéré **conforme** si au moins 4 des 5 critères sont au niveau "Conforme" ou "Excellent", **et** que le scénario est effectivement activé (statut "ON") avec au moins une exécution réussie visible dans l'historique Make — pas seulement configuré en théorie.

## Ce qui ne compte PAS comme complété

- Un scénario Make construit puis jamais exécuté ni activé.
- Une copie du scénario DELTA de la démonstration sans adaptation à sa propre tâche répétitive (l'objectif pédagogique est de transposer, pas de reproduire — voir défi en autonomie).
- Un scénario qui envoie automatiquement un message directement à un client final sans étape de validation humaine intermédiaire (violation du garde-fou n° 3).
- Une condition d'alerte jamais testée dans le cas où elle ne doit PAS se déclencher (risque de fausse alerte systématique non détecté).

## Lien avec le Portfolio

Une fois ce livrable conforme, ajoutez une capture d'écran du scénario actif et une capture de l'exécution réussie à la **Section 5** du Portfolio IA Professionnel (`01-programme/parcours-portfolio-participant.md`). C'est cette pièce, avec au moins 3 autres sur les 6 modules, qui conditionne la certification (`certification/criteres-obtention.md`).
