'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import Image from "next/image";
import ModernButton from "@/app/components/ui/ModernButton";
import OpenStatus from "@/app/components/ui/OpenStatus";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Header flottant avec design en 3 sections */}
            <motion.nav
                className="fixed top-6 left-6 right-6 z-50 transition-all duration-300"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.4
                }}
            >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50">
                    <div className="px-6 py-4 flex items-center justify-between max-w-screen-2xl mx-auto">
                        {/* Section 1: Logo à gauche */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3 text-black text-xl md:text-2xl font-bold hover:text-gray-600 transition-colors">
                                <Image
                                    src="/logo.png"
                                    alt="Logo Garage Maison-Blanche"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                                <span className="hidden sm:block">Garage Maison-Blanche</span>
                                <span className="sm:hidden">GMB</span>
                            </Link>
                        </div>

                        {/* Section 2: Navigation au centre (desktop) */}
                        <div className="hidden md:flex items-center space-x-8">
                            {links.map((link, idx) => (
                                <Link
                                    key={link.href + idx}
                                    href={link.href}
                                    className="text-gray-700 hover:text-[#303F9F] font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Section 3: CTA à droite */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:block">
                                <OpenStatus />
                            </div>

                            <ModernButton
                                href="/contact"
                                size="sm"
                                className="text-sm"
                                showArrow={false}
                            >
                                Contact
                            </ModernButton>

                            {/* Hamburger Menu Button for mobile */}
                            <div className="flex md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="relative w-8 h-8 flex items-center justify-center text-gray-700"
                                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                                >
                                    <motion.span
                                        className="block absolute h-0.5 w-6 bg-gray-700"
                                        initial={false}
                                        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.span
                                        className="block absolute h-0.5 w-6 bg-gray-700"
                                        initial={false}
                                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.span
                                        className="block absolute h-0.5 w-6 bg-gray-700"
                                        initial={false}
                                        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-6 py-4 space-y-3">
                                {links.map((link, idx) => (
                                    <Link
                                        key={link.href + idx}
                                        href={link.href}
                                        className="block text-gray-700 hover:text-[#303F9F] font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}