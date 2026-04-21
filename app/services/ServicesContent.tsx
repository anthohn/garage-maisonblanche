'use client'

import Image from 'next/image';
import ModernButton from '@/app/components/ui/ModernButton';
import Badge from '@/app/components/ui/Badge';
import { Zap, Disc, CircleDot, Layers, Car, Wind, ClipboardCheck, Droplets, Fan, Laptop, Battery, Activity, Repeat, Settings, Warehouse, Scan } from 'lucide-react';
import { motion } from "framer-motion";


export default function ServicesContent() {
    const services = [
        // Top 6 Featured Services
        { icon: ClipboardCheck, title: "Préparation expertise", image: "/services/expertise.png", featured: true, description: "Préparation minutieuse pour une expertise réussie." },
        { icon: Fan, title: "Service climatisation", image: "/services/ac.png", featured: true, description: "Entretien et recharge pour un air sain et frais." },
        { icon: Disc, title: "Freins", image: "/services/brakes.png", featured: true, description: "Sécurité maximale avec nos forfaits freinage." },
        { icon: Laptop, title: "Diagnostique électronique", image: "/services/diagnostic.png", featured: true, description: "Analyse précise avec valise multi-marques." },
        { icon: CircleDot, title: "Pneus toutes marques", image: "/services/tires.png", featured: true, description: "Vente, montage et équilibrage de vos pneus." },
        { icon: Repeat, title: "Courroie de distribution", image: "/services/timing-belt.png", featured: true, description: "Remplacement préventif pour la santé du moteur." },

        // Other Services
        { icon: Wind, title: "Contrôle antipollution", image: "/services/pollution.png" },
        { icon: Droplets, title: "Lavage châssis moteur", image: "/services/washing.png" },
        { icon: Zap, title: "Electricité", image: "/services/electricity.png" },
        { icon: Disc, title: "Rectification disque de frein", image: "/services/brakes-fix.png" },
        { icon: Zap, title: "Alternateur - Démarreur", image: "/services/alternator.png" },
        { icon: Scan, title: "Remplacement pare-brise", image: "/services/windshield.png" },
        { icon: Settings, title: "Montage équilibrage", image: "/services/mounting.png" },
        { icon: Warehouse, title: "Gardiennage pneus-roues", image: "/services/storage.png" },
        { icon: Wind, title: "Echappement", image: "/services/exhaust.png" },
        { icon: Activity, title: "Amortisseurs", image: "/services/suspension.png" },
        { icon: Layers, title: "Service multi-marque", image: "/services/multibrand.png" },
        { icon: CircleDot, title: "Embrayage", image: "/services/clutch.png" },
        { icon: Battery, title: "Batterie", image: "/services/battery.png" },
        { icon: Car, title: "Prise en charge carrosserie", image: "/services/bodywork.png" }
    ];

    const otherServices = services.filter(s => !s.featured);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section avec design moderne */}
            <div className="relative py-12 pt-32 bg-gray-50 overflow-hidden">
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

            {/* 2. OTHER SERVICES (Compact List) */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <section className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tous nos services</h2>
                            <p className="text-gray-500">Une expertise complète pour chaque besoin de votre véhicule</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {otherServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 group-hover:text-[#303F9F] group-hover:scale-110 transition-all mr-4 shrink-0">
                                        <service.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-700 group-hover:text-gray-900">{service.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>


            {/* Notre équipe Section - Design moderne */}
            <div className="py-12 bg-gray-50">
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
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-linear-to-br from-blue-100 to-blue-200">
                                    <Image
                                        src="/team/Anthony L.JPG"
                                        alt="Anthony Legrand - Mécanicien automobile"
                                        fill
                                        className="object-cover"
                                        quality={95}
                                        priority={false}
                                    />
                                    {/* Overlay effet */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Anthony Lanero</h3>
                                <p className="text-[#303F9F] font-medium text-sm uppercase tracking-wide">Mécanicien automobile</p>
                            </div>
                        </div>

                        {/* Quentin Weiss */}
                        <div className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="relative mb-6">
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-linear-to-br from-blue-100 to-blue-200">
                                    <Image
                                        src="/team/Quentin Weiss.JPG"
                                        alt="Quentin Weiss - Mécanicien automobile"
                                        fill
                                        className="object-cover"
                                        quality={95}
                                        priority={false}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Quentin Weiss</h3>
                                <p className="text-[#303F9F] font-medium text-sm uppercase tracking-wide">Mécanicien automobile</p>
                            </div>
                        </div>

                        {/* Jean-François Höhn */}
                        <div className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="relative mb-6">
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-linear-to-br from-blue-100 to-blue-200">
                                    <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm">Photo Jean-François</span>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-linear-to-br from-blue-100 to-blue-200">
                                    <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm">Photo Miguel</span>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

            {/* CTA Section avec design premium */}
            <div className="py-12 bg-gray-50 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
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

            {/* Véhicules de prêt Section - Design cohérent */}
            <div className="py-12 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
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
                                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent"></div>

                                {/* Badge prix flottant */}
                                <div className="absolute top-6 right-6 bg-[#303F9F] text-white px-4 py-2 rounded-full font-bold text-md shadow-lg">
                                    dès 30 CHF/jour
                                </div>
                            </div>

                            {/* Contenu côté droit */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="space-y-6">
                                    {/* Points forts avec icônes */}
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 min-w-6 min-h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
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
                                            <div className="w-6 h-6 min-w-6 min-h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
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
