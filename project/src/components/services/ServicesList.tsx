import React from 'react';
import { Archive, Server, Shield, LineChart, CloudLightning } from 'lucide-react';

const services = [
  {
    icon: <Archive className="h-8 w-8 text-purple-600" />,
    title: 'Active Data Archival',
    description: 'Effortlessly manage growing data with automated migration, advanced search, and scalable storage options.',
    features: [
      'Automated data migration',
      'Advanced search and retrieval tools',
      'Scalable storage options'
    ]
  },
  {
    icon: <Server className="h-8 w-8 text-purple-600" />,
    title: 'Legacy System Decommissioning',
    description: 'Simplify operations and reduce costs by retiring outdated systems while preserving essential data.',
    features: [
      'Eliminate maintenance costs',
      'Ensure compliance',
      'Improve efficiency'
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-600" />,
    title: 'Compliance and Regulatory Support',
    description: 'Meet industry standards and legal requirements with our tailored compliance tools.',
    features: [
      'Automated retention policies',
      'Full audit trails',
      'Secure storage'
    ]
  },
  {
    icon: <LineChart className="h-8 w-8 text-purple-600" />,
    title: 'Data Integration and Analytics',
    description: 'Transform archived data into actionable insights with modern analytics tools.',
    features: [
      'Advanced analytics',
      'Custom dashboards',
      'Third-party integration'
    ]
  },
  {
    icon: <CloudLightning className="h-8 w-8 text-purple-600" />,
    title: 'Disaster Recovery and Backup',
    description: 'Ensure business continuity with robust disaster recovery and backup solutions.',
    features: [
      'Rapid data recovery',
      'Geo-redundant storage',
      '24/7 support'
    ]
  }
];

export default function ServicesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}