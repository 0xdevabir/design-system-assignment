import React from 'react';
import { Label } from '../../components/Typography/Label.tsx';

type TextInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  required?: boolean;
};

export function TextInput({
  label,
  id,
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  required = false,
}: TextInputProps) {
  return (
    <div className="space-y-1">
      <Label text={label} htmlFor={id} required={required} disabled={disabled} />

      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full pl-3 pr-18 py-3 border rounded-md text-sm outline-none transition
          ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-400' : ''}
          ${error ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}
        `}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
