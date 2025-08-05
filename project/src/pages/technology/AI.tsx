import React from 'react';
import { Cpu, Brain, LineChart, MessageSquare } from 'lucide-react';

export default function AI() {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: 'Machine Learning',
      description: 'Advanced algorithms for pattern recognition and predictive analytics.'
    },
    {
      icon: <LineChart className="h-12 w-12 text-purple-600" />,
      title: 'Predictive Analysis',
      description: 'Data-driven insights for informed decision making.'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-purple-600" />,
      title: 'Natural Language Processing',
      description: 'Intelligent text analysis and processing capabilities.'
    },
    {
      icon: <Cpu className="h-12 w-12 text-purple-600" />,
      title: 'Neural Networks',
      description: 'Deep learning models for complex data processing.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">AI Innovation</h1>
            <p className="text-xl text-purple-100">
              Leveraging artificial intelligence to transform data into actionable insights
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}