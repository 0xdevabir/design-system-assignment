import React, { useState } from 'react';
import { TextInput } from '../../components/DataEntry/TextInput';

export default {
  title: 'components/Data Entry/TextInput',
  component: TextInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <TextInput
      label="Name"
      id="name"
      placeholder="Enter your name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const WithError = () => (
  <TextInput
    label="Email"
    id="email"
    placeholder="Enter email"
    error="Invalid email address"
    value=""
  />
);

export const Disabled = () => (
  <TextInput
    label="Phone"
    id="phone"
    placeholder="Cannot type"
    disabled
    value=""
  />
);

export const Required = () => (
  <TextInput
    label="Username"
    id="username"
    placeholder="Required field"
    required
    value=""
  />
);
