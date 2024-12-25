import { Link } from "react-router-dom";
import "./Register.scss"

function Register(){
    return(
        <div className="Register">
            <div className="Card">
            <div className="Right">
                    <h1><b>Register</b></h1>
                    <form action="">
                        <p><input type="text" placeholder="Full Name" /></p>
                        <p><input type="email" placeholder="Email Address" /></p>
                        <p><input type="text" placeholder="Username" /></p>
                        <p><input type="password" placeholder="Password" /></p>
                        <button>Register</button>
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