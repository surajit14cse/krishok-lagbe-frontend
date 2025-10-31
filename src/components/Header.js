import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
    }
  };

  return (
    <header className="bg-white shadow-md p-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and Tagline */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl font-bold text-green-600">কৃষক লাগবে</Link>
          <span className="hidden md:block text-gray-500 text-xs">সারা বাংলাদেশে বিশ্বস্ত কর্মী নিয়োগ করুন।</span>
        </div>

        {/* Center Section: Search Bar */}
        <div className="hidden md:flex flex-grow justify-center px-4">
          <div className="relative flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="নাম বা কাজের ধরণ অনুসারে কৃষক অনুসন্ধান করুন"
              className="w-full p-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full bg-green-600 text-white px-4 rounded-r-full hover:bg-green-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Section: Buttons and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
            <Link to="/register" className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition duration-300">
              Register
            </Link>
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Login
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full bg-green-600 text-white px-4 rounded-r-full hover:bg-green-700 transition duration-300"
            >
              Search
            </button>
          </div>
          <Link to="/" className="block text-gray-600 hover:text-green-600 py-2">Home</Link>
          <Link to="/about" className="block text-gray-600 hover:text-green-600 py-2">About</Link>
          <Link to="/contact" className="block text-gray-600 hover:text-green-600 py-2">Contact</Link>
          <Link to="/faq" className="block text-gray-600 hover:text-green-600 py-2">FAQ</Link>
          <Link to="/register" className="block bg-white border border-green-600 text-green-600 px-4 py-2 rounded-full text-center mb-2 hover:bg-green-50 transition duration-300">
            Register
          </Link>
          <Link to="/login" className="block bg-green-600 text-white px-4 py-2 rounded-full text-center hover:bg-green-700 transition duration-300">
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;