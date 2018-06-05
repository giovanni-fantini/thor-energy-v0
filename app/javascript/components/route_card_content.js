const routeCardContent = (chargingStation) => {
  const html = `
    <h1 class="text-center">${chargingStation.title}</h1>
    <div class="transport">
      <i class="fas fa-car"></i>
      <i class="fas fa-walking"></i>
      <i class="fas fa-bicycle"></i>
      <i class="fas fa-subway"></i>
    </div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Where are you going?</label>
        <input type="text" class="form-control autocomplete" id="destination" aria-describedby="emailHelp">
      </div>
    </form>
    <button id="route-search" type="" class="btn btn-primary">Go</button>
  `;
  return html
}

export { routeCardContent };
