'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car } from '@/lib/data';
import CarImage from '@/app/components/ui/CarImage';
import ModernButton from '@/app/components/ui/ModernButton';

export default function CarDetailContent({ car }: { car: Car }) {
    const [selectedImage, setSelectedImage] = useState(car.images[0] || '');

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                    {/* Images Section */}
                    <div>
                        {/* Main Image */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                            <CarImage
                                src={selectedImage || car.images[0]}
                                alt={`${car.brand} ${car.model} - Véhicule d'occasion au Garage Maison-Blanche à Chancy`}
                                className="w-full aspect-[4/3] object-cover"
                                fill={true}
                                priority={true}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {/* Thumbnails */}
                        {car.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {car.images.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${(selectedImage === img || (!selectedImage && index === 0))
                                            ? 'border-blue-600 opacity-100 ring-2 ring-blue-100'
                                            : 'border-transparent opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <CarImage
                                            src={img}
                                            alt={`${car.brand} ${car.model} vue ${index + 1}`}
                                            className="w-full aspect-[4/3] object-cover"
                                            fill={true}
                                            sizes="(max-width: 1024px) 25vw, 15vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Car Details Section */}
                    <div>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {car.brand} {car.model} ({car.year})
                            </h1>

                            <div className="text-3xl font-bold text-[#303F9F] mb-6">
                                {car.price.toLocaleString('fr-CH').replace(/\s/g, "'")}&nbsp;CHF
                            </div>

                            {/* Key Information */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 488.6 488.6">
                                            <path d="M188.5,270.3c-24.4,28.1-23.2,71.7,2.6,98.6c14.4,15.1,33.7,22.6,52.9,22.6c18.8,0,37.5-7.2,51.8-21.5
                                            c6.5-6.5,11.6-14,15.1-21.9l0,0l94.5-183.2c2.5-5.2-2.9-10.6-8.1-8.1l-183.2,94.5l0,0C204.6,255.5,195.9,261.9,188.5,270.3z
                                            M221.9,296.1c6.1-6.1,14.1-9.2,22.1-9.2s16,3.1,22.2,9.2c12.2,12.2,12.2,32.1,0,44.3c-6.1,6.1-14.1,9.2-22.2,9.2
                                            c-8,0-16-3.1-22.1-9.2C209.6,328.1,209.6,308.3,221.9,296.1z M440.2,341.4c0-34.6-9.1-68.6-26.4-98.3c-6.7-11.6-2.8-26.4,8.8-33.1
                                            c11.6-6.7,26.4-2.8,33.1,8.8c21.5,37.1,32.9,79.5,32.9,122.6c0,13.4-10.8,24.2-24.2,24.2C451.1,365.6,440.2,354.8,440.2,341.4z
                                            M0,341.4C0,206.7,109.6,97.1,244.3,97.1c31.3,0,61.8,5.8,90.6,17.4c12.4,5,18.4,19,13.5,31.4c-5,12.4-19,18.4-31.4,13.5
                                            c-23.1-9.2-47.6-13.9-72.7-13.9c-108,0-195.9,87.9-195.9,195.9c0,13.4-10.8,24.2-24.2,24.2C10.8,365.6,0,354.8,0,341.4z"/>
                                        </svg>
                                    </div>
                                    <div className="text-sm text-gray-600">Kilométrage</div>
                                    <div className="text-sm font-medium text-gray-900">{car.mileage.toLocaleString('fr-CH').replace(/\s/g, "'")} km</div>
                                </div>

                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77z" />
                                        </svg>
                                    </div>
                                    <div className="text-sm text-gray-600">Carburant</div>
                                    <div className="font-semibold text-gray-900">{car.fuelType}</div>
                                </div>

                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 122.88 122.88">
                                            <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.23,61.23,0,0,1,61.44,0Zm4.07,82.09a6.67,6.67,0,1,1-8.14,0V68.62H42.31V82.09a6.67,6.67,0,1,1-8.14,0V46.17a6.67,6.67,0,1,1,8.14,0V60.48H57.37V46.17a6.67,6.67,0,1,1,8.14,0V60.48H80.57V46.17a6.67,6.67,0,1,1,8.14,0V64a4.41,4.41,0,0,1,0,.52,4.07,4.07,0,0,1-4.07,4.07H65.51V82.09Zm33-57.76a52.46,52.46,0,1,0,15.38,37.11A52.29,52.29,0,0,0,98.55,24.33Z" />
                                        </svg>
                                    </div>
                                    <div className="text-sm text-gray-600">Transmission</div>
                                    <div className="font-semibold text-gray-900">{car.transmission}</div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
                                <p className="text-gray-600 leading-relaxed">{car.description}</p>
                            </div>

                            {/* Encart Partenaire Pneus-Online */}
                            {car.features?.includes('Pneus neufs') && (
                                <div className="mb-6 p-5 bg-gray-50 rounded-lg flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-[#303F9F] mb-1">
                                            Pneus Neufs & Entretien
                                        </h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Ce véhicule est équipé de pneus neufs installés pour la vente, en collaboration avec notre partenaire officiel.
                                        </p>
                                    </div>
                                    <a
                                        href="https://www.pneus-online-suisse.ch"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 bg-white p-2.5 rounded-lg border border-gray-150 transition-all duration-300 hover:scale-[1.05]"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="https://cdn-img1.pneus-online.com/pol/logo_fr.png"
                                            alt="Pneus Online Suisse"
                                            className="h-8 md:h-9 object-contain"
                                        />
                                    </a>
                                </div>
                            )}

                            {/* Contact Buttons */}
                            <div className="flex flex-col gap-4 mb-6">
                                <ModernButton
                                    href={`/contact?subject=Intérêt pour ${car.brand} ${car.model}`}
                                    size="md"
                                    className="w-full"
                                    showArrow={false}
                                >
                                    Nous contacter
                                </ModernButton>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <ModernButton
                                        href={`tel:+41227560404`}
                                        variant="outlined"
                                        size="md"
                                        className="w-full justify-center !px-2 !text-sm whitespace-nowrap"
                                        showArrow={false}
                                        icon={
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        }
                                    >
                                        Garage : +41 22 756 04 04
                                    </ModernButton>
                                    <ModernButton
                                        href={`tel:+41793601347`}
                                        variant="outlined"
                                        size="md"
                                        className="w-full justify-center !px-2 !text-sm whitespace-nowrap"
                                        showArrow={false}
                                        icon={
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                                            </svg>
                                        }
                                    >
                                        Mobile : +41 79 360 13 47
                                    </ModernButton>
                                </div>
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
                                    <h3 className="font-semibold text-gray-900 mb-2">Moteur</h3>
                                    <p className="text-gray-600">{car.specifications.engine}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Puissance</h3>
                                    <p className="text-gray-600">{car.specifications.power}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Consommation</h3>
                                    <p className="text-gray-600">{car.specifications.consumption}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Émissions CO₂</h3>
                                    <p className="text-gray-600">{car.specifications.co2}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Couleur</h3>
                                    <p className="text-gray-600">{car.specifications.color}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Places</h3>
                                    <p className="text-gray-600">{car.specifications.seats} places</p>
                                </div>
                                {car.specifications.registration && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Mise en circulation</h3>
                                        <p className="text-gray-600">{car.specifications.registration}</p>
                                    </div>
                                )}
                                {car.features?.includes('Certificat de conformité européen (COC)') && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Certificat de conformité</h3>
                                        <p className="text-gray-600">COC Europe disponible</p>
                                    </div>
                                )}
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
