const getWeather = async (city) => {
    cityName.innerHTML = city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb0f94d31amsh4ef56b674b058acp18d855jsn58fe6e7789f2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        temp.innerHTML = result.temp
        temp_1.innerHTML = result.temp
        humidity.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_speed_1.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        cloud_pct.innerHTML = result.cloud_pct
        feels_like.innerHTML = result.feels_like
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Get info by search city name
submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    getWeather(city.value);
})

// Default City will be delhi
getWeather('Delhi');