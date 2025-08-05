import React from 'react';
import { GraduationCap, FileText, Database, Shield, Users, Clock } from 'lucide-react';

export default function Education() {
  const categories = [
    {
      icon: <FileText className="h-12 w-12 text-purple-600" />,
      title: 'Student Records',
      description: 'Comprehensive student academic and administrative records.',
      examples: [
        'Academic transcripts',
        'Enrollment records',
        'Financial aid documents',
        'Student portfolios'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Administrative Data',
      description: 'Institutional operations and management records.',
      examples: [
        'Staff records',
        'Budget documents',
        'Facility records',
        'Policy documentation'
      ]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-purple-600" />,
      title: 'Academic Content',
      description: 'Educational materials and curriculum records.',
      examples: [
        'Course materials',
        'Research data',
        'Learning resources',
        'Assessment records'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Compliance Records',
      description: 'Regulatory compliance and accreditation documentation.',
      examples: [
        'Accreditation records',
        'Audit reports',
        'Safety records',
        'Legal documentation'
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: 'Alumni Records',
      description: 'Graduate and alumni information management.',
      examples: [
        'Alumni directories',
        'Donation records',
        'Event histories',
        'Achievement records'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Historical Records',
      description: 'Institutional history and legacy documentation.',
      examples: [
        'Historical documents',
        'Archive materials',
        'Institutional records',
        'Special collections'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Education Data Archival</h1>
            <p className="text-xl text-purple-100">
              Comprehensive archival solutions for educational institutions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Educational institutions require robust data archival solutions to maintain 
            student records, ensure compliance with regulations, and preserve institutional 
            knowledge. Our comprehensive system provides secure storage and easy access 
            to critical educational data and records.
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
              <h3 className="text-lg font-semibold mb-4">Educational Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  FERPA Compliance
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Accreditation Requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  State Education Laws
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Research Data Standards
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Role-based Access Control
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Data Encryption
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