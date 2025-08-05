import React from 'react';
import { Database, ArrowRightLeft, Clock, Shield } from 'lucide-react';

export default function Migration() {
  const features = [
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Seamless Data Transfer',
      description: 'Automated migration tools for efficient data movement across platforms.'
    },
    {
      icon: <ArrowRightLeft className="h-12 w-12 text-purple-600" />,
      title: 'Format Conversion',
      description: 'Intelligent format detection and conversion for legacy data.'
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Minimal Downtime',
      description: 'Zero-downtime migration strategies for business continuity.'
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Data Integrity',
      description: 'Comprehensive validation and verification processes.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Data Migration Solutions</h1>
            <p className="text-xl text-purple-100">
              Seamless data transfer and transformation for your enterprise needs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}