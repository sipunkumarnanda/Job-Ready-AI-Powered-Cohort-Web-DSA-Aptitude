
### 🔹 Your Data

```js
const obj = [{
    "name" : "Amrita",
    "age" : 20,
    "Fav-Food" : [{
        "Veg" : "Biriyani"
    }, {
        "chinese" : "xuiui"
    }]
}]
```

* `obj` is an **array** with **one element**.
* That element is an **object** with:

  * `name` → `"Amrita"`
  * `age` → `20`
  * `"Fav-Food"` → an array of objects (`[{ Veg: "Biriyani" }, { chinese: "xuiui" }]`).

---

### 🔹 1. `console.log(obj)`

```js
console.log(obj);
```

Output:

```js
[ { name: 'Amrita', age: 20, 'Fav-Food': [ [Object], [Object] ] } ]
```

* Since `obj` is an array, it prints inside `[ ]`.
* `"Fav-Food"` is also an array of objects.
* In **shorthand console view**, nested objects may show as `[Object]`.

---

### 🔹 2. `console.log([...obj])`

```js
console.log([...obj]);
```

Output is the same:

```js
[ { name: 'Amrita', age: 20, 'Fav-Food': [ [Object], [Object] ] } ]
```

* `[...obj]` → **spread operator** copies the **elements** of `obj` into a **new array**.
* Since `obj` has only **one object**, the new array looks identical.

---

### 🔹 3. `console.log(...obj)`

```js
console.log(...obj);
```

Output:

```js
{
  name: 'Amrita',
  age: 20,
  'Fav-Food': [ { Veg: 'Biriyani' }, { chinese: 'xuiui' } ]
}
```

* `...obj` → spreads the elements of `obj` as **separate arguments** to `console.log`.
* Since `obj` has only **one element**, that single object is passed directly.
* So instead of being wrapped inside `[ ]`, the object is printed directly.

---

### ✅ Key Notes

1. **`obj` is an array** with one element (an object).
2. **`console.log(obj)`** → logs the array as-is.
3. **`console.log([...obj])`** → makes a shallow copy of the array, same output.
4. **`console.log(...obj)`** → spreads array elements into arguments. Since only one element exists, it logs just the object.
5. `"Fav-Food"` is an array of objects, so nested `[Object]` is shown in shorthand, but fully expanded when directly logging.

---