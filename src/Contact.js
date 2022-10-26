import React from "react";
import "./contact.css"
const Contact =()=>{
    return(
        <div className="Register">
             <span className="RegisterTitle">Reach us Anytime</span>
            <form className="RegisterForm">
            <label>Username</label>
             <input type="text" className="RegisterInput" placeholder="Enter your Username..."></input>
             <label>Email</label>
             <input type="text" className="RegisterInput" placeholder="Enter your email..."></input>
             <label>Password</label>
             <input type="password" className="RegisterInput" placeholder="Enter your password..."></input>
             <label>Any issue</label>
             <textarea>Reason..</textarea>
             <button className="RegisterButton">Submit
             </button>
             </form>
              
        </div>
    )
}
export default Contact;
