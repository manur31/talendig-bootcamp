const $input = document.querySelector(".search-box input");
const btnSearch = document.querySelector('.feather-search')
const apiKey = '4057478c097249cccb7fefc971c79fe6';
// const apiKey = 'd9bc3312eca14bad8fc123925252505';
const $city = document.querySelector('#city');
const $country = document.querySelector('#country');
const $cityContainer = document.querySelector('.city-container');
const $temperature = document.querySelector('#temperature');
const $low = document.querySelector('#low');
const $high = document.querySelector('#high');
const $description = document.querySelector('#description');
const $humidity = document.querySelector('#humidity-text');
const $wind = document.querySelector('#wind-text');
const $feelsLike = document.querySelector('#feels-like-text');
const btnChangeMode = document.querySelector('.mode')
const chageTemperature = document.querySelector('.temperatures')
const celcius = chageTemperature.querySelector('.celcius');
const fahrenheit = chageTemperature.querySelector('.fahrenheit');
const icon = document.querySelector('.icon');
const wind = document.querySelector('.feather-wind');
const feelsLike = document.querySelector('.feather-thermometer');
const humidity = document.querySelector('.humidity-icon');
const $lowHigh = document.querySelector('.low-high');
const $pTemperature = document.querySelectorAll('.temperature p');
const iconSearch = document.querySelector('.feather-search');
const $main = document.querySelector('main');
const pin = document.querySelector('.feather-map-pin');
const $error = document.querySelector('#error');
const forecastMode = document.querySelector('.forecast')
// const $favorite = document.querySelector('.favorite');

// $favorite.addEventListener('click', () => {
//     $favorite.classList.toggle('active');
//     $main.classList.toggle('active');
// })

btnChangeMode.addEventListener('click', ()=> {

    const darkMode = [
        document.body, 
        $main, 
        $input,
        celcius,
        fahrenheit,
        icon,
        wind,
        feelsLike,
        humidity,
        $humidity,
        $wind,
        $feelsLike,
        $lowHigh,
        $country,
        iconSearch,
        pin,
        forecastMode
    ]

    darkMode.forEach(element => element.classList.toggle('dark'));

    btnChangeMode.querySelector('.feather-moon').classList.toggle('hidden');
    btnChangeMode.querySelector('.feather-sun').classList.toggle('hidden');
    $pTemperature.forEach(p => p.classList.toggle('dark'));
})

chageTemperature.addEventListener('click', ()=> {
    celcius.classList.toggle('active');
    fahrenheit.classList.toggle('active');
    if ($city.textContent.includes(',')){
        searchCity($city.textContent.split(',')[0])
    }
})

pin.addEventListener('click', ()=> {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            searchCity(`${latitude},${longitude}`);
        });
    } else {
        alert('Tu navegador no soporta geolocalización');
    }
})


btnSearch.addEventListener('click', inputFocus)

$city.addEventListener('click', inputFocus)

$input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchCity($input.value)
        $input.value = '';
        $input.style.display = 'none';
        $cityContainer.style.display = 'flex';
    }
})

// const searchCity =  async (city) => {

//     try {
//         const response = await fetch(` http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
//         const data = await response.json();
//         $city.innerHTML = `${data.location.name} <span id="country">${data.location.country}</span>`
//         if (celcius.classList.contains('active')) {
//             $temperature.innerHTML = `${(data.current.temp_c).toFixed(0)}°`
//             $low.innerHTML = `${(data.current.temp_c).toFixed(0)}°`
//             $high.innerHTML = `${(data.current.temp_c).toFixed(0)}°`
//             $feelsLike.innerHTML = `${(data.current.feelslike_c).toFixed(0)}°`
//         } else {
//             $temperature.innerHTML = `${(data.current.temp_f).toFixed(0)}°`
//             $low.innerHTML = `${(data.current.temp_f).toFixed(0)}°`
//             $high.innerHTML = `${(data.current.temp_f).toFixed(0)}°`
//             $feelsLike.innerHTML = `${(data.current.feelslike_f).toFixed(0)}°`
//         }

