import enteredCity from '../../../../Lesson_6_7/Class-Work/src/js/classWork6-7.js';


console.log("--------------------------------------------------------------START CLASS WORK 9--------------------------------------------------------------");

//CHAPTER #1. MASSIVES METHODS

//arr.forEach
//arr.map
//arr.filter
//arr.reduce


//CHAPTER #2. CALLBACK FUNCTION
console.log("--------------------------------------------------------------2. CALLBACK FUNCTION--------------------------------------------------------------");


function calc(param, func1, func2) { //Function 1 callback function
    // console.log('Func2', func2);
    // console.log('Func1', func1);
    // console.log('Param', param);
    let result;

    if (param > 1) { 
        result = func1(param);
    } else {
        result = func2(param);
    }

    console.log("Function calc result: "+ result)
}

console.table(enteredCity); //show importaed array from previuse class work 6 - 7

let a = Math.floor(Math.random() * enteredCity.length); //Randam generation variable "A"

console.log("Variable A: " + a);

calc(a, function(a) { return a ** 3}, function(a) { return a * 2}); //declaration function "calc" with parameters

function getCountryFromCity(city) {
    let country = " Unknown Country";
    switch (city){
        case 'Trebic':
            country = 'Czech Republic';
            break;
        case "Paris":
                country = "France";
            break;
        
        case "Rome":
                country = "Italy";
            break;
        
        case "Bratislava":
                country = "Slovakia";
            break;
        
        case "Kyiv":
                country = "Ukraine";
            break;
        default:
           country = "Unknown Country";
    }
    console.log("Country: " + country);
}

//2.1. Massive forEach:
const showCountries = enteredCity.forEach(getCountryFromCity);

//ForEach + callback function
//value = each element of arr; index = index of element in the arr; array = current array
// array.forEach(callback(value, index, array), this);


//2.2. setTimeout / setInterval

function timeMethods() {
    //
    setTimeout(() => calc(a, function(a) { return a ** 3}, function(a) { return a * 2}), 3000);
    //
    //setInterval(() => enteredCity.forEach(getCountryFromCity), 5000);
} 


timeMethods();

// 2.3 Arrow Functions

//Line type
const calcArrowLine = (a,b,c) => a + b + c + (a + enteredCity.length); //Function name -> parameters -> body of function (automatically returning)

//Bloack type
const calcArrowBlock = (a, b, c) => { //Function name -> parameters -> body of function
    return (a + b) * c + enteredCity.length;
}; 

setTimeout(() => document.querySelector('.item_one').innerHTML = calcArrowLine(a, a + a, a * a), 3000);
setTimeout(() => document.querySelector('.item_two').innerHTML = calcArrowBlock(a, a - a, a * a), 6000);
setTimeout(() => document.querySelector('.item_three').innerHTML = calcArrowBlock(a, a - a, a + a), 9000);
setTimeout(() => document.querySelector('.item_four').innerHTML = calcArrowLine(a, a * a * 5, a - a), 12000);


//2.4 Closures in JavaScript

function outer() {
  let count = 0; //This varibale is available inside the function "inner()"

  return function inner() { // Each time when this function is declarated, 
    count++; //the count = 'previouse value OR beginning value in parent function', +1 
    console.log(count); // show new "count" value
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3


//