import React, { useState } from "react"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import contactInputField from './contactInputField'
import { submitContactForm } from "../../services/api/submitFormController"
import CheckIcon from '@mui/icons-material/Check'

const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState("")

  function validateInput() {
    var isValid: boolean = true

    if (name === "") {
      setNameError("Name is required.")
      isValid = false
    } else {
      setNameError("")
    }

    if (email === "") {
      setEmailError("Email is required.")
      isValid = false
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email.")
      isValid = false
    } else {
      setEmailError("")
    }

    if (message === "") {
      setMessageError("Message is required.")
      isValid = false
    } else {
      setMessageError("")
    }

    return isValid
  }

  async function onSubmit() {
    var isValid: boolean = validateInput()
    if (!isValid) return
    
    console.log(name, email, message)
    var responseCode = await submitContactForm(name, email, message)
    if (responseCode === 200) {
      setSubmitted(true)
      setName("")
      setEmail("")
      setMessage("")
    }
  }

  function onNameChange(name: string) {
    setName(name)
    if (nameError) {
      setNameError("")
    }
  }

  function onEmailChange(email: string) {
    setEmail(email)
    if (emailError) {
      setEmailError("")
    }
  }

  function onMessageChange(message: string) {
    setMessage(message)
    if (messageError) {
      setMessageError("")
    }
  }

  return <>
    {
      submitted ? 
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={() => {setSubmitted(false)}}>
          Cheers, I have received your message! I will be in touch soon.
        </Alert>
      : <></>
    }
    <br />
    { 
      contactInputField({ 
        errorMessage: nameError,
        label: "Name",
        value: name,
        onChange: onNameChange,
      }) 
    }
    { 
      contactInputField({ 
        errorMessage: emailError,
        label: "Email",
        value: email,
        onChange: onEmailChange,
        type: "email"
      }) 
    }
    { 
      contactInputField({ 
        errorMessage: messageError,
        label: "Message",
        value: message,
        onChange: onMessageChange,
        multiline: true
      }) 
    }
    <Button variant="outlined" onClick={onSubmit} size="large">Submit</Button>
  </>
}

export default ContactForm