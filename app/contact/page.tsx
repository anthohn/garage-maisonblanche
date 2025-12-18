'use client'
import { useState } from 'react';
import Badge from '@/app/components/ui/Badge';
import ModernButton from '@/app/components/ui/ModernButton';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
    });

    const [newsletterEmail, setNewsletterEmail] = useState('');

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
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact</h1>
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
                    {/* Contact Info */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-8 my-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Venez nous rendre visite</h3>
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
                                <div>
                                    <p className="font-semibold text-gray-900">Horaires d&apos;ouverture</p>
                                    <p className="text-gray-600">Du lundi au vendredi : 8h00 - 18h00</p>
                                    <p className="text-gray-600">Samedi : 8h00 - 12h00</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-[#303F9F] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">Téléphone</p>
                                        <a href="tel:+41227560404" className="text-gray-600 hover:text-blue-600 transition-colors">+41 22 756 04 04</a>
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}