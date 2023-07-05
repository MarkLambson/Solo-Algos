// Create a function that takes voltage and current and returns the calculated power.
// Check link for basic calculation of electrical circuits 
// https://www.electronics-tutorials.ws/dccircuits/dcp_2.html


function circuitPower(voltage, current) {
    return voltage * current;
}

console.log("Answer: ", circuitPower(120, 5), "Expected: 600")
console.log("Answer: ", circuitPower(1000, 3), "Expected: 3000")
console.log("Answer: ", circuitPower(240, 4), "Expected: 960")