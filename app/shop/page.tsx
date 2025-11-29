import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Le Shop | Garage Maison-Blanche",
    description: "Ouvert 7/7 jours. Boissons, Snacks, Tabac, Alimentaires, Produits frais et surgelés. Kiosque complet.",
};

export default function Shop() {
    const shopItems = [
        { title: "Boissons/Snacks", desc: "Boulangerie/viennoiserie, sandwichs et boissons diverses, sucreries, Chewing-gums, chips", img: "/img/shop2.jpg" },
        { title: "Tabac", desc: "Cigarettes, cigares, CBD légal ainsi que divers produits de tabac et ustensiles pour fumeurs", img: "/img/shop1.jpg" },
        { title: "Alimentaires", desc: "Du produit frais au surgelé, diverses conserves, glaçons, glace pilée, œuf frais de la ferme", img: "/img/shop3.jpg" },
        { title: "Non-Alimentaire", desc: "Articles d'hygiène, nourriture pour animaux, produit d'entretien et nettoyage", img: "/img/shop4.jpg" },
        { title: "Recharge/Prepaid", desc: "Recharge crédit téléphonique, Prepaid, bon cadeau (Gift card) comme: Wishcard, Salt., M-Budget, Netflix, Spotify, Zalando, etc...", img: "/img/shopcardsmall.jpg" },
        { title: "Autres", desc: "Bouteilles pour gril à gaz, Loterie Romande, batteries, accessoires téléphonie", img: "/img/shop6.jpg" },
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <div className="relative h-[500px] flex items-center justify-center bg-center" style={{ backgroundImage: 'url(/img/oil.jpg)' }}>
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

            {/* Shop Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Le Shop</h2>
                        <h4 className="text-xl text-gray-600 mb-4 font-light">Un produit vous manque... notre shop est ouvert 7/7 jours</h4>
                        <p className="text-gray-500">Un vaste assortiment de produits de kiosque</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {shopItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
