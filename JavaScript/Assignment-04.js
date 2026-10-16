// //Part:-A] If  Statement

// // Question-1

// let num= 30
// if(num % 5 == 0){
//     console.log("Divisible by 5")
// }

// // Question-2

// let age= 60
// if(age==60){
//     console.log("Senior Citizen")
// }

// // Question-3

// let n= 100
// if(n>=100){
//     console.log("Big Number")
// }

// Question-4

// let temp= 5;
// if (temp<10){
//     console.log("Very cold")
// }

// // Question-5

// let marks= 100;
// if (marks==100){
//     console.log("Perfect Score")
// }

// Question-6

// let num = -1;
// if (num<0){
//     console.log("Negative Number")
// }

// // Question-7

// let string=""
// if (string==""){
//     console.log("No Input Provided")
// }

// Question-8

// let year=30000;
// if (year%100==0){
//     console.log("Century Year")
// }

// // Question-9

// let num = 44;
// if  ( num%2==0 && num>0){
//     console.log("Century Year")
// }

// Question-10

// let  marks=80
// if (marks>=35 && marks<=100){
//     console.log("Valid Marks")
// }


// ------- B] if...else Statement:-


// Question-1

// let num= 23;
// if(num%2==0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

// // Question-2

// let age=19
// if (age>=18){
//     console.log("Eligible")
// }else{
//     console.log("Not Eligible")
// }

// Question-3

// let num= -1
// if (num>=0){
//     console.log("Positive")
// }else{
//     console.log("Negative")
// }

// Question-4

// let marks =35
// if (marks>=35){
//     console.log("passed")
// }else{
//     console.log("failed")
// }

// Question-5

// let ch = "A"
// if (ch >= "A" && ch <= "Z"){
//     console.log("Uppercase letter");
// }else{
//     console.log("Not an uppercase letter");
// }

// Question-6

// let num= 21
// if (num%3==0){
//     console.log("Divisible by 3 ")
// }else{
//     console.log("not divisible")
// }

// Question-7

// let pass = "admin123"
// if (pass==pass){
//     console.log("Login Successful")
// }else{
//     console.log("Incorrect Password")
// }

// Question-8

// let year = 2026;
// if (year%4==0){
//     console.log("Leap Year")
// }else{
//     console.log("Normal Year")
// }

// Question-9

// let a = 10;
// let b = 20;
// if (a>b){
//     console.log(a + "is greater");
// }else{
//     console.log(b + "is greater" );
// }

// Question-10

// let num= -2;
// if(num>0){
//     console.log("Number is Positive")
// }else if(num==0){
//     console.log("Number is Zero")
// }else{
//     console.log("Number is Negative")
// }


//------C]- if...else if...else Statement:-


// Question-1

// let month=8
// if (month==12 || month==1 || month==2){
//     console.log("winter");
// }else if(month==3 || month==4 || month==5){
//     console.log("Summer")
// }else if(month==6 || month==7 || month==8){
//     console.log("Monsoon")
// }else if(month==9 || month==10 || month==11){
//     console.log("Autumn")
// }else{
//     console.log("Invalid month number")
// }

// Question-2

// let income = 350000;

// if (income < 300000) {
//     console.log("No Tax");
// }
// else if (income > 300000 && income <= 700000) {
//     console.log("5% Tax");
// }
// else if (income > 700000 && income <= 1000000) {
//     console.log("10% Tax");
// }
// else if (income > 1000000) {
//     console.log("15% Tax");
// }
// else {
//     console.log("Invalid Income");
// }


// Question-3

// let marks=23;
// if (marks>=90){
//     console.log("Outstanding")
// }else if (marks>70 && marks<=89){
//     console.log("Good") 
// }else if (marks>40 && marks<=69){
//     console.log("Avarage")
// }else if (marks<40 && marks>=0){
//     console.log("Needs Improvement")
// }else{
//     console.log("Invalid Number")
// };


// Question-4

// let speed = 60;

// if (speed < 40) {
//     console.log("Slow");
// } else if (speed >= 40 && speed <= 80) {
//     console.log("Normal");
// } else {
//     console.log("Fast");
// }

// Question-5

// let height = 160;

// if (height < 150) {
//     console.log("Short");
// } else if (height >= 150 && height <= 170) {
//     console.log("Average");
// } else {
//     console.log("Tall");
// }

// Question-6

// let day = 6;

// if (day >= 1 && day <= 5) {
//     console.log("Weekday");
// } else if (day == 6 || day == 7) {
//     console.log("Weekend");
// } else {
//     console.log("Invalid Day");
// }

// Question-7

// let units = 120;
// let bill;

// if (units >= 0 && units <= 50) {
//     bill = units * 2;
// } else if (units >= 51 && units <= 150) {
//     bill = units * 4;
// } else if (units > 150) {
//     bill = units * 6;
// } else {
//     console.log("Invalid Units");
// }

