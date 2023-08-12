import React from 'react';
import {TextField} from '@mui/material';

interface ContactProps {
  errorMessage: string;
  label: string;
  value: string;
  onChange: (arg0: string) => void;
  type?: string;
  multiline?: boolean;
}

export function ContactFormField(props: ContactProps) {
  if (props.errorMessage === '') {
    return (
      <TextField
        fullWidth
        helperText=" "
        label={props.label}
        variant="outlined"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
        type={props.type ? props.type : 'string'}
        minRows={5}
        multiline={props.multiline}
      />
    );
  }

  return (
    <TextField
      fullWidth
      error
      helperText={props.errorMessage}
      label={props.label}
      variant="outlined"
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
      type={props.type ? props.type : 'string'}
      minRows={5}
      multiline={props.multiline}
    />
  );
}
