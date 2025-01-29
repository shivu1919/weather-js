function checkTemp(){
    const icon = document.getElementById('icon')
    const city = document.getElementById('inp').value
    const cityname = document.getElementById('cityName')
    const temp = document.getElementById('temperature')
    const realfeal = document.getElementById('realfeel')
    const windspeed = document.getElementById('windspeed')
    const humidity = document.getElementById('humidity')

    fetch(`http://api.weatherapi.com/v1/current.json?key=YOUR-API-KEY&q=${city}`)
    .then((response)=> response.json())
    .then((data)=>{
        cityname.innerHTML=city;
        temp.innerHTML=data.current.temp_c
        icon.src=data.current.condition.icon
        realfeal.innerHTML="Real Feel: "+ data.current.feelslike_c
        windspeed.innerHTML = "Wind Speed: " + data.current.wind_kph + " km/h"
        humidity.innerHTML="Humidity: " +data.current.humidity
        console.log(data)
    })
}