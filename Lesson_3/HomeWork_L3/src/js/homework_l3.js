//Homework Lesson 3:
let t = 0;

//Task 1. 
// Даны две переменные:

//javascript
//let height = 15
//let width = 20

//> С помощью условий выведите в консоль разработчика наибольшее число и название величины. Например, ширина - 20.

console.log("");
console.log("Task 1:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let height = 15,
    width = 20;

if (height > width) {
    console.log(`Высота - ${height}`);
    document.write(`Высота - ${height}`);
} else if (height < width) {
    console.log(`Ширина - ${width}`);
    document.write(`Ширина - ${width}`);
} else {
    console.log(`Величины равны`);
    document.write(`Величины равны`);
}


//Task 2. 
// Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3)
console.log("");
console.log("Task 2:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let periodTask2,
    numberTask2 = 0,
    sumTask2 = 0;  

for(periodTask2 = 1; periodTask2 <= 5; periodTask2++){ //Запускаем цыкл который берёт переменные от 1 до 5;
    while (numberTask2 <= periodTask2) { // Запускаем цикл в котором перемнная number складывается с суммой и таким обрзом получаем сумму числа, как только переменная number становиться больше переменной period, цикл останавливается и выводиться в консоле последння сумма, поесле чего запускается снова первый цикл и берётся следующая число из периода от 1 до 5; 
        sumTask2 = sumTask2 + numberTask2++;
    }
    console.log(sumTask2); 
}

//Task 3. 
//Написать перебор от 1 до 20, где выведутся все числа кратные трём. 
//> Для вычисления кратности обратите внимание на оператор %

console.log("");
console.log("Task 3:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let iTask3,
    jTask3 = 3;

for (iTask3 = 1; iTask3 <= 20; iTask3++) {
    if (iTask3 % jTask3 == 0) {
        console.log (iTask3);
    } 
}

//Task 4. 
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
//Нам точно нужны ключи, документы и ручка, но из еды нам надо яблоко или апельсин.
//Для решения этой задачи нам помогут логические операторы **` || &&`**.

// javascript
// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true

//> Ответ поместите в переменную **shouldGoToWork**

console.log("");
console.log("Task 4:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let key = confirm("Did you take Keys?");
let documents = confirm("Did you take Documents?");
let pen = confirm("Did you take Pen?");
let apple = confirm("Did you take Apple?");
let orange = confirm("Did you take Orange?");

let thingsForWork = key && documents && pen,
    foodForWork = apple || orange,
    shouldGoToWork = thingsForWork && foodForWork;

if (thingsForWork && foodForWork) {
    console.log("You have got THINGS and FOOD");
}else if (thingsForWork || foodForWork) {
    console.log("You forgot somethinks, check please.");
} else {
    console.log("You forgot all!");
}

//Task 5. 
// Запросить у пользователя число:
    // 1. Если число делится без остатка на 5 выводим сообщение Fiz
    // 2. Если число делится без остатка на 3 выводим сообшение Buz
    // 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
console.log("");
console.log("Task 5:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let userNumber = +prompt("Enter please your number:");

if (userNumber % 5 === 0 && userNumber % 3 === 0) {
    console.log("FIZ - BIZ");
} else if (userNumber % 3 === 0) {
    console.log("BUZ");
} else if (userNumber % 5 === 0) {
    console.log("FIZ");
} else {
    console.log("Icorrect number");
}

//Task 6. 
// Написать программу, которая выполняет следующие операции:
    // - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - "Доступ разрешен".
    // - Если меньше, то выводит сообщение - "Доступ запрещен".
    // - Добавить условие, что если возраст от 16-18, выводим сообщение - "Уже почти"
console.log("");
console.log("Task 6:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let userAge = +prompt("Enter please your AGE: ", 18);
console.log(userAge);

if (userAge >= 18) {
    console.log("Access is confirmed!");
} else if (userAge >= 16) {
    console.log("Almost!");
} else if (userAge < 18 && userAge > 0) {
    console.log("Access isn't confirmed!");
} else {
    console.log("You entered incorrect age!");
}

//Task 7. 
// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

// + `юг` на юг пойдешь счастье найдешь
// + `север` на север пойдешь много денег найдешь
// + `запад` на запад пойдешь верного друга найдешь
// + `восток` на восток пойдешь разработчиком станешь

// //> Используйте конструкцию switch

console.log("");
console.log("Task 7:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

const   sideNorth = "North",
        sideEast = "East",
        sideWest = "West",
        sideSouth = "South";

let sideWorld = prompt("Please, enter side of the Worlds: " + sideNorth + ", " + sideEast + ", " + sideWest + " or " + sideSouth);
console.log(sideWorld + typeof(sideWorld));

switch (sideWorld) {
    case sideNorth: 
        console.log("You selected North!");
        break;
    case sideEast: 
        console.log("You selected East!");
        break;
    case sideWest: 
        console.log("You selected West!");
        break;
    case sideSouth: 
        console.log("You selected South!");
        break;
    default:
    //!sideNorth || !sideEast || !sideWest || !sideSouth: 
        console.log("Try again!");
        break;
}

//#### ADVANCED level

//#### Task.1
//Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите общую сумму и среднее• арифметическое введённых чисел. • Если пользователь ввел не число, то вывести сообщение об ошибке Евода. При подсчете учесть, что пользователь может ввести отрицательное значение. 
console.log("");
console.log("ADVANCED Task 1:");
document.write("<h2 class = 'script__redColumn-title'>ADVANCED Task" + " " + (++t - 7) + "</h2><br>");

/* !!!Change code. Make thrue the cycle - while () {}*/

/*let TotalSum = 0;
let AverageNumbers = 0;
let numberFromUser = 0;
let countIteretion = 1;

for (let i = 1; i < 1000; i++) {
    numberFromUser = +prompt("Hey, enter please some number more then 0: ", 0);
    if (numberFromUser) {
        TotalSum = TotalSum + numberFromUser;
        countIteretion = i;
        console.log("Total Sum: " + "[" + i + "]" + TotalSum);
    } else if (numberFromUser === 0) {
        alert("You Entered 0 or EMPTY value, program are stopped");
        break;
    } else if (!numberFromUser) {
        alert("You Entered Incorrect Value, please enter number");
        i--;
        continue;
    }
}*/

let sum = 0, number = 0, i = 0;

while (true) {
    number = +prompt("Hey, enter please some NUMBER more THEN 0: ", 0);
    
    console.log("NUMBER: " + number);

    if (!number) {
        if (isNaN(number)) {
            alert("You Entered Incorrect Value, please enter number");
            continue;
        } 
        alert("You Entered 0 or EMPTY value, program are stopped");
        break;
    } else {
    sum += number;
    i++;
    console.log("Total Sum: " + "[" + i + "]" + sum);
    } 
}

alert(`Total Sum = ${sum}, 
Average Numbers = ${sum / i}`);


//#### Task.2
//Написать программу, которая выполняет следующие операции:

//1. Запрашивает у пользователя число
//2. Последовательно задает вопрос:
//  • Сколько отнять / прибавить / умножить / разделить от предыдущего результата?
//3. По окончании вывести пользователю ** alert* **, содержащий формулу и результат например:
//  > ((((6 - 10) + 5) * 20) / 2 = 110)
console.log("");
console.log("ADVANCED Task 2:");
document.write("<h2 class = 'script__redColumn-title'>ADVANCED Task" + " " + (++t - 7) + "</h2><br>");

let changeNumber;
let newNumber;
let subtractNumber,
    addNumber,
    multiplyNumber,
    divideNumber;

let firstNumber = +prompt("Please enter some FIRST NUMBER:");
console.log("First Number: " + firstNumber);

for (let i = 1; i < 5; i++) {
    if (firstNumber){
        changeNumber = +prompt("How much to subtract/add/multiply/divide from the previous result?: ");
        if (i === 1) {
            subtractNumber = firstNumber - changeNumber;
            console.log("Subtract Number: " + " [" + i + "] " + subtractNumber);
        } else if (i === 2) {
            addNumber = subtractNumber + changeNumber;
            console.log("Add Number: " + " [" + i + "] " + addNumber);
        } else if (i === 3) {
            multiplyNumber = addNumber * changeNumber;
            console.log("Multiply Number: " + " [" + i + "] " + multiplyNumber);
        } else if (i === 4) {
            divideNumber = multiplyNumber / changeNumber;
            console.log("Divide Number: " + " [" + i + "] " + divideNumber);
            newNumber = divideNumber;
            break;
        }
    } 
}
alert(`((((${firstNumber} - ${firstNumber - subtractNumber}) + ${addNumber - subtractNumber}) * ${multiplyNumber / addNumber}) / ${changeNumber} = ${newNumber})`);

//#### Task.3
// Написать программу, которая будет выводить в консоль лесенку.

/*
    #
    ##
    ###
    ####
    #####
    ######
*/

// > Не забудьте вопспользоваться циклами

console.log("");
console.log("ADVANCED Task 3:");
document.write("<h2 class = 'script__redColumn-title'>ADVANCED Task" + " " + (++t - 7) + "</h2><br>");

let step = "#"; 
let a = "#";
let b = "<br>";

for (let i = 0; i < 6; i++) {
    document.write(`${(a) + b}`);
    for (let j = 0; j < 1; j++) {
        a = a + step;
    }
}