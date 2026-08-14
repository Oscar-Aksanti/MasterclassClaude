# Quiz d'autoévaluation — Module 4

7 questions. Objectif : 6/7 minimum avant de passer au Module 5. Ce n'est pas un examen — si vous ratez une question, relisez la partie correspondante de `04-lecon-ecrite-complete.md` avant de continuer.

---

**1.** Vous demandez à Claude Code : *"Fais-moi un dashboard de ventes."* Le résultat
ne correspond pas à ce que vous aviez en tête. Quelle est la cause la plus probable ?
- A) Claude Code n'est pas capable de construire des dashboards
- B) La description ne donnait ni le contexte, ni les données, ni le résultat attendu, ni les contraintes
- C) Il fallait utiliser Claude.ai à la place
- D) Streamlit ne fonctionne qu'avec des données financières

**2.** Votre dashboard Streamlit affiche `KeyError: 'montant_total'` au lancement.
Quelle est la première chose à faire ?
- A) Demander à Claude Code de réécrire tout le fichier `app.py`
- B) Lire le message d'erreur en entier et demander un diagnostic avant toute correction
- C) Supprimer le fichier de données et en créer un nouveau
- D) Redémarrer l'ordinateur

**3.** Vrai ou Faux : une application qui s'affiche sans message d'erreur est
automatiquement correcte sur le fond.
- Vrai / Faux

**4.** Quel type de bug provoque typiquement un message `KeyError` en Python/pandas ?
- A) Un problème de connexion internet
- B) Un nom de colonne utilisé dans le code qui ne correspond pas au nom réel dans le fichier de données
- C) Un fichier de données trop volumineux
- D) Une erreur d'installation de Streamlit

**5.** Vous avez fini de construire votre dashboard, il fonctionne parfaitement sur
votre ordinateur. Pouvez-vous considérer le livrable du Module 4 comme terminé ?
- A) Oui, l'objectif est que le code fonctionne, peu importe où
- B) Non, le livrable exige un déploiement — un lien accessible par n'importe qui, testé en navigation privée
- C) Oui, à condition d'avoir pris une capture d'écran
- D) Non, il faut obligatoirement utiliser Vercel et aucune autre plateforme

**6.** Pour déployer un dashboard Streamlit gratuitement, quelle plateforme est
recommandée dans ce module ?
- A) Netlify
- B) GitHub Pages
- C) Streamlit Community Cloud
- D) Aucune plateforme gratuite n'existe pour Streamlit

**7.** Une fois votre projet déployé, il affiche une erreur en ligne alors qu'il
fonctionnait parfaitement en local. Quelle est la cause la plus fréquente ?
- A) Le déploiement gratuit est volontairement limité pour forcer un abonnement payant
- B) Un chemin de fichier absolu propre à votre machine, ou une librairie manquante dans requirements.txt
- C) Streamlit Community Cloud est en maintenance
- D) Il faut recommencer tout le projet depuis zéro

---

## Corrigé

1. **B** — sans contexte, données, résultat attendu et contraintes, Claude Code doit deviner, et le résultat s'écarte souvent de l'intention réelle.
2. **B** — lire l'erreur en entier et demander un diagnostic avant de corriger, c'est le cœur de la méthode de debugging assisté vue dans ce module.
3. **Faux** — l'absence d'erreur affichée ne garantit pas que les chiffres ou les tendances affichés sont corrects ; il faut vérifier le fond séparément.
4. **B** — c'est la famille de bug la plus fréquente pour un débutant : un nom de colonne incohérent entre le code et le fichier de données réel.
5. **B** — le livrable du module est explicitement "une application ou un site fonctionnel ET déployé, accessible par une URL" — un projet qui ne tourne qu'en local n'est pas encore ce livrable.
6. **C** — Streamlit Community Cloud est la plateforme de référence pour déployer gratuitement un dashboard Streamlit ; Netlify/Vercel/GitHub Pages sont recommandés pour des sites HTML/CSS statiques, pas pour une application Streamlit.
7. **B** — un chemin de fichier absolu ou une librairie oubliée dans `requirements.txt` sont les deux causes les plus fréquentes d'un projet qui fonctionne en local mais échoue en ligne.

**Si vous avez moins de 6/7 :** ce n'est pas un échec, c'est un signal — repérez la
question ratée, relisez la partie correspondante, et refaites l'exercice guidé
(`06-exercices/exercice-guide-depart.md`) avant de passer au Module 5.
