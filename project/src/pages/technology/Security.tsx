import React from 'react';
import { Shield, Lock, FileCheck, Users } from 'lucide-react';

export default function Security() {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'End-to-End Encryption',
      description: 'Advanced encryption for data at rest and in transit.'
    },
    {
      icon: <Lock className="h-12 w-12 text-purple-600" />,
      title: 'Access Control',
      description: 'Granular permissions and role-based access management.'
    },
    {
      icon: <FileCheck className="h-12 w-12 text-purple-600" />,
      title: 'Compliance',
      description: 'Built-in compliance with GDPR, HIPAA, and other standards.'
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: 'User Authentication',
      description: 'Multi-factor authentication and SSO integration.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Enterprise-Grade Security</h1>
            <p className="text-xl text-purple-100">
              Protecting your data with advanced security measures and compliance standards
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