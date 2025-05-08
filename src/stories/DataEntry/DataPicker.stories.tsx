import React, { useState } from 'react';
import { DatePicker } from '../../components/DataEntry/DatePicker';

export default {
  title: 'components/Data Entry/DatePicker',
  component: DatePicker,
};

export const Default = () => {
  const [date, setDate] = useState('');
  return (
    <DatePicker
      label="Select Date"
      id="date-default"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  );
};

export const WithError = () => {
  const [date, setDate] = useState('');
  return (
    <DatePicker
      label="Select Date"
      id="date-error"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      error="Please select a valid date"
    />
  );
};

export const WithSuccess = () => {
  const [date, setDate] = useState('2024-01-01');
  return (
    <DatePicker
      label="Date of Birth"
      id="date-success"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      success
    />
  );
};

export const Disabled = () => (
  <DatePicker
    label="Disabled Date"
    id="date-disabled"
    value=""
    onChange={() => {}}
    disabled
  />
);
