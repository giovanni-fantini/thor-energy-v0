import { routeCardContent } from './route_card_content'
import { autocomplete } from './autocomplete'
import { routingIntelligence } from './routing_intelligence'

const journeyPlanner = (modeTransport, marker, markers, map, userLocation) => {
  document.getElementById("journey").addEventListener("click", () => {
    document.querySelector('.content').innerHTML = ""
    document.querySelector('.content').insertAdjacentHTML("afterbegin", routeCardContent(marker))
    autocomplete()
    document.getElementById('route-search').addEventListener("click", () => {
      const destination = document.getElementById('destination').value
      document.querySelector('.content').innerHTML = ""
      routingIntelligence(modeTransport, marker, destination, markers, map, userLocation)
      setTimeout(() => {
      const waypoints = document.querySelectorAll(".adp-placemark")
      waypoints[1].insertAdjacentHTML("beforebegin", `<h1 class="text-center direction-insert">Battery Pickup:</h1>`)
      waypoints[2].insertAdjacentHTML("beforebegin", `<h1 class="text-center direction-insert">Battery Dropoff:</h1>`)
      document.querySelectorAll(".adp-placemark img").forEach((marker) => {marker.remove()})
      }, 1000)
    })
  })
}

export { journeyPlanner };
