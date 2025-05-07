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
  success?: boolean; 
  small?: boolean; 
  large?: boolean;
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
  success,
  small,
  large,
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
          ${success ? 'border-green-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}
          ${small ? 'text-[10px]' : ''}
          ${large ? 'text-xl' : ''}
        `}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    {success && <p className="text-sm text-green-500">Success</p>}
    </div>
  );
}
