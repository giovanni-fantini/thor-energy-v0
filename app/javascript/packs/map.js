import { autocomplete } from '../components/autocomplete';
import { mapCardContent } from "../components/map_card_content";
import { routeCardContent } from "../components/route_card_content";
import { mapStyle } from '../components/map_style';
import { updateUserPosition } from '../components/update_user_position';
import { cardCloseable } from '../components/card_closeable'
import { userIcon } from '../components/user_icon'
import { markerIcon } from '../components/marker_icon'
import { routingIntelligence } from '../components/routing_intelligence'
import { removeTransportSelection } from '../components/remove_transport_selection'

// REMOVED AUTOCOMPLETE CALL FROM HERE
////////// MAP //////////

// This is the map and map-directions configuration:
var map = new google.maps.Map(document.getElementById('map'), {
  styles: mapStyle
});

// This is an empty map-bounds object
const bounds = new google.maps.LatLngBounds();

// User geolocation configuration (updating every second)
const userLocation = new google.maps.Marker({
  map: map,
  icon: userIcon,
  zIndex: 999999
})

setInterval(() => updateUserPosition(userLocation), 1000)

////////// MARKERS //////////

const markers = []

// This iterates over each charging_station
JSON.parse(document.getElementById('map').dataset.markers).forEach((element) => {
  if (element.status) {
    const marker = new google.maps.Marker({
      position: element["position"],
      map: map,
      title: element["title"],
      icon: markerIcon,
      size: new google.maps.Size(20, 32),
      animation: google.maps.Animation.DROP
    });

    markers.push(marker)

    // Adds coordinates of station to bounds
    bounds.extend(marker.position);

    // Markers made clickable
    marker.addListener('click', () => {
      if (document.getElementById('card')) {
        document.getElementById('card').remove()
      }
      document.getElementById('map').insertAdjacentHTML("afterend", `<div data-charging-machine-id=${element["id"]} id="card" class="card">${mapCardContent(element)}</div>`)
      document.getElementById("map").style.height = "calc(100vh - 300px)"
      map.setCenter(marker.getPosition())
      map.setZoom(16);
      // cards made closeable
      cardCloseable()
      // create-journey button functionality
      document.getElementById('create-journey').addEventListener("click", () => {
        document.querySelector('.content').innerHTML = ""
        document.querySelector('.content').insertAdjacentHTML("afterbegin", routeCardContent(element))
        autocomplete()
        let modeTransport = "WALKING"

        document.querySelector(".fa-car").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-car").classList.add("active")
          modeTransport = "DRIVING"
        })
        document.querySelector(".fa-walking").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-walking").classList.add("active")
          modeTransport = "WALKING"
        })
        document.querySelector(".fa-bicycle").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-bicycle").classList.add("active")
          modeTransport = "BICYCLING"
        })
        document.querySelector(".fa-subway").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-subway").classList.add("active")
          modeTransport = "TRANSIT"
        })
        // Go button functionality
        document.getElementById('route-search').addEventListener("click", () => {
          const destination = document.getElementById('destination').value
          //// Route planning intelligence ////
          routingIntelligence(modeTransport, element, destination, markers, map)
          /////////////////////////////////////////
        })
      })
    });
  }
})

// Imposes bounds on map to achieve approriate centring and zoom
map.fitBounds(bounds)

/////AFTER FINISH
