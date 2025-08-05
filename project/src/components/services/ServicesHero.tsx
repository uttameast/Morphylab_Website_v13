import React from 'react';
import { Database, Shield, LineChart } from 'lucide-react';

export default function ServicesHero() {
  return (
    <div className="bg-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise Data Management Solutions
          </h1>
          <p className="text-xl text-purple-100 mb-12">
            Comprehensive data archival and management services designed for modern enterprises
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Database className="h-8 w-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Active Archival</h3>
              <p className="text-purple-100 text-sm">Efficient data management without compromise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Shield className="h-8 w-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Compliance Ready</h3>
              <p className="text-purple-100 text-sm">Meet all regulatory requirements</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <LineChart className="h-8 w-8 text-orange-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Data Analytics</h3>
              <p className="text-purple-100 text-sm">Transform data into insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}