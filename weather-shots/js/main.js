//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    let cityName = document.querySelector('input').value.toLowerCase()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3a4e18a28b6e4259bb06cd005f8fa81c`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#city-name').innerText = data.name
      document.querySelector('#current-weather').innerText = data.weather[0].description
      
      document.querySelector('#current-icon').innerText = data.weather[0].icon

      
      
      document.querySelector('#current-humidity').innerText = data.main.humidity
      document.querySelector('#current-temp').innerText = data.main.temp
      document.querySelector('#wind-speed').innerText = data.wind.speed

      // document.querySelector('img').src = data.message
      // document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
