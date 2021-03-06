var map;
var placeArray = [];

var countryArray = [{"CountryName":"Austria","Array":[{"Cityname":"Vienna","lat":48.208174,"lon":16.373819},{"Cityname":"Salzburg","lat":47.809490,"lon":13.055010},{"Cityname":"Innsbruck","lat":47.269212,"lon":11.404102},{"Cityname":"Zell am See","lat":47.323520,"lon":12.796850},{"Cityname":"hallstatt","lat":47.562234,"lon":13.649262},{"Cityname":"linz","lat":48.306940,"lon":14.285830},{"Cityname":"Graz","lat":47.070714,"lon":15.439504},{"Cityname":"Seefeld","lat":47.330002,"lon":11.187774},{"Cityname":"Bregenz","lat":47.500750,"lon":9.742310},{"Cityname":"Ischgl","lat":47.011845,"lon":10.288420}]},
{"CountryName":"Belgium","Array":[{"Cityname":"Bruges","lat":51.209348,"lon":3.224700},{"Cityname":"Brussels","lat":50.850340,"lon":4.351710},{"Cityname":"Antwerp","lat":51.219448,"lon":4.402464},{"Cityname":"Ghent","lat":51.054342,"lon":3.717424},{"Cityname":"Ypres","lat":50.849227,"lon":2.877939},{"Cityname":"Ostend","lat":51.215430,"lon":2.928656},{"Cityname":"Dinant","lat":50.260494,"lon":4.912746},{"Cityname":"Bastogne","lat":50.000506,"lon":5.715280},{"Cityname":"Namur","lat":50.467388,"lon":4.871985},{"Cityname":"Liege","lat":50.632557,"lon":5.579666},{"Cityname":"Tournai","lat":50.605648,"lon":3.387934}]},
{"CountryName":"Bulgaria","Array":[{"Cityname":"Sofia","lat":42.697708,"lon":23.321868},{"Cityname":"Plovdiv","lat":42.135408,"lon":24.745290},{"Cityname":"Sunny Beach","lat":42.695152,"lon":27.710421},{"Cityname":"varna","lat":43.214050,"lon":27.914733},{"Cityname":"Bansko","lat":41.840424,"lon":23.485653},{"Cityname":"Burgas","lat":42.504793,"lon":27.462636},{"Cityname":"nesebar","lat":42.660137,"lon":27.720559},{"Cityname":"Sozopol","lat":42.417263,"lon":27.696175},{"Cityname":"Albena","lat":43.367819,"lon":28.080069},{"Cityname":"veliko tarnovo","lat":43.075674,"lon":25.617151}]},
{"CountryName":"Croatia","Array":[{"Cityname":"Dubrovnik","lat":42.650661,"lon":18.094424},{"Cityname":"zagreb","lat":45.815011,"lon":15.981919},{"Cityname":"Split","lat":43.508132,"lon":16.440193},{"Cityname":"Plitvice Lakes National Park","lat":44.865397,"lon":15.582012},{"Cityname":"zadar","lat":44.119371,"lon":15.231365},{"Cityname":"pula","lat":44.866623,"lon":13.849579},{"Cityname":"Hvar","lat":43.172948,"lon":16.441114},{"Cityname":"rovinj","lat":45.081166,"lon":13.638707},{"Cityname":"Krka national park","lat":43.866602,"lon":15.972484},{"Cityname":"Trogir","lat":43.866602,"lon":15.972484}]},
{"CountryName":"Republic of Cyprus","Array":[{"Cityname":"Paphos","lat":34.772013,"lon":32.429737},{"Cityname":"Ayia napa","lat":34.992284,"lon":34.014011},{"Cityname":"Larnaca","lat":34.900253,"lon":33.623172},{"Cityname":"Limassol","lat":34.707130,"lon":33.022617},{"Cityname":"nicosia","lat":35.040016,"lon":33.123905},{"Cityname":"protaras","lat":35.001180,"lon":34.047435},{"Cityname":"Kyrenia","lat":35.299194,"lon":33.236325},{"Cityname":"famagusta","lat":35.285702,"lon":33.841129},{"Cityname":"polis","lat":35.032173,"lon":32.418411},{"Cityname":"pissouri","lat":34.664437,"lon":32.706843}]},
{"CountryName":"Czech Republic","Array":[{"Cityname":"Prague","lat":50.075538,"lon":14.437800},{"Cityname":"cesky krumlov","lat":48.812735,"lon":14.317466},{"Cityname":"karlvy vary","lat":50.231852,"lon":12.871962},{"Cityname":"brno","lat":49.195060,"lon":16.606837},{"Cityname":"kutna hora","lat":49.952431,"lon":15.268654},{"Cityname":"marianske lazne","lat":49.964599,"lon":12.701198},{"Cityname":"lusatian neisse","lat":51.395734,"lon":14.871732},{"Cityname":"telc","lat":49.183238,"lon":15.454273},{"Cityname":"sumava national park","lat":48.972027,"lon":13.633135},{"Cityname":"south moravian region","lat":48.954453,"lon":16.767690}]},
{"CountryName":"Denmark","Array":[{"Cityname":"copenhagen","lat":55.676097,"lon":12.568337},{"Cityname":"billund","lat":55.728449,"lon":9.112366},{"Cityname":"bornholm","lat":55.160428,"lon":14.866884},{"Cityname":"jutland","lat":55.629550,"lon":9.201050},{"Cityname":"aero","lat":54.858903,"lon":10.387481},{"Cityname":"skagen","lat":57.725004,"lon":10.579186},{"Cityname":"aarhus","lat":56.162939,"lon":10.203921},{"Cityname":"odense","lat":55.403756,"lon":10.402370},{"Cityname":"aalborg","lat":57.048820,"lon":9.921747},{"Cityname":"zealand","lat":55.463252,"lon":11.721498}]},
{"CountryName":"Estonia","Array":[{"Cityname":"tallinn","lat":59.436961,"lon":24.753575},{"Cityname":"saaremaa","lat":58.484972,"lon":22.613641},{"Cityname":"lahemaa national Park","lat":59.545504,"lon":25.802855},{"Cityname":"parnu","lat":58.385808,"lon":24.496577},{"Cityname":"soomaa national park","lat":58.488793,"lon":24.982437},{"Cityname":"tartu","lat":58.377625,"lon":26.729006},{"Cityname":"matsalu national park","lat":58.756222,"lon":23.482761},{"Cityname":"narva","lat":59.379680,"lon":28.179133},{"Cityname":"kuressaare","lat":58.252923,"lon":22.485041},{"Cityname":"Paldiski","lat":59.352875,"lon":24.055161}]},
{"CountryName":"Finland","Array":[{"Cityname":"helsinki","lat":60.169856,"lon":24.938379},{"Cityname":"rovaniemi","lat":66.503948,"lon":25.729391},{"Cityname":"ivalo","lat":68.657642,"lon":27.539706},{"Cityname":"saariselka","lat":68.419664,"lon":27.410003},{"Cityname":"turku","lat":60.451813,"lon":22.266630},{"Cityname":"tampere","lat":61.497752,"lon":23.760954},{"Cityname":"porvoo","lat":60.393192,"lon":25.665274},{"Cityname":"savonlinna","lat":61.867973,"lon":28.886384},{"Cityname":"kuusamo","lat":65.964588,"lon":29.188665},{"Cityname":"kittila","lat":67.650732,"lon":24.915820}]},
{"CountryName":"France","Array":[{"Cityname":"Paris","lat":48.856614,"lon":2.352222},{"Cityname":"Nice","lat":43.710173,"lon":7.261953},{"Cityname":"marseille","lat":43.296482,"lon":5.369780},{"Cityname":"bordeaux","lat":44.837789,"lon":-0.579180},{"Cityname":"Strasbourg","lat":48.573405,"lon":7.752111},{"Cityname":"Burgundy","lat":47.052505,"lon":4.383721},{"Cityname":"Avingnon","lat":43.949317,"lon":4.805528},{"Cityname":"chamonix","lat":45.923697,"lon":6.869433},{"Cityname":"Lyon","lat":45.764043,"lon":4.835659},{"Cityname":"Dijon","lat":47.322047,"lon":5.041480}]},
{"CountryName":"Germany","Array":[{"Cityname":"Berlin","lat":52.520007,"lon":13.404954},{"Cityname":"Frankfurt","lat":50.110922,"lon":8.682127},{"Cityname":"Munich","lat":48.135125,"lon":11.581981},{"Cityname":"hamburg","lat":53.551085,"lon":9.993682},{"Cityname":"nuremberg","lat":49.452030,"lon":11.076750},{"Cityname":"heidelberg","lat":49.398752,"lon":8.672434},{"Cityname":"dresden","lat":51.050409,"lon":13.737262},{"Cityname":"cologne","lat":50.937531,"lon":6.960279},{"Cityname":"dusseldorf","lat":51.227741,"lon":6.773456},{"Cityname":"Garmisch-partenkirchen","lat":47.491695,"lon":11.095498}]},
{"CountryName":"Greece","Array":[{"Cityname":"Athens","lat":37.983917,"lon":23.729360},{"Cityname":"Santorini","lat":36.393156,"lon":25.461509},{"Cityname":"Rhodes","lat":36.434963,"lon":28.217483},{"Cityname":"Kos","lat":36.891506,"lon":27.287723},{"Cityname":"zakynthos island","lat":37.788160,"lon":20.898827},{"Cityname":"thessalonki","lat":40.640063,"lon":22.944419},{"Cityname":"heraklion","lat":35.338735,"lon":25.144213},{"Cityname":"naxos","lat":37.102103,"lon":25.376114},{"Cityname":"chania","lat":35.513830,"lon":24.018037},{"Cityname":"Delphi","lat":38.480057,"lon":22.494062}]},
{"CountryName":"Hungary","Array":[{"Cityname":"Budapest","lat":47.497912,"lon":19.040235},{"Cityname":"Lake Balaton","lat":46.830268,"lon":17.734044},{"Cityname":"Szentendre","lat":47.679534,"lon":19.066860},{"Cityname":"Siofok","lat":46.909060,"lon":18.074624},{"Cityname":"Hevis","lat":46.790286,"lon":17.186694},{"Cityname":"Eger","lat":47.902535,"lon":20.377228},{"Cityname":"Sopron","lat":47.681662,"lon":16.584480},{"Cityname":"Esztergom","lat":47.788395,"lon":18.743445},{"Cityname":"Keszthely","lat":46.765472,"lon":17.247955},{"Cityname":"Visegrad","lat":47.782969,"lon":47.782969}]},
{"CountryName":"Ireland","Array":[{"Cityname":"Dublin","lat":53.349805,"lon":-6.260310},{"Cityname":"galway","lat":53.270668,"lon":-9.056791},{"Cityname":"killarney","lat":52.059935,"lon":-9.504427},{"Cityname":"cork","lat":51.896892,"lon":-8.486316},{"Cityname":"kilkenny","lat":52.654145,"lon":-7.244788}]},
{"CountryName":"Italy","Array":[{"Cityname":"rome","lat":41.902783,"lon":12.496366},{"Cityname":"venice","lat":45.440847,"lon":12.315515},{"Cityname":"florence","lat":43.769560,"lon":11.255814},{"Cityname":"milan","lat":45.465422,"lon":9.185924},{"Cityname":"naples Italy","lat":40.851775,"lon":14.268124},{"Cityname":"verona","lat":45.438384,"lon":10.991622},{"Cityname":"pisa","lat":43.722839,"lon":10.401689},{"Cityname":"turin","lat":45.070312,"lon":7.686856},{"Cityname":"palermo","lat":38.115688,"lon":13.361267},{"Cityname":"como","lat":45.808060,"lon":9.085176}]},
{"CountryName":"Latvia","Array":[{"Cityname":"riga","lat":56.949649,"lon":24.105186},{"Cityname":"jurmala","lat":56.947079,"lon":23.616849},{"Cityname":"liepaja","lat":56.504668,"lon":21.010806}]},
{"CountryName":"Lithuania","Array":[{"Cityname":"vilnius","lat":54.687156,"lon":25.279651},{"Cityname":"klaipeda","lat":55.703295,"lon":21.144279},{"Cityname":"palanga","lat":55.920198,"lon":21.067761}]},
{"CountryName":"Luxembourg","Array":[{"Cityname":"luxemburgh","lat":49.815273,"lon":6.129583}]},
{"CountryName":"Malta","Array":[{"Cityname":"valleta","lat":35.898908,"lon":14.514553},{"Cityname":"gozo","lat":36.044300,"lon":14.251222},{"Cityname":"Malta","lat":35.937496,"lon":14.375416}]},
{"CountryName":"Netherlands","Array":[{"Cityname":"amsterdam","lat":52.370216,"lon":4.895168},{"Cityname":"rotterdam","lat":51.924420,"lon":4.477733},{"Cityname":"hague","lat":52.070498,"lon":4.300700},{"Cityname":"maastricht","lat":50.851368,"lon":5.690973},{"Cityname":"utrecht","lat":52.090737,"lon":5.121420},{"Cityname":"eindhoven","lat":51.441642,"lon":5.469722}]},
{"CountryName":"Poland","Array":[{"Cityname":"krakow","lat":50.064650,"lon":19.944980},{"Cityname":"warsaw","lat":52.229676,"lon":21.012229},{"Cityname":"poznan","lat":52.406374,"lon":16.925168}]},
{"CountryName":"Portugal","Array":[{"Cityname":"lisbon","lat":38.722252,"lon":-9.139337},{"Cityname":"porto","lat":41.157944,"lon":-8.629105},{"Cityname":"algarve","lat":37.017954,"lon":-7.930834}]},
{"CountryName":"Romania","Array":[{"Cityname":"Bucharest","lat":44.426767,"lon":26.102538}]},
{"CountryName":"Slovakia","Array":[{"Cityname":"Bratislava","lat":48.148596,"lon":17.107748}]},
{"CountryName":"Slovenia","Array":[{"Cityname":"Ljubliana","lat":46.056947,"lon":14.505751}]},
{"CountryName":"Spain","Array":[{"Cityname":"Barcelona","lat":41.385064,"lon":2.173403},{"Cityname":"Granada","lat":37.177336,"lon":-3.598557},{"Cityname":"Madrid","lat":40.416775,"lon":-3.703790},{"Cityname":"Valencia","lat":39.469907,"lon":-0.376288},{"Cityname":"Seville","lat":37.389092,"lon":-5.984459},{"Cityname":"Ibiza","lat":38.906734,"lon":1.420598},{"Cityname":"majorca","lat":39.695263,"lon":3.017571},{"Cityname":"malaga","lat":36.721261,"lon":-4.421266},{"Cityname":"lanzarote","lat":29.046854,"lon":-13.589973},{"Cityname":"bilbao","lat":43.263013,"lon":-2.934985}]},
{"CountryName":"UK","Array":[{"Cityname":"London","lat":51.507351,"lon":-0.127758},{"Cityname":"Edinburgh","lat":55.953252,"lon":-3.188267},{"Cityname":"Liverpool","lat":53.408371,"lon":-2.991573},{"Cityname":"belfast","lat":54.597285,"lon":-5.930120},{"Cityname":"bath","lat":51.375801,"lon":-2.359904},{"Cityname":"manchester","lat":53.480759,"lon":-2.242631},{"Cityname":"york","lat":53.959965,"lon":-1.087298},{"Cityname":"glasgow","lat":55.864237,"lon":-4.251806},{"Cityname":"birmingham uk","lat":52.486243,"lon":-1.890401},{"Cityname":"oxford","lat":51.752021,"lon":-1.257726}]},
{"CountryName":"Norway","Array":[{"Cityname":"oslo","lat":59.913869,"lon":10.752245},{"Cityname":"bergen","lat":60.391263,"lon":5.322054},{"Cityname":"stavanger","lat":58.969976,"lon":5.733107},{"Cityname":"alesund","lat":62.472228,"lon":6.149482},{"Cityname":"alta","lat":69.968738,"lon":23.271550}]},
{"CountryName":"Switzerland","Array":[{"Cityname":"Geneva","lat":46.204391,"lon":6.143158},{"Cityname":"zurich","lat":47.376887,"lon":8.541694},{"Cityname":"bern","lat":46.947974,"lon":7.447447},{"Cityname":"lucerne","lat":47.050168,"lon":8.309307},{"Cityname":"lugano","lat":46.003678,"lon":8.951052}]}];

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
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(35.0, -11.0),
    new google.maps.LatLng(72.0, 29.0));
  autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')), 
    {types: ['geocode']});
  autocomplete.setBounds(defaultBounds);
  console.log(autocomplete.getBounds());
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
    });
  }
}

