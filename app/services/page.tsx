'use client'

import Image from 'next/image';
import ModernButton from '@/app/components/ui/ModernButton';
import Badge from '@/app/components/ui/Badge';

export default function ServicesPage() {
    const services = [
        {
            icon: "⚙️",
            title: "Préparation Expertise",
            description: "Préparation minutieuse et présentation soignée pour une expertise réussie."
        },
        {
            icon: "🔧",
            title: "Entretien Écologique",
            description: "Entretien de votre véhicule en profondeur et optimisation de la climatisation pour votre confort."
        },
        {
            icon: "🔌",
            title: "Diagnostic Électrique",
            description: "Analyse complète des systèmes électroniques et réparations électriques fiables."
        },
        {
            icon: "🛠️",
            title: "Freins Démarrage",
            description: "Maintenance complète des freins, restauration des disques et réparation des systèmes de démarrage."
        },
        {
            icon: "🦷",
            title: "Vitrage Pneumatiques",
            description: "Solutions rapides pour vitrage, pneus de toutes marques et équilibrage parfait."
        },
        {
            icon: "🚗",
            title: "Suspension Stockage",
            description: "Stockage sécurisé, entretien d'échappement et amélioration de la suspension."
        },
        {
            icon: "🔩",
            title: "Multi-Marque Pièces",
            description: "Expertise sur toutes marques avec remplacement de courroie et embrayage de qualité."
        },
        {
            icon: "🔋",
            title: "Batterie Carrosserie",
            description: "Remplacement de batterie performant et réparations complètes de carrosserie."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section avec design moderne */}
            <div className="relative py-24 pt-32 bg-gray-50 overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-[#303F9F] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-400 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <Badge className="mb-6">
                        Nos Services
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Excellence en mécanique automobile
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Découvrez notre gamme complète de services professionnels pour l&apos;entretien et la réparation de votre véhicule
                    </p>
                </div>
            </div>

            {/* Services Grid Section - Design premium */}
            <div className="py-24 bg-gray-50 relative">
                {/* Éléments décoratifs de fond */}
                {/* <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-20 w-32 h-32 bg-[#303F9F] rounded-full blur-2xl"></div>
                    <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
                </div> */}

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Services Grid avec design moderne */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                    </div> */}

                    {/* CTA Section avec design premium */}
                    <div className="mt-20 text-center">
                        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Prêt à confier votre véhicule ?
                                </h3>
                                <p className="text-xl text-gray-600">
                                    Demandez un devis personnalisé et bénéficiez de notre expertise professionnelle
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <ModernButton href="/contact">
                                    Demander un devis
                                </ModernButton>
                            </div>

                            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Devis gratuit</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Intervention rapide</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Garantie qualité</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notre équipe Section - Design moderne */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header moderne avec design asymétrique */}
                    <div className="text-center mb-16">
                        <Badge className="mb-6">
                            Notre Équipe
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Des experts passionnés
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Une équipe de professionnels dévoués qui met son expertise au service de votre véhicule
                        </p>
                    </div>

                    {/* Team Grid avec design moderne */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Anthony Legrand */}
                        <div className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="relative mb-6">
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                                    <Image
                                        src="/team/Anthony L.JPG"
                                        alt="Anthony Legrand - Responsable qualité"
                                        fill
                                        className="object-cover"
                                        quality={95}
                                        priority={false}
                                    />
                                    {/* Overlay effet */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Anthony Legrand</h3>
                                <p className="text-[#303F9F] font-medium text-sm uppercase tracking-wide">Responsable qualité</p>
                            </div>
                        </div>

                        {/* Quentin Weiss */}
                        <div className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="relative mb-6">
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                                    <Image
                                        src="/team/Quentin Weiss.JPG"
                                        alt="Quentin Weiss - Responsable qualité"
                                        fill
                                        className="object-cover"
                                        quality={95}
                                        priority={false}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Quentin Weiss</h3>
                                <p className="text-[#303F9F] font-medium text-sm uppercase tracking-wide">Responsable qualité</p>
                            </div>
                        </div>

                        {/* Jean-François Höhn */}
                        <div className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="relative mb-6">
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm">Photo Jean-François</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Jean-François Höhn</h3>
                                <p className="text-[#303F9F] font-medium text-sm uppercase tracking-wide">Directeur</p>
                            </div>
                        </div>

                        {/* Miguel Teixeira */}
                        <div className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="relative mb-6">
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm">Photo Miguel</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Miguel Teixeira</h3>
                                <p className="text-[#303F9F] font-medium text-sm uppercase tracking-wide">Apprenti mécanicien 3ème année</p>
                            </div>
                        </div>
                    </div>

                    {/* Section statistiques d'équipe */}
                    <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="border-r border-gray-200 last:border-r-0">
                                <div className="text-3xl font-bold text-[#303F9F] mb-2">25+</div>
                                <p className="text-gray-600 font-medium">Années d&apos;expérience cumulées</p>
                            </div>
                            <div className="border-r border-gray-200 last:border-r-0">
                                <div className="text-3xl font-bold text-[#303F9F] mb-2">1000+</div>
                                <p className="text-gray-600 font-medium">Véhicules entretenus</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#303F9F] mb-2">100%</div>
                                <p className="text-gray-600 font-medium">Clients satisfaits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Véhicules de prêt Section - Design cohérent */}
            <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
                {/* Éléments décoratifs de fond */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-[#303F9F] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* Header avec badge cohérent */}
                    <div className="text-center mb-20">
                        <Badge className="mb-6">
                            Véhicules de Prêt
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Restez mobile pendant vos réparations
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Profitez de nos véhicules de prêt à partir de 30 CHF/jour pour ne jamais être immobilisé
                        </p>
                    </div>

                    {/* Contenu principal avec image */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image côté gauche */}
                            <div className="relative h-96 lg:h-auto">
                                <Image
                                    src="/cars/voiturePret.JPG"
                                    alt="Véhicule de prêt du Garage Maison-Blanche"
                                    fill
                                    className="object-cover"
                                    priority={false}
                                />
                                {/* Overlay gradient pour améliorer la lisibilité */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                                {/* Badge prix flottant */}
                                <div className="absolute top-6 right-6 bg-[#303F9F] text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                                    dès 30 CHF/jour
                                </div>
                            </div>

                            {/* Contenu côté droit */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="space-y-6">
                                    {/* Points forts avec icônes */}
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 min-w-6 min-h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 leading-relaxed">
                                                    <span className="font-semibold text-[#303F9F]">Véhicule à disposition dès 30 CHF/jour</span> avec boîte automatique ou manuelle
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 min-w-6 min-h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 leading-relaxed">
                                                    <span className="font-semibold text-green-600">Service gratuit</span> : prise en charge à domicile dans un rayon de 10 km
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA amélioré */}
                                    <div className="pt-6">
                                        <ModernButton href="/contact">
                                            Réserver maintenant
                                        </ModernButton>

                                        <p className="text-sm text-gray-500 mt-3">
                                            Contactez-nous pour plus d&apos;informations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}