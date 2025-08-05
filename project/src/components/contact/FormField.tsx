import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  pattern?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  children?: React.ReactNode;
}

export default function FormField({ 
  id, 
  label, 
  type, 
  placeholder, 
  required, 
  rows,
  pattern,
  value,
  onChange,
  children
}: FormFieldProps) {
  const baseClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500";
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={baseClassName}
          value={value}
          onChange={onChange}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={id}
          required={required}
          className={baseClassName}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          required={required}
          placeholder={placeholder}
          pattern={pattern}
          className={baseClassName}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}