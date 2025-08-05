import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isLink?: boolean;
}

export default function Logo({ className = '', isLink = true }: LogoProps) {
  const LogoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.svg" 
        alt="MorphyLab" 
        className="h-8 w-auto transition-all" 
      />
    </div>
  );

  return isLink ? (
    <Link to="/">{LogoContent}</Link>
  ) : (
    LogoContent
  );
}