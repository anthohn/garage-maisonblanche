import HomeScripts from '@/components/HomeScripts';

export default function Lavage() {
    return (
        <main>
            <HomeScripts />
            <div className="jumbotron text-center" style={{ backgroundImage: 'url(/img/oil.jpg)', padding: '200px 25px' }}>
                <h1><span className="text-bg-colored text-uppercase font-opensans font-weight-600">Garage Maison-Blanche</span></h1>
                <p style={{ paddingTop: '10px' }}><span className="text-bg-white">Jean-Fran&ccedil;ois H&ouml;hn</span><br />
                    Le meilleur service pour la r&eacute;paration et l'entretien de votre voiture</p>
            </div>

            <section id="about">
                <div className="container text-center">
                    <div className="section-content">

                        <div className="row">

                            <div className="col-md-8 text-right">
                                <h2 className="title"><span className="text-colored">Le Lavage</span></h2>
                                <h4>Une installation de lavage pour votre v&eacute;hicule ouvert 7/7&nbsp;jours de 6h00 &agrave; 22h00</h4>
                                <p>Chez nous, vous trouverez tout ce qui concerne le nettoyage de votre v&eacute;hicule. De nombreux produits pour le nettoyage de la carrosserie ainsi que pour l'int&eacute;rieur sont disponibles dans notre shop.</p>
                            </div>
                            <div className="col-md-4 text-center slideanim">
                                <img className="img-thumbnail" src="/img/self-car-washing.jpg" style={{ padding: '5px' }} alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section id="2" className="bg-grey">
                <div className="container">
                    <div className="section-content">

                        <div className="row">
                            <div className="text-center">
                                <h2>A votre <span className="text-colored">service</span></h2>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-6 slideanim">
                                <div className="media box-grey">
                                    <div className="media-left">
                                        <i className="flaticon-car-wash logo-x-small"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4>Lavage haute pression</h4>
                                        <p>Une piste de lavage haute pression self-service avec <span className="font-weight-600">6&nbsp;programmes</span> comprenant le lavage avec shampooing chaud, mousse active &agrave; la brosse, super-rinçage avec eau d&eacute;min&eacute;ralis&eacute;e et cire de finition pour redonner de l'&eacute;clat à votre carrosserie.</p>
                                        <p><span className="font-weight-600">Pi&egrave;ces acceptées 1.- / 2.- / 5.- CHF</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 slideanim">
                                <div className="media box-grey">
                                    <div className="media-left">
                                        <i className="flaticon-parking logo-x-small"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4>Aspirateur</h4>
                                        <p>Plus de puissance pour plus d'efficacit&eacute;!<br />Avec son <span className="font-weight-600">grand pouvoir d'aspiration</span> et un tuyau de grande longueur, notre installation vous permet de circuler ais&eacute;ment autour de votre v&eacute;hicule pour une facilit&eacute; d'utilisation et un r&eacute;sultat impeccable.</p>
                                        <p><span className="font-weight-600">Pi&egrave;ce acceptée 1.- CHF</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 slideanim">
                                <div className="media box-grey">
                                    <div className="media-left">
                                        <i className="flaticon-car-wash-1 logo-x-small"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4>Laissez-nous faire</h4>
                                        <p>Avant ou apr&egrave;s une journ&eacute;e de travail vous n'avez pas ou plus le courage de laver votre voiture, prenez un caf&eacute; au shop et <span className="font-weight-600">nous nous occupons de tout</span>. Nous vous proposons diff&eacute;rent soin pour votre v&eacute;hicule.</p>
                                        <p>Pour un nettoyage approfondi <span className="font-weight-600">&Lt;Lavage&nbsp;Premium&Gt;</span> demandez un devis a notre &eacute;quipe de l'atelier.</p>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Pendant les heures d'ouvertures de l'atelier</th>
                                                    <th>Dur&eacute;e</th>
                                                    <th>Tarif CHF</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Ext&eacute;rieur (Lavage carrosserie et roues uniquement)</td>
                                                    <td>15 min.</td>
                                                    <td>30.-</td>
                                                </tr>
                                                <tr>
                                                    <td>Int&eacute;rieur (Aspirateur, Vitres, D&eacute;poussi&eacute;rage)</td>
                                                    <td>30 min.</td>
                                                    <td>60.-</td>
                                                </tr>
                                                <tr>
                                                    <td>Ext&eacute;rieur + Int&eacute;rieur</td>
                                                    <td>45 min.</td>
                                                    <td>80.-</td>
                                                </tr>
                                                <tr>
                                                    <td>Lavage Premium</td>
                                                    <td colSpan={2}>nous consulter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                    </div>
                </div>
            </section>
        </main>
    );
}
