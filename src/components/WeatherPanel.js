import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const WeatherPanel = () => {

    // URL APIS

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=6b8f3b1565c2520e3f0b14dfea83362c&lang=es"
    const cityUrl = "&q="

    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=6b8f3b1565c2520e3f0b14dfea83362c&lang=es'

    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState('')

    const getLocation = async (loc) => {
        setLoading(true)
        setLocation(loc)

        // CLIMA DEL DIA

        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather)
        .then((response) => {
            return response.json()
        })
        .then((weatherData) => {
            console.log(weatherData)
            setWeather(weatherData)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })

        // PREDICCION

        urlForecast = urlForecast + cityUrl + loc

        await fetch(urlForecast)
        .then((response) => {
            return response.json()
        })
        .then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false)
            setShow(true)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })        

    }

    return(

        <React.Fragment>
            <Form
            newLocation = {getLocation}
             />

             <Card 
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
             />
        </React.Fragment>

    )

}

export default WeatherPanel