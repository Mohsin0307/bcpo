'use client';

import React from 'react';
import Link from 'next/link';

const BidWriting = () => {
  const services = [
    {
      title: "Bid Strategy & Planning",
      description: "Strategic analysis of tender opportunities and development of compelling win strategies tailored to specific procurement requirements.",
      icon: "🎯"
    },
    {
      title: "Full Bid Management",
      description: "End-to-end management of your bid process, from initial qualification to final submission, ensuring all deadlines are met.",
      icon: "📋"
    },
    {
      title: "Response Writing",
      description: "Crafting persuasive, compliant responses that showcase your capabilities and address the buyer's explicit and implicit needs.",
      icon: "✍️"
    },
    {
      title: "Technical Proposal Development",
      description: "Creating detailed technical proposals that highlight your methodologies, innovations, and delivery approaches.",
      icon: "📐"
    },
    {
      title: "Pricing Strategy",
      description: "Development of competitive pricing structures that balance value proposition with profitability requirements.",
      icon: "💰"
    },
    {
      title: "Bid Review & Improvement",
      description: "Critical evaluation of existing bid content with actionable recommendations to enhance quality and competitiveness.",
      icon: "🔍"
    }
  ];

  const benefits = [
    "Higher bid success rates and win ratios",
    "More competitive and compelling proposals",
    "Reduced bid preparation time and resource requirements",
    "Consistent messaging and brand presentation",
    "Clear articulation of your unique value proposition",
    "Professional documentation that stands out from competitors"
  ];

  const successStats = [
    {
      number: "70%+",
      description: "Average win rate for our clients"
    },
    {
      number: "£500M+",
      description: "Total contract value secured"
    },
    {
      number: "200+",
      description: "Successful bids delivered"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#0c2e57]">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 bg-[#0c2e57] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bid & Tender Writing Services</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Transform your tender responses into winning proposals with NCCPO's expert bid writing services. 
              We help businesses secure more contracts with compelling, compliant, and persuasive bid submissions.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-6 py-3 bg-[#f7a034] text-[#0c2e57] font-semibold rounded-md hover:bg-[#f8b95c] transition-colors"
            >
              Discuss Your Bid Requirements
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Expert Bid Writing That Delivers Results</h2>
          <p className="text-lg leading-relaxed mb-6">
            Struggling to win tenders or secure funding contracts? Let <strong>NCCPO Ltd</strong> take the lead with professionally written, 
            high-impact bids and tenders. We create tailored responses that highlight your strengths, align with the buyer's 
            requirements, and emphasize value for money.
          </p>
          <p className="text-lg leading-relaxed">
            Our team understands public and private sector procurement frameworks and uses best practices 
            to ensure your documents are clear, compliant, and compelling—helping you stand out in competitive 
            procurement environments. With decades of combined experience, we know what evaluators are looking for 
            and how to position your offering for maximum impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Bid Writing Services</h2>
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
          <h2 className="text-3xl font-bold mb-8">Benefits of Professional Bid Writing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="text-[#f7a034] mr-3">✓</div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-4xl font-bold text-[#f7a034] mb-3">{stat.number}</p>
                <p className="text-lg">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Bid Writing Process</h2>
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#0c2e57] transform -translate-x-1/2"></div>
            
            {/* Process Steps */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Opportunity Assessment</h3>
                  <p>We analyze the tender requirements, evaluate your competitiveness, and identify the key win themes and strategies.</p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-[#f7a034] border-4 border-white transform -translate-x-1/2 flex items-center justify-center text-white font-bold">1</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 p-4 rounded-lg md:invisible">
                    <p className="text-sm italic">Initial analysis of tender fit and win probability</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <div className="bg-gray-100 p-4 rounded-lg md:invisible">
                    <p className="text-sm italic">Defining approach, resources, and timelines</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-[#f7a034] border-4 border-white transform -translate-x-1/2 flex items-center justify-center text-white font-bold">2</div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold mb-2">Bid Planning</h3>
                  <p>We create a comprehensive bid plan with clear responsibilities, milestones, and quality assurance checkpoints.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Content Development</h3>
                  <p>Our writers craft compelling responses that address evaluation criteria, showcase your capabilities, and differentiate your offer.</p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-[#f7a034] border-4 border-white transform -translate-x-1/2 flex items-center justify-center text-white font-bold">3</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 p-4 rounded-lg md:invisible">
                    <p className="text-sm italic">Writing persuasive, evaluator-focused content</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <div className="bg-gray-100 p-4 rounded-lg md:invisible">
                    <p className="text-sm italic">Rigorous quality control and improvement</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-[#f7a034] border-4 border-white transform -translate-x-1/2 flex items-center justify-center text-white font-bold">4</div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold mb-2">Review & Refinement</h3>
                  <p>We conduct comprehensive reviews to ensure compliance, clarity, persuasiveness, and alignment with evaluation criteria.</p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Final Submission</h3>
                  <p>We prepare all documentation for submission, ensuring formatting compliance and conducting final quality checks.</p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-[#f7a034] border-4 border-white transform -translate-x-1/2 flex items-center justify-center text-white font-bold">5</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 p-4 rounded-lg md:invisible">
                    <p className="text-sm italic">Complete, compliant, and compelling submission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-16 bg-gray-100 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="italic text-lg leading-relaxed text-center mb-6">
              "NCCPO transformed our approach to tendering. Their expert bid writers helped us secure a major government contract that has been transformational for our business. Their process was thorough, professional, and delivered exactly what we needed."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-600">Operations Director, Technology Solutions Ltd</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0c2e57] text-white rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Win More Contracts?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            From small business tenders to major public sector contracts, our bid writing services can dramatically improve your success rate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-[#f7a034] text-[#0c2e57] font-semibold rounded-md hover:bg-[#f8b95c] transition-colors"
            >
              Get a Free Consultation
            </Link>
            <Link 
              href="/success-stories"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              View Our Success Stories
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BidWriting;