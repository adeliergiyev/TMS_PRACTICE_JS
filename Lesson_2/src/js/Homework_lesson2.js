console.log("-- Homework Lesson 2--");

/*Task 1. 
Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
let x = 20
let y = 58
let z = 42
*/
console.log("-- Task 1: --");
let xHomeTask1 = 20,
    yHomeTask1 = 58,
    zHomeTask1 = 42;

    sumHomeTask1 = xHomeTask1 + yHomeTask1 + zHomeTask1;
    console.log( "Sum is equel:", sumHomeTask1);

/*Task 2.
Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8, true, «true», соответственно. При помощи оператора определения типа (typeof) убедитесь, что переменные принадлежат типам: strinq, number или boolean. Выведите в консоль (console.log()) типы операторов.
*/
console.log("-- Task 2: --");

let strHomeTask2 = "Hello",
    sumHomeTask2 = 123,
    numHomeTask2 = 15.8,
    flagHomeTask2 = true,
    txtHomeTask2 = "true";

console.log(typeof(strHomeTask2));
console.log(typeof(sumHomeTask2));
console.log(typeof(numHomeTask2));
console.log(typeof(flagHomeTask2));
console.log(typeof(txtHomeTask2));


/*Task 3.
Создайте переменные:
- количество секунд в минуте;
- количество минут в часу;
- количество часов в сутках;
- количество суток в году.

Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds
*/
console.log("-- Task 3: --");

let countSecondsInMin = 60,
    countMinetsInHour = 60,
    countHoursInDay = 24,
    countDaysInYear = 365, 
    myCurrentAge = 36;

myAgeInSeconds = myCurrentAge * countDaysInYear * countHoursInDay * countMinetsInHour * countSecondsInMin; 
console.log(myAgeInSeconds);


/* 
Task 4:
    let count = 42;
    let usenName = '42';

Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.
*/
console.log("-- Task 4: --");

let countHomeTask4 = 42,
    userNameHomeTask4 = '42';

console.log("-- WAY 1st: --");

let countHomeTask4ToString = "" + countHomeTask4, // Change variable from Number Type to String;
    userNameHomeTask4ToNumber = +userNameHomeTask4; // Change variable from String to Number Type;

console.log(typeof(countHomeTask4ToString), countHomeTask4ToString); //Show type and value of valiable in the console;
console.log(typeof(userNameHomeTask4ToNumber), userNameHomeTask4ToNumber); //Show type and value of valiable in the console;


console.log("-- WAY 2nd: --");
countTask8 = 42,
userNameTask8 = '42';

countHomeTask4ToString =  String(countHomeTask4), //Change variable from Number Type to String;
userNameHomeTask4ToNumber = Number(userNameHomeTask4); //Change variable from String to Number Type;

console.log(typeof(countHomeTask4ToString), countHomeTask4ToString); //Show type and value of valiable in the console;
console.log(typeof(userNameHomeTask4ToNumber), userNameHomeTask4ToNumber); //Show type and value of valiable in the console;

/**Task 5.
 * Имеется три переменные:
 * let a = 1;
 * let b = 2;
 * let с = "белых медведей";
 * 
 * Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.
 */
console.log("-- Task 5: --");

let aHomeTask5 = 1,
    bHomeTask5 = 2,
    cHomeTask5 = "белых медведей",
    countHomeTask5 = "" + aHomeTask5 + bHomeTask5;

console.log(countHomeTask5, cHomeTask5);

/**Task 6.
 * Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:
 * 
 * - доступ
 * - морпех
 * - наледь
 * - попрек 
 * - рубило
 */
console.log("-- Task 6: --");

let accessHomeTask6 = "доступ",
    seasolderHomeTask6 = "морпех",
    iceHomeTask6 = "наледь",
    poprekHomeTask6 = "попрек",
    rubiloHomeTask6 = "рубило";

let lengthWords = accessHomeTask6.length + seasolderHomeTask6.length + iceHomeTask6.length + poprekHomeTask6.length + rubiloHomeTask6.length; 

console.log(lengthWords);


/**Task 7.
 * Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
 * 'Variable: %variable name% have type: %type variable%
 */
console.log("-- Task 7: --");

let numHomeTask7 = 345,
    strHomeTask7 = "string variable",
    boolHomeTask7 = false;

