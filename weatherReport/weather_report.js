const apiKey = '6587a6d47b3e2a66db8b952a4684ce21';

function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);


function showweatherDetailsUsingLatLong(event) {
    event.preventDefault();

    debugger; // <- execution will pause here when DevTools is open

    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const resolvedCity = document.getElementById('resolvedCity');

    const getReverseGeoLocAPI = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${resolvedCity.value}&appid=${apiKey}&units=metric`;

    fetch(getReverseGeoLocAPI)
        .then(response => response.json())
        .then(locationData => {
            if (locationData.length > 0) {
                resolvedCity.value = locationData[0].name;
            }
            return fetch(weatherApiUrl);
        })
        .then(response => response.json())
        .then(data => {
            const weatherInfo2 = document.getElementById('weatherInfo2');
            weatherInfo2.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo2 = document.getElementById('weatherInfo2');
            weatherInfo2.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm2').addEventListener('submit', showweatherDetailsUsingLatLong);
