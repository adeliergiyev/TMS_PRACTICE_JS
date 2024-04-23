//Статьи из https://learn.javascript.ru/ 

//ОПЕРАТОРЫ

//1.Присваивание
//2. Математические
//3. Составное присваивание
//4. Инкремент / Декремент
//5. Равенство
//6. Сравнение
//7. Логические

//Преобразование типов:

let t = 0;

//Task 1. 
// Какой результат будет у выражений ниже?
console.log("");
console.log("Task 1:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let a1 = "" + 1 + 0, // = 10;
    a2 = "" - 1 + 0, // = -1;
    a3 = true + false, // = 1; 
    a4 = 6 / "3", // = 2;
    a5 = "2" * "3", // = 6;
    a6 = 4 + 5 + "px", // = 9px;
    a7 = "$" + 4 + 5, // = $45;
    a8 = "4" - 2, // = 2;
    a9 = "4px" - 2, // = NaN; 
    a10 = "  -9  " + 5, // = -9 5;
    a11 = "  -9  " - 5, // = -14;
    a12 = null + 1, // = 1;
    a13 = undefined + 1, // = NaN;
    a14 = " \t \n" - 2; // = -2; 

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
console.log(a14);

/*
(a1) Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.
(a2) Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.
(a10) Сложение со строкой превращает число 5 в строку и добавляет к строке.
(a11) Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
(a12) null становится 0 после численного преобразования.
(a13) undefined становится NaN после численного преобразования.
(a14) Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.
*/

//Task 2. 
// Каким будет результат этих выражений?
console.log("");
console.log("Task 2:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let b1 = 5 > 4, // = true;
    b2 = "ананас" > "яблоко", // = false;
    b3 = "2" > "12", // = true; 
    b4 = undefined == null, // = true;
    b5 = undefined === null, // = false;
    b6 = null == "\n0\n", // = false;
    b7 = null === +"\n0\n"; // = false;

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);
console.log(b7);

/*
Разъяснения:
(b1) Очевидно, true.
(b2) Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
(b3) Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
(b4) Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
(b5) Строгое сравнение разных типов, поэтому false.
(b6) Аналогично (4), null равен только undefined.
(b7) Строгое сравнение разных типов.
*/

//Task 3. 
// Получение первого истинного значения из списка переменных или выражений.
console.log("");
console.log("Task 3:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let firstNameTask3 = prompt("First Name:"),
    lastNameTask3 = prompt("Last Name:"),
    nicktNameTask3 = prompt("Nick Name:");

console.log(firstNameTask3 || lastNameTask3 || nicktNameTask3 || "Please enter your data!"); // Цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.

//Task 4. 
// Мы уже знаем, что ИЛИ || возвращает первое истинное значение, поэтому, если a является таковым, вычисление до правой части выражения не дойдёт.
console.log("");
console.log("Task 4:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let yorCar = prompt("Enter brand of your car:");

yorCar ||= "Sorry, but you didn't entered brand of car"; // Если из промпта прийдёт true тогда в консоле выведется значение переменной, если вернётся false тогда для переменной "youCar" присвоется значение "Sorry, but you didn't entered brand of car". 
console.log(yorCar);

//Task 5. 
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.
console.log("");
console.log("Task 5:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let ageTask5 = +prompt("Enter your age:");

if (ageTask5 >= 14 && ageTask5 <= 90) { //Сравнивает значение ageTask5, если значение больше или равно 14 И меньше или равно 90, тогда выводить первое сообщение.
    console.log("Your age is fine!");
}
else {
    console.log("Your age is bad!"); //В противном случае выводить второе сообщение.
}

//Task 6. 
// Напишите код, который будет спрашивать логин с помощью prompt. Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
//Пароль проверять так:
// - Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// - Иначе – «Неверный пароль»,
// - При отмене или в случае если ничего не введено – «Отменено».

console.log("");
console.log("Task 6:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let userNameTask6 = prompt("Enter please your Username:"), //Ввыводим промт для ввода имя пользователя;
    userCanceledTask6 = "Cancled!", // Объявляем переменные и присваиваем значения с сообщениями для пользлвателя; 
    incorrectUserTask6 = "I don't know you!", // Объявляем переменные и присваиваем значения с сообщениями для пользлвателя; 
    incorrectPassTask6 = "Incorrect password!", // Объявляем переменные и присваиваем значения с сообщениями для пользлвателя; 
    welcomeMessageTask6 = "Hello"; // Объявляем переменные и присваиваем значения с сообщениями для пользлвателя; 


if (userNameTask6 === "Admin") { // Задаём условия, что если введёное имя пользователя строго равно "Admin", тогда нужно вывести еще один промпт с вводом пароля;
    userPassTask6 = prompt("Enter please your password:"); // Вывод промпта с вводом пароля; 
    if (userPassTask6 === "General") { // Условаие если пароль равен "General", тогда ввыводим сообщение с приветствием; 
        alert(welcomeMessageTask6 + " General!"); // Сообщение с приветствием; 
    } else if (userPassTask6 === null) { // Условие: если пользователь нажал Esc тогда выводим сообщение об отмене; 
        alert(userCanceledTask6); // Вывод сообщения об отмене; 
    }
    else {
        alert(incorrectPassTask6); // В противном случае выводим сообщение об некорректном пароле; 
    }
}
else {
    if (userNameTask6 === null) { // Условие: если пользователь нажал Esc при вводе имя пользователя тогда выводим сообщение об отмене; 
        alert(userCanceledTask6); // Вывод сообщения об отмене; 
    }
    else {
        alert(incorrectUserTask6); // В противном случае выводим сообщение об некорректном имени пользователя; 
    }
}

//Видео урок:
//Task 7. 
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'
console.log("");
console.log("Task 7:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let strTask7 = "123321";
let strFirstPartTask7 = +(strTask7[0]) + +(strTask7[1]) + +(strTask7[2]);
let strSecondPartTask7 = +(strTask7[3]) + +(strTask7[4]) + +(strTask7[5]);

//----Long variant---------//
// if (strFirstPartTask7 === strSecondPartTask7){
//     console.log("Yes");
// } else {
//     console.log("No");
// }

//-----Short Variant-------//
(strFirstPartTask7 === strSecondPartTask7) ? console.log("Yes") : console.log("No");

// let i = 0;
// while (i++ < 5) alert( i ); 


//Task 8. 
// Выведите числа от 1 до 50 и от 35 до 8
console.log("");
console.log("Task 8:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let i = 1;

while (i <= 50) {
    document.write(i + "<br>");
    i++;
}

let j = 35;
while (j >= 8) {
    document.write(j + "<br>");
    j--;
}

//Task 9. 
//Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа // тегом <br /> друг от друга, чтобы получить столбец, а не строку.
console.log("");
console.log("Task 9:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");


for (let a = 89; a >= 11; a--){
    document.write("<div class = 'script__redColumn'>" + a + "</div><br>");
    console.log(a);
}

//Task 10. 
//С помощью цикла найдите сумму чисел от 0 до 100.
console.log("");
console.log("Task 10:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let sum = 0;

for (let aTask10 = 0; aTask10 <= 100; aTask10++){
    document.write("<div class = 'script__redColumn'>" + aTask10 + "</div><br>");
    sum = sum + aTask10;
}
document.write("<div class = 'script__redColumn_summ'>" + sum + "</div><br>");

//Task 11. 
//Дано число п=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых И для этого (итерация - это проход цикла), и запишите его в переменную num. 
console.log("");
console.log("Task 11:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

let numTask11 = 0;
    nTask11 = 1000; 

//     for (let nTask11 = 1000; nTask11 >= 50; nTask11 /= 2){
//          numTask11 = ++numTask11;
//          document.write("<div class = 'script__redColumn-iteration'>" + nTask11 + "</div><br>");
// }
// document.write("<div class = 'script__redColumn-numbers'>Number of iteration: " + numTask11 + "</div><br>");

while (nTask11 >= 50) {
    nTask11 = nTask11 /2;
    numTask11++;
    document.write("<div class = 'script__redColumn-iteration'>" + nTask11 + "</div><br>");
    
}
document.write("<div class = 'script__redColumn-numbers'>Number of iteration: " + numTask11 + "</div><br>");

//Task 12. 
//Вывести таблицу умножения
console.log("");
console.log("Task 12:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

for (let iTask12 = 1; iTask12 <= 10; iTask12++){
    for(let jTask12 = 1; jTask12 <= 10; jTask12++){ //Внутренний цикл работает так что должны пройти все итерации внутреннего цикла и только потом запускается следуюзая итерация первого цикла;
        document.write(`${iTask12} * ${jTask12} = ${iTask12 * jTask12} <br>`);
    }
    document.write(`<div class = "script__table-task12"></div>`);
}

//Task 13. 
//Вывести период год на основании номера месяца. Через switch
console.log("");
console.log("Task 13:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");


// Solution thrue the operator SWITCH:
let xTask13 = +prompt("Enter please your number from 1 to 12: ", 4); // Через prompt задаём значение переменной;

switch(xTask13) { //Конструкция "switch" (используется для условий);
    case 3 : // если значение xTask13 = 3, тогда в консоле выведеться текст "It's Spring";
    case 4 : // если значение xTask13 = 4, тогда в консоле выведеться текст "It's Spring";
    case 5 : // если значение xTask13 = 5, тогда в консоле выведеться текст "It's Spring";
        console.log("It's Spring");
        break; // Останавлиет сравнение; 
    case 6 : // если значение xTask13 = 6, тогда в консоле выведеться текст "It's Summer";
    case 7 : // если значение xTask13 = 7, тогда в консоле выведеться текст "It's Summer";
    case 8 : // если значение xTask13 = 8, тогда в консоле выведеться текст "It's Summer";
        console.log("It's Summer");
        break; // Останавлиет сравнение; 
    case 9 : // если значение xTask13 = 9, тогда в консоле выведеться текст "It's Automn";
    case 10 : // если значение xTask13 = 10, тогда в консоле выведеться текст "It's Automn";
    case 11 : // если значение xTask13 = 11, тогда в консоле выведеться текст "It's Automn";
        console.log("It's Automn");
        break; // Останавлиет сравнение; 
    case 12 : // если значение xTask13 = 12, тогда в консоле выведеться текст "It's Winter";
    case 1 : // если значение xTask13 = 1, тогда в консоле выведеться текст "It's Winter";
    case 2 : // если значение xTask13 = 2, тогда в консоле выведеться текст "It's Winter";
        console.log("It's Winter");
        break; // Останавлиет сравнение; 
    default:
        console.log("This number is isncorrect.");  // если значение xTask13 < 1 или > 12 или не числовое значени, тогда в консоле выведеться текст "It's Winter";
        break;
}

// Solution thrue the operator SWITCH + if...else, для подусловия:
let yTask13 = +prompt("Enter please your number from 1 to 12: ", 4); // Через prompt задаём значение переменной;

switch(yTask13) {
    case 3 : // если значение xTask13 = 3, тогда в консоле выведеться текст "It's Spring";
    case 4 : // если значение xTask13 = 4, тогда в консоле выведеться текст "It's Spring";
    case 5 : // если значение xTask13 = 5, тогда в консоле выведеться текст "It's Spring";
        console.log("It's Spring");
        if(yTask13 == 3){console.log("This month is Mart")}
        else if(yTask13 == 4){console.log("This month is April")}
        else{console.log("This month is May")}
        break; // Останавлиет сравнение; 
    case 6 : // если значение xTask13 = 6, тогда в консоле выведеться текст "It's Summer";
    case 7 : // если значение xTask13 = 7, тогда в консоле выведеться текст "It's Summer";
    case 8 : // если значение xTask13 = 8, тогда в консоле выведеться текст "It's Summer";
        console.log("It's Summer");
        if(yTask13 == 6){console.log("This month is June")}
        else if(yTask13 == 7){console.log("This month is July")}
        else{console.log("This month is August")}
        break; // Останавлиет сравнение; 
    case 9 : // если значение xTask13 = 9, тогда в консоле выведеться текст "It's Automn";
    case 10 : // если значение xTask13 = 10, тогда в консоле выведеться текст "It's Automn";
    case 11 : // если значение xTask13 = 11, тогда в консоле выведеться текст "It's Automn";
        console.log("It's Automn");
        if(yTask13 == 9){console.log("This month is Septemver")}
        else if(yTask13 == 10){console.log("This month is October")}
        else{console.log("This month is November")}
        break; // Останавлиет сравнение; 
    case 12 : // если значение xTask13 = 12, тогда в консоле выведеться текст "It's Winter";
    case 1 : // если значение xTask13 = 1, тогда в консоле выведеться текст "It's Winter";
    case 2 : // если значение xTask13 = 2, тогда в консоле выведеться текст "It's Winter";
        console.log("It's Winter");
        if(yTask13 == 12){console.log("This month is December")}
        else if(yTask13 == 1){console.log("This month is January")}
        else{console.log("This month is Febrery")}
        break; // Останавлиет сравнение; 
    default:
        console.log("This number is isncorrect.");  // если значение xTask13 < 1 или > 12 или не числовое значени, тогда в консоле выведеться текст "It's Winter";
        break;
}


//Task 14. 
//Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
//Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
console.log("");
console.log("Task 14:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

// let numberTask14;

// do {
//     numberTask14 = +prompt("Enter any number more than 100: ", 0);
//     console.log(numberTask14);
// } while (numberTask14 <= 100 && numberTask14);

//Task 15. 
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
//Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Для n = 10 результат должен быть 2,3,5,7.
//P.S. Код также должен легко модифицироваться для любых других интервалов.

console.log("");
console.log("Task 15:");
document.write("<h2 class = 'script__redColumn-title'>Task" + " " + ++t + "</h2><br>");

// let nTask15 = 10, 
//     kTask15 = 2,
//     tTask15; 

//     while (kTask15 <= 10){
//     if (nTask15 % kTask15++ !== 0) console.log(kTask15);
// }

