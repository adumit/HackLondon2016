var map;
var placeArray = [];

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
  for (i = lat - 0.3; i <= lat + 0.3; i += 0.05) {
      for (j = lon - 0.3; j <= lon + 0.3; j += 0.05) {
        var newPos = new google.maps.LatLng(lat, lon);
        var request = {
            location: newPos,
            radius: 3000,
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
      <!-- getPlace(results[i]); -->
    }
  }
}

function getPlace(place) {
  if (place.rating > 0) {
    placesList = document.getElementById('results');
    placesList.innerHTML += '<p>' + place.name + " " + place.rating + " " + place.geometry.location + '</p>';
  }
}

initialize(51.5033, -0.1197);

function filterPlaceArray(entry) {
  return entry.rating > 0;
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

setTimeout(function(){
  planTrip(placeArray)
}, 1000);

function planTrip(placeArray) {
  placeArrayFiltered = placeArray.filter(filterPlaceArray);
  placeArrayFiltered2 = getOnlyUnique(placeArrayFiltered);
  console.log(placeArrayFiltered2);
}
