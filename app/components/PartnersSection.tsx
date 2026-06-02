'use client'

import Image from 'next/image';
import ModernButton from '@/app/components/ui/ModernButton';
import Badge from '@/app/components/ui/Badge';

export default function LogoBandSection() {
    const logos = [
        {
            name: "carXpert Garages",
            src: "/partners/carxpert-garages.png",
            alt: "carXpert Garages",
            description: "Réseau national de garages certifiés",
            url: "https://www.carxpert.ch"
        },
        {
            name: "ClimaService Automotive",
            src: "/partners/clim-service-automotive.png",
            alt: "ClimaService Automotive",
            description: "Spécialiste climatisation automobile",
            url: "https://www.climaservice.ch"
        },
        {
            name: "UPSA AGVS",
            src: "/partners/upsa-agvs.png",
            alt: "UPSA AGVS",
            description: "Union Professionnelle Suisse de l'Automobile",
            url: "https://www.agvs-upsa.ch"
        },
        {
            name: "Shell",
            src: "/partners/logo-shell.png",
            alt: "Shell",
            description: "Huiles et lubrifiants de qualité",
            url: "https://www.shell.ch"
        },
        {
            name: "Pneus Online Suisse",
            src: "/partners/pneus-online.png",
            alt: "Pneus Online Suisse",
            description: "Achat de pneus auto et moto en ligne à prix avantageux",
            url: "https://www.pneus-online-suisse.ch"
        },
        {
            name: "Formation Pro",
            src: "/partners/formation-pro.png",
            alt: "Formation Professionnelle",
            description: "Formation continue et certification",
            url: "https://www.formationprof.ch/fr"
        },
        // {
        //     name: "Loterie Romande",
        //     src: "/partners/loterie-romande.png",
        //     alt: "Loterie Romande",
        //     description: "Partenaire local de confiance",
        //     url: "https://www.loro.ch"
        // }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#303F9F] rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header avec badge cohérent */}
                <div className="text-center mb-10">
                    <Badge className="mb-6">
                        Nos Partenaires
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Un réseau de confiance
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Nous collaborons avec les meilleurs partenaires pour vous garantir
                        des services de qualité et des pièces d&apos;origine authentiques.
                    </p>
                </div>

                {/* Grid des logos avec design premium */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {logos.map((logo, index) => (
                            <a
                                key={logo.name}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                            >
                                {/* Logo */}
                                <div className="h-20 flex items-center justify-center mb-6">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={160}
                                        height={80}
                                        className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                                        priority={index < 3}
                                    />
                                </div>

                                {/* Informations partenaire */}
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#303F9F] transition-colors">{logo.name}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{logo.description}</p>
                                </div>

                                {/* Icône de lien externe */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-8 bg-[#303F9F] rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Call-to-action pour partenaires - Version discrète */}
                <div className="text-center  md:p-6 text-gray-700 ">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Vous êtes un professionnel ?</h3>
                        <p className="text-md text-gray-600 mb-4 leading-relaxed">
                            Rejoignez notre réseau de partenaires.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <ModernButton
                                href="/contact"
                                variant="primary"
                                size="md"
                                showArrow={true}
                            >
                                Devenir partenaire
                            </ModernButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}