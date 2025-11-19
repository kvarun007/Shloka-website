import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">SHLOKA</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 z-10`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </nav>
        <div className={`md:flex ${isMenuOpen ? 'flex flex-col space-y-2' : 'hidden'} md:space-x-4`}>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Contact</Link>
          <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">WhatsApp</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
