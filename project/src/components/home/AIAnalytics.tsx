import React, { useEffect, useRef } from 'react';
import { Brain, LineChart, Zap, Bot } from 'lucide-react';

export default function AIAnalytics() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    "Predictive Analytics",
    "Pattern Recognition",
    "Anomaly Detection",
    "Automated Insights",
    "Real-time Analysis",
    "Smart Recommendations"
  ];

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % capabilities.length;
      scroll.style.transform = `translateY(-${currentIndex * 40}px)`;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data patterns to provide actionable insights.'
    },
    {
      icon: <LineChart className="h-12 w-12 text-purple-600" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with our predictive modeling capabilities.'
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time for immediate insights and faster decision-making.'
    },
    {
      icon: <Bot className="h-12 w-12 text-purple-600" />,
      title: 'Automated Intelligence',
      description: 'Automate data analysis and reporting with intelligent algorithms and machine learning.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side with sliding text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              AI-Enabled Analytics
              <span className="block text-purple-600">for Your Data</span>
            </h2>
            <div className="h-10 overflow-hidden mb-8">
              <div
                ref={scrollRef}
                className="transition-transform duration-500 ease-in-out"
              >
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="h-10 flex items-center text-xl text-gray-700"
                  >
                    {capability}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. Make smarter decisions faster with real-time analysis and predictive modeling.
            </p>
          </div>

          {/* Right side with features grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}