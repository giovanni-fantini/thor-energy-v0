
// Styles a map in night mode.
import { autocomplete } from '../components/autocomplete';
autocomplete();

import { mapCardContent } from "./map_card_content";
import { routeCardContent } from "./route_card_content";
import { mapStyle } from '../components/map_style';
import { directionsRendererOptions } from '../components/directions_renderer_options';
// import { geolocator } from '../components/geolocator';

// This is the map and map-directions configuration:
var map = new google.maps.Map(document.getElementById('map'), {
  styles: mapStyle
});
const userIcon = {
  url: document.getElementById('map').dataset.userimage,
  scaledSize: new google.maps.Size(20, 20),
};
const userLocation = new google.maps.Marker({
  map: map,
  icon: userIcon,
  zIndex: 999999,
})
const userRoute = new google.maps.DirectionsService
const renderRoute = new google.maps.DirectionsRenderer(directionsRendererOptions);
renderRoute.setMap(map)


// User geolocation configuration
const updateUserPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      userLocation.setPosition(pos)

    }, function(error) {
      console.error(error)
      // handleLocationError(true, userLocation, map.getCenter());
    });
  }
  console.log("hi")
}

setInterval(updateUserPosition, 1000)




// This is an empty map-bounds object
const bounds = new google.maps.LatLngBounds();

const markerIcon = {
  url: document.getElementById('map').dataset.markerimage,
  scaledSize: new google.maps.Size(50, 50),
};


// This iterates over each charging_station
JSON.parse(document.getElementById('map').dataset.markers).forEach((element) => {
  const marker = new google.maps.Marker({
    position: element["position"],
    map: map,
    title: element["title"],
    icon: markerIcon, // document.getElementById('map').dataset.markerimage,
    size: new google.maps.Size(20, 32),
    // setZIndex: 1,
    // Bouncing animation
    animation: google.maps.Animation.DROP
  });

  // Adds coordinates of station to bounds
  bounds.extend(marker.position);

  // Markers made clickable
  marker.addListener('click', (event) => {
    document.getElementById('map').insertAdjacentHTML("afterend", `<div data-charging-machine-id=${element["id"]} id="card" class="card">${mapCardContent(element)}</div>`)
    document.getElementById("map").style.height = "calc(100vh - 300px)"
    map.setCenter(marker.getPosition())
    map.setZoom(16);
    // cards made closeable
    document.querySelector(".blob").addEventListener("click", () => {
      document.getElementById("card").remove()
      document.getElementById("map").style.height = "100vh"
    })
    // create-journey button functionality
    document.getElementById('create-journey').addEventListener("click", () => {
      document.querySelector('.content').innerHTML = ""
      document.querySelector('.content').insertAdjacentHTML("afterbegin", routeCardContent())
      autocomplete()
      // Go button funcitonality
      document.getElementById('route-search').addEventListener("click", () => {
        // define route parameters for Google API
        userRoute.route({
          origin: element["position"],
          destination: document.getElementById('destination').value,
          travelMode: 'WALKING'
        }, function(response, status) {
          if (status === 'OK') {
            // add route to map
            renderRoute.setDirections(response);
            console.log("success")
          } else {
            console.log("error but it is working!")
          }
        });
        document.querySelector('.content').innerHTML = ""
        renderRoute.setPanel(document.querySelector('#card .container'));
      })
    })
  });
})

// Imposes bounds on map to achieve approriate centring and zoom
map.fitBounds(bounds)
