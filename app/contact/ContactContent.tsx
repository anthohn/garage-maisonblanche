'use client'
import { useState } from 'react';
import { UserPlus, QrCode } from 'lucide-react';
import Badge from '@/app/components/ui/Badge';
import ModernButton from '@/app/components/ui/ModernButton';
import QrCodeModal from '@/app/components/QrCodeModal';

export default function ContactContent() {
    const [isQrOpen, setIsQrOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
    });

    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleAddContact = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof window !== 'undefined' && navigator.canShare) {
            try {
                const res = await fetch('/api/vcard');
                const vcardText = await res.text();
                const file = new File([vcardText], 'garage-maisonblanche.vcf', { type: 'text/vcard' });
                if (navigator.canShare({ files: [file] })) {
                    e.preventDefault();
                    await navigator.share({
                        files: [file],
                        title: 'Garage Maison-Blanche SA',
                    });
                }
            } catch {
                // Fallback direct navigation
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-100 to-blue-50">


            {/* Header Section */}
            <div className="relative z-10 pt-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    {/* <Badge className="mb-6">
                        Contactez-nous
                    </Badge> */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contactez le Garage Maison-Blanche à Chancy</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Où et comment nous contacter pour tous vos besoins automobiles
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="nom"
                                            placeholder="Nom :"
                                            value={formData.nom}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#303F9F] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="prenom"
                                            placeholder="Prénom :"
                                            value={formData.prenom}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#303F9F] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail :"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#303F9F] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="telephone"
                                            placeholder="Téléphone :"
                                            value={formData.telephone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#303F9F] focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message :"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#303F9F] focus:border-transparent transition-all resize-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <ModernButton
                                        onClick={() => { }}
                                        size="md"
                                        showArrow={false}
                                    >
                                        Envoyer le message
                                    </ModernButton>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-[#303F9F]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Notre newsletter</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Abonnez-vous à notre newsletter pour ne manquer aucune de nos offres et réductions
                                </p>
                            </div>

                            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Votre e-mail"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#303F9F] focus:border-transparent transition-all"
                                    required
                                />
                                <ModernButton
                                    onClick={() => { }}
                                    size="md"
                                    className="w-full"
                                    showArrow={false}
                                    type="submit"
                                >
                                    S&apos;abonner
                                </ModernButton>
                            </form>
                        </div>
                    </div>
                </div> */}

                {/* Map Section */}
                <div className="mb-16">
                    {/* Carte Ajouter aux contacts */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-8 my-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ajouter aux contacts</h2>
                            <p className="text-gray-600 text-sm max-w-xl">
                                Enregistrez en 1 clic le Garage Maison-Blanche dans le carnet d&apos;adresses de votre smartphone (téléphone atelier, e-mail, adresse GPS &amp; horaires).
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                            <a
                                href="/api/vcard"
                                onClick={handleAddContact}
                                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#303F9F] hover:bg-[#283593] active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-900/20 transition-all cursor-pointer"
                            >
                                <UserPlus size={18} />
                                <span>Ajouter aux contacts</span>
                            </a>
                            <button
                                onClick={() => setIsQrOpen(true)}
                                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm flex items-center justify-center gap-2 transition-colors border border-gray-200 cursor-pointer"
                            >
                                <QrCode size={18} className="text-[#303F9F]" />
                                <span>Afficher le QR Code</span>
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-8 my-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Venez nous rendre visite</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-start space-x-3">
                                <svg className="w-6 h-6 text-[#303F9F] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-gray-900">Route de Chancy 500</p>
                                    <p className="text-gray-600">1284 Chancy, Genève</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <svg className="w-6 h-6 text-[#303F9F] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <div className="w-full">
                                    <p className="font-semibold text-gray-900 mb-3">Horaires d&apos;ouverture</p>
                                    <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-3 text-gray-600">
                                        <div className="font-medium self-center">Lun - Jeu</div>
                                        <div className="text-right leading-tight">
                                            <div>07:30 - 12:00</div>
                                            <div>13:30 - 18:00</div>
                                        </div>

                                        <div className="col-span-2 border-b border-gray-100/50"></div>

                                        <div className="font-medium self-center">Vendredi</div>
                                        <div className="text-right leading-tight">
                                            <div>07:30 - 12:00</div>
                                            <div>13:30 - 17:00</div>
                                        </div>

                                        <div className="col-span-2 border-b border-gray-100/50"></div>

                                        <div className="font-medium text-gray-400">Sam - Dim</div>
                                        <div className="text-right text-gray-400 font-medium">Fermé</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-[#303F9F] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">Garage</p>
                                        <a href="tel:+41227560404" className="text-gray-600 hover:text-blue-600 transition-colors">+41 22 756 04 04</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-[#303F9F] shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">Mobile</p>
                                        <a href="tel:+41793601347" className="text-gray-600 hover:text-blue-600 transition-colors">+41 79 360 13 47</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-[#303F9F] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <a href="mailto:atelier@garage-maisonblanche.ch" className="text-gray-600 hover:text-blue-600 transition-colors">atelier@garage-maisonblanche.ch</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Badge>Localisation</Badge>


                    {/* Map Full Width */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-2 mt-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.123456789!2d6.123456!3d46.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRoute%20de%20Chancy%20500%2C%201284%20Chancy%2C%20Suisse!5e0!3m2!1sen!2sch!4v1234567890123"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full rounded-2xl"
                            title="Localisation du Garage Maison-Blanche à Chancy sur Google Maps"
                        />
                    </div>
                </div>
            </div>

            {/* Modal QR Code */}
            <QrCodeModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
        </div>
    );
}
