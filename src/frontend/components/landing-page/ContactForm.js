import React from "react";
import { Form, Input } from "reactstrap";
import { customerForm } from "../../api/customer-form";

const ContactForm = () => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [msg, setMessage] = React.useState("");

  const clearForm = () => {
    setFirstname("");
    setFirstname("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (firstname.length === 0) {
        alert("Name is invalid");
      } else if (lastname.length === 0) {
        alert("Email is invalid");
      } else if (phone.length === 0) {
        alert("Phone is invalid");
      } else {
        const form = {
          firstname,
          lastname,
          phone,
          msg,
        };

        const response = await customerForm(form);
        if (response.message === "success") {
          clearForm();
          console.log(response.message);
        } else {
          console.log(response.message);
        }
      }
    } catch (error) {
      console.log("fail: " + error);
    }
  };

  return (
    <div className="contact-form-section mt-5 d-block" id="contact-form">
      <div
        className="col-11 col-md-6 border p-3 rounded-3 mx-auto pb-5 shadow h-50"
        style={{ background: "white" }}
      >
        <div className="text-center mb-3">
          <h1 className="text-darkred mb-0">Get in touch</h1>
          <small className="text-muted">
            Fill out this form to get started.
          </small>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="First Name "
            className="rounded-pill bg-light mb-4"
            style={{ fontSize: "16px" }}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Lastname..."
            className="rounded-pill bg-light mb-4"
            style={{ fontSize: "16px" }}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone"
            className="rounded-pill bg-light mb-4"
            style={{ fontSize: "16px" }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Enter a short message of what you're looking for or what you wish to achieve."
            className="rounded-3 bg-light mb-5"
            style={{ height: 200, fontSize: "16px" }}
            value={msg}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-danger w-100 rounded-pill mx-auto mt-2 btn-lg">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
