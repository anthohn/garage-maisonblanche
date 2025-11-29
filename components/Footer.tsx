import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Contact & Map */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Garage Maison-Blanche SA</h2>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Jean-François Höhn<br />
                            500, Route de Chancy<br />
                            1284 Chancy
                        </p>
                        <p className="mb-6">
                            <a href="mailto:contact@garage-maisonblanche.ch" className="text-blue-900 hover:text-blue-600 transition-colors">
                                contact@garage-maisonblanche.ch
                            </a>
                        </p>
                        <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                src="https://maps.google.com/maps?q=Garage+Maison-Blanche+500+Route+de+Chancy+1284+Chancy&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Atelier & Lavage */}
                    <div>
                        {/* Atelier */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-2">L' Atelier</h3>
                            <div className="flex justify-between text-sm text-gray-400">
                                <div>
                                    <p>Lundi au Vendredi</p>
                                    <p className="mt-2">Vendredi après-midi</p>
                                </div>
                                <div className="text-right">
                                    <p>7h30 - 12h00<br />13h30 - 18h00</p>
                                    <p className="mt-2">13h30 - 17h00</p>
                                </div>
                            </div>
                            <div className="flex justify-between text-sm text-gray-400 mt-4">
                                <div>
                                    <p>Tél. <a href="tel:+41227560404" className="text-white hover:text-blue-900 transition-colors">+41 22 756 04 04</a></p>
                                    <p>Fax +41 22 756 15 58</p>
                                </div>
                                <div className="text-right">
                                    <a href="mailto:contact@garage-maisonblanche.ch" className="text-blue-900 hover:text-blue-600 transition-colors">contact@garage-maisonblanche.ch</a>
                                </div>
                            </div>
                        </div>

                        {/* Lavage */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-2">Le Lavage</h3>
                            <div className="flex justify-between text-sm text-gray-400">
                                <div>
                                    <p>Lundi au Dimanche</p>
                                </div>
                                <div className="text-right">
                                    <p>6h00 - 22h00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shop & Station */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-2">Le Shop & La Station-service</h3>
                        <div className="flex justify-between text-sm text-gray-400 mb-4">
                            <div>
                                <p>Lundi au Vendredi</p>
                                <p>Samedi</p>
                                <p>Dimanche</p>
                            </div>
                            <div className="text-right">
                                <p>6h00 - 20h00</p>
                                <p>7h00 - 20h00</p>
                                <p>7h30 - 20h00</p>
                            </div>
                        </div>

                        <div className="flex justify-between text-sm text-gray-400 mb-4">
                            <div>
                                <p>Automate à billets/cartes</p>
                            </div>
                            <div className="text-right">
                                <p>7/7 jours - 24/24 heures</p>
                            </div>
                        </div>

                        <div className="flex justify-between text-sm text-gray-400">
                            <div>
                                <p>Tél. <a href="tel:+41227561522" className="text-white hover:text-blue-900 transition-colors">+41 22 756 15 22</a></p>
                            </div>
                            <div className="text-right">
                                <a href="mailto:contact@station-maisonblanche.ch" className="text-blue-900 hover:text-blue-600 transition-colors">contact@station-maisonblanche.ch</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm text-gray-500 mb-2">
                        Copyright &copy; {new Date().getFullYear()} - Garage Maison-Blanche
                    </p>
                    <p className="text-xs text-gray-600">
                        Designed by <span className="font-serif text-gray-500">bni</span> - <a href="https://www.bni.ch" target="_blank" className="hover:text-gray-400 transition-colors">Business Network Integration</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
