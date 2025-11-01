import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Carousel } from 'bootstrap';
import Homecarousel from "./Homecarousel";
import { color } from 'chart.js/helpers';
import Pagetransition from './Pagetransition';
import {motion} from "framer-motion";
import Appshell from '../pages/Appshell';



const Home=()=> {
  const navigate=useNavigate();
  const gotohistory=()=>{
    navigate('/history');
  };
  



  return (
    
      <section  className='px-6 py-16 flex flex-col items-center'>
    <Pagetransition>
    <div  className="home-container min-h-screen flex items-center justify-center bg-gradient-to-r  relative overflow-hidden" >
      <div className="absolute w-150 h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" ></div>
      
      <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}} className=' home-title card max-w-xl text-center p-10 bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl'>
      <h2 style={{width:150}} className=" text-4xl font-bold mb-4 text-white drop-shadow-md" >🌤️ Welcome To WeatherApp</h2>
      <p className='text-white/90 mb-8'>Real-Time Weather,forecasts,charts & maps</p>
      <Link to="/search">
      <button className='home-button' style={{background:"rgb(134,233,1)",borderRadius:"8px",innerWidth:"8vh",outerWidth:"10vw",innerHeight:"26vw",outerHeight:"16vh",boxSizing:"25vh",cursor:"pointer",padding:"auto"}} ><motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Search Weather</motion.div></button>
      
      </Link>
      {/* <button className="button" onClick={gotohistory} >View History</button> */}
      
      </motion.div>
      <hr/>
      <hr/>
      <Homecarousel/>
      <hr/>
      <hr/>
    </div>
    </Pagetransition>
    </section>
    
  );
};

export default Home;