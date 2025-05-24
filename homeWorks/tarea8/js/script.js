const $input = document.querySelector(".search-box input");
const btnSearch = document.querySelector('.feather-search')
const apiKey = '4057478c097249cccb7fefc971c79fe6';
const $city = document.querySelector('#city');
const $temperature = document.querySelector('#temperature');
const $low = document.querySelector('#low');
const $high = document.querySelector('#high');
const $description = document.querySelector('#description');

const chageTemperature = document.querySelector('.temperatures')
const celcius = chageTemperature.querySelector('.celcius');
const fahrenheit = chageTemperature.querySelector('.fahrenheit');


chageTemperature.addEventListener('click', ()=> {
    celcius.classList.toggle('active');
    fahrenheit.classList.toggle('active');

    if (celcius.classList.contains('active')){
        $temperature.innerHTML = `${((294.83) - 273.15).toFixed(0)}°`;
        $low.innerHTML = `${((293.74) - 273.15).toFixed(0)}°`;
        $high.innerHTML = `${((296.28) - 273.15).toFixed(0)}°`;
    }else{
        $temperature.innerHTML = `${(((294.83) - 273.15)* 9/5 + 32).toFixed(0)}°`;
        $low.innerHTML = `${(((293.74) - 273.15)* 9/5 + 32).toFixed(0)}°`;
        $high.innerHTML = `${(((296.28) - 273.15)* 9/5 + 32).toFixed(0)}°`;
    }
})


btnSearch.addEventListener('click', inputFocus)

$city.addEventListener('click', inputFocus)

$input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchCity($input.value)
        $input.value = '';
        $input.style.display = 'none';
        $city.style.display = 'block';
    }
})


const searchCity =  async (city = 'santo domingo') => {
    try {
        // const $results = document.querySelector(".results");
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        $city.innerHTML = `${data.name}, <span id="country">${data.sys.country}</span>`;
        if (celcius.classList.contains('active')){
            $temperature.innerHTML = `${((data.main.temp) - 273.15).toFixed(0)}°`;
            $low.innerHTML = `${((data.main.temp_min) - 273.15).toFixed(0)}°`;
            $high.innerHTML = `${((data.main.temp_max) - 273.15).toFixed(0)}°`;
        }else{
            $temperature.innerHTML = `${(((data.main.temp) - 273.15)* 9/5 + 32).toFixed(0)}°`;
            $low.innerHTML = `${(((data.main.temp_min) - 273.15)* 9/5 + 32).toFixed(0)}°`;
            $high.innerHTML = `${(((data.main.temp_max) - 273.15)* 9/5 + 32).toFixed(0)}°`;
        }
        
        $description.innerHTML = data.weather[0].description;
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
// searchCity("madrid")
    

function inputFocus() {
    $input.style.display = 'block';
    $city.style.display = 'none';
    $input.focus();
}