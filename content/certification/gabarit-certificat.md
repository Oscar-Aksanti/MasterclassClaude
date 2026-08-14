# Gabarit du certificat de participation

> Décision de calendrier : le **design** du certificat est produit ici en Phase 1 (gabarit visuel dérivé de la charte, comme les slides et le workbook). Les **critères d'obtention** (qui a droit à quoi) restent définis en Phase 8 — voir [`criteres-obtention.md`](criteres-obtention.md). Ce fichier ne préjuge pas des critères, il fournit le rendu final une fois qu'un participant y a droit.

Format paysage, une page, A4 (1123×794px à 96dpi ≈ 297×210mm). Dérivé de [`../00-marque-et-design/charte-graphique.md`](../00-marque-et-design/charte-graphique.md), validé visuellement dans le navigateur avant intégration.

## 1. Composition

- **Grille technique en filigrane** + croix de repérage aux 4 coins (signature de l'affiche officielle), très subtile.
- **Cadre violet** à coins très arrondis, en léger retrait des bords.
- **Badge circulaire corail** en haut à droite : nombre de modules validés sur 6 (`{{NB_MODULES_VALIDES}}/6`) — reste correct même pour une certification partielle (4/6 minimum, voir critères).
- **Bandeau noir "CERTIFICAT DE PARTICIPATION"** + nom de marque en dessous.
- **Titre en violet signature** ("Certificat de réussite").
- **Nom du participant** en très grand, souligné d'un trait corail.
- **Paragraphe de validation** rappelant les 6 livrables du programme.
- **Puces des 6 modules** en petites pastilles blanches à bordure fine — permet de visualiser en un coup d'œil quels modules sont couverts.
- **Bloc signatures** : formateur + date de délivrance, en bas, séparés par une ligne fine.

## 2. Gabarit HTML/CSS prêt à l'emploi

```html
<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Certificat — {{PARTICIPANT_NOM}}</title>
<style>
  :root {
    --bg-cream: #FDF3F0;
    --ink: #1A1323;
    --violet: #7530AA;
    --indigo: #691FD2;
    --corail: #E06840;
    --white: #FFFFFF;
  }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, Helvetica, sans-serif; }
  .cert {
    width: 1123px; height: 794px; background: var(--bg-cream); position: relative; overflow: hidden;
    background-image:
      linear-gradient(0deg, transparent 63px, rgba(26,19,35,.05) 64px),
      linear-gradient(90deg, transparent 63px, rgba(26,19,35,.05) 64px);
    background-size: 64px 64px;
  }
  .tick { position: absolute; color: #E3D0C7; font-size: 20px; }
  .frame { position: absolute; inset: 28px; border: 2px solid var(--violet); border-radius: 28px; }
  .inner { position: absolute; inset: 0; padding: 64px 80px; text-align: center; }
  .kicker {
    display: inline-block; background: var(--ink); color: var(--white); font-weight: 800;
    font-size: 12px; letter-spacing: .12em; padding: 8px 22px; border-radius: 999px;
  }
  h1.brand { margin: 22px 0 0; font-size: 20px; font-weight: 800; color: var(--ink); letter-spacing: .02em; }
  .cert-title { margin: 26px 0 6px; font-size: 42px; font-weight: 800; color: var(--violet); }
  .cert-sub { margin: 0 0 30px; font-size: 14px; color: var(--ink); opacity: .75; }
  .awarded-to { font-size: 13px; letter-spacing: .1em; color: var(--corail); font-weight: 800; text-transform: uppercase; }
  .participant-name {
    font-size: 40px; font-weight: 800; color: var(--ink); margin: 8px 0 26px;
    border-bottom: 3px solid var(--corail); display: inline-block; padding-bottom: 10px; min-width: 480px;
  }
  .desc { max-width: 620px; margin: 0 auto 26px; font-size: 14.5px; line-height: 1.6; color: var(--ink); }
  .modules { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin: 0 auto 34px; max-width: 780px; }
  .modules span {
    background: var(--white); border: 1.5px solid #E9D9D0; color: var(--ink);
    font-size: 11.5px; font-weight: 700; padding: 7px 14px; border-radius: 999px;
  }
  .modules span.non-valide { opacity: .35; text-decoration: line-through; }
  .sign-row { display: flex; justify-content: center; gap: 90px; margin-top: 18px; }
  .sign { text-align: center; }
  .sign .line { width: 200px; border-top: 1.5px solid var(--ink); margin-bottom: 8px; }
  .sign .role { font-size: 11px; color: var(--ink); opacity: .7; }
  .sign .who { font-size: 13px; font-weight: 800; color: var(--ink); }
  .badge {
    position: absolute; top: 56px; right: 76px; width: 92px; height: 92px; border-radius: 50%;
    background: var(--corail); color: var(--white); display: flex; flex-direction: column;
    align-items: center; justify-content: center; font-weight: 800; text-align: center; line-height: 1.1;
  }
  .badge .n { font-size: 22px; }
  .badge .t { font-size: 9px; letter-spacing: .05em; }
</style>
</head>
<body>
  <div class="cert">
    <div class="tick" style="top:44px; left:44px;">+</div>
    <div class="tick" style="top:44px; right:44px;">+</div>
    <div class="tick" style="bottom:44px; left:44px;">+</div>
    <div class="tick" style="bottom:44px; right:44px;">+</div>
    <div class="frame"></div>
    <div class="badge"><span class="n">{{NB_MODULES_VALIDES}}/6</span><span class="t">MODULES</span></div>
    <div class="inner">
      <span class="kicker">CERTIFICAT DE PARTICIPATION</span>
      <h1 class="brand">CLAUDE AI MASTERY 2.0</h1>
      <div class="cert-title">Certificat de réussite</div>
      <p class="cert-sub">Cohorte du {{DATE_DEBUT}} au {{DATE_FIN}} — formations4data</p>

      <div class="awarded-to">Décerné à</div>
      <div class="participant-name">{{PARTICIPANT_NOM}}</div>

      <p class="desc">
        pour avoir suivi avec succès les modules de la formation Claude AI Mastery 2.0 et validé
        les livrables pratiques associés : environnement Claude configuré, bibliothèque de prompts,
        projet d'analyse de données, application déployée, automatisation réelle et stratégie de valorisation.
      </p>

      <!-- Ajouter class="non-valide" sur les modules non complétés si certification partielle (4/6 minimum) -->
      <div class="modules">
        <span>1 · Écosystème Claude</span>
        <span>2 · Prompting expert</span>
        <span>3 · Data Analyst</span>
        <span>4 · Solutions numériques</span>
        <span>5 · Automatisation</span>
        <span>6 · Monétisation</span>
      </div>

      <div class="sign-row">
        <div class="sign">
          <div class="line"></div>
          <div class="who">{{FORMATEUR_NOM}}</div>
          <div class="role">Formateur — Claude AI Mastery 2.0</div>
        </div>
        <div class="sign">
          <div class="line"></div>
          <div class="who">{{DATE_DELIVRANCE}}</div>
          <div class="role">Date de délivrance</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## 3. Règles d'usage

- Toutes les valeurs `{{ENTRE_ACCOLADES}}` sont à remplacer au moment de la délivrance réelle (nom du participant, dates, formateur, nombre de modules validés).
- Pour une certification partielle (voir critères d'obtention), ajouter `class="non-valide"` sur les `<span>` des modules non complétés — ils apparaissent alors grisés et barrés, sans supprimer d'information.
- Ne jamais changer les couleurs, le rayon des coins, ni la police — cohérence obligatoire avec les slides et le workbook.
- Export final : impression navigateur → PDF, format paysage, sans marges, à l'échelle 100 %.

## 4. Validation

Gabarit prévisualisé et validé visuellement dans le navigateur (grille filigrane subtile, hiérarchie claire, badge modules lisible, aucun débordement) avant intégration ici.
