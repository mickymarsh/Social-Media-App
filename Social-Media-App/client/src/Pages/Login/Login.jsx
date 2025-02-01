import React from "react"
import "./Login.scss"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/authContext.jsx"; 
import { useContext, useState } from "react";

function Login(){

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    })

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const { login } = useContext(AuthContext);

    const handlelogin = async (e) => {
        e.preventDefault(); // Prevent form submission
        console.log("Inputs before sending:", inputs);
      
        try {
          await login(inputs)
          navigate("/")
          console.log("logged in successfull")
        } catch (err) {
          console.log("Error:", err.response?.data || err); // Log any error response
          setErr(err.response?.data || "An error occurred");
        }
      };
      
    

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
                        <p><input type="text" placeholder="Username" name="username" onChange={handleChange} /></p>
                        <p><input type="password" placeholder="Password" name="password" onChange={handleChange} /></p>
                        {err && <p style={{ color: "red" }}>{err}</p>}
                        <button onClick={handlelogin}>Login</button>
                    </form>                    
                </div>
            </div>
        </div>
    );
}


export default Login