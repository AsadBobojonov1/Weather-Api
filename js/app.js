const changelocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')

// get weather
const getWeather = async (city)=>{
    const data = await getData(city)
    return data
}

changelocation.city.focus()

//updateUI
const updateUI = (weather) =>{
    details.innerHTML = `
         <h5>${weather.name}, ${weather.sys.country} </h5>
            <p>${weather.weather[0].main}</p>
                <div>
                    <span>${Math.round(weather.main.temp)}</span>
                    <span>&deg;C</span>
                </div>
    `
    if(card.classList.contains('dspnone')){
            card.classList.remove('dspnone')
    }
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}

// get location
changelocation.addEventListener('submit', (e)=>{
    e.preventDefault()
    const cityName = changelocation.city.value.trim()
    changelocation.reset()
    const res = getWeather(cityName).then((data)=>updateUI(data))
 
})