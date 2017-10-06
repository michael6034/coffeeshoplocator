function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  

  navigator.geolocation.getCurrentPosition(success, error);
}