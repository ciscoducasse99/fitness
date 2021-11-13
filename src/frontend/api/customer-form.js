import axios from "axios";

export const checkValidation = async (email, password) => {
  if (!email || !password) {
    return {
      code: 500,
      message: "failure",
    };
  }

  return {
    code: 200,
    message: "success",
  };
};

export const handleUserLogin = async (email, password) => {
  const form = {
    email: email,
    password: password,
  };
  const res = await axios.post("/api/auth/login", form);

  return res.data;
};

export const customerForm = (form) => {
  if (Object.keys(form) === null) return "failure";

  return "success";
};
