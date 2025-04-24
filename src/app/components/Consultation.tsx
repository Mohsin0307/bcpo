import React from "react";
import { COMPANY_DETAILS } from "@/lib/constants";
import { Calendar, Building, User, DollarSign, Award, Users } from "lucide-react";
import Image from "next/image";

const Consultation = () => {
  const stats = [
    { icon: <Calendar />, value: "20+", label: "Years Experience" },
    { icon: <Building />, value: "229", label: "Projects Completed" },
    { icon: <User />, value: "720", label: "Contractors Appointed" },
    { icon: <DollarSign />, value: "220M", label: "Worth Projects Managed" },
    { icon: <Award />, value: "12+", label: "Accreditations RICS CIAT" },
    { icon: <Users />, value: "50+", label: "Team Members" },
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 py-12 bg-white">
      {/* Left Side - Images */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-8 md:mb-0">
        <div className="w-64 h-64 bg-gray-300 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
          <Image
            src="/1.jpg" // Replace with actual image path
            alt="Construction Model with Blueprints"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-64 h-64 bg-gray-300 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
          <Image
            src="/2.jpg" // Replace with actual image path
            alt="Construction Team Reviewing Plans"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side - Heading and Stats */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          A Construction Consultant UK That {COMPANY_DETAILS.name}
        </h1>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2 text-blue-800">{stat.icon}</div>
              <p className="text-2xl font-bold text-yellow-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;