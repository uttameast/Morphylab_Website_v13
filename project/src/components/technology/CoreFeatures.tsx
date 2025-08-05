import React from 'react';
import { Server, Shield, Cpu, Workflow, GitBranch, Layers } from 'lucide-react';

export default function CoreFeatures() {
  const features = [
    {
      icon: <Server className="h-12 w-12 text-purple-600" />,
      title: 'Advanced Infrastructure',
      description: 'State-of-the-art data centers and cloud infrastructure for maximum reliability.'
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: 'Security Protocols',
      description: 'End-to-end encryption and comprehensive security measures.'
    },
    {
      icon: <Cpu className="h-12 w-12 text-purple-600" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent algorithms for data analysis and automation.'
    },
    {
      icon: <Workflow className="h-12 w-12 text-purple-600" />,
      title: 'Automated Workflows',
      description: 'Streamlined processes for efficient data management.'
    },
    {
      icon: <GitBranch className="h-12 w-12 text-purple-600" />,
      title: 'Seamless Integration',
      description: 'Easy integration with existing systems and workflows.'
    },
    {
      icon: <Layers className="h-12 w-12 text-purple-600" />,
      title: 'Scalable Architecture',
      description: 'Flexible infrastructure that grows with your needs.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}