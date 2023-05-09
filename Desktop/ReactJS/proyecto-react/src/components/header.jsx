import React from "react";
import Navbar from "./navbar";



const Header  = () => {
    return(
        <div className="header container-fluid"> 
           

                <div className="">
                    <a className="navbar-brand" href="#"> <img src={"images/DOBLE IPA 3.png"} alt="Logo" /></a>
                </div>

                <div className="menu">
                        <Navbar/>
                </div>
             
        
        </div>
    )
}

export default Header