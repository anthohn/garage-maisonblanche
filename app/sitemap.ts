import { MetadataRoute } from 'next'
import { carsData } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: 'https://garage-maisonblanche.ch',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://garage-maisonblanche.ch/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://garage-maisonblanche.ch/vehicules',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://garage-maisonblanche.ch/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ];

    const vehicleRoutes: MetadataRoute.Sitemap = carsData.map((car) => ({
        url: `https://garage-maisonblanche.ch/vehicules/${car.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...baseRoutes, ...vehicleRoutes];
}
