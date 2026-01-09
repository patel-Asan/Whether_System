import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./sb.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function Info({ info }) {


    const HOT_URL = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Cloudy sky
    const COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Snowy cold weather


    const RAINY_URL = "https://images.unsplash.com/photo-1550938157-784f559e89ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGltYWdlJTIwb2YlMjByYWlueSUyMCUyMCUyMG1heFdpZHRoJTNBJTIwMzQ1JTJDJTIwbWFyZ2luJTNBJTIwJzAlMjBhdXRvJ3xlbnwwfHwwfHx8MA%3D%3D";


    return (
        <div className="InfoBox">
            <br />
            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>

                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity >= 80 && info.humidity <= 100
                            ? RAINY_URL
                            : info.humidity >= 60 && info.humidity < 80
                                ? HOT_URL
                                : COLD_URL
                        }
                   
                    title="Weather Image"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}  {info.humidity >= 80 && info.humidity <= 100
                        ? <ThunderstormIcon />
                        : info.humidity >= 60 && info.humidity < 80
                            ? <WbSunnyIcon />
                            : <AcUnitIcon />
                    }
                    </Typography>
                    <Typography variant="body2" color='text.secondary' component={"span"} >
                        <p>Temperature:-{info.temp}&deg;C</p>
                        <p>Humidity:-{info.humidity}</p>
                        <p>Min Temp:-{info.tempMin}&deg;C</p>
                        <p>Max Temp:-{info.tempMax}&deg;C</p>
                        <p>The Weather Can be Described as <b>{info.weather}</b> And Feels Like a {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}