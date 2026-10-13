//----Assignment Operator-----//


//--- Answer:1-

let name = Priya ;
let marks= 92;
console.log(name);
console.log(marks);

//--- Answer:2-

let score = 0;
console.log(score);

//---Answer:3-

let a=b=c=50;
console.log(a)
console.log(b)
console.log(c)

//---Answer:4-

let x;
x=100;
console.log(x)      // 100

//---Answer:5-

let p = 15;
let q = p;
q = 30;
console.log(p, q)    // 15, 30



//------Add and Assign (+=)------//

//---Answer:1-

let score = 80;
score += 25;
console.log(score)

//---Answer:2-

let wallet=1500;
wallet += 120;
console.log(wallet);

//---Answer:3-

let count = 10;
count += 5;
console.log(count);      // 15

//---Answer:4-

let msg = "Good";
msg += "Morning";
console.log(msg);        //GoodMorning

//---Answer:-5-

let n = 20;
n += "5";
console.log(n);           // 205 - becouse 20 is a numner and 5 is a string and + -> oparator strings teat as a strings not a number 


//-------- Subtract and Assign ------//

// Answer-1

let health = 100;
health -= 35;
console.log(health)

//Answer-2

let items = 300;
items -= 35;
console.log(items)

// Answer-3

let lives = 5;
lives -= 2;
console.log (lives);     // 3

// Answer -4

let num = "40"
num -= 15;
console.log(num);       // 25 

// Answer-5

let x = "abc";
x -= 5;
console.log(x);         // Nan -> becouse - operator wants to "abc" convert into number 




//----------Multiply and Assign (*=)----------//



// Answer-1-

let price = 500;
price *= 1.18;
console.log(price);

// Answer -2-

let quantity = 8;
quantity *= 3;
console.log(quantity)

// Answer-3-

let amount = 200;
amount *= 1.1;
console.log (amount);         // 220.00000000000003

// Answer- 4

let val = "7";
val *= 3;
console.log(val);           // 21

// Answer - 5

y = "hello";
y *= 2;
console.log (y);            // NaN



//-------Divide and Assign (/=)--------//



// Answer-1-


let chocolates = 180;
chocolates /= 
cnsole.log(chocolates)

//Answer-2

let distance = 300;
let hours = 5;

distance /= hours;

console.log(distance);

// Answer-3-

let total = 400;
total /= 8;
console.log(total);        // 50


// Answer-4-

let num = "100"
num /= 4;
console.log(total);         //50

// Answer-5-

let z = 50;
z /= 0;
console.log(z)             // Infinity



//--------- Modulus and Assign (%=)---------//



// Answer:1-

let num = 47;
num %= 6;
console.log(num);

// Answer:2-

let counter = 23;
counter %= 12;
console.log(counter);   // 11

// Answer:3-

let num = 29;
num %= 5;
console.log(num);      // 4

// Answer:4-


let x = "17";
x %= 3;
console.log(x);        // 2

// Answer:5-


let m = 15;
m %= 0;
console.log(m);        // NaN  Any number modulus 0 gives NaN.


// ------- Exponentiation and Assign (**=)----------//



// Answer:1-

let side = 5;
side **= 3;
console.log(side);     // 125

// Answer:1-

let num = 4;
num **= 2;
console.log(num);      // 16


// Answer :3-

let base = 2;
base **= 5;
console.log(base);     // 32


// Answer :4-

let n = 4;
n **= 0.5;
console.log(n);        // 2

// Answer :5-

let p = 2;
p **= -1;
console.log(p);        // 0.5 => 2⁻¹ = 1/2 = 0.5



// ------------C] Comparison Operators-------------//
//---------- Loose Equality (==)----------//


// Answer :1-

console.log("25" == 25);     // true

// Answer :2-

console.log(0 == false);     // true

// Answer :3-

console.log(10 == "10");          // true
console.log(null == undefined);   // true

// Answer :4-

console.log("" == 0);        // true
console.log([] == false);    // true

// Answer :5-

console.log(NaN == NaN);     // false => NaN is never equal to anything, even itself.



//-------Loose Inequality (!=)-------//



// Answer-1

console.log("18" != 18);     // false

// Answer-2

console.log("1234" != 1234); // false

// Answer-3

console.log(5 != "5");       // false
console.log(0 != false);     // false

// Answer-4

console.log(null != undefined); // false
console.log("" != 0);           // false

// Answer-5

console.log(NaN != NaN);     // true =>NaN is not equal to itself.




//----------Strict Equality (===)----------//



// Answer-1

console.log("25" === 25);    // false

// Answer-2

console.log(0 === false);        // false
console.log(null === undefined); // false

// Answer-3

