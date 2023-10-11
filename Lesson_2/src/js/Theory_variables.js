let admin, name;

name = "John";

admin = name;
console.log(admin);

let isGreater = 8 > 7;
console.log( isGreater );

//Variables:
let sCircle = 20,
    a = "30",
    b = 40; 

    let c, d;
    const pi = 3.14;

//TYPES OF DATA

//Number 

//String

//Number - infinity

//Number = Nan

//Underfind

//Null

//Boolean - true / false

//Symbol

//Number - BigInt

/*Object = {
    userName,
    UserSurname,
    UserOld, 
};
*/

let k,
    m,
    v;

k = "test";
m = 5;
v = k / m;

console.log(v);
console.log(typeof(v));

//Преобразования типов данных:
console.log("Преобразования типов данных:");
console.log (typeof ("1"));
console.log (typeof Number("1"));
console.log (typeof (+"1")); 


let strToNumber = "1";

console.log(typeof(strToNumber), strToNumber);
console.log(typeof(Number(strToNumber)), strToNumber);
console.log(typeof(+strToNumber), strToNumber);

let numToStr = 100;

console.log(typeof(numToStr), numToStr);
console.log(typeof(String (numToStr)), numToStr);

numToStr = 300;

console.log(typeof(""+numToStr), numToStr);

let bool = false;
console.log(typeof(bool));
console.log(typeof(String (bool)));

let bool2 = "false and true";
console.log(typeof(bool2));
console.log(typeof(Boolean(bool2)));

let bool3 = 0;
let bool4 = 1;

console.log(Boolean(bool3));
console.log(typeof(Boolean(bool3)));

console.log(Boolean(bool4));
console.log(typeof(Boolean(bool4)));

let bool5 = "";
let bool6 = " ";
let bool7 = "test";
let bool8 = "23";
let bool9 = 101;

console.log(Boolean(bool5));
console.log(Number(bool5));
console.log(typeof(Boolean(bool5)));

console.log(Boolean(bool6));
console.log(Number(bool6));
console.log(typeof(Boolean(bool6)));

console.log(Boolean(bool7));
console.log(Number(bool7));
console.log(typeof(Boolean(bool7)));

console.log(Boolean(bool8));
console.log(Number(bool8));
console.log(typeof(Boolean(bool8)));

console.log(Boolean(bool9));
console.log(Number(bool9));
console.log(typeof(Boolean(bool9)));

let x = "40", y = 50, w = 3;

z = y + x; //"5040" - приводится к строке
console.log(z);
z = y / x; // 50 / 40 - приводится к числу
console.log(z);
z = y - x; // 50 - 40 - приводится к числу
console.log(z);
z = y * x; // 50 * 40 - приводится к числу
console.log(z);

console.log(y % x); // Остаток от деления (деление в столбик) = 10;
console.log(x ** w); // Возведение в степень, X возводим в степень W, 
//40 * 40 * 40 = 64 000;

//Унарные и Бинарные операторы:
console.log("Унарные и Бинарные операторы:");

let s = 5;
s = - s; //унарный минус // = -5;
let r = 3; 
console.log(s - r); //бинарный минус // -5 - 3 = -8;

//Инкремет (увеличение на 1) и Декремент (уменьшение на 1):
console.log("Инкремет и Декремент:");

let i = 0; 
i ++; //0 + 1 =1
console.log(i);
i = 6;
i --; //6 - 1 = 5
console.log(i);

//Постфиксная и префиксная форма:
console.log("Постфиксная и префиксная форма:"); 

c = 0; 
i = 3;

c = ++i; // c = 4; i = 4; // снасала прибавится 1 к I, а потом 
//прироавнияет I к C;
console.log(c, i);

c = 0; 
i = 3;
c = i++; // c = 3; i = 4 // снасала прироавнияет I к C, 
//а потом 1 прибавится к I;
console.log(c, i);

//Сокращенные формы: 
console.log("Сокращенные формы:");
i = 7;
i = i + 3; //i+=3;
console.log(i);

i = i - 3; //i-=3;
console.log(i);

i = i * 3; //i*=3;
console.log(i);

i = i / 3; //i/=3;
console.log(i);

i = i + 24; 
console.log(i);

// Операторы сравнения (результат любого сравнения является возвращение компеялтором значений true или false):
//ARTICLE: https://learn.javascript.ru/comparison
console.log("Операторы сравнения:");
c = 3; // Один знак = - это присвоение; 
"3" == 3; (true) // Два знака = - это сравнение, нестрого равно, и код вернёт true / false. Код сравнивакт только значение, без типа переменной.
"4" === 4; (false) //Три знака  = - это сравнение, строго  равно, код вернёт true / false. Код сравнивакт значение и тип переменной.

"3" != 3; (false) // Нестрого не равно, вернёт true / false;
"4" !== 4; (true) // Строго не равно, вернёт true / false;

//Examples: 
console.log((5 + 5) > ("7" - 5)); (true);