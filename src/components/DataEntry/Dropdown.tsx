import React from 'react';
import { Label } from '../Typography/Label';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  id: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
    error?: string;
    success?: boolean;
};

export function Dropdown({
  label,
  id,
  options,
  value,
  onChange,
  required,
  disabled,
  error,
    success,
}: SelectProps) {
  return (
    <div className="space-y-1">
      <Label text={label} htmlFor={id} required={required} disabled={disabled} />
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full md:w-[20vw] pl-3 pr-18 py-2 border rounded-md text-sm outline-none 
            ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-400' : ''}
            ${error ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}
            ${success ? 'border-green-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}
        }`}
      >
        


        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">Success</p>}
    </div>
  );
}
