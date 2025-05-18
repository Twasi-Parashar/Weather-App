async function getWeather() {
  const location = document.getElementById("location").value;
  const apiKey = "0d1f0d64d1094a01b3140842251805";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Place not found!");

    const data = await response.json();

    const weatherDiv = document.getElementById("weather-result");
    weatherDiv.innerHTML = `
      <div class="weather-card">
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>${data.current.temp_c}°C</strong> - ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind: ${data.current.wind_kph} kph</p>
      </div>
    `;
  } catch (error) {
    document.getElementById("weather-result").innerHTML = `<p class="error">Error: ${error.message}</p>`;
  }
}