// if (units >= 0) {
//     console.log("Total Bill: ₹" + bill);
// }

// Question-8

// let attendance = 85;

// if (attendance >= 90) {
//     console.log("Excellent");
// } else if (attendance >= 75 && attendance < 90) {
//     console.log("Good");
// } else if (attendance >= 50 && attendance < 75) {
//     console.log("Satisfactory");
// } else if (attendance < 50 && attendance >= 0) {
//     console.log("Poor");
// } else {
//     console.log("Invalid Attendance");
// }

// Question-9

// let math = 85;
// let science = 92;
// let english = 78;

// if (math > science && math > english) {
//     console.log("Highest Marks: " + math);
// } else if (science > math && science > english) {
//     console.log("Highest Marks: " + science);
// } else {
//     console.log("Highest Marks: " + english);
// }

// Question-10

// let num = -7;

// if (num == 0) {
//     console.log("Zero");
// } else if (num > 0 && num % 2 == 0) {
//     console.log("Positive Even");
// } else if (num > 0 && num % 2 != 0) {
//     console.log("Positive Odd");
// } else if (num < 0 && num % 2 == 0) {
//     console.log("Negative Even");
// } else {
//     console.log("Negative Odd");
// }





// .D] Nested if Statement



// Question-1

// let num =15;
// if (num > 10){
//     if(num % 3 == 0){
//         console.log("Greater Than 10 and divisible by 3")
//     }else{
//         console.log("Greater than 10 but not divisible by 3")
//     }
// }else{
//     console.log("Number is not greater than 10 ")
// }

// Question-2

// let age = 20;
// let hasVoterID = true;

// if(age >= 18){
//     if(hasVoterID == true){
//         console.log("Can Vote");
//     }else{
//         console.log("Voter ID Required");
//     }
// }else{
//     console.log("Not Eligible to Vote ")
// }

// // Question-3

// let marks = 85;

// if (marks >= 40) {
//     if (marks >= 80) {
//         console.log("Passed with Distinction");
//     } else {
//         console.log("Passed");
//     }
// } else {
//     console.log("Failed");
// }

// // Question-4

// let pin = 1234;
// let enteredPin = 1234;
// let balance = 5000;
// let withdrawal = 2000;

// if (enteredPin == pin) {
//     if (balance >= withdrawal) {
//         console.log("Withdrawal Successful");
//     } else {
//         console.log("Insufficient Balance");
//     }
// } else {
//     console.log("Incorrect PIN");
// }

// // Question-5

// let year = 2024;

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("Leap Year");
//         } else {
//             console.log("Not a Leap Year");
//         }
//     } else {
//         console.log("Leap Year");
//     }
// } else {
//     console.log("Not a Leap Year");
// }

// // Question-6

// let email = "student@gmail.com";

// if (email.includes("@")) {
//     if (email.endsWith(".com")) {
//         if (email.length > 10) {
//             console.log("Valid Email");
//         } else {
//             console.log("Email length is too short");
//         }
//     } else {
//         console.log("Email must end with .com");
//     }
// } else {
//     console.log("Email must contain @");
// }

// // Question-7

// let cartTotal = 1500;
// let isPremium = true;
// let discount;
// let finalAmount;

// if (cartTotal >= 1000) {
//     if (isPremium == true) {
//         discount = 20;
//     } else {
//         discount = 10;
//     }
// } else {
//     discount = 0;
// }

// finalAmount = cartTotal - (cartTotal * discount / 100);

// console.log("Final Amount: ₹" + finalAmount);

// // Question-8

// let num = 16;

// if (num > 0) {
//     if (num % 2 == 0) {
//         if (num % 4 == 0) {
//             console.log("Positive Even and Divisible by 4");
//         } else {
//             console.log("Positive Even but Not Divisible by 4");
//         }
//     } else {
//         console.log("Positive Odd");
//     }
// } else {
//     console.log("Number is Not Positive");
// }

// // Question-9

// let age = 25;
// let hasDegree = true;
// let experience = 3;

// if (age >= 21 && age <= 30) {
//     if (hasDegree == true) {
//         if (experience >= 2) {
//             console.log("Eligible for Interview");
//         } else {
//             console.log("Not Enough Experience");
//         }
//     } else {
//         console.log("Graduation Degree Required");
//     }
// } else {
//     console.log("Age Not Valid");
// }

// // Question-10

// let isPresent = true;
// let internalMarks = 35;
// let externalMarks = 40;

// if (isPresent == true) {
//     if (internalMarks >= 30) {
//         if (externalMarks >= 35) {
//             console.log("Eligible for Final Exam");
//         } else {
//             console.log("External Marks Not Valid");
//         }
//     } else {
//         console.log("Internal Marks Not Valid");
//     }
// } else {
//     console.log("Student is Absent");
// }
