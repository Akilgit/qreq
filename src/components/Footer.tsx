import React from 'react';
import { Bike, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Bike className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">QreQ</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing bike parking in India with digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:contact@qreq.in" className="text-gray-400 hover:text-white">
                  contact@qreq.in
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QreQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}