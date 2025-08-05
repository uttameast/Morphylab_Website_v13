import React from 'react';
import { FileText, Database, Clock, Shield, Stethoscope, BarChart as ChartBar } from 'lucide-react';

export default function Healthcare() {
  const categories = [
    {
      icon: <FileText className="h-12 w-12 text-purple-600" />,
      title: 'Electronic Health Records (EHR)',
      description: 'Patient medical histories, diagnoses, medications, treatment plans, immunization dates, allergies, radiology images, and laboratory test results.',
      examples: [
        'Clinical documentation',
        'Progress notes',
        'Discharge summaries',
        'Test results'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Administrative Data',
      description: 'Business and operational records essential for healthcare facility management and compliance.',
      examples: [
        'Insurance claims',
        'Billing records',
        'Staff credentials',
        'Facility documentation'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Legacy System Data',
      description: 'Historical records from outdated or decommissioned healthcare systems that require preservation.',
      examples: [
        'Old patient records',
        'Previous system backups',
        'Historical treatment data',
        'Archive documentation'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Compliance Records',
      description: 'Documentation required for regulatory compliance and audit purposes.',
      examples: [
        'HIPAA compliance records',
        'Audit trails',
        'Security logs',
        'Policy documentation'
      ]
    },
    {
      icon: <ChartBar className="h-12 w-12 text-purple-600" />,
      title: 'Research & Analytics Data',
      description: 'Clinical research data and analytics that support medical research and quality improvement.',
      examples: [
        'Clinical trial data',
        'Research findings',
        'Statistical analyses',
        'Quality metrics'
      ]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-purple-600" />,
      title: 'Clinical Operations Data',
      description: 'Operational data related to patient care and medical procedures.',
      examples: [
        'Surgery schedules',
        'Equipment maintenance',
        'Inventory records',
        'Protocol documentation'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Healthcare Data Archival</h1>
            <p className="text-xl text-purple-100">
              Comprehensive archival solutions for healthcare organizations
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            In the healthcare industry, archiving data is crucial for ensuring regulatory compliance, 
            improving operational efficiency, maintaining patient care continuity, and preserving 
            historical records. The following categories of healthcare software data should be archived:
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
              <h3 className="text-lg font-semibold mb-4">Regulatory Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  HIPAA Compliance
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  HITECH Act Requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  State-specific Healthcare Laws
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  International Data Protection Standards
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security Measures</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  End-to-end Encryption
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Access Control & Authentication
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Audit Trail Logging
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Secure Data Transmission
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}