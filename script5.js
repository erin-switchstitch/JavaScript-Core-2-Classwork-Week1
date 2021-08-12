let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,

  findAvailableRestaurants: function (numberOfPeople) {
    
    let newArr = []

    for (let i = 0; i < restaurants.length ; i++){
        let spacesLeft = (restaurants[i].totalSeats - restaurants[i].numberOfCustomers);
        console.log(restaurants[i].name);
        console.log(spacesLeft);
        console.log(numberOfPeople)

        if (spacesLeft >= numberOfPeople) {
            console.log(restaurants[i].name)
            newArr.push(restaurants[i].name)
        }
        
    }
    return newArr
  },


  findRestaurantServingDish: function (dishName) {
    let secondArr = []

    for (let i = 0; i < restaurants.length ; i++){
            
        if (restaurants[i].menu.includes(dishName)) {
            //console.log(restaurants[i].name)
            secondArr.push(restaurants[i].name)
        }
        
    }
    return secondArr
  },

  countNumberOfRestaurantsInArea: function (areaInput) {

    let thirdArr =[];
    const areaRestaurants = restaurants.forEach(function(param){
        console.log(param);
        console.log(param.address.area)
        if (param.address.area.includes(areaInput)) {
            console.log("success")
            thirdArr.push(param.name);
        }
    })
    return thirdArr.length;
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
  5
);
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
);

let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
  "salad"
);
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
);

let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
  "center"
);
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
);