# Exercice guidé — Module 2 — Retravailler 3 mauvais prompts + analyser un document réel

**Durée : 30-35 minutes, en session (bloc pratique guidée).**

## Partie A — Diagnostiquer 3 mauvais prompts réels

Voici 3 prompts réels, du type que presque tout le monde a déjà tapé sans y réfléchir. Avant de les corriger, diagnostiquez ce qui leur manque.

| # | Mauvais prompt | Ce qu'il manque (cochez toutes les lettres C.L.A.R.T.É absentes) |
|---|---|---|
| 1 | "Fais-moi un rapport." | C · L · A · R · T · É |
| 2 | "Aide-moi avec Excel." | C · L · A · R · T · É |
| 3 | "Écris un email." | C · L · A · R · T · É |

Pour chacun, notez en une phrase : si vous receviez ce prompt sans jamais avoir parlé à la personne qui l'a écrit, que produiriez-vous ? Est-ce que ce résultat aurait une chance raisonnable de lui convenir du premier coup ?

## Partie B — Retravailler les 3 prompts avec C.L.A.R.T.É

Choisissez un contexte réel (le vôtre, ou celui de Fatou si vous manquez d'inspiration) et réécrivez chacun des 3 prompts ci-dessus en version complète C.L.A.R.T.É. Pour vous aider, voici les 6 questions à vous poser pour chacun :

- **Contexte :** qui suis-je, dans quelle situation ?
- **Livrable attendu :** quel type de document exact, quelle longueur ?
- **Audience :** à qui ce résultat est-il destiné ?
- **Restrictions :** quelles contraintes, quelles choses à ne jamais faire ?
- **Ton :** quel registre de langage ?
- **Exemples :** ai-je un exemple à donner (même imparfait) ?

| # | Votre version C.L.A.R.T.É | Testée dans Claude ? (oui/non) |
|---|---|---|
| 1 — "Fais-moi un rapport." | | |
| 2 — "Aide-moi avec Excel." | | |
| 3 — "Écris un email." | | |

**Testez chaque version retravaillée dans Claude.ai**, et comparez mentalement (ou par écrit) le résultat avec ce que vous auriez obtenu avec la version originale.

## Partie C — Transformer un des 3 en gabarit à variables

Reprenez celui des 3 prompts retravaillés que vous êtes le plus susceptible de réutiliser (probablement le n°3, l'email). Identifiez les 4 à 6 informations qui changeraient si vous l'utilisiez pour une autre personne ou une autre situation, et remplacez-les par des `{variables}` nommées clairement — voir la méthode complète dans `../04-lecon-ecrite-complete.md`, Partie 3, et le gabarit vierge dans `../09-ressources-telechargeables/gabarit-CLARTE.md`.

## Partie D — Analyser un document réel : le contrat DELTA

Ouvrez le fichier [`extrait-contrat-DELTA.md`](extrait-contrat-DELTA.md) — un extrait plausible de contrat de prestation entre Fatou Diallo et son client DELTA Distribution.

1. **Uploadez le document entier** dans un chat Claude.ai neuf (ou collez son contenu si vous n'avez pas d'upload disponible).
2. Utilisez ce prompt (adaptez-le si besoin) :
   > *"Voici un extrait de contrat de prestation entre moi et mon client. Extrais dans un tableau : (1) les montants et modalités de paiement, (2) les échéances et délais, (3) les clauses de résiliation, (4) les obligations de chaque partie. Si une information demandée n'apparaît pas dans le document, écris 'non précisé dans l'extrait' plutôt que de la déduire."*
3. **Vérifiez ligne par ligne** le tableau obtenu contre le document original. Notez toute erreur, approximation ou omission que vous repérez.
4. Répondez par écrit : quel est le montant mensuel des honoraires ? Quel est le délai de préavis en cas de résiliation ? Combien de temps dure l'obligation de confidentialité après la fin du contrat ?

Corrigé commenté (diagnostics, versions C.L.A.R.T.É modèles, et bon tableau d'extraction du contrat) : `exercice-guide-solution.md`.
