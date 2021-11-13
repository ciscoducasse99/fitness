import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (id) => {
    setUser(id);
  };

  const logout = (cb) => {
    setUser(null);
    cb();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};
