let weatherRequest = new XMLHttpRequest ();
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
// URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
// APIKEY: ###################
// Identificación de Preston: 5604473
let apiURLstring ='https://api.openweathermap.org/data/2.5/weather?id=3919968&units=imperial&APPID=c9fea9ecbd0ae38f8dae75b0e647e24d';
weatherRequest.open ('GET', apiURLstring, true);
weatherRequest.send ();


 weatherRequest.onload = function () {


 let weatherData = JSON.parse (weatherRequest.responseText);
 console.log (weatherData);
 
 var t=weatherData.main.temp;
 var Vnum= parseInt(t);
 document.getElementById ('temperature'). innerHTML=(((Vnum-32)/1.8).toFixed(2));
 temp = document.getElementById('cc-temp').innerHTML=weatherData.main.temp;
 loc = document.getElementById("location").innerHTML=weatherData.main.loc;

 icon = document.getElementById("icon");
 humidity = document.getElementById("humidity").innerHTML=weatherData.main.humidity;
 wind = document.getElementById("wind").innerHTML=weatherData.main.wind;
 direction = document.getElementById("direction").innerHTML=weatherData.main.direction;
 }


