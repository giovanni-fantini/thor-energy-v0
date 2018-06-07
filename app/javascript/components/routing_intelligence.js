import { closestStations } from './closest_stations'
import { optimalRoute } from './optimal_route'
import { directionsRendererOptions } from './directions_renderer_options';
import { journeyCharge } from './journey_charge';


const routingIntelligence = (modeTransport, element, destination, markers, map, userLocation) => {

  const renderRoute = new google.maps.DirectionsRenderer(directionsRendererOptions);
  renderRoute.setMap(map)

  const geocoder = new google.maps.Geocoder
  geocoder.geocode({address: destination}, function(results, status) {

    let lat
    let lng

    if (status === 'OK') {
      if (results[0]) {
        lat = results[0].geometry.location.lat()
        lng = results[0].geometry.location.lng()

        const routeClosestStations = closestStations(lat, lng, markers, 3)
       optimalRoute(modeTransport, routeClosestStations, element, destination, userLocation)
        .then((response) => {
          renderRoute.setDirections(response);
          document.querySelector('.content').innerHTML = ""
          document.querySelector('#card .container .content').insertAdjacentHTML("afterbegin", journeyCharge(response))
          renderRoute.setPanel(document.querySelector('#card .container .content'));
        })
        .catch((e) => {
          console.log(e)
        })
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
    // debugger
  });



}

export { routingIntelligence };

/////AFTER FINISH
