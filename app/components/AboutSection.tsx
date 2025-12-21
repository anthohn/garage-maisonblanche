'use client';

import Image from 'next/image';

export default function PresentationSection() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/photoGarageProche.jpg"
                                alt="Garage Maison-Blanche atelier"
                                width={600}
                                height={600}
                                className="w-full h-112 object-cover"
                                quality={80}
                            />
                        </div>
                        {/* Floating info cards */}
                        <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Équipement Professionnel</h4>
                            <p className="text-xs text-gray-600">Outils de diagnostic dernière génération pour une précision optimale</p>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                            <h4 className="font-bold text-gray-900 text-sm mb-1">Expertise Toutes Marques</h4>
                            <p className="text-xs text-gray-600">Plus de 25 ans d&apos;expérience dans la réparation automobile</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div>
                        <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            À PROPOS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Expert en maintenance automobile depuis 1997
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Au Garage Maison-Blanche, nous combinons expertise traditionnelle et technologies modernes
                            pour offrir un service de qualité supérieure. Notre équipe qualifiée prend soin de votre
                            véhicule avec la même attention que vous y portez.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                                {/* <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div> */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Service Rapide</h4>
                                    <p className="text-sm text-gray-600">Intervention efficace pour minimiser votre temps d&apos;attente</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                {/* <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div> */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Diagnostic Précis</h4>
                                    <p className="text-sm text-gray-600">Technologies avancées pour identifier rapidement les problèmes</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                {/* <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div> */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Prix Transparents</h4>
                                    <p className="text-sm text-gray-600">Devis détaillé et sans surprise pour tous nos services</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                {/* <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div> */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Relation Client</h4>
                                    <p className="text-sm text-gray-600">Accompagnement personnalisé et conseils d&apos;expert</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
