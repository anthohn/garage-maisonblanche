'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserPlus, QrCode, Share2, Check } from 'lucide-react';
import QRCode from 'qrcode';
import Image from 'next/image';

interface QrCodeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QrCodeModal({ isOpen, onClose }: QrCodeModalProps) {
    const [qrDataUrl, setQrDataUrl] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        if (!isOpen) return;

        const vcardUrl = typeof window !== 'undefined'
            ? `${window.location.origin}/api/vcard`
            : 'https://garage-maisonblanche.ch/api/vcard';

        QRCode.toDataURL(vcardUrl, {
            width: 320,
            margin: 2,
            color: {
                dark: '#1e293b',
                light: '#ffffff',
            },
            errorCorrectionLevel: 'M',
        })
            .then((url) => setQrDataUrl(url))
            .catch(() => { });
    }, [isOpen]);

    const handleShare = async () => {
        const vcardUrl = typeof window !== 'undefined'
            ? `${window.location.origin}/api/vcard`
            : 'https://garage-maisonblanche.ch/api/vcard';

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Garage Maison-Blanche SA',
                    text: 'Contact et coordonnées du Garage Maison-Blanche à Chancy',
                    url: vcardUrl,
                });
            } catch {
                // Share cancelled
            }
        } else {
            await navigator.clipboard.writeText(vcardUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl z-10 border border-slate-100 text-center flex flex-col items-center"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Fermer"
                        >
                            <X size={18} />
                        </button>

                        {/* Brand Icon / Logo */}
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 p-2">
                            <Image
                                src="/logo.png"
                                alt="Garage Maison-Blanche"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 leading-tight">
                            Scannez pour ajouter
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 mb-5">
                            Ouvrez l&apos;appareil photo de votre smartphone pour enregistrer directement le contact du garage.
                        </p>

                        {/* QR Code Container */}
                        <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-inner mb-5 flex items-center justify-center w-52 h-52 relative">
                            {qrDataUrl ? (
                                <Image
                                    src={qrDataUrl}
                                    alt="QR Code vCard Garage Maison-Blanche"
                                    width={192}
                                    height={192}
                                    className="rounded-xl"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <QrCode className="animate-pulse" size={32} />
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="w-full space-y-2.5">
                            <a
                                href="/api/vcard"
                                className="w-full py-3.5 px-4 rounded-full bg-[#303F9F] hover:bg-[#283593] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-900/20 transition-all cursor-pointer"
                            >
                                <UserPlus size={16} />
                                Ajouter aux contacts
                            </a>

                            <button
                                onClick={handleShare}
                                className="w-full py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all border border-slate-200 cursor-pointer"
                            >
                                {copied ? <Check size={16} className="text-emerald-600" /> : <Share2 size={16} />}
                                <span>{copied ? 'Lien copié !' : 'Partager la vCard'}</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
