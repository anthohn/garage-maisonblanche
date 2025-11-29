import Link from 'next/link';
import PartnerCarousel from '@/components/PartnerCarousel';
import HomeScripts from '@/components/HomeScripts';

export default function Home() {
  return (
    <main>
      <HomeScripts />
      <div className="jumbotron text-center" style={{ backgroundImage: 'url(/img/front3.jpg)' }}>
        <h1><span className="text-bg-colored text-uppercase font-opensans font-weight-600">Garage Maison-Blanche</span></h1>
        <p style={{ paddingTop: '10px' }}><span className="text-bg-white">Jean-Fran&ccedil;ois H&ouml;hn</span><br />
          R&Eacute;PARATION ET MAINTENANCE TOUTES MARQUES</p>
      </div>

      {/* Container (About Section) */}
      <section id="titletop">
        <div className="container text-center">
          <div className="section-content">

            <div className="row">
              <div className="col-md-12">
                <h2 className="title-top">Bienvenue</h2><hr className="hr-title-top" />
                <h4>Nous sommes &agrave; votre service pour la r&eacute;paration et la maintenance<br />de votre voiture quelle que soit sa marque ou son model</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="box-list" className="bg-grey bg-no-repeat bg-img-right-bottom" data-bg-img="/img/bg2.png" style={{ backgroundImage: 'url("/img/bg2.png")' }}>
        <div className="container text-center">
          <div className="section-content">

            <div className="row">
              <div className="col-md-6 boxes slideanim">
                <Link href="/station"><i className="flaticon-refuel logo-small"></i></Link>
                <h2 className="title">LA STATION-SERVICE</h2><hr className="hr-title" />
                <p className="title-p">Vous pouvez y effectuer le plein de carburant 7/7 jours - 24/24 heures avec paiement par carte ou cache en CHF ou Euro<br /><Link href="/station" className="follow-link">plus de d&eacute;tail →</Link></p>
              </div>
              <div className="col-md-6 boxes slideanim">
                <Link href="/garage"><i className="flaticon-car-repair-1 logo-small"></i></Link>
                <h2 className="title">L' ATELIER</h2><hr className="hr-title" />
                <p className="title-p">Nos m&eacute;caniciens assurent avec comp&eacute;tence l'entretien et la r&eacute;paration de tout type de voitures de tourisme et v&eacute;hicules utilitaires l&eacute;gers<br /><Link href="/garage" className="follow-link">plus de d&eacute;tail →</Link></p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 boxes slideanim">
                <Link href="/shop"><i className="flaticon-shop logo-small"></i></Link>
                <h2 className="title">LE SHOP</h2><hr className="hr-title" />
                <p className="title-p">Une petite soif, un BBQ de derni&egrave;re minute... du produit frais au surgel&eacute; ou m&eacute;nag&eacute; vous trouverez de tout &agrave; notre shop<br /><Link href="/shop" className="follow-link">plus de d&eacute;tail →</Link></p>
              </div>
              <div className="col-md-6 boxes slideanim">
                <Link href="/lavage"><span className="flaticon-car-wash logo-small"></span></Link>
                <h2 className="title">LE LAVAGE</h2><hr className="hr-title" />
                <p className="title-p">Une piste de lavage haute pression, un aspirateur et des produits de nettoyage pour chaque d&eacute;tail de l'ext&eacute;rieur à l'int&eacute;rieur<br /><Link href="/lavage" className="follow-link">plus de d&eacute;tail →</Link></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="partner" className="partner">
        <div className="container text-center">
          <div className="section-content">
            <PartnerCarousel />
          </div>
        </div>
      </section>
    </main>
  );
}
