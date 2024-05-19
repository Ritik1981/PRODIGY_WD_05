function getWeather() {
  const location = document.getElementById("locationInput").value;

  const apiKey = "YGxYuiHnzoQKo626FIRrWNT5DeCJJST8";
  const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=dvBVhAXHNIgKDuxJztiyjpIEDTUJBmGY`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      const currentWeather = data.timelines.minutely[0].values;

      weatherInfo.innerHTML = `
      <h2>Current Weather in ${location}</h2>
      <p>Temperature: ${currentWeather.temperature}°C</p>
      <p>Humidity: ${currentWeather.humidity}%</p>
      <p>Wind Speed: ${currentWeather.windSpeed} km/h</p>
      <p>Visibility: ${currentWeather.visibility} km</p>
    `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
