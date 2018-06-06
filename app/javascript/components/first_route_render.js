import { directionsRendererOptions } from './directions_renderer_options'
import { journeyPlanner } from './journey_planner'

const firstRouteRender = (map, userLocation, modeTransport, marker, markers) => {
  const userRoute = new google.maps.DirectionsService
  const renderRoute = new google.maps.DirectionsRenderer(directionsRendererOptions);
  renderRoute.setMap(map)

  userRoute.route({
    origin: userLocation.position,
    destination: marker.position,
    travelMode: modeTransport
  }, (result, status) => {
    if (status == 'OK') {
      renderRoute.setDirections(result);
      document.querySelector('.content').innerHTML = ""
      renderRoute.setPanel(document.querySelector('#card .container .content'));
      document.querySelector('.content').insertAdjacentHTML("afterbegin", `<div id="journey" class="btn btn-primary btn-sm">Add final destination</div>`)
      journeyPlanner(modeTransport, marker, markers, map, userLocation)
    }
  });
}

export { firstRouteRender };
