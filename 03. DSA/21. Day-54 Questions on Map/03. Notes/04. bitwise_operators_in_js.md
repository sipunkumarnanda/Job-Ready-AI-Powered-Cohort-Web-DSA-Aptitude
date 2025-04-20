
## 📘 Bitwise Operators in JavaScript — Full Notes

### 🧠 What are Bitwise Operators?

Bitwise operators work on **binary representations** of numbers (base-2).  
They treat numbers as **32-bit signed integers** and manipulate bits **bit by bit**.

---

## 🧩 Binary Representation in JS

JavaScript stores numbers in **64-bit floating point**, but **bitwise operators treat them as 32-bit integers**.

```js
let num = 5       // Decimal
// Binary: 00000000000000000000000000000101
```

---

## 📚 Types of Bitwise Operators

| Operator | Name                  | Symbol | Description                                                  |
|----------|-----------------------|--------|--------------------------------------------------------------|
| AND      | Bitwise AND           | `&`    | Sets each bit to 1 if both bits are 1                        |
| OR       | Bitwise OR            | `\|`   | Sets each bit to 1 if one of two bits is 1                   |
| XOR      | Bitwise XOR           | `^`    | Sets each bit to 1 if only one of the two bits is 1          |
| NOT      | Bitwise NOT           | `~`    | Inverts all bits (1 becomes 0, 0 becomes 1)                  |
| LEFT     | Left Shift            | `<<`   | Shifts bits to the left and fills with 0 on the right        |
| RIGHT    | Signed Right Shift    | `>>`   | Shifts bits to the right, preserving the sign (sign-extended)|
| UNSIGNED | Unsigned Right Shift  | `>>>`  | Shifts bits to the right, filling with 0 (ignores sign)      |

---

## 🔍 How Each Operator Works

### 1. **Bitwise AND (`&`)**

Compares each bit of two numbers, returns 1 if **both are 1**.

```js
5 & 3 = 1

// Binary:
// 5 = 0101
// 3 = 0011
// --------
//     0001 => 1
```

---

### 2. **Bitwise OR (`|`)**

Compares each bit of two numbers, returns 1 if **at least one is 1**.

```js
5 | 3 = 7

// Binary:
// 5 = 0101
// 3 = 0011
// --------
//     0111 => 7
```

---

### 3. **Bitwise XOR (`^`)**

Returns 1 only if **the bits are different**.

```js
5 ^ 3 = 6

// Binary:
// 5 = 0101
// 3 = 0011
// --------
//     0110 => 6
```

---

### 4. **Bitwise NOT (`~`)**

Flips all bits. Turns 0 → 1 and 1 → 0.  
Works as: `~x = -(x + 1)`

```js
~5 = -6

// Binary of 5  =  00000000000000000000000000000101
// Flip bits     =  11111111111111111111111111111010
// Decimal       = -6 (2’s complement)
```

---

### 5. **Left Shift (`<<`)**

Shifts bits to the left (multiplies by 2 for each shift).

```js
5 << 1 = 10

// Binary: 0101 => 1010
// Decimal: 10
```

---

### 6. **Signed Right Shift (`>>`)**

Shifts bits to the right (divides by 2), preserves sign (for negatives).

```js
-8 >> 1 = -4

// Binary of -8 (2’s complement) = 11111111111111111111111111111000
// Shift right by 1:
//                            = 11111111111111111111111111111100 => -4
```

---

### 7. **Unsigned Right Shift (`>>>`)**

Shifts bits to the right, fills leftmost with `0`, even for negative numbers.

```js
-8 >>> 1 = 2147483644

// Result is a large unsigned number
```

---

## 🧪 Summary Table

| Expression   | Binary Form         | Result | Explanation                |
|--------------|----------------------|--------|----------------------------|
| `5 & 3`      | 0101 & 0011          | `1`    | Only 3rd bit is common     |
| `5 \| 3`     | 0101 \| 0011         | `7`    | Union of all 1s            |
| `5 ^ 3`      | 0101 ^ 0011          | `6`    | Differing bits only        |
| `~5`         | ~0000000000000101    | `-6`   | Flips bits, two’s comp     |
| `5 << 1`     | 00000101 << 1        | `10`   | Shift left                 |
| `8 >> 1`     | 00001000 >> 1        | `4`    | Shift right                |
| `-8 >> 1`    | Sign-preserved shift | `-4`   | Right shift with sign      |
| `-8 >>> 1`   | Unsigned shift       | `2147483644` | Fill with 0         |

---

## 📝 Use Cases

- Set, clear, toggle flags in binary.
- Efficient multiplication/division by 2.
- Compressing data using bits.
- Low-level binary manipulations.
- Image processing, encryption algorithms.

---

## ✅ Tip for Practice

To see bitwise operations in real time:

```js
console.log((5).toString(2));  // "101"
console.log((3).toString(2));  // "11"
console.log((5 & 3).toString(2));  // "1"
```

---