const KEY = '1820aa9a36919b94a0761abdd3616077'

// request get data 
const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    const req = await fetch(base + query)
    const data = await req.json()
    return data
}
