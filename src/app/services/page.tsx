'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Users, ShoppingCart } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Procurement Consulting",
      description: "We help businesses streamline their procurement processes to ensure cost efficiency, compliance, and strategic sourcing. From supplier evaluation to contract negotiation, our experts guide you through every step.",
      icon: <ShoppingCart size={24} className="text-[#f7a034]" />,
      benefits: ["Cost optimization", "Process efficiency", "Compliance"],
      link: "/consultancy-services/procurement-consulting"
    },
    {
      title: "Supplier Sourcing",
      description: "We connect you with reliable, cost-effective, and compliant suppliers tailored to your industry needs—locally and globally. Our vetting process ensures quality, price competitiveness, and timely delivery.",
      icon: <Users size={24} className="text-[#f7a034]" />,
      benefits: ["Quality assurance", "Global network", "Risk reduction"],
      link: "/consultancy-services/supplier-sourcing"
    },
    {
      title: "Bid & Tender Writing",
      description: "We create persuasive and compliant bid and tender documents that align with buyer requirements, highlight your strengths, and give your business a competitive edge in winning contracts.",
      icon: <FileText size={24} className="text-[#f7a034]" />,
      benefits: ["Higher success rate", "Compelling proposals", "Compliance expertise"],
      link: "/consultancy-services/bid-writing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0c2e57] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultancy Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Expert solutions to optimize your procurement processes, connect with reliable suppliers, 
            and win more contracts through professional bid writing.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-[#0c2e57]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Specialised Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            NCCPO offers comprehensive consultancy services designed to help businesses optimize their 
            procurement processes, build reliable supplier networks, and win more contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-2 bg-[#f7a034]"></div>
              <div className="p-8">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0c2e57]/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="mb-6 text-gray-700">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Key Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, i) => (
                      <span key={i} className="bg-gray-100 text-[#0c2e57] px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-[#0c2e57] font-semibold hover:text-[#f7a034] transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Consulting Approach</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0c2e57] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-700">We analyze your current processes, challenges, and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0c2e57] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-700">We develop a tailored approach to meet your specific requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0c2e57] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-700">We execute the solution with clear milestones and deliverables</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0c2e57] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-700">We continuously refine and improve to maximize long-term value</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-24 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="md:flex items-center">
            <div className="md:w-3/4 md:pr-12">
              <div className="text-4xl text-[#f7a034] mb-4">"</div>
              <p className="text-xl italic mb-6">
                NCCPO's consultancy services transformed our procurement processes. Their expertise in supplier sourcing 
                and contract negotiation resulted in significant cost savings and improved supplier performance across our organisation.
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-gray-600">Procurement Director, Global Manufacturing Inc.</p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/4 bg-[#0c2e57]/10 rounded-lg p-6 text-center mt-8 md:mt-0">
              <div className="text-5xl mb-3">⭐</div>
              <p className="text-2xl font-bold">25%</p>
              <p className="text-gray-700">Cost Reduction</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss how our consultancy services can help your business achieve its goals.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#f7a034] text-[#0c2e57] font-bold rounded-lg hover:bg-[#f8b95c] transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;