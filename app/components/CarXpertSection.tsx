'use client'

import Image from 'next/image';
import Badge from '@/app/components/ui/Badge';

export default function CarXpertSection() {
    return (
        <div className="pb-24 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#303F9F] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header de section avec animation */}
                <div className="text-center mb-20">
                    <Badge className="mb-6">
                        Réseau de confiance
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Membre du réseau
                        <div className="flex justify-center mt-6">
                            <Image
                                src="/partners/carxpert-garages.png"
                                alt="Logo carXpert"
                                width={300}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Rejoignez un réseau d&apos;excellence avec plus de 1&apos;200 ateliers certifiés en Suisse,
                        garantissant qualité et expertise pour votre véhicule.
                    </p>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#303F9F] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Garantie étendue</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Bénéficiez d&apos;une garantie constructeur préservée avec nos pièces d&apos;origine et huiles certifiées.
                        </p>
                    </div>

                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise certifiée</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Nos techniciens sont formés en continu aux dernières technologies automobiles.
                        </p>
                    </div>

                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 md:col-span-2 lg:col-span-1">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Réseau national</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Accès à plus de 1&apos;200 ateliers certifiés dans toute la Suisse pour votre tranquillité.
                        </p>
                    </div>
                </div> */}

                {/* Section statistiques et CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Statistiques */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Pourquoi choisir carXpert ?</h3>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#303F9F] mb-2">1&apos;200+</div>
                                <div className="text-sm text-gray-600">Ateliers certifiés</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-500 mb-2">98%</div>
                                <div className="text-sm text-gray-600">Satisfaction client</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#303F9F] mb-2">25+</div>
                                <div className="text-sm text-gray-600">Années d&apos;expérience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-500 mb-2">24h</div>
                                <div className="text-sm text-gray-600">Support technique</div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#" className="flex-1 bg-[#303F9F] text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-center">
                                    FAQ carXpert
                                </a>
                                <a href="#" className="flex-1 border-2 border-[#303F9F] text-[#303F9F] px-6 py-3 rounded-xl font-medium hover:bg-[#303F9F] hover:text-white transition-all text-center">
                                    Nos partenaires
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image et badges */}
                    <div className="relative">
                        {/* Image principale */}
                        <div className="relative w-full h-[620px] bg-linear-to-br from-blue-100 via-white to-green-100 rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/partners/carxpert.jpg"
                                alt="Logo carXpert"
                                fill
                                style={{ objectFit: 'cover', position: 'absolute' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Badges flottants */}
                        <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-900">Certifié</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 bg-[#303F9F] text-white rounded-2xl px-4 py-2 shadow-lg">
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Qualité</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
