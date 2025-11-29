import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Le Lavage | Garage Maison-Blanche",
    description: "Installation de lavage ouverte 7/7 jours de 6h00 à 22h00. Haute pression, aspirateur et produits d'entretien.",
};

export default function Lavage() {
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
                        <div className="md:w-2/3 text-right">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-r-4 border-blue-900 pr-4">Le Lavage</h2>
                            <h4 className="text-xl text-gray-600 mb-6 font-light">Une installation de lavage pour votre véhicule ouvert 7/7 jours de 6h00 à 22h00</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Chez nous, vous trouverez tout ce qui concerne le nettoyage de votre véhicule. De nombreux produits pour le nettoyage de la carrosserie ainsi que pour l'intérieur sont disponibles dans notre shop.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <img className="rounded-lg shadow-lg w-full" src="/img/self-car-washing.jpg" alt="Lavage auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">A votre <span className="text-blue-900">service</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Haute Pression */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <i className="flaticon-car-wash text-4xl text-gray-400"></i>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Lavage haute pression</h4>
                                <p className="text-gray-600 mb-2">
                                    Une piste de lavage haute pression self-service avec <span className="font-semibold">6 programmes</span> comprenant le lavage avec shampooing chaud, mousse active à la brosse, super-rinçage avec eau déminéralisée et cire de finition pour redonner de l'éclat à votre carrosserie.
                                </p>
                                <p className="text-blue-900 font-semibold">Pièces acceptées 1.- / 2.- / 5.- CHF</p>
                            </div>
                        </div>

                        {/* Aspirateur */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
                            <div className="flex-shrink-0">
                                <i className="flaticon-parking text-4xl text-gray-400"></i>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Aspirateur</h4>
                                <p className="text-gray-600 mb-2">
                                    Plus de puissance pour plus d'efficacité!<br />
                                    Avec son <span className="font-semibold">grand pouvoir d'aspiration</span> et un tuyau de grande longueur, notre installation vous permet de circuler aisément autour de votre véhicule pour une facilité d'utilisation et un résultat impeccable.
                                </p>
                                <p className="text-blue-900 font-semibold">Pièce acceptée 1.- CHF</p>
                            </div>
                        </div>
                    </div>

                    {/* Full Service */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3 flex flex-col items-center text-center">
                                <i className="flaticon-car-wash-1 text-5xl text-gray-400 mb-4"></i>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Laissez-nous faire</h4>
                                <p className="text-gray-600">
                                    Avant ou après une journée de travail vous n'avez pas ou plus le courage de laver votre voiture, prenez un café au shop et <span className="font-semibold">nous nous occupons de tout</span>.
                                </p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-600 mb-6">
                                    Pour un nettoyage approfondi <span className="font-semibold">&lt;Lavage Premium&gt;</span> demandez un devis a notre équipe de l'atelier.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="py-3 font-semibold text-gray-700">Pendant les heures d'ouvertures de l'atelier</th>
                                                <th className="py-3 font-semibold text-gray-700">Durée</th>
                                                <th className="py-3 font-semibold text-gray-700">Tarif CHF</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600">
                                            <tr className="border-b border-gray-100">
                                                <td className="py-3">Extérieur (Lavage carrosserie et roues uniquement)</td>
                                                <td className="py-3">15 min.</td>
                                                <td className="py-3 font-semibold">30.-</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="py-3">Intérieur (Aspirateur, Vitres, Dépoussiérage)</td>
                                                <td className="py-3">30 min.</td>
                                                <td className="py-3 font-semibold">60.-</td>
                                            </tr>
                                            <tr className="border-b border-gray-100">
                                                <td className="py-3">Extérieur + Intérieur</td>
                                                <td className="py-3">45 min.</td>
                                                <td className="py-3 font-semibold">80.-</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3">Lavage Premium</td>
                                                <td colSpan={2} className="py-3 italic">nous consulter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
