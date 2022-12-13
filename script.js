'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // CALL THIS FUNCTION...
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ...AND ADDING THIS OPTIONS
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// // ASIGNATING A NEW VALUE IN AN ARRAY
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // EXPECTED OUTPUT:  Italian, vegetarian
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // EXPECTED OUTPUT:  vegetarian, italian
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// // TRICK TO HAVE THE SAME RESULT, EXPECTED OUTPUT:  vegetarian, italian
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //EXPECTED OUTPUT ["GARLIC BREAD", "PIZZA"]
// console.log(restaurant.order(2, 0));

// // RECEIVE 2 RETURN VAÑUES FROM A FUNCTION,  EXPECTED OUTPUT "GARLIC BREAD pÌZZA"
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //NESTED DESCTRUCTURING
// const nested = [2, 4, [5, 6]];
// // const [i,,j] = nested
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //DEFAULT VALUES
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // ///////////////////////////////////////////////DESTRUCTURING OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log('output', name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log('output test', name, openingHours, categories);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log('hey!', menu, starters);

// // mutating variables
// // let a = 111;
// // let b = 999;

// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// //NESTED OBJECTS
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// ///////////////////////////////////////////////REST PATTERN

// 1) DESTRUCTURING
// SPREAD, because is on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log('SOY UN SPREAD', arr);

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(' SOUN UN REST PATTERN', a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(4, 5, 7, 2, 3);
add(4, 7, 8, 9, 6, 4, 3, 2);

// TOMARÁ LA FUNCION ADD Y SUMARA LOS ELEMENTOS EN EL ARRAY AL LLAMAR A LA FUNCIÓN CON EL SPREAD OPERATOR
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// ///////////////////////////////////////////////SPREAD OPERATOR

// const array = [7, 8, 9];
// const badNewArr = [1, 2, array[0], array[1], array[2]];
// const newArr = [1, 2, ...array];
// console.log(newArr);
// console.log(...newArr);

// // ADDING A NEW ELEMENT IN THE ARRAY WITH SPREAD OPERATOR
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];

// //JOIN 2 ARRAYS
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// ITERABLES : ARRAYS, STRINGS, MAPS, SETS, NOT OBJECTS

// const str = 'Isela';
// const letters = [...str, , ' A.'];
// console.log(letters);

// //Real world example
// const ingredients = [
//   prompt("let's make pasta! Ingredient 1"),
//   prompt("let's make pasta! Ingredient 2"),
//   prompt("let's make pasta! Ingredient 3"),
// ];

// console.log(ingredients);

// // TO CALL THE PASTA FUNCTION
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // WITH SPREAD OPERATOR
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Isela' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristourante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
