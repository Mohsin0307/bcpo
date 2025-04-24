// import Link from "next/link";  // Removed unused import
import { COMPANY_DETAILS } from "@/lib/constants";

export default function TopNavbar() {
  return (
    <div className="bg-gray-800 text-white text-sm py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-2 md:space-y-0">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-gray-300">
              {COMPANY_DETAILS.phone}
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-gray-300">
              {COMPANY_DETAILS.email}
            </a>
          </p>
        </div>
        {/* Address */}
        <p>{COMPANY_DETAILS.address}</p>
      </div>
    </div>
  );
}