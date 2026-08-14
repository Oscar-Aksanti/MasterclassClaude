# Corrigé commenté — Exercice guidé Module 1

## Partie A — Réponses attendues

| # | Tâche | Outil | Pourquoi |
|---|---|---|---|
| 1 | Email de relance impayé | **Claude.ai (chat)** | Tâche ponctuelle, autonome, aucun fichier externe à manipuler — le chat suffit et reste le plus rapide |
| 2 | Nettoyer/analyser un Excel de 500 lignes | **Claude Code** | Implique un fichier réel à lire, transformer et produire un résultat (nettoyage + analyse) — Claude Code peut ouvrir, manipuler et sauvegarder le fichier |
| 3 | Construire un tableau de bord web | **Claude Code** | Il faut créer un livrable structuré (une application) avec plusieurs fichiers — c'est le cœur de ce que fait Claude Code (voir Module 4) |
| 4 | Comparer les tarifs de 5 concurrents en ligne | **Claude in Chrome** | La tâche nécessite de naviguer réellement sur des pages web externes, pas de traiter un fichier ou répondre à une question théorique |
| 5 | Suivre un projet client sur plusieurs semaines | **Claude Cowork** | Suivi dans la durée, plusieurs tâches et échéances à orchestrer — au-delà d'une session de travail unique |

**Piège fréquent à surveiller (côté animateur) :** beaucoup de participants répondent "Claude Code" à la tâche 1 par réflexe ("c'est plus puissant") — l'occasion de rappeler que le bon outil est le plus **simple** qui suffit, pas le plus impressionnant. Utiliser Claude Code pour un email ponctuel n'est pas une erreur fatale, mais c'est un détour inutile.

## Partie B — Points de vérification

- Si `claude --version` ne répond rien : vérifier que l'installation s'est terminée sans erreur affichée, relancer un nouveau terminal (parfois nécessaire pour que la commande soit reconnue).
- Une Skill "réussie" au sens de cet exercice n'a pas besoin d'être parfaite — elle doit juste produire un résultat **plus rapide et plus cohérent** que sans elle, dès le premier test.
- Un connecteur MCP "testé avec succès" veut dire : Claude a utilisé une information provenant réellement de l'outil connecté (pas une information qu'il aurait pu deviner ou déjà savoir).

## Partie C — Exemples de bonnes réponses (pour s'inspirer, pas pour copier)

> 1. Je refais chaque semaine un résumé de mes appels de suivi client.
> 2. Je veux toujours 3 sections : contexte de l'appel, décisions, prochaine action.
> 3. Je ne veux jamais qu'il invente une décision qui n'a pas été dite explicitement.

Cette réponse donne directement une Skill utilisable : "Crée une Skill nommée `resume-appel-client` qui structure mes notes d'appel en 3 sections : Contexte, Décisions, Prochaine action — sans jamais inventer une décision non explicite."
