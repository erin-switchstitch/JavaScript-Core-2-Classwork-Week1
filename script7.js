
let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};

// ONLY EDIT BELOW THIS LINE

let mentorsNames = Object.keys(mentorsAges);
console.log(mentorsNames);

mentorsNamedUppercased =[];

let mentorsNamedUppercasedFunction = mentorsNames.forEach(function(names){
    console.log(names.toUpperCase())
    mentorsNamedUppercased.push(names.toUpperCase());
});

// ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]


//s