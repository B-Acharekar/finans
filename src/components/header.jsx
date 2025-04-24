'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full h-24">
      <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">

        {/* Logo */}
        <Link href="/" className="relative flex items-center h-full font-black leading-none">
          <svg className="w-auto h-6 text-indigo-600 fill-current" viewBox="0 0 194 116" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
              <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
            </g>
          </svg>
          <span className="ml-3 text-xl text-gray-800">Finans<span className="text-pink-500">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:flex-row md:items-center lg:text-base">
          {["Home", "Features", "Pricing", "Testimonials"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="ml-12 font-bold duration-100 hover:text-indigo-600">
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA buttons (desktop only) */}
        <div className="hidden md:flex md:items-end md:relative ml-6">
          <Link href="#_" className="px-3 py-2 mr-3 text-sm font-bold text-pink-500">Login</Link>
          <Link href="#_" className="px-5 py-3 text-sm font-bold text-white bg-indigo-700 rounded hover:shadow-xl transition-all">Get Started</Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="absolute top-0 right-0 z-50 block md:hidden mt-8 mr-6">
          <button onClick={() => setIsOpen(!isOpen)} className="w-6 focus:outline-none">
            <span className="block w-full h-1 mt-2 bg-gray-800 rounded-full"></span>
            <span className="block w-full h-1 mt-1 bg-gray-800 rounded-full"></span>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="absolute top-24 left-0 z-40 flex flex-col items-center w-full p-5 text-sm text-gray-800 bg-white border-t border-gray-200 md:hidden">
            {["Home", "Features", "Pricing", "Testimonials"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="py-2 font-bold hover:text-indigo-600 w-full text-center">
                {item}
              </Link>
            ))}
            <div className="flex flex-col w-full font-medium border-t border-gray-200 mt-3">
              <Link href="#_" className="w-full py-2 font-bold text-center text-pink-500">Login</Link>
              <Link href="#_" className="w-full px-5 py-3 text-sm text-center text-white bg-indigo-700 font-bold mt-2 rounded">Get Started</Link>
            </div>
          </nav>
        )}

      </div>
    </header>
  );
};

export default Header;
