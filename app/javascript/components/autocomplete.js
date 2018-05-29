// TO DO: Needs control flow to only happen on URLs where needed

function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    var chargingStationAddress = document.getElementById('charging_station_address');

    if (chargingStationAddress) {
      var autocomplete = new google.maps.places.Autocomplete(chargingStationAddress, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(chargingStationAddress, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });
}

export { autocomplete };
