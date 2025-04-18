import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Layout from './Layout';
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import { AuthContext } from "./Context/authContext.jsx"; 
import { useContext } from "react";


function App(){
  const { currentUser } = useContext(AuthContext);
  
  const Protectedlayout = ({children}) =>
  {
    if(!currentUser){
      return(<Navigate to="/Login"></Navigate>);
    }
    else{
      return children;
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protectedlayout>
                  <Layout></Layout>
                </Protectedlayout>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    }
  ]);

  return(
    <RouterProvider router={router} />
  );
}

export default App
