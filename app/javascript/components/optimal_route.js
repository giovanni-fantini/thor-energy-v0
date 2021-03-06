const optimalRoute = (modeTransport, stations, element, destination, userLocation) => {
  let minDuration = Math.pow(10, 10)
  let shortestRoute
  let arrayOfPromises = []

  const handleApiResponse = (response, status) => {
    return new Promise((resolve, reject) => {
      if (status === 'OK') {
        const duration = response.routes[0].legs[0].duration.value
        if (duration < minDuration) {
          minDuration = duration
          shortestRoute = response
        }
        resolve()
      } else {
        console.log("error but it is working!")
        resolve()
      }
    })
  }
///// AFTER FINISH!!!

  return new Promise((mainResolve, reject) => {
     const pushPromisesAndWait = (response, status) =>  {
        arrayOfPromises.push(handleApiResponse(response, status))
        if (arrayOfPromises.length === stations.length) {
          Promise.all(arrayOfPromises)
            .then(response => {
              mainResolve(shortestRoute)
            })
            .catch(error => {
              console.log("brokeeen:", error)
            })
        }
      }

      stations.forEach((station) => {
        const userRoute = new google.maps.DirectionsService
        userRoute.route({
          origin: userLocation.position,
          destination: destination,
          waypoints: [{location: element.position, stopover: true}, {location: station.position, stopover: true}],
          travelMode: modeTransport
        }, pushPromisesAndWait);
      })
  })
}

export { optimalRoute };
