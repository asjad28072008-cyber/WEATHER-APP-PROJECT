import React,{useEffect, useState} from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import "./homecarousel.css";
import { caption, image } from "framer-motion/client";
import Pagetransition from "./Pagetransition";

function Homecarousel(){

    const setings={
        dots: true,
        infinite:true,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplayspeed:3000,
        arrows:false
    };

    const images=[
        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaC71BQExx7j6kh-5HIzW8X9Hf3SQP3WO2bg&s",
            caption:"clears skies ahead",
        },
        {
            url:"https://media.springernature.com/w580h326/nature-cms/uploads/collections/A118012_SREP_GE_hero_imgs_CH_1Aug_253633075_1368610827_1200x675px-39117acd1e2c3420b9923dd1098b5e79.jpg",
            caption:"cloudy weather"
        },
        {
            url:"https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
            caption:"rain od viu"
        },
        {
            url:"/project photos 2/weather7.jpeg",
            caption:"sune"
        }
    ];

    const [index,setindex]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setindex((prev)=>(prev+1)%images.length);
        },5000);
        return()=>clearInterval(interval);
    },[]);
    return(
        <Pagetransition>
    <div>
        <div className="carousel-container  mt-3 mb-5 p-5 relative w-1/2 h-64 mx-auto overflow-hidden rounded-xl shadow-lg" >
            <Slider {...setings} >
                <div className="carousel-slide" >
                <img src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg" alt=""/>
                </div>
                <div className="carousel-slide" >
                <img src="https://media.springernature.com/w580h326/nature-cms/uploads/collections/A118012_SREP_GE_hero_imgs_CH_1Aug_253633075_1368610827_1200x675px-39117acd1e2c3420b9923dd1098b5e79.jpg" alt=""/>
                </div>
                <div className="carousel-slide" >
                <img src="https://media.gettyimages.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.jpg?s=612x612&w=gi&k=20&c=GdqPyCK1ygfARFWe_TfNdwFk84BMSEhs4dlEr0BQn5I=" alt=""/>
                </div>
                <div className="carousel-slide" >
                <img src="/project photos 2/weather7.jpeg" alt=""/>
                </div>
                <div className="carousel-slide" >
                <img src="/project photos 2/weather8.jpeg" alt=""/>
                </div>
                <div className="carousel-slide" >
                <img src="/project photos 2/weather9.jpeg" alt=""/>
                </div>
                <div className="carousel-slide" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUNPdHo5zH6CZXSnFZSX-ST5BWP9LC4rb8A&s" alt=""/>
                </div>

            </Slider>

        </div>
        <hr/>
        <div style={{marginTop:"5vh"}} className=" relative w-1/2 mx-auto h-80 overflow-hidden rounded-2xl shadow-2xl bg-black mt-3" >
        <AnimatePresence>
            <motion.img  
            key={index}
            src={images[index].url}
            alt="carousel"
            className="w-full h-full object-cover"
            style={{width:"80%",height:"400px",objectFit:"cover"}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1.2}}
             />
             
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 text-lg font-semibold" >
            {images[index].caption}
        </div>
        <div className="absolute insert-0 flex justify-between items-center px-3" >
            <button onClick={()=>setindex((prev)=>(prev - 1 + images.length)%images.length)
                }    className="bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60" style={{background:"red",display:"flex",gap:"15px"}}
             > previous </button>
             <button style={{background:"green",display:"flex",gap:"15px"}} onClick={()=>setindex((prev)=>(prev+1)%images.length)} className="bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60" > next</button>


        </div>
        <div className="absolute bottom-3 flex justify-center w-full space-x-2 relative w-1/2 h-64 mx-auto overflow-hidden rounded-xl shadow-lg" >
            {images.map((_,i)=>(
                <div key={i} onClick={()=>setindex(i)} className={`absolute w-full h-full object-cover trabsition-opacity duration-1000${
                    index===i?"opacity-100":"opacity-0"
                }`} 
                />
            ))}

        </div>

        </div>
    </div>
    </Pagetransition>
    );
}
export default Homecarousel;