import axios from "axios";

export const handleAdminLogin = async (email, password) => {
  try {
    const loginObj = {
      email: email,
      password: password,
    };

    const login = await axios.post("api/auth/login", loginObj, {
      withCredentials: true,
    });

    return login;
  } catch (err) {
    console.log(err.message);
    return err;
  }
};

export const handleAdminLogout = async () => {
  try {
    const logoutInfo = await axios.get("api/auth/logout", {
      withCredentials: true,
    });
    return logoutInfo;
  } catch (err) {
    console.log(err);
    return err;
  }
};
