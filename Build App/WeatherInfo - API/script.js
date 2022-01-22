// Current
let currentIMG = document.querySelector(".current-img");
let currentLocation = document.querySelector(".current-location");
let currentDate = document.querySelector('.current-date');
let currentDesc = document.querySelectorAll(".current-desc");

// Day 1
let day1Date = document.querySelector('.day1-date');
let day1IMG = document.querySelector(".day1-img");
let day1Desc = document.querySelectorAll(".day1-desc");

// Day 2
let day2Date = document.querySelector('.day2-date');
let day2IMG = document.querySelector(".day2-img");
let day2Desc = document.querySelectorAll(".day2-desc");

// Day 3
let day3Date = document.querySelector('.day3-date');
let day3IMG = document.querySelector(".day3-img");
let day3Desc = document.querySelectorAll(".day3-desc");



let manila =
  "http://api.weatherapi.com/v1/forecast.json?key=c806d1c957904ce9b4d71346222201&q=Manila&days=10&aqi=no&alerts=no";

fetchWeather = async (APIurl) => {
  try {
    const res = await fetch(APIurl); // fetching api url
    const data = await res.json(); // convert JSON to object
    return data; // return data objects
  } catch (error) {
    console.log("Fetch Failed");
    console.log(error.message);
  }
};

let displayCurrent = (current, location) => {

  // Current
  currentIMG.src = current.condition.icon;
  currentLocation.textContent = `${location.region},${location.country}`;
  currentDate.textContent = location.localtime;
  currentDesc[0].textContent = current.condition.text;
  currentDesc[1].textContent = `Celsius: ${current.temp_c}`;
  currentDesc[2].textContent = `Wind: ${current.wind_kph} kph`;
  currentDesc[3].textContent = `Humidity: ${current.humidity}`;

};

let displayDay1 = (day1) => {
  let day = day1.day;
  day1IMG.src = day.condition.icon;
day1Date.textContent = day1.date;
day1Desc[0].textContent = day.condition.text;
day1Desc[1].textContent = `Celsius: ${day.maxtemp_c}`;
day1Desc[2].textContent = `Wind: ${day.maxwind_kph} kph`;
day1Desc[3].textContent = `Humidity: ${day.avghumidity}`;
}

let displayDay2 = (day2) => {
  let day = day2.day;
  day2IMG.src = day.condition.icon;
day2Date.textContent = day2.date;
day2Desc[0].textContent = day.condition.text;
day2Desc[1].textContent = `Celsius: ${day.maxtemp_c}`;
day2Desc[2].textContent = `Wind: ${day.maxwind_kph} kph`;
day2Desc[3].textContent = `Humidity: ${day.avghumidity}`;
}


let displayDay3 = (day3) => {
  let day = day3.day;
  day3IMG.src = day.condition.icon;
day3Date.textContent = day3.date;
day3Desc[0].textContent = day.condition.text;
day3Desc[1].textContent = `Celsius: ${day.maxtemp_c}`;
day3Desc[2].textContent = `Wind: ${day.maxwind_kph} kph`;
day3Desc[3].textContent = `Humidity: ${day.avghumidity}`;
}


fetchWeather(manila).then((data) => {
  displayCurrent(data.current, data.location);
  displayDay1(data.forecast.forecastday[0]);
  displayDay2(data.forecast.forecastday[1]);
  displayDay3(data.forecast.forecastday[2]);
});
