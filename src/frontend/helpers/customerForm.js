const axios = require("axios");

const contactForm = async (form) => {
  try {
    const resp = await axios.post("/api/forms/contactform", form);
    console.log(resp.data);
    return { message: "success" };
  } catch (err) {
    return { message: "failure" };
  }
};

export default contactForm;
