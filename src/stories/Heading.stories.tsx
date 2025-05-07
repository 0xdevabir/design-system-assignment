import React from 'react';
import { Heading } from '../components/Typography/Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    text: 'This is a Heading',
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {};
