const url = "https://api.openweathermap.org/data/2.5/weather?q=Rybnik, PL&appid=85608e4cff4e7f0f2b8b93c600847246";

window.addEventListener('load', () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + " ºC";
        document.getElementById('tempmin').innerHTML = Math.round(data.main.temp_min - 273) + " ºC";
        document.getElementById('tempmax').innerHTML = Math.round(data.main.temp_max - 273) + " ºC";
        document.getElementById('humidity').innerHTML ="Humidity: " + data.main.humidity + " %";
        let clouds = data.weather[0].icon;
        let ima = document.createElement('img');

        ima.src =
            clouds == '01d' || '01n' ? '/htmlstart/icons/01d.png'
           : clouds == '02d' || '02n' ? '/htmlstart/icons/02d.png'
           : clouds == '03d' || '03n' ? '/htmlstart/icons/03d.png'
           : clouds == '04d' || '04n' ? '/htmlstart/icons/04d.png'
           : clouds == '09d' || '09n' ? '/htmlstart/icons/09d.png'
           : clouds == '10d' || '10n' ? '/htmlstart/icons/10d.png'
           : clouds == '11d' || '11n' ? '/htmlstart/icons/11d.png'
           : clouds == '13d' || '13n' ? '/htmlstart/icons/13d.png'
           : clouds == '50d' || '50n' ? '/htmlstart/icons/50d.png'
           : console.log("image error")

        document.getElementById('clouds').appendChild(ima);
    })
})

