# Assignment : Introduction to Variables and Datatypes
---
## Part I : Variables (let, var, const)

### Part a — 4 Questions

**1. Personal Information**
Declare variables for `name`, `age`, and `city` using appropriate variable keywords. Assign values and print all three variables.
---
Answer:01:-
<img width="1280" height="787" alt="image" src="https://github.com/user-attachments/assets/de8dd116-f3e5-4e1f-96a8-ccfa0d1686a4" />

---

**2. Change the Score**
Create a variable `score` with the value `50`. Change its value to `80` and print the final value. Use the appropriate keyword for a value that can change.
---
Answer:02:-
<img width="1117" height="395" alt="image" src="https://github.com/user-attachments/assets/4e35562c-11cf-40ac-84a4-819f803f445e" />
---

**3. Constant Value**
Create a constant variable `PI` with the value `3.14`. Print its value. Do not try to change the value.
---
Answer:03:-
<img width="1280" height="251" alt="image" src="https://github.com/user-attachments/assets/ac70d8d6-dcbf-4c46-8c49-7719dd5bc076" />
---

**4. Uninitialized Variables**
Declare one variable having name `num1` using `var` and one having name `num2` using `let` without assigning values. Print both variables. Then assign values to them and print the values again.
---
Answer:04:-
<img width="1280" height="463" alt="image" src="https://github.com/user-attachments/assets/5f8fad8c-63ba-42e8-9146-3a32dbe716ad" />
---
---

### Part b — 4 Questions

**5. Choose the Correct Keyword**
Create the following variables using the most appropriate keyword:

* `studentName` — the value will not change
* `marks` — the value may change
* `schoolName` — the value will not change

Assign values to all three variables. Change `marks` and print all variables.
---
Answer:05:-
<img width="1080" height="513" alt="image" src="https://github.com/user-attachments/assets/15fbf99d-f1fc-4920-9ae1-fa6b041a4c6a" />
---

**6. Understand Scope**
Write a program where `var`, `let`, and `const` variables are declared inside an `if` block. Try to access all three variables outside the block. Observe and identify which variables can be accessed.
---
Answer:06:-
<img width="1080" height="435" alt="image" src="https://github.com/user-attachments/assets/b9f5e786-b8c7-43bb-ab62-3eb6fe703a00" />

---

**7. Test Re-declaration**
Declare a variable named `user` using `var` and declare it again with a different value. Then perform the same experiment using `let`. Observe what happens and identify which declaration allows re-declaration.
---
Answer:07:-
<img width="1080" height="558" alt="image" src="https://github.com/user-attachments/assets/91c419f2-72e4-45dd-92af-03e03a59243d" />

---

**8. Test Re-assignment**
Create three variables using `var`, `let`, and `const`. Assign an initial value to each. Try to change the value of all three variables. Observe which variables allow re-assignment and which one produces an error.
---
Answer:08:-
<img width="1080" height="677" alt="image" src="https://github.com/user-attachments/assets/811186aa-fe92-4524-b563-847d8d601b82" />

---
---

### Part c — 2 Questions

**9. Predict and Explain**
Without running the code, predict the output of each `console.log()` and identify which lines cause errors. Explain your answer using the rules of scope, re-assignment, and variable declaration.

```javascript
var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z);
```
---
Answer:09:-
<img width="1080" height="321" alt="image" src="https://github.com/user-attachments/assets/b688e289-d1c5-42ef-a2d3-a4f71585c130" />

---

**10. Fix the Program**
The following program contains multiple errors. Fix the code so that it runs correctly. Make sure your solution follows the rules for **initialization, re-declaration, re-assignment, and scope**.

```javascript
const name;

let age = 20;
let age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
}

console.log(country);

const score = 50;
score = 80;
```
---
Answer:10:-
<img width="1080" height="482" alt="image" src="https://github.com/user-attachments/assets/56acdd66-6679-4d10-8bf1-7c6c1605762a" />
---
---

#### Part d — 2 Question 

**11. Predict the Hoisting Behavior**  
Without running the code, predict the output of each `console.log()` and identify which lines cause errors. Explain your answer using the rules of hoisting for `var`, `let`, and `const`.

```javascript
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```
---
Answer:11:-
<img width="1080" height="650" alt="image" src="https://github.com/user-attachments/assets/53ae622e-9942-4638-8a25-9c0853a78cdb" />
---

**12. Fix the Hoisting Errors**  
The following program contains errors related to hoisting. Fix the code so that it runs correctly without any errors. Make sure your solution follows the rules of hoisting for `var`, `let`, and `const` (you may reorder declarations/assignments or change keywords only where necessary to make it work properly).

```javascript
console.log(x);
console.log(y);
console.log(z);

var x = "Hello";
let y = "World";
const z = "!";

console.log(x + " " + y + z);
```
---
Answer:12:-
<img width="1080" height="606" alt="image" src="https://github.com/user-attachments/assets/ca76cd67-5383-4dfe-b443-e7274ede9f63" />
---


