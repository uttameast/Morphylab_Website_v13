import React from 'react';
import { Building2, Stethoscope, Scale, GraduationCap, Landmark, Umbrella } from 'lucide-react';

interface CaseStudy {
  id: string;
  industry: string;
  company: string;
  title: string;
  description: string;
  results: string[];
  image: string;
  icon: React.ReactNode;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'healthcare-records-modernization',
    industry: 'Healthcare',
    company: 'Regional Health Network',
    title: 'Modernizing Healthcare Records Management',
    description: 'How a leading healthcare network transformed their legacy records system into a modern, HIPAA-compliant digital archive.',
    results: [
      '85% reduction in record retrieval time',
      'Annual cost savings of $2.5M',
      '100% HIPAA compliance achievement'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    icon: <Stethoscope className="h-6 w-6" />
  },
  {
    id: 'financial-data-compliance',
    industry: 'Finance',
    company: 'Global Investment Bank',
    title: 'Ensuring Financial Data Compliance',
    description: 'Implementing a comprehensive data archival solution for a global investment bank to meet regulatory requirements.',
    results: [
      'Automated compliance reporting',
      '99.99% data accuracy achieved',
      '60% reduction in audit preparation time'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    icon: <Building2 className="h-6 w-6" />
  },
  {
    id: 'legal-document-management',
    industry: 'Legal',
    company: 'International Law Firm',
    title: 'Streamlining Legal Document Management',
    description: 'Transforming document management and case file archival for a leading international law firm.',
    results: [
      '70% faster document retrieval',
      'Enhanced security protocols',
      'Improved collaboration efficiency'
    ],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200',
    icon: <Scale className="h-6 w-6" />
  },
  {
    id: 'education-data-platform',
    industry: 'Education',
    company: 'State University System',
    title: 'Unified Education Data Platform',
    description: 'Creating a centralized data archival system for a state-wide university network.',
    results: [
      'Consolidated 15 separate systems',
      '40% reduction in storage costs',
      'Improved student data accessibility'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    id: 'government-records-digitization',
    industry: 'Government',
    company: 'State Government Agency',
    title: 'Digital Transformation of Government Records',
    description: 'Modernizing public records management for improved accessibility and preservation.',
    results: [
      'Digitized 50 years of records',
      '90% faster public record requests',
      'Enhanced disaster recovery'
    ],
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1200',
    icon: <Landmark className="h-6 w-6" />
  },
  {
    id: 'insurance-claims-archival',
    industry: 'Insurance',
    company: 'National Insurance Provider',
    title: 'Modernizing Claims Data Management',
    description: 'Implementing an AI-powered archival system for efficient claims processing and storage.',
    results: [
      '75% faster claims processing',
      'Reduced storage costs by 50%',
      'Improved fraud detection'
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    icon: <Umbrella className="h-6 w-6" />
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-purple-100">
            Success stories from organizations that transformed their data management
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full">
                    {study.icon}
                    <span className="ml-2 text-sm font-medium">{study.industry}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{study.company}</div>
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}