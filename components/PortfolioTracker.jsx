"use client";

import { useEffect, useState } from "react";

const STOCKAGE_CLE = "cam2-portfolio-v1";
const SEUIL_CERTIFICATION = 4;

const SECTIONS = [
  {
    n: 1,
    titre: "Mon environnement Claude professionnel",
    module: 1,
    placeholder: "Ex. capture d'écran postée, Skill créée, serveur MCP connecté...",
  },
  {
    n: 2,
    titre: "Ma bibliothèque de prompts",
    module: 2,
    placeholder: "Ex. lien vers votre document de 15+ prompts C.L.A.R.T.É...",
  },
  {
    n: 3,
    titre: "Mon projet d'analyse de données",
    module: 3,
    placeholder: "Ex. lien du dashboard, insights chiffrés retenus...",
  },
  {
    n: 4,
    titre: "Mon application ou site déployé",
    module: 4,
    placeholder: "Ex. URL de l'application ou du site déployé...",
  },
  {
    n: 5,
    titre: "Mon automatisation réelle",
    module: 5,
    placeholder: "Ex. nom du scénario Make, outils intégrés...",
  },
  {
    n: 6,
    titre: "Ma stratégie de valorisation à 90 jours",
    module: 6,
    placeholder: "Ex. positionnement choisi, 3 actions datées...",
  },
];

function chargerEtat() {
  if (typeof window === "undefined") return { sections: {}, avant: "", apres: "" };
  try {
    const raw = window.localStorage.getItem(STOCKAGE_CLE);
    return raw ? JSON.parse(raw) : { sections: {}, avant: "", apres: "" };
  } catch {
    return { sections: {}, avant: "", apres: "" };
  }
}

export default function PortfolioTracker() {
  const [etat, setEtat] = useState({ sections: {}, avant: "", apres: "" });
  const [pret, setPret] = useState(false);

  useEffect(() => {
    // Lecture ponctuelle du localStorage au montage (source externe au rendu React) :
    // nécessaire ici car le contenu dépend de l'appareil/navigateur du visiteur et ne
    // peut donc pas être connu pendant le rendu serveur.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEtat(chargerEtat());
    setPret(true);
  }, []);

  useEffect(() => {
    if (!pret) return;
    window.localStorage.setItem(STOCKAGE_CLE, JSON.stringify(etat));
  }, [etat, pret]);

  const faites = SECTIONS.filter((s) => etat.sections[s.n]?.fait).length;
  const total = SECTIONS.length;
  const pct = Math.round((faites / total) * 100);
  const seuilAtteint = faites >= SEUIL_CERTIFICATION;

  function toggleSection(n, fait) {
    setEtat((prev) => ({
      ...prev,
      sections: { ...prev.sections, [n]: { ...(prev.sections[n] ?? { note: "" }), fait } },
    }));
  }

  function noterSection(n, note) {
    setEtat((prev) => ({
      ...prev,
      sections: { ...prev.sections, [n]: { ...(prev.sections[n] ?? { fait: false }), note } },
    }));
  }

  return (
    <div>
      <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-3 text-sm text-ink/70">
          {seuilAtteint
            ? `${faites}/${total} sections complétées — seuil de certification atteint.`
            : `${faites}/${total} sections complétées — ${SEUIL_CERTIFICATION - faites} de plus pour atteindre le seuil de certification.`}
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-bold text-ink" htmlFor="champ-avant">
            0. Avant la formation
          </label>
          <textarea
            id="champ-avant"
            value={etat.avant}
            onChange={(e) => setEtat((prev) => ({ ...prev, avant: e.target.value }))}
            placeholder="Votre situation avant Claude AI Mastery, en 1-2 phrases..."
            className="min-h-[80px] w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-bold text-ink" htmlFor="champ-apres">
            0. Après la formation
          </label>
          <textarea
            id="champ-apres"
            value={etat.apres}
            onChange={(e) => setEtat((prev) => ({ ...prev, apres: e.target.value }))}
            placeholder="Ce qui a concrètement changé, en 1-2 phrases..."
            className="min-h-[80px] w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm"
          />
        </div>
      </div>

      <div className="space-y-4">
        {SECTIONS.map((s) => {
          const sectionEtat = etat.sections[s.n] ?? { fait: false, note: "" };
          return (
            <div key={s.n} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
              <input
                type="checkbox"
                checked={!!sectionEtat.fait}
                onChange={(e) => toggleSection(s.n, e.target.checked)}
                className="mt-1 h-6 w-6 shrink-0 accent-corail"
                aria-label={`Section ${s.n} complétée`}
              />
              <div className="flex-1">
                <h3 className="font-titres text-base font-bold text-ink">
                  Section {s.n} — {s.titre}{" "}
                  <span className="font-normal text-ink/50">(Module {s.module})</span>
                </h3>
                <textarea
                  value={sectionEtat.note ?? ""}
                  onChange={(e) => noterSection(s.n, e.target.value)}
                  placeholder={s.placeholder}
                  className="mt-2 min-h-[48px] w-full rounded-2xl border border-ink/15 bg-cream px-3 py-2 text-sm"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl bg-ink px-6 py-5 text-white sm:px-8">
        <h3 className="mb-2 font-titres text-base font-bold text-corail">Seuil de certification</h3>
        <p className="text-sm leading-relaxed text-white/90">
          Au moins <strong className="text-white">4 sections sur 6</strong> complétées suffisent pour
          demander votre certification de participation. Ces informations restent uniquement sur cet
          appareil et ce navigateur — aucun compte, aucun serveur.
        </p>
      </div>
    </div>
  );
}
