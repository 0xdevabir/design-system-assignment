import React from 'react';
import { Label } from '../../components/Typography/Label.tsx';

export default {
  title: 'components/Typography/Label',
  component: Label,
  args: {
    text: 'Username',
    htmlFor: 'username',
  },
};

export const Default = {};

export const Required = {
  args: {
    text: 'Email',
    htmlFor: 'email',
    required: true,
  },
};

export const Disabled = {
  args: {
    text: 'Phone',
    htmlFor: 'phone',
    disabled: true,
  },
};
