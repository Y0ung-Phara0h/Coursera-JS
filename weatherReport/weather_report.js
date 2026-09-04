
function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '674a376595e3f9d325a1f6c25cac8760'; // Replace 'YOUR_API_KEY' with your actual API key
    const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    fetch(geoApiUrl)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            const latit = data[0].lat;
            const longg = data[0].lon;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${longg}&appid=${apiKey}&units=metric`;
            fetch(apiUrl)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
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
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
    


};

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

