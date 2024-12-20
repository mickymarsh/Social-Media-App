import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Leftbar from './Components/Leftbar/Leftbar';
import Rightbar from './Components/Rightbar/Rightbar';

import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext.jsx"; 
import "./Style.scss"




function Layout(){
  const { darkMode } = useContext(DarkModeContext);

    return(
        <div className = {`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar></Navbar>
          <div style={{display: "flex"}}>
            <Leftbar></Leftbar>
            <div style={{flex: 6}} className='Outlet'>
              <Outlet></Outlet> {/*Me thiyenne e div eke wenas wena kotasa..meka react-router wala kotasak*/}
            </div>
            <Rightbar></Rightbar>
          </div>
        </div>
      );
}

export default Layout
