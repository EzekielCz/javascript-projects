let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID:1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID:2,
   move: function () {return Math.floor(Math.random()*11)}
};

let chimpBrad = {
name: "Brad",
species: "Chimpanzee",
mass: 11,
age: 6,
astronautID: 3,
move: function () {return Math.floor(Math.random()*11)}
}

let beagle = {
name: "Leroy",
species: "Beagle",
mass: 14	,
age: 5,
astronautID:4,
move: function () {return Math.floor(Math.random()*11)}
}

let tardigrade = {
name: "Almina",
species: "tardigrade",
mass: 0.0000000001,
age: 1,
astronautID: 5,
move: function () {return Math.floor(Math.random()*11)} //this is the move method.
}

crew = [superChimpOne, salamander, chimpBrad, beagle,tardigrade];

function crewReports(){
   for(let i=0; i<crew.length; i++){
      console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and weigh ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
   }
}
crewReports();


   function fitnessTest(candidates){
      let results = [], numSteps, turns;
      for (let i = 0; i < candidates.length; i++){
          numSteps = 0;
          turns = 0;
          while(numSteps < 20){
          numSteps += candidates[i].move();
          turns++;
          }
          results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
      }
      return results;
     };
    console.log(fitnessTest(crew));
   //   console.log(results);
     //console.log(superChimpOne.move(2));
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!