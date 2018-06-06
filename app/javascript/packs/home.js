document.querySelector(".fa-crosshairs").addEventListener("mouseover", () => {
  document.getElementById("query").placeholder = "Current location"
})

document.querySelector(".fa-crosshairs").addEventListener("mouseout", () => {
  document.getElementById("query").placeholder = "Enter location....."
})
