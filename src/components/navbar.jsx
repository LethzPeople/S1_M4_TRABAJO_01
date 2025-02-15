import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-green-500 to-yellow-300 bg-opacity-30 backdrop-blur-md z-50 transition-all duration-300 py-2 md:py-3">
      <div className="container mx-auto flex justify-between items-center w-full md:w-3/4 lg:w-2/3">
        <div className="flex items-center gap-2">
          <img src="src/assets/logo.png" alt="Logo" className="w-[40px] md:w-[50px] lg:w-[60px]" />
        </div>

        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4 px-0.5">
            <li><a href="#" className="sm:text-lg text-sm text-white hover:text-gray-300 transition-transform duration-300 transform hover:scale-110">Home</a></li>
            <li><a href="#" className="sm:text-lg text-sm text-white hover:text-gray-300 transition-transform duration-300 transform hover:scale-110">About Us</a></li>
            <li><a href="#" className="sm:text-lg text-sm text-white hover:text-gray-300 transition-transform duration-300 transform hover:scale-110">Contact</a></li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="https://twitter.com" target="_blank" className="inline-block transition-transform duration-300 transform hover:scale-125">
              <i className="bi bi-twitter sm:text-2xl text-lg text-white transition-all duration-300 hover:text-gray-300"></i>
            </a></li>
            <li><a href="https://www.youtube.com" target="_blank" className="inline-block transition-transform duration-300 transform hover:scale-125">
              <i className="bi bi-youtube sm:text-2xl text-lg text-white transition-all duration-300 hover:text-gray-300"></i>
            </a></li>
          </ul>
        </div>
      </div>

      {/* Menú de hamburguesa */}
      <div className={`md:hidden absolute w-full bg-gradient-to-r from-black via-green-500 to-yellow-300 bg-opacity-30 transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="flex flex-col px-4 py-2">
          <li className="py-2 text-center"><a href="#" className="text-white hover:text-gray-300 block">Home</a></li>
          <li className="py-2 text-center"><a href="#" className="text-white hover:text-gray-300 block">About Us</a></li>
          <li className="py-2 text-center"><a href="#" className="text-white hover:text-gray-300 block">Contact</a></li>
        </ul>
        <ul className="flex space-x-4 px-4 py-2 border-t border-gray-700 justify-center">
          <li><a href="https://twitter.com" target="_blank" className="inline-block">
            <i className="bi bi-twitter text-lg text-white hover:text-gray-300"></i>
          </a></li>
          <li><a href="https://www.youtube.com" target="_blank" className="inline-block">
            <i className="bi bi-youtube text-lg text-white hover:text-gray-300"></i>
          </a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

