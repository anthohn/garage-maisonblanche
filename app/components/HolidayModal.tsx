'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Snowflake, CalendarCheck } from 'lucide-react';
import SnowEffect from '@/app/components/ui/SnowEffect';

export default function HolidayModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the modal has been closed in this session
        // using 'v3' key for simplified design verification
        const hasSeenModal = sessionStorage.getItem('hasSeenHolidayModal_2025_v3');

        // Only show if not seen yet
        if (!hasSeenModal) {
            // Small delay to ensure smooth entry after page load
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenHolidayModal_2025_v3', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans">
                    {/* Backdrop with Blur and Snow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    >
                        <SnowEffect />
                    </motion.div>

                    {/* Modal Content - Clean White Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="space-y-6">
                            {/* Header Section */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                {/* <div className="bg-blue-50 p-3 rounded-full mb-2">
                                    <Snowflake className="text-[#303F9F] w-8 h-8" />
                                </div> */}

                                <h2 className="text-3xl md:text-5xl font-bold text-[#303F9F] tracking-tight">
                                    Garage Maison-Blanche SA
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-500 font-medium">
                                    ainsi que toute son équipe
                                </p>
                            </div>

                            {/* Message Section */}
                            <div className="py-4 border-y border-gray-100">
                                <p className="text-xl md:text-2xl text-gray-700 font-semibold leading-relaxed">
                                    Remercie sa clientèle et lui souhaite <br className="hidden md:block" />
                                    <span className="text-[#0D47A1]">d’excellentes fêtes de fin d’année</span>
                                </p>
                            </div>

                            {/* Reopening Section */}
                            <div className="flex flex-col items-center gap-2 pt-2">
                                <p className="text-lg text-gray-600">Nous nous réjouissons de vous retrouver dès le</p>
                                <div className="inline-flex items-center gap-2 bg-[#303F9F] text-white px-6 py-3 rounded-lg shadow-md">
                                    <CalendarCheck className="w-5 h-5" />
                                    <span className="text-lg font-bold">Lundi 5 Janvier 2026</span>
                                </div>
                            </div>

                            {/* Signature */}
                            <div className="pt-6 flex justify-end">
                                <p className="text-xl text-[#303F9F] font-bold italic">
                                    Jean-François Höhn
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
