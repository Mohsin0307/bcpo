'use client';

import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Loader } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        success: true,
        message: 'Thank you! This is a demo – no real email was sent.',
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full font-sans">
      {/* Left Side - Info */}
      <div
        className="bg-cover bg-center text-white relative p-8 md:p-10 flex flex-col justify-center"
        style={{ backgroundImage: "url('/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 z-0" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">GET IN TOUCH</h2>
          <p className="text-lg leading-relaxed max-w-md">
            Looking for an experienced construction consultant? We&apos;ll always offer the best solutions tailored to your project&apos;s needs and requirements.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start">
              <Mail className="text-yellow-400 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-200">info@nccpo.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="text-yellow-400 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-200">03337722887</p>
              </div>
            </div>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded shadow-md transition-all duration-300 transform hover:translate-y-1">
            Contact Today
          </button>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-yellow-400 text-blue-900 px-8 md:px-10 py-12 md:py-16 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-8">Request a Call Back</h3>

        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Full Name <span className="text-red-600">*</span></label>
            <div className="flex items-center border-b-2 border-blue-900 bg-transparent">
              <User className="text-blue-900 mr-2" size={18} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2 bg-transparent focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Email Address <span className="text-red-600">*</span></label>
            <div className="flex items-center border-b-2 border-blue-900 bg-transparent">
              <Mail className="text-blue-900 mr-2" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 bg-transparent focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Phone Number</label>
            <div className="flex items-center border-b-2 border-blue-900 bg-transparent">
              <Phone className="text-blue-900 mr-2" size={18} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-2 bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <div className="flex items-start border-2 border-blue-900 bg-transparent rounded-md p-2">
              <MessageSquare className="text-blue-900 mt-1 mr-2" size={18} />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message..."
                className="w-full bg-transparent focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-900 hover:bg-blue-800 px-8 py-3 text-white font-semibold rounded mt-6 shadow-lg transition-all duration-300 w-full md:w-auto flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin mr-2" size={18} />
                Submitting...
              </>
            ) : (
              'Request Quote'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
