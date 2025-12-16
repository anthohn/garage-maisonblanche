'use client'
import Image from "next/image";

// If you want to use a local image, place it in /public and import it here, e.g.
import Background from '@/public/photoGarage.png'

export default function LandingSection() {
    return (
        <section className="relative h-[850px] md:h-screen max-h-[1000px] flex items-center">
            {/* Decorative background image - use Image with fill for responsive coverage */}
            <Image
                src={Background}
                alt="photo du garage" // decorative image: empty alt so it's ignored by assistive tech
                fill
                className="object-cover object-center"
                priority
            />

            {/* Overlay for contrast */}
            {/* <div className="absolute inset-0 bg-black/40 dark:bg-black/50" aria-hidden="true" /> */}

            {/* Content container */}
            <div className="relative z-10 max-w-4xl px-6 ml-8 md:ml-16 text-left text-white">
                <div className="bg-[#303F9F] p-10 opacity-90 rounded-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">RÉPARATION ET MAINTENANCE TOUTES MARQUES</h1>
                    <p className="text-lg md:text-xl mb-6">L&apos;avenir c&apos;est maintenant. Garage maison-blanche transforme vos abitions en réalités durables.</p>
                </div>
                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a href="#" className="inline-block bg-[#303F9F] text-white py-3 px-6 rounded-md font-semibold">LES SERVICES</a>
                    <a href="#" className="inline-block border-2 border-white text-white py-3 px-6 rounded-md font-semibold">CONTACT {'->'}</a>
                </div>
            </div>

            {/* Floating shop button - bottom right */}
            <div className="absolute bottom-6 right-6 z-20">
                <a href="#" className="flex items-center bg-white rounded-xl shadow-lg py-2 px-4 max-w-xs hover:shadow-xl hover:scale-105 transition-all duration-700 ease-in-out transform">
                    {/* Icon/Logo section */}
                    <div className="rounded-lg p-2 mr-4 flex-shrink-0">
                        <Image
                            src="/logoStation.png"
                            alt="Logo Station"
                            width={70}
                            height={70}
                            className="object-contain"
                        />
                    </div>
                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                        <div className="text-lg font-semibold text-gray-900 truncate">Vers le shop</div>
                        <div className="text-md text-sm text-gray-600 truncate">Station essence</div>
                        <div className="text-md text-gray-500 truncate">Chancy, Genève</div>
                    </div>
                    {/* Arrow icon */}
                    <div className="ml-3 flex-shrink-0">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}
