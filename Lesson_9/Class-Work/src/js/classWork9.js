import enteredCity from '../../../../Lesson_6_7/Class-Work/src/js/classWork6-7.js';


console.log("--------------------------------------------------------------START CLASS WORK 9--------------------------------------------------------------");

//CHAPTER #1. MASSIVES



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


//2.2. setTimeout / setInterval

function timeMethods() {
    //
    setTimeout(() => calc(a, function(a) { return a ** 3}, function(a) { return a * 2}), 3000);
    //
    //setInterval(() => enteredCity.forEach(getCountryFromCity), 5000);
} 


timeMethods();

// 2.3 Arrow Functions

const calcArrow = (a,b,c) => a + b +c;

setTimeout(() => document.querySelector('.item_one').innerHTML = calcArrow(a, a + a, a * a), 3000);
setTimeout(() => document.querySelector('.item_two').innerHTML = calcArrow(a, a - a, a * a), 6000);
setTimeout(() => document.querySelector('.item_three').innerHTML = calcArrow(a, a - a, a + a), 9000);
setTimeout(() => document.querySelector('.item_four').innerHTML = calcArrow(a, a * a * 5, a - a), 12000);
