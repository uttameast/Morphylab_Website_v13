import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Cpu, Scale, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import TechnologyHero from '../components/technology/TechnologyHero';
import CoreFeatures from '../components/technology/CoreFeatures';

export default function Technology() {
  const subpages = [
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Data Security',
      description: 'Advanced encryption and advanced security protocols to protect your valuable data.',
      link: '/technology/security'
    },
    {
      icon: <Cpu className="h-12 w-12 text-purple-600" />,
      title: 'AI Innovation',
      description: 'Cutting-edge artificial intelligence solutions driving business transformation.',
      link: '/technology/ai'
    },
    {
      icon: <Scale className="h-12 w-12 text-purple-600" />,
      title: 'Scalability & Performance',
      description: 'Enterprise-grade infrastructure designed for reliability and growth.',
      link: '/technology/scalability'
    }
  ];

  const certifications = [
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: 'ISO 27001',
      description: 'Information Security Management'
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: 'HIPAA Compliant',
      description: 'Healthcare Data Protection'
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-orange-500" />,
      title: 'SOC 2 Type II',
      description: 'Security & Privacy Controls'
    }
  ];

  return (
    <div className="bg-gray-50">
      <TechnologyHero />
      <CoreFeatures />

      {/* Certifications Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trust & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {cert.icon}
                  <h3 className="text-xl font-semibold ml-3">{cert.title}</h3>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subpages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subpages.map((page, index) => (
              <Link
                key={index}
                to={page.link}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{page.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-600 mb-6">{page.description}</p>
                <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}