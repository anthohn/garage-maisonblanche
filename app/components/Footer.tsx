import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Fuel } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-gray-50 to-blue-600/30 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">

                    {/* 1. Brand & Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="text-2xl font-bold tracking-tight text-gray-900">Garage Maison-Blanche</div>
                            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Membre carXpert</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Votre partenaire de confiance pour l&apos;entretien et la réparation automobile.
                            Expertise technique et service personnalisé.
                        </p>
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <MapPin size={20} className="text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Adresse</h4>
                                <p className="text-sm">500, Route de Chancy<br />1284 Chancy</p>
                                <a
                                    href="https://www.google.com/maps?q=Garage+Maison-Blanche+500+Route+de+Chancy+1284+Chancy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-600 hover:underline mt-1 block"
                                >
                                    Voir sur la carte
                                </a>
                            </div>
                        </div>
                        {/* Social Links */}
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.facebook.com/profile.php?id=100064107662482" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-400 hover:text-blue-600 hover:shadow-md transition-all border border-gray-100" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/garage_maisonblanche" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-400 hover:text-pink-600 hover:shadow-md transition-all border border-gray-100" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* 2. Contact */}
                    <div className="space-y-6">
                        <div className="text-lg font-bold text-gray-900">Nous Contacter</div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <Phone size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Téléphone</h4>
                                    <a href="tel:+41227560404" className="text-sm hover:text-blue-600 transition-colors block">+41 22 756 04 04</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <Mail size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:atelier@garage-maisonblanche.ch" className="text-sm hover:text-blue-600 transition-colors block">atelier@garage-maisonblanche.ch</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Horaires Atelier */}
                    <div className="space-y-6">
                        <div className="text-lg font-bold flex items-center gap-2 text-gray-900">
                            <Clock size={20} className="text-blue-600" />
                            Horaires Atelier
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">Lundi - Jeudi</span>
                                    <span className="text-gray-900 font-medium text-right">07:30 - 12:00<br />13:30 - 18:00</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">Vendredi</span>
                                    <span className="text-gray-900 font-medium text-right">07:30 - 12:00<br />13:30 - 17:00</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-gray-500">Samedi - Dimanche</span>
                                    <span className="text-gray-900 font-medium">Fermé</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Station Services */}
                    <div className="space-y-6">
                        <div className="text-lg font-bold flex items-center gap-2 text-gray-900">
                            <Fuel size={20} className="text-blue-600" />
                            Station & Shop
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Découvrez notre station-service et shop partenaire, juste à côté du garage.
                        </p>
                        <div className="space-y-3 text-sm">
                            <a href="https://station-maisonblanche.ch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                                Visiter le site web
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                        {/* Social Links Station */}
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.facebook.com/profile.php?id=61580606409294" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-400 hover:text-blue-600 hover:shadow-md transition-all border border-gray-100" aria-label="Facebook Station">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/station_maisonblanche" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-400 hover:text-pink-600 hover:shadow-md transition-all border border-gray-100" aria-label="Instagram Station">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Garage Maison-Blanche SA • Réalisé par : <a href="https://anthony-hohn.ch" target="_blank" className="hover:text-blue-600 transition-colors">Anthony Höhn</a></p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:text-blue-600 transition-colors">Mentions Légales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
