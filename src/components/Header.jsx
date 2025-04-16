import React from 'react';
import Icon1 from '../assets/Images/Icon1.png';

function Header() {
  return (
    <header className="text-gray-600 body-font sticky top-0 z-50 bg-white shadow-md">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    {/* Logo */}
    <a
  href="#"
  className="flex items-center gap-3 text-gray-900 mb-4 md:mb-0"
>
  <img
    src={Icon1}
    alt="Logo Icon"
    className="w-10 h-10 object-contain"
  />
  <span className="text-2xl sm:text-3xl font-bold tracking-tight">
    Nexcent
  </span>
</a>

    {/* Navigation */}
    <nav className="md:ml-auto md:mr-auto font-semibold text-md hidden md:flex flex-wrap items-center text-base justify-center gap-x-6">
      {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map((item) => (
        <a
          key={item}
          className="hover:text-lime-600 relative after:block after:h-[2px] after:bg-lime-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left cursor-pointer"
        >
          {item}
        </a>
      ))}
    </nav>

    {/* Buttons */}
    <div className="flex gap-3 mt-4 md:mt-0">
      <button className="inline-flex items-center font-semibold text-lg text-lime-600 bg-gray-100 border-0 py-2 px-4 hover:bg-gray-200 rounded">
        Login
      </button>
      <button className="inline-flex items-center font-semibold text-lg bg-lime-600 text-white border-0 py-2 px-6 hover:bg-lime-700 rounded">
        Sign Up
      </button>
    </div>
  </div>
</header>

  );
}

export default Header;
