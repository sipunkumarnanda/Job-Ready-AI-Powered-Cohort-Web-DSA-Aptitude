// Q. 40. Extend the previous question and capitalize first and last character of each word in the scentence and print the new scentence

let s = "Hello bhai kaise ho a";
console.log(s);

let strArr = s.split(" ");
// console.log(strArr);

let ans = "";
for (let i = 0; i < strArr.length; i++) {
  let word = strArr[i];

  if(word.length <= 2){
    ans += word.toLocaleUpperCase() + " "
  }else{
    ans += word.charAt(0).toUpperCase() 
    + word.substring(1, word.length-1) 
    + word.charAt(word.length-1).toUpperCase() 
    + " "
  }
}

console.log(ans);
