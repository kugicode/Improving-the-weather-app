
function WeatherDisplay({ weatherData }){
    return (
        <>
    {weatherData.name ? (
          <div>
            <p>City: {weatherData.name}</p>
            <p>Temp: {weatherData.main.temp - 273.15} C</p>
          </div>
         ): null}
         </>
    )

}

export default WeatherDisplay