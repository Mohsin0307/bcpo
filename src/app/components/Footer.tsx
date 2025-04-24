'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0c2e57] text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">NCCPO Ltd</h2>
          <p className="text-sm text-gray-300">
            A multi-disciplined construction consultancy delivering top-quality services across the UK.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/consultancy">Consultancy Services</Link></li>
            <li><Link href="/building-works">Building Works</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">
                Privacy Policy </Link></li>
                <li><Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-1 text-yellow-400" />
              +44 7979 201706
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-yellow-400" />
              1 Brockehurst Mews, Macclesfield, SK10 2GY, United Kingdom
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1 text-yellow-400" />
              info@nccpo.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} NCCPO Ltd. Company Number 16242818. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
