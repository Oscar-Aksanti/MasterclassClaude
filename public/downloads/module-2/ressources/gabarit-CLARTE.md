# Gabarit — Méthode C.L.A.R.T.É (à copier-coller)

Copiez ce modèle avant chaque nouveau prompt important, remplissez chaque ligne pertinente (toutes ne sont pas obligatoires à chaque fois), puis assemblez le tout en un seul message fluide à envoyer à Claude. Voir la méthode complète et un exemple avant/après dans `../04-lecon-ecrite-complete.md`, Partie 1.

## Étape 1 — Préparez vos 6 réponses

```markdown
## C — Contexte
Qui suis-je, dans quelle situation ? _____________________________

## L — Livrable attendu
Quel type de document exact, quelle longueur, quel format ? _____________________________

## A — Audience
À qui ce résultat est-il destiné ? _____________________________

## R — Restrictions
Quelles contraintes ? Qu'est-ce qu'il ne faut jamais faire ? _____________________________

## T — Ton
Quel registre de langage ? _____________________________

## É — Exemples
Ai-je un exemple (ou contre-exemple) à donner ? _____________________________
```

## Étape 2 — Assemblez en un seul prompt

Une fois les 6 lignes remplies, réunissez-les en un seul message naturel — pas besoin de recopier les lettres C.L.A.R.T.É dans le prompt final, elles servent seulement de checklist pour ne rien oublier :

```
{Contexte}. {Livrable attendu}. {Audience}. {Restrictions}. Ton : {Ton}. {Exemples si disponibles}.
```

## Étape 3 — Transformez en gabarit si vous allez le réutiliser

Si ce prompt sert à une tâche que vous refaites régulièrement (relance client, compte-rendu, proposition), identifiez les informations qui changeraient d'un cas à l'autre et remplacez-les par des `{variables}` nommées clairement. Voir la méthode complète dans `../04-lecon-ecrite-complete.md`, Partie 3.

## Rappel — les pièges les plus fréquents

- **Sauter l'Audience** parce que le Livrable semble déjà clair : c'est souvent ce qui change le plus le ton du résultat obtenu.
- **Confondre Restrictions et Ton** : une Restriction est une règle factuelle ("ne jamais inventer un chiffre absent"), le Ton est un registre de langage ("direct", "chaleureux").
- **Vouloir un prompt parfait en un seul essai** : sur une mission complexe, mieux vaut un brief C.L.A.R.T.É suivi d'un brouillon, d'une critique, puis d'une version finale (voir `../04-lecon-ecrite-complete.md`, Partie 4) qu'un unique message trop chargé.

## Exemple rempli (référence — cas Fatou, relance de facture)

```markdown
## C — Contexte
Je suis consultante indépendante en gestion de projets.

## L — Livrable attendu
Un email de relance de facture impayée à mon client DELTA Distribution : 850 000 FCFA,
3 semaines de retard, 2 relances déjà envoyées sans réponse.

## A — Audience
Awa Ndiaye, ma contact habituelle chez DELTA, relation cordiale depuis 2 ans.

## R — Restrictions
Maximum 120 mots. Mentionner le montant et le retard. Proposer un appel.
Jamais de mention de pénalité ou de menace juridique à ce stade.

## T — Ton
Direct et professionnel, jamais froid.

## É — Exemples
Reprendre le style de mon email de relance précédent à un autre client (fourni en pièce jointe).
```
