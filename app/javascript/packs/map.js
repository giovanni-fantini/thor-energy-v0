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
import { queryDetector } from '../components/query_detector'
import { currentLocation } from '../components/current_location'
import { closestStations } from '../components/closest_stations'
import { firstRouteCardContent} from '../components/first_route_card_content'
import { firstRouteRender } from '../components/first_route_render'
import { journeyPlanner } from '../components/journey_planner'

////////// MAP //////////

// This is the map and map-directions configuration:
var map = new google.maps.Map(document.getElementById('map'), {
  styles: mapStyle
});



// This is an empty map-bounds object

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
      document.getElementById('navigate').addEventListener("click", () => {
        document.querySelector('.content').innerHTML = ""
        document.querySelector('.content').insertAdjacentHTML("afterbegin", firstRouteCardContent(element))

        let modeTransport

        document.querySelector(".fa-car").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-car").classList.add("active")
          modeTransport = "DRIVING"
          firstRouteRender(map, userLocation, modeTransport, marker, markers)
        })
        document.querySelector(".fa-walking").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-walking").classList.add("active")
          modeTransport = "WALKING"
          firstRouteRender(map, userLocation, modeTransport, marker, markers)
        })
        document.querySelector(".fa-bicycle").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-bicycle").classList.add("active")
          modeTransport = "BICYCLING"
          firstRouteRender(map, userLocation, modeTransport, marker, markers)
        })
        document.querySelector(".fa-subway").addEventListener("click", () => {
          removeTransportSelection()
          document.querySelector(".fa-subway").classList.add("active")
          modeTransport = "TRANSIT"
          firstRouteRender(map, userLocation, modeTransport, marker, markers)
        })

        //   // Go button functionality
        //   document.getElementById('route-search').addEventListener("click", () => {
        //     const destination = document.getElementById('destination').value
        //     //// Route planning intelligence ////
        //     routingIntelligence(modeTransport, element, destination, markers, map)
        //     /////////////////////////////////////////
        //   })
        // })
      })
    });
  }
})

const markerCluster = new MarkerClusterer(map, markers, {
  imagePath: document.getElementById('map').dataset.cluster,
  gridSize: 50,
  maxZoom: 12,
  minimumClusterSize: 3
});

// Imposes bounds on map to achieve approriate centring and zoom
const bounds = new google.maps.LatLngBounds();
if (queryDetector()) {
  const searchQuery = queryDetector()


  const geocoder = new google.maps.Geocoder
  geocoder.geocode({address: searchQuery}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        bounds.extend({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        })
        const stations = closestStations(results[0].geometry.location.lat(), results[0].geometry.location.lng(), markers, 2)
        stations.forEach((station) => {
          bounds.extend(station.position)
        })
        map.fitBounds(bounds)
      } else {
        window.alert('Location not found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
} else if (currentLocation()) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      bounds.extend({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
      const stations = closestStations(position.coords.latitude, position.coords.longitude, markers, 2)
      stations.forEach((station) => {
        bounds.extend(station.position)
      })
      map.fitBounds(bounds)
    }, function(error) {
      console.error(error)
      // handleLocationError(true, userLocation, map.getCenter());
    });
  }

} else {
  markers.forEach((marker) => {
    bounds.extend(marker.position);
  })
  map.fitBounds(bounds)
}

map.addListener("click", () => {
  if (document.getElementById("card")) {
    document.getElementById("card").remove()
    document.getElementById("map").style.height = "100vh"
  }
})

/////AFTER FINISH
