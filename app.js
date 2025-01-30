  const apiKey = 'ada11c431beb06ae4dd87af0cd5a78cf'; // Replace with your OpenWeatherMap API key

  async function checkWeather() {
      const city = document.getElementById('cityInput').value.trim();
      if (!city) {
          alert("Please enter a city name");
          return;
      }

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          if (data.cod === 200) {
              document.querySelector(".temp").innerText = `${data.main.temp}°C`;
              document.querySelector(".city").innerText = data.name;
              document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
              document.querySelector(".wind").innerText = `${data.wind.speed} km/h`;

              const weatherIcon = document.querySelector(".weather-icon");
              if (data.weather[0].main === "Clear") {
                  weatherIcon.src = "clear.png";
              } else if (data.weather[0].main === "Rain") {
                  weatherIcon.src = "rainy.png";
              } else if (data.weather[0].main === "Clouds") {
                  weatherIcon.src = "cloudy.png";
              } else {
                  weatherIcon.src = "default.png";
              }
          } else {
              alert("City not found!");
          }
      } catch (error) {
          alert("Error fetching weather data. Please try again.");
      }
  }