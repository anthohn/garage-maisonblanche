"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-blue-900 hover:text-blue-900 transition-colors">
              <i className="flaticon-car-repair-1 text-3xl text-blue-900"></i>
              Garage Maison-Blanche
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/station" className="text-gray-600 hover:text-blue-900 font-medium transition-colors uppercase text-sm tracking-wide">La Station</Link>
            <Link href="/garage" className="text-gray-600 hover:text-blue-900 font-medium transition-colors uppercase text-sm tracking-wide">L'Atelier</Link>
            <Link href="/shop" className="text-gray-600 hover:text-blue-900 font-medium transition-colors uppercase text-sm tracking-wide">Le Shop</Link>
            <Link href="/lavage" className="text-gray-600 hover:text-blue-900 font-medium transition-colors uppercase text-sm tracking-wide">Le Lavage</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/station" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>La Station</Link>
            <Link href="/garage" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>L'Atelier</Link>
            <Link href="/shop" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Le Shop</Link>
            <Link href="/lavage" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>Le Lavage</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
