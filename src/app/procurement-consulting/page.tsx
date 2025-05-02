'use client';

import React from 'react';
import Link from 'next/link';

const ProcurementConsulting = () => {
  const services = [
    {
      title: "Strategic Sourcing",
      description: "Develop effective sourcing strategies to identify optimal suppliers, reduce costs, and maximize value across your supply chain.",
      icon: "📊"
    },
    {
      title: "Supplier Evaluation",
      description: "Comprehensive assessment of vendor capabilities, performance metrics, and alignment with your organization's requirements.",
      icon: "🔍"
    },
    {
      title: "Contract Negotiation",
      description: "Expert guidance in negotiating favorable terms, pricing structures, and service level agreements with your suppliers.",
      icon: "📝"
    },
    {
      title: "Procurement Compliance",
      description: "Ensure adherence to regulatory requirements and industry best practices in your procurement processes.",
      icon: "⚖️"
    },
    {
      title: "Process Optimization",
      description: "Streamline your procurement workflows to enhance efficiency, reduce cycle times, and eliminate redundancies.",
      icon: "⚙️"
    },
    {
      title: "Technology Integration",
      description: "Implement and optimize procurement systems to automate processes and improve visibility across your supply chain.",
      icon: "💻"
    }
  ];

  const benefits = [
    "Cost reduction through strategic sourcing",
    "Improved supplier relationships and performance",
    "Enhanced procurement process efficiency",
    "Reduced supply chain risks",
    "Better compliance with regulations",
    "Increased transparency and accountability"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#0c2e57]">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 bg-[#0c2e57] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Procurement Consulting Services</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Transform your procurement strategy with expert consulting from NCCPO Ltd. We help businesses optimize their sourcing, 
              streamline processes, and achieve significant cost savings.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-6 py-3 bg-[#f7a034] text-[#0c2e57] font-semibold rounded-md hover:bg-[#f8b95c] transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Expert Procurement Solutions for Your Business</h2>
          <p className="text-lg leading-relaxed mb-6">
            At <strong>NCCPO Ltd</strong>, we empower businesses by streamlining their procurement strategy and operations. 
            Our consulting services focus on maximizing value through cost-effective sourcing, compliance with procurement laws, 
            and aligning supplier capabilities with your project goals.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're in the public or private sector, our team helps you evaluate vendors, negotiate contracts, 
            and implement procurement frameworks that are transparent, scalable, and efficient. We combine industry 
            expertise with proven methodologies to deliver measurable results for your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Procurement Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 bg-gray-100 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8">Benefits of Our Procurement Consulting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="text-[#f7a034] mr-3">✓</div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ol className="space-y-6">
                <li className="flex">
                  <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                    <p>We begin by thoroughly evaluating your current procurement processes, identifying strengths, weaknesses, and opportunities for improvement.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                    <p>We create a customized procurement strategy tailored to your organization's specific needs, goals, and industry requirements.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                    <p>Our team works alongside yours to implement the strategy, providing guidance and support throughout the transition.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Measurement & Optimization</h3>
                    <p>We establish key performance indicators and continuously monitor results to ensure your procurement strategy delivers the expected value.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="md:w-1/2 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="p-6 text-center">
                <div className="text-6xl text-[#0c2e57] mb-4">📈</div>
                <p className="text-lg font-semibold">We've helped clients achieve</p>
                <p className="text-4xl font-bold text-[#f7a034] my-3">15-30%</p>
                <p className="text-lg font-semibold">cost savings through optimized procurement</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0c2e57] text-white rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement Process?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our procurement consulting services can help you achieve significant cost savings, streamline operations, 
            and build more strategic supplier relationships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-[#f7a034] text-[#0c2e57] font-semibold rounded-md hover:bg-[#f8b95c] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/case-studies"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              View Our Case Studies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProcurementConsulting;