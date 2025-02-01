//current user is a object which have name email pro pic

import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    let user = JSON.parse(localStorage.getItem("currentUser")) || null;
    const [currentUser, setCurrentUser] = useState(user);
    
  const login = async (inputs) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", inputs, {
      withCredentials: true,
    })

    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };