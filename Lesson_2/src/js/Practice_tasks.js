//Task 1. Creat variable STR, with "Hello world!" value, and show it on html page. 
console.log("-- Practice Task 1 --");

let str = "Hello world!"
console.log(str);

//Task 2. Creat variables STR1 and STR2, with "Hello, " and "World!" values, and show it on html page. 
console.log("-- Practice Task 2 --");

let str1 = "Hello, ",
    str2 = "World!";

console.log(str1 + str2);

//Task 3. Creat variables AGE, with your age values, and show it on html page message I am "your age" years old. 
console.log("-- Practice Task 3 --");

let age = 36;
const userMessageFirst = "I am ";
const userMessageSecond = " years old!";

console.log(userMessageFirst + age + userMessageSecond);
console.log(typeof (userMessageFirst + age + userMessageSecond));
console.log(typeof (age));

//Task 4. Types of messages:
console.log("-- Practice Task 4 --");

alert(userMessageFirst + age + userMessageSecond);
confirm(userMessageFirst + age + userMessageSecond);
prompt("Enter your Name?");

let userName = prompt("Enter your Name?");
console.log(userName);


//Task 5. Enter some number thrue the "Prompt" and back number to the second power.
console.log("-- Practice Task 5 --");

let userNumber = +prompt("Enter any number?"), // "+" перед PROMPT делает тип переменной из STRNG в NUMBER;
    userNumberSgr = userNumber ** 2, // "** 2" возводит переменную в квадрат;
    userNumberSgrt = Math.sqrt(userNumber); // математическая функция "Math.sqrt" извлекает из переменной "userNumber" корень квалратный;

console.log(typeof (userNumber)); // выводит в консоли тип переменной; 
console.log(userNumberSgr); // выводим в консоль переменную;
console.log(userNumberSgrt); // выводим в консоль переменную;
alert("Squre of your number is " + userNumberSgr); // Выводит в алетре сообшение и пременную userNumberSgr;

//Task 6. Спросить у пользователя имя, фамилию, возраст через prompt. Вывести в alert Имя, Фамилию и год рождения.
console.log("-- Practice Task 6 --");

let visitorName = prompt("Enter your Name:"),
    visitorSurname = prompt("Enter your Surname:"),
    visitorAge = +prompt("Enter your Age:"),
    visitorBirthday = new Date().getFullYear() - visitorAge; // Записываем в переменнуж текущий год минус возраст полученный в prompt visitorAge;

alert(
    `
    Your Name is ${visitorName} 
    Your Surname is ${visitorSurname}
    Yuor Birthday is ${visitorBirthday}
    `
); // Обратные ковычки позвалаюм вкладывать внутрь текста переменные используя ${VARIABLE};

//Task 7. Создайте переменную и присвойте ей значение "abcde". Обращаясь к отдельным символам этой стриоки вывести на экран символы "a", "c", "e". 
console.log("-- Practice Task 7 --");

let strTask7 = "abcde",
    strTask7a = strTask7[0]; //Присваеваем переменной определённый символ другой строчной переменной, в данном случае символ под номером 0; 
    strTask7c = strTask7[2]; //Присваеваем переменной определённый символ другой строчной переменной, в данном случае символ под номером 2; 
    strTask7e = strTask7[4]; //Присваеваем переменной определённый символ другой строчной переменной, в данном случае символ под номером 4; 

console.log(strTask7a + ", " + strTask7c + ", " + strTask7e); // Выводим все полцченные символы в консоли;


//Task 8. We have two VARIABLES, countTask8(number type) and userNameTask8(string type). Change types of data for both VARIABLES.  Number -> String, String -> Number. Try to do it with few different ways. 
console.log("-- Practice Task 8 --");

let countTask8 = 47,
    userNameTask8 = '48';

console.log("-- WAY 1st: --");

let countTask8ToString = "" + countTask8, // Change variable from Number Type to String;
    userNameTask8ToNumber = +userNameTask8; // Change variable from String to Number Type;

console.log(typeof(countTask8ToString), countTask8ToString); //Show type and value of valiable in the console;
console.log(typeof(userNameTask8ToNumber), userNameTask8ToNumber); //Show type and value of valiable in the console;


console.log("-- WAY 2nd: --");
countTask8 = 47,
userNameTask8 = '48';

countTask8ToString =  String(countTask8), //Change variable from Number Type to String;
userNameTask8ToNumber = Number(userNameTask8); //Change variable from String to Number Type;

console.log(typeof(countTask8ToString), countTask8ToString); //Show type and value of valiable in the console;
console.log(typeof(userNameTask8ToNumber), userNameTask8ToNumber); //Show type and value of valiable in the console;
