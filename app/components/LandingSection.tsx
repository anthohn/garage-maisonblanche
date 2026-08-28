'use client'

import Image from "next/image";
import Background from '@/public/photoGarage.jpg'
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";

import ModernButton from "@/app/components/ui/ModernButton";

export default function LandingSection() {
    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden font-sans flex flex-col justify-between pt-28 pb-8 md:py-0">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={Background}
                    alt="Atelier Garage Maison Blanche"
                    fill
                    className="object-cover object-center blur-[2px]"
                    priority
                    placeholder="blur"
                    sizes="100vw"
                />
                {/* Gradient overlay - Lighter gradient for readability while keeping background visible */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20 md:from-black/50 md:via-transparent md:to-transparent" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center flex-1 my-auto">

                {/* Center-Left: Headline & CTA */}
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 backdrop-blur-sm mb-4">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-blue-100 text-xs sm:text-sm font-semibold tracking-wider uppercase">Garage Maison-Blanche SA</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-3 md:mb-4">
                            Réparation et Maintenance <br />
                            <span className="text-2xl sm:text-3xl md:text-5xl font-semibold">Toutes Marques</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-gray-100 mb-6 md:mb-10 leading-relaxed max-w-xl drop-shadow-md">
                            L&apos;avenir c&apos;est maintenant. Nous transformons vos ambitions en réalités durables avec une expertise multimarque de pointe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-stretch sm:items-center">
                            {/* Phone CTA */}
                            <ModernButton
                                href="tel:+41227560404"
                                variant="primary"
                                className="rounded-full! px-6 text-sm md:text-base py-3"
                                icon={<span className="text-white bg-transparent rounded-full"><Phone className="w-5 h-5 md:w-6 md:h-6" /></span>}
                                showArrow={false}
                            >
                                Prendre Rendez-vous
                            </ModernButton>
                            <ModernButton
                                href="https://www.google.com/maps/search/?api=1&query=Garage+Maison-Blanche+500+Route+de+Chancy+1284+Chancy"
                                variant="glass"
                                className="rounded-full! px-6 text-sm md:text-base py-3"
                                icon={<span className="text-white bg-transparent rounded-full"><MapPin className="w-5 h-5 md:w-6 md:h-6" /></span>}
                                showArrow={false}
                                target="_blank"
                            >
                                Itinéraire
                            </ModernButton>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Section: Stats & Feature Card */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-6 md:pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                {/* Bottom Left: Stats */}
                <div className="flex gap-4 sm:gap-8 md:gap-16 text-white w-full md:w-auto justify-between sm:justify-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 drop-shadow-md">5k+</div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Réparations</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 drop-shadow-md">CarXpert</div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Partenaire</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 drop-shadow-md">25</div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Années d&apos;Expérience</div>
                    </motion.div>
                </div>

                {/* Bottom Right: Feature Card (Glassmorphism) */}
                <motion.div
                    className="z-20 hidden md:block hover:scale-105 transition-all duration-300 shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <a href="https://station-maisonblanche.ch/" target="_blank" rel="noopener noreferrer" className="block bg-black/40 border border-white/10 rounded-3xl p-4 hover:bg-black/50 transition-all group shadow-2xl">
                        <div className="flex items-center justify-between gap-4">
                            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-white/10 shadow-inner">
                                <Image
                                    src="/logoStation.png"
                                    alt="Logo Station"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Station Service & Shop</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Faites le plein et profitez de notre boutique. Ouvert 7j/7.
                                </p>
                            </div>
                            <ArrowRight className="text-white w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300 transform translate-x-1" />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
