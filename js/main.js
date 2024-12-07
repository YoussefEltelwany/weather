

let searchResult =document.getElementById('search-data');
let weatherapi ;




searchResult.addEventListener("input", function(){
    getWeather(searchResult.value)
    
})





async function getWeather(e="cairo") {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=229fe589b1834bb5836213452240612&q=${e}`);
    if(response.ok){
        let data = await response.json();
         weatherapi = data
         console.log(weatherapi)
    }
    displayWeather()
  }
  getWeather();


  function displayWeather() {
   
     let   cartona = `
         <div class="col-md-4 pb-5 " style="background-color: #323544;">
              <div class="row p-2" style="background-color: #2D303D;">
                <div class="col-6">
                  <span style="color: #BFBCC4;">${weatherapi.location.name}</span>
                </div>
                <div class="col-6">
                  <span  style="color: #BFBCC4;">${weatherapi.location.localtime}</span>
                </div>
              </div>
              <h2  style="color: #BFBCC4;" class="pt-4">today</h2>
              <span class="text-white degree">${weatherapi.current.temp_c}℃</span>
              <div>
                <img src="https:${weatherapi.current.condition.icon}" alt="night">
              </div>
              
              <span class="clear fw-bold">${weatherapi.current.condition.text}</span>
              <div class="d-flex justify-content-between align-items-center pt-3 pe-5" style="color: #BFBCC4;">
                <div>
                  <img src="img/icon-umberella.png" alt="icon-umberella">
                <span>${weatherapi.forecast.forecastday[0].day.avghumidity}%</span>
                </div>
                <div>
                  <img src="img/icon-wind.png" alt="icon-wind">
                <span>${weatherapi.forecast.forecastday[0].day.avgvis_km}km/h</span>
                </div>
                <div>
                  <img src="img/icon-compass.png" alt="icon-compass">
                <span>East</span>
                </div>
                
              </div>
            </div>
            <div class="col-md-4 pb-5 " style="background-color: #262936; text-align: center;">
              <div class="row p-2" style="background-color: #222530;">
                  <span style="color: #BFBCC4; text-align: center;">tomorrow</span>
              </div>
              <div class="p-4">
                <img src="https:${weatherapi.forecast.forecastday[0].day.condition.icon}" alt="forecast">
              </div>
              <span class="text-white fw-bold fs-2">${weatherapi.forecast.forecastday[0].day.avgtemp_c}℃</span>
              <span class=" d-block" style="color: #BFBCC4;">${weatherapi.forecast.forecastday[0].day.mintemp_c}℃</span>
              <span class="clear d-block pt-3 fw-bold">${weatherapi.forecast.forecastday[0].day.condition.text}</span>
              </div>
            <div class="col-md-4 pb-5 " style="background-color: #323544; text-align: center;">
              <div class="row p-2" style="background-color: #2D303D;">

                  <span style="color: #BFBCC4; text-align: center;">overmorrow</span>
              </div>
              <div class="p-4">
                <img src="https:${weatherapi.forecast.forecastday[0].day.condition.icon}" alt="Sunny">
              </div>
              <span class="text-white fw-bold fs-2">${weatherapi.forecast.forecastday[0].day.maxtemp_c}℃</span>
              <span class="d-block" style="color: #BFBCC4;">${weatherapi.forecast.forecastday[0].day.mintemp_c}℃</span>
              <span class="clear d-block pt-3 fw-bold" >${weatherapi.forecast.forecastday[0].day.condition.text}</span>
              </div>
        `

    document.getElementById("showData").innerHTML = cartona ;
  }

