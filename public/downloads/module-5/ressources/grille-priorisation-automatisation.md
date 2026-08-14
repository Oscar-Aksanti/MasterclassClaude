# Grille de priorisation de l'automatisation — ressource téléchargeable

Version propre et imprimable de la grille de cartographie utilisée en exercice (`06-exercices/grille-cartographie-taches.md`). Gardez-la sous la main chaque fois que vous vous demandez "est-ce que ça vaut le coup d'automatiser ça ?" — au travail, longtemps après la fin de la formation. Une version PDF stylée charte graphique est disponible : `grille-priorisation-automatisation.pdf`.

## La méthode en 3 critères

| Critère | Ce qu'il mesure | Note 1 | Note 2 | Note 3 |
|---|---|---|---|---|
| **Fréquence** | Combien de fois vous refaites cette tâche | Moins d'une fois par mois | Environ une fois par semaine | Plusieurs fois par semaine, voire quotidien |
| **Pénibilité** | Le temps perdu et la valeur ajoutée de le faire vous-même | Rapide, pas ennuyeux | Prend du temps, peu de valeur ajoutée | Répétitif, mécanique, aucune décision créative |
| **Risque d'erreur** | La conséquence si une erreur passait inaperçue | Coûte presque rien | Gênant mais réparable | Conséquence sérieuse (client, argent, donnée personnelle) |

## Le calcul

**Score de priorité = Fréquence × Pénibilité** (de 1 à 9).

Le **risque d'erreur** n'entre pas dans le score : il agit comme un **frein qualitatif**, pas un facteur multiplicateur. Une tâche à risque 3 peut avoir un score de priorité élevé — mais la décision qui en découle change complètement.

## Grille de décision finale

| Score de priorité | Risque d'erreur | Décision recommandée |
|---|---|---|
| 6 à 9 (élevé) | 1 (faible) | **Automatiser en entier**, jusqu'à l'action finale, avec test avant activation |
| 6 à 9 (élevé) | 2 ou 3 (moyen/élevé) | **Automatiser la préparation et la notification uniquement** — garder une validation humaine avant toute action finale, surtout si elle touche un client ou un tiers externe |
| 3 à 5 (moyen) | quel qu'il soit | **Envisager une Skill** (méthode réutilisable appliquée par vous-même, voir Module 1) plutôt qu'une automatisation complète |
| 1 à 2 (faible) | quel qu'il soit | **Ne pas automatiser** — l'effort de construction ne serait pas rentabilisé |

## Rappel des 3 lignes rouges (jamais d'automatisation complète si...)

1. La tâche implique une **décision sensible** (budget, tarif client, décision RH, commande fournisseur).
2. La tâche manipule une **donnée personnelle** sans nécessité stricte de la transmettre à l'outil de destination.
3. La dernière étape est une **communication directe vers un client final** sans relecture humaine intermédiaire.

## Modèle de tableau à dupliquer pour votre propre usage

| Tâche | Fréquence | Pénibilité | Risque | Score (Fréq × Pén) | Décision |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Voir la version d'exercice avec l'exemple complet de Fatou Diallo (DELTA Distribution) dans `06-exercices/grille-cartographie-taches.md`, et la méthode complète appliquée pas à pas dans `04-lecon-ecrite-complete.md` (Partie 1).
