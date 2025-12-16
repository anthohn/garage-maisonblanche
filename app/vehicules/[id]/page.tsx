'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { carsData } from '@/lib/data';
import CarImage from '@/app/components/ui/CarImage';
import ModernButton from '@/app/components/ui/ModernButton';

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const car = carsData.find(c => c.id === resolvedParams.id);

    if (!car) {
        notFound();
    }

    // Image du véhicule
    const carImage = car.image;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white pt-24 pb-4">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Accueil</Link>
                        <span>›</span>
                        <Link href="/vehicules" className="hover:text-blue-600">Véhicules</Link>
                        <span>›</span>
                        <span className="text-gray-900 font-medium">{car.brand} {car.model}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Images Section */}
                    <div>
                        {/* Main Image */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                            <CarImage
                                src={carImage}
                                alt={`${car.brand} ${car.model}`}
                                className="h-80 w-full"
                                fill={false}
                                width={600}
                                height={320}
                                priority={true}
                            />
                        </div>
                    </div>

                    {/* Car Details Section */}
                    <div>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {car.brand} {car.model} ({car.year})
                            </h1>

                            <div className="text-3xl font-bold text-[#303F9F] mb-6">
                                {car.price.toLocaleString()} CHF
                            </div>

                            {/* Key Information */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                    </div>
                                    <div className="font-semibold text-gray-900">{car.mileage.toLocaleString()}</div>
                                    <div className="text-sm text-gray-600">km</div>
                                </div>

                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 12h18m-9-9v18" />
                                        </svg>
                                    </div>
                                    <div className="font-semibold text-gray-900">{car.fuelType}</div>
                                    <div className="text-sm text-gray-600">Carburant</div>
                                </div>

                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-2">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                            <line x1="9" y1="9" x2="15" y2="15" />
                                        </svg>
                                    </div>
                                    <div className="font-semibold text-gray-900">{car.transmission}</div>
                                    <div className="text-sm text-gray-600">Boîte</div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{car.description}</p>
                            </div>

                            {/* Contact Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <ModernButton
                                    href={`/contact?subject=Intérêt pour ${car.brand} ${car.model}`}
                                    size="md"
                                    className="w-full"
                                    showArrow={false}
                                >
                                    Nous contacter
                                </ModernButton>
                                <ModernButton
                                    href={`tel:+41227560400`}
                                    variant="outlined"
                                    size="md"
                                    className="w-full"
                                    showArrow={false}
                                    icon={
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    }
                                >
                                    +41 22 756 04 00
                                </ModernButton>
                            </div>

                            {/* Financing Info */}
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 mb-2">Financement disponible</h4>
                                <p className="text-sm text-gray-600">
                                    Nous proposons des solutions de financement adaptées à votre budget.
                                    Contactez-nous pour une offre personnalisée.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications Section */}
                {car.specifications && (
                    <div className="mt-12">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Caractéristiques techniques</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Moteur</h4>
                                    <p className="text-gray-600">{car.specifications.engine}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Puissance</h4>
                                    <p className="text-gray-600">{car.specifications.power}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Consommation</h4>
                                    <p className="text-gray-600">{car.specifications.consumption}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Émissions CO₂</h4>
                                    <p className="text-gray-600">{car.specifications.co2}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Couleur</h4>
                                    <p className="text-gray-600">{car.specifications.color}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Places</h4>
                                    <p className="text-gray-600">{car.specifications.seats} places</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Equipment Section */}
                {car.features && car.features.length > 0 && (
                    <div className="mt-12">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Équipements</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {car.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}