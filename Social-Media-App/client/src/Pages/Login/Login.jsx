import React from "react"
import "./Login.scss"
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/authContext.jsx"; 
import { useContext } from "react";

function Login(){
    const { login } = useContext(AuthContext);

    const handlelogin = () => {
        login();
    }

    return(
        <div className="Login">
            <div className="Card">
                <div className="Left">
                    <h1><b>Welcome to FriendHive</b></h1>
                    <p><b>Welcome to FriendHive! <br />
                        We're excited to have you here in our community where you can connect, share, and discover new friendships. 
                        Whether you're here to chat, share moments, or just have fun, FriendHive is the perfect place to be yourself and build meaningful connections. <br />
                        <br />
                        <span>Don't you have an account?</span></b></p>
                    <Link to="/Register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="Right">
                    <h1><b>Login</b></h1>
                    <form action="">
                        <p><input type="text" placeholder="Username" /></p>
                        <p><input type="password" placeholder="Password" /></p>
                        <button onClick={handlelogin}>Login</button>
                    </form>                    
                </div>
            </div>
        </div>
    );
}


export default Login