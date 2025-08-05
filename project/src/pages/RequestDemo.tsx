import React from 'react';
import DemoHero from '../components/demo/DemoHero';
import DemoForm from '../components/demo/DemoForm';
import DemoFeatures from '../components/demo/DemoFeatures';
import DemoTestimonial from '../components/demo/DemoTestimonial';

export default function RequestDemo() {
  return (
    <div className="bg-gray-50">
      <DemoHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <DemoForm />
          <div className="space-y-12">
            <DemoFeatures />
            <DemoTestimonial />
          </div>
        </div>
      </div>
    </div>
  );
}