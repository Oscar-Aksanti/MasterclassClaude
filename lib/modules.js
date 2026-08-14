// Métadonnées statiques des 6 modules de la cohorte Claude AI Mastery 2.0.
// Dates et horaires réels : voir content/programme/planning-detaille-6-sessions.md
// (source : 01-programme/planning-detaille-6-sessions.md à la racine du dépôt).

export const MODULES = [
  {
    slug: "module-1",
    n: 1,
    dossierSource: "module-1-ecosysteme-claude",
    titre: "Maîtriser l'écosystème Claude : les fondations du Top 1 %",
    date: "2026-08-17",
    session: "Session 1 · Lundi 17 août 2026",
    livrable: "Un environnement Claude configuré.",
    portfolioSection: "Section 1 — Mon environnement Claude professionnel",
  },
  {
    slug: "module-2",
    n: 2,
    dossierSource: "module-2-prompting-expert",
    titre: "Communiquer avec Claude comme un expert : prompts, méthodes et workflows",
    date: "2026-08-19",
    session: "Session 2 · Mercredi 19 août 2026",
    livrable: "Une bibliothèque personnelle de 15+ prompts testés.",
    portfolioSection: "Section 2 — Ma bibliothèque de prompts",
  },
  {
    slug: "module-3",
    n: 3,
    dossierSource: "module-3-data-analyst",
    titre: "Transformer Claude en Data Analyst personnel",
    date: "2026-08-21",
    session: "Session 3 · Vendredi 21 août 2026",
    livrable: "Un projet complet d'analyse de données.",
    portfolioSection: "Section 3 — Mon projet d'analyse de données",
  },
  {
    slug: "module-4",
    n: 4,
    dossierSource: "module-4-solutions-numeriques",
    titre: "Créer des solutions numériques avec Claude Code",
    date: "2026-08-24",
    session: "Session 4 · Lundi 24 août 2026",
    livrable: "Une application ou un site fonctionnel et déployé, accessible par une URL.",
    portfolioSection: "Section 4 — Mon application ou site déployé",
  },
  {
    slug: "module-5",
    n: 5,
    dossierSource: "module-5-automatisation",
    titre: "Automatiser son travail avec l'intelligence artificielle",
    date: "2026-08-26",
    session: "Session 5 · Mercredi 26 août 2026",
    livrable: "Une automatisation réelle déployée.",
    portfolioSection: "Section 5 — Mon automatisation réelle",
  },
  {
    slug: "module-6",
    n: 6,
    dossierSource: "module-6-monetisation",
    titre: "Transformer ses compétences IA en opportunités",
    date: "2026-08-28",
    session: "Session 6 · Vendredi 28 août 2026 · Dernière session de la cohorte",
    livrable: "Une stratégie personnelle de valorisation à 90 jours + Portfolio IA Professionnel finalisé.",
    portfolioSection: "Section 6 — Ma stratégie de valorisation à 90 jours",
  },
];

export const HORAIRE = "18h00 – 19h45 GMT";

export function getModule(slug) {
  return MODULES.find((m) => m.slug === slug) || null;
}

export function getAdjacentModules(slug) {
  const idx = MODULES.findIndex((m) => m.slug === slug);
  return {
    prev: idx > 0 ? MODULES[idx - 1] : null,
    next: idx >= 0 && idx < MODULES.length - 1 ? MODULES[idx + 1] : null,
  };
}

// Calcule le statut d'un module par rapport à l'heure actuelle. Les horaires de
// cohorte sont fixés en GMT (=UTC), d'où le suffixe "Z" pour interpréter la date
// sans dépendre du fuseau horaire du navigateur.
export function statutModule(dateStr, now = new Date()) {
  const debut = new Date(`${dateStr}T18:00:00Z`);
  const fin = new Date(`${dateStr}T19:45:00Z`);
  if (now > fin) return "termine";
  if (now >= debut && now <= fin) return "en_direct";
  return "a_venir";
}

export const STATUT_LABELS = {
  termine: "Terminé",
  en_direct: "En direct maintenant",
  a_venir: "À venir",
};

export const STATUT_CLASSES = {
  termine: "bg-ink text-cream",
  en_direct: "bg-corail text-white",
  a_venir: "bg-ink/10 text-ink",
};

export function formaterDateModule(dateStr) {
  const d = new Date(`${dateStr}T18:00:00Z`);
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
