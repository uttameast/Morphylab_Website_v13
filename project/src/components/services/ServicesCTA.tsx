import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="bg-purple-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Management?</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Schedule a consultation with our experts and discover how our services can benefit your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/request-demo"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Request Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}