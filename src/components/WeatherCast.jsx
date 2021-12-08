import React from 'react';
import Clock from "../components/Clock";

const WeatherCast = (props) => {
 let pressure = props.pressure/1.3332
    return ( 
      <div>
          <h1><Clock/></h1>
          <h1><img src={props.icon} alt="icon" /> Погода в Томске</h1>
            <h2>{Math.round(props.temp)}° {props.description}</h2>
            <p>Чувствуется как {Math.round(props.feels_like)}°</p>
            <p>Ветер {props.wind.speed.toFixed(1)} м/с</p>
            <p>Влажность {props.humidity}%</p>
            <p>Давление {pressure.toFixed()} мм рт. ст.</p>
      </div>
    );
}

export default WeatherCast;