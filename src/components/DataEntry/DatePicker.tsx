import React from 'react';
import { Label } from '../Typography/Label';

type DatePickerProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  success?: boolean;
};

export function DatePicker({
  label,
  id,
  value,
  onChange,
  required,
  disabled,
  error,
  success,
}: DatePickerProps) {
  return (
    <div className="space-y-1">
      <Label text={label} htmlFor={id} required={required} disabled={disabled} />
      <input
        type="date"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-[20vw] px-3 py-2 border rounded-md text-sm outline-none transition 
           ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-400' : ''}
            ${error ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}
            ${success ? 'border-green-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {success && <p className="text-sm text-green-500">Date is valid</p>}
    </div>
  );
}
