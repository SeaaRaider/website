let url = "";

function weather(val){
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + val + ", PL&appid=85608e4cff4e7f0f2b8b93c600847246";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + " ºC";
        document.getElementById('tempmin').innerHTML = Math.round(data.main.temp_min - 273) + " ºC";
        document.getElementById('tempmax').innerHTML = Math.round(data.main.temp_max - 273) + " ºC";
        document.getElementById('humidity').innerHTML ="Humidity: " + data.main.humidity + " %";
        let clouds = data.weather[0].icon;

        ima =
            clouds == '01d' || '01n' ? '/mainpage/icons/01d.png'
           : clouds == '02d' || '02n' ? '/mainpage/icons/02d.png'
           : clouds == '03d' || '03n' ? '/mainpage/icons/03d.png'
           : clouds == '04d' || '04n' ? '/mainpage/icons/04d.png'
           : clouds == '09d' || '09n' ? '/mainpage/icons/09d.png'
           : clouds == '10d' || '10n' ? '/mainpage/icons/10d.png'
           : clouds == '11d' || '11n' ? '/mainpage/icons/11d.png'
           : clouds == '13d' || '13n' ? '/mainpage/icons/13d.png'
           : clouds == '50d' || '50n' ? '/mainpage/icons/50d.png'
           : console.error("image source error");

        document.getElementById('image').src = ima;
        document.getElementById('message').textContent = " ";
    })
    .catch(() => {
        document.getElementById('message').textContent = "City not found";
    })
}

