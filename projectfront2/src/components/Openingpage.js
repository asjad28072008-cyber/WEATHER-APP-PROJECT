import React,{useEffect} from "react";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import "./Openingpage.css";
import Pagetransition from "./Pagetransition";

function Openingpage(){

const navigate=useNavigate();

useEffect(()=>{
    const timer=setTimeout(()=>{
        navigate('/login');
    },5000);

     return () => clearTimeout(timer); 
},[navigate]);


    return(
        <Pagetransition>
            
        <div className="splash-container" >
           
                <div className="cloud"></div>
                    <div className="thunder"></div>
                    
                    
            <motion.div className="logo" animate={{rotate:360}} transition={{repeat:Infinity,duration:2,ease:"linear"}}>
                ☀️
                🌧️❄️
                <div>
                <motion.div className="logo" animate={{rotate:360}} transition={{repeat:Infinity,duration:2,ease:"linear"}}>
                🌩️🌤️
                🌞🌈☔
                </motion.div>
                </div>
                💧
                <div>
                    
                <motion.div className="logo" animate={{rotate:360}} transition={{repeat:Infinity,duration:2,ease:"linear"}}>
                🌪️🌀
                🌬️
                </motion.div>
                </div>

                🌫️
                <div>
                <motion.div className="logo" animate={{rotate:360}} transition={{repeat:Infinity,duration:2,ease:"linear"}}>
                🌩️⛈️🌨️🌧️
                </motion.div>
                </div>
                ☁️
            </motion.div>
            
        <h1 className="splash-text">⚡ weather app</h1>
        <p >Loading...</p>
       
        </div>
    
        </Pagetransition>
    );
}
export default Openingpage;