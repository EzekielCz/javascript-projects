// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelCheck = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelCheck = false;
}
if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewCheck = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewCheck = false;
}

if (crewCheck === false || fuelCheck === false) {
   launchReady = false;
}

console.log("launchReady = ", launchReady);