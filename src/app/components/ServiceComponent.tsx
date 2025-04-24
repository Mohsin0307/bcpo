"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const ServicesComponent = () => {
  const subheadings = [
    "Construction Consultants for Residential and Commercial Projects",
    "Expert Solutions for Your Development Needs",
    "Professional Surveying and Engineering Services",
    "Comprehensive Project Management and Design"
  ];
  
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % subheadings.length);
        setFadeState("fade-in");
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [subheadings.length]); // Added subheadings.length as a dependency

  const services: ServiceProps[] = [
    {
      title: "New Build & Development",
      description: "We provide comprehensive solutions from planning through to construction work.",
      icon: "/11.png"
    },
    {
      title: "Architectural Design",
      description: "Our architects work with you to develop build and interior design ideas to shape your vision.",
      icon: "/12.png"
    },
    {
      title: "Structural Engineering",
      description: "We offer innovative and cost-effective engineering solutions for your development.",
      icon: "/13.png"
    },
    {
      title: "Construction Management",
      description: "Our Project managers take responsibility for the success of the project.",
      icon: "/14.png"
    },
    {
      title: "Quantity Surveying",
      description: "Our Quantity Surveyors offer a complete solution to project cost & procurement route.",
      icon: "/15.png"
    },
    {
      title: "House Survey",
      description: "We provide house surveys, drone surveys, and structural surveys for all properties.",
      icon: "/16.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Our Services</h2>
        
        <div className={`text-center mb-12 h-8 transition-opacity duration-500 ${fadeState === "fade-in" ? "opacity-100" : "opacity-0"}`}>
          <p className="text-lg text-gray-700">{subheadings[currentHeadingIndex]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg border border-yellow-400 hover:shadow-lg transition-shadow duration-300 bg-white group">
              <div className="p-8 flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={48} 
                    height={48}
                    className="text-white"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h4>
                <p className="text-gray-700 mb-8">{service.description}</p>
                
                <div className="mt-auto">
                  <button className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-12">
          <button className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
            FREE CONSULTATION
          </button>
          <button className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
            03337722887
          </button>
          <button className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
            FREE QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;