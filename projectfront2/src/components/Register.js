import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Pagetransition from './Pagetransition';

const Register=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    const navigate=useNavigate();
    const fg=useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();

        const response=await fetch("http://localhost:8000/api/auth/register/",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({username,email,password}),
        });

        
        if (response.ok){
            alert('Registartion Successful! Please Log In.');
            navigate('/login');
        }
        else{
            alert('Registration Failed');
        }
    };

    return(
        <Pagetransition>
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
            <input type="text" value={username} required onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
            <input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} required onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit">Register</button>
            

            </form>
        <hr/>
        <hr/>
        
        <Link to="/login" ><button>Back</button></Link>
        </div>
        </Pagetransition>
    );
}  
        
export default Register;