import React, { createContext, useContext, useState } from 'react';
import { Toast } from './Toast';

type ToastType = 'info' | 'success' | 'warning' | 'error';

type ToastItem = {
  id: number;
  type: ToastType;
  message: string;
};

const ToastContext = createContext<{
  showToast: (type: ToastType, message: string) => void;
} | null>(null);

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (type: ToastType, message: string) => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleClose = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={handleClose} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used inside ToastProvider');
  return context;
}
