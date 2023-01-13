'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

//Creating a seprate object
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const hours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhaced object literals
//   hours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // CALL THIS FUNCTION...
//   orderDelivery({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// ///////////////////////////////////////////////OBJECT KEYS

// // PROPERTY NAMES
// const properties = Object.keys(hours);
// console.log(properties);
// console.log(`We are open on ${properties.length}days`);
// // // with for-of
// for (const day of Object.keys(hours)) {
//   console.log(day);
// }

// // // LENGHT AND FOR-OF
// let OpenStrg = `we are open on ${properties.length} days`;
// for (const day of properties) {
//   OpenStrg += ` ${day}`;
//   console.log('OPEN STRING', OpenStrg);
// }
// // PROPERTY VALUES

// const values = Object.values(hours);
// console.log(values);

// //ENTIRE OBJEST
// const entries = Object.entries(hours);
// console.log('entries', entries);

// //[KEY,VALUE]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we are open at ${open} and we are close at ${close}`);
// }

// if (restaurant.hours.mon) console.log('test', restaurant.hours.mon.open);
// if (restaurant.hours.fri) console.log('test', restaurant.hours.fri.open);

// if (restaurant.hours && restaurant.hours.mon)
//   console.log('test2', restaurant.hours.mon.open);

// // ///////////////////////////////////////////////WITH OPTIONAL CHAINING
// //si el restaurante abre los lunes? arroja el horario
// console.log('OPTIONAL CHAINING ', restaurant.hours?.mon?.open);

// // ///////////////////////////////////////////////LOOPING WITH FOR - OF

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);

//   // USING NULLISH OPERATOR
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

// // ///////////////////////////////////////////////METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesnt exist');
// // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // // console.log(guests);

// // ///////////////////////////////////////////////ARRAYS
// const users = [{ name: 'Jonas', email: 'iselabla@hosdha' }];
// // optional chaining(?.) and nullish operator(??)
// // if exists .? otherwise ??

// console.log(users[0]?.name ?? 'User array empty');

// // USING IF
// if (users.length > 0) console.log(users[0]?.name);

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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const [players1, players2] = game.players;
// console.log(game.players);

// //2 - v1

// const gk = players1[0];
// console.log('BM GOAL KEEPER NAME:', players1[0]);

// const fieldPlayers1 = players1.slice(1);
// console.log('FIELD PLAYERS', fieldPlayers1);

// const fieldPlayers2 = players2.slice(1);
// console.log('FIELD PLAYERS', fieldPlayers2);

// //2 - v2

// const [gk2, ...fieldPlayers] = players1;
// console.log('Im the option 2', gk2, fieldPlayers);

// //3 - v1
// const allPlayers = game.players;
// console.log('ALL PLAYERS1', allPlayers);

// //3 - v2
// const AllPlayers = [...players1, ...players2];
// console.log('ALL PLAYERS2', AllPlayers);

//4-v1
// const players1Final = [...players1];
// players1Final.unshift('Thiago', 'Coutinho', 'Perisic');
// console.log('PLAYERS COPY', players1Final);

// //4-v2
// const playersFinal2 = [...players1, 'Thiago', 'Perisic', 'Couthinho'];
// console.log('PLAYERS COPY 2', playersFinal2);

// //5 - v1

// // const team1 = game.odds.team1;
// // console.log(team1);

// // const draw = game.odds.x;
// // console.log(draw);

// // const team2 = game.odds.team2;
// // console.log(team2);

// //5 - v2

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

//6-v1

// const printGoals = function (...players1) {
//   let scored = 0;
//   for (let i = 0; i < players1.length; i++) scored += players1[i];
//   console.log(game.scored);

//   return scored;
// };
// printGoals();

