// /* **********************
// Coding challenge 2
// */

// /* John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 183 points, while Mike's team scored 116, 94, and 123 points.

// 1. Calculate the average score for each team.
// 2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 185 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
// */

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