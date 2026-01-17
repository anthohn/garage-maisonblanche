'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CarImageProps {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
    priority?: boolean;
    sizes?: string;
}

export default function CarImage({
    src,
    alt,
    className = '',
    fill = false,
    width,
    height,
    priority = false,
    sizes = '100vw'
}: CarImageProps) {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageError = () => {
        setImageError(true);
        setImageLoading(false);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    if (imageError || !src) {
        // Placeholder quand l'image n'existe pas
        return (
            <div className={`bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center ${className}`}>
                <div className="text-center text-gray-600">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs">Image à venir</p>
                </div>
                {/* Overlay avec le chemin de l'image pour le debug */}
                <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                        {src}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                width={width}
                height={height}
                priority={priority}
                sizes={sizes}
                onError={handleImageError}
                onLoad={handleImageLoad}
                className="object-cover"
            />
        </div>
    );
}