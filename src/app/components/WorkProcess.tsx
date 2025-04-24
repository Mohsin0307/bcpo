import React from "react";
import { FaComments, FaMapMarkedAlt, FaClipboardList, FaCogs, FaHandshake } from "react-icons/fa";

const steps = [
  {
    icon: <FaComments className="text-white text-2xl" />,
    title: "Free Consultation",
    description:
      "Contact our NCCPO team today and discuss your project requirements to get extraordinary results!",
  },
  {
    icon: <FaMapMarkedAlt className="text-white text-2xl" />,
    title: "Site Visit",
    description:
      "Our expert will schedule a convenient site visit to understand your project scope.",
  },
  {
    icon: <FaClipboardList className="text-white text-2xl" />,
    title: "Bespoke Quote",
    description:
      "After reviewing your requirements, we’ll provide a tailored quote matching your budget and goals.",
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "Bespoke Services",
    description:
      "On approval, we begin the execution using cutting-edge methods including 2D & 3D designs.",
  },
  {
    icon: <FaHandshake className="text-white text-2xl" />,
    title: "Complete Aftercare",
    description:
      "We build long-term, loyal client relationships by providing continuous support and service.",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-16 bg-white" id="work-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our Work Process
        </h2>
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-6 border border-yellow-300 rounded-full w-72 h-72 mx-auto flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
              <div className="bg-blue-900 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WorkProcess;
