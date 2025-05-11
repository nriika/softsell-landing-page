import React, { useState } from 'react';
import logo from '../assets/logoss.png';
import DarkToggle from './DarkToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="SoftSell Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-400">SoftSell</span>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-200 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Links */}
        <div className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:block text-sm md:text-base`}>
          <a
            href="#how"
            className="relative px-4 py-2 text-blue-200 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            How It Works
          </a>
          <a
            href="#why"
            className="relative px-4 py-2 text-blue-200 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            className="relative px-4 py-2 text-blue-200 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="relative px-4 py-2 text-blue-200 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>

          <DarkToggle />
        </div>
      </div>
    </nav>
  );
}



