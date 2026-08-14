# Exercice guidé — Module 5 — Construire votre premier scénario Make

**Durée : 30-35 minutes, en session (bloc pratique guidée).** Vous allez construire une version simplifiée du scénario DELTA sur un cas que vous pouvez tester immédiatement, avant de le transposer à votre propre tâche dans le défi en autonomie.

## Point de départ

Vous avez déjà (ou vous créez maintenant) :
- Un compte Make gratuit, connecté.
- Une feuille Google Sheets nommée `Suivi hebdo DELTA - Exercice`, avec exactement ces colonnes (copiez cette structure) :

| semaine_debut | region | stock_disponible_unites | seuil_alerte_unites | ventes_semaine_fcfa | commentaire_terrain |
|---|---|---|---|---|---|
| 2026-08-17 | Nord | 280 | 300 | 4 600 000 | À compléter par vous en direct |

- Une base Notion (ou, si vous n'avez pas Notion, un second onglet Google Sheets en remplacement — voir note en fin de fichier) nommée `Rapports hebdo DELTA - Exercice`, avec les colonnes : Semaine, Région, Ventes, Stock, Synthèse, Statut.

## Étape 1 — Le déclencheur (5 min)

1. Créez un nouveau scénario dans Make.
2. Ajoutez le module **Google Sheets → Watch Rows**, connectez votre compte, sélectionnez la feuille `Suivi hebdo DELTA - Exercice`.
3. Vérifiez que Make détecte bien les 6 colonnes.

**Question de contrôle :** pourquoi ce déclencheur précis (une nouvelle ligne) plutôt qu'un déclencheur programmé (ex. "tous les lundis à 9h") ? *(Réponse en fin de fichier, dans la solution.)*

## Étape 2 — Le traitement Claude (10 min)

1. Ajoutez un module Claude (natif si disponible, sinon HTTP générique vers l'API).
2. Construisez le prompt en reprenant le gabarit du prompt AUTO-003 (`08-prompts-du-module.md`), avec le mapping des 6 champs de la feuille.
3. Exécutez une fois manuellement et lisez le résultat généré.

**Votre mission :** ajustez le prompt si le résultat vous semble trop long, trop vague, ou s'il invente une information. Notez ce que vous avez changé.

## Étape 3 — Le routeur et la condition (10 min)

1. Ajoutez un routeur après le module Claude.
2. Branche A : ajoutez le module Notion (ou Google Sheets) qui archive systématiquement la ligne + la synthèse.
3. Branche B : ajoutez un filtre avec la condition `region = "Nord" ET stock_disponible_unites < seuil_alerte_unites`, puis un module de notification (WhatsApp Business si vous y avez accès, sinon un email via Gmail en remplacement — voir note ci-dessous).

## Étape 4 — Tester avant d'activer (5-10 min)

1. Modifiez la ligne de test pour qu'elle déclenche la condition (région Nord, stock sous le seuil) : exécutez manuellement, vérifiez les deux branches.
2. Modifiez la ligne pour qu'elle NE déclenche PAS la condition (autre région, ou stock au-dessus du seuil) : exécutez manuellement, vérifiez qu'aucune notification ne part.
3. Une fois les deux tests validés : activez le scénario (statut "ON").

## Si vous n'avez pas accès à Notion ou WhatsApp Business

Ce n'est pas bloquant : remplacez Notion par un second onglet Google Sheets (mêmes colonnes), et remplacez WhatsApp Business par un envoi d'email via Gmail. La logique du scénario (déclencheur → traitement Claude → routeur → actions conditionnelles) reste rigoureusement identique — seuls les modules d'action changent. C'est d'ailleurs un bon exercice de transposition avant le défi en autonomie.

## Corrigé commenté

Voir `exercice-guide-solution.md` pour la réponse à la question de contrôle et les pièges fréquents à cette étape.
