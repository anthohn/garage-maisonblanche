import { Metadata } from 'next';
import HomeScripts from '@/components/HomeScripts';

export const metadata: Metadata = {
    title: "Le Shop | Garage Maison-Blanche",
    description: "Ouvert 7/7 jours. Boissons, Snacks, Tabac, Alimentaires, Produits frais et surgelés. Kiosque complet.",
};

export default function Shop() {
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
                            <div className="col-md-12" style={{ marginBottom: '30px' }}>
                                <h2 className="title"><span className="text-colored">Le Shop</span></h2>
                                <h4>Un produit vous manque... notre shop est ouvert 7/7&nbsp;jours</h4>
                                <p>Un vaste assortiment de produits de kiosque</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 slideanim">
                                <img className="img-thumbnail" style={{ marginTop: '30px' }} src="/img/shop2.jpg" alt="" />
                                <h2>Boissons/Snacks</h2>
                                <p>Boulangerie/viennoiserie, sandwichs et boissons diverses, sucreries, Chewing-gums, chips</p>
                            </div>
                            <div className="col-md-4 slideanim">
                                <img className="img-thumbnail" style={{ marginTop: '30px' }} src="/img/shop1.jpg" alt="" />
                                <h2>Tabac</h2>
                                <p>Cigarettes, cigares, CBD&nbsp;l&eacute;gal ainsi que divers produits de tabac et ustensiles pour fumeurs</p>
                            </div>
                            <div className="col-md-4 slideanim">
                                <img className="img-thumbnail" style={{ marginTop: '30px' }} src="/img/shop3.jpg" alt="" />
                                <h2>Alimentaires</h2>
                                <p>Du produit frais au surgel&eacute;, diverses conserves, glaçons, glace pil&eacute;e, &oelig;uf frais de la ferme</p>
                            </div>
                            <div className="col-md-4 slideanim">
                                <img className="img-thumbnail" style={{ marginTop: '30px' }} src="/img/shop4.jpg" alt="" />
                                <h2>Non-Alimenmtaire</h2>
                                <p>Articles d'hygi&egrave;ne, nourriture pour animaux, produit d'entretien et nettoyage</p>
                            </div>
                            <div className="col-md-4 slideanim">
                                <img className="img-thumbnail" style={{ marginTop: '30px' }} src="/img/shopcardsmall.jpg" alt="" />
                                <h2>Recharge/Prepaid</h2>
                                <p>Recharge cr&eacute;dit t&eacute;l&eacute;phonique, Prepaid, bon cadeau (Gift&nbsp;card) comme: Wishcard, Salt., M-Budget, Netflix, Spotify, Zalando, etc...</p>
                            </div>
                            <div className="col-md-4 slideanim">
                                <img className="img-thumbnail" style={{ marginTop: '30px' }} src="/img/shop6.jpg" alt="" />
                                <h2>Autres</h2>
                                <p>Bouteilles pour gril à gaz, Loterie Romande, batteries, accessoires&nbsp;t&eacute;l&eacute;phonie</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
