//This JS file is for executing Home work lesson 4. Functions

//Использовать строгий режим
"use strict";
//Если в задаче необходимо использовать новые методы - необходимо оставить комментарий и расписать их детально (зачем используются и как работают)

//NORMAL LEVEL:
//Ex 1. Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
//Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050).

//Get random number from User thrue the PROMPT:
const enteredNumner = +(prompt("Enter any number 🎲:"));

//Function that return sum of all numbers untill entered number by user
const getSum = function(mainNumber) {
    let sum = 0; 
    for(let i = 0; i <= mainNumber; i++) {
        sum += i;
    }
    return sum;
}

//Function expression
console.log("Total Summa is equel: ", getSum(enteredNumner));



//Ex 2.
//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
//+ процентная ставка в год - 17%, 
//+ количество лет - 5.
//Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

//Get amount of credit from User thrue the PROMPT:
const creditSumma = +(prompt("Enter Sum Of Requesting Credit, CZK 🤑🤑🤑:"));

//Function that return total interest overpayments based on enterd amount of credit by user
const getInterestOverpaymentAmount = function(creditSumma) {
    let annualInterestRate = 0.17; // Annual Interest Rate Of Bank 17%
    let periodYears = 5; //Period of credit 5 years

    const totalInterestOverpayments = creditSumma * annualInterestRate * periodYears;
    return totalInterestOverpayments.toFixed(2);
}

//Function expression and displaying results in console of browser
console.log(`Total Sum Of Overpaying: ${getInterestOverpaymentAmount(creditSumma)} CZK`);

//Ex 3. 
//Использовать методы обрезки строк:
//Написать функцию  **trimString** которая в качестве аргумента принимает три параметра:
//+ строку 
//+ значение от 
//+ значение по
//После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

//Getting string text from user thrue the PROMPT:
const gettedString = String(prompt("Entered any word with 8 signs:")),
    trimFrom = 2,
    trimTo = 5;

    debugger;
//Function that return trimmed text from 2nd to 5th sign:
const trimString = function(stringText, from, to) {
    console.log("Entered word: ", stringText);
    return stringText.slice(from, to);
}

//Showing in console results after returning trimmed text from function: 
console.log(`The trimmed string: ${trimString(gettedString, trimFrom, trimTo)}`);



//Ex 4. 
//Дополнительно добавить проверку на число:
//Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
//＞Для 2021 это будет 5.

//
const newNumber = +(prompt("Entered some number:")) || false;

//Function that return digitals sum of entered number:
const getSumNumbers = function(newNumber) {
    console.log("Entered number: ", newNumber);
    if (newNumber) {
        return newNumber
        .toString() //transform value from number to string;
        .split('') //separate entered number to array of signs;
        .map(Number) //change type of all signs to number;
        .reduce((accomulation, currentValue) => accomulation + currentValue, 0); //sumirize all signs in array;
    } else {
        return newNumber = "The Number isn't entered."
    }

}

//Showing in console results after returning value from function: 
console.log(`Summa of entered diggitals is equel: ${getSumNumbers(newNumber)}`);




//Ex 5. 
//Написать функцию **getSum** которая принимает два целых числа а и b, которые могут быть положительными или отрицательными, 
//найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните а или b. Возможна ситуация, когда а будет больше b, 
//сделать проверку и на это

/** getSum (1, 0) == 1 // 1 + 0 = 1
 *  getSum (1, 2) == 3 // 1 + 2 =3
 *  getsum（3，1） == 4 // 1 + 2 + 3 = 4 
 *  getSum (0, 1) == 1 // 0 + 1 = 1 
 *  getSum (1, 1) == 1 // 1 Since both are same
 *  getsum（-1, 0）== -1 // -1 + 0 = -1
 *  getSum (-1, 2) == 2 // -1 + 0 + 1 + 2 = 2
 */

//This
const numberAlfa = parseInt(prompt("Entered ALFA:", 0), 10) || 0;
const numberBeta = parseInt(prompt("Entered BETA:", 0), 10) || 0;

//Function that return digitals sum of entered number:
const getSumBetweenNumbers = function(numberAlfa, numberBeta) {
    console.log("Entered ALFA: ", numberAlfa);
    console.log("Entered BETA: ", numberBeta);

    if (numberAlfa === numberBeta) return numberAlfa;

    if (numberAlfa > numberBeta) [numberAlfa, numberBeta] = [numberBeta, numberAlfa];

    let sumBetweenNumbers = 0;

    for(let i = numberAlfa; i <= numberBeta; i++) {
        sumBetweenNumbers += i;
    }
    //debugger; 

    return sumBetweenNumbers;
}

//Showing in console results after returning value from function: 
console.log(`Summa BETWEEN entered diggitals is equel: ${Number(getSumBetweenNumbers(numberAlfa, numberBeta))}`);

//Ex 6. Изучить как передавать функцию в качестве параметра
//Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
//+ булевое значение 
//+ функцию **foo** которая выводит в консоль свое имя
//+ функцию **boo** которая выводит в консоль свое имя
//Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

//This
let userInput;
let booleanVar;

userInput = +(prompt("Enter 1 or 0:", 0));

console.log("Input", userInput);

if (userInput === 1 || userInput === 0) {
    booleanVar = !!userInput;
}

console.log("Bool", booleanVar);

function foo() {
    console.log("Function Foo");
};

function boo() {
    console.log("Function Boo");
};

function fooboo(booleanVar, foo, boo) {
    booleanVar ? foo() : boo();
};

fooboo(booleanVar, foo, boo);

//ADVANCED LEVEL:
//Ex 1. 
// + Реализуйте функцию, который принимает 3 целочисленных значения а, b, с. Функция должна возвращать
//**true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае. 
//Найти формулу рассчета в интернете

//This
// const sideA = +(prompt("Enter please side A:", 0)) || 0;
// const sideB = +(prompt("Enter please side B:", 1)) || 0;
// const sideC = +(prompt("Enter please side C:", 2)) || 0;

// console.log(`A Side: ${sideA}`);
// console.log(`B Side: ${sideB}`);
// console.log(`C Side: ${sideC}`);

// function isValidTriangle(sideA, sideB, sideC) {
//         return (sideA + sideB) > sideC && (sideA + sideC) > sideB && (sideB + sideC) > sideA;
// }

// console.log(`Is Triangle is possible?: ${isValidTriangle(sideA, sideB, sideC)}`);

//Ex 2.
// + Ваша задача - разбить плитку шоколада заданного размера n х т на маленькие квадраты. 
//Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество 
//необходимых надломов.

// + Например, если вам дается плитка шоколада размером 2 х 1, вы можете разделить ее на отдельные квадраты всего за один надлом, 
// но для размера 3 х 1 вы должны сделать два надлома.

// + Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). 
//Ввод всегда будет неотрицательным целым числом.

//
const usersArr = [
    {name: "Aleks", Ege: 23, Sername: "Deliergiyev"},
    {name: "Aleksandra", Ege: 25, Sername: "Suvorova"}
];

usersArr.forEach(user => console.log(user.name + " " + user.Sername));