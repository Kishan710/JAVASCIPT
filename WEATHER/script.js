const textInput = document.getElementById("text");
const searchBtn = document.getElementById("btn");
const container = document.getElementById("container");

async function getData() {
  const city = textInput.value.trim();
  container.innerHTML = ""; 

  if (city === "") {
    container.innerHTML = "<p>Enter a city name.</p>";
    return;
  }

  const apiKey = "d556097241939b82a9190d507279b7d4";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      container.innerHTML = "<p>City not found</p>";
      return;
    }

    
    const cityName = document.createElement("h2");
    cityName.textContent = `City: ${data.name}`;

    const temperature = document.createElement("p");
    temperature.textContent = `Temperature: ${data.main.temp}°C`;

    const timezone = document.createElement("p");
    timezone.textContent = `Timezone: ${data.timezone}`;

    const visibility = document.createElement("p");
    visibility.textContent = `Visibility: ${data.visibility}`;

    const description = document.createElement("p");
    description.textContent = `Weather: ${data.weather[0].description}`;


    container.append(cityName, temperature, timezone, visibility, description);

  } catch (error) {
    console.error("Error:", error);
    container.innerHTML = "<p>Error</p>";
  }
}

searchBtn.addEventListener("click", getData);
