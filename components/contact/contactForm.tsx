import React, { useState } from "react"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import contactInputField from './contactInputField'
import { submitContactForm } from "@/services/api/submitFormController"
import CheckIcon from '@mui/icons-material/Check'
import { Grid } from "@mui/material"

const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function ContactForm() {
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

  return <Grid container>
    {
      submitted ? 
        <Grid xs={12} item>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={() => {setSubmitted(false)}}>
            Cheers, I have received your message! I will be in touch soon.
          </Alert>
        </Grid>
      : <></>
    }
    <Grid xs={12} md={6} item className="md:pr-2 sm:pr-0">
      { 
        contactInputField({ 
          errorMessage: nameError,
          label: "Name",
          value: name,
          onChange: onNameChange,
        }) 
      }
    </Grid>
    <Grid xs={12} md={6} item className="md:pl-2 sm:pl-0">
      { 
        contactInputField({ 
          errorMessage: emailError,
          label: "Email",
          value: email,
          onChange: onEmailChange,
          type: "email"
        }) 
      }
    </Grid>
    <Grid xs={12} item>
      { 
        contactInputField({ 
          errorMessage: messageError,
          label: "Message",
          value: message,
          onChange: onMessageChange,
          multiline: true
        }) 
      }
    </Grid>
    <Grid xs={12} item className="flex flex-row justify-end">
      <Button variant="contained" className='background-primary max-w-full w-96' onClick={onSubmit}>Submit</Button>
      <div style={{textIndent:'-99999px', whiteSpace:'nowrap', overflow:'hidden', position:'absolute'}} aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
    </Grid>
  </Grid>
}

export default ContactForm