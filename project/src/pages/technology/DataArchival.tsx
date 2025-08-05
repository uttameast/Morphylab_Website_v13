import React from 'react';
import { Database, Archive, Clock, Search, FileCheck, Server, Shield } from 'lucide-react';

export default function DataArchival() {
  const features = [
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Intelligent Storage',
      description: 'Smart data organization with automated classification and tagging.'
    },
    {
      icon: <Archive className="h-12 w-12 text-purple-600" />,
      title: 'Long-term Preservation',
      description: 'Secure preservation of data with format migration capabilities.'
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Retention Management',
      description: 'Automated policies for data lifecycle management.'
    },
    {
      icon: <Search className="h-12 w-12 text-purple-600" />,
      title: 'Advanced Search',
      description: 'Powerful search capabilities with metadata indexing.'
    }
  ];

  const archivalTypes = [
    {
      icon: <FileCheck className="h-8 w-8 text-orange-500" />,
      title: 'Legal & Compliance Records',
      description: 'Contracts, licenses, audit trails, and regulatory documentation'
    },
    {
      icon: <Server className="h-8 w-8 text-orange-500" />,
      title: 'Historical Data',
      description: 'Business records, project documentation, and legacy system data'
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: 'Security & Access Logs',
      description: 'System logs, access records, and security incident reports'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Data Archival Solutions</h1>
            <p className="text-xl text-purple-100">
              Comprehensive data preservation and management for enterprise needs
            </p>
          </div>
        </div>
      </div>

      {/* Why Data Archival Needed Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Organizations should archive data that is no longer actively used but needs to be retained for legal, compliance, operational, or historical purposes. Proper archiving ensures efficient storage management while keeping critical data accessible when required.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {archivalTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {type.icon}
                    <h3 className="text-lg font-semibold ml-3">{type.title}</h3>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Archival Features</h2>
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