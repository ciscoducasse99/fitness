import React from "react";
import { Input } from "reactstrap";

const ContactForm = () => {
  return (
    <div className="contact-form-section mt-5" id="contact-form">
      <div
        className="col-11 border p-3 rounded-3 mx-auto pb-5 shadow "
        style={{ background: "white" }}
      >
        <div className="text-center mb-3">
          <h1 className="text-darkred mb-0">Get in touch</h1>
          <small className="text-muted">
            Fill out this form to get started.
          </small>
        </div>
        <Input
          type="text"
          name="name"
          placeholder="Name "
          className="rounded-pill bg-light mb-4"
          style={{ fontSize: "16px" }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-pill bg-light mb-4"
          style={{ fontSize: "16px" }}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone"
          className="rounded-pill bg-light mb-4"
          style={{ fontSize: "16px" }}
        />
        <Input
          type="textarea"
          name="text"
          id="exampleText"
          placeholder="Enter in a short message of what you want to achieve."
          className="rounded-3 bg-light mb-5"
          style={{ height: 200, fontSize: "16px" }}
        />
        <button className="btn btn-danger w-100 rounded-pill mx-auto mt-2 btn-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
