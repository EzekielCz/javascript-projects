// Declare and assign the variables below
let nameOfSpaceShuttle = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfSpaceShuttle)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKilometer)
// Calculate a space mission below
let distanceToMarsMi = distanceToMarsKm * milesPerKilometer;
console.log(distanceToMarsMi);
let timeToMarsHrs = distanceToMarsMi / shuttleSpeedMph;
console.log(timeToMarsHrs);
let daysToMars = timeToMarsHrs / 24;
console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(nameOfSpaceShuttle + " will take "+ daysToMars + " days to reach Mars. ");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKilometer;
console.log( milesToMoon);
let hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log(hoursToMoon);
let daysToTheMoon = hoursToMoon / 24;
console.log(daysToTheMoon);
// Print the results of the trip to the moon below
console.log(nameOfSpaceShuttle + " will take " + daysToTheMoon +" days to reach the Moon.");