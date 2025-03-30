// do while loop (exit control)
// let i = 1
// do {
//     console.log("Hello world" , i);
//     i++
// }while(i<10)

// Repeat Hello
// let userInput;
// do{
//     console.log("Hello");
//     userInput = prompt("Do you want to print again : yes / no").toLowerCase()
// }while(userInput === "yes")

// Q2.   Guess the number
// let randomNumber = Math.floor(Math.random() * 100) + 1

// let n

// do{
//     n = Number(prompt("Guess the number between 1 to 100"))
//     if(isNaN(n) || n < 0 || n > 100){
//         console.log("please enter valid number");
//         continue
//     }

//     if(n > randomNumber){
//         console.log("Too High and try again");
//     }else if(n < randomNumber){
//         console.log("Too low and try again");
//     }else{
//         console.log("congrats 🎉🎉 and number was : ", randomNumber);
//     }
// }while(randomNumber !== n)

// Q3.  sasta calculator

// let permission;
// do {
//   let num1 = Number(prompt("Enter First number : "));
//   let num2 = Number(prompt("Enter second number : "));
//   let operator = prompt(
//     "Enter the operator you want to perform task  ( + , - , * , /) : "
//   );

//   switch (operator) {
//     case "+":
//       console.log(`${num1} + ${num2} = ${num1 + num2}`);
//       break;

//     case "-":
//       console.log(`${num1} - ${num2} = ${num1 - num2}`);
//       break;

//     case "*":
//       console.log(`${num1} * ${num2} = ${num1 * num2}`);
//       break;
//     case "/":
//         if(num2 !== 0) console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         else console.log("please enter a valid number");
//       break;

//     default:
//       console.log("Enter a valid operator try again");
//   }
//   permission = prompt("Do you want to continue : yes / no").toLocaleLowerCase();
// } while (permission === "yes");

// Q4.  project resturant
// starter ,  main course , desort

let permission;

do {
  let choice = Number(
    prompt("Enter 1 for Starter , 2 for main course , 3 for dessert")
  );
  switch (choice) {
    case 1:
      let ch2 = Number(
        prompt(
          "Enter 1 for Soup (Tomato Soup, Chicken Soup) , 2 for Garlic Bread , 3 for Spring Rolls"
        )
      );
      switch (ch2) {
        case 1:
          console.log("soup : 100 rupees");
          break;
        case 2:
          console.log("Garlic Bread : 200 rupees");
          break;
        case 3:
          console.log("Spring Rolls : 300 rupees");
          break;
        default:
          console.log("Enter a valid number");
      }
      break

    case 2:
      let ch3 = Number(
        prompt(
          "Enter 1 for Grilled Chicken with Mashed Potatoes, 2 for Pasta (Spaghetti, Alfredo), 3 for Rice with Curry"
        )
      );

      switch (ch3) {
        case 1:
          console.log("Grilled Chicken with Mashed Potatoes: 400 rupees");
          break;
        case 2:
          console.log("Pasta (Spaghetti, Alfredo): 350 rupees");
          break;
        case 3:
          console.log("Rice with Curry: 250 rupees");
          break;
        default:
          console.log("Enter a valid number");
      }
      break

    case 3:
      let ch4 = Number(
        prompt("Enter 1 for Chocolate Cake, 2 for Ice Cream, 3 for Fruit Salad")
      );

      switch (ch4) {
        case 1:
          console.log("Chocolate Cake: 250 rupees");
          break;
        case 2:
          console.log("Ice Cream: 150 rupees");
          break;
        case 3:
          console.log("Fruit Salad: 100 rupees");
          break;
        default:
          console.log("Enter a valid number");
      }
      break;

    default:
      console.log("Enter a valid number");
  }
  permission = prompt("Do you want to continue : yes / no").toLocaleLowerCase();
} while (permission === "yes");
