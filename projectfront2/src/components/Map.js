// import React,{useState,useEffect} from "react";
// import { MapContainer,TileLayer,LayersControl,useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet.heat";
// import axios from "axios";
// import { param } from "framer-motion/client";



// const {BaseLayer,Overlay}=LayersControl;
// const Heatmaplayer=({points,gradient})=>{
//     const map =useMap();
//     useEffect(()=>{
//         if (!map || points.length===0)
//             return;
//         if (map._heatLayer){
//             map.removeLayer(map._heatLayer);
//         }
//         const heatLayer=window.L.heatLayer(points,{
//             radius:25,
//             blur:10,
//             maxZoom:5,
//             minOpacity:0.5,
//             gradient:gradient,
//         }).addTo(map);
//         map._heatLayer=heatLayer;
//     },[map,points,gradient]);
//     return null;
// };
// const Map=()=>{
//     const [temperaturePoints,setTemperaturePoints]=useState([]);
//     const [precipitationpoints,setprecipitationpoints]=useState([]);
//     const [windpoints,setwindpoints]=useState([]);
//     const [cloudpoints,setcloudpoints]=useState([]);
//     const [points,setPoints]=useState([]);
//     useEffect(()=>{
//         const fetchGrid=async()=>{
//             let newpoints=[],temparr=[],preciparr=[],windarr=[],cloudarr=[];
//             const latStep=1;
//             const lonStep=1;
//             for(let lat=-60;lat<=60;lat+=latStep){
//                 for(let lon=-180;lon<=180;lon+=lonStep){
//                     try{
//                         const res=await axios.get("https://api.open-meteo.com/v1/forecast",{
//                             params:{
//                                 latitude:lat,
//                                 longitude:lon,
//                                 current_weather:true,
//                                 hourly: ["temperature_2m","precipitation","cloudcover","windspeed_10m"],
//                                 timezone:"auto",
//                             },
//                         });
//                         if (res.data.current_weather){
//                             const {temperature,windspeed}=res.data.current_weather;
//                             const temp=res.data.current_weather.temperature;
//                             temparr.push([lat,lon,temperature/10]);
//                             windarr.push([lat,lon,windspeed/100]);

//                             newpoints.push([lat,lon,temp/50]);
//                         }
//                         if (res.data.hourly){
//                             const precipitation=res?.data?.hourly?.precipitation[0];
//                             const cloudover=res?.data?.hourly?.cloudover[0];

//                             preciparr.push([lat,lon,precipitation/10]);
//                             cloudarr.push([lat,lon,cloudover/100]);
//                         }
//                     }
//                     catch (err){
//                         console.error("Error fetching grid:",err);
//                     }
//                 }
//             }
//             setTemperaturePoints(temparr);
//             setprecipitationpoints(preciparr);
//             setwindpoints(windarr);
//             setcloudpoints(cloudarr);
//             setPoints(newpoints);
//         };
//         fetchGrid();
//     },[]);
//     return(
//         <MapContainer center={[20,0]} zoom={2} style={{height:"100vh",width:"100%"}}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"/>
//             <LayersControl position="topright">
//                 <BaseLayer checked name="OpenStreetMap">
//                     <TileLayer
//                         attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
//                 </BaseLayer>
//                 <Overlay checked name="Temperature">
//                     <TileLayer
//                     attribution="&copy; Open-Meteo"
//                     url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea"
//                     />
//                     <Heatmaplayer points={temperaturePoints} gradient={{0.2:"blue",0.4:"cyan",0.6:"lime",0.8:"yellow",1.0:"red"}}/>
//                 </Overlay>
//                 <Overlay name="Precipitation">
//                     <TileLayer
//                     attribution="&copy; Open-Meteo"
//                     url="https://tile.open-meteo.com/weather/precipitation/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea"
//                     />
//                     <Heatmaplayer points={precipitationpoints} gradient={{0.2:"lightblue",0.6:"blue",1.0:"darkblue"}}/>
//                 </Overlay>
//                 <Overlay name="wind speed">
//                     <TileLayer
//                     attribution="&copy; Open-Meteo"
//                     url="https://tile.open-meteo.com/weather/windspeed/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea"
//                     />
//                     <Heatmaplayer points={windpoints} gradient={{0.2:"white",0.5:"gray",1.0:"black"}}/>
//                 </Overlay>
//                 <Overlay name="cloudcover">
//                     <TileLayer
//                     attribution="&copy; Open-Meteo"
//                     url="https://tile.open-meteo.com/weather/cloudcover/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea"
//                     />
//                     <Heatmaplayer points={cloudpoints} gradient={{0.2:"lightgray",0.5:"gray",1.0:"darkgray"}}/>
//                 </Overlay>
//             </LayersControl>
            
//         </MapContainer>
//     );
// };
// export default Map;












import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";


const { BaseLayer, Overlay } = LayersControl;

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

const Map = () => {
  const [weatherData, setWeatherData] = useState(null);

  // ✅ Fetch weather only when button clicked
  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=20&lon=78&appid=3fd3077d51a83b7357e8db3fe93be9ea&units=metric`
      );
      setWeatherData(res.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* API call button */}
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
        <button
          onClick={fetchWeather}
          style={{
            padding: "8px 15px",
            background: "#0077ff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Weather
        </button>
      </div>

      {/* Display fetched weather */}
      {weatherData && (
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 10,
            background: "rgba(0,0,0,0.6)",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 1000,
          }}
        >
          <h4>{weatherData.name}</h4>
          <p>🌡 {weatherData.main.temp}°C</p>
          <p>☁ {weatherData.weather[0].description}</p>
          <p>💨 {weatherData.wind.speed} m/s</p>
        </div>
      )}

      {/* Map with weather overlays */}
      <MapContainer center={[20, 78]} zoom={4} style={{ height: "100%", width: "100%" }}>
        <LayersControl position="topright" collapsed={false}>
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap"
            />
          </BaseLayer>

          <Overlay checked name="🌡 Temperature">
            <TileLayer url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea`} />
          </Overlay>

          <Overlay name="☁ Clouds">
            <TileLayer url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea`} />
          </Overlay>

          <Overlay name="🌧 Precipitation">
            <TileLayer url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea`} />
          </Overlay>

          <Overlay name="💨 Wind">
            <TileLayer url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=3fd3077d51a83b7357e8db3fe93be9ea`} />
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Map;
