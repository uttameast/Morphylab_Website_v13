import React from 'react';
import { Shield, Clock, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const stats = [
    {
      value: '99.9%',
      label: 'Uptime Guarantee',
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      description: 'Ensuring continuous access to your critical data'
    },
    {
      value: '80%',
      label: 'Cost Reduction',
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      description: 'Average savings in data management costs'
    },
    {
      value: '10x',
      label: 'Faster Retrieval',
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      description: 'Improved data access and processing speed'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering measurable results through innovative data management solutions trusted by industry leaders worldwide
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-purple-50 p-8 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}