# Weather_app
Advanced Weather_app using Node.js Server (Express)

You will not submit any query to get your country temperature 
all Automatic with geo location and Advanced logic 
*  https://geolocation-db.com/
*  https://home.openweathermap.org/api_keys
*  https://classroom.udacity.com/



function performAction() {
  getWeather()
    .then((data) => {
      postData("/getweather", {
        temperature: data.main.temp,
        date: newDate,
        userResponse: fellings.value,
      });
      updateUI();
    })   
}
