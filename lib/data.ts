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
    image: string; // Une seule image
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
        id: 'audi-q5-2019',
        brand: 'Audi',
        model: 'Q5',
        year: 2019,
        price: 35000,
        mileage: 150000,
        fuelType: 'Diesel',
        transmission: 'Manuel',
        image: '/cars/audi-q5-2019/main.jpg',
        description: 'Audi Q5 en excellent état, entretien régulier effectué dans notre garage. Ce SUV premium offre un parfait équilibre entre confort, performance et praticité. Idéal pour la famille ou les longs trajets.',
        features: ['GPS', 'Climatisation', 'Jantes alliage', 'Radar de recul', 'Bluetooth', 'Régulateur de vitesse'],
        specifications: {
            engine: '2.0 TDI',
            power: '190 ch',
            consumption: '6.2 L/100km',
            co2: '162 g/km',
            doors: 5,
            seats: 5,
            color: 'Noir métallisé'
        }
    },
    {
        id: 'subaru-impreza-2018',
        brand: 'Subaru',
        model: 'Impreza',
        year: 2018,
        price: 28000,
        mileage: 95000,
        fuelType: 'Essence',
        transmission: 'Manuel',
        image: '/cars/subaru-impreza-2018/main.jpg',
        description: 'Subaru Impreza fiable et sportive, parfaite pour tous les terrains. Transmission intégrale de série.',
        features: ['4x4', 'Sièges chauffants', 'Bluetooth', 'Phares LED', 'Climatisation', 'Ordinateur de bord'],
        specifications: {
            engine: '2.0i',
            power: '156 ch',
            consumption: '7.1 L/100km',
            co2: '164 g/km',
            doors: 5,
            seats: 5,
            color: 'Blanc nacré'
        }
    },
    {
        id: 'bmw-x3-2021',
        brand: 'BMW',
        model: 'X3',
        year: 2021,
        price: 55000,
        mileage: 45000,
        fuelType: 'Diesel',
        transmission: 'Automatique',
        image: '/cars/bmw-x3-2021/main.jpg',
        description: 'BMW X3 récent, garantie constructeur, état impeccable.',
        features: ['Boîte automatique', 'GPS', 'Cuir', 'Caméra de recul', 'Sièges chauffants'],
        specifications: {
            engine: '2.0d',
            power: '190 ch',
            consumption: '5.5 L/100km',
            co2: '145 g/km',
            doors: 5,
            seats: 5,
            color: 'Blanc alpine'
        }
    },
    {
        id: 'volkswagen-golf-2019',
        brand: 'Volkswagen',
        model: 'Golf',
        year: 2019,
        price: 22000,
        mileage: 75000,
        fuelType: 'Essence',
        transmission: 'Manuel',
        image: '/cars/volkswagen-golf-2019/main.jpg',
        description: 'Volkswagen Golf fiable et économique, parfaite pour la ville.',
        features: ['Climatisation', 'Bluetooth', 'Régulateur de vitesse', 'Airbags'],
        specifications: {
            engine: '1.5 TSI',
            power: '130 ch',
            consumption: '5.9 L/100km',
            co2: '134 g/km',
            doors: 5,
            seats: 5,
            color: 'Bleu atlantique'
        }
    },
    {
        id: 'mercedes-c-class-2020',
        brand: 'Mercedes',
        model: 'Classe C',
        year: 2020,
        price: 48000,
        mileage: 60000,
        fuelType: 'Hybride',
        transmission: 'Automatique',
        image: '/cars/mercedes-c-class-2020/main.jpg',
        description: 'Mercedes Classe C hybride, luxe et écologie réunis.',
        features: ['Hybride', 'Boîte automatique', 'GPS', 'Cuir', 'Toit ouvrant', 'Phares LED'],
        specifications: {
            engine: '1.5 Hybrid',
            power: '204 ch',
            consumption: '4.8 L/100km',
            co2: '109 g/km',
            doors: 4,
            seats: 5,
            color: 'Noir obsidienne'
        }
    }
];