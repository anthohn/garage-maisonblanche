import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { carsData } from "@/lib/data";
import CarDetailContent from "./CarDetailContent";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const car = carsData.find((c) => c.id === resolvedParams.id);

    if (!car) {
        return {
            title: "Véhicule introuvable",
        };
    }

    const title = `${car.brand} ${car.model} ${car.year} — ${car.price.toLocaleString("fr-CH").replace(/\s/g, "'")} CHF | Garage Maison-Blanche`;
    const description = `${car.brand} ${car.model} ${car.year}, ${car.mileage.toLocaleString("fr-CH").replace(/\s/g, "'")} km, ${car.fuelType}, ${car.transmission}. ${car.description || "Véhicule d'occasion de qualité au Garage Maison-Blanche à Chancy."}`;

    return {
        title,
        description,
        openGraph: {
            title: `${car.brand} ${car.model} (${car.year}) | Occasion`,
            description,
            url: `https://garage-maisonblanche.ch/vehicules/${car.id}`,
            images: car.images[0]
                ? [
                      {
                          url: car.images[0],
                          width: 1200,
                          height: 630,
                          alt: `${car.brand} ${car.model} - Véhicule d'occasion`,
                      },
                  ]
                : [],
        },
    };
}

export default async function CarDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const car = carsData.find((c) => c.id === resolvedParams.id);

    if (!car) {
        notFound();
    }

    return <CarDetailContent car={car} />;
}