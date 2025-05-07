
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

export const ErrorState = () => {
  const [errorText, setErrorText] = useState('');
  return (
    <TextInput
      label="Error State"
      id="name-error"
      placeholder="Enter text here"
      value={errorText}
      error="This field is required"
      onChange={(e) => setErrorText(e.target.value)}
    />
  );
};
export const SuccessState = () => {
  const [successText, setSuccessText] = useState('');
  return (
    <TextInput
      label="Success State"
      id="name-success"
      placeholder="Enter text here"
      value={successText}
      success={true}
      onChange={(e) => setSuccessText(e.target.value)}
    />
  );
}
export const DisabledState = () => {
  const [disabled, setDisabled] = useState('');
  return (
    <TextInput
      label="Disabled State"
      id="name-disabled"
      placeholder="Enter text here"
      value={disabled}
      disabled={true}
      onChange={(e) => setDisabled(e.target.value)}
    />
  );
}
export const RequiredState = () => {
  const [required, setRequired] = useState('');
  return (
    <TextInput
      label="Required State"
      id="name-required"
      placeholder="Enter text here"
      value={required}
      required={true}
      onChange={(e) => setRequired(e.target.value)}
    />
  );
}
export const SmallInput = () => {
  const [smallName, setSmallName] = useState('');
  return (
    <TextInput
      label="Small Input"
      id="name-small"
      placeholder="Enter text here"
      value={smallName}
      small
      onChange={(e) => setSmallName(e.target.value)}
    />
  );
}
export const MediumInput = () => {
  const [mediumName, setMediumName] = useState('');
  return (
    <TextInput
      label="Medium Input (default)"
      id="name"
      placeholder="Enter text here"
      value={mediumName}
      onChange={(e) => setMediumName(e.target.value)}
    />
  );
}
export const LargeInput = () => {
  const [largeInput, setLargeInput] = useState('');
  return (
    <TextInput
      label="Large Input"
      id="name-large"
      placeholder="Enter text here"
      value={largeInput}
      large
      onChange={(e) => setLargeInput(e.target.value)}
    />
  );
}