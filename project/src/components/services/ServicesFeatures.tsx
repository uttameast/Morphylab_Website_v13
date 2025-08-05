import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ServicesFeatures() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">
            Industry-leading expertise combined with cutting-edge technology to deliver superior data management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
            <p className="text-gray-600 mb-6">
              Over a decade of experience in secure data management, serving enterprises worldwide.
            </p>
            <ul className="space-y-3">
              {['Industry expertise', 'Certified professionals', 'Best practices'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Scalable Solutions</h3>
            <p className="text-gray-600 mb-6">
              Flexible architecture that grows with your organization's needs and requirements.
            </p>
            <ul className="space-y-3">
              {['Elastic storage', 'Pay as you grow', 'Custom solutions'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Customer-Centric</h3>
            <p className="text-gray-600 mb-6">
              Dedicated support and guidance throughout your data management journey.
            </p>
            <ul className="space-y-3">
              {['24/7 support', 'Training programs', 'Regular updates'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}