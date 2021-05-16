import Div100vh from "react-div-100vh";
import LandingHeader from "../components/landing-page/LandingHeader";
import Reasonings from "../components/landing-page/Reasonings";
import Quote1 from "../components/landing-page/Quote1";
import "../styles/landing.scss";
import React, { useEffect } from "react";
import Testimonials from "../components/landing-page/Testimonials";
import Footer from "../components/landing-page/Footer";
import HIW from "../components/landing-page/HIW";
import CCNavbar from "../components/landing-page/CCNavbar";
import Products from "../components/landing-page/Products";
import ContactForm from "../components/landing-page/ContactForm";

const Landing = () => {
  useEffect(() => {
    document.title = "Home - Coach Chris";
  }, []);

  // https://www.bradleymartyn.com/?r_done=1

  return (
    <Div100vh>
      <CCNavbar />
      <LandingHeader />
      <Quote1 />
      <Reasonings />
      {/* <HIW /> */}
      <Testimonials />
      <Products />
      <ContactForm />
      <Footer />
    </Div100vh>
  );
};

export default Landing;
