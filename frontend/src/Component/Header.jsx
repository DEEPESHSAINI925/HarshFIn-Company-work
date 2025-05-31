import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* Main Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left Section: Logo and Search */}
            <div className="flex items-center flex-1">
              <Link to="/" className="mr-8">
                <img src="../public/svg/loginlogo.svg" alt="Fiverr" className="h-7" />
              </Link>
              <div className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What service are you looking for today?"
                    className="w-full  px-4 py-2 pl-10 border rounded-md focus:outline-none focus:border-gray-400"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black text-white rounded-md">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section: Navigation */}
            <div className="flex items-center space-x-6 ml-8">
              <div className="relative group">
                <button className="text-gray-600 hover:text-gray-900">
                  Impack Link
                  <span className="ml-1">▼</span>
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-600 hover:text-gray-900 flex items-center">
                  <img src="/icons/globe.svg" alt="Language" className="w-4 h-4 mr-1" />
                  English
                </button>
              </div>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                Become a Seller
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Navigation */}
      <nav className="border-b bg-white whitespace-nowarp">
        <div className="container mx-auto overflow-x-hidden px-6">
          <div className="overflow-hidden relative">
            <ul className="flex items-center space-x-8 overflow-x-auto no-scrollbar whitespace-nowrap py-3 text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-900">All</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Graphics & Design</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Programming & Tech</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Digital Marketing</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Video & Animation</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Writing & Translation</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Music & Audio</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Business</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Finance</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">AI Services</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900">Personal Growth</Link>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900">
                  More
                  <span className="ml-1">▼</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
