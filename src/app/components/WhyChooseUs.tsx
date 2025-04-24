"use client"
import { useState } from 'react';
import Image from 'next/image';

interface TabContentProps {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
}

const WhyChooseUsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent: TabContentProps[] = [
    {
      title: "Construction Consulting Companies",
      subtitle: "Expert Advisory Services",
      description: "We provide specialized consulting to optimize your construction projects from conception to completion.",
      points: [
        "Strategic project planning and risk assessment",
        "Cost optimization and value engineering",
        "Regulatory compliance and permit acquisition",
        "Quality assurance and performance monitoring"
      ],
      image: "/1.jpg"
    },
    {
      title: "Building Construction Companies",
      subtitle: "Quality Construction Solutions",
      description: "Our building services deliver exceptional quality with attention to detail and timely execution.",
      points: [
        "Residential and commercial new builds",
        "Structural renovations and extensions",
        "Sustainable construction practices",
        "Advanced building technologies implementation"
      ],
      image: "/2.jpg"
    },
    {
      title: "Comprehensive Design and Build",
      subtitle: "End-to-End Project Delivery",
      description: "Experience seamless integration of design and construction under one collaborative team.",
      points: [
        "Architectural design and visualization",
        "Engineering and technical specifications",
        "Construction execution and project management",
        "Post-completion support and maintenance"
      ],
      image: "/3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Why Choose Us</h2>
          <p className="text-lg text-gray-700 mt-4">
            Delivering excellence in construction and consulting services
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 border-b border-gray-200">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-4 text-lg font-medium transition-colors duration-300 ${
                activeTab === index
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-600 hover:text-blue-700'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-500">
            <Image
              src={tabContent[activeTab].image}
              alt={tabContent[activeTab].title}
              fill
              className="object-cover transform transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Content */}
          <div className="transition-opacity duration-300">
            <h3 className="text-3xl font-bold text-blue-900 mb-3">
              {tabContent[activeTab].title}
            </h3>
            <h4 className="text-xl font-semibold text-blue-700 mb-4">
              {tabContent[activeTab].subtitle}
            </h4>
            <p className="text-gray-700 mb-6 text-lg">
              {tabContent[activeTab].description}
            </p>
            
            <ul className="space-y-3">
              {tabContent[activeTab].points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">✓</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors flex items-center">
              Learn More
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;