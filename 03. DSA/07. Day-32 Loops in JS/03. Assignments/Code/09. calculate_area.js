// Calculate Area using Switch Statement

// Description: Find the area of a circle, rectangle, or triangle using switch.

// Example
// Input: Choice = Circle, Radius = 5
// Output: Area = 78.5

// Hint: Use switch with case statements.



let userInput = Number(prompt("Enter 1 for area of a circle, 2 for rectangle, and 3 triangle")
)
switch (userInput) {
  case 1:
    let radius = Number(prompt("Enter radius : "));
    console.log(`area of circle is : ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);
    break;

  case 2:
    let length = Number(prompt("Enter the length of the rectangle:"));
    let width = Number(prompt("Enter the width of the rectangle:"));
    console.log("Area of the rectangle:", length * width);
    break;

  case 3:
    let base = Number(prompt("Enter the base of the triangle:"));
    let height = Number(prompt("Enter the height of the triangle:"));
    console.log("Area of the triangle:", (base * height) / 2);
    break

    default : console.log("Enter a valid input");
}