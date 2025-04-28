'use client';

import { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
  <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
    {/* Logo and Tagline */}
    <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
      <a href="/" className="flex justify-start sm:justify-center lg:justify-start">
        <img src="/bwlogo.svg" alt="Finas Logo" className="h-16 w-auto" />
      </a>
      <p className="mt-6 text-base text-gray-500">
        Secure. Simple.<br />Financial Freedom.
      </p>
    </div>

    {/* Links Section */}
    <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
      {/* Quick Links */}
      <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
        <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
          Quick Links
        </li>
        <li><a href="/" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">Home</a></li>
        <li><a href="#features" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">Features</a></li>
        <li><a href="#pricing" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">Pricing</a></li>
        <li><a href="#about" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">About Us</a></li>
        <li><a href="#contact" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">Contact Us</a></li>
      </ul>

      {/* Support / Help */}
      <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
        <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
          Support
        </li>
        <li><a href="#faqs" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">FAQs</a></li>
        <li><a href="#support" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">Customer Support</a></li>
        <li><a href="#privacy" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">Privacy Policy</a></li>
        <li><a href="#terms" className="inline-block px-3 py-2 text-gray-500 hover:text-gray-600">Terms of Service</a></li>
      </ul>

      {/* Contact Info */}
      <div className="flex flex-col w-full p-0 font-medium text-left text-gray-700">
        <div className="inline-block px-3 py-2 mt-5 font-bold text-gray-800 uppercase md:mt-0">Contact Info</div>
        <p className="px-3 py-1 text-gray-500">Email: <a href="mailto:support@finas.com" className="hover:text-gray-600">support@finas.com</a></p>
        <p className="px-3 py-1 text-gray-500">Phone: +1 (123) 456-7890</p>
        <p className="px-3 py-1 text-gray-500">123 Finance Street, Mumbai, India</p>

        {/* Social Media */}
        <div className="flex items-center mt-4 px-3 space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5V24H0V8zm7.5 0h4.7v2.8h.07c.65-1.23 2.24-2.5 4.6-2.5 4.92 0 5.8 3.24 5.8 7.45V24h-5V14.7c0-2.24-.04-5.12-3.12-5.12-3.12 0-3.6 2.44-3.6 4.96V24h-5V8z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.014 7.052.072 5.775.129 4.602.387 3.653 1.336 2.703 2.285 2.445 3.458 2.388 4.735.014 8.332 0 8.736 0 12c0 3.264.014 3.668.072 4.948.057 1.277.315 2.45 1.264 3.399.949.949 2.122 1.207 3.399 1.264 1.28.058 1.684.072 4.948.072s3.668-.014 4.948-.072c1.277-.057 2.45-.315 3.399-1.264.949-.949 1.207-2.122 1.264-3.399.058-1.28.072-1.684.072-4.948s-.014-3.668-.072-4.948c-.057-1.277-.315-2.45-1.264-3.399-.949-.949-2.122-1.207-3.399-1.264C15.668.014 15.264 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="pt-6 mt-10 text-center text-gray-500 border-t border-gray-100">
    © 2025 FINAS. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
