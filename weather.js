//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
let allData
let search = document.querySelector("#search input")
let searchBtn = document.querySelector("#btn")
let city = ""
let url
let cityName = document.querySelector("#cityName")
let date = document.querySelector("#date")
let hideDiv = document.querySelector("#hide")
let currDate = new Date()
let currDate1 = currDate.toUTCString()
let currentDate = `${currDate1}`
let weather = document.querySelector("#weather")
let clouds = document.querySelector("#clouds")
let minTemp = document.querySelector("#min")
let maxTemp = document.querySelector("#max")
searchBtn.addEventListener("click",(()=>{
  city = search.value
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d1af11863e98978623a60680a4c73960`
  console.log(url)
  getData()
}))
async function getData() {
  try {
    hideDiv.style.visibility = "visible"
    let res = await axios.get(url);
    allData = res.data
    console.log(res.data);
    cityName.textContent = city
    date.innerText = "(GMT Date)  "+ currentDate.slice(0, 16)
    let kelvinWeather = allData.main.temp
    let celciusWeather = Math.floor(kelvinWeather-273.15)
    weather.textContent = `${celciusWeather}°C`
    clouds.textContent = allData.weather["0"].description
    minTemp.textContent = `${Math.floor(allData.main.temp_min - 273.15)}°C / `
    maxTemp.textContent = Math.floor(allData.main.temp_max - 273.15) + "°C"
    // console.log(allData.main.temp)
  } catch (error) {
    console.log(`Error: ${error}`);
    if (city.length==0){
      cityName.textContent = ""
      date.textContent = ""
      clouds.textContent = ""
      maxTemp.textContent = ""
      minTemp.textContent = ""
      weather.textContent = "Enter a City Name"
    }else{
      cityName.textContent = ""
      date.textContent = ""
      clouds.textContent = ""
      maxTemp.textContent = ""
      minTemp.textContent = ""
      weather.textContent = "Invalid City"
    }
  }
}
console.log(currDate1)