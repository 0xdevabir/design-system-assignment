import React from 'react';
import { Paragraph } from '../components/Typography/Paragraphs';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  args: {
    text: 'This is a paragraph of text.',
    size: 'base',
  },
};

export const Small = {
  args: {
    size: 'sm',
    text: 'This is a small paragraph.',
  },
};

export const Base = {
  args: {
    size: 'base',
    text: 'This is a base paragraph.',
  },
};

export const Large = {
  args: {
    size: 'lg',
    text: 'This is a large paragraph.',
  },
};
