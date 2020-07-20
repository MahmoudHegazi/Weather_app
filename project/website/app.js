/* Global Variables */
/* auto */
const acountry = document.getElementById("auto_country");
const acity = document.getElementById("auto_city");
const atemp = document.getElementById("auto_temp");

/* normal global */
const mytemp = document.getElementById("temp");
const mydate = document.getElementById("date");
const entery = document.getElementById("content");
const img = document.getElementById("mimage");
let sunny  = "msun.gif";
let msunny = "sun.gif";
let mcold = "vcold.gif";
let vcold = "cold.gif";

let wether = 'http://api.openweathermap.org/data/2.5/weather?id=3245&appid=db6608063a9d72758e29ea323da07bd1';
//link for auto geo
let geo = 'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let settings = { method: "Get" };

//geo 
function xd(url, country, city) {

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        atemp.innerText = json.main['temp'];
        acountry.innerText = country;
        acity.innerText = city;
     if (json.main['temp'] >= 30) {
         img.src = sunny;
    } 
    if (json.main['temp'] >= 16) {
         img.src = msunny;
    } 
    
    if (json.main['temp'] >= 0) {
         img.src = mcold;
    } 
    if (json.main['temp'] < 0) {
         img.src = vcold;
    }
    });
};



fetch(geo, settings)
    .then(res => res.json())
    .then((json) => {
        let x = "http://api.openweathermap.org/data/2.5/weather?lat="+json.latitude+"&lon="+json.longitude+"&appid=db6608063a9d72758e29ea323da07bd1";
        let country = json.country_name;
        let city = json.city;
        xd(x, country, city);
});

