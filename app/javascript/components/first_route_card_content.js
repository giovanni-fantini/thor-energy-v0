const firstRouteCardContent = (chargingStation) => {
  const html = `
    <h1 class="text-center">${chargingStation.title}</h1>
    <h2 class="text-center">How would you like to get there?</h2>
    <div class="transport">
      <i class="fas fa-car"></i>
      <i class="fas fa-walking"></i>
      <i class="fas fa-bicycle"></i>
      <i class="fas fa-subway"></i>
    </div>
  `
  return html
}

export { firstRouteCardContent };
