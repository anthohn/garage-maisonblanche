import type { Metadata } from "next";
import VehiculesContent from "./VehiculesContent";

export const metadata: Metadata = {
    title: "Véhicules d'Occasion à Chancy | Garage Maison-Blanche",
    description: "Découvrez nos véhicules d'occasion de qualité au Garage Maison-Blanche à Chancy (Genève). Véhicules inspectés, garantis et au meilleur prix. Membre carXpert.",
    keywords: ["voiture occasion chancy", "véhicule occasion genève", "acheter voiture chancy", "garage occasion suisse"],
    openGraph: {
        title: "Véhicules d'Occasion | Garage Maison-Blanche",
        description: "Sélection de véhicules d'occasion inspectés et garantis à Chancy, Genève.",
        url: "https://garage-maisonblanche.ch/vehicules",
    },
};

export default function VehiculesPage() {
    return <VehiculesContent />;
}