import { useState } from 'react';
import './Weather.css'

const API_KEY="ae20e4ab06562cabef02f65c063c27a3"
function Weather(){
   const [City,setCity]=useState('')
   const [weather,setWeather]=useState(null)
   const [main,setMain]=useState(null)
   const date=new Date()
   
  //=============================================function for get weather========================================= 
  async function getWeather(){
    if(City=="") return setMain(<div className='e'><p>❌ Input is empty</p></div>)
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`)
    const data = await response.json()
    setWeather(data)
    console.log(data)   
    setMain(weather && weather.main ? (<div className='e'>
        
        <h2>📍 {weather.name}</h2>
        <p>Time : {date.toLocaleDateString('en-US',{weekday:'long', month : 'long',day : 'numeric'})}</p>
        <p className='a'>🌡️ Temperature : {weather.main.temp} 'C</p>
        <p className='b'>☁️ Condition : {weather.weather[0].description}</p>
        <p className='c'>💨 Speed : {weather.wind.speed}</p>
     </div>
     ):(<div className='e'>
      <p>❌ {weather.message}</p>
     </div>))
    
   }

   //===================================================HTML===============================================
    return(
     <>
   
     <input type="text" placeholder='Enter your City........' value={City} onChange={(e)=>setCity(e.target.value)} />
     <button onClick={getWeather}>Get Weather</button>
     <p>{main}</p>
     </>
    )
}
export default Weather;