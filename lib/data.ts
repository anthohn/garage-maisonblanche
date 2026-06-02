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
        registration?: string;
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

        description: 'Magnifique MG MGF 1.8i Cabriolet en très bon état. Expertise du jour (02.2025). Entièrement révisée avec courroie de distribution remplacée, capote neuve, pneus neufs et suspension hydragas neuve. Vendue avec son certificat de conformité européen (COC Europe).',
        features: ['ABS', 'Climatisation', 'Capote neuve', 'Pneus neufs', 'Hardtop inclus', 'Suspension neuve', 'Service à jour', 'Sièges en cuir', 'Jantes en alliage léger', 'Vitres électriques', 'Verrouillage central', 'Certificat de conformité européen (COC)'],
        specifications: {
            engine: '1.8i (1800 ccm)',
            power: '120 ch (88 kW)',
            consumption: '7.4 L/100km',
            co2: '178 g/km', // Estimation
            doors: 2,
            seats: 2,
            color: 'Vert',
            registration: '08.1998'
        }
    },
    {
        id: 'opel-speedster',
        brand: 'Opel',
        model: 'Speedster',
        year: 2001,
        price: 17700,
        mileage: 31700,
        fuelType: 'Essence',
        transmission: 'Manuel',
        images: ['/cars/opel-speedster/1.jpg', '/cars/opel-speedster/2.jpg'],
        description: 'Magnifique Opel Speedster 2.2 avec seulement 31 700 km certifiés. Véhicule expertisé en mai 2026.',
        // features: ['Expertisée mai 2026', 'Intérieur cuir noir', 'Soft-top noir', 'Jantes alliage', 'Vitres manuelles'],
        specifications: {
            engine: '2.2 16V',
            power: '147 ch',
            consumption: '8.5 L/100km',
            co2: '206 g/km',
            doors: 2,
            seats: 2,
            color: 'Rouge'
        }
    }
];
