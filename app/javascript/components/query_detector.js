const queryDetector = () => {
  const url = window.location.href
  const regex = /query=([^&]*)/
  if (url.match(regex)) {
    const match = url.match(regex)[1]
    const commas = match.replace(/%2C/g, ",")
    const final = commas.replace(/\+/g, " ")
    return final
  } else {
    return false
  }
}

export { queryDetector };
