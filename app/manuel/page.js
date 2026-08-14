import { listDownloads } from "@/lib/downloads";

export const metadata = {
  title: "Manuel complet — Claude AI Mastery 2.0",
};

export default function ManuelPage() {
  const fichiers = listDownloads("manuel");
  const pdf = fichiers.find((f) => f.ext === "pdf");
  const docx = fichiers.find((f) => f.ext === "docx");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-titres text-3xl font-extrabold text-ink sm:text-4xl">
        Manuel complet
      </h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Le manuel de référence de la formation, en aperçu ci-dessous et téléchargeable dans les
        deux formats.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {docx && (
          <a
            href={docx.href}
            download
            className="rounded-full bg-violet px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Télécharger .docx ({docx.sizeKB} Ko)
          </a>
        )}
        {pdf && (
          <a
            href={pdf.href}
            download
            className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-corail hover:text-corail"
          >
            Télécharger .pdf ({pdf.sizeKB} Ko)
          </a>
        )}
      </div>

      {pdf ? (
        <iframe
          src={pdf.href}
          title="Aperçu du manuel complet"
          className="mt-8 h-[750px] w-full rounded-2xl border border-ink/10 bg-white"
        />
      ) : (
        <p className="mt-8 text-sm text-ink/50">Aperçu PDF indisponible.</p>
      )}
    </div>
  );
}
