"use client";
import { useEffect } from 'react';

export default function PartnerCarousel() {
    useEffect(() => {
        const initCarousel = () => {
            if (typeof window !== 'undefined' && (window as any).$) {
                const $ = (window as any).$;
                if ($('.owl-carousel').owlCarousel) {
                    $('.owl-carousel').owlCarousel({
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 4000,
                        autoplayHoverPause: true,
                        margin: 100,
                        responsiveClass: true,
                        responsive: {
                            0: { items: 1 },
                            600: { items: 3 },
                            1000: { items: 4 }
                        }
                    });
                } else {
                    setTimeout(initCarousel, 100);
                }
            } else {
                setTimeout(initCarousel, 100);
            }
        };
        initCarousel();
    }, []);

    return (
        <div className="owl-carousel">
            <div className="item"><img src="/img/partners/logo-shell.png" alt="" /></div>
            <div className="item"><img src="/img/partners/carxpert-garages.png" alt="" /></div>
            <div className="item"><img src="/img/partners/clim-service-automotive.png" alt="" /></div>
            <div className="item"><img src="/img/partners/boulangerie-viennoiserie.png" alt="" /></div>
            <div className="item"><img src="/img/partners/formation-pro.png" alt="" /></div>
            <div className="item"><img src="/img/partners/loterie-romande.png" alt="" /></div>
            <div className="item"><img src="/img/partners/vignette-2025.png" alt="" /></div>
            <div className="item"><img src="/img/partners/upsa-agvs.png" alt="" /></div>
        </div>
    );
}
