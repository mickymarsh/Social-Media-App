import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // Check if the user already exists in the database
    const checkUserQuery = "SELECT * FROM users WHERE username = ?";
    db.query(checkUserQuery, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err); // Handle any query errors

        if (data.length) {
            // If user already exists, return a conflict status with a message
            return res.status(409).json("User already exists!");
        }

        // If user doesn't exist, insert the new user into the database
        const insertUserQuery = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?, ?, ?, ?)";
        db.query(insertUserQuery, [req.body.username, req.body.email, req.body.password, req.body.name], (err, data) => {
            if (err) return res.status(500).json(err); // Handle any query errors
            return res.status(200).json("User has been created!");
        });
    });
};


export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";
  
    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      if (req.body.password !== data[0].password) {
        return res.status(400).json("Wrong password or username!");
      }
  
      const token = jwt.sign({ id: data[0].id }, "secretkey");
  
      const { password, ...others } = data[0];
  
      // Set the JWT token as a cookie
      res.cookie("accessToken", token, {
        //httpOnly: true,    // Prevents JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Only sends the cookie over HTTPS in production
        sameSite: "None",  // Allows cross-origin requests
      });
  
      res.status(200).json({ user: others });
    });
  };
  
  export const logout = (req, res) => {
    // Clear the cookie when logging out
    res.clearCookie("accessToken", {
      //httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure secure flag for production
      sameSite: "None",  // Matches the setting in login
    }).status(200).json("User has been logged out.");
  };
  