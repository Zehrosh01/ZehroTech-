import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  name,
  className = '',
  ...props 
}) => {
  const id = label?.toLowerCase().replace(/\s+/g, '-') || Math.random().toString(36);

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-text">
          {label} {required && <span className="text-neon-green">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-dark-accent border border-gray-700 rounded-lg 
                 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green 
                 focus:ring-2 focus:ring-neon-green/20 transition-all duration-300"
        {...props}
      />
    </div>
  );
};

export const Textarea = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = false,
  name,
  rows = 4,
  className = '',
  ...props 
}) => {
  const id = label?.toLowerCase().replace(/\s+/g, '-') || Math.random().toString(36);

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-text">
          {label} {required && <span className="text-neon-green">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 bg-dark-accent border border-gray-700 rounded-lg 
                 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green 
                 focus:ring-2 focus:ring-neon-green/20 transition-all duration-300 resize-none"
        {...props}
      />
    </div>
  );
};

export default Input;
