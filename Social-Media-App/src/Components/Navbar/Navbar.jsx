import { Link } from "react-router-dom";

import "./Navbar.scss";

import HomeIcon from '@mui/icons-material/Home';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';

function Navbar(){

    const userId = "123";

    return(
        <div className="Navbar">
            <div className="Left">
                <Link to={"/"}> <span> <b>FriendHive</b></span> </Link>
                <HomeIcon></HomeIcon>
                <BedtimeOutlinedIcon></BedtimeOutlinedIcon>
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
                <Link to={`/Profile/${userId}`}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s" alt="Profile" />
                </Link>

            </div>
        </div>
    )
}

export default Navbar