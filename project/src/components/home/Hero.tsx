import React, { useState, useEffect } from 'react';
import { Shield, Database, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Secure, Reliable, and Scalable Data Archival Solutions",
      description: "Protect your organization's valuable data with enterprise-grade archival services designed for the modern digital age."
    },
    {
      title: "Smart Insights with AI-Powered Data Analytics",
      description: "Transform your raw data into actionable insights with advanced AI and machine learning capabilities."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-purple-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Data Center"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="relative h-[120px] md:h-[144px] mb-12">
            {slides.map((slide, index) => (
              <h1
                key={index}
                className={`text-4xl md:text-6xl font-bold absolute w-full transition-transform duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
              >
                {slide.title}
              </h1>
            ))}
          </div>
          <div className="relative h-[80px] md:h-[60px] mb-8">
            {slides.map((slide, index) => (
              <p
                key={index}
                className={`text-xl text-purple-100 absolute w-full transition-transform duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
              >
                {slide.description}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/resources/blog"
              className="bg-white hover:bg-gray-100 text-purple-900 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Shield className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-purple-100">
              Advanced encryption and security protocols to protect your sensitive data.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Database className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Scalable Storage</h3>
            <p className="text-purple-100">
              Flexible storage solutions that grow with your organization's needs.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <Clock className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-purple-100">
              Round-the-clock access to your archived data with minimal downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}