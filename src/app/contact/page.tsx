'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  loading: boolean;
}

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>({ submitted: false, loading: false });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ loading: false, submitted: true });
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, submitted: false });
      }, 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="bg-[#0c2e57] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get in Touch</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-200">
            We're here to help you with all your procurement, bidding, and consulting needs.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-[#0c2e57] border-b border-yellow-400 pb-3">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <MapPinIcon className="h-6 w-6 text-[#0c2e57]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0c2e57]">Our Address</h3>
                    <p className="text-gray-600">1 Brockehurst Mews, Macclesfield, SK10 2GY</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-[#0c2e57]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0c2e57]">Call Us</h3>
                    <p className="text-gray-600">+44 7979 201706</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <MailIcon className="h-6 w-6 text-[#0c2e57]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0c2e57]">Email Us</h3>
                    <a href="mailto:nccpo@contractor.net" className="text-blue-600 hover:underline">nccpo@contractor.net</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-4 overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://maps.google.com/maps?q=1%20Brockehurst%20Mews%20Macclesfield%20SK10%202GY&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full rounded-lg border-2 border-yellow-400"
                  loading="lazy"
                  title="NCCPO Office Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-[#0c2e57] border-b border-yellow-400 pb-3">
                Send Us a Message
              </h2>

              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-700">Thank You!</h3>
                  <p className="text-green-600 mt-2">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-1 text-gray-700">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium mb-1 text-gray-700">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-medium mb-1 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 1234 567890"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-medium mb-1 text-gray-700">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please let us know how we can help you..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="bg-[#0c2e57] hover:bg-[#163e6f] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors w-full md:w-auto disabled:bg-gray-400"
                  >
                    {formStatus.loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <SendIcon className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Company Hours Banner */}
      <div className="bg-yellow-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0c2e57] mb-3">Business Hours</h2>
          <p className="text-[#0c2e57]">
            Monday - Friday: 9:00 AM - 5:00 PM | Saturday & Sunday: Closed
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;