import React from 'react';
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  X,
} from 'lucide-react';

type AlertType = 'info' | 'success' | 'warning' | 'error';

type AlertBannerProps = {
  type: AlertType;
  title: string;
  message: string;
  onClose?: () => void;
};

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

export function AlertBanner({ type, title, message, onClose }: AlertBannerProps) {
  const styles = typeStyles[type];

  return (
    <div className={`w-[40vw] rounded p-4 flex items-start gap-3 ${styles.bg}`}>
      <div className="mt-1">{styles.icon}</div>
      <div className={`flex-1 ${styles.text}`}>
        <strong className="block">{title}</strong>
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="ml-auto">
          <X className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer" />
        </button>
      )}
    </div>
  );
}
