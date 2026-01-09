import Sb from  "./sb";
import Info from "./info";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Surat",
        feelslike: 26.03,
        temp: 24.97,
        tempMin: 24.97,
        tempMax: 24.97,
        humidity: 96,
        weather: "Clouds",
    });

    let updateInfo=(newinfo)=>{
 setWeatherInfo(newinfo);
};
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App By AJ.</h1>
            <Sb updateInfo={updateInfo}/>
           <Info info={weatherInfo} />
        </div>
    );
}