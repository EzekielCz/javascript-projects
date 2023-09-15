// Initialize Variables below
let date = ("Monday 2019-03-18");
let time = ("10:05:34 AM");
let astronautCount = 7;
let astronautStatus = ("ready");
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg)
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = ("100%");
let weatherStatus = ("clear"); 
let preparedForLiftOff = true 

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount === 7) {
    console.log("astronauts are all acounted for.");
} else if ( astronautCount > 7) {
    console.log("There are too many astronauts!");
    preparedForLiftOff = false }
// add logic below to verify all astronauts are ready
if (astronautCount == "ready"){
console.log("Astronauts are ready for launch")
preparedForLiftOff = false}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000){
    console.log("Weight limit is safe.")
} else if (totalMassKg > 850000) {console.log("WARINING weight limit has been exceded shuttle not readyy for launch!")
preparedForLiftOff = false}
 
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp || fuelTempCelsius < maximumFuelTemp){
console.log("Fuel temp is ok.");
} else {
console.log("WARNING fuel temp is too low.")
preparedForLiftOff = false}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%"){
console.log("Fuel level good. Shuttle is ready for launch.");
} else if (fuelLevel < "100%"){
console.log("Fuel level is not 100%. Fuels needs to be added.")
preparedForLiftOff = false}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
console.log("Weather is good and the Shuttle can be launched.")
} else if (weatherStatus != clear ){
console.log("Shuttle can't be launch due to unclear weather.")
preparedForLiftOff = false}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === true) {
console.log("Shuttle cleared for launch");
} else { console.log(" WARNING shuttle is not cleared for launch!")
preparedForLiftOff = false}