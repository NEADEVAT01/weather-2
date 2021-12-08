import { useEffect, useState } from 'react';
import './styles/App.css';
import API from './scripts/API'
import CSS from './scripts/CSS'
import WeatherCast from './components/WeatherCast'
import FactModal from './components/FactModal'
import Loading from './components/Loading'


function App() {   
  const API_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q=tomsk&appid=9a190d65a830d5893679b1c39dd342d7&units=metric&lang=ru'
  const API_URL_FACT = 'https://api.nasa.gov/planetary/apod?api_key=As3thKAO0rNfXKTHffS7w9hEF2VqxaK6hwJpMW0s'  
  const [weather, setWeather] = useState()  
  const [fact, setFact] = useState()
  const [load, setLoad] = useState(true)
  const [modalActive, setModalActive] = useState(false)
  const [AppBg, setAppBg] = useState()
  const [mainBg, setMainBg] = useState()

  useEffect(() => {    
    getAllData() 
            
  }, []) 

  async function getAllData() {      
    const data_weather = await API.GetData(API_URL_WEATHER) 
    const data_fact = await API.GetData(API_URL_FACT)
    const allowed = ['main', 'weather','wind'];
    const filtered = await API.filterData(allowed, data_weather)
    const dataAppBg = await CSS.getAppBg('App')  
    const dataMainBg = await CSS.getAppBg('main')    
    setWeather(filtered)   
    setFact(data_fact)   
    setAppBg(dataAppBg)  
    setMainBg(dataMainBg)    
    setLoad(false)
    
  }  
  
 if (load) return <Loading/>


  return (
    <div className={ AppBg }>
      <FactModal text={fact.explanation} url={fact.url} title={fact.title} active={modalActive} setActive={setModalActive}/> 
      <div className={mainBg+" p-5 w-50 mx-auto"}>             
      <WeatherCast temp = {weather['main']['temp']} 
      feels_like = {weather['main']['feels_like']} 
      humidity = {weather['main']['humidity']} 
      pressure = {weather['main']['pressure']}
      icon = {"http://openweathermap.org/img/wn/"+  weather['weather'][0].icon +"@2x.png"} 
      wind = {{speed:  weather['wind']['speed'], deg: weather['wind']['deg']}}
      description = {weather['weather'][0]['description']}
      />        
      <button type="button" className="btn btn-secondary btn-lg" onClick= {() => setModalActive(true)}>Факт дня</button> 
      </div>     
    </div>
  );
}

export default App;
