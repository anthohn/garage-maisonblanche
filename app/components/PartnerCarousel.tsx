export default function PartnerCarousel() {
    const partners = [
        { src: "/img/partners/logo-shell.png", alt: "Shell" },
        { src: "/img/partners/carxpert-garages.png", alt: "carXpert" },
        { src: "/img/partners/clim-service-automotive.png", alt: "Clim Service" },
        { src: "/img/partners/boulangerie-viennoiserie.png", alt: "Boulangerie" },
        { src: "/img/partners/formation-pro.png", alt: "Formation Pro" },
        { src: "/img/partners/loterie-romande.png", alt: "Loterie Romande" },
        { src: "/img/partners/vignette-2025.png", alt: "Vignette 2025" },
        { src: "/img/partners/upsa-agvs.png", alt: "UPSA" },
    ];

    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 uppercase tracking-wider">Nos Partenaires</h2>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {partners.map((partner, index) => (
                        <div key={index} className="w-32 md:w-40">
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
