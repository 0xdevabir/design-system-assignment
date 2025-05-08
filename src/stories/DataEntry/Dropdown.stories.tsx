import React, { useState } from 'react';
import { Dropdown } from '../../components/DataEntry/Dropdown';

export default {
  title: 'components/Data Entry/Dropdown',
  component: Dropdown,
};

const options = [
  { label: 'Select a role', value: '' },
  { label: 'Frontend Developer', value: 'frontend' },
  { label: 'Backend Developer', value: 'backend' },
  { label: 'Full Stack Developer', value: 'fullstack' },
];

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <Dropdown
      label="Role"
      id="role"
      options={options}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const WithError = () => {
  const [value, setValue] = useState('');
  return (
    <Dropdown
      label="Role"
      id="role-error"
      options={options}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error="Please select a valid role"
    />
  );
};

export const Success = () => {
  const [value, setValue] = useState('frontend');
  return (
    <Dropdown
      label="Role"
      id="role-success"
      options={options}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      success
    />
  );
};

export const Disabled = () => (
  <Dropdown
    label="Role"
    id="role-disabled"
    options={options}
    value=""
    onChange={() => {}}
    disabled
  />
);
