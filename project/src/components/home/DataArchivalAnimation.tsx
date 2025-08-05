import React from 'react';
import { Database, Shield, ArrowRight, Server, CheckCircle } from 'lucide-react';

export default function DataArchivalAnimation() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden">
      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 animate-pulse"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 flex items-center justify-between px-8">
        {/* Source Data */}
        <div className="relative group">
          <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform group-hover:scale-105">
            <Database className="h-12 w-12 text-purple-600 animate-pulse" />
            <div className="mt-2 text-sm font-medium">Source Data</div>
          </div>
          <div className="absolute -top-12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-purple-100 text-purple-800 text-xs p-2 rounded">
              Raw Data Collection
            </div>
          </div>
        </div>

        {/* Processing Animation */}
        <div className="relative group">
          <div className="flex items-center space-x-2 animate-bounce">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full animation-delay-200"></div>
            <div className="w-3 h-3 bg-orange-300 rounded-full animation-delay-400"></div>
          </div>
          <div className="absolute -top-12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-orange-100 text-orange-800 text-xs p-2 rounded">
              Processing & Encryption
            </div>
          </div>
        </div>

        {/* Archival System */}
        <div className="relative group">
          <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform group-hover:scale-105">
            <Server className="h-12 w-12 text-purple-600" />
            <div className="mt-2 text-sm font-medium">Secure Archive</div>
          </div>
          <div className="absolute -top-12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-purple-100 text-purple-800 text-xs p-2 rounded">
              Long-term Storage
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Shield className="h-5 w-5 text-green-500" />
          <span>Enhanced Security</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <ArrowRight className="h-5 w-5 text-blue-500" />
          <span>Quick Access</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CheckCircle className="h-5 w-5 text-orange-500" />
          <span>Data Integrity</span>
        </div>
      </div>

      {/* Data Flow Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-500 rounded-full animate-ping animation-delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping animation-delay-600"></div>
      </div>
    </div>
  );
}