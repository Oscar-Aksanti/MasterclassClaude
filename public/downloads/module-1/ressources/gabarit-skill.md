# Gabarit — Créer une Skill (à copier-coller)

Vous n'avez pas besoin d'écrire ce fichier vous-même caractère par caractère : décrivez votre méthode à Claude Code avec le prompt ci-dessous, il générera le fichier `SKILL.md` pour vous. Ce gabarit sert à préparer vos réponses avant de vous lancer, et à comprendre ce que vous obtiendrez.

## Étape 1 — Préparez vos réponses

1. **Nom de la Skill** (court, sans espace, ex. `resume-reunion-client`) : ______________________
2. **Tâche répétitive concernée** (une phrase) : ______________________
3. **Structure exacte attendue en sortie** (les sections, dans l'ordre) :
   - ______________________
   - ______________________
   - ______________________
4. **Erreur à ne jamais laisser passer** (ex. inventer une information absente) : ______________________

## Étape 2 — Le prompt à donner à Claude Code

```
Aide-moi à créer une Skill nommée `{nom_skill}`.
Elle doit : {tâche répétitive concernée}.
Le résultat doit toujours contenir exactement ces sections, dans cet ordre :
{liste des sections}.
Elle ne doit jamais : {erreur à éviter}.
```

## À quoi ressemble le résultat (référence)

```markdown
---
name: resume-reunion-client
description: Transformer des notes brutes de réunion client en compte-rendu structuré (décisions, actions, échéances)
---

Quand on te donne des notes de réunion (même désordonnées), produis un compte-rendu
avec exactement ces 4 sections :

1. **Décisions prises**
2. **Actions à faire** (qui, quoi, pour quand)
3. **Points de blocage / risques**
4. **Prochaine étape**

Reste fidèle aux notes fournies : n'invente jamais une décision ou une échéance qui
n'y figure pas. Si une information manque (ex. pas de date), écris "à préciser"
plutôt que de deviner.
```

## Étape 3 — Testez avant de valider

Donnez à Claude un exemple réel (pas un exemple inventé) de la tâche concernée, et vérifiez que le résultat respecte bien votre structure. Si ce n'est pas le cas, précisez la règle manquante et demandez à Claude Code de mettre à jour le fichier — pas besoin de tout recommencer.
