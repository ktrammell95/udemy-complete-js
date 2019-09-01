// variable = container to hold value

/* **********************
Variables and Data Types 
*/

// var firstName = "John";

// console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job);

// job = "Teacher";
// console.log(job);

/* **********************
Variables Mutation and Type coercion 
*/

// var firstName = "John";
// var age = 28;

// // Type coercion

// console.log(firstName + ' ' + age);
//  var job, isMarried;

//  job = "Teacher";
//  isMarried = false;

//  console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//  // Variable mutation

//  age = 'thirty-six';
//  job = 'driver';
//  console.log(age);

//  alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//  var lastName = prompt("What is his last name?");

//  console.log(firstName + ' ' + lastName);

/* **********************
Basic operators
*/

// var now, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// Math Operators

// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// Logical Operators

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// typeof operator

// console.log(typeof johnOlder);
// console.log(typeof johnage);
// console.log(typeof "Mark is older than John");
// var x;
// console.log(x);

/* **********************
Operator precedence
*/

// var now = 2018;
// var yearJohn = 1995;
// var ageMark = 35;
// var fullAge =  21;

// Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// Grouping 
// var ageJohn = now - yearJohn;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// Multiple assignents

// var x, y;

// x = y = (3 + 5) * 4 - 6; 
// console.log(x, y);

/* **********************
Code Challenge 1
*/

/*
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
Note: To calculate BMI, the metric formula is your weight in kilograms divided by your height in meters squared.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

// var johnWeight = 90;
// var johnHeight = 1.8796; // meters

// var markWeight = 110;
// var markHeight = 1.524; // meters

// var johnBMI = johnWeight / (johnHeight * johnHeight);
// var markBMI = markWeight / (markHeight * markHeight);

// var comparison = markBMI > johnBMI;

// console.log(johnBMI);
// console.log(markBMI);
// console.log("Is Mark's BMI higher than John's? " + comparison);

/* **********************
If/Else Statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === "married") {
//     console.log(firstName + ' is ' + civilStatus);
// } else if (civilStatus === "single") {
//     console.log(firstName + ' is ' + civilStatus);
// } else {
//     console.log("John is a frog");
// }

// var johnWeight = 90;
// var johnHeight = 1.8796; // meters

// var markWeight = 110;
// var markHeight = 1.524; // meters

// var johnBMI = johnWeight / (johnHeight * johnHeight);
// var markBMI = markWeight / (markHeight * markHeight);

// var comparison = markBMI > johnBMI;

// console.log(johnBMI);
// console.log(markBMI);
// console.log("Is Mark's BMI higher than John's? " + comparison);

// if (markBMI > johnBMI) {
//     console.log("Marks BMI is higher than John's")
// } else if (markBMI < johnBMI) {
//     console.log("Marks BMI is lower than John's")
// } else {
//     console.log("Marks BMI is equal John's")
// }

// var firstName = 'John';
// var age = 25;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if ( age >= 13 && age <= 20){
//     console.log(firstName + ' is a teenager.')
// } else if ( age > 20 && age <= 30){
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.')
// }

/* **********************
Ternary operators and Switch Statements
*/

// Ternary

// var firstName = 'John';
// var age = 16;

// age >= 21 ? console.log(firstName + ' drinks beer')
// : console.log(firstName + ' drinks juice')

// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

// Switch

// var job = 'instructor';

// switch (job) {
//     case 'teacher': 
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver': 
//         console.log(firstName + ' drives an Uber.');   
//         break;
//     case 'designer': 
//         console.log(firstName + ' designs websites.'); 
//         break;
//     default:
//         console.log(firstName + ' does something else.'); 
// }

// var firstName = 'John';
// var age = 40;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if ( age >= 13 && age <= 20){
//     console.log(firstName + ' is a teenager.')
// } else if ( age > 20 && age <= 30){
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.')
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age <=20:
//         console.log(firstName + ' is a teenager.')
//         break;
//     case age > 20 && age <= 30:
//         console.log(firstName + ' is a young man.')
//         break;
//     default:
//         console.log(firstName + ' is a man.')
// }

/* **********************
Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;
// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is NOT defined');
// }

// === 
// == does type coercion, data types do not have to match

// === is best practice

// if (height === '23') {
//     console.log('The == operator does type coercion');
// } else if (height === 23) {
//     console.log('The === operator does strict comparison');
// }

/* **********************
Coding challenge 2
*/

/* John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 183 points, while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.
2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 185 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

// var games = 3;
// var johnGames = (89 + 120 + 183) / games;
// var mikeGames = (116 + 94 + 123) / games;
// var maryGames = (97 + 134 + 185) / games;

// var johnGames = 111;
// var mikeGames = 108;
// var maryGames = 111;

// console.log(johnGames);
// console.log(mikeGames);
// console.log(maryGames);

// if (johnGames > mikeGames && johnGames > maryGames) {
//     console.log('John wins with ' + johnGames + ' points');
// } else if (mikeGames > johnGames && mikeGames > maryGames){
//     console.log('Mike wins with ' + mikeGames + ' points');
// } else if (maryGames > johnGames && maryGames > mikeGames){
//     console.log('Mary wins with ' + maryGames + ' points');
// } else if (maryGames === johnGames && maryGames === mikeGames){
//     console.log("It's a tie");
// } else { console.log("No clear winner");}

// switch (true) {
//     case johnGames > mikeGames && johnGames > maryGames:
//         console.log('John wins with ' + johnGames + ' points');
//         break;
//     case mikeGames > johnGames && mikeGames > maryGames:
//         console.log('Mike wins with ' + mikeGames + ' points')
//     break;
//     case maryGames > johnGames && maryGames > mikeGames:
//         console.log('Mary wins with ' + maryGames + ' points')
//         break;
//     case maryGames === johnGames && maryGames === mikeGames:
//         console.log("It's a tie!")
//         break;
//     default:
//         console.log("No clear winner")
// }

/* **********************
Functions
*/

// function calculateAge (birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement (year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years')
//     } else {
//         console.log(firstName + ' is already retired')
//     }
// }

// yearsUntilRetirement(1990, 'John')
// yearsUntilRetirement(1948, 'Mike')
// yearsUntilRetirement(1969, 'Jane')

/* **********************
Function Statements & Expressions
*/





