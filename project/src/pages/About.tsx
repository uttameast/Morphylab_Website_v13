import React from 'react';
import { Shield, Users, Globe2, Target } from 'lucide-react';
import HeaderText from '../components/common/HeaderText';

export default function About() {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-orange-500" />,
      title: 'Security First',
      description: 'We prioritize the protection and integrity of your data above all else.'
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We are committed to exceeding expectations.'
    },
    {
      icon: <Globe2 className="h-12 w-12 text-orange-500" />,
      title: 'Global Reach',
      description: 'Serving organizations worldwide with localized solutions.'
    },
    {
      icon: <Target className="h-12 w-12 text-orange-500" />,
      title: 'Innovation',
      description: 'Continuously evolving our solutions to stay ahead of industry needs.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="relative bg-purple-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Data Center"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About MorphyLab</h1>
            <p className="text-xl text-purple-100">
              Pioneering the Future of Data Archival Solutions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              At MorphyLab, we're driven by a singular mission: to revolutionize how organizations safeguard their most valuable digital assets. Our journey began with a clear vision of transforming traditional data archival into an intelligent, secure, and seamlessly accessible solution for the modern enterprise.
            </p>
            <p>
              In today's rapidly evolving digital landscape, organizations face unprecedented challenges in managing exponential data growth while ensuring security, compliance, and accessibility. We recognized this critical need and developed cutting-edge solutions that not only address these challenges but anticipate the future demands of data management.
            </p>
            <p>
              Our approach combines advanced security protocols with intuitive user interfaces, making complex data archival processes simple and efficient. We believe that robust data protection shouldn't come at the cost of accessibility, and our solutions reflect this philosophy in every aspect.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}