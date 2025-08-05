import React from 'react';
import { Shield, Database } from 'lucide-react';

export default function DemoHero() {
  return (
    <div className="bg-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Enterprise-Grade Data Archival
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Schedule a personalized demo to see how MorphyLab can transform your organization's data management
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-orange-400 mr-2" />
              <span>Advanced Security</span>
            </div>
            <div className="flex items-center">
              <Database className="h-6 w-6 text-orange-400 mr-2" />
              <span>Unlimited Storage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}