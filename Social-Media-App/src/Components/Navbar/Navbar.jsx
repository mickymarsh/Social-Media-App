import { Link } from "react-router-dom";

import "./Navbar.scss";

import HomeIcon from '@mui/icons-material/Home';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { useContext } from "react";
import { AuthContext } from "../../Context/authContext.jsx"; 
import { DarkModeContext } from "../../Context/darkModeContext.jsx";

function Navbar(){

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser, login } = useContext(AuthContext);

    
    return(
        <div className="Navbar">
            <div className="Left">
                <Link to={"/"}> <span> <b>FriendHive</b></span> </Link>
                <HomeIcon></HomeIcon>
                {darkMode ? <BedtimeOutlinedIcon onClick={toggle}></BedtimeOutlinedIcon> : <WbSunnyOutlinedIcon onClick={toggle}></WbSunnyOutlinedIcon>}
                <GridViewOutlinedIcon></GridViewOutlinedIcon>
                <div className="Search">
                    <SearchIcon></SearchIcon>
                    <input type="text" placeholder="search"></input>
                </div>
            </div>
            <div className="Right">
                <Person2OutlinedIcon></Person2OutlinedIcon>
                <EmailOutlinedIcon></EmailOutlinedIcon>
                <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                <Link to={`/Profile/${currentUser.id}`}>
                    <img src={currentUser?.propic || "https://via.placeholder.com/50"} alt="Profile" />
                </Link>

            </div>
        </div>
    )
}

export default Navbar