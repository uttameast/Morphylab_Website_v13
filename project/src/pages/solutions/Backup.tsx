import React from 'react';
import { Save, Clock, Cloud, Shield } from 'lucide-react';

export default function Backup() {
  const features = [
    {
      icon: <Save className="h-12 w-12 text-purple-600" />,
      title: 'Automated Backups',
      description: 'Scheduled backups with customizable retention policies.'
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Quick Recovery',
      description: 'Rapid data restoration with point-in-time recovery options.'
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-600" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with major cloud storage providers.'
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Secure Storage',
      description: 'End-to-end encryption for backup data protection.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Data Backup Solutions</h1>
            <p className="text-xl text-purple-100">
              Reliable backup solutions for business continuity
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