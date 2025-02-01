import { Link } from "react-router-dom";
import "./Register.scss"
import { useState } from "react";
import axios from "axios";


function Register(){

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:""
    })

    const [err, setErr] = useState(null);

    const handlechange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault(); // Prevent form submission
        console.log("Inputs before sending:", inputs);
      
        try {
          const response = await axios.post("http://localhost:5000/api/auth/register", inputs);
          console.log(response.data); // Log the response data from the API
          console.log("data went successfull")
        } catch (err) {
          console.log("Error:", err.response?.data || err); // Log any error response
          setErr(err.response?.data || "An error occurred");
        }
      };
      
      console.log(err)

    return(
        <div className="Register">
            <div className="Card">
            <div className="Right">
                    <h1><b>Register</b></h1>
                    <form action="">
                        <p><input type="text" placeholder="Username" name="username" onChange={handlechange} /></p>
                        <p><input type="email" placeholder="Email Address" name="email" onChange={handlechange} /></p>
                        <p><input type="password" placeholder="Password" name="password" onChange={handlechange} /></p>
                        <p><input type="text" placeholder="Name" name="name" onChange={handlechange} /></p>
                        {err && <p style={{ color: "red" }}>{err}</p>}
                        <button onClick={handleClick}>Register</button>
                    </form>                    
                </div>

                <div className="Left">
                    <h1><b>Welcome to FriendHive</b></h1>
                    <p><b>Welcome to FriendHive! <br />
                        We're excited to have you here in our community where you can connect, share, and discover new friendships. 
                        Whether you're here to chat, share moments, or just have fun, FriendHive is the perfect place to be yourself and build meaningful connections. <br />
                        <br />
                        <span>Do you have an account?</span></b></p>
                    <Link to="/Login">
                    <button>Login</button>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Register