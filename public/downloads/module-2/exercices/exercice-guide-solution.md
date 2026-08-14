# Corrigé commenté — Exercice guidé Module 2

## Partie A — Diagnostic attendu

| # | Mauvais prompt | Ce qu'il manque | Résultat probable sans correction |
|---|---|---|---|
| 1 | "Fais-moi un rapport." | Contexte, Livrable attendu, Audience, Restrictions, Ton, Exemples — **toutes les lettres manquent** | Un texte générique appelé "rapport", sans savoir sur quoi, pour qui, ni quelle longueur — quasiment inutilisable tel quel |
| 2 | "Aide-moi avec Excel." | Contexte (quel fichier, quel problème), Livrable attendu (une formule ? une analyse ? un nettoyage ?), Restrictions, Exemples | Claude va probablement poser des questions en retour, ou proposer une aide générique sur Excel sans lien avec le vrai besoin |
| 3 | "Écris un email." | Contexte, Audience, Restrictions (longueur, ton), Exemples | Un email plausible mais générique, qui ne correspond presque jamais au ton ou à la relation réelle avec le destinataire |

**Piège fréquent à surveiller (côté animateur) :** certains participants pensent que le prompt 2 ("Aide-moi avec Excel") est "juste incomplet techniquement" alors que le vrai problème est identique aux deux autres — l'absence de Livrable attendu précis. Rappeler que C.L.A.R.T.É s'applique aussi bien à une demande technique qu'à une demande de rédaction.

## Partie B — Exemples de versions C.L.A.R.T.É modèles

**Prompt 1 — "Fais-moi un rapport" → version retravaillée (cas Fatou) :**

> *"Je suis consultante indépendante en gestion de projets, j'accompagne le client DELTA Distribution (Contexte). Rédige un rapport mensuel d'activité d'une page maximum, structuré en 3 sections : Faits marquants du mois, Indicateurs clés (ventes, stock), Recommandations pour le mois suivant (Livrable attendu). Ce rapport est destiné à Ibrahima Sow, Directeur Général de DELTA, qui n'a que 10 minutes à y consacrer (Audience). Ne jamais inventer un chiffre non fourni — écrire 'donnée non disponible' si besoin ; rester sous 400 mots (Restrictions). Ton factuel et direct, orienté décision plutôt que narratif (Ton). Voici le rapport du mois dernier pour référence de structure : {rapport précédent} (Exemples)."*

**Prompt 2 — "Aide-moi avec Excel" → version retravaillée :**

> *"J'ai un fichier Excel de suivi de stock avec des colonnes Date, Entrepôt, Produit, Quantité (Contexte). Explique-moi comment créer un tableau croisé dynamique qui montre le total de ruptures de stock par entrepôt et par mois (Livrable attendu). C'est pour moi-même, pas pour présenter à un client — tu peux être technique (Audience). Donne les étapes clic par clic, pas juste la formule finale (Restrictions). Ton pédagogique, comme si tu m'expliquais pour la première fois (Ton)."*

**Prompt 3 — "Écris un email" → version retravaillée :** voir l'exemple complet de relance de facture DELTA dans `../04-lecon-ecrite-complete.md`, Partie 1 — c'est le cas de référence de ce module, à ne pas reproduire mot pour mot mais à utiliser comme gabarit de raisonnement.

**Point de vérification :** une version C.L.A.R.T.É "réussie" au sens de cet exercice n'a pas besoin d'être longue — elle doit couvrir les 6 lettres pertinentes pour le cas (certaines tâches très simples n'ont par exemple pas besoin d'Exemples), et produire un résultat exploitable sans reformulation au premier essai.

## Partie C — Points de vérification du gabarit

- Un bon gabarit nomme ses variables clairement (`{nom_client}`, pas `{x}`) — si vous devez vous souvenir de ce que représente une variable, elle est mal nommée.
- Un gabarit qui ne fonctionne que sur son cas d'origine n'est pas encore un vrai gabarit : testez-le systématiquement sur un deuxième cas différent avant de le considérer comme terminé.

## Partie D — Corrigé de l'analyse du contrat DELTA

Tableau attendu (à comparer avec celui produit par Claude) :

| Catégorie | Détail |
|---|---|
| **Montants et paiement** | Honoraires mensuels forfaitaires : 450 000 FCFA HT, facturés en début de mois. Frais de déplacement : 25 000 FCFA/déplacement, plafonné à 2/mois sans accord écrit préalable. Paiement à 15 jours calendaires, pénalité de 1,5 %/mois de retard sans mise en demeure préalable. |
| **Échéances et délais** | Tableau de suivi hebdomadaire : sous 15 jours après démarrage. Compte-rendu mensuel : le 5 de chaque mois. Point trimestriel : 2ᵉ semaine de chaque trimestre. Bilan de fin de mission : 10 jours avant le terme. Alerte de risque de retard : sous 48h. |
| **Clauses de résiliation** | Préavis de 30 jours par écrit, à tout moment, pour les deux parties. Résiliation sans préavis possible en cas de manquement grave (ex. impayé > 60 jours) après mise en demeure de 15 jours restée sans effet. Si le Client résilie sans manquement de la Prestataire, le mois en cours reste dû au prorata. |
| **Obligations des parties** | Prestataire : diligence, confidentialité pendant le contrat + 24 mois après, alerte écrite à 48h en cas de risque de retard. Client : fournir les données nécessaires, désigner un interlocuteur unique, payer dans les délais. |

**Réponses attendues aux questions de la Partie D :**
- Montant mensuel des honoraires : **450 000 FCFA HT** (hors frais de déplacement).
- Délai de préavis en cas de résiliation : **30 jours**, par écrit.
- Durée de l'obligation de confidentialité après la fin du contrat : **24 mois**.

**Ce qu'un bon diagnostic doit repérer si Claude se trompe ou approxime :** un montant arrondi (ex. "environ 450 000" au lieu du chiffre exact), une confusion entre le préavis de résiliation ordinaire (30 jours) et le délai de mise en demeure en cas de manquement grave (15 jours) — ce sont deux délais différents dans deux situations différentes, un point de vigilance classique sur ce type de document.
