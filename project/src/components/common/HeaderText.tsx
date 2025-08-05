import React from 'react';

interface HeaderTextProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function HeaderText({ title, subtitle, className = '' }: HeaderTextProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}