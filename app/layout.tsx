import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
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
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
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

        {/* CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Palanquin" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700|Open+Sans:400,600,700|Montserrat" rel="stylesheet" />

        {/* Custom Fonts/Icons */}
        <link rel="stylesheet" href="/inc/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/inc/font-garage/flaticon.css" />
        <link rel="stylesheet" type="text/css" href="/inc/font-shop/flaticon.css" />

        {/* Plugins */}
        <link rel="stylesheet" href="/inc/owlcarousel/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="/inc/owlcarousel/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />

        {/* Main Style */}
        <link rel="stylesheet" href="/css/style.default.css" />
      </head>
      <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
        <Navbar />
        {children}
        <Footer />

        {/* Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossOrigin="anonymous" strategy="lazyOnload" />
        <Script src="/inc/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
