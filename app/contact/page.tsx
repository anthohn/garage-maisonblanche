import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact | Garage Maison-Blanche à Chancy (Genève)",
    description: "Contactez le Garage Maison-Blanche à Chancy : téléphone, email, horaires d'ouverture et itinéraire. Route de Chancy 500, 1284 Chancy. Réparation et entretien auto toutes marques.",
    keywords: ["contact garage chancy", "garage maison-blanche téléphone", "horaires garage chancy", "garage automobile genève contact"],
    openGraph: {
        title: "Contactez le Garage Maison-Blanche à Chancy",
        description: "Téléphone, email, horaires et itinéraire. Votre garage de confiance à Chancy, membre carXpert.",
        url: "https://garage-maisonblanche.ch/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}