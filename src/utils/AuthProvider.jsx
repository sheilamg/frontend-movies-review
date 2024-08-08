import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const data = localStorage.getItem("AuthToken")
    ? JSON.parse(localStorage.getItem("AuthToken"))
    : null;

  const [token, setToken] = useState(data ? data.token : null);
  const [isAuthenticated, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userToken) => {
    //setToken(userToken);
    setToken(userToken.token);
    setIsAuth(true);
    setUser(userToken.user);

    localStorage.setItem("AuthToken", JSON.stringify(userToken));
  };

  const logout = () => {
    setToken(null);
  };

  //const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
