import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { motion } from "framer-motion";
import Pagetransition from "./Pagetransition";
import "./Weathersearch.css";

const WeatherSearch=()=>{
    const[city,setcity]=useState('');
    const [error,seterror]=useState('');
    const [weather,setweather]=useState('');
    const navigate=useNavigate();

    // const handlesearch=async () => {
    //     try{
    //         const token=localStorage.getItem("access");
    //         await fetch("http://localhost:8000/api/weather/save/",{
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json",
    //                 "Authorization":`Bearer ${token}`,
    //             },
    //             body:JSON.stringify({city}),

    //         });
    //         console.log("search saved:",city);

    //     }catch(error){
    //         console.error("error saving search:",error);

    //     }
        
    // };
 
    const handleSubmit= async(e)=>{
        e.preventDefault();
        seterror('');
        setweather(null);
        
        if (!city.trim()){
            alert("please enter a city");
            return;
        }  

          

        try{
            const token=localStorage.getItem("access");
            if (!token){
                alert("please login first")
                navigate("/login");
                return;
            }
            console.log("asfgdjgffjhgjgjgkhkhkhhk78945545:",token);
            const response=await axios.get(`http://localhost:8000/api/weather/${city}/`,{
                
                headers:{
                    Authorization:`Bearer ${token}`,

                },
            });
            

            
            navigate(`/weather/${city}`,{state:{weatherData:response.data},

            // await axios.post("http://localhost:8000/api/weather/history/",
            //     {city},
            //     {
            //         headers:{
            //             Authorization: `Bearer ${token}`,

            //         },
            //     }

            // );
            
            

            
                
            });
              
            
        }catch(error){
            if (error.response?.status===401){
                alert("Unauthorized. Please Login To Search Weather.");
                navigate('/login');
            }else if(error.response?.status ===404){
                alert("city Not found");

            }else{
                alert("something went wrong.");
            }
            
                        
        }
        
    };
    return(
        <Pagetransition>
        <div className="weather-search-container" >
            <form onSubmit={handleSubmit} >
            <motion.h2 className="search-title" initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:1}}>search weather</motion.h2>
            <motion.div className="weather-search-box" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
            <input className="weather-input" type="text" placeholder="Enter City" value={city} onChange={(e)=>{setcity(e.target.value); seterror('');}} />
            <button className="weather-btn" type="submit" >Search</button>
            </motion.div>
            </form>
            {error && <p style={{color:'red'}}>{error}</p>}
            
            
        </div>
        </Pagetransition>
    );
};
export default WeatherSearch;