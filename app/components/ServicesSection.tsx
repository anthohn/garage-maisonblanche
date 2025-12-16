'use client'
import Card from './ui/Card';
import SectionTitle from './ui/SectionTitle';
import { Wrench, Gauge, Droplet, RotateCcw, Zap, Shield, Search, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    size: 'small' | 'large';
    color: string;
}

const services: Service[] = [
    {
        id: 'revision',
        title: 'Révision complète',
        description: 'Entretien complet de votre véhicule pour assurer sa longévité.',
        icon: <RotateCcw className="w-8 h-8" />,
        size: 'small',
        color: 'from-[#1A2F5F] to-[#2D4A80]'
    },
    {
        id: 'pneus',
        title: 'Service pneus',
        description: 'Remplacement, équilibrage et réparation de pneus de qualité.',
        icon: <Gauge className="w-8 h-8" />,
        size: 'small',
        color: 'from-[#D32F2F] to-[#E53935]'
    },
    {
        id: 'vidange',
        title: 'Vidange & Filtres',
        description: 'Changement d&apos;huile et filtres avec produits premium.',
        icon: <Droplet className="w-8 h-8" />,
        size: 'small',
        color: 'from-[#1A2F5F] to-[#2D4A80]'
    },
    {
        id: 'reparation',
        title: 'Réparation mécanique',
        description: 'Diagnostic complet et réparation de toutes pièces mécaniques.',
        icon: <Wrench className="w-8 h-8" />,
        size: 'large',
        color: 'from-[#001F3F] via-[#1A2F5F] to-[#2D4A80]'
    },
    {
        id: 'climatisation',
        title: 'Climatisation',
        description: 'Entretien et recharge de système de climatisation.',
        icon: <Zap className="w-8 h-8" />,
        size: 'small',
        color: 'from-[#D32F2F] to-[#E53935]'
    },
    {
        id: 'controle',
        title: 'Contrôle technique',
        description: 'Préparation et suivi de votre contrôle technique.',
        icon: <Search className="w-8 h-8" />,
        size: 'small',
        color: 'from-[#1A2F5F] to-[#2D4A80]'
    },
    {
        id: 'garantie',
        title: 'Qualité garantie',
        description: 'Toutes les interventions effectuées avec garantie client.',
        icon: <Shield className="w-8 h-8" />,
        size: 'small',
        color: 'from-[#001F3F] to-[#1A2F5F]'
    },
];

export default function ServicesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-[#F8F9FA]">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    subtitle="Nos Services"
                    title="Services automobiles complets"
                    description="Du diagnostic à la réparation, nous couvrons tous vos besoins d'entretien et de maintenance véhicule."
                />

                {/* Bento Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className={service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                        >
                            <Card className="h-full overflow-hidden group" hover>
                                <div className={`bg-gradient-to-br ${service.color} -mx-6 -mt-6 mb-6 p-6 text-white flex items-center justify-center h-32 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[#6B7280]">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 p-8 bg-white border-2 border-[#D32F2F] rounded-2xl text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <AlertCircle className="text-[#D32F2F]" size={24} />
                        <p className="text-lg font-semibold text-[#001F3F]">
                            Vous ne trouvez pas ce que vous cherchez ?
                        </p>
                    </div>
                    <p className="text-[#6B7280] mb-6">
                        Contactez-nous directement pour des services spécifiques ou des devis personnalisés.
                    </p>
                    <a
                        href="tel:0227560404"
                        className="inline-block px-8 py-3 bg-[#D32F2F] text-white font-semibold rounded-xl hover:bg-[#B71C1C] transition-colors"
                    >
                        Nous appeler
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
