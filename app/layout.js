import { Poppins, Baloo_2 } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: "Claude AI Mastery 2.0 — Plateforme de formation",
  description:
    "Plateforme centrale de la cohorte Claude AI Mastery 2.0 : modules, slides, exercices, ressources, portfolio et bibliothèque de 100 prompts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${baloo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
