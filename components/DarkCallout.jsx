// Encadré sombre arrondi "À retenir" — élément récurrent de la charte graphique
// (fond #1A1323, coins très arrondis, titre corail).
export default function DarkCallout({ title = "À retenir", children }) {
  return (
    <div className="rounded-3xl bg-ink px-6 py-5 text-white sm:px-8 sm:py-6">
      {title && <h3 className="mb-2 font-titres text-base font-bold text-corail">{title}</h3>}
      <div className="text-sm leading-relaxed text-white/90 [&_a]:text-white [&_a]:underline [&_strong]:text-white [&_strong]:font-bold">
        {children}
      </div>
    </div>
  );
}