console.log(`Variable: "${'numHomeTask2'}" have type: ${typeof(numHomeTask7)}`);
console.log(`Variable: "${'strHomeTask7'}" have type: ${typeof(strHomeTask7)}`);
console.log(`Variable: "${'boolHomeTask7'}"have type: ${typeof(boolHomeTask7)}`);

/**Task 8. 
 * Запросить у пользователя имя и возраст и вывести их в консоль.
 */
console.log("-- Task 8: --");

let userNameHomeTask8 = prompt("Enter your name?"),
    ageHomeTask8 = +prompt("Enter your age, plaease?");

console.log(`User name is ${userNameHomeTask8}
User age is  ${ageHomeTask8}`);

/**Task 9. 
 * Создайте переменные a1, a2, a3, a4, a5, a6, a7 , a8, a9 , a10, all, al2, a13, a14, a15, a16, a17 , a18 . Поместите в ниХ и выведите в консоль результат
 * выражений:
 * 3 % 5;
 * 5 + '3';
 * '5'- 3;
 * 75 + 'kg';
 * 785 * 653;
 * 100 / 25;
 * 0 * 0;
 * 0 / 2;
 * 89 / 0;
 * 98 + 2;
 * 5 - 98;
 * (8 + 56 * 4) / 5;
 * (9 - 12) * 7 / (5 + 2);
 * +"123";
 * 1 || 0;
 * false || true;
 * true > 0.

Проверьте (выведите в консоль) каким типам принадлежат переменные.
 */
console.log("-- Task 9: --");

let a1 = 3 % 5, 
    a2 = 5 + '3', 
    a3 = '5'- 3, 
    a4 = 75 + 'kg', 
    a5 = 785 * 653, 
    a6 = 100 / 25, 
    a7 = 0 * 0, 
    a8 = 0 / 2, 
    a9 = 89 / 0, 
    a10 = 98 + 2, 
    a11 = 5 - 98, 
    a12 = (8 + 56 * 4) / 5, 
    a13 = (9 - 12) * 7 / (5 + 2), 
    a14 = +"123", 
    a15 = 1 || 0, 
    a16 = false || true, 
    a17 = true > 0;

console.log('a1', "=", a1, "with type:", typeof(a1));
console.log('a2', "=", a2, "with type:", typeof(a2));
console.log('a3', "=", a3, "with type:", typeof(a3));
console.log('a4', "=", a4, "with type:", typeof(a4));
console.log('a5', "=", a5, "with type:", typeof(a5));
console.log('a6', "=", a6, "with type:", typeof(a6));
console.log('a7', "=", a7, "with type:", typeof(a7));
console.log('a8', "=", a8, "with type:", typeof(a8));
console.log('a9', "=", a9, "with type:", typeof(a9));
console.log('a10', "=", a10, "with type:", typeof(a10));
console.log('a11', "=", a11, "with type:", typeof(a11));
console.log('a12', "=", a12, "with type:", typeof(a12));
console.log('a13', "=", a13, "with type:", typeof(a13));
console.log('a14', "=", a14, "with type:", typeof(a14));
console.log('a15', "=", a15, "with type:", typeof(a15));
console.log('a16', "=", a16, "with type:", typeof(a16));
console.log('a17', "=", a17, "with type:", typeof(a17));


/**ADVANCED LEVEL: 
 * Task 1.
 * Поменяйте значение переменных местами не создавая дополнительной переменной:
 * let a = 4;
 * let b = 3;
 */
console.log("-- Advanced Level. Task 1: --");

let aAdv = 4,
    bAdv = 3;

aAdv = aAdv + bAdv; //a = a + b (a = 4 + 3 = 7;)
bAdv = aAdv - bAdv; //b = a — b (b = 7(a) - 3(b) = 4;)
aAdv = aAdv - bAdv; //a = a — b (a = 7(a) - 4(b) = 3;)

console.log(`'aAdv' = ${aAdv}, 'bAdv' = ${bAdv}`);



/**Task 2.
 * В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
 * let codeWord1 = "обернись";
 * let codeWord2 = "неужели";
 * let codeWord3 = "огурцы";
 * let codeword4 = "дипкие";
 * let codeword5 = "?!";
 * 
 * Создайте переменную cipher и поместите туда необходимые символы.
 */
console.log("-- Advanced Level. Task 2: --");

let codeWord1 = "обернись",
    codeWord2 = "неужели", 
    codeWord3 = "огурцы",
    codeWord4 = "липкие",
    codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher, typeof(cipher));