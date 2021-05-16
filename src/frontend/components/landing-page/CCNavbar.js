import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "../../styles/landing.scss";
import Div100vh from "react-div-100vh";

const CCNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeNavbar = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <Navbar
      className={"fixed-top custom-navbar " + (navbar ? "activated" : "")}
      expand="lg"
      dark
    >
      <div className="container">
        <NavbarBrand href="/">Coach Chris Training</NavbarBrand>

        <NavbarToggler onClick={toggle} className="border-0 " />

        <Modal
          isOpen={isOpen}
          toggle={toggle}
          className="modal-fullscreen-lg-down modal-xl"
          fade={false}
        >
          <Div100vh>
            <ModalHeader
              style={{ color: `rgb(173, 12, 12)` }}
              className="border-0"
              toggle={toggle}
              close={<i className="fas fa-times fa-2x" onClick={toggle} />}
            >
              <h3>Coach Chris Training</h3>
            </ModalHeader>
            <ModalBody className="h-75 d-flex align-items-center justify-content-center flex-column">
              <h2 className="my-4">Products</h2>
              <h2 className="my-4">Schedule An Appointment</h2>
              <h2 className="my-4">Make A Payment</h2>

              <button
                className="btn btn-danger rounded-pill btn-lg w-75 mt-5"
                onClick={toggle}
              >
                <a href="#contact">Contact</a>
              </button>

              <div className="row text-center mx-auto fixed-bottom text-darkred modal-footer">
                <div className="col mx-1">
                  <i class="fab fa-instagram fa-2x" />
                  <br />
                  <small>Instagram</small>
                </div>
                <div className="col mx-1">
                  <i class="fab fa-facebook-f fa-2x" />
                  <br />
                  <small>Facebook</small>
                </div>
              </div>
            </ModalBody>
          </Div100vh>
        </Modal>
        <Collapse isOpen={false} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#products" className="text-white" onClick={toggle}>
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="text-white"
                href="https://github.com/reactstrap/reactstrap"
              >
                Schedule An Appointment
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="text-white"
                href="https://github.com/reactstrap/reactstrap"
              >
                Make A Payment
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default CCNavbar;
