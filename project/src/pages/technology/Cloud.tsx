import React from 'react';
import { Cloud, Globe, Zap, Shield } from 'lucide-react';

export default function CloudTechnology() {
  const features = [
    {
      icon: <Cloud className="h-12 w-12 text-purple-600" />,
      title: 'Cloud Infrastructure',
      description: 'Robust and scalable cloud-based storage solutions.'
    },
    {
      icon: <Globe className="h-12 w-12 text-purple-600" />,
      title: 'Global Accessibility',
      description: 'Access your data securely from anywhere in the world.'
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: 'High Performance',
      description: 'Lightning-fast data retrieval and processing capabilities.'
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Cloud Security',
      description: 'Advanced security measures for cloud-based data protection.'
    }
  ];

  const partnerships = [
    {
      title: 'AWS',
      description: 'Industry-leading archival solution with S3 Glacier for long-term storage. Seamless hybrid cloud integration through AWS Storage Gateway.'
    },
    {
      title: 'Microsoft Azure',
      description: 'Enterprise-grade Archive Storage with automated lifecycle management. Secure and cost-effective solution for long-term data retention.'
    },
    {
      title: 'Google Cloud Platform',
      description: 'Highly durable Archive Storage class for rarely accessed data. Intelligent lifecycle management with global data accessibility.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Cloud Technology</h1>
            <p className="text-xl text-purple-100">
              Leveraging the power of cloud computing for seamless data management
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technology Partnerships Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Technology Partnerships</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">{partner.title}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}