//6-v2

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length}goals scored`);
// };

// printGoals(...game.scored);

// console.log(game.scored);

// //7-v1
// const isWinner1 = game.odds.team1 > game.odds.team2 && 'player 1 winner';
// const isWinner2 = game.odds.team1 < game.odds.team2 && 'player 2 winner';
// // or to return a truthy value
// console.log(isWinner1 || isWinner2);

// //7-v2

// team1 < team2 && console.log('team 1 is more likely to win');
// team1 > team2 && console.log('team 2 is more likely to win');

// ///////////////////////////////////////////////LOOPING ARRAYS- THE FOR -OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // // ENTRIES METHOD

// // // for (const item of menu.entries()) {
// // //   console.log(item);
// // // }

// // // DESTRUCTURING USING ENTRIES METHOD AND OF
// for (const [i, el] of menu.entries()) {
//   console.log('ITEMS', `${i + 1}, ${el}`);
// }
// console.log( [...menu.entries()]);

/////////////////////////////////////// SETS

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'rissotto',
//   'pasta',
//   'pizza',
//   'lasagna',
// ]);
// console.log('whats order SET', orderSet);
// console.log(new Set('Isela'));
// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bolognesa'));
// console.log(orderSet.add('garlic bread'));
// console.log(orderSet.delete('garlic bread'));
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // example
// const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['waiter', 'chef', 'waiter', 'manager']).size, 'SIZE!');

// console.log(new Set('IselaValdezAlarcon').size);

/////////////////////////////////////// MAPS

// const res = new Map();
// res.set('name', 'classico');
// res.set(1, 'firenze, italy');
// console.log(res.set(2, 'lisbon, portugal'));
// res
//   .set('categories', ['italian', 'pizzeria'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');
// console.log(res.get('name'));

// const time = 21;
// console.log(res.get(time > res.get('open') && time < res.get('close')));

// console.log(res.has('categories'));
// res.delete(2);
// res.clear();

// const arr = [1, 2];
// res.set(arr, 'test');
// res.set(document.querySelector('h1'), 'heading');
// console.log(res);
// console.log(res.size);
// console.log(res.get(arr));

/////////////////////////////////////// MAPS ITERATION

// const question = new Map([
//   ['question', 'what is the best language in the world?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'js'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question);

//convert object to map
// console.log(Object.entries(hours));

// const HoursMap = new Map(Object.entries(hours));
// console.log(HoursMap);

//quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key} : ${value}`);
// }
// const answer = Number(prompt('your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//convert map to array
// console.log(...question);
// console.log(question.entries(), 'ENTRIES');
// console.log([...question.keys(), 'KEYS']);
// console.log(question.values(), 'VALUES');
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1

// const entries = Object.entries(game.scored);

// for (const goal of entries) {
//   console.log(`goals  ${goal}`); //+1
// }

// //1 - v2 TO LOG IT AS A LIST FROM 1

// for (const [i, player] of game.scored.entries()) {
//   console.log(` Goal ${i + 1}: ${player}`);
// }

// //2

// const arr = [1.33, 3.25, 6.5];
// const avg = arr.reduce((a, b) => a + b) / arr.length;
// console.log(`The Odds avg is ${avg}`);

// // 2 - V2

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log('avg version 2', average);
// //3

// const oddsEntries = Object.values(game.odds);
// console.log(`odds entries ${oddsEntries}`);

// const [x, y, z] = oddsEntries;
// console.log(`Odd of victory ${game.team1}: ${oddsEntries[0]}`);
// console.log(`Odd of draw: ${oddsEntries[1]}`);
// console.log(`Odd of victory ${game.team2}: ${oddsEntries[2]}`);

// // 3-v2

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamString} : ${odd}`);
// }

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1
// const events = [...gameEvents.values()];
// console.log('NO DUPLICATED', new Set(events));

// //2
// console.log(gameEvents.delete(64, 'Yellow card'));
// console.log('deleted', gameEvents);

// //3
// console.log(`an event happend ${90 / gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log('un key', time);
// console.log(`an event happend ${time / gameEvents.size} minutes`);

// //4

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min} : ${event}`);
// }

/////////////////////////////////////// STRINGS

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B337'[0]);
console.log(airline.length);

//TO KNOW THE FIRST POSITION OF A LETTER
console.log(airline.indexOf('r'));

// TO KNOW THE LAST POSITION OF A LETTER
console.log(airline.lastIndexOf('r'));
//  TO KNOW THE FIRST POSITION OF A LETTER( IF IT IS LOWERCASE IT WILL PUT -1)
console.log(airline.indexOf('Portugal'));
// indicar posicion dentro de un string y meter valor
console.log('hola', airline.slice(4));
