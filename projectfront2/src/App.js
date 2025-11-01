import React,{useEffect,useState} from "react";
import {BrowserRouter as Router,Routes,Route,useLocation} from "react-router-dom";
import "./App.css";

import Home from './components/Home';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import Accessories from './components/Accessories';
import Login from './components/Login';
import Register from './components/Register';
import Privateroute from "./components/Privateroute";
import Searchhistory from "./components/Searchhistory";
import Openingpage from "./components/Openingpage";

import Navbar from "./components/Navbar";

import Layoutwithnavbar from "./components/Layoutwithnavbar";
import Precautions from "./components/Precautions";
import Map from "./components/Map";


const App=()=>{
  const [shownavbar,setshownavbar]=useState(false);
  
   useEffect(()=>{
          const timer=setTimeout(()=>{
              setshownavbar(true);
          });
      
           return () => clearTimeout(timer); 
      },[]);

  return(
    <div className="app-container">
      <div className="app-background"></div>
      
    <Router>
      <div className="app-content">
      
      <Routes>

        <Route element={<Layoutwithnavbar/>} >
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<WeatherSearch/>} />
        <Route path="/weather/:city" element={<Privateroute><WeatherDisplay/></Privateroute>} />
        <Route path="/youtube" element={<Precautions/>}/>
        <Route path="/map" element={<Map/>}/>

        </Route>
        
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<WeatherSearch/>} />
        <Route path="/weather/<str:city>" element={<Privateroute><WeatherDisplay/></Privateroute>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/search" element={<Privateroute><WeatherSearch/></Privateroute>} />
        <Route path="/history" element={<Searchhistory/>}/>
        <Route path="/" element={<Openingpage/>} />
        <Route path="/youtube" element={<Precautions/>}/>
        {/* <Route path="/logout" element={<Logout/>} />
        <Route path="/exit" element={<Exitpage/>}/> */}
        
        
        
      </Routes>
      </div>
    </Router>
    
    </div>
    
    
    
  );

};

export default App;
