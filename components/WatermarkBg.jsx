// Grille technique en filigrane + croix de repérage, reprise de l'affiche officielle
// (voir 00-marque-et-design/charte-graphique.md, section 3). Purement décoratif : ne
// doit jamais gêner la lecture du texte placé au-dessus (z-0, contenu en z-10+).
export default function WatermarkBg({ className = "" }) {
  const crosses = [
    { top: "12%", left: "6%" },
    { top: "20%", left: "88%" },
    { top: "70%", left: "10%" },
    { top: "82%", left: "80%" },
    { top: "45%", left: "50%" },
  ];
  return (
    <div className={`watermark-grid pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {crosses.map((c, i) => (
        <span
          key={i}
          className="watermark-cross absolute text-2xl font-light select-none"
          style={{ top: c.top, left: c.left }}
        >
          +
        </span>
      ))}
    </div>
  );
}
