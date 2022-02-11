import { createContext, useContext, useState } from "react";

export const context = createContext();

export const useGlobalContext = () => {
  return useContext(context);
};

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // auth-route
  const [clients, setClients] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [forms, setForms] = useState(null);

  const login = (id) => {
    setUser(id);
  };

  const logout = (cb) => {
    setUser(null);
    cb();
  };

  const getInitalData = (async) => {};

  return (
    <context.Provider value={{ user, login, logout }}>
      {children}
    </context.Provider>
  );
};
