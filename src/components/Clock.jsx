import React from 'react';
import '../styles/App.css';
import { useEffect, useState } from 'react';
const Clock = () => {
    const [time, setTime]  = useState(new Date().toLocaleString())
    useEffect(() => {    
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000);         
      }, []) 

    return (     
        <p className='clock'>{time}</p>
    );
}

export default Clock;