'use client';

import { carsData } from '@/lib/data';
import CarCard from '@/app/components/ui/CarCard';
import ModernButton from '@/app/components/ui/ModernButton';
import Badge from '@/app/components/ui/Badge';

export default function CarForSaleSection() {
    // Afficher seulement les 3 premiers véhicules sur la page d'accueil
    const featuredCars = carsData.slice(0, 3);

    return (
        <section className="">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header moderne avec badge */}
                <div className="text-center mb-16">
                    <Badge className="mb-6">
                        Véhicules d&apos;Occasion
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Découvrez nos véhicules
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Une sélection rigoureuse de véhicules d&apos;occasion garantis et entretenus par nos soins
                    </p>
                </div>

                {/* Cars Grid avec design premium */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredCars.map((car, index) => (
                        <CarCard
                            key={car.id}
                            car={car}
                            priority={index < 2}
                        />
                    ))}
                </div>

                {/* Call to Action amélioré */}
                <div className="text-center">
                    <ModernButton href="/vehicules" size="lg">
                        Voir tous nos véhicules
                    </ModernButton>
                    <p className="text-sm text-gray-500 mt-4">
                        Plus de {carsData.length} véhicules disponibles
                    </p>
                </div>
            </div>
        </section>
    );
}