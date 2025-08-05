import React from 'react';
import { Landmark, FileText, Database, Shield, Users, Clock } from 'lucide-react';

export default function Government() {
  const categories = [
    {
      icon: <FileText className="h-12 w-12 text-purple-600" />,
      title: 'Public Records',
      description: 'Comprehensive archival of government documents and public records.',
      examples: [
        'Official documents',
        'Public notices',
        'Legislative records',
        'Policy documents'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Administrative Data',
      description: 'Essential records for government operations and management.',
      examples: [
        'Personnel records',
        'Budget documents',
        'Project files',
        'Department records'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Compliance Records',
      description: 'Documentation for regulatory compliance and auditing.',
      examples: [
        'Audit reports',
        'Compliance documents',
        'Security logs',
        'Policy records'
      ]
    },
    {
      icon: <Landmark className="h-12 w-12 text-purple-600" />,
      title: 'Legal Documents',
      description: 'Legal and legislative documentation.',
      examples: [
        'Legislative records',
        'Court documents',
        'Legal opinions',
        'Regulatory filings'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: 'Citizen Services',
      description: 'Records related to citizen services and interactions.',
      examples: [
        'Service requests',
        'Citizen records',
        'Program data',
        'Communication logs'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Historical Records',
      description: 'Preservation of historical government documents.',
      examples: [
        'Historical archives',
        'Legacy records',
        'Cultural heritage',
        'Historical data'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Government Data Archival</h1>
            <p className="text-xl text-purple-100">
              Secure and compliant archival solutions for government agencies
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Government agencies require robust data archival solutions to maintain public 
            records, ensure transparency, and preserve historical documentation. Our 
            comprehensive system provides secure storage and easy access to critical 
            government data and records.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.examples.map((example, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Compliance & Security</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Government Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  NARA Requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  FOIA Compliance
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Records Management
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Data Protection Laws
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  FedRAMP Compliance
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Access Controls
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Audit Logging
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Secure Data Transfer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}