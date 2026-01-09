import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./sb.css";
import { useState } from "react";

export default function Sb({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0e6aa52140df375db45ad8bfbee6bf5d";

    let getWeatherInfo = async()=>{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse =await response.json();
    console.log(jsonResponse);
    let result ={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feelsLike,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    };


let handleChange =(evt)=>{ // iska USE TAXTFILED ME ENTRY KARNE KE LIYE.
 setCity(evt.target.value);
};

let handleSubbmit =async(evt) =>{
    evt.preventDefault();
    console.log(city);
    setCity("");
 let newinfo= await getWeatherInfo();
 updateInfo(newinfo);
};

return (
<div className="SearchBox">

<form onSubmit={handleSubbmit}> 
<TextField id="city" label="City Name" variant="outlined" onChange={handleChange} required value={city}/>
<br></br>
<br></br>
<Button variant="contained" type="submit">
Search
</Button>
</form>
</div>
);
}