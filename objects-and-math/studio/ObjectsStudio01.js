// Code your selectRandomEntry function here:
function selectRandomEntry(){
  let randomEntry = Math.floor(Math.random()* idNumbers.length);
  return idNumbers[randomEntry]
}

// Code your buildCrewArray function here:
function buildCrewArray(randomNewId,animals){
  let crew = [];
  for (let i=0; i <candidates.length; i++){
    if(randomNewId.inculdes(candidates[i].astronautID)){
      crew.push(animals[i]);
    }

  }
  console.log(`${crew.name[0]}  ,${crew.name[1]}, ${crew.name[2]}, and ${crew.name[3]} are going to space!`);
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedEntry = [];

while(selectedEntry.length <3 ){
  let randomNewId = selectRandomEntry(idNumbers);
  if(!RandomEntry.inculdes(randomNewId)){
    RandomEntry.push(randomNewId);
  }
}


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
