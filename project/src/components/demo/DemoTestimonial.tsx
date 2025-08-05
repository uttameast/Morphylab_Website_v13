import React from 'react';
import { Star } from 'lucide-react';

export default function DemoTestimonial() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
          alt="Michael Chen"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold">Michael Chen</h4>
          <p className="text-sm text-gray-600">Director of IT, Global Finance Corp</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-600">
        "After evaluating multiple solutions, MorphyLab stood out for its robust security features and intuitive interface. The demo convinced us immediately, and implementation was seamless. Our team's productivity has increased significantly."
      </blockquote>
    </div>
  );
}