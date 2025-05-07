import React from 'react';

type ParagraphProps = {
  text: string;
  size?: 'sm' | 'base' | 'lg';
};

export function Paragraph({ text, size = 'base' }: ParagraphProps) {
  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  return <p className={`${sizeStyles[size]} text-gray-700`}>{text}</p>;
}
