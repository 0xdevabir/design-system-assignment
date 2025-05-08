import React from 'react';
import { CheckCircle, Info, AlertTriangle, XCircle, X } from 'lucide-react';

type ToastType = 'info' | 'success' | 'warning' | 'error';

const typeStyles = {
  info: {
    bg: 'bg-blue-100',
    icon: <Info className="text-blue-500" />,
    text: 'text-blue-900',
  },
  success: {
    bg: 'bg-green-100',
    icon: <CheckCircle className="text-green-500" />,
    text: 'text-green-900',
  },
  warning: {
    bg: 'bg-yellow-100',
    icon: <AlertTriangle className="text-yellow-500" />,
    text: 'text-yellow-900',
  },
  error: {
    bg: 'bg-red-100',
    icon: <XCircle className="text-red-500" />,
    text: 'text-red-900',
  },
};

export function Toast({
  id,
  type,
  message,
  onClose,
}: {
  id: number;
  type: ToastType;
  message: string;
  onClose: (id: number) => void;
}) {
  const styles = typeStyles[type];

  return (
    <div className={`w-72 p-3 mb-3 rounded shadow-md flex items-start gap-3 ${styles.bg}`}>
      <div className="mt-1">{styles.icon}</div>
      <div className={`flex-1 ${styles.text} text-sm`}>
        {message}
      </div>
      <button onClick={() => onClose(id)}>
        <X className="w-4 h-4 text-gray-600 hover:text-black" />
      </button>
    </div>
  );
}
