import React from 'react';
import { LineChart, Brain, Database, BarChart, PieChart, Zap } from 'lucide-react';

export default function Analytics() {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze patterns and trends in your archived data.',
      capabilities: [
        'Pattern recognition',
        'Anomaly detection',
        'Predictive analytics',
        'Automated insights'
      ]
    },
    {
      icon: <LineChart className="h-12 w-12 text-purple-600" />,
      title: 'Real-time Analytics',
      description: 'Monitor and analyze data streams in real-time for immediate insights.',
      capabilities: [
        'Live data processing',
        'Real-time dashboards',
        'Instant alerts',
        'Performance monitoring'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources for comprehensive analysis.',
      capabilities: [
        'Multi-source integration',
        'Data transformation',
        'ETL processes',
        'Data warehousing'
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-purple-600" />,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights.',
      capabilities: [
        'Custom reporting',
        'KPI tracking',
        'Trend analysis',
        'Decision support'
      ]
    },
    {
      icon: <PieChart className="h-12 w-12 text-purple-600" />,
      title: 'Visual Analytics',
      description: 'Interactive visualizations for better data understanding and presentation.',
      capabilities: [
        'Interactive dashboards',
        'Custom visualizations',
        'Data exploration',
        'Report generation'
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: 'Automated Analysis',
      description: 'Automate routine analysis tasks and report generation.',
      capabilities: [
        'Scheduled reports',
        'Automated insights',
        'Alert systems',
        'Workflow automation'
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Data Analytics Solutions</h1>
            <p className="text-xl text-purple-100">
              Transform your archived data into actionable insights with advanced analytics
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-600 text-lg text-center leading-relaxed">
            Our data analytics solutions combine advanced AI capabilities with powerful 
            visualization tools to help you extract maximum value from your archived data. 
            From real-time monitoring to predictive analytics, we provide comprehensive 
            insights for informed decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.capabilities.map((capability, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Analytics Process Flow</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Data Collection', desc: 'Gather data from multiple sources' },
              { step: '2', title: 'Processing', desc: 'Clean and transform raw data' },
              { step: '3', title: 'Analysis', desc: 'Apply advanced analytics algorithms' },
              { step: '4', title: 'Visualization', desc: 'Present insights through interactive dashboards' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}