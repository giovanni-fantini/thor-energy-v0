const mapCardContent = (chargingStation) => {
  const html = `
    <div class="container">
      <div class="blob"></div>
      <div class="content">
        <h1 class="text-center">${chargingStation.title}</h1>
        <div class="inner-content">
          <div class="graphic">
            <div class="dot solid"></div>
            <div class="line"></div>
            <div class="dot ring"></div>
          </div>
          <div class="text">
            <div class="address">
              <h2>Address</h2>
              <p>${chargingStation.address}</p>
              <p><strong style="color: black;">Lat: </strong>${chargingStation.position.lat} <strong style="color: black;">Lng: </strong>${chargingStation.position.lng}</p>
            </div>
            <div class="battery-info">
              <h2>Batteries available</h2>
              <p>
                <span class="yellow">${chargingStation.battery_count} </span>
                <span>/ </span>
                <span>${chargingStation.capacity}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="buttons">
            <div id="create-journey" class="btn btn-primary btn-sm">Create journey</div>
            <div class="btn btn-primary btn-sm">Reserve battery</div>
          </div>
          <a style="margin-left: 20px;" href="${document.getElementById("map").dataset.journeyspath}">What is this?</a>
        </div>
      </div>
    </div>
  `;
  return html
}

export { mapCardContent };
