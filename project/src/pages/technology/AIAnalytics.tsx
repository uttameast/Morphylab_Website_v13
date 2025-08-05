import React from 'react';
import { Brain, LineChart, Bot, Cpu, Database, Zap } from 'lucide-react';

export default function AIAnalytics() {
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
      icon: <Bot className="h-12 w-12 text-purple-600" />,
      title: 'Natural Language Processing',
      description: 'Intelligent text analysis and processing capabilities.'
    },
    {
      icon: <Cpu className="h-12 w-12 text-purple-600" />,
      title: 'Neural Networks',
      description: 'Deep learning models for complex data processing.'
    }
  ];

  const capabilities = [
    {
      icon: <Database className="h-8 w-8 text-orange-500" />,
      title: 'Data Processing',
      description: 'High-performance processing of structured and unstructured data'
    },
    {
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      title: 'Cognitive Analysis',
      description: 'Advanced pattern recognition and anomaly detection'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Real-time Analytics',
      description: 'Instant insights from streaming data sources'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">AI Analytics</h1>
            <p className="text-xl text-purple-100">
              Transform your data into actionable insights with advanced AI capabilities
            </p>
          </div>
        </div>
      </div>

      {/* Core Features */}
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

      {/* Capabilities Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {capability.icon}
                  <h3 className="text-xl font-semibold ml-3">{capability.title}</h3>
                </div>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}