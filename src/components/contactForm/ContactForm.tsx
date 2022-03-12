import React, { useState } from "react";
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    // <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
    //   <div className="mb-3">
    //     <input
    //       type="text"
    //       placeholder="Your name"
    //       name="name"
    //       className="px-3 py-3 border-0 shadow"
    //       required
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       name="email"
    //       className="px-3 py-3 border-0 shadow"
    //       required
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <textarea
    //       placeholder="Your message"
    //       name="message"
    //       className="px-3 py-3 border-0 shadow"
    //       required
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <button
    //       className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //       type="submit"
    //     >
    //       Send a message
    //     </button>
    //   </div>
    // </form>
  );
};

export default ContactForm;