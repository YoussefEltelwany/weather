

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
                <div class="col-9">
                  <span style="color: #BFBCC4;">${weatherapi.location.name}</span>
                </div>
                <div class="col-3">
                  <span  style="color: #BFBCC4;">${weatherapi.date}</span>
                </div>
              </div>
              <h2  style="color: #BFBCC4;" class="pt-4"></h2>
              <span class="text-white degree">${weatherapi.current.temp_c}℃</span>
              <div>
                <img src="img/113.png" alt="night">
              </div>
              
              <span class="clear fw-bold"></span>
              <div class="d-flex justify-content-between align-items-center pt-3 pe-5" style="color: #BFBCC4;">
                <div>
                  <img src="img/icon-umberella.png" alt="icon-umberella">
                <span>20%</span>
                </div>
                <div>
                  <img src="img/icon-wind.png" alt="icon-wind">
                <span>18km/h</span>
                </div>
                <div>
                  <img src="img/icon-compass.png" alt="icon-compass">
                <span>East</span>
                </div>
                
              </div>
            </div>
            <div class="col-md-4 pb-5 " style="background-color: #262936; text-align: center;">
              <div class="row p-2" style="background-color: #222530;">
                  <span style="color: #BFBCC4; text-align: center;"></span>
              </div>
              <div class="p-4">
                <img src="img/116.png" alt="forecast">
              </div>
              <span class="text-white fw-bold fs-2">23.9℃</span>
              <span class=" d-block" style="color: #BFBCC4;">23.9℃</span>
              <span class="clear d-block pt-3 fw-bold">Partly Cloudy</span>
              </div>
            <div class="col-md-4 pb-5 " style="background-color: #323544; text-align: center;">
              <div class="row p-2" style="background-color: #2D303D;">

                  <span style="color: #BFBCC4; text-align: center;"></span>
              </div>
              <div class="p-4">
                <img src="img/113 (1).png" alt="Sunny">
              </div>
              <span class="text-white fw-bold fs-2">23.9℃</span>
              <span class="d-block" style="color: #BFBCC4;">14.8℃</span>
              <span class="clear d-block pt-3 fw-bold" >Sunny</span>
              </div>
        `

    document.getElementById("showData").innerHTML = cartona ;
  }

