import React, { useState } from 'react';
import Icon1 from '../assets/Images/Icon1.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'];

  return (
    <header className="text-gray-600 body-font sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 text-gray-900 mb-4 md:mb-0">
          <img src={Icon1} alt="Logo Icon" className="w-10 h-10 object-contain" />
          <span className="text-2xl sm:text-3xl font-bold tracking-tight">Nexcent</span>
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="ml-auto md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex flex-wrap items-center justify-center gap-x-6">
          {navLinks.map((item) => (
            <a
              key={item}
              className="hover:text-lime-600 font-semibold relative after:block after:h-[2px] after:bg-lime-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex gap-3 mt-4 md:mt-0 ml-auto md:ml-0">
          <button className="inline-flex items-center font-semibold text-lg text-lime-600 bg-gray-100 border-0 py-2 px-4 hover:bg-gray-200 rounded">
            Login
          </button>
          <button className="inline-flex items-center font-semibold text-lg bg-lime-600 text-white border-0 py-2 px-6 hover:bg-lime-700 rounded">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Visible when toggled) */}
      {isOpen && (
        <div className="md:hidden bg-white px-5 pb-4 mt-4">
          {navLinks.map((item) => (
            <a
              key={item}
              className="block py-2 text-gray-800 font-semibold border-b border-gray-200 hover:text-lime-600"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
