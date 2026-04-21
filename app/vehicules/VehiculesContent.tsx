'use client';

import { carsData } from '@/lib/data';
import CarCard from '@/app/components/ui/CarCard';
import Badge from '@/app/components/ui/Badge';
import ModernButton from '@/app/components/ui/ModernButton';

export default function VehiculesContent() {
    return (
        <div className="min-h-screen bg-gray-50">
            {carsData.length > 0 ? (
                <>
                    {/* Header Section */}
                    <div className="py-16 pt-32">
                        <div className="max-w-7xl mx-auto px-6 text-center">
                            <Badge className="mb-6">
                                Véhicules d&apos;Occasion
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Véhicules d&apos;occasion à Chancy</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Découvrez notre sélection de véhicules d&apos;occasion de qualité,
                                inspectés et garantis par le Garage Maison-Blanche
                            </p>
                        </div>
                    </div>

                    {/* Cars Grid */}
                    <div className="max-w-7xl mx-auto px-6 pb-16">
                        <div className="flex flex-wrap justify-center gap-8">
                            {carsData.map((car, index) => (
                                <div key={car.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                                    <CarCard
                                        car={car}
                                        priority={index < 6}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Contact Section */}
                        <div className="text-center mt-16 bg-white rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intéressé par un véhicule ?</h2>
                            <p className="text-gray-600 mb-6">Contactez-nous pour plus d&apos;informations ou pour organiser un essai</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <ModernButton
                                    href="/contact"
                                    size="md"
                                    showArrow={false}
                                >
                                    Nous contacter
                                </ModernButton>
                                <ModernButton
                                    href="tel:+41227560404"
                                    variant="outlined"
                                    size="md"
                                    showArrow={false}
                                    icon={
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    }
                                >
                                    +41 22 756 04 04
                                </ModernButton>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="max-w-7xl mx-auto px-6 py-16 pt-32">
                    <div className="text-center py-16 bg-white rounded-xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucun véhicule disponible en ligne</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Actuellement, nous n&apos;avons pas de véhicules à proposer sur notre site.
                            N&apos;hésitez pas à nous contacter directement pour connaître nos disponibilités à venir.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ModernButton
                                href="/contact"
                                size="md"
                                showArrow={false}
                            >
                                Nous contacter
                            </ModernButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
