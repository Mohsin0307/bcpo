'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white text-blue-900 shadow-lg py-2' : 'bg-[#0c2e57] text-white py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo Section with gradient background */}
        <div className={`flex items-center ${scrolled ? 'bg-gradient-to-r from-blue-900 to-blue-700' : 'bg-gradient-to-r from-blue-700 to-blue-500'} text-white py-3 px-6 rounded-br-3xl transition-all duration-300`}>
          <div className="font-bold">
            <div className="text-2xl tracking-wider">NCCPO</div>
            <div className="text-xs tracking-widest text-yellow-400">PROCUREMENT & CONSULTANCY</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <Link 
            href="/" 
            className={`transition-colors duration-300 hover:text-yellow-400 ${
              scrolled ? 'hover:border-b-2 hover:border-blue-700' : 'hover:border-b-2 hover:border-yellow-400'
            }`}
          >
            HOME
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors duration-300 hover:text-yellow-400 ${
              scrolled ? 'hover:border-b-2 hover:border-blue-700' : 'hover:border-b-2 hover:border-yellow-400'
            }`}
          >
            ABOUT US
          </Link>
          
          {/* Dropdown Menu */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className={`flex items-center space-x-1 transition-colors duration-300 hover:text-yellow-400 ${
              scrolled ? 'hover:border-b-2 hover:border-blue-700' : 'hover:border-b-2 hover:border-yellow-400'
            }`}>
              <span>CONSULTANCY SERVICE</span>
              <ChevronDown size={14} className="transition-transform duration-300" />
            </div>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white text-blue-900 shadow-lg rounded-md border-t-2 border-yellow-400 overflow-hidden">
                <Link href="/service1" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-b border-gray-100">
                  Procurement Consulting
                </Link>
                <Link href="/service2" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-b border-gray-100">
                  Supplier Sourcing
                </Link>
                <Link href="/service3" className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                  Bid & Tender Writing
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/building-works" 
            className={`transition-colors duration-300 hover:text-yellow-400 ${
              scrolled ? 'hover:border-b-2 hover:border-blue-700' : 'hover:border-b-2 hover:border-yellow-400'
            }`}
          >
            SERVICES
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors duration-300 hover:text-yellow-400 ${
              scrolled ? 'hover:border-b-2 hover:border-blue-700' : 'hover:border-b-2 hover:border-yellow-400'
            }`}
          >
            CONTACT US
          </Link>
          
          <Link 
            href="/contact" 
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              scrolled ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-yellow-400 text-blue-900 hover:bg-yellow-500'
            }`}
          >
            GET QUOTE
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? 
              <X size={24} /> : 
              <Menu size={24} />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-blue-900 shadow-lg">
          <div className="flex flex-col py-4">
            <Link href="/" className="px-6 py-3 hover:bg-blue-50">
              HOME
            </Link>
            <Link href="/about" className="px-6 py-3 hover:bg-blue-50">
              ABOUT US
            </Link>
            <button 
              className="px-6 py-3 text-left flex items-center justify-between hover:bg-blue-50"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>CONSULTANCY SERVICE</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="bg-gray-50 pl-10">
                <Link href="/service1" className="block px-4 py-3 hover:bg-blue-100">
                  Procurement Consulting
                </Link>
                <Link href="/service2" className="block px-4 py-3 hover:bg-blue-100">
                  Supplier Sourcing
                </Link>
                <Link href="/service3" className="block px-4 py-3 hover:bg-blue-100">
                  Bid & Tender Writing
                </Link>
              </div>
            )}
            
            <Link href="/building-works" className="px-6 py-3 hover:bg-blue-50">
              SERVICES
            </Link>
            <Link href="/contact" className="px-6 py-3 hover:bg-blue-50">
              CONTACT US
            </Link>
            <div className="px-6 py-3">
              <Link href="/contact" className="block w-full py-2 text-center bg-blue-900 text-white rounded-md hover:bg-blue-800">
                GET QUOTE
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;