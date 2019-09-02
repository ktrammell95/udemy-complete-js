// /* **********************
// Coding challenge 4
// */

/* Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass/ height^2 = mass/ (height * height). (mass in kg and height in meter).
*/

var john = {
    firstName: 'John',
    height: 110,
    weight: 1.8796,
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    firstName: 'Mark',
    height: 110,
    weight: 1.8796,
    calcBMI: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;

    }
};

john.calcBMI();
mark.calcBMI();
console.log(john);
console.log(mark);

if (mark.calcBMI() > john.calcBMI()){
    console.log(mark.fullName + ' has a higher BMI with ' + mark.bmi);
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI with ' + john.bmi);
} else {
    console.log('They have the same BMI');
}