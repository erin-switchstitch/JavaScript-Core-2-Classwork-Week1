let persons = {
  name: "Alice",
  age: 25,

  greet : function () {
      return `Hello everybody`;
  },
  sayName : function() {
      return `My name is ${this.name}`
  }
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: Hello everybody. Actual result: ${persons.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${persons.sayName()}`
);



// Exercise 2 


let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) {
        this.currentAddress = newAddress;
    },
    celebrateBirthday: function() {
        this.age = this.age + 1;
    }
};

person.changeAddress("Edinburgh");
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`);





// Exercise 4

let person2 = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend : function(friend) {
      this.friends.push(friend);
  }
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person2.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person2.friends}`
);










// Exercise 5 

let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {
      //console.log(amount);
      return this.insertedAmount = amount;
  },

  
  getCoffee: function (coffee) {
    
    //console.log(coffeeMachine.prices)

    const coffeeKeys = Object.keys(coffeeMachine.prices);
    const coffeeValues = Object.values(coffeeMachine.prices);

    //console.log(coffeeKeys);
    //console.log(coffeeValues);
    //console.log("inserted amount : " + this.insertedAmount);

    for ( let i =0 ; i < coffeeKeys.length ; i ++) {
      //console.log("current coffee : " + coffee)
      //console.log("current coffee price : " + coffeeValues[i])

       if ((coffee === coffeeKeys[i]) && (this.insertedAmount >= coffeeValues[i])) {
          //console.log(property);
          //console.log (coffeeMachine.prices[property])
          return `Please take your ${coffee}`
    } else if ((coffee === coffeeKeys[i]) && (this.insertedAmount < coffeeValues[i])) {
          //console.log(property);
          //console.log (coffeeMachine.prices[property])
          return `Sorry you don't have enough money for a ${coffee}`
    }
  }
    
}}


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);