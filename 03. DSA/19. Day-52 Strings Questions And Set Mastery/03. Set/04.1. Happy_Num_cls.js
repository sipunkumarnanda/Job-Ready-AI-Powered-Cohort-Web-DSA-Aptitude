import PromptSync from "prompt-sync";
let prompt = PromptSync()

let n = prompt("Enter a number : ")
console.log(n);

let set = new Set();

let isHappyNumber = false;

while (true) {

  let sum = 0;

  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem * rem;
    n = Math.floor(n / 10);
  }

  if (sum == 1) {
    isHappyNumber = true;
    break;
  }

  if (set.has(sum)) {
    break;
  } else {
    set.add(sum);
  }

  n = sum;

}

console.log(isHappyNumber ? " Happy Number" : " Not a Happy Number");