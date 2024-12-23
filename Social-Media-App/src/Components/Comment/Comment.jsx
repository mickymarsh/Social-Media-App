import "./Comment.scss"

import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authContext.jsx"; 


function Comment(){

    const { currentUser, login } = useContext(AuthContext);

    const comments = [
        {
          id: 1,
          desc: "So pretttttyyyyyyyyy...",
          name: "Ushi K.",
          userId: 5,
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Breathtaking!",
          name: "Hasala Samindani",
          userId: 6,
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return(
        <div className="Comments">
            <div className="Write">
                <img src={currentUser.propic} alt="" />
                <input type="text" placeholder="Write a comment"/>
                <button>Send</button>
            </div>
            {comments.map(comment=> (
                <div className="Comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="Userinfo">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="Date">1 houe ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comment