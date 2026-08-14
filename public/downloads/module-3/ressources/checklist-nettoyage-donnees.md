# Gabarit — Checklist de nettoyage de données

Copiez cette checklist avant chaque nouveau fichier de données reçu d'un client ou d'un collègue. Elle reprend les 5 types de défauts vus dans ce module — dans cet ordre, systématiquement, même quand le fichier "a l'air propre" à l'œil.

## Étape 1 — Diagnostic (avant toute correction)

- [ ] **Doublons stricts** : combien de lignes sont strictement identiques à une autre ligne ?
- [ ] **Valeurs manquantes** : combien de cellules vides, par colonne ?
- [ ] **Formats incohérents (texte)** : une même valeur écrite de plusieurs façons (casse, espaces, abréviations) ?
- [ ] **Formats incohérents (dates)** : plusieurs formats de date coexistent-ils dans la même colonne ?
- [ ] **Valeurs aberrantes** : des valeurs numériques anormalement grandes, négatives, ou incohérentes avec le reste de la colonne ?

**Prompt de diagnostic à utiliser (voir `../08-prompts-du-module.md`, DATA-001) :**
```
Voici un fichier de données ({nom_fichier}). Avant de le corriger, fais-moi un diagnostic
complet : doublons stricts, valeurs manquantes par colonne, incohérences de format sur
{colonnes_texte}, formats mélangés sur {colonnes_date}, et valeurs qui semblent aberrantes.
Ne corrige rien encore.
```

## Étape 2 — Correction (une étape à la fois, jamais "tout d'un coup")

- [ ] Suppression des doublons stricts confirmée (comparer le nombre de lignes avant/après)
- [ ] Valeurs manquantes traitées avec une méthode choisie et documentée (imputation par médiane/groupe, ou suppression assumée)
- [ ] Formats texte standardisés (une seule écriture par valeur réelle)
- [ ] Dates uniformisées sur un seul format, en vrai type "date" (pas du texte)
- [ ] Valeurs aberrantes corrigées ou exclues, avec les colonnes calculées (ex. montant = quantité × prix) recalculées en conséquence

## Étape 3 — Vérification finale (ne jamais sauter cette étape)

- [ ] Nombre de lignes final noté et expliqué (combien de lignes supprimées, et pourquoi)
- [ ] Zéro valeur manquante restante confirmée colonne par colonne
- [ ] Zéro doublon restant confirmé
- [ ] Les valeurs des colonnes catégorielles (ex. région, canal) listées une par une pour confirmer qu'il n'existe plus de variante
- [ ] Les valeurs min/max de chaque colonne numérique passées en revue pour repérer une dernière anomalie

## Étape 4 — Documentation du nettoyage (pour vous, et pour votre client)

Notez toujours, même en 3 lignes :
- Le nombre de lignes avant et après nettoyage.
- La méthode choisie pour les valeurs manquantes (et pourquoi celle-là plutôt qu'une autre).
- Les valeurs aberrantes trouvées et comment elles ont été traitées.

> Un nettoyage qu'on ne peut pas expliquer à son client en 2 minutes n'est pas un nettoyage fiable — même s'il "a marché".

## Exemple rempli (dataset DELTA Distribution, Module 3)

| Étape | Constat | Action |
|---|---|---|
| Doublons | 10 lignes strictement dupliquées | Supprimées — 310 → 300 lignes |
| Valeurs manquantes | 5 sur `quantite`, 10 sur `prix_unitaire_fcfa` | Imputées par la médiane du même produit/région/canal |
| Formats texte | 4 variantes de "Nord" ("Nord", "nord", "NORD ", "Nord ") | Standardisées vers "Nord" |
| Dates | Deux formats mélangés (`JJ/MM/AAAA` et `AAAA-MM-JJ`) | Uniformisées en type date unique |
| Valeurs aberrantes | Quantité à 99999, prix négatif, prix ×100 | Corrigées par imputation, `montant_total_fcfa` recalculé |

Voir le nettoyage complet et commenté dans `../06-exercices/exercice-guide-solution.md`.
