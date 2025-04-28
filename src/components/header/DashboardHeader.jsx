"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref to the dropdown for dynamic positioning
  const userProfileRef = useRef(null); // Ref to profile icon for positioning the dropdown

  const handleLogout = () => {
    // Logic to log out user
    router.push('/login'); // Redirect to login page
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Adjust dropdown position based on screen height (only for desktop)
  useEffect(() => {
    // Check if the screen is large enough (desktop) before adjusting the dropdown position
    if (window.innerWidth >= 768 && dropdownOpen && dropdownRef.current && userProfileRef.current) {
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const profileHeight = userProfileRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Adjust the dropdown position if it exceeds the viewport
      if (window.scrollY + viewportHeight < dropdownHeight + profileHeight) {
        dropdownRef.current.style.top = `-${dropdownHeight + 10}px`; // Position above
      } else {
        dropdownRef.current.style.top = `${profileHeight + 10}px`; // Position below
      }
    }
  }, [dropdownOpen]); // Run this effect whenever dropdownOpen changes

  return (
    <header className="relative z-50 w-full h-24 bg-black">
      <div className="container flex items-center justify-between h-full px-8 mx-auto sm:px-0 md:px-4 lg:px-8">

        {/* Logo */}
        <Link href="/dashboard" className="relative flex items-center h-full font-black leading-none">
          <img src="/Logo.svg" alt="Finans Logo" className="h-12 w-auto" />
          <span className="ml-3 text-xl text-pink-500">Finans<span className="text-white">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:flex-row md:items-center lg:text-base">
          {["Dashboard", "Transactions", "Income Tracker", "Budget"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '')}`} className="ml-12 font-bold duration-100 hover:text-pink-600">
              {item}
            </Link>
          ))}
        </nav>

        {/* User Profile and Dropdown (Desktop only) */}
        <div className="hidden md:flex md:items-center ml-6 relative">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleDropdown} ref={userProfileRef}>
            <img src="/profile-pic.png" alt="User Profile" className="w-12 h-12 rounded-full border-2 border-pink-500" />
            <span className="text-white font-medium">John Doe</span>
          </div>

          {/* Dropdown Menu (Desktop Only) */}
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 bg-black text-white rounded-lg shadow-lg z-50 mt-2 w-48"
            >
              <ul className="space-y-2 p-2">
                <li>
                  <Link href="/profile" className="block px-4 py-2 hover:bg-pink-500 rounded-lg">Profile</Link>
                </li>
                <li>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-pink-500 rounded-lg">Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="block w-full px-4 py-2 text-left text-red-500 hover:bg-pink-500 rounded-lg">Logout</button>
                </li>
              </ul>
            </div>
          )}
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
            {["Dashboard", "Transactions", "Income Tracker", "Budget"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '')}`} className="py-2 font-bold hover:text-pink-600 w-full text-center">
                {item}
              </Link>
            ))}
            <div className="flex flex-col w-full font-medium border-t border-gray-200 mt-3">
              <Link href="/login" className="w-full py-2 font-bold text-center text-pink-500">Logout</Link>
            </div>
          </nav>
        )}

      </div>
    </header>
  );
};

export default DashboardHeader;
