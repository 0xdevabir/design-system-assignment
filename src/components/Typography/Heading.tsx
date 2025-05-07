import React from 'react';

type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps) {
  return (
    <h1 className="text-3xl font-bold text-gray-800">
      {text}
    </h1>
  );
}
