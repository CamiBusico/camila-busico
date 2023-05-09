import React from "react";
import CartWidget from "./cartWidget";

const Navbar = () => {
    return(

    <div className="container">
            <div className="row partesNav">
               <nav className="navbar navbar-expand-lg col">
                    <div className="container-fluid">
                        <button className="navbar-toggler botonExpandir" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Cervezas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link ">Contacto</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>

            <div className="col">
             <CartWidget/>
            </div>
         </div>
    </div>
    
)}

export default Navbar