function getCountry(latitude, longitude) {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 40.731, lng: -73.997}
  });
  var latlng = {lat: latitude, lng: longitude};
  var countryVar;
  var geocoder = new google.maps.Geocoder;
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      for (var res in results) {
        console.log(results[res].formatted_address);
        if (results[res].types.indexOf("country") > -1) {
          countryVar = results[res].formatted_address;
        }
      }
    }
  });
  return countryVar;
}

function assignVariables(){
  latitude = autocomplete.getPlace().geometry.location.lat();
  longitude = autocomplete.getPlace().geometry.location.lng();
  numDays = document.getElementById('number-input').value;
  var cond = false;
  var cityName = autocomplete.getPlace().name;
  for (var iter = 0; iter < countryArray.length; iter++) {
      if (cityName == countryArray[iter].CountryName) {
        newCity = countryArray[iter].Array[0];
        cityName = newCity.Cityname;
        latitude = newCity.lat;
        longitude = newCity.lon;
        cond = true;
        break;
      }
  }
  if (cond) {
    var cntry = getCountry(latitude, longitude);
  }
  console.log("numDays = " + String(numDays));
  console.log(cityName);
  console.log(cntry);
  initialize(latitude, longitude);
  setTimeout(function(){
    console.log(autocomplete.getPlace().name);
    planTrip(placeArray, cityName, latitude, longitude, cntry);
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
  }, 400*2);
  setTimeout(function(){
    citiesMakeRequest(cArray, 3);
  }, 400*3);
  setTimeout(function(){
    citiesMakeRequest(cArray, 4);
  }, 400*4);
  setTimeout(function(){
    citiesMakeRequest(cArray, 5);
  }, 400*5);
  setTimeout(function(){
    citiesMakeRequest(cArray, 6);
  }, 400*6);
  setTimeout(function(){
    citiesMakeRequest(cArray, 7);
  }, 400*7);
  setTimeout(function(){
    citiesMakeRequest(cArray, 8);
  }, 400*8);
  setTimeout(function(){
    citiesMakeRequest(cArray, 9);
  }, 400*9);
  setTimeout(function(){
    citiesMakeRequest(cArray, 10);
  }, 400*10);
  setTimeout(function() {
    planTripHelper(cArray, lat, lon);
    console.log(cityValueArray);
  }, 4500);
  setTimeout(function() {
    makeRoute(cityValueArray, performFiltering(placeArray), nameOfCity);
  }, 4900);
  setTimeout(function() {
    printToHtml(finalPlan);
  }, 5600);
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
  var lowerEntry = entry.name.toLowerCase();
  if (lowerEntry.contains("hotel") | lowerEntry.contains("universi")) {
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


function printToHtml(finalPlan) {

  for(var index = 0; index < finalPlan.length; index++)
  {

    var div1 = document.createElement('div');
    div1.setAttribute('id','individual-result');
    var displaydivs = document.getElementById('result-square');
    displaydivs.appendChild(div1);

    placeName = finalPlan[index].name;
    placeRating = finalPlan[index].rating;

    var resultPlace = document.createElement('h2');
    var resultRank = document.createElement('h2');

    resultPlace.setAttribute('id','result-place');
    resultRank.setAttribute('id','result-rank');

    if (placeRating != undefined) {
      var replaced = placeName.replace(/\s{2,}/g,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      var href = 'https://www.google.co.uk/search?q=' + replaced;
      resultPlace.innerHTML = "Day " + (index + 1) + ": " + "<a href='" + href + "' target='_blank'>" + placeName.replace(/\s{2,}/g," "); + "</a>";
      resultRank.innerHTML = "Rating on Google: " + placeRating;
    }
    else {
      var replaced = placeName.split(' from ')[1].split(" to ");
      var from = replaced[0];
      var to = replaced[1];
      to_fixed = to.slice(0, to.length - 1);
      var href = 'https://www.google.co.uk/maps/dir/' + from + "/" + "+to+" + to;
      resultPlace.innerHTML = "Day " + (index + 1) + ": " + "<a href='" + href + "' target='_blank'>" + placeName.replace(/\s{2,}/g," "); + "</a>";
    }

    div1.appendChild(resultPlace);
    div1.appendChild(resultRank);

  }
  document.getElementById('display-results').style.display = 'initial';

  $('html, body').animate({
        scrollTop: $("#display-results").offset().top
    }, 1000);

}

