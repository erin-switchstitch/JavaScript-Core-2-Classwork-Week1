
let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let persons = [person1, person2, person3]; // Complete here
//console.log(persons)

let personNames = persons.map(function(param){
  return param.name;
}) // Complete here
//console.log(personNames);

let newArr = [];

let personsYoungerThan28YearsOld = persons.filter(function(param){
  console.log(param);
  console.log(param.age);
 
  if (param.age < 28){
    //return param
    newArr.push(param);
    return newArr;
  }
  
})

console.log(personsYoungerThan28YearsOld)


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Question 1: array defined with 3 persons -> ",
  persons[0] === person1 && persons[1] === person2 && persons[2] === person3
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 2: array containing the person names -> ",
  personNames[0] === "Alice" &&
    personNames[1] === "Bob" &&
    personNames[2] === "John"
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 3: array containing the persons younger than 28 years old -> ",
  personsYoungerThan28YearsOld[0] === person1 &&
    personsYoungerThan28YearsOld[1] === person3
    ? "Passed :)"
    : "Not yet :("
);





