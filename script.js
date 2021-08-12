// Exercise 1

let computer = {
    brand : "homemade",
    screenSize : "2K",
    isTouchScreen : false,
    ramSize : 20, 
    "CPU Speed" : "4ghz",
    storage : [250, 20000, 10000, 500],
}


// Exercise 2

let pet = {
    name : "Sir Floki Mooncake the 3rd",
    species: "cat", 
    color: "black and white",
    agressive : false,
    age: null,
}

//console.log(pet.species);


// Exercise 3

let kitten = {
    "fur colour": "orange",
    age :"23",
};




// Exercise 2.1

let laptop = {
    brand: "Lenovo",
    ram: "5GB",
};

let phone = {
    "operating system" : "iOS",
    hasStylus: true,
    megapixels: 12,
    "batteryLife": "24 hours",
};


// Exercise 3.1

let cat = {
    "fur colour": "orange",
    age :"23",
    name : "Gilbert",
};

console.log(cat.name)



// Exercise 3.2

let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = true;
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true




//More Complex Objects Exercise 1

let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};


// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
house.currentOwner = newCurrentOwner;

// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

house.isForSale = false;

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
    house.currentOwner === newCurrentOwner
  }`
);
console.log(
  `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
);
console.log(`Expected result: false. Actual result: ${house.isForSale}`);





//More Complex Objects Exercise 3

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
    return house.currentOwner.firstName + " " + house.currentOwner.lastName;
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
let newArr = [];
newArr.push(house1.currentOwner.email)
newArr.push(house2.currentOwner.email)
return newArr;
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
    if (house1.price < house2.price) {
        return house1.address;
    } else {
        return house2.address;
    }
}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);