//         $humidity.innerHTML = `${data.current.humidity}%`;
//         $wind.innerHTML = `${data.current.wind_kph} kms/h`;
//         $description.innerHTML = `${data.current.condition.text}`

//         icon.src = data.current.condition.icon;

//         localStorage.setItem('city', city);
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }


const searchCity =  async (city) => {
    try {
        let url;
        if (city.includes(',')) {
            const [lat, lon] = city.split(',');
            url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        } else {
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        $city.innerHTML = `${data.city.name},`;
        $country.innerHTML = `${data.city.country}`;

        if (celcius.classList.contains('active')){
            $temperature.innerHTML = `${kelvinToCelcius(data.list[0].main.temp)}°`;
            $low.innerHTML = `${kelvinToCelcius(data.list[0].main.temp_min)}°`;
            $high.innerHTML = `${kelvinToCelcius(data.list[0].main.temp_max)}°`;
            $feelsLike.innerHTML = `${kelvinToCelcius(data.list[0].main.feels_like)}°`;
        } else {
            $temperature.innerHTML = `${kelvinToFahrenheit(data.list[0].main.temp)}°`;
            $low.innerHTML = `${kelvinToFahrenheit(data.list[0].main.temp_min)}°`;
            $high.innerHTML = `${kelvinToFahrenheit(data.list[0].main.temp_max)}°`;
            $feelsLike.innerHTML = `${kelvinToFahrenheit(data.list[0].main.feels_like)}°`;
        }

        $humidity.innerHTML = `${data.list[0].main.humidity}%`;
        $wind.innerHTML = `${data.list[0].wind.speed} m/s`;
        $description.innerHTML = data.list[0].weather[0].description;
        
        icon.innerHTML = `<use xlink:href="./assets/sprite.svg#${data.list[0].weather[0].icon}"></use>`;

        showForecast(data)

        const cities = (JSON.parse(localStorage.getItem('city')) || []);
        cities.push(city);
        localStorage.setItem('city', JSON.stringify(cities));


    } catch (error) {
        if(error){
            $error.textContent = 'City not found';
            $error.style.opacity = '1';
            setInterval(() => {
                $error.style.opacity = '0';
            }, 2500);
            inputFocus()

            console.log(error);
        }
    }
}


function inputFocus() {
    $input.style.display = 'block';
    $cityContainer.style.display = 'none';
    $city.textContent = '';
    $country.textContent = '';
    $input.focus();
}

function kelvinToCelcius(kelvin){
    return (kelvin - 273.15).toFixed(0);
}

function kelvinToFahrenheit(kelvin){
    return (((kelvin - 273.15)) * 9/5 + 32).toFixed(0);
}

const showForecast = async (data) => {
    // Pronosticos
    const containerForecast = document.querySelector('.forecast')
    const forecast = await data.list.slice(1, 6);

    forecast.forEach((data) => {
        const date = data.dt_txt;
        const temp = kelvinToCelcius(data.main.temp);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;

        const card = document.createElement('article')
        card.classList.add('.forecast-day')
        
        // <aside id="forecastIcon"><use xlink:href="./assets/sprite.svg#${icon}"></use></aside>
        
        card.innerHTML = `
            <p id="forecastDate">${date.split(' ')[1].slice(0, 5)}h</p>
            <svg><use xlink:href="./assets/sprite.svg#${icon}"></use></svg>
            <p id="forecastTemp">${temp} °C</p>
            <p id="forecastDesc">${desc}</p>
        `
        containerForecast.appendChild(card);
    });
}

const loadCity = () => {
    const city = JSON.parse(localStorage.getItem('city'));
    if (city) {
        searchCity(city[city.length - 1]);
    }
}

console.log(forecastMode)

loadCity();
