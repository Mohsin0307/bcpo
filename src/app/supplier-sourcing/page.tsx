'use client';

import React from 'react';
import Link from 'next/link';

const SupplierSourcing = () => {
  const services = [
    {
      title: "Supplier Identification",
      description: "Comprehensive market research to identify qualified suppliers that match your specific requirements and industry standards.",
      icon: "🔍"
    },
    {
      title: "Supplier Qualification",
      description: "Rigorous vetting process to ensure suppliers meet quality, compliance, financial stability, and capability requirements.",
      icon: "✓"
    },
    {
      title: "RFx Management",
      description: "Professional management of RFI, RFP, and RFQ processes to collect and evaluate supplier proposals effectively.",
      icon: "📋"
    },
    {
      title: "Supplier Negotiation",
      description: "Expert negotiation of terms, pricing, and service levels to maximize value and establish favorable commercial agreements.",
      icon: "🤝"
    },
    {
      title: "Supply Chain Risk Management",
      description: "Proactive identification and mitigation of potential supply chain disruptions and vulnerabilities.",
      icon: "🛡️"
    },
    {
      title: "Supplier Relationship Management",
      description: "Development of structured frameworks to build and maintain productive, long-term supplier partnerships.",
      icon: "🔄"
    }
  ];

  const benefits = [
    "Access to a broader pool of qualified suppliers",
    "Reduced procurement costs and better pricing",
    "Improved supply chain reliability and resilience",
    "Shorter lead times for critical components",
    "Higher quality and more consistent products/services",
    "Simplified supplier management processes"
  ];

  const industries = [
    {
      name: "Construction",
      icon: "🏗️"
    },
    {
      name: "Manufacturing",
      icon: "🏭"
    },
    {
      name: "Healthcare",
      icon: "🏥"
    },
    {
      name: "Technology",
      icon: "💻"
    },
    {
      name: "Energy",
      icon: "⚡"
    },
    {
      name: "Transportation",
      icon: "🚚"
    },
    {
      name: "Retail",
      icon: "🛒"
    },
    {
      name: "Public Sector",
      icon: "🏛️"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#0c2e57]">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 bg-[#0c2e57] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Supplier Sourcing Services</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Connect with the right suppliers to drive quality, efficiency, and value throughout your supply chain. 
              NCCPO's strategic sourcing solutions help you build reliable supplier networks tailored to your specific needs.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-6 py-3 bg-[#f7a034] text-[#0c2e57] font-semibold rounded-md hover:bg-[#f8b95c] transition-colors"
            >
              Improve Your Supply Chain
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Strategic Supplier Sourcing Solutions</h2>
          <p className="text-lg leading-relaxed mb-6">
            Finding the right suppliers is the cornerstone of successful project delivery. <strong>NCCPO Ltd</strong> connects you with 
            vetted and reliable suppliers, both local and global, tailored to your industry and budget.
          </p>
          <p className="text-lg leading-relaxed">
            We manage the entire sourcing process—from identifying potential partners to quality checks and price negotiations—ensuring 
            timely delivery, compliance, and long-term value. Our strategic sourcing experts help reduce lead times and supply chain risks 
            while maximizing the potential for innovation and continuous improvement in your supplier relationships.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Supplier Sourcing Services</h2>
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
          <h2 className="text-3xl font-bold mb-8">Benefits of Strategic Supplier Sourcing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="text-[#f7a034] mr-3">✓</div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Sourcing Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                Requirements Analysis
              </h3>
              <p className="pl-11">
                We begin by thoroughly understanding your needs, specifications, quality standards, volume requirements, 
                and strategic objectives to establish clear sourcing criteria.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                Market Research
              </h3>
              <p className="pl-11">
                Our specialists conduct comprehensive market analysis to identify potential suppliers, 
                evaluate market conditions, and understand current pricing and capacity trends.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                Supplier Qualification
              </h3>
              <p className="pl-11">
                We perform rigorous qualification assessments, examining financial stability, production capacity, 
                quality systems, regulatory compliance, and performance history.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                RFx Process
              </h3>
              <p className="pl-11">
                Developing and managing structured request processes (RFI/RFP/RFQ) to collect detailed information, 
                technical capabilities, and pricing from potential suppliers.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                Evaluation & Selection
              </h3>
              <p className="pl-11">
                Using multi-criteria decision analysis to objectively compare suppliers across price, quality, 
                capability, reliability, and strategic alignment with your business.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-[#0c2e57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                Negotiation & Contracting
              </h3>
              <p className="pl-11">
                Expert negotiation of commercial terms, service levels, and contractual agreements to secure 
                favorable conditions while establishing clear performance expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Section */}
        <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-[#0c2e57] text-white p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Case Study</h3>
              <p className="text-xl mb-3">Manufacturing Supply Chain Optimization</p>
              <div className="mt-4 p-2 bg-[#f7a034] text-[#0c2e57] inline-block rounded font-semibold">
                30% Cost Reduction
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-lg mb-4">
                A mid-sized manufacturing company was struggling with supplier reliability and rising costs. NCCPO implemented a comprehensive 
                supplier sourcing strategy that:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#f7a034] mr-2">•</span>
                  <span>Identified and qualified 15 new strategic suppliers across key categories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f7a034] mr-2">•</span>
                  <span>Reduced lead times by an average of 40%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f7a034] mr-2">•</span>
                  <span>Improved quality metrics with 65% fewer defects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f7a034] mr-2">•</span>
                  <span>Created a diversified supply base to mitigate geographic risks</span>
                </li>
              </ul>
              <p>The result was a 30% reduction in total procurement costs and significantly improved production efficiency.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0c2e57] text-white rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supplier Network?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            From single-supplier challenges to complete supply chain transformations, our expert sourcing solutions can help you build 
            more reliable, efficient, and cost-effective supplier relationships.
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
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SupplierSourcing;