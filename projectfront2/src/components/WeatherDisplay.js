import React,{useState,useEffect} from "react";
import { useLocation,useNavigate, } from "react-router-dom";
import Weatherchart  from "./Weatherchart";
import {motion} from "framer-motion";
import axios  from "axios";
import Pagetransition from "./Pagetransition";
import "./Weatherdisplay.css";


// export default function WeatherDisplay(){
//     const {city}=useParams();
//     const [weather,setweather]=useState(null);
//     const [loading,setLoading]=useState(true);
//     const navigate=useNavigate();
//     useEffect(()=>{
//         const token=localStorage.getItem("access");
//         fetch("http://localhost:8000/api/weather/${city}/",{
//             headers:{
//                 "Authorization":`Bearer ${token}`

//             }
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             setweather(data);
//             setLoading(false);
//         })
//         .catch(err=>{
//             console.error(err);
//             setLoading(false);
//         });
//     },[city]);
//     if (loading) return <p>Loading...</p>;
//     if(!weather) return <p>NO weather data available.</p>;

//     return(
//         <div>
//             <h2>Weather in {weather.location.name},{weather.location.country}</h2>

//             <p><strong>Temperature:</strong>{weather.current.temp_c}°C</p>


//             <p><strong>Condition:</strong>{weather.current.condition.text}</p>
//             <img src={weather.current.condition.icon} alt="weather icon" />
//             <p><strong>Humidity:</strong>{weather.current.humidity}%</p>

//             <p><strong>Wind:</strong>{weather.current.wind_kph}kph</p>

//             <h3>7-Day Forecast</h3>
//             {weather.forecast.forecastday.map((day,index)=>(
//                 <div key={index} style={{border:"1px solid #ccc",margin:"8px",padding:"8px"}} >
//                     <h4>{new Date(day.date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}</h4>
//                     <p><strong>Max:</strong>{day.day.maxtemp_c}°C | <strong>Min:</strong>{day.mintemp_c}°C</p>
//                     <img src={day.day.condition.icon} alt="Forecast Icon" />
//                     <p>{day.day.condition.text}</p>

//                 </div>

//             ))}
//             <button onClick={()=>{navigate('/search')}} >Back</button>
//         </div>
//     );


// }

const WeatherDisplay=()=>{
    
    const location=useLocation();
    const navigate=useNavigate();
    const weatherData=location.state?.weatherData;
    

    if (!weatherData) return null;

    if (!weatherData || !weatherData.location || !weatherData.current){
        return(
            <div>
                <h2>No weather data available,please go back and search again</h2>
                
                <button onClick={()=>navigate('/search')} >Back TO sEARCH</button>

            </div>
        );
    }
    const {location: loc,current,forecast}=weatherData;
    
    return(
        <Pagetransition>
        <div className="weather-container" >
            <div className={`weather-page `}>
            <motion.div className="weather-card" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1}} >
            <h2>Weather in {loc.name},{loc.country}</h2>

            <p><strong>Temperature:</strong>{current.temp_c}°C</p>


            <p><strong>Condition:</strong>{current.condition.text}</p>
            <img src={current.condition.icon} alt="weather icon" />
            <p><strong>Humidity:</strong>{current.humidity}%</p>

            <p><strong>Wind:</strong>{current.wind_kph}kph</p>
            <div className="card" style={{width: "18rem"}}>
            {weatherData.forecast && weatherData.forecast.forecastday && (
                weatherData.forecast.forecastday.map((day,index)=>(
                    
                    <div className="card-body" key={index}>
                        <img src={day.day.condition.icon} className="card-img-top" alt="forecast icon" />
                        <div key={index} >
                        <p className="card-title" ><strong>Date:</strong>{day.date}</p>

                        <p className="card-title" ><strong>Max:</strong>{day.day.maxtemp_c}°C || <strong>Min:</strong>{day.day.mintemp_c}°C</p>
                        <p className="card-title" ><strong>{day.day.condition.text}</strong></p>
                        </div>
                    </div>
                ))
            )}
            </div>
            {/*  chart */}
            <div>
                <h3>{weatherData.location.name}</h3>
                <Weatherchart forecast={forecast.forecastday} />
            </div>
            <button onClick={()=>{navigate('/search')}} >Back</button>
        </motion.div>
        </div>
        </div>
        </Pagetransition>
    );
}

export default WeatherDisplay;

