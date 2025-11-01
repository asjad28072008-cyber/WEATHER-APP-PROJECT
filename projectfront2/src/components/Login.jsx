import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios  from 'axios';
import {motion} from "framer-motion";
import Pagetransition from './Pagetransition';
import Appshell from '../pages/Appshell';
import Homecarousel from './Homecarousel';
import "./Login.css";

export default function Login(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate();

    

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const res =await fetch("http://localhost:8000/api/auth/login/",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({username,password}),
        });

        const data=await res.json();
        if (res.ok){
            localStorage.setItem('access',data.access);
            localStorage.setItem('refresh',data.refresh);

            navigate("/home");
        }
        else{
            alert('Login Failed');
        }
    };

    return(
        
        <Pagetransition>
        
            <div className='min-h-[80vh] flex items-center justify-center px-6'>
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden' >
        <div className='absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-ping top-10 left-20' ></div>
        <div className='absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse bottom-10 right-20' ></div>
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1}} className='w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-lg shadow-2xl' >
        <div className='login-container'>
            <div className='login-card'>
        <h1 className='text-3xl font-bold text-white text-center mb-6' >Login</h1>
        <form onSubmit={handleSubmit}>
            <input  type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className='w-full px-4 py-3 border rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400'/>
            <br/>
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className='w-full px-4 py-3 border rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400'/>
            <br/>
            <button className='w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300' type="submit">Login</button>
             
        </form>
        </div>
        </div>
        
       
        
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-green-400 to-red-400 relative'>
                <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='weather icon' className='absolute top-10 left-10 w-20 animate-bounce opacity-80'/>
                <img src='https://cdn-icons-png.flaticon.com/512/869/869869.png' alt='cloud icon' className='absolute bottom-20 right-20 w-28 animate-pulse opacity-70'/>
        <div className='login-card'>        
                <img src='/project photos 2/weather1.jpeg' className='bav'/>
                </div>
                <div style={{"marginLeft":"7vw"}} className='login-card'>
                <img src='/project photos 2/weather2.jpeg' className='bav'/>
                
                </div>
                <div style={{"marginLeft":"14vw"}} className='login-card'>
                <img src='/project photos 2/weather3.jpeg' className='bav'/>
                </div>
                <div style={{"marginLeft":"21vw"}} className='login-card'>
                <img src='/project photos 2/weather4.jpeg' className='bav'/>
                </div>
                <div style={{"marginLeft":"28vw"}} className='login-card'>
                <img src='/project photos 2/weather5.jpeg' className='bav'/>
                </div>
                <div style={{"marginLeft":"35vw"}} className='login-card'>
                <img src='/project photos 2/weather6.jpeg' className='bav'/>
                </div>
                <div style={{"marginLeft":"42vw"}} className='login-card'>
                <img src='/project photos 2/weather7.jpeg' className='bav'/>
                </div>
                <div style={{"marginLeft":"49vw"}} className='login-card'>
                <img src='/project photos 2/weather8.jpeg' className='bav'/>
                </div>
                <div style={{"marginLeft":"56vw"}} className='login-card'>
                <img src='/project photos 2/weather9.jpeg' className='bav'/>
                </div>
            <div style={{"marginLeft":"63vw"}} className='login-card'>
                <img src='/logo192.png' className='bav'/>
                </div>
        </div>
       
        <hr/>
        <hr/>
        <hr/>
        <div className='login-container'>
        <p className='text-gray-500 text-sm mt-6'>Don't HavE an AccoUnt?</p>
        <strong>Register Now!</strong>
         <Link to="/register" ><button className='text-red-600 hover:underline'>Register</button></Link>
         </div>
         </motion.div>
        </div>
        </div>
      
        </Pagetransition>
        
    );
}  