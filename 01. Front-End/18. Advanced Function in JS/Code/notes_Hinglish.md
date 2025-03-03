# **Advanced Functions in JavaScript**  

## **1️⃣ Rest Parameters**  
- Jab humein ek function ko unknown number of arguments dene hote hain, tab hum **rest parameters (`...`)** ka use karte hain.  
- Yeh **array** ki tarah behave karta hai aur **baaki saare arguments ko ek array mein store** kar leta hai.  

```js
function abcd(a, b, ...args) {
    console.log(a, b, args);  // 1 2 [3, 4, 5]
}

abcd(1, 2, 3, 4, 5);
```

---

## **2️⃣ Hoisting**  
- **JavaScript mein variables aur functions ko top pe move kar diya jaata hai execution ke time pe.**  
- **`var` se declared variables ko `undefined` set kiya jata hai** aur functions **poori tarah se accessible hote hain.**  
- **Example:**  

```js
console.log(a);  // undefined
var a = 12;
```

- **Hoisted function:**  

```js
hoisting();  // Output: Hello

function hoisting() {
    console.log("Hello");
}
```

---

## **3️⃣ IIFE (Immediately Invoked Function Expression)**  
- IIFE ka use **global scope pollution avoid** karne ke liye hota hai.  
- Yeh **turant execute hota hai bina kisi function call ke.**  

```js
(function iife() {
    console.log("Hello World");
})();  
```

### **IIFE with Return Value**
```js
var ans = (function () {
    var a = 12;
    return a;
})();
console.log(ans);  // Output: 12
```

### **IIFE with Private Variables**
```js
var answer = (function () {
    var a = 12;
    return {
        set: function (val) {
            a = val;
        },
        get: function () {
            console.log(a);
        }
    };
})();

answer.set(69);
answer.get();  // Output: 69
```

---

## **4️⃣ Higher-Order Functions (HOFs)**  
- **Jo function ya to ek function ko return kare ya ek function ko parameter ki tarah accept kare, use Higher Order Function kahte hain.**  

### **(a) Function Returning Function**
```js
function hofs() {
    return function () {
        return function () {
            console.log("Hyehyehye");
        };
    };
}

hofs()()();
```

### **(b) Function Accepting Function**
```js
function hofs2(fnc) {
    fnc();
}

hofs2(function () {
    console.log("Hello HOFS");
});
```

---

## **5️⃣ Function Currying**  
- **Currying ek technique hai jisme hum function ko tod tod ke likhte hain jisme ek function doosra function return karta hai.**  
- **Isse code modular aur reusable ban jaata hai.**  

```js
function funcA(val1) {
    return function (val2) {
        return function (val3) {
            console.log(val1 + val2 + val3);
        };
    };
}

funcA(1)(2)(3);  // Output: 6
```

---

## **6️⃣ Callback Functions**  
- **Jab ek function ke andar dusra function pass kiya jata hai as an argument, use Callback Function kehte hain.**  
- Callback functions ka **use asynchronous programming** mein hota hai (like setTimeout, fetch, etc.).  

```js
function greet() {
    console.log("Good Morning.");
}

function cb(func) {
    func();
}

cb(greet);
```

---

## **7️⃣ First-Class Functions**  
- **JavaScript mein functions ko ek variable ki tarah treat kiya jata hai.**  
- Functions ko **variable mein store kar sakte hain, return kar sakte hain, aur arguments ki tarah pass bhi kar sakte hain.**  

```js
var a = () => console.log("Hello first-class function");
a();
```

---

## **8️⃣ Pure & Impure Functions**  
### **(a) Pure Function**  
- **Jo function koi bhi external state modify nahi karta aur same input pe hamesha same output deta hai, wo Pure Function hota hai.**  

```js
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));  // Output: 5
console.log(add(2, 3));  // Output: 5
```

### **(b) Impure Function**  
- **Agar function external variable ko modify kare ya unpredictable output de, to wo Impure Function hota hai.**  

```js
let total = 0;
function addToTotal(a) {
    total += a; // Modifies external variable
}

addToTotal(10);
console.log(total);  // Output: 10

addToTotal(10);
console.log(total);  // Output: 20
```

---

## **9️⃣ Scoping and Closures**  
### **(a) Global Scope**  
- **Global scope mein jo variables declare hote hain, wo kahi bhi accessible hote hain.**  
```js
let value = 10;

function globalVar() {
    console.log(value);
}

globalVar();  // Output: 10
console.log(value);
```

### **(b) Local Scope**  
- **Jo variable kisi function ke andar declare hota hai, wo sirf us function ke andar hi accessible hota hai.**  

```js
function x() {
    var y = 20;
}
// console.log(y);  // ❌ Error: y is not defined
```

### **(c) Closure**  
- **Closure ek aisa concept hai jisme ek inner function, outer function ke variables ko access kar sakta hai, even after outer function execution complete ho gaya ho.**  

```js
function z() {
    let a = 20;  // ✅ Local variable inside z()

    return function () {  // ✅ Returning an inner function
        console.log("I am the returned function inside z func. And value of a is:", a);
    };
}

let returnFunc = z();  // ✅ Calling z() returns function but doesn't execute it yet
returnFunc();  // Output: I am the returned function inside z func. And value of a is: 20
```

---

## **Summary**  
✔️ **Rest Parameters** → Multiple arguments ko ek array mein convert karta hai.  
✔️ **Hoisting** → JS pehle variables ko `undefined` aur functions ko memory mein move kar deta hai.  
✔️ **IIFE** → Function jo turant execute hota hai.  
✔️ **HOFs** → Function jo function ko accept kare ya return kare.  
✔️ **Currying** → Function jo tod tod ke likha jaye.  
✔️ **Callback Functions** → Ek function jo doosre function ko parameter ki tarah leta hai.  
✔️ **First-Class Functions** → Functions ko values ki tarah treat kiya jata hai.  
✔️ **Pure & Impure Functions** → Pure function side-effects nahi karta, Impure karta hai.  
✔️ **Scoping & Closures** → Scope define karta hai variables kaha accessible hain, closure mein inner function outer function ke variables ko access kar sakta hai.  

---