console.log(10 === "10");    // false
console.log(true === 1);     // false

// Answer-4

console.log("" === 0);       // false
console.log([] === false);   // false


// Answer-5

(===) value aur data type dono check karta hai, isliye real-world projects me zyada use hota hai.


//-------Strict Inequality (!==)------------//


// Answer-1

console.log("18" !== 18);    // true

// Answer-2

console.log(0 !== false);        // true
console.log(null !== undefined); // true

// Answer-3

console.log(5 !== "5");      // true
console.log(true !== 1);     // true

// Answer-4

console.log("" !== 0);       // true
console.log(NaN !== NaN);    // true

// Answer-5

let input = "5";

if (input !== "0") {
    console.log("Input is not equal to '0'");
}


//---------Part C] Relational Operator----------//


//------topic= Greater Than--------//

 //-------question no. -1.

 let studentMarks = 78;
 let passingMarks= 40;
 let result = studentMarks > passingMarks;
 console.log("is student pass ?",result)

//------- question no. -2.

let todayTemperature=35;
let yesterdayTemperature= 28;
let result = todayTemperature> yesterdayTemperature;
console.log("today is hotter ?", result)

//------- question no. -3.

console.log(15 > 10);        //-----true
console.log(10 > 15);        //-----false
console.log(10 > 10);         //-----false

//-------- question no. -4.

console.log("20" > 15);       //-----------true
console.log("5" > "10");         //----------true
console.log("abc" > 10);            //----------Nan

//-------- question no. -5.

console.log(null>0)       //----------false(because value of null is o)
console.log(undefined>0)       //-------Nan (because  value of undefined is nan)

//--------- question no. -6.

let items=120;
let itemsToBuy =85;
let result = items > itemsToBuy;
console.log( "if stock is sufficient?", result)

//------ question no. -7.

console.log(true > false);       //--------true
console.log("10" > "2");        //----------false
console.log(NaN > 5);          //-------------false

//------topic= less Than-------


//--------- question no. -1.

let maximumWeight = 50;
let currentWeight = 42;
let result = maximumWeight < currentWeight;
console.log( "more items can still be added?", result)

//-------- question no. -2.

let personAge = 16;
let minimumAge = 18;
let result = personAge<minimumAge;
console.log("the person is underage?" , result)

//-------question no. -3.

console.log(8 < 12);     //------> true
console.log(20 < 10);      //------> false
console.log(7 < 7);           //--------> false

//-------question no. -4.

console.log("8" < 10);         //-------->true
console.log("20" < "3");        //------->true
console.log("hello" < 5);          //------>NaN

// ---------question no. -5.

console.log(null<0)        //----------false(because value of null is o)
console.log(undefined<0)        //-------Nan (because  value of undefined is nan)

//-------- question no. -6.

let capacity = 500;
let CurrentwaterLevel = 375;
let result =  capacity < currentWaterLevel;
console.log("if it is not full?",result)  

//------ question no. -7.

console.log(false < true);        //-----> true
console.log("5" < "15");       //-------->false
console.log(NaN < 10);      //--------->


//-------topic= Greater Than or Equal To (>=)-------

//------- question no.-1.

let minimumMarks = 75;
let studentMarks = 75;
let result = studentMarks >= minimumMarks;
console.log("student gets distinction ?", result);

//------- question no.-2.

let ticketPrice = 300;
let money = 300;
let result2 = money >= ticketPrice;
console.log("can buy ticket ?", result2);

//-------- question no.-3.

console.log(25 >= 25);        //------true
console.log(30 >= 25);        //------true
console.log(20 >= 25);      //------false

//-------- question no.-4.

console.log("25" >= 25);     //------true
console.log("10" >= "2");       //------false
console.log(null >= 0);        //------true

// ---------question no.-5

console.log(undefined >= 0);        //------false (because undefined converts to NaN)

//-------question no.-6.

let people = 8;
let liftCapacity = 8;
let result3 = people >= liftCapacity;
console.log("lift is full or overloaded ?", result3);

//-------question no.-7.

console.log(true >= 1);   //------true
console.log("" >= 0);    //------true
console.log(NaN >= NaN);    //------false


//-------topic= Less Than or Equal To (<=)-------//

//------- question no.-1.

let speedLimit = 60;
let vehicleSpeed = 60;
let result4 = vehicleSpeed <= speedLimit;
console.log("vehicle is within speed limit ?", result4);

//------- question no.-2.

let passingMarks = 40;
let marks = 39;
let result5 = marks < passingMarks;
console.log("student has failed ?", result5);

//------ question no.-3.

console.log(15 <= 20);     //------true
console.log(20 <= 15);     //------false
console.log(15 <= 15);     //------true

//----- question no.-4.

