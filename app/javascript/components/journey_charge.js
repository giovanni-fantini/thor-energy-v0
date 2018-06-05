const journeyCharge = (response) => {
  console.log(response)
  const html = `
    <p class="text-center"> Charge gained on this journey: ${Math.round(response.routes["0"].legs["0"].duration.value / 3600 * 80 / 2)}%</p>
  `
  return html
}

export { journeyCharge };

// Calculation based on charging current of 1A, battery capacity of 2000mAh, and charging efficiency of 80%.
