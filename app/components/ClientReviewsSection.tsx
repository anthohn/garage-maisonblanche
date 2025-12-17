'use client'
import { useState } from 'react';
import { reviews } from '@/lib/reviewsData';
import Badge from '@/app/components/ui/Badge';

export default function ClientReviewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => {
            const isFullStar = i < Math.floor(rating);
            const isHalfStar = i === Math.floor(rating) && rating % 1 !== 0;

            if (isFullStar) {
                return (
                    <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            } else if (isHalfStar) {
                return (
                    <div key={i} className="relative w-4 h-4">
                        {/* Étoile grise en arrière-plan */}
                        <svg
                            className="absolute w-4 h-4 text-gray-300 fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {/* Demi-étoile dorée */}
                        <svg
                            className="absolute w-4 h-4 text-yellow-400 fill-current overflow-hidden"
                            viewBox="0 0 20 20"
                            style={{ clipPath: 'inset(0 50% 0 0)' }}
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                );
            } else {
                return (
                    <svg
                        key={i}
                        className="w-4 h-4 text-gray-300"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            }
        });
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-64 h-64 bg-[#303F9F] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header avec badge cohérent */}
                <div className="text-center mb-20">
                    <Badge className="mb-6">
                        Avis Clients
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ce que disent nos clients
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages authentiques.
                    </p>

                    {/* Statistiques de satisfaction */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#303F9F] mb-1">98%</div>
                            <div className="text-sm text-gray-600">Clients satisfaits</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-1">
                                {renderStars(4.5)}
                            </div>
                            <div className="text-sm text-gray-600">Note moyenne</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#303F9F] mb-1">50+</div>
                            <div className="text-sm text-gray-600">Avis positifs</div>
                        </div>
                    </div>
                </div>

                {/* Navigation moderne */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center bg-white rounded-full p-2 shadow-lg border border-gray-200">
                        <button
                            onClick={prevReview}
                            className="w-12 h-12 bg-gray-100 hover:bg-[#303F9F] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            aria-label="Avis précédent"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex space-x-2 mx-4">
                            {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i * 3)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / 3) === i ? 'bg-[#303F9F] w-6' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextReview}
                            className="w-12 h-12 bg-gray-100 hover:bg-[#303F9F] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            aria-label="Avis suivant"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Grid des avis - Desktop */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
                            <div
                                key={`desktop-${currentIndex}-${index}`}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Service badge */}
                                <div className="inline-block bg-blue-100 text-[#303F9F] text-xs font-medium px-3 py-1 rounded-full mb-4">
                                    {review.service}
                                </div>

                                {/* Rating */}
                                <div className="flex mb-4">
                                    {renderStars(review.rating)}
                                </div>

                                {/* Quote avec icône */}
                                <div className="relative mb-6">
                                    <div className="absolute -top-2 -left-2 text-4xl text-[#303F9F] opacity-20">
                                        &ldquo;
                                    </div>
                                    <p className="text-gray-700 leading-relaxed italic relative z-10">
                                        {review.text}
                                    </p>
                                </div>

                                {/* Author avec avatar */}
                                <div className="flex items-center pt-4 border-t border-gray-100">
                                    {/* <div className="w-12 h-12 bg-gradient-to-br from-[#303F9F] to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {review.author.split(' ').map(n => n[0]).join('')}
                                    </div> */}
                                    <div>
                                        <p className="font-semibold text-gray-900">{review.author}</p>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Version mobile */}
                <div className="md:hidden">
                    <div className="space-y-6">
                        {reviews.slice(currentIndex, currentIndex + 1).map((review, index) => (
                            <div
                                key={`mobile-${currentIndex}-${index}`}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                            >
                                <div className="inline-block bg-blue-100 text-[#303F9F] text-xs font-medium px-3 py-1 rounded-full mb-3">
                                    {review.service}
                                </div>

                                <div className="flex mb-4">
                                    {renderStars(review.rating)}
                                </div>

                                <div className="relative mb-6">
                                    <div className="absolute -top-2 -left-2 text-3xl text-[#303F9F] opacity-20">
                                        &ldquo;
                                    </div>
                                    <p className="text-gray-700 leading-relaxed italic relative z-10">
                                        {review.text}
                                    </p>
                                </div>

                                <div className="flex items-center pt-4 border-t border-gray-100">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#303F9F] to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                        {review.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{review.author}</p>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call-to-action discret */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-4">Vous aussi, partagez votre expérience</p>
                    <a
                        href="https://www.google.com/search?q=garage+maison-blanche+avis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#303F9F] hover:text-blue-700 font-medium transition-colors"
                    >
                        Laisser un avis sur Google
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}