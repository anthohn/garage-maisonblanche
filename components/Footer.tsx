import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Gararge Maison-Blanche SA</h2>
                                <p>Jean-Fran&ccedil;ois H&ouml;hn<br />
                                    500, Route de Chancy<br />1284 Chancy</p>
                                <p><a href="mailto:atelier@garage-maisonblanche.ch">atelier@garage-maisonblanche.ch</a></p>
                                <div id="map" className="map-small">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                        src="https://maps.google.com/maps?q=Garage+Maison-Blanche+500+Route+de+Chancy+1284+Chancy&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div style={{ marginTop: '20px', marginBottom: '5px', fontSize: '14px', fontWeight: '600 !important' } as any}>L' Atelier<hr style={{ margin: '0px' }} /></div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <p>Lundi au Vendredi<br />&nbsp;<br />Vendredi apr&egrave;s-midi</p>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <p>7h30 - 12h00<br />13h30 - 18h00<br />13h30 - 17h00</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <p>T&eacute;l.&nbsp;&nbsp;<a href="tel:+41227560404">+41 22 756 04 04</a><br />Fax&nbsp;&nbsp;+41 22 756 15 58</p>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <p><a href="mailto:atelier@garage-maisonblanche.ch">atelier@garage-maisonblanche.ch</a></p>
                                    </div>
                                </div>
                                <div style={{ marginTop: '20px', marginBottom: '5px', fontSize: '14px', fontWeight: '600 !important' } as any}>Le Lavage<hr style={{ margin: '0px' }} /></div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <p>Lundi au Dimanche<br /></p>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <p>6h00 - 22h00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div style={{ marginTop: '20px', marginBottom: '5px', fontSize: '14px', fontWeight: '600 !important' } as any}>Le Shop & La Station-service<hr style={{ margin: '0px' }} /></div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <p>Lundi au Vendredi<br />Samedi<br />Dimanche</p>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <p>
                                            <span>6h00&nbsp;-&nbsp;20h00</span><br />
                                            <span>7h00&nbsp;-&nbsp;20h00</span><br />
                                            <span>7h30&nbsp;-&nbsp;20h00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <p>Automate &agrave; billets/cartes</p>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <p>7/7 jours - 24/24 heures</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <p>T&eacute;l.&nbsp;&nbsp;<a href="tel:+41227561522">+41 22 756 15 22</a></p>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <p><a href="mailto:contact@station-maisonblanche.ch">contact@station-maisonblanche.ch</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer2 text-center" style={{ backgroundColor: '#181d53' }}>
                <div className="container">
                    <a href="#myPage" title="To Top"><span className="glyphicon glyphicon-chevron-up"></span></a>
                    <p style={{ fontSize: '14px' }}>Copyright &copy; <span id="ydate">{new Date().getFullYear()}</span> - Garage Maison-Blanche</p>
                    <p className="copyright" style={{ color: '#757575' }}>Designed by <img src="/img/bni_man_grey.gif" style={{ width: '10px', verticalAlign: 'text-bottom', display: 'inline-block' }} alt="logo bni" /><span style={{ fontFamily: 'PT Serif' }}>&nbsp;bni</span> - <a href="https://www.bni.ch" target="_blank"><span style={{ fontFamily: 'Palanquin', letterSpacing: '-0.7px' }}>Business Network Integration</span></a></p>
                    <p style={{ fontSize: '12px', color: '#757575', marginTop: '5px' }}>Réalisé par : <a href="https://anthony-hohn.ch" target="_blank" style={{ color: '#757575', textDecoration: 'none' }}>Anthony Höhn</a></p>
                </div>
            </footer>
        </>
    );
}
