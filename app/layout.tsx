import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://garage-maisonblanche.ch"),
  title: "Garage Maison-Blanche Chancy | Accueil",
  description: "Votre garage membre du réseau carXpert pour la réparation et l'entretien de voitures neuves et d'occasions. Station service, piste de lavage et Shop 7/7.",
  keywords: "garage,réparation,entretien,automobile,voiture,station service,station essence,shop,kiosk,lavage de voiture,carwash,geneve,chancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${openSans.className}`}>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
