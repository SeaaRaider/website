let url = "";

function weather(val){
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + val + ", &appid=85608e4cff4e7f0f2b8b93c600847246";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.getElementById('temp').innerHTML = " ";
        document.getElementById('feelsLike').innerHTML = " ";
        document.getElementById('humidity').innerHTML = " ";
        document.getElementById('image').src = " ";
        document.getElementById('message').textContent = " ";

        var myInput = document.getElementById("enterCity");
        if (myInput && myInput.value)
        {
            document.getElementById('temp').innerHTML = Math.round(data.main.temp - 273) + " ºC";
            document.getElementById('feelsLike').innerHTML ="Feels like " + Math.round(data.main.feels_like - 273) + " ºC";
            document.getElementById('humidity').innerHTML ="Humidity: " + data.main.humidity + " %";
            let clouds = data.weather[0].icon;
            clouds = clouds[0] + clouds[1];

            document.getElementById('image').src = "/mainpage/icons/" + clouds +".png";
            document.getElementById('message').textContent = " ";
        }
    })
    .catch(() => {
        document.getElementById('message').textContent = "City not found";
    })
}

