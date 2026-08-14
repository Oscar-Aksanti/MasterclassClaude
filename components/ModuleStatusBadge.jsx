"use client";

import { useEffect, useState } from "react";
import { statutModule, STATUT_LABELS, STATUT_CLASSES } from "@/lib/modules";

// Statut calculé côté client (new Date() réel de l'appareil du visiteur, comparé aux
// horaires GMT de la cohorte) — évite tout écart entre l'heure de build/serveur et
// l'heure réelle au moment où la page est consultée.
export default function ModuleStatusBadge({ date, className = "" }) {
  const [statut, setStatut] = useState(null);

  useEffect(() => {
    const tick = () => setStatut(statutModule(date));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [date]);

  const affiche = statut ?? "a_venir";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${STATUT_CLASSES[affiche]} ${className}`}
    >
      {STATUT_LABELS[affiche]}
    </span>
  );
}
