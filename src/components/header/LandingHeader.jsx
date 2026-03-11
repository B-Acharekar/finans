"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "h-20 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm" : "h-24 bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-pink-600 rounded-xl transition-transform group-hover:rotate-12">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
          </div>
          <span className={`text-xl font-black transition-colors ${scrolled ? "bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent" : "text-white"}`}>
            Finans
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-bold transition-colors hover:text-pink-600 ${scrolled ? "text-gray-600" : "text-white/80"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/login" 
            className={`text-sm font-bold transition-colors ${scrolled ? "text-gray-600 hover:text-pink-600" : "text-white hover:text-pink-200"}`}
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-2 bg-pink-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-pink-200 transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-b border-pink-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 md:hidden shadow-xl">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-gray-800 hover:text-pink-600 py-2"
            >
              {item.name}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <Link href="/login" className="text-center font-bold text-gray-600 py-2">Login</Link>
          <Link href="/signup" className="text-center font-bold bg-pink-600 text-white py-3 rounded-xl shadow-lg shadow-pink-100">Get Started</Link>
        </nav>
      )}
    </header>
  );
};

export default LandingHeader;

