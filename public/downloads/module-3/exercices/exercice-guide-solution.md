# Corrigé commenté — Exercice guidé Module 3

Démarche complète de nettoyage, étape par étape, puis les 3 insights rédigés avec les chiffres exacts obtenus sur `ventes-delta-distribution-nettoye.xlsx`.

## Partie A — Diagnostic attendu

| Type de défaut | Constat attendu |
|---|---|
| Lignes strictement dupliquées | 10 lignes |
| Valeurs manquantes (`quantite`) | 5 lignes |
| Valeurs manquantes (`prix_unitaire_fcfa`) | 10 lignes |
| Variantes de format sur `region` | "Nord", "nord", "NORD " (espace final), "Nord " (espace final) — toutes désignant la même région |
| Formats de date différents | `JJ/MM/AAAA` (ex. `14/02/2026`) et `AAAA-MM-JJ` (ex. `2026-02-22`) mélangés dans la même colonne |
| Valeurs aberrantes | Une `quantite` à 99999 ; un `prix_unitaire_fcfa` négatif ; un `prix_unitaire_fcfa` multiplié par 100 par rapport à sa valeur plausible |

**Total avant nettoyage : 310 lignes. Total après nettoyage : 300 lignes** (suppression des 10 doublons stricts).

## Partie B — Démarche de nettoyage commentée

1. **Doublons** : suppression des lignes strictement identiques (`drop_duplicates` en pandas, ou équivalent "Supprimer les doublons" dans Excel/Sheets appliqué à l'ensemble des colonnes). 310 → 300 lignes.
2. **Région** : normalisation par suppression des espaces et mise en forme homogène (majuscule initiale) — "nord", "NORD ", "Nord " deviennent tous "Nord". Résultat final : exactement 5 valeurs (Dakar, Thiès, Nord, Sud, Casamance).
3. **Dates** : détection du format ligne par ligne (présence de `/` → `JJ/MM/AAAA`, présence de `-` → `AAAA-MM-JJ`) puis conversion vers un format de date unique et un vrai type "date" (pas du texte) pour permettre les calculs par mois.
4. **Valeurs manquantes** : `quantite` et `prix_unitaire_fcfa` manquants remplacés par la médiane du même produit, dans la même région et le même canal de vente (plus représentatif qu'une moyenne générale du fichier qui mélangerait des produits très différents). Choix méthodologique à documenter : une autre approche défendable serait de supprimer ces lignes plutôt que de les estimer — le choix retenu ici privilégie la conservation du volume d'information disponible.
5. **Valeurs aberrantes** : une quantité ou un prix repéré comme incohérent (trop éloigné des valeurs observées pour le même produit) est traité comme une valeur manquante puis imputé par la même règle que le point 4, et `montant_total_fcfa` est recalculé (`quantite × prix_unitaire_fcfa`) — jamais laissé tel quel.

**Piège fréquent à surveiller (côté animateur) :** un participant qui supprime purement et simplement les lignes contenant une valeur aberrante ou manquante, sans les remplacer — ce n'est pas une erreur en soi (c'est une méthode défendable), mais elle doit être un choix conscient et assumé, pas un raccourci pour "ne plus voir le problème". Le nombre de lignes final doit être justifié.

## Partie C — Résultats d'analyse attendus

**Quantité vendue par mois, région Nord :**

| Février | Mars | Avril | Mai | Juin | Juillet |
|---|---|---|---|---|---|
| 3 210 | 1 067 | 1 078 | 1 068 | 2 766 | 2 653 |

Les 3 mois de chute anormale sont **mars, avril et mai 2026**.

**Part du canal E-commerce dans la quantité totale vendue, par mois :**

| Février | Mars | Avril | Mai | Juin | Juillet |
|---|---|---|---|---|---|
| 8,0 % | 9,8 % | 12,9 % | 16,0 % | 19,9 % | 24,1 % |

Tendance nettement croissante, multipliée par environ 3 en 6 mois.

## Partie D — Les 3 insights, rédigés

**Insight 1 — Rupture récurrente région Nord**
- **Constat** : la région Nord vend en moyenne 2 876 unités/mois en période normale (février, juin, juillet) contre seulement 1 071 unités/mois pendant mars, avril et mai 2026 — une baisse de 63 %.
- **Chiffrage** : perte estimée de 1 805 unités/mois, soit 5 416 unités sur les 3 mois de rupture. Au prix moyen unitaire constaté dans le Nord (1 655 FCFA), cela représente environ **8 961 000 FCFA de chiffre d'affaires non réalisé** sur la période (~2 987 000 FCFA/mois).
- **Recommandation** : sécuriser l'approvisionnement de l'entrepôt Nord avant le prochain pic de demande (stock tampon, fréquence de réassort revue) — c'est la principale source de perte de chiffre d'affaires identifiée sur les 6 mois.

**Insight 2 — E-commerce en forte croissance mais sous-exploité**
- **Constat** : la part du canal E-commerce dans le volume total vendu passe de 8,0 % en février à 24,1 % en juillet (x3 en 6 mois) ; le volume brut vendu en ligne passe de 1 243 à 3 634 unités.
- **Chiffrage** : malgré cette croissance, l'E-commerce ne représente que 14,9 % de la valeur totale en juillet (9,1 % du chiffre d'affaires sur l'ensemble des 6 mois, soit 11 406 000 FCFA sur 125 091 000 FCFA) — le canal devient majeur en volume tout en restant minoritaire en valeur.
- **Recommandation** : allouer davantage de stock et de budget marketing à l'E-commerce dès le prochain trimestre — c'est le canal en croissance la plus rapide, actuellement sous-financé par rapport à sa dynamique réelle.

**Insight 3 — Retards de livraison concentrés sur la région Nord**
- **Constat** : le délai moyen de livraison vers la région Nord est de 10,8 jours, contre 3,0 jours en moyenne pour les 4 autres régions — un facteur 3,7 fois plus lent.
- **Chiffrage** : le sous-cas le plus touché est le canal Grossiste vers le Nord, avec un délai moyen de 12,1 jours.
- **Recommandation** : objectiver ce retard auprès du partenaire transport actuel desservant le Nord avant la prochaine campagne commerciale — ce retard n'est pas prouvé comme la cause unique de la rupture de stock (Insight 1), mais il y est fortement corrélé et constitue un levier d'action direct et négociable.

## Note méthodologique à partager avec les participants

Ces chiffres proviennent d'un nettoyage précis (imputation par médiane produit/région/canal). Un participant qui aurait choisi de supprimer les lignes incomplètes plutôt que de les imputer obtiendra des chiffres légèrement différents — c'est normal et acceptable, à condition que l'ordre de grandeur reste cohérent (baisse Nord de l'ordre de 60 %, croissance E-commerce multipliée par 2,5 à 3, écart de délai Nord d'un facteur 3 à 4) et que le choix méthodologique soit explicitement assumé dans le compte-rendu.
