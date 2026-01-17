'use client';

import Link from 'next/link';
import CarImage from '@/app/components/ui/CarImage';

interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    images: string[];
}

interface CarCardProps {
    car: Car;
    priority?: boolean;
}

export default function CarCard({ car, priority = false }: CarCardProps) {
    return (
        <Link href={`/vehicules/${car.id}`} className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-[1.02] relative h-[520px] flex flex-col">
                {/* Badge "Disponible" */}
                <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                    Disponible
                </div>

                {/* Car Image */}
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                    <CarImage
                        src={car.images[0]}
                        alt={`${car.brand} ${car.model}`}
                        className="h-56 w-full object-cover"
                        fill={false}
                        width={400}
                        height={224}
                        priority={priority}
                    />
                </div>

                {/* Car Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{car.brand} {car.model}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{car.year}</span>
                    </div>

                    {/* Car Details avec icônes au-dessus - centré verticalement */}
                    <div className="grid grid-cols-3 gap-6 w-full ">
                        {/* Mileage */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 488.6 488.6">
                                    <path d="M188.5,270.3c-24.4,28.1-23.2,71.7,2.6,98.6c14.4,15.1,33.7,22.6,52.9,22.6c18.8,0,37.5-7.2,51.8-21.5
                                            c6.5-6.5,11.6-14,15.1-21.9l0,0l94.5-183.2c2.5-5.2-2.9-10.6-8.1-8.1l-183.2,94.5l0,0C204.6,255.5,195.9,261.9,188.5,270.3z
                                            M221.9,296.1c6.1-6.1,14.1-9.2,22.1-9.2s16,3.1,22.2,9.2c12.2,12.2,12.2,32.1,0,44.3c-6.1,6.1-14.1,9.2-22.2,9.2
                                            c-8,0-16-3.1-22.1-9.2C209.6,328.1,209.6,308.3,221.9,296.1z M440.2,341.4c0-34.6-9.1-68.6-26.4-98.3c-6.7-11.6-2.8-26.4,8.8-33.1
                                            c11.6-6.7,26.4-2.8,33.1,8.8c21.5,37.1,32.9,79.5,32.9,122.6c0,13.4-10.8,24.2-24.2,24.2C451.1,365.6,440.2,354.8,440.2,341.4z
                                            M0,341.4C0,206.7,109.6,97.1,244.3,97.1c31.3,0,61.8,5.8,90.6,17.4c12.4,5,18.4,19,13.5,31.4c-5,12.4-19,18.4-31.4,13.5
                                            c-23.1-9.2-47.6-13.9-72.7-13.9c-108,0-195.9,87.9-195.9,195.9c0,13.4-10.8,24.2-24.2,24.2C10.8,365.6,0,354.8,0,341.4z"/>
                                </svg>
                            </div>
                            <div className="text-xs text-gray-500 mb-1">Kilométrage</div>
                            <div className="text-sm font-medium text-gray-900">{car.mileage.toLocaleString('fr-CH').replace(/\s/g, "'")} km</div>
                        </div>

                        {/* Fuel Type */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77z" />
                                </svg>
                            </div>
                            <div className="text-xs text-gray-500 mb-1">Carburant</div>
                            <div className="text-sm font-medium text-gray-900">{car.fuelType}</div>
                        </div>

                        {/* Transmission */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 122.88 122.88">
                                    <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.23,61.23,0,0,1,61.44,0Zm4.07,82.09a6.67,6.67,0,1,1-8.14,0V68.62H42.31V82.09a6.67,6.67,0,1,1-8.14,0V46.17a6.67,6.67,0,1,1,8.14,0V60.48H57.37V46.17a6.67,6.67,0,1,1,8.14,0V60.48H80.57V46.17a6.67,6.67,0,1,1,8.14,0V64a4.41,4.41,0,0,1,0,.52,4.07,4.07,0,0,1-4.07,4.07H65.51V82.09Zm33-57.76a52.46,52.46,0,1,0,15.38,37.11A52.29,52.29,0,0,0,98.55,24.33Z" />
                                </svg>
                            </div>
                            <div className="text-xs text-gray-500 mb-1">Transmission</div>
                            <div className="text-sm font-medium text-gray-900">{car.transmission}</div>
                        </div>
                    </div>

                    {/* Action avec effet moderne */}
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900">
                            {car.price.toLocaleString('fr-CH').replace(/\s/g, "'")}&nbsp;CHF
                        </div>
                        <div className="group relative bg-[#303F9F] text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer inline-flex items-center text-sm">
                            <span className="relative z-10">
                                Voir détails
                            </span>
                            {/* Effet de brillance au hover */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
