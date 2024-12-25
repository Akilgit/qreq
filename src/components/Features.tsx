import React from 'react';
import { Smartphone, CreditCard, Clock, Leaf } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Digital Tickets",
      description: "Paperless parking tickets directly on your smartphone"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Flexible Payments",
      description: "Choose between online or offline payment methods"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Process",
      description: "Fast and efficient parking management system"
    },
    {
      icon: <Leaf className="h-8 w-8 text-blue-600" />,
      title: "Eco-Friendly",
      description: "Reducing paper waste for a greener environment"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose QreQ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}