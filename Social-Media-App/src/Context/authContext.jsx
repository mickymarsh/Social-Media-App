//current user is a object which have name email pro pic

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    let user = JSON.parse(localStorage.getItem("currentUser")) || null;
    const [currentUser, setCurrentUser] = useState(user);
    
  const login = () => {
    //to do
    setCurrentUser({id:1, name:"Marsh Karunaratne", 
        propic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s" 
    })
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