const geolocator = (map) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const userLocation = new google.maps.Marker({
        map: map,
        icon: document.getElementById('map').dataset.userimage,
        zIndex: 999999,
        position: pos
      })

    }, function() {
      handleLocationError(true, userLocation, map.getCenter());
    });
  }
  console.log("running")
}
