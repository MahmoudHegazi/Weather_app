/* Global Variables */
let wether = 'http://api.openweathermap.org/data/2.5/weather?id=3245&appid=db6608063a9d72758e29ea323da07bd1';
//link for auto geo
let geo = 'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572';

let tracker = [];
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let settings = { method: "Get" };

//geo 
function xd() {
let tx = tracker[0];
fetch(tx, settings)
    .then(res => res.json())
    .then((json) => {
		//our json object has 1 property which is first
        alert(json.main['temp']);
    });
};


function myFunction() {
  setTimeout(xd, 3000);
}



fetch(geo, settings)
    .then(res => res.json())
    .then((json) => {
		//our json object has 1 property which is first
        let x = "http://api.openweathermap.org/data/2.5/weather?lat="+json.latitude+"&lon="+json.longitude+"&appid=db6608063a9d72758e29ea323da07bd1";
        tracker.push(x);
        alert(tracker[0]);
        myFunction();
        //magic.push(json.longitude);

});





// fetch url note we used fetch-node














// your code goes here

//	postData(wether);
