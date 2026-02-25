const resultvar = document.getElementById("result");
const loadingvar = document.getElementById("loading");

const API_KEY = "c1e6793f21c91a92cb1b1c007f7212eb";

function getWeather() {

  const city = document.getElementById("cityip").value; 

  if (!city) {
    alert("Enter city name");
    return;
  }

  loadingvar.innerText = "Loading...";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {

      if (data.cod !== 200) {
        loadingvar.innerText = "City not found";
        return;
      }

      loadingvar.innerText = "";

      resultvar.innerHTML = `
        <div class="card">
          <h3>${data.name}</h3>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Pressure: ${data.main.pressure} hPa</p>
          <p>Weather: ${data.weather[0].description}</p>
        </div>
      `;
    })

    .catch(err => {
      loadingvar.innerText = "Error fetching data";
      console.log(err);
    });
}