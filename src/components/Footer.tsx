import React from "react";
import { Navigation, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Navigation className="h-6 w-6" />
            <span className="text-xl font-bold">SafeCross</span>
          </div>
          <p className="text-gray-400">
            Making cities safer for visually impaired pedestrians through smart
            traffic solutions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="https://maps.app.goo.gl/eFbE7kAxJij5SGsT9"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>AASTU, near Akaki kaliti prison</span>
              </a>
            </li>
            <li>
              <a href="mailto:" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>ietp.90@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+251986261979</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} SafeCross. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
