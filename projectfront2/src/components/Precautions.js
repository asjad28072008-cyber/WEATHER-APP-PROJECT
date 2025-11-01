import React from "react";
import {motion}from "framer-motion";
import Pagetransition from "./Pagetransition";
import "./Precautions.css";
 const videos=[
        {title:"Weather Precautions",url:"https://www.youtube.com/embed/cRGYTQqYTk8",link:"https://www.youtube.com/watch?v=cRGYTQqYTK8"},
        {title:"Effects Of WEather",url:"https://www.youtube.com/embed/G9t__9Tmwv4",link:"https://www.youtube.com/watch?v=G9t__9Tmwv4"},
        {title:"Effects Of WEather",url:"https://www.youtube.com/embed/G48oUXf83_4",link:"https://www.youtube.com/watch?v=G48oUXf83_4"},
        {title:"Effects Of WEather",url:"https://www.youtube.com/embed/OEHX-HCNArU",link:"https://www.youtube.com/watch?v=OEHX-HCNArU"},
        {title:"Effects Of WEather",url:"https://www.youtube.com/embed/XsHfZ5M4TZs",link:"https://www.youtube.com/watch?v=XsHfZ5M4TZs"},
        {title:"Effects Of WEather",url:"https://www.youtube.com/embed/I1wRXsaQv0s",link:"https://www.youtube.com/watch?v=I1wRXsaQv0s"},
        {title:"Effects Of WEather",url:"https://www.youtube.com/embed/FMagDRCpJ14",link:"https://www.youtube.com/watch?v=FMagDRCpJ14"},
        {title:"Effects Of WEather",url:"https://www.youtube.com/embed/lJ0g7ELTXfs",link:"https://www.youtube.com/watch?v=lJ0g7ELTXfs"},

        
    ];
export default function Precautions(){

   

    return(
        <Pagetransition>
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-10 text-white overflow-hidden" >
            <h2 className="text-2xl font-bold mb-4 text-center" >WEather Precautions Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                {videos.map((video,index)=>(
                    <div key={index} className="bg-white rounded-2xl shawdow-lg p-4" >
                        <h3 className="text-lg font-semibold mb-2" >{video.title}</h3>
                        <iframe
                            width="50%"
                            height="250"
                            src={video.url}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write;encrypted-media;gyroscope; picture-in-picture"
                            allowFullScreen>
                            
                        </iframe>
                        <a href="{video.url}" target="_blank" rel="noopener noreferrer" className="block mt-3 text-blue-600 font-medium hover:underline"  >Watch on youtube</a>
                    </div>

                ))}
                
            </div>
        </div>
        </Pagetransition>

    );
}
