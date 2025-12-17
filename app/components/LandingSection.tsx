'use client'

import Image from "next/image";
import Background from '@/public/photoGarage.png'
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";

import ModernButton from "@/app/components/ui/ModernButton";

export default function LandingSection() {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden font-sans">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={Background}
                    alt="Atelier Garage Maison Blanche"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient overlay - Removed heavy black overlays, lighter gradient for text readability if needed */}
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" /> */}
            </div>

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
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                            Réparation et Maintenance <br />
                            <span className="text-4xl md:text-6xl font-semibold">Toutes Marques</span>
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
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold mb-1 drop-shadow-md">15+</div>
                        <div className="text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Années d&apos;Expérience</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold mb-1 drop-shadow-md">5k+</div>
                        <div className="text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Réparations</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold mb-1 drop-shadow-md">100%</div>
                        <div className="text-sm text-gray-200 uppercase tracking-wider drop-shadow-sm">Satisfaction</div>
                    </motion.div>
                </div>

                {/* Bottom Right: Feature Card (Glassmorphism) */}
                <motion.div
                    className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <a href="#" className="block w-80 bg-black/40 border border-white/10 rounded-3xl p-6 hover:bg-black/50 transition-all group shadow-2xl">
                        <div className="flex items-start justify-between mb-4">
                            {/* Icon container matching inspiration style more closely - clean rounded square or circle without heavy bg if image is sufficient */}
                            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                                <Image
                                    src="/logoStation.png"
                                    alt="Logo Station"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <ArrowRight className="text-white w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 transform translate-x-1" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Station Service & Shop</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Faites le plein et profitez de notre boutique. Ouvert 7j/7.
                        </p>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
