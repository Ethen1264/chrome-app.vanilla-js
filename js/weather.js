const API_KEY = "01657f1381b9d55e4c2ed1f3981e51cf"

function onGeoOk(position) {
  const lat = position.coords.latitude; 
  const lon = position.coords.longitude;
  console.log("You live it", lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  })
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)   //실행이 잘 되었을 때 동작할 함수와, 실행이 잘 안 되었을 때 동작할 함수를 지정한다