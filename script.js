'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // CALL THIS FUNCTION...
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // // ///////////////////////////////// NULLISH OPERATOR (??)

// //nulish : nulland undefined(NOT or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// // console.log('correct', guestCorrect);

// // /////////////////////////////////////LOGICAL ASSIGMENT OPERATORS

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// // THIS SHORT CUITING (OR)  RETURNS ANY TRUTHY VALUE

// // /////////////////////////////////////////////////////OR ASSIGMENT OPERATOR(TRUTHY VALUE)
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // its the same that this below:
// /* rest1.numGuestes ||= 10*/
// /* rest2.numGuestes ||= 10*/

// // /////////////////////////////////////////////////////NULLISH ASSIGMENT OPERATOR(null or undefined)
// rest1.numGuestes ??= 10;
// rest2.numGuestes ??= 10;

// // /////////////////////////////////////////////////////AND ASSIGMENT OPERATOR(FALSY VALUE)
// rest1.owner = rest1.owner && '<ANONYMUS>';
// rest2.owner = rest2.owner && '<ANONYMUS>';
// console.log(rest1);
// console.log(rest2);

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////SHORT CIRCUITING && ||
// //Use ANY data type , return ANY data type, short circuiting, returns any TRUTHY VALUE in the console

// // console.log('------OR------');
// // console.log(3 || 'jonas');
// // console.log('' || 'JONAS');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // // SI EXISTE restaurant.numGuests ? regresa restaurant.numGuests y si no (:) devuelve 10
// // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('------AND------');
// // //  returns any FALSY VALUE in the console

// // console.log(0 && 'isela');
// // console.log(7 && 'erwan');
// // console.log(null && 'isela');
// // console.log(23 && 'isela' && 8 && 0 && null);

// // practical example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // ...AND ADDING THIS OPTIONS
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

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

// // 1) DESTRUCTURING
// // SPREAD, because is on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log('SOY UN SPREAD', arr);

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(' SOUN UN REST PATTERN', a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // 2) FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(4, 5, 7, 2, 3);
// add(4, 7, 8, 9, 6, 4, 3, 2);

// // TOMARÁ LA FUNCION ADD Y SUMARA LOS ELEMENTOS EN EL ARRAY AL LLAMAR A LA FUNCIÓN CON EL SPREAD OPERATOR
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
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

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(game.players);

//2

const gk = players1[0];
console.log('BM GOAL KEEPER NAME:', players1[0]);

const fieldPlayers1 = players1.slice(1);
console.log('FIELD PLAYERS', fieldPlayers1);

const fieldPlayers2 = players2.slice(1);
console.log('FIELD PLAYERS', fieldPlayers2);

//3
const allPlayers = game.players1;
console.log('ALL PLAYERS', allPlayers);

//4
const players1Final = [...players1];
players1Final.unshift('Thiago', 'Coutinho', 'Perisic');
console.log('PLAYERS COPY', players1Final);

//5

const team1 = game.odds.team1;
console.log(team1);

const draw = game.odds.x;
console.log(draw);

const team2 = game.odds.team2;
console.log(team2);

//6

const printGoals = function (...players1) {
  let scored = 0;
  for (let i = 0; i < players1.length; i++) scored += players1[i];
  console.log(game.scored);

  return scored;
};
printGoals();

//7
const isWinner1 = game.odds.team1 > game.odds.team2 && 'player 1 winner';
const isWinner2 = game.odds.team1 < game.odds.team2 && 'player 2 winner';
// or to return a truthy value
console.log(isWinner1 || isWinner2);
