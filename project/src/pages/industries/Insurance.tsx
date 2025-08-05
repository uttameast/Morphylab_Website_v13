import React from 'react';
import { Umbrella, FileText, Database, Shield, Users, Clock } from 'lucide-react';

export default function Insurance() {
  const categories = [
    {
      icon: <FileText className="h-12 w-12 text-purple-600" />,
      title: 'Policy Records',
      description: 'Comprehensive documentation of insurance policies and coverage.',
      examples: [
        'Policy documents',
        'Coverage details',
        'Terms and conditions',
        'Policy changes'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Claims Data',
      description: 'Complete records of insurance claims and processing.',
      examples: [
        'Claims history',
        'Assessment reports',
        'Settlement records',
        'Documentation files'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Compliance Records',
      description: 'Documentation for regulatory compliance and auditing.',
      examples: [
        'Regulatory filings',
        'Audit reports',
        'Compliance documents',
        'Legal records'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: 'Customer Records',
      description: 'Policyholder information and interaction history.',
      examples: [
        'Customer profiles',
        'Communication logs',
        'Payment history',
        'Service records'
      ]
    },
    {
      icon: <Umbrella className="h-12 w-12 text-purple-600" />,
      title: 'Risk Assessment',
      description: 'Documentation of risk evaluation and management.',
      examples: [
        'Risk reports',
        'Assessment data',
        'Analysis documents',
        'Evaluation records'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Historical Records',
      description: 'Archive of historical insurance data and trends.',
      examples: [
        'Past policies',
        'Claims history',
        'Market data',
        'Statistical records'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Insurance Data Archival</h1>
            <p className="text-xl text-purple-100">
              Comprehensive archival solutions for insurance companies
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Insurance companies require robust data archival solutions to maintain policy 
            records, process claims efficiently, and ensure regulatory compliance. Our 
            comprehensive system provides secure storage and easy access to critical 
            insurance data and records.
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
              <h3 className="text-lg font-semibold mb-4">Insurance Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  State Insurance Laws
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  NAIC Regulations
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Data Protection Laws
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Industry Standards
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Data Encryption
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Access Controls
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Audit Trails
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Secure Storage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}