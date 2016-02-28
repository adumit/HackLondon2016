var map;
var placeArray = [];

var countryArray = [{"CountryName":"Austria", "Array": [{"Cityname":"Vienna","lat":48.208174,"lon":16.373819},{"Cityname":"Salzburg","lat":47.809490,"lon":13.055010},{"Cityname":"Innsbruck","lat":47.269212,"lon":11.404102},{"Cityname":"Zell am See","lat":47.323520,"lon":12.796850},{"Cityname":"hallstatt","lat":47.562234,"lon":13.649262},{"Cityname":"linz","lat":48.306940,"lon":14.285830},{"Cityname":"Graz","lat":47.070714,"lon":15.439504},{"Cityname":"Seefeld","lat":47.330002,"lon":11.187774},{"Cityname":"Ischgl","lat":47.011845,"lon":10.288420}]}];

var latitude, longitude;
var cityValueArray = [];
var finalPlan = [];
var numDays;

var placeSearch, autocomplete;
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

function assignVariables(){
  latitude = autocomplete.getPlace().geometry.location.lat();
  longitude = autocomplete.getPlace().geometry.location.lng();
  numDays = document.getElementById('number-input').value;
  console.log("numDays = " + String(numDays));
  initialize(latitude, longitude);
  setTimeout(function(){
    planTrip(placeArray, autocomplete.getPlace().name, latitude, longitude, "Austria");
  }, 1000);
}

function rankCity(pArray) {
  var sum = 0;
  if (pArray.length <= 7) {
    for (var i in pArray) {
      sum += Math.pow(pArray[i].rating, 2);
    }
  }
  else {
    pArray.sort(function(a,b) {
      return b.rating - a.rating;
    });
    for (var i = 0; i <= 6; i++) {
      sum += Math.pow(pArray[i].rating, 2);
    }
  }
  return sum;
}

var placeArray2 = [];
var placeArray3 = [];
var placeArray4 = [];
var placeArray5 = [];
var placeArray6 = [];
var placeArray7 = [];
var placeArray8 = [];
var placeArray9 = [];
var placeArray10 = [];
var placeArray11 = [];
var allPlaceArray = [placeArray2, placeArray3, placeArray4, placeArray5, placeArray6, placeArray7, placeArray8, placeArray9, placeArray10, placeArray11]

function planTrip(placeArray, nameOfCity, lat, lon, country) {
  cityValueArray = [];
  filteredOriginCityArray = performFiltering(placeArray);
  cityNames = [];
  cArray = countryArray[0].Array;
  for (var city in cArray) {
    cityNames.push(cArray[city].Cityname);
  }
  if (cityNames.indexOf(nameOfCity) == -1)  {
    cityValueArray.push({"name": nameOfCity, "rank" : rankCity(filteredOriginCityArray), "currentDistance": 0.0});
  }
  setTimeout(function(){
    citiesMakeRequest(cArray, 2);
  }, 600*2);
  setTimeout(function(){
    citiesMakeRequest(cArray, 3);
  }, 600*3);
  setTimeout(function(){
    citiesMakeRequest(cArray, 4);
  }, 600*4);
  setTimeout(function(){
    citiesMakeRequest(cArray, 5);
  }, 600*5);
  setTimeout(function(){
    citiesMakeRequest(cArray, 6);
  }, 600*6);
  setTimeout(function(){
    citiesMakeRequest(cArray, 7);
  }, 600*7);
  setTimeout(function(){
    citiesMakeRequest(cArray, 8);
  }, 600*8);
  setTimeout(function(){
    citiesMakeRequest(cArray, 9);
  }, 600*9);
  setTimeout(function(){
    citiesMakeRequest(cArray, 10);
  }, 600*10);
  setTimeout(function() {
    planTripHelper(cArray, lat, lon);
    console.log(cityValueArray);
  }, 7000);
  setTimeout(function() {
    makeRoute(cityValueArray, performFiltering(placeArray), nameOfCity);
  }, 7500);
  setTimeout(function() {
    console.log(finalPlan);
  }, 8500);
}

function planTripHelper(cArray, lat, lon) {
  for (var whichCity in allPlaceArray) {
    if (allPlaceArray[whichCity].length > 0) {
      cityValueArray.push({"name": cArray[whichCity].Cityname, "rank": rankCity(performFiltering(allPlaceArray[whichCity])), "currentDistance": distCalc(lat, lon, cArray[whichCity].lat, cArray[whichCity].lon), "whichArray": whichCity});
    }
  }
}

