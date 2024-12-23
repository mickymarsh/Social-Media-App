import "./Post.scss"
import Comment from "../Comment/Comment.jsx";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authContext.jsx"; 

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

//here post is a prop
function Post(props){

    const liked = true;

    const [commentOpen, setcommentOpen] = useState(false)

    const showSection = () => {
        setcommentOpen(!commentOpen);
      };

    const { currentUser, login } = useContext(AuthContext);

    return(
        <div className="Post">
            <div className="Container">
                <div className="User">
                    <div className="Userinfo">
                        <img src={props.profile_pic} alt="" />
                        <div className="Username">
                            <Link to={`/profile/${props.user_id}`} style={{textDecoration: "none"}}>
                                <span className="name">{props.name}</span>
                            </Link>
                            <span className="Date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                <div className="Content">
                    <p>{props.desc}</p>
                    <img src={props.img} alt="" />
                </div>
                <div className="Info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>  }
                        12 likes
                    </div>
                    <div className="item" onClick={showSection}>
                        <TextsmsOutlinedIcon />
                        12 comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        share
                    </div>
                </div>
                {commentOpen && <Comment></Comment>}
            </div>
        </div>
    );
}

export default Post