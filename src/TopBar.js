import React from "react";
import "./TopBar.css";
import {Link} from "react-router-dom";

const TopBar = () =>{
    const user =true;
    return(
        <div className="top navbar navbar-toggler navbar-collapse ">
        <div className="topLeft navbar-brand">
        <i class="topIcon fab fa-brands fa-facebook-square"></i>
        <i class="topIcon  fab fa-brands fa-twitter-square"></i>
        <i class="topIcon fab fa-brands fa-pinterest-square"></i>
        <i class="topIcon  fab fa-brands fa-instagram-square"></i>
        </div>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
       
        <div className="topCenter ">
         <ul className="topList">
             <li className="topListItem">
                 <Link to="/" className="link">HOME</Link>
             </li>
             <li className="topListItem">
             <Link to="/post/:postId" className="link">ABOUT</Link>
             </li>
             <li className="topListItem">
             <Link to="/contact" className="link">CONTACT</Link>
             </li>
             <li className="topListItem">
             <Link to="/write" className="link">WRITE</Link>
             </li>
             <li className="topListItem">
                  {user && "LOGOUT" }
             </li>
         </ul>
         
        </div>
        <div className="topRight">
        <img  className="topImg" src="https://www.clipartmax.com/png/small/344-3442642_clip-art-freeuse-library-profile-man-user-people-icon-icono-de-login.png" alt="" />
        <i class="fab fa-solid fa-magnifying-glass"></i>
        <button className="loginButton1">
             <Link to="/login" className="link" >Login</Link>
             </button>
      
        </div>

      
        </div>
    
    )
}

export default TopBar;