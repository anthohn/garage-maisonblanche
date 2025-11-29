import type { Metadata } from "next";
import { Montserrat, Lato, Courgette, Merienda, PT_Serif, Palanquin, Raleway, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-lato" });
const courgette = Courgette({ weight: "400", subsets: ["latin"], variable: "--font-courgette" });
const merienda = Merienda({ subsets: ["latin"], variable: "--font-merienda" });
const ptSerif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-pt-serif" });
const palanquin = Palanquin({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-palanquin" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

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
    <html lang="fr" className={`${montserrat.variable} ${lato.variable} ${courgette.variable} ${merienda.variable} ${ptSerif.variable} ${palanquin.variable} ${raleway.variable} ${openSans.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        {/* Custom Fonts/Icons - Keeping local fonts for now, assuming they are needed for specific icons */}
        <link rel="stylesheet" href="/inc/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/inc/font-garage/flaticon.css" />
        <link rel="stylesheet" type="text/css" href="/inc/font-shop/flaticon.css" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
