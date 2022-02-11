import axios from "axios";

export const getInitData = async () => {
  try {
    const initData = await axios.get("/api/dashboard");
    console.log(initData);
    return initData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
