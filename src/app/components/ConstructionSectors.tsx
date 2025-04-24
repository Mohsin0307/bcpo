"use client"
import { useState } from 'react';
import Image from 'next/image';

interface SectorProps {
  name: string;
  image: string;
}

const SectorCard = ({ name, image }: SectorProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative h-48 overflow-hidden rounded-lg transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt={`${name} sector`} 
          fill 
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 16vw"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-2xl font-semibold z-10 px-2 text-center">
          {name}
        </h3>
      </div>
    </div>
  );
};

const ConstructionSectors = () => {
  const sectors: SectorProps[] = [
    {
      name: "Residential",
      image: "/1.jpg",
    },
    {
      name: "Commercial",
      image: "/2.jpg",
    },
    {
      name: "Industrial",
      image: "/3.jpg",
    },
    {
      name: "Educational",
      image: "/5.jpg",
    },
    {
      name: "HealthCare",
      image: "/8.jpg",
    },
    {
      name: "Restoration",
      image: "/6.jpg",
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Construction Consultants Sector&apos;s Coverage
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {sectors.map((sector, index) => (
            <SectorCard 
              key={index}
              name={sector.name} 
              image={sector.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionSectors;