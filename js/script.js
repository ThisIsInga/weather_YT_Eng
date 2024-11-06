const apiKey = '#'
const city = '#'

async function getWeather() {
    try{
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data = await response.json();

        if (response.status === 200){
            document.getElementById('weather').innerHTML = `Temperature ${data.main.temp}C, ${data.weather[0].description}`;
        } else {
            document.getElementById('weather').innerHTML = `Error` + data.message;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `Error` + error.message;
    }
}

function UpdateTime() {
    const now = new Data();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false};
    document.getElementById('time').innerHTML = now.toLocaleDateString([], options);
}

setInterval(UpdateTime, 1000);
getWeather();