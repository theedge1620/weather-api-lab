const apiKey = 'bd8f18f34c7041fdb66121337230607';
const button = document.querySelector("button");
const cityName = document.querySelector('h1');
const temperature = document.querySelector('h2');
const heatIndex = document.querySelector('h3');
const iconDisplay = document.querySelector('img');



//reads our Input value and makes the API call
button.addEventListener('click', async ()=> {
    let city = document.querySelector("input").value;
    console.log(city);

    let response = await axios.get(
        'http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+city+'&aqi=no'
    )
    //printing our data response
    console.log(response);
    let weatherData = response.data.current.temp_f;
    let celsiusTemp = response.data.current.temp_c;
    let humidity = response.data.current.humidity;
    let feelsDegF = response.data.current.feelslike_f;
    let feelsDegC = response.data.current.feelslike_c;
    let iconAddress = response.data.current.condition.icon;

    console.log(iconAddress);


    cityName.innerText = 'Current conditions for ' + city;
    temperature.innerText = 'Temperature: '+weatherData + ' deg F (' + celsiusTemp + ' deg C)';
    heatIndex.innerText = 'Current humidity: ' + humidity + '% Heat Index: ' + feelsDegF + ' deg F ('+feelsDegC+' deg C)';
    iconDisplay.src = iconAddress;
})