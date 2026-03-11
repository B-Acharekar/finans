"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { Bell, Search, User, LogOut, Settings, Menu, X, ChevronDown } from "lucide-react";

const DashboardHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleLogout = () => {
    router.push('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Transactions", href: "/transactions" },
    { name: "Budget", href: "/budget" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2 group">
              <div className="p-2 bg-pink-600 rounded-xl transition-transform group-hover:rotate-12">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Finans
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    pathname === item.href
                      ? "bg-pink-50 text-pink-600 dark:bg-pink-900/20"
                      : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search - Desktop */}
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500 transition-all w-48 lg:w-64"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:text-pink-600 transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-600 rounded-full border-2 border-white" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs ring-2 ring-pink-100 dark:ring-slate-800">
                  JD
                </div>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 glass rounded-2xl shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-800">
                    <p className="text-sm font-bold text-gray-800 dark:text-white">John Doe</p>
                    <p className="text-xs text-gray-500">Premium Member</p>
                  </div>
                  <div className="py-2">
                    <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg hover:text-pink-600 transition-all">
                      <User size={16} /> Profile
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg hover:text-pink-600 transition-all">
                      <Settings size={16} /> Settings
                    </Link>
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-slate-800">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-pink-100 py-4 px-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  pathname === item.href
                    ? "bg-pink-600 text-white shadow-lg shadow-pink-200"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;

