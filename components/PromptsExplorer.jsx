"use client";

import { useMemo, useState } from "react";

function normaliser(s) {
  return (s || "").toString().toLowerCase();
}

export default function PromptsExplorer({ prompts }) {
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("");
  const [niveau, setNiveau] = useState("");
  const [module, setModule] = useState("");
  const [copieId, setCopieId] = useState(null);

  const categories = useMemo(
    () => Array.from(new Set(prompts.map((p) => p.categorie))).sort(),
    [prompts]
  );
  const niveaux = useMemo(() => Array.from(new Set(prompts.map((p) => p.niveau))).sort(), [prompts]);
  const modules = useMemo(
    () => Array.from(new Set(prompts.map((p) => p.module_lie))).sort((a, b) => a - b),
    [prompts]
  );

  const resultats = useMemo(() => {
    const q = normaliser(recherche);
    return prompts.filter((p) => {
      if (categorie && p.categorie !== categorie) return false;
      if (niveau && p.niveau !== niveau) return false;
      if (module && String(p.module_lie) !== module) return false;
      if (!q) return true;
      const champs = [p.id, p.titre, p.contexte_usage, p.prompt_template, p.exemple_rempli, p.resultat_attendu, p.categorie];
      return champs.some((c) => normaliser(c).includes(q));
    });
  }, [prompts, recherche, categorie, niveau, module]);

  async function copier(texte, id) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(texte);
      } else {
        const ta = document.createElement("textarea");
        ta.value = texte;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopieId(id);
      setTimeout(() => setCopieId((cur) => (cur === id ? null : cur)), 1500);
    } catch {
      // silencieux : la copie manuelle reste possible en sélectionnant le texte affiché
    }
  }

  return (
    <div>
      <div className="sticky top-[57px] z-20 -mx-4 mb-6 flex flex-wrap gap-3 bg-cream/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
        <input
          type="search"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="Rechercher un mot-clé (ex. rapport, dashboard, email, LinkedIn...)"
          className="min-w-[240px] flex-1 rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm"
        />
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm"
        >
          <option value="">Toutes les catégories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={niveau}
          onChange={(e) => setNiveau(e.target.value)}
          className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm"
        >
          <option value="">Tous les niveaux</option>
          {niveaux.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <select
          value={module}
          onChange={(e) => setModule(e.target.value)}
          className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm"
        >
          <option value="">Tous les modules</option>
          {modules.map((m) => (
            <option key={m} value={String(m)}>
              Module {m}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-4 text-sm text-ink/50">
        {resultats.length} prompt{resultats.length === 1 ? "" : "s"} sur {prompts.length}
      </p>

      {resultats.length === 0 ? (
        <p className="rounded-3xl bg-white p-10 text-center text-ink/50">
          Aucun prompt ne correspond à cette recherche.
        </p>
      ) : (
        <div className="space-y-4">
          {resultats.map((p) => (
            <article key={p.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">{p.id}</span>
                <span className="rounded-full bg-ink/10 px-3 py-1 text-xs font-bold text-ink">{p.niveau}</span>
                <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-bold text-violet">
                  {p.outil_recommande}
                </span>
                <span className="rounded-full bg-corail/10 px-3 py-1 text-xs font-bold text-corail">
                  Module {p.module_lie}
                </span>
              </div>
              <h3 className="font-titres mb-2 text-lg font-bold text-ink">{p.titre}</h3>
              {p.contexte_usage && <p className="mb-3 text-sm text-ink/60">{p.contexte_usage}</p>}
              <div className="mb-3 whitespace-pre-wrap rounded-2xl bg-cream px-4 py-3 text-sm leading-relaxed text-ink">
                {p.prompt_template}
              </div>
              {p.resultat_attendu && (
                <p className="mb-4 text-sm text-ink/80">
                  <strong className="text-corail">Résultat attendu : </strong>
                  {p.resultat_attendu}
                </p>
              )}
              <button
                type="button"
                onClick={() => copier(p.prompt_template, p.id)}
                className={`rounded-full px-5 py-2 text-sm font-bold text-white transition ${
                  copieId === p.id ? "bg-violet" : "bg-corail hover:opacity-90"
                }`}
              >
                {copieId === p.id ? "Copié ✓" : "Copier le prompt"}
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
