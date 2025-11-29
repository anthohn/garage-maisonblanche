import { Metadata } from 'next';
import HomeScripts from '@/components/HomeScripts';

export const metadata: Metadata = {
    title: "L'Atelier mécanique | Garage Maison-Blanche",
    description: "Réparation et maintenance toutes marques. Membre du réseau carXpert. Véhicule de prêt.",
};

export default function Garage() {
    return (
        <main>
            <HomeScripts />
            <div className="jumbotron text-center" style={{ backgroundImage: 'url(/img/front4.jpg)', padding: '200px 25px' }}>
                <h1><span className="text-bg-colored text-uppercase font-opensans font-weight-600">Garage Maison-Blanche</span></h1>
                <p style={{ paddingTop: '10px' }}><span className="text-bg-white">Jean-Fran&ccedil;ois H&ouml;hn</span><br />
                    Le meilleur service pour la r&eacute;paration et l'entretien de votre voiture</p>
            </div>

            <section id="about">
                <div className="container">
                    <div className="section-content">

                        <div className="row">

                            <div className="col-md-5">
                                <h2 className="title"><span className="text-colored">L'&nbsp;atelier</span></h2>
                                <h4>R&eacute;paration et maintenance toutes marques</h4>
                                <p>Fort de notre exp&eacute;rience, notre &eacute;quipe de m&eacute;canicien qualifi&eacute; effectue la maintenance et r&eacute;paration de v&eacute;hicule neuf ou ancien en respectant &agrave; la lettre les directives des constructeurs.</p><p>
                                    Notre atelier est &eacute;quip&eacute; des traditionnels outils de m&eacute;canique ainsi que de diff&eacute;rent appareils de diagnostique &eacute;lectronique qui nous permets d'intervenir sur toutes marques de v&eacute;hicules.</p><p>
                                    Nous prenons en charge les travaux de carrosserie et de remplacement de pare-brise.</p>
                                <p>&nbsp;</p><h6>Membre du r&eacute;seau</h6>
                                <img src="/img/partners/carxpert.png" alt="logo carxpert" />
                            </div>

                            <div className="col-md-7 order-last">
                                <div className="row text-center" style={{ marginTop: '40px' }}>
                                    <div className="col-sm-6 slideanim">
                                        <img src="/img/man1.jpg" style={{ padding: '5px' }} alt="" />
                                    </div>
                                    <div className="col-sm-6 slideanim">
                                        <div>
                                            <img src="/img/man2.jpg" style={{ padding: '5px' }} alt="" />
                                        </div>
                                        <div>
                                            <img src="/img/man3.jpg" style={{ padding: '5px' }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 slideanim">
                                <div className="media box-blue">
                                    <div className="media-left">
                                        <i className="flaticon-car-4 logo-x-small"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4>FAQ carXpert</h4>
                                        <p>Peut-on confier son v&eacute;hicule &agrave; un garage <span className="font-weight-600">carXpert</span> pour des r&eacute;parations sous garantie&nbsp;?&nbsp;&nbsp;&nbsp;
                                            Est-ce que les garages <span className="font-weight-600">carXpert</span> utilisent des pi&egrave;ces d'origine&nbsp;?&nbsp;&nbsp;&nbsp;
                                            Le constructeur de mon v&eacute;hicule pr&eacute;conise une autre marque d'huile moteur que celle utilisée dans mon garage <span className="font-weight-600">carXpert</span>. Est-ce un probl&egrave;me&nbsp;?<br />
                                        </p>
                                        <p><a href="/doc/FAQ_F_CX.pdf" target="_blank"><span className="font-weight-600">Consultez les réponses &agrave; toutes ces questions dans la FAQ carXpert</span></a>&nbsp;&nbsp;&nbsp;<a href="/doc/FAQ_F_CX.pdf" className="follow-link" target="_blank">plus&nbsp;de&nbsp;d&eacute;tail&nbsp;→</a></p>
                                    </div>
                                </div>
                                <p>&nbsp;</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section id="list" className="bg-grey bg-no-repeat bg-img-right-bottom" data-bg-img="/img/bg2.png" style={{ backgroundImage: 'url("/img/bg2.png")' }}>
                <div className="container">
                    <div className="section-content">

                        <div className="row">

                            <div className="col-md-4 col-sm-4 boxes text-right">
                                <h5>Contr&ocirc;le antipollution</h5>
                                <h5>Pr&eacute;paration expertise</h5>
                                <h5>Lavage ch&acirc;ssis moteur</h5>
                                <h5>Service climatisation</h5>
                                <h5>Freins</h5>
                            </div>
                            <div className="col-md-3 col-sm-4 boxes-middle text-center slideanim">
                                <i className="flaticon-car-1 logo-x-small"></i>
                                <i className="flaticon-car-repair logo-x-small"></i>
                                <i className="flaticon-car-repair-12 logo-x-small"></i>
                                <i className="flaticon-car-repair-9 logo-x-small hidden-xs"></i>
                            </div>
                            <div className="col-md-4 col-sm-4 boxes text-left">
                                <h5>Diagnostique &eacute;lectronique</h5>
                                <h5>Electricit&eacute;</h5>
                                <h5>Rectification disque de frein</h5>
                                <h5>Alternateur - D&eacute;marreur</h5>
                                <h5>Remplacement pare-brise</h5>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-md-4 col-sm-4 boxes text-right">
                                <h5>Pneus toutes marque</h5>
                                <h5>Montage &eacute;quilibrage</h5>
                                <h5>Gardiennage pneus-roues</h5>
                                <h5>Echappement</h5>
                                <h5>Amortisseurs</h5>
                            </div>
                            <div className="col-md-3 col-sm-4 boxes-middle text-center slideanim">
                                <i className="flaticon-car-breakdown-3 logo-x-small"></i>
                                <i className="flaticon-car-repair-5 logo-x-small"></i>
                                <i className="flaticon-car-breakdown-7 logo-x-small"></i>
                                <i className="flaticon-car-repair-2 logo-x-small hidden-xs"></i>
                            </div>
                            <div className="col-md-4 col-sm-4 boxes text-left">
                                <h5>Service multi-marque</h5>
                                <h5>Courroie de distribution</h5>
                                <h5>Embrayage</h5>
                                <h5>Batterie</h5>
                                <h5>Prise en charge carrosserie</h5>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section id="3">
                <div className="container">
                    <div className="section-content">

                        <div className="row">

                            <div className="col-md-4 slideanim">
                                <img className="img-thumbnail" src="/img/vehicule-pret.jpg" alt="V&eacute;hicule de pr&ecirc;t" />
                            </div>
                            <div className="col-md-8">
                                <h2>Un <span className="text-colored">v&eacute;hicule</span> de pr&ecirc;t</h2>
                                <h4>Pendant la r&eacute;paration/r&eacute;vision de votre v&eacute;hicule</h4>
                                <p>Afin que vous puissiez vous d&eacute;placer en toute qui&eacute;tude nous vous mettons un <span className="font-weight-600">v&eacute;hicule à disposition d&egrave;s&nbsp;27.-&nbsp;CHF par jour</span> avec boite automatique ou manuel.</p>
                                <p>Prise en charge gratuitement du v&eacute;hicule au domicile du client ou ramener le client &agrave; son domicile dans un rayon de 10&nbsp;km.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
