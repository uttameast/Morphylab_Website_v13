import React from 'react';
import { Scale, FileText, Database, Shield, Users, Clock } from 'lucide-react';

export default function Legal() {
  const categories = [
    {
      icon: <FileText className="h-12 w-12 text-purple-600" />,
      title: 'Case Files',
      description: 'Comprehensive archival of legal case documents and related materials.',
      examples: [
        'Court documents',
        'Legal briefs',
        'Evidence files',
        'Case histories'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Client Records',
      description: 'Secure storage of client information and communications.',
      examples: [
        'Client profiles',
        'Communications',
        'Billing records',
        'Engagement letters'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Compliance Records',
      description: 'Documentation for regulatory compliance and bar requirements.',
      examples: [
        'Ethics compliance',
        'Bar requirements',
        'Regulatory filings',
        'Audit trails'
      ]
    },
    {
      icon: <Scale className="h-12 w-12 text-purple-600" />,
      title: 'Practice Management',
      description: 'Essential records for law practice operations.',
      examples: [
        'Time tracking',
        'Billing systems',
        'Staff records',
        'Office procedures'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: 'Research Materials',
      description: 'Legal research and reference materials.',
      examples: [
        'Case law research',
        'Legal precedents',
        'Legislative history',
        'Expert opinions'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Historical Records',
      description: 'Archive of historical cases and precedents.',
      examples: [
        'Past cases',
        'Settlement records',
        'Historical documents',
        'Precedent files'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Legal Data Archival</h1>
            <p className="text-xl text-purple-100">
              Secure and efficient archival solutions for legal professionals
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Legal professionals require robust data archival solutions to maintain client 
            confidentiality, ensure regulatory compliance, and preserve case histories. 
            Our comprehensive system provides secure storage and easy access to critical 
            legal documents and records.
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
          <h2 className="text-2xl font-bold mb-6">Security & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Attorney-Client Privilege
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Bar Association Requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  E-Discovery Compliance
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Data Protection Laws
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security Measures</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Advanced Encryption
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
                  Secure File Sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}