console.log("15" <= 20);   //------true
console.log("30" <= "5");     //------true
console.log(null <= 0);    //------true

//------- question no.-5.

console.log(undefined <= 0); //------false (because undefined converts to NaN)

//--------question no.-6.

let books = 10;
let bagCapacity = 10;
let result6 = books < bagCapacity;
console.log("can add more books ?", result6);

//-------question no.-7.

console.log(false <= 0);------true
console.log("" <= 0);------true
console.log(NaN <= 5);------false


//-------topic= Mixed Practice (>, <, >=, <=)-------

//------ question no.-1.

console.log(18 >= 18);------true
console.log(32 < 35);------true
console.log(90 > 85);------true

//------question no.-2.

console.log(10 > 5 && 5 < 10);  //------true
console.log("10" >= 10);   //------true
console.log(null <= undefined);   //------false
console.log("5" < "10" && 5 > 2);   //------false

//-------- question no.-3.

let productPrice = 499;
let customerMoney = 500;
let canBuy = customerMoney >= productPrice;
let changeLeft = customerMoney > productPrice;

console.log("customer can buy product ?", canBuy);
console.log("change will be left ?", changeLeft);

//----------question no.-4.
console.log("10" > "2");    //------false
console.log(10 > 2);       //------true

//(Strings are compared lexicographically, while numbers are compared numerically.)


// ------ Part E]: Increment / Decrement Operators (++ / --)-------//


//-------Part a


//----Answer-1

let counter = 5;
counter++;
console.log(counter);

//-----Answer-2

let lives = 3;
lives--;
console.log(lives);

//-----Answer-3

let score = 10;
score++;
console.log(score);

//-----Answer-4

let items = 8;
items--;
console.log(items);

//-----Answer-5

let count = 0;

count++;
count++;
console.log(count);

//-----Answer-6

let x = 5;
let y = x++;
console.log(x);
console.log(y);

//-----Answer-7

let a = 5;
let b = ++a;
console.log(a);
console.log(b);

//-----Answer-8

let lives = 3;
let previousLives = lives--;
console.log(lives);
console.log(previousLives);

//-----Answer-9

let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts);
console.log(currentAttempts);

//-----Answer-10

let points = 100;
points++;
points--;
console.log(points);          //100

//-----Answer-11

let x = 10;
let y = x++;
let z = ++x;
console.log(x, y, z);         //12 10 12

//-----Answer-12

let a = 5;
let b = a-- + ++a;
console.log(a, b);            //5 10

//-----Answer-13

let m = 7;
let n = --m + m++;

console.log(m, n);           //7 13

//-----Answer-14

let p = 3;
let q = p++ + ++p + p;

console.log(p, q);           // 5 13

//-----Answer-15

let val = 0;
val = val++ + ++val;
console.log(val);           //2



// Part - F // logical Operators  

// 1. Logical and &&

// Q1

let username = "admin"
let password = 1234
console.log(username=="admin"&&password==1234)

// Q2

let isloggedIn = true
let hasPermission = true
console.log(loggedIn&&hasPermission)

// Q3 

let instock = true
let price = 800
console.log(instock&&price)

// Q4

let marks = 75
let attendence = 80 
console.log(marks>65&&attendence>70)

// Q5 

let isWeekend = true
let isHoliday = false
console.log(isWeekend&&isHoliday)

// Q6 

let a = 0;
let b = 10;
let result = a && b;
console.log(result); // 0 

// Q7

let x = 5;
let y = 10;
let result = (x > 3 && y) || 0;
console.log(result); // 10

// Q8

let p = "Hello";
let q = "";
let r = "World";
let result = p && q && r;
console.log(result); // ""

// Q9

let val = 5;
let condition = val && (val = 0);
console.log(condition);  // 0
console.log(val);  // 0 

// Q10 

let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log(result); // false

// 2. Logical OR ||

// Q1

let passCorrect = true
let otpValid = false
console.log(passCorrect||otpValid)

// Q2

let isMember = false
let hasCoupon = true
console.log(isMember||hasCoupon)

// Q3

let age = 16
let height = 155
console.log(age>18||height>150)

// Q4

let emailGiven = true
let phoneGiven = false
console.log(emailGiven||phoneGiven)

// Q5 

let score = 900 
let timeBonus = true
console.log(score>1000||timeBonus)

// Q6 

let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result); // 42

// Q7 

let x = "Hello" || 0;
let y = 0 || "Hi";
console.log(x, y); // Hello HI

// Q8 

let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result); // true

// Q9 

let val = 5;
let condition = val || (val = 0);
console.log(condition); // 5
console.log(val); // 5

// Q10 

let x = "" || 0 || false || null || undefined || "OK";
console.log(x); // 
