import HomeScripts from '@/components/HomeScripts';

export default function Station() {
    return (
        <main>
            <HomeScripts />
            <div className="jumbotron text-center" style={{ backgroundImage: 'url(/img/oil.jpg)', padding: '200px 25px' }}>
                <h1><span className="text-bg-colored text-uppercase font-opensans font-weight-600">Garage Maison-Blanche</span></h1>
                <p style={{ paddingTop: '10px' }}><span className="text-bg-white">Jean-Fran&ccedil;ois H&ouml;hn</span><br />
                    Le meilleur service pour la r&eacute;paration et l'entretien de votre voiture</p>
            </div>

            <section id="about">
                <div className="container">
                    <div className="section-content">

                        <div className="row">

                            <div className="col-md-4 text-center slideanim">
                                <img className="img-thumbnail" src="/img/logo-shell-3carb3.png" style={{ padding: '25px' }} alt="" />
                            </div>

                            <div className="col-md-8">
                                <h2 className="title"><span className="text-colored">La Station-Service</span></h2>
                                <h4>Faire le plein de carburant 7/7&nbsp;jours&nbsp;-&nbsp;24/24&nbsp;heures</h4>
                                <p>Shell d&eacute;veloppe des carburants performants depuis plus de 100 ans. Avec les carburants de qualit&eacute; Shell sans plomb 95 et Shell Diesel, vous b&eacute;n&eacute;ficier des technologies DYNAFLEX.<br />Les carburants avec technologies DYNAFLEX aident &agrave; garder votre moteur propre et &agrave; le prot&eacute;ger pour un fonctionnement efficace.</p>
                                <h5>Les carburants disponibles</h5>
                                <ul style={{ listStyleType: 'square' }}>
                                    <li>Shell V-Power 100</li>
                                    <li>Shell Diesel</li>
                                    <li>Shell Sans Plomb 95</li>
                                </ul>
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
                                <h2>A votre <span className="text-colored">disposition</span></h2>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-6 slideanim">
                                <div className="media box-grey">
                                    <div className="media-left">
                                        <i className="flaticon-car-7 logo-x-small"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4>Nettoyage du pare-brise</h4>
                                        <p>Pour une visibilit&eacute; impeccable.<br />Nous mettons &agrave; votre disposition le mat&eacute;riel n&eacute;cessaire <span className="font-weight-600">pour un nettoyage simple et rapide</span> de vos vitres ext&eacute;rieurs. Pour un nettoyage int&eacute;rieur, diff&eacute;rents produits sont en ventes &agrave; notre shop.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 slideanim">
                                <div className="media box-grey">
                                    <div className="media-left">
                                        <i className="flaticon-wheel logo-x-small"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4>Pression des pneus</h4>
                                        <p>Pas seulement une question de s&eacute;curit&eacute; !<br />Des pneus <span className="font-weight-600">trop ou pas assez gonfl&eacute;s</span> augmentent la consommation de carburant et affecte leur dur&eacute;e de vie. Plusieurs bonnes raisons  de v&eacute;rifier r&eacute;guli&egrave;rement leurs pressions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 slideanim">
                                <div className="media box-grey">
                                    <div className="media-left">
                                        <i className="flaticon-car-repair-12 logo-x-small"></i>
                                    </div>
                                    <div className="media-body">
                                        <h4>Contr&ocirc;le des niveaux</h4>
                                        <p>Il n'y a pas que de l'huile...<br />Afin de prolonger la dur&eacute;e de vie et d'optimiser la performance du moteur controlez periodiquement son niveau d'huile.<br /><span className="font-weight-600">Tout aussi important</span>, le niveau du liquide de freins, du produit lave-glace, d'antigel pour le radiateur/lave-glace et bien d'autres syst&egrave;me hydraulique pr&eacute;sent dans votre v&eacute;hicule.<br />Notre &eacute;quipe de m&eacute;canicien vous conseillera volontiers pendant les heures d'ouverture de l'atelier.</p>
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
