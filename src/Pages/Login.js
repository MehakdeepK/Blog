import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login =()=>{
    return(
        <div className="login">
         <form className="loginForm">
             <span className="loginTitle">Login</span>
             <label>Email</label>
             <input type="text" className="loginInput" placeholder="Enter your email..."></input>
             <label>Password</label>
             <input type="password" className="loginInput" placeholder="Enter your password..."></input>
             <button className="loginButton">
             <Link to="/login"className="link" >Login</Link>
             </button>
             </form>
             <button className="loginRegisterButton">
               <Link to="/register" className="link">Register</Link>
             </button>
         
        </div>
    )
}

export default Login;