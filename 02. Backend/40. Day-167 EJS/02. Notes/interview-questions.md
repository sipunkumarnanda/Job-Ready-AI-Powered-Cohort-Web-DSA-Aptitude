
# 📌 **EJS Interview Questions (Basics → Advanced)**

---

## 🔹 Basics of EJS

1. What is EJS, and why is it used in Node.js applications?
2. How do you install and set up EJS in an Express project?
3. What is the purpose of `app.set("view engine", "ejs")`?
4. What is the default folder where EJS looks for template files? Can this be changed?
5. What is the difference between rendering a static HTML file and an EJS file in Express?
6. What is the syntax for embedding JavaScript code inside an EJS template?

---

## 🔹 EJS Delimiters

7. What is the purpose of `<% %>` in EJS?
8. What is the purpose of `<%= %>` in EJS?
9. What is the purpose of `<%- %>` in EJS?
10. What is the difference between `<%= %>` and `<%- %>`?
11. How can you escape special characters in EJS?
12. Can you run `if` and `for` statements inside EJS templates? Give an example.

---

## 🔹 Passing Data to Views

13. How do you pass data from Express routes to EJS templates?
14. How can you render a list of items (like an array) in EJS?
15. How do you render dynamic data inside an EJS template using `<%= %>`?
16. How do you handle conditional rendering (e.g., if/else) in EJS templates?
17. How can you display a default value if a variable is not defined in EJS?

---

## 🔹 Includes and Partials

18. What are partials in EJS, and why are they used?
19. What is the syntax for including one EJS file inside another?
20. How would you create reusable headers, footers, or navigation bars in EJS?
21. Can you pass data to an included EJS file? If yes, how?

---

## 🔹 Layouts and Reusability

22. Does EJS support layouts (like in Pug or Handlebars)? How do you implement them in EJS?
23. How can you avoid repeating code in multiple EJS templates?
24. What are some best practices for structuring EJS views in a large project?

---

## 🔹 Advanced EJS Concepts

25. What is the difference between EJS and other template engines like Pug or Handlebars?
26. Can you use EJS with front-end frameworks (like React or Vue)? Why or why not?
27. How do you serve static files (CSS, JS, images) when using EJS with Express?
28. What is the difference between `res.render()` and `res.sendFile()` in Express with EJS?
29. Can EJS render JSON data? If yes, how?
30. How do you debug errors in EJS templates?

---

## 🔹 Security and Performance

31. Why does EJS escape output by default when using `<%= %>`?
32. When would you use `<%- %>` instead of `<%= %>`? What are the risks?
33. How can you prevent XSS (Cross-Site Scripting) attacks in EJS templates?
34. Does EJS support caching? How do you enable or disable caching in production?
35. How can you improve performance when using EJS with large datasets?

---

## 🔹 Practical / Coding Questions

36. Write an EJS loop to render a list of messages from an array.
37. Write EJS code to conditionally display “Admin Panel” only if the user role is `admin`.
38. Write EJS code to include a `header.ejs` and `footer.ejs` inside your main `index.ejs`.
39. Show an example where you pass multiple variables (like `name`, `age`, `city`) from Express to EJS and render them.
40. Create an EJS template that prints a table from an array of objects (like user data).

---