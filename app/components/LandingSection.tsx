'use client'

import Image from "next/image";
import Background from '@/public/photoGarage.png'
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";
// import SnowEffect from "@/app/components/ui/SnowEffect";

import ModernButton from "@/app/components/ui/ModernButton";

export default function LandingSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden font-sans">
            {/* <SnowEffect /> */}
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
                {/* Gradient overlay - Removed heavy black overlays, lighter gradient for text readability if needed */}
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />
                {/* <div className="absolute inset-0 bg-linear-to-t from-blue-900/50 via-transparent to-transparent" /> */}
            </div>
            {/* <SnowEffect /> */}

            {/* Main Content Container */}
            <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">

                {/* Center-Left: Headline & CTA */}
                <div className="max-w-2xl mt-[-50px]"> {/* Slight negative margin to offset visual center */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-blue-100 text-sm font-semibold tracking-wider uppercase">Garage Maison-Blanche SA</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                            Réparation et Maintenance <br />
                            <span className="text-3xl md:text-5xl font-semibold">Toutes Marques</span>
                        </h1>
                        <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-xl drop-shadow-md">
                            L&apos;avenir c&apos;est maintenant. Nous transformons vos ambitions en réalités durables avec une expertise multimarque de pointe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 items-center flex-wrap">
                            {/* <ModernButton
                                href="#"
                                variant="primary"
                                className="shadow-lg hover:shadow-blue-500/30"
                            >
                                Prendre Rendez-vous
                            </ModernButton> */}

                            {/* Phone CTA */}
                            <ModernButton
                                href="tel:+41227560404"
                                variant="primary"
                                className="rounded-full! px-6"
                                icon={<span className="text-white bg-transparent rounded-full"><Phone className="w-6 h-6" /></span>}
                                showArrow={false}
                            >
                                Prendre Rendez-vous
                            </ModernButton>
                            <ModernButton
                                href="https://www.google.com/maps/search/?api=1&query=Garage+Maison-Blanche+500+Route+de+Chancy+1284+Chancy"
                                variant="glass"
                                className="rounded-full! px-6"
                                icon={<span className="text-white bg-transparent rounded-full"><MapPin className="w-6 h-6" /></span>}
                                showArrow={false}
                                target="_blank"
                            >
                                Itinéraire
                            </ModernButton>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Left: Stats */}
                <div className="absolute bottom-12 left-6 md:left-12 flex gap-8 md:gap-16 text-white">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold mb-1 drop-shadow-md">5k+</div>
                        <div className="text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Réparations</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold mb-1 drop-shadow-md">CarXpert</div>
                        <div className="text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Partenaire</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold mb-1 drop-shadow-md">25</div>
                        <div className="text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Années d&apos;Expérience</div>
                    </motion.div>
                </div>

                {/* Bottom Right: Feature Card (Glassmorphism) */}
                <motion.div
                    className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:block hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <a href="https://station-maisonblanche.ch/" target="_blank" className="block bg-black/40 border border-white/10 rounded-3xl p-4 hover:bg-black/50 transition-all group shadow-2xl">
                        <div className="flex items-center justify-between gap-4">
                            {/* Icon container matching inspiration style more closely - clean rounded square or circle without heavy bg if image is sufficient */}
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
