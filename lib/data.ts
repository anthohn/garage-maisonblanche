// Typage des liens
type Link = {
    label: string;
    href: string;
};

// Typage des véhicules
export interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: 'Diesel' | 'Essence' | 'Électrique' | 'Hybride';
    transmission: 'Manuel' | 'Automatique';
    images: string[]; // Tableau d'images

    description?: string;
    features?: string[];
    specifications?: {
        engine: string;
        power: string;
        consumption: string;
        co2: string;
        doors: number;
        seats: number;
        color: string;
    };
}

export const links: Link[] = [
    {
        label: "Accueil",
        href: "/",
    },

    {
        label: "Nos services",
        href: "/services",
    },
    {
        label: "Véhicules",
        href: "/vehicules",
    },
    {
        label: "Contact",
        href: "/contact",
    }
] as const;

// Données des véhicules
export const carsData: Car[] = [
    {
        id: 'mg-mgf-1.8i',
        brand: 'MG',
        model: 'MGF 1.8i',
        year: 1998,
        price: 4700,
        mileage: 91863,
        fuelType: 'Essence',
        transmission: 'Manuel',
        images: ['/cars/mg-mgf/1.jpg', '/cars/mg-mgf/2.jpg', '/cars/mg-mgf/3.jpg', '/cars/mg-mgf/4.jpg', '/cars/mg-mgf/5.jpg', '/cars/mg-mgf/6.jpg', '/cars/mg-mgf/7.jpg', '/cars/mg-mgf/8.jpg'], // Tableau d'images (dupliqué pour test)

        description: 'MG MGF 1.8i Cabriolet en très bon état. Expertise du jour (11.02.2025). Service effectué, courroie de distribution remplacée. Suspension hydragas neuve. Hardtop inclus.',
        features: ['ABS', 'Sièges en cuir', 'Jantes en alliage léger', 'Vitres électriques', 'Climatisation', 'Hardtop', 'Verrouillage central'],
        specifications: {
            engine: '1.8i',
            power: '120 ch',
            consumption: '7.4 L/100km',
            co2: '178 g/km', // Estimation
            doors: 2,
            seats: 2,
            color: 'Vert' // Souvent vert pour les MG, à confirmer ou changer
        }
    }
];