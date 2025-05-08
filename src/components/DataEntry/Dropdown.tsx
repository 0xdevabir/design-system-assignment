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
};

export function Dropdown({
  label,
  id,
  options,
  value,
  onChange,
  required,
  disabled,
}: SelectProps) {
  return (
    <div className="space-y-1">
      <Label text={label} htmlFor={id} required={required} disabled={disabled} />
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-[20vw] pl-3 pr-18 py-2 border rounded-md text-sm outline-none ${
          disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
