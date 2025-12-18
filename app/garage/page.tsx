import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "L'Atelier mécanique | Garage Maison-Blanche",
    description: "Réparation et maintenance toutes marques. Membre du réseau carXpert. Véhicule de prêt.",
};

export default function Garage() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <div className="relative h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/img/front4.jpg)' }}>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
                        <span className="bg-blue-900 px-4 py-2 inline-block">Garage Maison-Blanche</span>
                    </h1>
                    <p className="text-xl font-light mt-4">
                        <span className="bg-white text-gray-900 px-2 py-1 font-medium">Jean-François Höhn</span>
                        <br className="my-2" />
                        Le meilleur service pour la réparation et l'entretien de votre voiture
                    </p>
                </div>
            </div>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-5/12">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-900 pl-4">L'Atelier</h2>
                            <h4 className="text-xl text-gray-600 mb-6 font-light">Réparation et maintenance toutes marques</h4>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Fort de notre expérience, notre équipe de mécanicien qualifié effectue la maintenance et réparation de véhicule neuf ou ancien en respectant à la lettre les directives des constructeurs.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Notre atelier est équipé des traditionnels outils de mécanique ainsi que de différent appareils de diagnostique électronique qui nous permets d'intervenir sur toutes marques de véhicules.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nous prenons en charge les travaux de carrosserie et de remplacement de pare-brise.
                            </p>
                            <h6 className="font-bold text-gray-800 mb-2">Membre du réseau</h6>
                            <img src="/img/partners/carxpert.png" alt="logo carxpert" className="max-w-[200px]" />
                        </div>

                        <div className="md:w-7/12 flex flex-col justify-between">
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                    <img src="/img/man1.jpg" className="w-full h-auto rounded shadow-sm" alt="" />
                                </div>
                                <div className="space-y-4">
                                    <div className="p-2 bg-gray-50 rounded-lg">
                                        <img src="/img/man2.jpg" className="w-full h-auto rounded shadow-sm" alt="" />
                                    </div>
                                    <div className="p-2 bg-gray-50 rounded-lg">
                                        <img src="/img/man3.jpg" className="w-full h-auto rounded shadow-sm" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex gap-4">
                                <div className="shrink-0">
                                    <i className="flaticon-car-4 text-3xl text-blue-500"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">FAQ carXpert</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Peut-on confier son véhicule à un garage <span className="font-semibold">carXpert</span> pour des réparations sous garantie ?
                                        Est-ce que les garages <span className="font-semibold">carXpert</span> utilisent des pièces d'origine ?
                                    </p>
                                    <a href="/doc/FAQ_F_CX.pdf" target="_blank" className="text-blue-600 hover:underline font-semibold text-sm">
                                        Consultez les réponses à toutes ces questions dans la FAQ carXpert →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-16 bg-gray-100 bg-no-repeat bg-bottom-right" style={{ backgroundImage: 'url("/img/bg2.png")' }}>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Left Column */}
                        <div className="text-right space-y-4">
                            <h5 className="font-medium text-gray-700">Contrôle antipollution</h5>
                            <h5 className="font-medium text-gray-700">Préparation expertise</h5>
                            <h5 className="font-medium text-gray-700">Lavage châssis moteur</h5>
                            <h5 className="font-medium text-gray-700">Service climatisation</h5>
                            <h5 className="font-medium text-gray-700">Freins</h5>
                            <h5 className="font-medium text-gray-700">Pneus toutes marque</h5>
                            <h5 className="font-medium text-gray-700">Montage équilibrage</h5>
                            <h5 className="font-medium text-gray-700">Gardiennage pneus-roues</h5>
                            <h5 className="font-medium text-gray-700">Echappement</h5>
                            <h5 className="font-medium text-gray-700">Amortisseurs</h5>
                        </div>

                        {/* Center Icons */}
                        <div className="flex flex-col items-center gap-8 py-8 md:py-0">
                            <i className="flaticon-car-1 text-4xl text-gray-400"></i>
                            <i className="flaticon-car-repair text-4xl text-gray-400"></i>
                            <i className="flaticon-car-repair-12 text-4xl text-gray-400"></i>
                            <i className="flaticon-car-repair-9 text-4xl text-gray-400 hidden md:block"></i>
                            <i className="flaticon-car-breakdown-3 text-4xl text-gray-400"></i>
                            <i className="flaticon-car-repair-5 text-4xl text-gray-400"></i>
                        </div>

                        {/* Right Column */}
                        <div className="text-left space-y-4">
                            <h5 className="font-medium text-gray-700">Diagnostique électronique</h5>
                            <h5 className="font-medium text-gray-700">Electricité</h5>
                            <h5 className="font-medium text-gray-700">Rectification disque de frein</h5>
                            <h5 className="font-medium text-gray-700">Alternateur - Démarreur</h5>
                            <h5 className="font-medium text-gray-700">Remplacement pare-brise</h5>
                            <h5 className="font-medium text-gray-700">Service multi-marque</h5>
                            <h5 className="font-medium text-gray-700">Courroie de distribution</h5>
                            <h5 className="font-medium text-gray-700">Embrayage</h5>
                            <h5 className="font-medium text-gray-700">Batterie</h5>
                            <h5 className="font-medium text-gray-700">Prise en charge carrosserie</h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loaner Car Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3">
                            <img className="rounded-lg shadow-lg" src="/img/vehicule-pret.jpg" alt="Véhicule de prêt" />
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Un <span className="text-blue-900">véhicule</span> de prêt</h2>
                            <h4 className="text-xl text-gray-600 mb-6 font-light">Pendant la réparation/révision de votre véhicule</h4>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Afin que vous puissiez vous déplacer en toute quiétude nous vous mettons un <span className="font-semibold">véhicule à disposition dès 27.- CHF par jour</span> avec boite automatique ou manuel.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Prise en charge gratuitement du véhicule au domicile du client ou ramener le client à son domicile dans un rayon de 10 km.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
