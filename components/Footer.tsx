import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Gararge Maison-Blanche</h2>
                                <p>Jean-Fran&ccedil;ois H&ouml;hn<br />
                                    500, Route de Chancy<br />1284 Chancy</p>
                                <p><a href="mailto:jfhohn@bluewin.ch">jfhohn@bluewin.ch</a></p>
                                <div id="map" className="map-small"></div>
                                {/* Map script will need to be handled separately or via a library */}
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
                                        <p><a href="mailto:garage.maisonblanche@bluewin.ch">garage.maisonblanche<br />@bluewin.ch</a></p>
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
                                        <p><a href="mailto:stationservice.maisonblanche@bluewin.ch">stationservice.maisonblanche<br />@bluewin.ch</a></p>
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
                </div>
            </footer>
        </>
    );
}
