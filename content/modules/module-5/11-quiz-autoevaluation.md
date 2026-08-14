# Quiz d'autoévaluation — Module 5

7 questions. Objectif : 6/7 minimum avant de passer au Module 6. Ce n'est pas un examen — si vous ratez une question, relisez la partie correspondante de `04-lecon-ecrite-complete.md` avant de continuer.

---

**1.** Vous refaites une tâche une fois par trimestre seulement, avec un risque d'erreur faible. Que recommande la grille fréquence × pénibilité × risque ?
- A) L'automatiser en priorité absolue
- B) Ne pas l'automatiser — la fréquence trop basse ne justifie pas l'effort de construction du scénario
- C) La transformer immédiatement en agent autonome
- D) L'ignorer complètement, elle n'a aucune valeur

**2.** Quelle est la différence essentielle entre un workflow et un agent autonome ?
- A) Un workflow utilise Claude, un agent autonome ne l'utilise jamais
- B) Un agent autonome se déclenche lui-même sur un événement, sans que vous cliquiez à chaque étape
- C) Il n'y a aucune différence, ce sont des synonymes
- D) Un agent autonome ne peut jamais utiliser plusieurs outils

**3.** Dans le scénario DELTA, pourquoi la branche Notion s'exécute-t-elle toujours, alors que la branche WhatsApp est conditionnelle ?
- A) Parce que Notion est plus fiable techniquement que WhatsApp
- B) Parce que l'archivage complet a de la valeur chaque semaine, alors que l'alerte ne doit être rare et ciblée pour rester utile
- C) Parce que WhatsApp Business coûte plus cher à utiliser
- D) Il n'y a en réalité aucune raison, c'est arbitraire

**4.** Vrai ou Faux : il faut activer un scénario Make ("ON") avant de le tester, pour vérifier qu'il fonctionne en conditions réelles.
- Vrai / Faux

**5.** Le scénario DELTA envoie une alerte WhatsApp à Fatou, jamais directement à DELTA. Quel garde-fou cette conception illustre-t-elle ?
- A) Le garde-fou sur les décisions sensibles
- B) Le garde-fou sur les données personnelles
- C) Le garde-fou sur la relation client finale — garder un humain avant toute communication externe
- D) Aucun garde-fou, c'est un choix technique sans rapport avec la sécurité

**6.** Vous concevez un scénario qui devrait, selon vous, déclencher automatiquement une commande de réassort fournisseur dès qu'un stock est bas. Que recommande ce module ?
- A) L'automatiser entièrement, c'est le but de l'automatisation
- B) Ne jamais automatiser une décision comme celle-ci, quelle que soit la fréquence — le système doit préparer/notifier, un humain décide
- C) L'automatiser uniquement le week-end
- D) Demander l'avis de WhatsApp Business avant de décider

**7.** Pourquoi teste-t-on un scénario à la fois sur un cas qui DOIT déclencher l'alerte et sur un cas qui NE DOIT PAS la déclencher ?
- A) Pour doubler inutilement le temps de test
- B) Parce qu'un filtre mal configuré peut soit ne jamais alerter, soit alerter à chaque exécution — un seul type de test ne détecte qu'une des deux erreurs possibles
- C) Parce que Make impose ces deux tests avant d'autoriser l'activation
- D) Ce n'est pas nécessaire si le premier test fonctionne

---

## Corrigé

1. **B** — une fréquence trop basse ne rentabilise jamais l'effort de construction d'un scénario ; un bon prompt ponctuel ou une Skill suffit largement.
2. **B** — c'est le critère qui définit l'autonomie réelle : l'événement déclenche, pas votre clic.
3. **B** — une alerte doit rester rare et ciblée pour continuer à être lue ; l'archivage, lui, gagne à être systématique.
4. **Faux** — c'est l'inverse : on teste manuellement (cas positif et cas négatif) AVANT d'activer, jamais après.
5. **C** — garder Fatou comme point de passage humain avant toute communication vers le client final DELTA.
6. **B** — une commande fournisseur est une décision aux conséquences financières directes : le système alerte, l'humain décide.
7. **B** — les deux types d'erreur (silence alors qu'il fallait alerter / alerte alors qu'il ne fallait pas) sont indépendants et doivent chacun être vérifiés.

**Si vous avez moins de 6/7 :** ce n'est pas un échec, c'est un signal — repérez la question ratée, relisez la partie correspondante, et refaites l'exercice guidé (`06-exercices/exercice-guide-depart.md`) avant de passer au Module 6.
