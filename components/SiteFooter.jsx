export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white/40">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink/60 sm:px-6">
        <p className="mb-2">
          <strong className="text-ink">Claude AI Mastery 2.0</strong> — cohorte live du 17 au
          28 août 2026.
        </p>
        <p>
          Ce portail est un complément de production. Les sessions live, les replays et les
          inscriptions restent gérés sur{" "}
          <a
            href="https://formations4data.systeme.io/claudemastery"
            className="font-semibold text-violet hover:text-corail"
            target="_blank"
            rel="noopener noreferrer"
          >
            formations4data.systeme.io/claudemastery
          </a>{" "}
          et sur le lien Teams unique de la cohorte partagé dans la communauté privée.
        </p>
      </div>
    </footer>
  );
}
