const axios = require("axios");

const contactForm = async (form) => {
  try {
    const resp = axios.post("/forms/contactform", form);
    const jsonResp = resp.json();
    console.log(jsonResp);

    return "success";
  } catch (err) {
    throw err;
  }
};

export default contactForm;