**Questions on Primitive vs Non-Primitive Data Types**

---

### Part e — Basic Identification (4 Questions)

**1. Classify the Types**  
Declare one variable of each of the following types and print both the value and its type using `typeof`:
- A whole number  
- A decimal number  
- A piece of text  
- A true/false value  
---
Answer:1:-
<img width="1080" height="510" alt="image" src="https://github.com/user-attachments/assets/27231cb4-8a49-420d-9479-721ccb5d45c5" />
---

**2. Undefined vs Null**  
Declare two variables:
- `a` using `let` without assigning any value  
- `b` and intentionally assign `null` to it  

Print both variables and their `typeof` results. Explain the difference between `undefined` and `null`.
---
Answer:2:-
<img width="1080" height="240" alt="image" src="https://github.com/user-attachments/assets/e9198614-2bd0-4488-a632-3568312c4461" />
---

**3. Number Special Values**  
Create variables for the following and print each value along with its type:
- Positive Infinity  
- Negative Infinity  
- Not-a-Number (`NaN`)  
- A large number written with scientific notation (e.g., `2.5e3`)  
- A number written with underscores for readability (e.g., `1_000_000`)
---
Answer:3:-
<img width="1080" height="717" alt="image" src="https://github.com/user-attachments/assets/56d4e883-b450-4264-a103-8b9aa5996910" />
---

**4. String Styles**  
Create three string variables using:
- Single quotes  
- Double quotes  
- Template literals (backticks) that include another variable  

Print all three strings.
---
Answer:4:-
<img width="1280" height="579" alt="image" src="https://github.com/user-attachments/assets/85415b6a-08f7-4175-9508-4867debd9478" />
---
---

### Part f — Advanced Primitive Types (3 Questions)

**5. Symbol Uniqueness**  
Create two Symbols with the same description (`'id'`).  
Compare them using `===` and print the result.  
Then use both Symbols as keys in an object and retrieve the values.  
Explain why the comparison returns `false`.
---
Answer:5:-
<img width="1031" height="756" alt="image" src="https://github.com/user-attachments/assets/a93e833f-18ea-4697-bd52-4c5b2ef87c64" />
---

**6. BigInt Precision**  
Create a regular `number` with the value `9007199254740991` (Number.MAX_SAFE_INTEGER).  
Add `1`, `2`, and `3` to it and print the results.  
Now create the same value as a `BigInt` and perform the same additions.  
Print the results and explain the difference.
---
Answer:6:-
<img width="1280" height="693" alt="image" src="https://github.com/user-attachments/assets/ea6832f2-789c-4b9e-825d-14b774021bfa" />
---

**7. Choose the Correct Type**  
For each description below, write the most appropriate primitive data type and give an example declaration:
- A unique identifier that is never equal to another value with the same description  
- A very large integer that must keep exact precision  
- A variable that has been declared but not yet given a value  
- An intentional empty value  
---
Answer:7:-
<img width="1280" height="804" alt="image" src="https://github.com/user-attachments/assets/c54a5689-89c0-42e1-967d-68c74b0ee401" />

---

### Part g — Prediction & Fixing (3 Questions)

**8. Predict the Output**  
Without running the code, predict what each `console.log` will print (value + type). Explain your reasoning.

```javascript
let a;
let b = null;
let c = 42;
let d = "Hello";
let e = true;
let f = Symbol("key");
let g = 123n;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof g, g);
```
---
Answer:8:-
<img width="1080" height="593" alt="image" src="https://github.com/user-attachments/assets/1776c29e-0624-4e44-ba42-d392582534b2" />
---

**9. Fix the Code**  
The following program has mistakes related to primitive types. Fix it so that it runs correctly and prints meaningful values.

```javascript
let num = 10;
let text = Hello;
let flag = True;
let empty;
let nothing = Null;
let unique = symbol("id");
let big = 9007199254740991;

console.log(num, text, flag, empty, nothing, unique, big);
```
---
Answer:9:-
<img width="1070" height="518" alt="image" src="https://github.com/user-attachments/assets/11d80541-6dfd-4a2d-bede-9e8e759be4be" />
---

**10. Primitive vs Non-Primitive**  
Answer the following questions in your own words and give one example for each:

a) What is the main difference between Primitive and Non-Primitive data types?
---
Answer:10:(a):-
<img width="1080" height="516" alt="image" src="https://github.com/user-attachments/assets/d9130607-c7bb-41cd-b5d2-585811281f93" />
---

b) Why are Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt called Primitive?  
---
Answer:10:(b):-
<img width="1080" height="448" alt="image" src="https://github.com/user-attachments/assets/32b88b64-0d11-4b9f-9ddc-8bfa44e93ec7" />
---

c) Give one example of a Non-Primitive data type and explain why it is considered Non-Primitive.
---
Answer:10:(c):-
<img width="1080" height="769" alt="image" src="https://github.com/user-attachments/assets/54d0e131-98e8-4e8b-a939-2f7df4ff92ce" />
---
---
