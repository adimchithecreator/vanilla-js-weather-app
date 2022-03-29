

function displayWeather(response) {
    let city= document.querySelector("#city");
   let description = document.querySelector("#description");
    let temperature = document.querySelector("#temperature");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
        city.innerHTML = response.data.name;
        description.innerHTML =response.data.weather[0].description;
temperature.innerHTML = Math.round(response.data.main.temp);
humidity.innerHTML= response.data.main.humidity;
wind.innerHTML=Math.round( response.data.wind.speed);
   
}

let apiKey = "0c249e7e69e1efdbbeab00f732a6ff42";
let url =
  `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${apiKey}&units=metric`;
  
  axios.get(url).then(displayWeather);
