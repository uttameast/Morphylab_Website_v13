import React from 'react';
import { RefreshCw, Clock, Shield, Target } from 'lucide-react';

export default function Recovery() {
  const features = [
    {
      icon: <RefreshCw className="h-12 w-12 text-purple-600" />,
      title: 'Rapid Recovery',
      description: 'Quick system restoration with minimal downtime.'
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Recovery Time Objectives',
      description: 'Customizable RTOs to meet business requirements.'
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Data Protection',
      description: 'Secure recovery processes with data integrity checks.'
    },
    {
      icon: <Target className="h-12 w-12 text-purple-600" />,
      title: 'Recovery Point Objectives',
      description: 'Flexible RPOs for different data types.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Disaster Recovery Solutions</h1>
            <p className="text-xl text-purple-100">
              Comprehensive disaster recovery planning and implementation
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