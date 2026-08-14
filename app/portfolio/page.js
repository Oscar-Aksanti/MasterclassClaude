import PortfolioTracker from "@/components/PortfolioTracker";

export const metadata = {
  title: "Mon Portfolio IA Professionnel — Claude AI Mastery 2.0",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-titres text-3xl font-extrabold text-ink sm:text-4xl">
        Mon Portfolio IA Professionnel
      </h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Cochez chaque section au fur et à mesure — n&apos;attendez pas le Module 6 pour tout
        remplir d&apos;un coup. Ces informations restent uniquement sur cet appareil et ce
        navigateur (aucun compte, aucun serveur).
      </p>
      <div className="mt-8">
        <PortfolioTracker />
      </div>
    </div>
  );
}
