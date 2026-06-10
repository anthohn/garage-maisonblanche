import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales | Garage Maison-Blanche à Chancy",
    description: "Mentions légales du site du Garage Maison-Blanche SA, situé à Chancy (Genève).",
    robots: {
        index: false,
        follow: true,
    },
};

export default function MentionsLegales() {
    return (
        <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
                    <p>
                        Le site internet <strong>garage-maisonblanche.ch</strong> est édité par :
                    </p>
                    <address className="not-italic mt-2">
                        <strong>Garage Maison-Blanche SA</strong><br />
                        Route de Chancy 500<br />
                        1284 Chancy<br />
                        Suisse
                    </address>
                    <p className="mt-2">
                        <strong>Numéro d'identification des entreprises (IDE) :</strong> CHE-474.536.790<br />
                        <strong>Numéro d'inscription au Registre du Commerce :</strong> CH-660.2.883.024-8<br />
                        Téléphone : <a href="tel:+41227560404" className="text-blue-600 hover:underline">+41 22 756 04 04</a><br />
                        E-mail : <a href="mailto:atelier@garage-maisonblanche.ch" className="text-blue-600 hover:underline">atelier@garage-maisonblanche.ch</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement et Gestion du domaine</h2>
                    <p>
                        <strong>Hébergeur du site (plateforme d'hébergement) :</strong><br />
                        Vercel Inc.<br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, USA<br />
                        Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vercel.com</a>
                    </p>
                    <p className="mt-4">
                        <strong>Gestionnaire du nom de domaine (Registrar) :</strong><br />
                        Infomaniak Network SA<br />
                        Rue Eugène-Marziano 25<br />
                        1227 Les Acacias, Genève, Suisse<br />
                        Site web : <a href="https://www.infomaniak.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.infomaniak.com</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation suisse et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                    <p className="mt-2">
                        La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>
                </section>

                <section id="confidentialite">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protection des données personnelles</h2>
                    <p>
                        Conformément à la loi suisse sur la protection des données (LPD), vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent.
                    </p>
                    <p className="mt-2">
                        Les informations recueillies via notre formulaire de contact sont enregistrées dans un fichier informatisé par le Garage Maison-Blanche SA pour faciliter les échanges avec notre clientèle. Elles sont conservées le temps nécessaire à la gestion de la relation commerciale et ne sont en aucun cas transmises à des tiers sans votre consentement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
                    <p>
                        Le site <strong>garage-maisonblanche.ch</strong> n'utilise aucun cookie de suivi, publicitaire ou d'analyse tiers. Aucun cookie n'est installé sur votre terminal lors de votre navigation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
                    <p>
                        Le Garage Maison-Blanche SA s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                    </p>
                </section>
            </div>
        </main>
    );
}
