const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

for (const key in traineeGrades){
    if (traineeGrades[key] > 18) {
        console.log(key + " - " + traineeGrades[key])
    }
}

// Prints
// TOM - 20
// ABDUL - 19

const traineeGradesKeys = Object.keys(traineeGrades);
var newArr =[]
//console.log(traineeGradesKeys)


traineeGradesKeys.map(function(key){
    //console.log(key)
    if (traineeGrades[key] > 18){
        console.log(traineeGrades[key] + " " + key )
    }
})