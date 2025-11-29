import Link from 'next/link';
import PartnerCarousel from '@/components/PartnerCarousel';

export default function Home() {
  return (
    <main className="pt-20"> {/* Add padding-top to account for fixed navbar */}

      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/img/front3.jpg)' }}>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            <span className="bg-blue-900 px-4 py-2 inline-block">Garage Maison-Blanche</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mt-6">
            <span className="bg-white text-gray-900 px-2 py-1 font-medium">Jean-François Höhn</span>
            <br className="my-2" />
            <span className="block mt-4 font-semibold tracking-wide">RÉPARATION ET MAINTENANCE TOUTES MARQUES</span>
          </p>
        </div>
      </div>

      {/* About Section */}
      <section id="titletop" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 uppercase mb-4">Bienvenue</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <h4 className="text-xl text-gray-600 leading-relaxed font-light">
              Nous sommes à votre service pour la réparation et la maintenance<br className="hidden md:block" />
              de votre voiture quelle que soit sa marque ou son modèle.
            </h4>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="box-list" className="py-16 bg-gray-100 bg-no-repeat bg-right-bottom" style={{ backgroundImage: 'url("/img/bg2.png")' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Station */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <Link href="/station" className="inline-block mb-6">
                <i className="flaticon-refuel text-5xl text-blue-900 group-hover:scale-110 transition-transform duration-300 block"></i>
              </Link>
              <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4">LA STATION-SERVICE</h2>
              <div className="w-12 h-1 bg-gray-200 mx-auto mb-6 group-hover:bg-blue-900 transition-colors"></div>
              <p className="text-gray-600 mb-6">
                Vous pouvez y effectuer le plein de carburant 7/7 jours - 24/24 heures avec paiement par carte ou cash en CHF ou Euro.
              </p>
              <Link href="/station" className="text-blue-900 font-semibold hover:text-blue-700 hover:underline">
                plus de détail →
              </Link>
            </div>

            {/* Atelier */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <Link href="/garage" className="inline-block mb-6">
                <i className="flaticon-car-repair-1 text-5xl text-blue-900 group-hover:scale-110 transition-transform duration-300 block"></i>
              </Link>
              <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4">L' ATELIER</h2>
              <div className="w-12 h-1 bg-gray-200 mx-auto mb-6 group-hover:bg-blue-900 transition-colors"></div>
              <p className="text-gray-600 mb-6">
                Nos mécaniciens assurent avec compétence l'entretien et la réparation de tout type de voitures de tourisme et véhicules utilitaires légers.
              </p>
              <Link href="/garage" className="text-blue-900 font-semibold hover:text-blue-700 hover:underline">
                plus de détail →
              </Link>
            </div>

            {/* Shop */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <Link href="/shop" className="inline-block mb-6">
                <i className="flaticon-shop text-5xl text-blue-900 group-hover:scale-110 transition-transform duration-300 block"></i>
              </Link>
              <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4">LE SHOP</h2>
              <div className="w-12 h-1 bg-gray-200 mx-auto mb-6 group-hover:bg-blue-900 transition-colors"></div>
              <p className="text-gray-600 mb-6">
                Une petite soif, un BBQ de dernière minute... du produit frais au surgelé ou ménager vous trouverez de tout à notre shop.
              </p>
              <Link href="/shop" className="text-blue-900 font-semibold hover:text-blue-700 hover:underline">
                plus de détail →
              </Link>
            </div>

            {/* Lavage */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <Link href="/lavage" className="inline-block mb-6">
                <span className="flaticon-car-wash text-5xl text-blue-900 group-hover:scale-110 transition-transform duration-300 block"></span>
              </Link>
              <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4">LE LAVAGE</h2>
              <div className="w-12 h-1 bg-gray-200 mx-auto mb-6 group-hover:bg-blue-900 transition-colors"></div>
              <p className="text-gray-600 mb-6">
                Une piste de lavage haute pression, un aspirateur et des produits de nettoyage pour chaque détail de l'extérieur à l'intérieur.
              </p>
              <Link href="/lavage" className="text-blue-900 font-semibold hover:text-blue-700 hover:underline">
                plus de détail →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="bg-white border-t border-gray-100">
        <PartnerCarousel />
      </section>
    </main>
  );
}
