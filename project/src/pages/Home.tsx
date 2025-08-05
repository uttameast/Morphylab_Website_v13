import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Benefits from '../components/home/Benefits';
import Industries from '../components/home/Industries';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Benefits />
      <Industries />
      <Testimonials />
    </div>
  );
}