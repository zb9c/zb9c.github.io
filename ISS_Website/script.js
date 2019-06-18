console.log("STarting");

const myMap = L.map('mapid').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(myMap);

let userLatitude = 0;
let userLongitude = 0;
let issLatitude = 0;
let issLongitude = 0;

function getISSLocation(){
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson){
        console.log(JSON.stringify(myJson));
        document.getElementById('thisClass').innerHTML = "Satalite: "+ myJson['name'];
        document.getElementById('lat').innerHTML = "Latitude: " + myJson['latitude'];
        document.getElementById('lon').innerHTML = "Longitude: " + myJson['longitude'];
        setTimeout(function(){
            L.marker([myJson['latitude'], myJson['longitude']]).addTo(myMap);
         },5000);
        issLatitude = Math.round(myJson['latitude']);
        issLongitude = Math.round(myJson['longitude']);
        //console.log(issLatitude, issLongitude);
    })
}
x = document.getElementById("userLocation");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    console.log("User Lat: " + position.coords.latitude);
    console.log("User Lon: " + position.coords.longitude);
    document.getElementById('userLat').innerHTML = "User Latitude: " + position.coords.latitude;
    document.getElementById('userLon').innerHTML = "User Longitude: " + position.coords.longitude;
    setTimeout(function(){
        L.marker([position.coords.latitude, position.coords.longitude]).addTo(myMap);
    },5000);
    userLongitude = Math.round(position.coords.longitude);
    userLatitude = Math.round(position.coords.latitude);
}

//get User Loaction
getLocation();

//Get ISS space station location every 10 seconds
setInterval(function(){ 
    getISSLocation();
}, 10000);




