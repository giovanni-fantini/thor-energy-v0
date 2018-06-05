const currentLocation = () => {
  const url = window.location.href
  const regex = /\/charging_stations\?current_location/
  return url.match(regex)
}

export { currentLocation };
