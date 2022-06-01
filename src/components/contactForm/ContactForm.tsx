import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/1fa106f0-a221-11ec-975b-f9cc2b0e6900"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
      <Form.Group className="mb-3" controlId="formBasicText">
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="text" name="name" placeholder="Your name" className="border-0 shadow" required/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="Email" name="email"  className="border-0 shadow" required/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FloatingLabel controlId="floatingInput" label="Message" className="mb-3">
          <Form.Control as="textarea" placeholder="Message" style={{ height: '100px' }} name="message" className="border-0 shadow" required/>
        </FloatingLabel>
      </Form.Group>

      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;