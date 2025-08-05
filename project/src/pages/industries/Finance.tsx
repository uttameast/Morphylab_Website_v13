import React from 'react';
import { Building2, FileText, Database, Shield, GanttChartSquare as ChartSquare, Clock } from 'lucide-react';

export default function Finance() {
  const categories = [
    {
      icon: <FileText className="h-12 w-12 text-purple-600" />,
      title: 'Transaction Records',
      description: 'Comprehensive archival of financial transactions and trading activities.',
      examples: [
        'Trading records',
        'Payment transactions',
        'Investment portfolios',
        'Account statements'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Regulatory Documentation',
      description: 'Essential documentation for financial compliance and auditing.',
      examples: [
        'Compliance reports',
        'Audit trails',
        'Risk assessments',
        'Policy documents'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Customer Records',
      description: 'Secure storage of customer information and account histories.',
      examples: [
        'KYC documentation',
        'Account histories',
        'Customer communications',
        'Service agreements'
      ]
    },
    {
      icon: <ChartSquare className="h-12 w-12 text-purple-600" />,
      title: 'Market Data',
      description: 'Historical market data and analysis for research and compliance.',
      examples: [
        'Price histories',
        'Market analyses',
        'Trading patterns',
        'Research reports'
      ]
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: 'Legacy Systems',
      description: 'Data from retired financial systems and platforms.',
      examples: [
        'Historical records',
        'System backups',
        'Legacy transactions',
        'Archive documentation'
      ]
    },
    {
      icon: <Building2 className="h-12 w-12 text-purple-600" />,
      title: 'Corporate Records',
      description: 'Essential business documentation and corporate records.',
      examples: [
        'Board minutes',
        'Shareholder records',
        'Corporate filings',
        'Legal agreements'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Financial Data Archival</h1>
            <p className="text-xl text-purple-100">
              Secure and compliant archival solutions for financial institutions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Financial institutions require robust data archival solutions to meet regulatory 
            requirements, maintain operational efficiency, and ensure data security. Our 
            comprehensive archival system addresses these critical needs while providing 
            easy access to historical records.
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
                  SEC Requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  FINRA Compliance
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Basel III Standards
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Dodd-Frank Regulations
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Military-grade Encryption
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Multi-factor Authentication
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Comprehensive Audit Trails
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                  Real-time Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}