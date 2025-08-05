import React from 'react';
import { BookOpen, Shield, Brain } from 'lucide-react';

const solutionsDropdownItems = [
  [
    { name: 'AI Data Analytics', href: '/solutions/analytics' },
    { name: 'Data Archival', href: '/solutions/archival' },
    { name: 'Data Migration', href: '/solutions/migration' },
    { name: 'Data Backup', href: '/solutions/backup' },
    { name: 'Disaster Recovery', href: '/solutions/recovery' }
  ],
  [
    { 
      name: 'Industries',
      href: '/solutions/industries',
      subItems: [
        { name: 'Healthcare', href: '/solutions/industries#healthcare' },
        { name: 'Finance', href: '/solutions/industries#finance' },
        { name: 'Legal', href: '/solutions/industries#legal' },
        { name: 'Education', href: '/solutions/industries#education' },
        { name: 'Government', href: '/solutions/industries#government' },
        { name: 'Insurance', href: '/solutions/industries#insurance' }
      ]
    }
  ]
];

export default function Industries() {
  const categories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Data Archival',
      description: 'Comprehensive guides and best practices for data archival strategies',
      tag: 'archival'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Data Analytics',
      description: 'Insights into AI-powered data analytics and business intelligence',
      tag: 'analytics'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Security',
      description: 'Advanced security measures and compliance standards',
      tag: 'security'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Industry Solutions</h1>
            <p className="text-xl text-purple-100">
              Tailored data management solutions for your industry
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsDropdownItems[1][0].subItems.map((industry, index) => (
            <div 
              key={index} 
              id={industry.href.split('#')[1]}
              className="bg-white p-8 rounded-lg shadow-lg scroll-mt-20"
            >
              <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
              <p className="text-gray-600">
                Specialized data archival and management solutions for the {industry.name.toLowerCase()} sector.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-purple-600 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}