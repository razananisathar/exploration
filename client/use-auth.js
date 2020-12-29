import React, { useState, useContext, createContext } from 'react';

const authContext = createContext();

const useProvideAuth = () => {
  const [user, setUser] = useState({
    userId: '',
    username: '',
    isAuthenticated: false,
  });

  const signin = (callback, userId, username) => {
    setUser({ userId, username, isAuthenticated: true });
    callback();
  };

  const signout = (callback) => {
    setUser({ userId: '', username: '', isAuthenticated: false });
    callback();
  };

  return {
    user,
    signin,
    signout,
  };
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
