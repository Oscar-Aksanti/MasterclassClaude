# Exercice guidé — Module 3 — Nettoyer et analyser le fichier DELTA Distribution

**Durée : 30-35 minutes, en session (bloc pratique guidée).**

## Contexte

Vous êtes Fatou Diallo. DELTA Distribution, votre client grossiste-distributeur (agroalimentaire et biens de consommation courante, plusieurs régions du Sénégal), vient de vous envoyer son export de ventes des 6 derniers mois : `ventes-delta-distribution-brut.xlsx`. Votre mission : le nettoyer, l'analyser, et en tirer 3 recommandations chiffrées avant la prochaine réunion avec DELTA.

## Partie A — Diagnostic (5 min)

Ouvrez `ventes-delta-distribution-brut.xlsx` dans Claude Code et demandez un diagnostic complet (voir la formulation exacte dans `../05-demo-commentee.md`, sous-bloc A). Notez ici ce que Claude a trouvé :

| Type de défaut | Ce que vous avez trouvé |
|---|---|
| Lignes strictement dupliquées | |
| Valeurs manquantes (quantite) | |
| Valeurs manquantes (prix_unitaire_fcfa) | |
| Variantes de format sur `region` | |
| Formats de date différents coexistants | |
| Valeurs aberrantes repérées | |

## Partie B — Nettoyage (10 min)

Demandez la correction étape par étape (dans cet ordre précis, et pas "nettoie tout d'un coup") :

1. Suppression des doublons stricts.
2. Standardisation de la colonne `region` (5 valeurs exactes : Dakar, Thiès, Nord, Sud, Casamance).
3. Uniformisation des dates (un seul format).
4. Traitement des valeurs manquantes sur `quantite` et `prix_unitaire_fcfa`.
5. Correction des valeurs aberrantes et recalcul de `montant_total_fcfa`.

Vérifiez à la fin : nombre de lignes final, absence de valeur manquante, présence des 5 régions et d'elles seules, un seul format de date.

- [ ] Nombre de lignes après nettoyage : ______
- [ ] Zéro valeur manquante confirmée
- [ ] Zéro doublon confirmé

## Partie C — Analyse (10 min)

1. Construisez un tableau croisé dynamique : quantité totale vendue par région (lignes) et par mois (colonnes).
2. Répondez : quels 3 mois consécutifs montrent une chute anormale dans la région Nord ? ______
3. Construisez un second tableau (ou une formule) : part du canal E-commerce dans la quantité totale vendue, mois par mois. La tendance est-elle croissante ou stable ? ______
4. Si le temps le permet : demandez à Claude une requête SQL équivalente à la question 1, et lisez-la à voix haute pour vérifier que vous en comprenez chaque clause.

## Partie D — Rédiger les 3 insights (10 min)

Pour chacun des 3 insights ci-dessous, remplissez le gabarit constat → chiffrage → recommandation. Utilisez vos propres chiffres calculés dans la Partie C (ils doivent être proches de ceux du corrigé, sans être identiques au signe près selon vos choix de nettoyage).

**Insight 1 — Rupture région Nord**
- Constat : ___________________________
- Chiffrage (perte estimée en unités et en FCFA) : ___________________________
- Recommandation : ___________________________

**Insight 2 — E-commerce en croissance**
- Constat : ___________________________
- Chiffrage (part volume vs part valeur, évolution sur 6 mois) : ___________________________
- Recommandation : ___________________________

**Insight 3 — Retards de livraison**
- Constat : ___________________________
- Chiffrage (délai moyen Nord vs autres régions) : ___________________________
- Recommandation : ___________________________

## Une fois terminé

Comparez avec `exercice-guide-solution.md`. Ajoutez votre fichier nettoyé, vos 3 insights et une visualisation à la **Section 3 de votre Portfolio IA Professionnel**.
