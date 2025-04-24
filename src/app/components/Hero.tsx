'use client';

import React, { useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const services = [
    { title: "Architectural Design", icon: "▸" },
    { title: "Structural Engineering", icon: "▸" },
    { title: "Project Management", icon: "▸" },
    { title: "Quantity Surveying", icon: "▸" },
    { title: "New Build & Development", icon: "▸" },
    { title: "House Survey", icon: "▸" },
  ];

  useEffect(() => {
    // Optional: Initialize animation library if needed
    // This is placeholder for potential animation library initialization
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        >
          <source src="/v.mp4" type="video/mp4" />
          {/* Fallback background for when video doesn't load */}
          <div className="absolute inset-0 bg-blue-900"></div>
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w animate-fadeIn mt-5">
          {/* Main Heading with Animation */}
          <h1 className="font-bold text-white tracking-tight leading-none">
            <span className="block text-xl md:text-xl lg:text-xl mb-2 animate-slideInLeft">
              A MULTI-DISCIPLINED
            </span>
            <span className="block text-3xl md:text-2xl lg:text-5xl animate-slideInRight">
              CONSTRUCTION
              CONSULTANTS
            </span>
          </h1>

          {/* Tagline with Animation */}
          <h2 className="text-yellow-400 text-xl md:text-2xl lg:text-2xl font-semibold my-8 animate-fadeIn opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            EXPERTS IN RESIDENTIAL & COMMERCIAL SECTOR
          </h2>

          {/* Services Grid with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center text-white text-lg opacity-0 animate-fadeIn" 
                style={{ animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <span className="text-yellow-400 mr-2 text-lg">{service.icon}</span>
                {service.title}
              </div>
            ))}
          </div>

          {/* Call to Action Buttons with Animation */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-8 opacity-0 animate-fadeIn" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
            <button className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full w-16 h-16 transition-all duration-300 transform hover:scale-105">
              <Play size={24} className="ml-1" />
            </button>
            
            <a href="#consultation" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-all duration-300 font-medium transform hover:translate-x-1">
              Book a Consultation
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* CSS for Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;