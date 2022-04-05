/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
// f - 32 * 5/9 
function ftoc(far){
    return ((far-32) * (5/9))
};
console.log(ftoc(32));
console.log(ftoc(212));
console.log(ftoc(50));
console.log('=========');
let ftoc2 = far => ((far-32) * (5/9));
console.log(ftoc2(32));
console.log(ftoc2(212));
console.log(ftoc2(50));
console.log('=========');

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the users password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User{
    constructor(username, password){
        this.username = username
        this.password = password
    };

    reset_password(old_password, password){
        if (old_password === this.password){
            this.password = password
        };
    };
};
//Create Bob
let Bob = new User('Bob', 'bob123');
console.log(Bob.username, Bob.password);
//Fail to reset password, give wrong password
Bob.reset_password('bob321', '321bob');
console.log(Bob.username, Bob.password)
//Reset password, give correct password
Bob.reset_password('bob123', '321bob');
console.log(Bob.username, Bob.password);
console.log('=========');
/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

function squareNegatives(arr){
    let sq_neg = []
    arr.forEach(num => {
        if (num < 0){
            sq_neg.push(num ** 2)
        };
    } )
    return sq_neg
};

console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3]));
console.log(squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));
console.log(squareNegatives([2, 4, 6, 8, 10]));
console.log('=========');
console.log('Filter/Map')
function neg_nums_squared(arr){
    let negs = arr.filter(num => num < 0);
    let sq_negs = negs.map(item => item ** 2);
    return sq_negs
};

console.log(neg_nums_squared([-10, -3, 4, -2, 8, 9, -3]));
console.log(neg_nums_squared([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));
console.log(neg_nums_squared([2, 4, 6, 8, 10]));




