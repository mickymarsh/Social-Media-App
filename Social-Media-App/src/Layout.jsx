import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Leftbar from './Components/Leftbar/Leftbar';
import Rightbar from './Components/Rightbar/Rightbar';


import "./Style.scss"

function Layout(){


    return(
        <div className = "theme-dark">
          <Navbar></Navbar>
          <div style={{display: "flex"}}>
            <Leftbar></Leftbar>
            <div style={{flex: 6}}>
              <Outlet></Outlet> {/*Me thiyenne e div eke wenas wena kotasa..meka react-router wala kotasak*/}
            </div>
            <Rightbar></Rightbar>
          </div>
        </div>
      );
}

export default Layout
