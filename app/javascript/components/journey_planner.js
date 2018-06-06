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
    })
  })
}

export { journeyPlanner };
