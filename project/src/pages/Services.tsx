import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesFeatures from '../components/services/ServicesFeatures';
import ServicesCTA from '../components/services/ServicesCTA';

export default function Services() {
  return (
    <div className="bg-gray-50">
      <ServicesHero />
      <ServicesList />
      <ServicesFeatures />
      <ServicesCTA />
    </div>
  );
}