import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Nos Services | Réparation, Entretien & Expertise Auto à Chancy",
    description: "Découvrez tous les services du Garage Maison-Blanche à Chancy (Genève) : réparation toutes marques, freins, pneus, climatisation, diagnostic électronique, préparation expertise et véhicules de prêt. Membre carXpert.",
    keywords: ["réparation auto chancy", "entretien voiture genève", "garage toutes marques", "pneus chancy", "climatisation auto", "diagnostic électronique", "expertise automobile genève", "véhicule de prêt"],
    openGraph: {
        title: "Services Auto | Garage Maison-Blanche à Chancy",
        description: "Réparation, entretien, expertise et diagnostic pour toutes marques. Véhicules de prêt dès 30 CHF/jour.",
        url: "https://garage-maisonblanche.ch/services",
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}