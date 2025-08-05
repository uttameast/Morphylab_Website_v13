import React from 'react';
import { Scale, Server, Cloud, Zap } from 'lucide-react';

export default function Scalability() {
  const features = [
    {
      icon: <Scale className="h-12 w-12 text-purple-600" />,
      title: 'Load Balancing',
      description: 'Intelligent traffic distribution for optimal performance.'
    },
    {
      icon: <Server className="h-12 w-12 text-purple-600" />,
      title: 'Auto-scaling',
      description: 'Dynamic resource allocation based on demand.'
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-600" />,
      title: 'Cloud Infrastructure',
      description: 'Distributed architecture for high availability.'
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization for peak efficiency.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Scalability & Performance</h1>
            <p className="text-xl text-purple-100">
              Enterprise infrastructure designed for reliability and growth
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