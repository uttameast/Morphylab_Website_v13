import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryHeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CategoryHeader({ icon, title, description }: CategoryHeaderProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}