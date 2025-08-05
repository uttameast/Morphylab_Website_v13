import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ResourceDetails {
  type: string;
  title: string;
  description: string;
  content: string[];
  image: string;
}

const resourceDetails: Record<string, ResourceDetails> = {
  'getting-started': {
    type: 'Guide',
    title: 'Getting Started with Data Archival',
    description: 'A comprehensive guide to implementing data archival solutions in your organization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    content: [
      '# Introduction to Data Archival',
      'Data archival is a critical component of modern enterprise data management. This comprehensive guide will walk you through the essential steps to implement an effective data archival strategy in your organization.',
      '## Key Components',
      '1. Data Assessment\n   - Identify critical data\n   - Determine retention requirements\n   - Classify data sensitivity\n   - Map data relationships',
      '2. Storage Strategy\n   - Choose appropriate storage tiers\n   - Define backup procedures\n   - Plan for scalability\n   - Implement redundancy',
      '3. Security Measures\n   - Encryption protocols\n   - Access controls\n   - Audit trails\n   - Compliance requirements',
      '4. Implementation Steps\n   - Infrastructure setup\n   - Migration planning\n   - Testing procedures\n   - Staff training',
      '## Best Practices',
      '- Regular audits of archived data\n- Automated classification systems\n- Clear retention policies\n- Disaster recovery planning',
      '## Getting Started',
      'Begin your data archival journey by conducting a thorough assessment of your current data landscape and requirements. Our team of experts is available to guide you through this process and help you develop a customized solution for your organization.'
    ]
  },
  'compliance-best-practices': {
    type: 'Whitepaper',
    title: 'Data Compliance Best Practices',
    description: 'Learn about regulatory requirements and compliance strategies for data management.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200',
    content: [
      '# Data Compliance Best Practices',
      'Maintaining compliance with data protection regulations is essential for modern businesses. This whitepaper explores key compliance requirements and strategies for effective implementation.',
      '## Regulatory Framework',
      '1. GDPR Requirements\n   - Data protection principles\n   - User rights\n   - Consent management\n   - Cross-border transfers',
      '2. Industry-Specific Regulations\n   - HIPAA for healthcare\n   - GLBA for financial services\n   - FERPA for education\n   - CCPA for California residents',
      '## Implementation Strategies',
      '1. Data Governance\n   - Policy development\n   - Process documentation\n   - Staff training\n   - Audit procedures',
      '2. Technical Controls\n   - Access management\n   - Encryption standards\n   - Monitoring systems\n   - Incident response',
      '## Compliance Checklist',
      '- Regular risk assessments\n- Documentation maintenance\n- Employee training programs\n- Third-party vendor management',
      '## Conclusion',
      'Implementing robust compliance measures requires a comprehensive approach combining policy, technology, and training. Stay ahead of regulatory requirements with our expert guidance and solutions.'
    ]
  },
  'ai-analytics': {
    type: 'Video',
    title: 'AI-Powered Data Analytics',
    description: 'Discover how AI transforms data analytics and improves decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    content: [
      '# AI-Powered Data Analytics',
      'Artificial Intelligence is revolutionizing how organizations analyze and utilize their data. This comprehensive guide explores the latest AI technologies and their applications in data analytics.',
      '## Key Technologies',
      '1. Machine Learning\n   - Predictive analytics\n   - Pattern recognition\n   - Anomaly detection\n   - Classification systems',
      '2. Natural Language Processing\n   - Text analysis\n   - Sentiment analysis\n   - Document processing\n   - Automated reporting',
      '## Implementation Guide',
      '1. Data Preparation\n   - Data cleaning\n   - Feature engineering\n   - Quality validation\n   - Integration setup',
      '2. Model Development\n   - Algorithm selection\n   - Training procedures\n   - Validation methods\n   - Deployment strategies',
      '## Best Practices',
      '- Regular model updates\n- Performance monitoring\n- Data quality checks\n- Security measures',
      '## Getting Started',
      'Begin your AI analytics journey with a thorough assessment of your data and business objectives. Our team can help you identify the most suitable AI solutions for your specific needs.'
    ]
  }
};

export default function LearnMore() {
  const { resourceId } = useParams<{ resourceId: string }>();
  const resource = resourceId ? resourceDetails[resourceId] : null;

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource not found</h1>
          <Link to="/learn" className="text-purple-600 hover:text-purple-700">
            Return to Knowledge Center
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/learn"
            className="inline-flex items-center text-white hover:text-orange-400 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Knowledge Center
          </Link>
          <h1 className="text-4xl font-bold mb-4">{resource.title}</h1>
          <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 rounded-full">
            {resource.type}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-purple max-w-none">
              {resource.content.map((section, index) => {
                if (section.startsWith('#')) {
                  const level = section.match(/^#+/)[0].length;
                  const text = section.replace(/^#+\s/, '');
                  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                  return <HeadingTag key={index} className="font-bold mb-4">{text}</HeadingTag>;
                }
                if (section.includes('\n')) {
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                      {section.split('\n').map((item, i) => (
                        <li key={i} className="mb-2">{item.replace(/^-\s/, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="mb-4">
                    {section}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}