import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
// import HolidayModal from "@/app/components/HolidayModal";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://garage-maisonblanche.ch"),
  title: {
    default: "Garage Maison-Blanche | Réparation Auto & Occasions à Chancy",
    template: "%s | Garage Maison-Blanche"
  },
  description: "Garage automobile toutes marques à Chancy (Genève). Expert carXpert : réparations, entretien, expertise et vente de véhicules neufs et d'occasion.",
  keywords: ["garage chancy", "réparation auto genève", "service carxpert", "achat voiture occasion", "expertise automobile", "pneus", "climatisation"],
  authors: [{ name: "Garage Maison-Blanche" }],
  creator: "Garage Maison-Blanche SA",
  publisher: "Garage Maison-Blanche SA",
  openGraph: {
    title: "Garage Maison-Blanche | L'expertise Auto à Chancy",
    description: "Réparations toutes marques, véhicules d'occasion et service premium. Votre garage de confiance membre du réseau carXpert à Genève.",
    url: 'https://garage-maisonblanche.ch',
    siteName: 'Garage Maison-Blanche',
    images: [
      {
        url: '/photoGarageProche.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Garage Maison-Blanche',
      },
    ],
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Garage Maison-Blanche | Expert Auto",
    description: "Votre garage de confiance à Chancy. Réparations, maintenance et vente de véhicules.",
    images: ['/photoGarageProche.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Garage Maison-Blanche SA",
  "image": "https://garage-maisonblanche.ch/photoGarage.jpg",
  "logo": {
    "@type": "ImageObject",
    "url": "https://garage-maisonblanche.ch/logo.png"
  },
  "@id": "https://garage-maisonblanche.ch",
  "url": "https://garage-maisonblanche.ch",
  "telephone": "+41 22 756 04 04",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Route de Chancy 500",
    "addressLocality": "Chancy",
    "postalCode": "1284",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.138,
    "longitude": 5.968
  },
  "areaServed": [
    "Chancy", "Avully", "Cartigny", "Soral", "Laconnex", "Bernex", "Aire-la-Ville", "Genève"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "07:30",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "07:30",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100064107662482",
    "https://www.instagram.com/garage_maisonblanche"
  ],
  "department": {
    "@type": "GasStation",
    "name": "Station Maison-Blanche",
    "url": "https://station-maisonblanche.ch",
    "telephone": "+41 22 756 15 22"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${openSans.className}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {/* <HolidayModal /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
