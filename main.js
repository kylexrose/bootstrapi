const dogURL = 'https://dog.ceo/api/breeds/image/random';
const dogPic = document.querySelector("#dog")

document.querySelector("#callDog").addEventListener('click', () => {
    fetch(dogURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dogPic.src = data.message;
        })
})

document.querySelector("#searchWeather").addEventListener('click', () =>{
    const city = document.querySelector("#city").value;
    const weatherURL = `https://goweather.herokuapp.com/weather/${city}`

    fetch(weatherURL)
        .then((res) => res.json())
        .then((data) => {
            if (data.message === "NOT_FOUND"){
                alert('Could not locate city')
                return;
            }
            let temp = data.temperature;
            let wind = data.wind;
            let description = data.description;

            let element = `<p>The temperature in ${city} is ${temp}.</p>
            <p>The wind speed in ${city} is currently ${wind}.</p>
            <p>It is currently ${description} in ${city} today.</p>`;

            document.querySelector("#app").innerHTML = element;



        })
})

document.addEventListener('DOMContentLoaded', () => {
    const btcURL = 'https://api.coinlore.net/api/ticker/?id=90';
    fetch (btcURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let price = data[0].price_usd;
            formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.querySelector('#bitcoin p').innerHTML += `$${formattedPrice}`;
        })
})