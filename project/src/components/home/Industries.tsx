import React from 'react';
import { Stethoscope, Building2, Scale, GraduationCap, Landmark, Umbrella } from 'lucide-react';
import HeaderText from '../common/HeaderText';

interface Industry {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function Industries() {
  const industries: Industry[] = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Healthcare',
      description: 'Patient records, imaging data, and compliance documentation.'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Finance',
      description: 'Transaction records, audit logs, and legal agreements.'
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: 'Legal',
      description: 'Case files, contracts, and client records.'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Education',
      description: 'Student records, research data, and administrative documents.'
    },
    {
      icon: <Landmark className="h-8 w-8" />,
      title: 'Government',
      description: 'Public records, census data, and legal documentation.'
    },
    {
      icon: <Umbrella className="h-8 w-8" />,
      title: 'Insurance',
      description: 'Policy documents, claims history, and risk assessment data.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <HeaderText
          title="Industries We Serve"
          subtitle="Specialized archival solutions for diverse sectors"
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-orange-500 mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}