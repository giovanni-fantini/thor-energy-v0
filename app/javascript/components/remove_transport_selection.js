const removeTransportSelection = () => {
  document.querySelectorAll(".fas").forEach((icon) => {icon.classList.remove("active")})
}

export { removeTransportSelection };
