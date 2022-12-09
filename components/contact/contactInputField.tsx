import React from "react"
import TextField from '@mui/material/TextField'

interface ContactProps {
  errorMessage: string, 
  label: string,
  value: string,
  onChange: (arg0: string) => void,
  type?: string,
  multiline?: boolean
}

const ContactForm = (props: ContactProps) => {
  if (props.errorMessage === "") {
    return <TextField 
        fullWidth 
        helperText=" " 
        label={props.label}
        variant="outlined" 
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
        type={props.type ? props.type : "string"}
        minRows={3}
        multiline={props.multiline}
    />
  }

  return <TextField 
      fullWidth 
      error 
      helperText={props.errorMessage} 
      label={props.label}
      variant="outlined" 
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
      type={props.type ? props.type : "string"}
      minRows={3}
      multiline={props.multiline}
  />
}

export default ContactForm