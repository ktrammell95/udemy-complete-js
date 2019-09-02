/* **********************
Objects & Methods
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear){
//         return 2018 - this.birthYear;
//     }
// };

// console.log(john.calcAge(1990));
// console.log(john.calcAge(john.birthYear));

// console.log(john.calcAge());
// this = john (current object)

// var age = john.calcAge();
// john.age = age;

// john.age = john.calcAge();
// console.log(john.age);

// var jane = {
//     firstName: 'Jane',
//     lastName: 'Smith',
//     birthYear: 2000,
//     family: ['John','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2018 - this.birthYear;
//     }
// };

// jane.calcAge();
// console.log(jane);