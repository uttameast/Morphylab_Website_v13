import React from 'react';
import { Database, Shield, Cpu } from 'lucide-react';

export default function TechnologyHero() {
  return (
    <div className="relative bg-purple-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative Technology Driving Transformation
          </h1>
          <p className="text-xl text-purple-100 mb-12">
            Empowering businesses with AI-driven solutions, secure data handling, and intelligent automation
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Database className="h-8 w-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Smart Data Management</h3>
              <p className="text-purple-100 text-sm">Intelligent data processing and storage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Shield className="h-8 w-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-purple-100 text-sm">Military-grade protection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Cpu className="h-8 w-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-purple-100 text-sm">Advanced machine learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}