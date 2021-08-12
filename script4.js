
let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let destinationNamesWithin500Kms = travelDestinations.filter((destinations)=>
    destinations.distanceKms < 500).map(destinations => destinations.destinationName) ; // Complete here

//console.log(destinationNamesWithin500Kms);

let destinationNameReachableByFerry = [];

let destinationNameReachableByFerryFunction = travelDestinations.forEach(function(param){
  if (param.transportations.includes("ferry")) {
    console.log(param.destinationName)
    destinationNameReachableByFerry.push(param.destinationName)
  }
})

console.log(destinationNameReachableByFerry)
// Complete here

let destinationNamesMoreThan300KmsAwayByTrain = [];
let destinationNamesMoreThan300KmsAwayByTrainFunction = travelDestinations.filter(function(param){

  if ((param.transportations.includes("train")) && (param.distanceKms > 300)) {
    destinationNamesMoreThan300KmsAwayByTrain.push(param.destinationName);
  }
})


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
);
console.log(
  `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
);
console.log(
  `Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`
);
