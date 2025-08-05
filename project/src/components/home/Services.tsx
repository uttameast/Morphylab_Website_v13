import React from 'react';
import { HardDrive, Database, Brain, ArrowRight } from 'lucide-react';
import HeaderText from '../common/HeaderText';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <HardDrive className="h-12 w-12 text-purple-600" />,
      title: 'Data Archival',
      description: 'Long-term preservation of digital assets with format migration and integrity checks.',
      link: '/solutions/archival'
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Data Migration',
      description: 'Seamless transfer of data between systems with minimal downtime and maximum integrity.',
      link: '/solutions/migration'
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: 'AI Analytics',
      description: 'Transform your archived data into actionable insights with advanced AI capabilities.',
      link: '/solutions/analytics'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <HeaderText 
          title="Our Solutions"
          subtitle="Comprehensive data archival solutions designed to meet your organization's specific needs"
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link}
                className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}