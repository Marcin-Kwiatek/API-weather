import React from 'react'

const Result = props =>{

    const{date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather
    let content = null
    const sunriseTime = new Date(sunrise*1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset*1000).toLocaleTimeString()
    const temperatureInDegreesCelsius = Math.round(temp-273.15) 

    if(!err && city){
        content = (
            <div>
                <h3>Wyniki wyszukiwania dla {city}</h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temperatureInDegreesCelsius} &#176;C</h4>
                <h4>Wschód słońca: {sunriseTime}</h4>
                <h4>Zachód słońca: {sunsetTime}</h4>
                <h4>Aktualna siła wiatru: {wind}m/s</h4>
                <h4>Aktualne ciśnienie: {pressure}hPa</h4>
            </div>
        )
    }

    return(
        <div className='result'>
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    )
}

export default Result