function makeRoute(cityValArray, curArray, curCity) {
  if (finalPlan.length >= numDays) {
    return;
  }
  var currentArray = curArray.sort(function(a,b) {
      return b.rating - a.rating;
  });
  finalPlan.push(currentArray[0]);
  var curRankingValue;
  for (var city in cityValArray) {
    if (cityValArray[city].name == curCity) {
      cityValArray[city].rank -= 2.0*currentArray[0].rating;
      curRankingValue = cityValArray[city].rank;
      break;
    }
  }
  var condition = true;
  for (var altCity in cityValArray) {
    if (cityValArray[altCity].rank/Math.max(1.0, Math.sqrt(cityValArray[altCity].currentDistance)) > curRankingValue) {
      condition = false;
      finalPlan.push({"lat": undefined, "lon": undefined, "name": "Travel from " + curCity + " to " + cityValArray[altCity].name + "."});
      for (var rmCity in cityValArray) {
        if (cityValArray[rmCity].name == curCity) {
          cityValArray.splice(rmCity, 1);
          break;
        }
        else {
          cityValArray[rmCity].currentDistance = distCalc(cityValArray[altCity].lat, cityValArray[altCity].lon, cityValArray[rmCity].lat, cityValArray[rmCity].lon);
        }
      }
      makeRoute(cityValArray, performFiltering(allPlaceArray[cityValArray[altCity - 1].whichArray]), cityValArray[altCity - 1].name);
    }
  }
  if (condition || finalPlan.length >= numDays) {
    makeRoute(cityValArray, performFiltering(curArray.slice(1,curArray.length)), curCity);
  }
  else {
    return;
  }
}

function initialize(latitude, longitude) {
  
  var pos = new google.maps.LatLng(47.53747, -122.1160);
  var center = new google.maps.LatLng(47.54809, -122.1230);

  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: center,
    zoom: 12,
    streetViewControl: false,
    panControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  });
  makeRequest(latitude, longitude);

}

function makeRequest(lat, lon) {
  for (i = lat - 0.09; i <= lat + 0.09; i += 0.018) {
      for (j = lon - 0.09; j <= lon + 0.09; j += 0.018) {
        var newPos = new google.maps.LatLng(lat, lon);
        var request = {
            location: newPos,
            radius: 1000,
            type: ['landmark']
        };
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
      }
   }
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}

function citiesMakeRequest(arrayOfCities, whichFunc) {
  // Perform nearby search for the top 10 cities
  var pos = new google.maps.LatLng(47.53747, -122.1160);
  var center = new google.maps.LatLng(47.54809, -122.1230);
  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: center,
    zoom: 12,
    streetViewControl: false,
    panControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  });
  lat = arrayOfCities[whichFunc - 2].lat
  lon = arrayOfCities[whichFunc - 2].lon
  for (i = lat - 0.09; i <= lat + 0.09; i += 0.036) {
    for (j = lon - 0.09; j <= lon + 0.09; j += 0.036) {
      var newPos = new google.maps.LatLng(lat, lon);
      var request = {
          location: newPos,
          radius: 1000,
          type: ['landmark']
      };
      var service = new google.maps.places.PlacesService(map);
      switch(whichFunc) {
        case 2:
          service.nearbySearch(request, callback2);
          break;
        case 3:
          service.nearbySearch(request, callback3);
          break;
        case 4:
          service.nearbySearch(request, callback4);
          break;
        case 5:
          service.nearbySearch(request, callback5);
          break;
        case 6:
          service.nearbySearch(request, callback6);
          break;
        case 7:
          service.nearbySearch(request, callback7);
          break;
        case 8:
          service.nearbySearch(request, callback8);
          break;
        case 9:
          service.nearbySearch(request, callback9);
          break;
        case 10:
          service.nearbySearch(request, callback10);
          break;
        case 11:
          service.nearbySearch(request, callback11);
          break;
      }
    }
  }
}
function callback2(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray2.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback3(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray3.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback4(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray4.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback5(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray5.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback6(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray6.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback7(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray7.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback8(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray8.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback9(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray9.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback10(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray10.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}
function callback11(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      placeArray11.push({name: results[i].name, rating: results[i].rating,
      lat: results[i].geometry.location.lat(), lon: results[i].geometry.location.lng()});
    }
  }
}


function distCalc(lat1, lon1, lat2, lon2) {
  return Math.sqrt((Math.pow((lat1 - lat2), 2) + Math.pow((lon1 - lon2), 2)))
}

function performFiltering(pArray) {
  return getOnlyUnique(pArray.filter(filterPlaceArray)).filter(filterPlaces);
}


function filterPlaceArray(entry) {
  return entry.rating > 0;
}

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

function filterPlaces(entry) {
  if (entry.name.toLowerCase().contains("hotel")) {
    return false;
  }
  return true;
}

function getOnlyUnique(pArray) { 
  var unique = {};
  var distinct = [];
  for(var i in pArray){
    if(typeof(unique[pArray[i].name]) == "undefined"){
      distinct.push(pArray[i]);
    }
    unique[pArray[i].name] = 0;
  }
  return distinct;
}

