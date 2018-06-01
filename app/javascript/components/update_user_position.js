const updateUserPosition = (userLocation) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos)
      userLocation.setPosition(pos)

    }, function(error) {
      console.error(error)
      // handleLocationError(true, userLocation, map.getCenter());
    });
  }
}

export { updateUserPosition };
