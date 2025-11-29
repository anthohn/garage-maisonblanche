import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "La Station-Service | Garage Maison-Blanche",
    description: "Faire le plein de carburant 7/7 jours - 24/24 heures. Carburants Shell V-Power 100, Diesel et Sans Plomb 95.",
};

export default function Station() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <div className="relative h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/img/oil.jpg)' }}>
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
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 text-center">
                            <img className="w-full max-w-xs mx-auto p-4 border border-gray-200 rounded-lg shadow-sm" src="/img/logo-shell-3carb3.png" alt="Shell Logo" />
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-blue-900 pl-4">La Station-Service</h2>
                            <h4 className="text-xl text-gray-600 mb-6 font-light">Faire le plein de carburant 7/7 jours - 24/24 heures</h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Shell développe des carburants performants depuis plus de 100 ans. Avec les carburants de qualité Shell sans plomb 95 et Shell Diesel, vous bénéficier des technologies DYNAFLEX.<br />
                                Les carburants avec technologies DYNAFLEX aident à garder votre moteur propre et à le protéger pour un fonctionnement efficace.
                            </p>
                            <h5 className="font-bold text-gray-800 mb-3">Les carburants disponibles</h5>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Shell V-Power 100</li>
                                <li>Shell Diesel</li>
                                <li>Shell Sans Plomb 95</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800">A votre <span className="text-blue-900">disposition</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Nettoyage */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <i className="flaticon-car-7 text-4xl text-gray-400"></i>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Nettoyage du pare-brise</h4>
                                <p className="text-gray-600">
                                    Pour une visibilité impeccable.<br />
                                    Nous mettons à votre disposition le matériel nécessaire <span className="font-semibold">pour un nettoyage simple et rapide</span> de vos vitres extérieurs. Pour un nettoyage intérieur, différents produits sont en ventes à notre shop.
                                </p>
                            </div>
                        </div>

                        {/* Pression */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <i className="flaticon-wheel text-4xl text-gray-400"></i>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Pression des pneus</h4>
                                <p className="text-gray-600">
                                    Pas seulement une question de sécurité !<br />
                                    Des pneus <span className="font-semibold">trop ou pas assez gonflés</span> augmentent la consommation de carburant et affecte leur durée de vie. Plusieurs bonnes raisons de vérifier régulièrement leurs pressions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contrôle */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
                        <div className="flex-shrink-0">
                            <i className="flaticon-car-repair-12 text-4xl text-gray-400"></i>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Contrôle des niveaux</h4>
                            <p className="text-gray-600">
                                Il n'y a pas que de l'huile...<br />
                                Afin de prolonger la durée de vie et d'optimiser la performance du moteur controlez periodiquement son niveau d'huile.<br />
                                <span className="font-semibold">Tout aussi important</span>, le niveau du liquide de freins, du produit lave-glace, d'antigel pour le radiateur/lave-glace et bien d'autres système hydraulique présent dans votre véhicule.<br />
                                Notre équipe de mécanicien vous conseillera volontiers pendant les heures d'ouverture de l'atelier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
