'use client'
import Button from './ui/Button';
import { Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
            {/* Arrière-plan dégradé moderne */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-navy/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge de suivi */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-8"
                >
                    <div className="bg-white/80 backdrop-blur border border-red/20 rounded-full px-6 py-3 inline-flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-[#1F2937]">Garage ouvert aujourd&apos;hui</span>
                    </div>
                </motion.div>

                {/* Titre principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-navy-dark mb-6 leading-tight"
                >
                    Votre expert auto à <span className="text-red">Chancy</span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-text-light mb-12 max-w-2xl mx-auto"
                >
                    Réparation, entretien et vente de véhicules de qualité. Expertise depuis plus de 15 ans au service de votre confiance.
                </motion.p>

                {/* Boutons CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <Button
                        href="tel:0227560404"
                        size="lg"
                        className="flex items-center justify-center gap-2"
                        showArrow={false}
                    >
                        <Phone size={20} />
                        Appeler maintenant
                    </Button>
                    <Button
                        href="#contact"
                        variant="outline"
                        size="lg"
                        className="flex items-center justify-center gap-2"
                        showArrow={false}
                    >
                        <MapPin size={20} />
                        Notre localisation
                    </Button>
                </motion.div>

                {/* Info rapide */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20"
                >
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-[#001F3F]">15+</div>
                        <p className="text-sm text-[#6B7280] mt-2">Années d&apos;expérience</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-[#D32F2F]">2000+</div>
                        <p className="text-sm text-[#6B7280] mt-2">Clients satisfaits</p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-3xl md:text-4xl font-bold text-[#1A2F5F]">24h</div>
                        <p className="text-sm text-[#6B7280] mt-2">Service rapide</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
