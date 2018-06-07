const journeyCharge = (response) => {
  let charge = Math.round(response.routes["0"].legs["1"].duration.value / 3600 * 80 / 2)

  if (charge > 100) { charge = 100}

  const html = `
    <p class="text-center"> Charge gained on this journey: ${charge}%</p>
  `
  return html
}

export { journeyCharge };

// Calculation based on charging current of 1A, battery capacity of 2000mAh, and charging efficiency of 80%.
