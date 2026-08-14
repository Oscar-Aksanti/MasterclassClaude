<!-- Document de production interne (pas participant-facing) — verrouille les faits partagés entre les Modules 3, 4 et 5 avant leur rédaction en Phase 4, pour que les 3 modules restent cohérents même produits en parallèle par des agents différents. Ne pas modifier sans répercuter dans les 3 modules concernés. -->

# Continuité inter-modules — faits verrouillés (Phase 4)

Ce fichier fixe ce qui **doit rester identique** entre les Modules 3, 4 et 5, qui partagent tous le même client fil rouge de Fatou : **DELTA Distribution**. Ce client est déjà introduit au Module 1 (notes de réunion de la démo, `modules/module-1-ecosysteme-claude/05-demo-commentee.md`) — les Modules 3/4/5 doivent résoudre exactement les problèmes déjà évoqués là, pas en inventer d'autres.

## Rappel du contexte déjà posé au Module 1

Notes de réunion DELTA du 15/08 (déjà écrites) mentionnent 3 problèmes non résolus :
1. Rupture de stock à l'entrepôt Nord, 3 fois ce mois.
2. Budget marketing Q4 pas encore validé.
3. Retard de livraison chez le partenaire transport.

Les Modules 3, 4 et 5 doivent traiter les problèmes 1 et 3 (le problème 2, budget/relance, reste du ressort du Module 2 — prompting/communication).

## Le dataset (Module 3 — à créer réellement, fichier `.xlsx`)

- **Nom du fichier de départ :** `ventes-delta-distribution-brut.xlsx`
- **Client :** DELTA Distribution, grossiste-distributeur (agroalimentaire et biens de consommation courante), plusieurs régions au Sénégal.
- **Période :** 6 mois, **février à juillet 2026**.
- **Volume :** au moins 220 lignes.
- **Colonnes :** `date_vente`, `region` (Dakar, Thiès, Nord, Sud, Casamance), `canal_vente` (Grossiste, Détail, E-commerce), `categorie_produit`, `produit`, `quantite`, `prix_unitaire_fcfa`, `montant_total_fcfa`, `commercial`.
- **Défauts volontaires (obligatoires, pour l'exercice de nettoyage) :**
  - Une dizaine de lignes strictement dupliquées.
  - Des valeurs manquantes sur `quantite` ou `prix_unitaire_fcfa` sur ~15 lignes.
  - Incohérences de format sur `region` (ex. "Nord", "nord", "NORD ", "Nord " avec espace).
  - Dates dans deux formats mélangés (`JJ/MM/AAAA` et `AAAA-MM-JJ`).
  - 2-3 valeurs aberrantes évidentes (ex. une quantité à 99999, un prix négatif).
  - **La région Nord doit montrer, une fois nettoyée, un taux de rupture/rétention de stock ou une chute de volume anormale sur au moins 3 mois distincts** — c'est la donnée qui confirme quantitativement le problème déjà évoqué au Module 1.
  - **Le canal E-commerce doit montrer une croissance rapide en volume relatif** (même s'il reste minoritaire en valeur totale) — c'est l'opportunité que Fatou recommandera.

## Les 3 insights attendus en sortie du Module 3 (verrouillés — le Module 4 et 5 les réutilisent tels quels)

1. **Rupture récurrente région Nord** : quantifier la perte de ventes estimée sur la période, confirmant les 3 ruptures mentionnées en réunion.
2. **E-commerce en forte croissance mais sous-exploité** : recommandation d'y allouer davantage de stock/budget.
3. **Retards de livraison concentrés sur un partenaire transport** (peut être déduit d'une colonne additionnelle optionnelle `delai_livraison_jours` si le dataset l'inclut, ou traité qualitativement en lien avec la région Nord).

## Le dashboard (Module 4 — réutilise le fichier `.xlsx` nettoyé du Module 3)

- Le projet Streamlit du Module 4 doit charger le fichier nettoyé produit en Module 3 (ou une copie identique fournie dans le dossier d'exercice du Module 4 pour rester autonome si suivi hors-ordre) et afficher au minimum : ventes mensuelles par région, alerte visuelle sur la région Nord, répartition par canal de vente.
- Le site vitrine du Module 4 (2ᵉ livrable optionnel) présente l'offre "conseil augmenté à l'IA" de Fatou — indépendant du dataset.

## L'automatisation (Module 5 — même client, même problème Nord)

- Le scénario Make de référence : génération automatique du rapport mensuel DELTA (déclencheur Google Sheets contenant les mêmes catégories de données que le dataset → résumé rédigé via un prompt/Skill Claude → envoi Notion ou WhatsApp), avec une alerte spécifique si la région Nord repasse sous un seuil de stock.

## Ce qui NE doit PAS changer entre les modules

- Le nom du client (DELTA Distribution), le secteur (distribution), la région à problème (Nord), le canal en croissance (E-commerce).
- Les noms de colonnes du dataset, réutilisés à l'identique dans le dashboard et dans le scénario d'automatisation.
- Le persona Fatou Diallo (voir `parcours-portfolio-participant.md`) reste la porteuse de ce fil du Module 1 au Module 6.
