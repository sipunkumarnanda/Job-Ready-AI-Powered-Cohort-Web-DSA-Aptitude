### **JavaScript `.sort()` Method & Lexicographical Sorting**  

#### **🔹 How `.sort()` Works in JavaScript**
By default, the `.sort()` method in JavaScript converts **array elements into strings** and sorts them **lexicographically** (like dictionary order). This can cause unexpected results when sorting numbers.

#### **🔹 Example: Default Sorting**
```js
let nums = [5, 10, 1, 25];
nums.sort();
console.log(nums);  
// Output: [1, 10, 25, 5]  (Not numerically sorted)
```
🔸 **Why?**  
- The numbers are converted to **strings**: `["5", "10", "1", "25"]`
- Then sorted **lexicographically**:
  - `"1"` comes first
  - `"10"` follows (since `"1"` comes before `"5"`)
  - `"25"` is next
  - `"5"` is last

---

### **🔹 Fix: Use a Compare Function**
To sort numbers correctly, use a **compare function**:
```js
let nums = [5, 10, 1, 25];
nums.sort((a, b) => a - b);  // Ascending order
console.log(nums);  
// Output: [1, 5, 10, 25]
```
- If `a - b` is **negative**, `a` comes first.  
- If `a - b` is **positive**, `b` comes first.  
- If `a - b` is **zero**, order remains unchanged.  

#### **🔹 Descending Order**
```js
nums.sort((a, b) => b - a);
console.log(nums);  
// Output: [25, 10, 5, 1]
```

---

### **🔹 Key Takeaways**
✔ **Default `.sort()` converts elements to strings & sorts lexicographically**  
✔ **For numbers, always provide a compare function (`(a, b) => a - b`)**  
✔ **Use `(b - a)` for descending order**  

---

#### **📌 Notes Summary**
- **Lexicographic sorting** means elements are compared as **strings**.
- To correctly sort numbers, use a **compare function** (`a - b` for ascending, `b - a` for descending).
- `.sort()` **modifies the original array** (not a new copy).