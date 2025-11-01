import React from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import { callback, color } from "chart.js/helpers";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Weatherchart=({forecast})=> {
    if(!forecast || forecast.length===0){
        return<p> No Weather Forecast Data Available. </p>
    }

    const labels=forecast.map(day=>day.date);
    const maxtemps=forecast.map(day=>day.day.maxtemp_c);
    const mintemps=forecast.map(day=>day.day.mintemp_c);
    const isdarkmode=window.matchMedia("(prefers-color-schema:dark)").matches;
    const islightmode=window.matchMedia("(prefers-color-schema:light)").matches;

  const data = {
    labels,
    datasets: [
      {
        label:"Maximum Temperature (°C)",
        data: maxtemps,
        borderColor:isdarkmode? 'rgb(255, 99, 132)':'rgb(255,0,0)',
        backgroundColor:islightmode? 'rgba(2, 1, 1, 0.5)':'rgba(255,0,0,0.5)',
        tension: 0.4, // smooth curves
        pointRadius:5,
        pointBackgroundColor:"white",
      },
      {
        label:"Minimum Temperature (°C)",
        data: mintemps,
        borderColor:isdarkmode? 'rgb(54,162, 235)':'rgb(0,102,204)',
        backgroundColor: islightmode?'rgba(54,162, 235, 0.5)':'rgba(0,102,204,0.5)',
        tension: 0.3, // smooth curves
        pointRadius:6,
        pointBackgroundColor:"yellow",
      },
      {
        label:"Humidity(%)",
        data: forecast.map(day=>day.day.avghumidity),
        borderColor:isdarkmode? 'rgb(75,192, 192)':'rgb(123,234,0)',
        backgroundColor:islightmode? 'rgba(75,192, 192, 0.5)':'rgba(123,234,0,0.5)',
        tension: 0.5, // smooth curves
        pointRadius:4,
        pointBackgroundColor:"blue",
      },

    ],
  };

  const options = {
    responsive: true,
    plugins: {legend:{
        labels:{
            color:isdarkmode?"white":"black",
        }
    },
        tooltip:{
        callbacks:{
            label:(content)=>`${content.dataset.label}:${content.formattedValue}`
        
        }
    },
      legend: { position: 'top' },
      title: { display: true,
         text: '7-Day Weather Forecast' ,
         color:islightmode?"white":"black",
      },
    },
    scales:{
        x:{
            ticks:{
                color:isdarkmode? "white":"black",
            },
            grid:{
                color:islightmode? "black":"white",
            },
        },
        y:{
            ticks:{
                color:isdarkmode? "white":"black",
            },
            grid:{
                color:islightmode? "rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",
            },
        },
        
    },
  };

  return <Line data={data} options={options} />;
}

export default Weatherchart;