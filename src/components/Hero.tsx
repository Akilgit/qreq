import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Bike Parking Solution for India
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Experience seamless, paperless parking with both online and offline payment options.
              Fast, efficient, and eco-friendly.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586168538932-b64bba1d7c86?auto=format&fit=crop&q=80"
              alt="Modern bike parking"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}