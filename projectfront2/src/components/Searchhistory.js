import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios  from "axios";

function Searchhistory(){
    const [history,sethistory]=useState(null);
    
    const navigate=useNavigate();

    useEffect(()=>{
        const fetchhistory= async ()=>{
            try{
            const token=localStorage.getItem("access");
            const response=await fetch("http://localhost:8000/api/weather/history/",{
                
                headers:{
                    'Authorization':`Bearer ${token}`,
                    

                },
            });
            if(response.status===401){
                alert("Please Login first to View search History.");

                return(
                    <div>
                        <button onClick={navigate("/")} > Back TO Home</button>
                    </div>
                );
            }

            const data=await response.json();
            console.log("History:",data)            ;
            sethistory(data);
        } catch (err) {
            console.error("errro fetching data history:",err.message);
            

        }
    };
            fetchhistory();
    },[]);
    

    if (!history){
        return <div>Loading...</div>;
    }


    return(
        <div >
            <h2>Your  Weather Search History</h2>
            <ul>
                {history.map((item)=>(
                    <li key={item.id} >
                        {item.city} - {new Date(item.searched_at).toLocaleString()}

                    </li>
                ))}
            
            
            </ul>
        </div>
    );
}

export default Searchhistory;