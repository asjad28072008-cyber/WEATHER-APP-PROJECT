import React,{useState,useEffect} from "react";
import {Link,useLocation} from "react-router-dom";
import "./NavBar.css";
import Pagetransition from "./Pagetransition";
import { label, path } from "framer-motion/client";
const Navbar=()=>{
    const location=useLocation();
    
    const navlinks=[
        {path:"/home",label:"☀️Home"},
        {path:"/search",label:"🌈Weather Search"},
        {path:"/weather/:city",label:"🌫️Weather Display"},
        {path:"/youtube",label:"🌬️Precautions"},
        {path:"/map",label:"🌏Map"}
        // {path:"/logout",label:"Logout"},

        
        
    ];

   

    return(
        <Pagetransition>
        <nav className="navbar" >
            <h1 className="text-lg font-bold" >🌥️Weather App</h1>
            <div className="nav-links" >
            <ul className="flex space-x-4" >
                {navlinks.map((link)=>(
                    <li key={link.path} >
                        <Link to={link.path} className={`hover:underline${
                            location.pathname === link.path ?"text-yellow-400":""
                        }`}>
                            {link.label}
                        </Link>

                    </li>
                ))}

            </ul>
            </div>

        </nav>
        </Pagetransition>
    );
};
export default Navbar;

// ☀️🌧️❄️🌩️🌤️🌞🌈☔💧🌪️🌀🌬️🌫️🌩️⛈️🌨️🌧️☁️