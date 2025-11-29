"use client";
import { useEffect } from 'react';

export default function HomeScripts() {
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined' && (window as any).$) {
                const $ = (window as any).$;
                $(".slideanim").each(function (this: any) {
                    var pos = $(this).offset().top;
                    var winTop = $(window).scrollTop();
                    if (pos < winTop + 600) {
                        $(this).addClass("slide");
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return null;
}
