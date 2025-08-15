import React from 'react';
import { Star } from 'lucide-react';
import HeaderText from '../common/HeaderText';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, HealthTech Solutions',
      content: 'MorphyLab has transformed how we manage our patient records. Their compliance-focused approach gives us peace of mind.',
      
    },
    {
      name: 'Michael Chen',
      role: 'Director of IT, Global Finance Corp',
      content: 'The level of security and reliability we get with MorphyLab is unmatched. Essential for our financial data.',
      
    },
    {
      name: 'Emily Rodriguez',
      role: 'Legal Operations Manager',
      content: 'Their archival solutions have streamlined our document retention processes while ensuring regulatory compliance.',
      
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <HeaderText 
          title="What Our Clients Say"
          subtitle="Trusted by leading organizations across industries"
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}