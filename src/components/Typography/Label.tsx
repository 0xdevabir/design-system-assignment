import React from 'react';

type LabelProps = {
  text: string;
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
};

export function Label({ text, htmlFor, required = false, disabled = false }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium ${
        disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
      }`}
    >
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}
