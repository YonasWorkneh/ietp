import React from 'react';
import { Navigation, Eye, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-indigo-600 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Navigation className="h-6 w-6" />
          <span className="text-xl font-bold">SafeCross</span>
        </Link>
        
        <div className="flex space-x-8">
          <Link
            to="/"
            className={`hover:text-indigo-200 transition ${
              isActive('/') ? 'font-bold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-indigo-200 transition ${
              isActive('/about') ? 'font-bold' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:text-indigo-200 transition ${
              isActive('/contact') ? 'font-bold' : ''
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}