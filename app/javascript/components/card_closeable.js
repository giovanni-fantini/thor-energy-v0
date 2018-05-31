const cardCloseable = () => {
  document.querySelector(".blob").addEventListener("click", () => {
    document.getElementById("card").remove()
    document.getElementById("map").style.height = "100vh"
  })
}

export { cardCloseable };
