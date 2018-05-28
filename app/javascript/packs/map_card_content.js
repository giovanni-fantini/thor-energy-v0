const mapCardContent = (chargingStation) => {
  console.log(chargingStation)
  const html = `
    <div class="container">
      <h1 class="text-center">${chargingStation.title}</h1>
      <div class="address">
        <h2>Address</h2>
        <p>${chargingStation.address}</p>
      </div>
      <div class="battery-info">
        <h2>Batteries available</h2>
        <p>
          <span class="yellow">${chargingStation.battery_count} </span>
          <span>/ </span>
          <span>${chargingStation.capacity}</span>
        </p>
      </div>
      <div class="buttons">

      </div>
    </div>
  `;
  return html
}

export { mapCardContent };
