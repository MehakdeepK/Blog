import React from "react";
import Sidebar from "./Sidebar";
import "./Singlepage.css";
import SinglePost from "./Singlepost";

const Singlepage=()=>{
    return(
        <div className="single">
            <SinglePost img ="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
         <Sidebar />
        </div>
    )
}
export default Singlepage;