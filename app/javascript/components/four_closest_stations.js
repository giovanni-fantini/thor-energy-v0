const fourClosestStations = (lat, lng, markers) => {
  const mrkWDist = [];
  const mrkWODist = [];

  markers.forEach((marker) => {
    const mlat = marker.position.lat();
    const mlng = marker.position.lng();
    const dLat  = mlat - lat;
    const dLng = mlng - lng;
    const d = Math.sqrt(Math.pow(dLat, 2) + Math.pow(dLng, 2))
    mrkWDist.push({marker: marker, distance: d})
  })

  mrkWDist.sort((a,b) => { return a.distance - b.distance }).slice(0,4).forEach((marker) => { mrkWODist.push(marker.marker) })

  return mrkWODist
}

export { fourClosestStations };
