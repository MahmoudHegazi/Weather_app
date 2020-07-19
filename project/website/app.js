/* Global Variables */
let wether = 'http://api.openweathermap.org/data/2.5/weather?id=3245&appid=db6608063a9d72758e29ea323da07bd1';
let geo = 'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let settings = { method: "Get" };


// fetch url note we used fetch-node
fetch(wether, settings)
    .then(res => res.json())
    .then((json) => {
		//our json object has 1 property which is first
        alert(json.main['temp']);
    });


//geo 
fetch(geo, settings)
    .then(res => res.json())
    .then((json) => {
		//our json object has 1 property which is first
        alert(json.country_name);
    });



// your code goes here

//	postData(wether);
