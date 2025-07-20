//Teoretical Part.
//Ex 1. Domain of variables in functions:
let userAge = 15;

showSecondUserAge (userAge);

function showUserAge (userAge) {
    console.log("User Age #1", userAge);
    userAge = 37; 
    console.log("User Age #2", userAge);
}
userAgeAfterFunction = 27;
userAge = userAgeAfterFunction;

showUserAge(userAge);
console.log("User Age #3", userAge);

function showSecondUserAge (userAge) {
    console.log("User Age #4", userAge);
    userAge = 45;
    console.log("User Age #5", userAge);
} 

console.log("User Age #6", userAge);

//Ex 2. 
//Написать функцию, получающую на вход два числа:
// - Если оба числа чётные - функция возвращает их произведение. 
// - Если оба числа нечётные - функция возвращает их сумму.
// - Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

let number, a, b;

let numberOrder = "First";

//Getting two different numbers a and b from USER:
for (i = 0; i < 2; i++) {
    number = +prompt(`Enter please ${numberOrder} number:`);
    if (number && !a) {
        numberOrder = "Second";
        a = number;
    }
    b = number;
}    

//Show entered numbers in CONSOLE:
console.log("First Number: ", a);
console.log("Second Number: ", b);

//Function for checking if number a or b is even number:
const isEven = function(x) {
    return x % 2 == 0;
}

//Function with executing our conditions and returning result:
const checkingNumber = function(a, b) {
    if (isEven(a) && isEven(b)) {
        return a * b; 
    } else if (!isEven(a) && !isEven(b)) {
        return a + b;
    } else {
        return !isEven(a) ? a : b;
    }
}

//Showing result in CONSOLE:
console.log("Rusult is equel: ", checkingNumber(a,b));