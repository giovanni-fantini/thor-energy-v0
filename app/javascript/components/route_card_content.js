const routeCardContent = (chargingStation) => {
  const html = `
    <h1 class="text-center">${chargingStation.title}</h1>
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
