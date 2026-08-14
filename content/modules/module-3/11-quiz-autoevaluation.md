# Quiz d'autoévaluation — Module 3

8 questions. Objectif : 7/8 minimum avant de passer au Module 4. Ce n'est pas un examen — si vous ratez une question, relisez la partie correspondante de `04-lecon-ecrite-complete.md` avant de continuer.

---

**1.** Vous recevez un fichier Excel avec des lignes strictement identiques répétées. Quelle est la première chose à faire ?
- A) Les laisser, elles n'influencent pas beaucoup les totaux
- B) Les supprimer (doublons stricts) avant toute analyse
- C) Les signaler au client sans les corriger
- D) Changer leur format de date

**2.** La colonne `region` contient "Nord", "nord", "NORD " et "Nord ". Que faut-il faire avant d'analyser les ventes par région ?
- A) Rien, Claude comprend automatiquement que c'est la même région
- B) Standardiser toutes les variantes vers une seule valeur avant tout calcul par région
- C) Supprimer toutes les lignes concernées
- D) Ignorer la colonne region

**3.** Pour une valeur manquante sur `quantite`, quelle approche est la plus défendable dans le cas du fichier DELTA ?
- A) La remplacer arbitrairement par zéro
- B) La remplacer par la médiane du même produit, dans la même région et le même canal de vente (ou la supprimer, si ce choix est assumé et documenté)
- C) La remplacer par la valeur la plus fréquente de tout le fichier, tous produits confondus
- D) Laisser la cellule vide, ça ne change rien aux totaux

**4.** Que fait la clause `GROUP BY` dans une requête SQL ?
- A) Elle trie les résultats par ordre alphabétique
- B) Elle filtre les lignes avant tout calcul
- C) Elle regroupe les lignes qui partagent une même valeur (ex. même région, même mois) avant d'appliquer un calcul comme SUM
- D) Elle supprime les doublons

**5.** Vrai ou Faux : pour utiliser pandas (Python) dans ce module, il faut savoir écrire du code Python par vous-même.
- Vrai / Faux

**6.** Vous voulez montrer l'évolution du chiffre d'affaires sur 6 mois. Quel type de graphique est le plus adapté ?
- A) Un camembert
- B) Une courbe (ligne)
- C) Un nuage de points sans axe temporel
- D) Peu importe, tous les graphiques se valent

**7.** Le délai de livraison moyen est plus élevé dans le Nord, et le Nord subit aussi des ruptures de stock. Quelle affirmation est correcte ?
- A) Le retard de livraison est prouvé comme l'unique cause de la rupture de stock
- B) Il s'agit d'une corrélation qui appuie une hypothèse et justifie une vérification, pas d'une preuve de causalité absolue
- C) Ces deux faits n'ont aucun rapport
- D) Il faut ignorer le délai de livraison tant qu'il n'y a pas de preuve à 100 %

**8.** Un insight rédigé comme "les ventes de la région Nord ont baissé" est-il un livrable conforme pour ce module ?
- A) Oui, l'essentiel est de repérer la tendance
- B) Non, un insight conforme doit contenir un chiffre précis et une recommandation actionnable
- C) Oui, à condition qu'il soit accompagné d'un graphique
- D) Non, un insight doit toujours contenir une formule Excel

---

## Corrigé

1. **B** — un doublon strict fausse tous les totaux ; on le supprime avant toute analyse, systématiquement.
2. **B** — sans standardisation, les ventes du Nord se retrouveraient éclatées en 4 catégories différentes dans n'importe quel calcul par région.
3. **B** — le choix doit être défendable et documenté ; la médiane par produit/région/canal est plus représentative qu'une moyenne générale, mais supprimer la ligne reste une alternative acceptable si elle est assumée.
4. **C** — `GROUP BY` regroupe avant calcul ; c'est l'équivalent SQL d'un tableau croisé dynamique.
5. **Faux** — vous décrivez ce que vous voulez en français à Claude Code, qui écrit et explique le script ; ce module ne demande pas de savoir coder.
6. **B** — une évolution dans le temps se lit naturellement sur une courbe ; un camembert ne montre pas de progression.
7. **B** — c'est une corrélation à objectiver, pas une preuve définitive de cause à effet — la nuance compte dans la formulation de la recommandation.
8. **B** — sans chiffre précis ni recommandation actionnable, ce n'est qu'un constat vague, insuffisant pour le livrable de ce module.

**Si vous avez moins de 7/8 :** ce n'est pas un échec, c'est un signal — repérez la question ratée, relisez la partie correspondante, et refaites l'exercice guidé (`06-exercices/exercice-guide-depart.md`) avant de passer au Module 4.
