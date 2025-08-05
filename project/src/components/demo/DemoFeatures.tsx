import React from 'react';
import { Shield, Clock, Database, Users } from 'lucide-react';

export default function DemoFeatures() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption and compliance with industry standards'
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our guided onboarding process'
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: 'Scalable Storage',
      description: 'Flexible storage solutions that grow with your needs'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: 'Team Collaboration',
      description: 'Seamless sharing and access control for teams'
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Why Choose MorphyLab?</h3>
      <div className="grid grid-cols-1 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div className="ml-4">
              <h4 className="font-medium">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}