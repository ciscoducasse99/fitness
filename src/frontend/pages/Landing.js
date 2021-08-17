import React, { useEffect } from "react";

import Div100vh from "react-div-100vh";
import CCNavbar from "../components/landing-page/CCNavbar";
import LandingHeader from "../components/landing-page/LandingHeader";
import Reasonings from "../components/landing-page/Reasonings";
import Quote1 from "../components/landing-page/Quote1";
import Testimonials from "../components/landing-page/Testimonials";
import Products from "../components/landing-page/Products";
import ContactForm from "../components/landing-page/ContactForm";
import Footer from "../components/landing-page/Footer";

import "../styles/landing.scss";

const Landing = () => {
  useEffect(() => {
    document.title = "Home - Coach Chris";
  }, []);

  // https://www.bradleymartyn.com/?r_done=1

  console.log(new Date());

  return (
    <Div100vh>
      <CCNavbar />
      <LandingHeader />
      <Quote1 />
      <Reasonings />
      <Testimonials />
      <Products />
      <ContactForm />
      <Footer />
    </Div100vh>
  );
};

export default Landing;
