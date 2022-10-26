import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";


const Register =()=>{
    return(
        <div className="Register">
             <span className="RegisterTitle">Register</span>
            <form className="RegisterForm">
            <label>Username</label>
             <input type="text" className="RegisterInput" placeholder="Enter your Username..."></input>
             <label>Email</label>
             <input type="text" className="RegisterInput" placeholder="Enter your email..."></input>
             <label>Password</label>
             <input type="password" className="RegisterInput" placeholder="Enter your password..."></input>
             <button className="RegisterButton">Register
             </button>
             </form>
             <button className="registerLoginButton">
             <Link to="/login" className="link" >Login</Link>
             </button> 
        </div>
    )
}

export default Register;