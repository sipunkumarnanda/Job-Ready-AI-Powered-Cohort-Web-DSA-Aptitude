// Q1. indian currency notes breakdown 
/*
let ammount = Number(prompt("Enter the ammount : "))
console.log(ammount);

twoThousandNotes = Math.trunc(ammount/2000)
ammount = ammount % 2000

fiveHundredNotes = Math.trunc(ammount/500)
ammount = ammount % 500

twoHundredNotes = Math.trunc(ammount/200)
ammount = ammount % 200

oneHundredNotes = Math.trunc(ammount/100)
ammount = ammount % 100

fiftyNotes = Math.trunc(ammount/50)
ammount = ammount % 50

twentyNotes = Math.trunc(ammount/20)
ammount = ammount % 20

tenNotes = Math.trunc(ammount/10)
ammount = ammount % 10

fiveNotes = Math.trunc(ammount/5)
ammount = ammount % 5

twoNotes = Math.trunc(ammount/2)
ammount = ammount % 2

oneNotes = Math.trunc(ammount/1)
ammount = ammount % 1

console.log(twoThousandNotes, fiveHundredNotes, twoHundredNotes, oneHundredNotes, fiftyNotes, twentyNotes, tenNotes, fiveNotes, twoNotes, oneNotes);

console.log(`2000 X ${twoThousandNotes} = ${2000 * twoThousandNotes}`);
console.log(`500 X ${fiveHundredNotes} = ${500 * fiveHundredNotes}`);
console.log(`200 X ${twoHundredNotes} = ${200 * twoHundredNotes}`);
console.log(`100 X ${oneHundredNotes} = ${100 * oneHundredNotes}`);
console.log(`50 X ${fiftyNotes} = ${50 * fiftyNotes}`);
console.log(`20 X ${twentyNotes} = ${20 * twentyNotes}`);
console.log(`10 X ${tenNotes} = ${10 * tenNotes}`);
console.log(`5 X ${fiveNotes} = ${5 * fiveNotes}`);
console.log(`2 X ${twoNotes} = ${2 * twoNotes}`);
console.log(`1 X ${oneNotes} = ${1 * oneNotes}`);

*/


// Optimized code 
let ammount = Number(prompt("Enter ammount : "))
console.log("ammount : ", ammount);

let denomination = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
let obj = {}
for (const notes of denomination) {
    let noteCount = Math.trunc(ammount/notes)
    ammount = ammount % notes
    
    obj[notes] = noteCount
}


for (const element of Object.keys(obj).reverse()) {
    // console.log(obj[element], element);
    console.log(`${element} X ${obj[element]} = ${element * obj[element]}`);
}


// above code explanation 
let x = Object.keys(obj).reverse() 
console.log(x);  // ['2000', '500', '200', '100', '50', '20', '10', '5', '2', '1']

for (const element of x) {
    console.log(element);
    console.log(obj[element]);
}



// ----------------------------
// Q2. write a program to accept rating of the movie as double and movie name as string.

// let name = prompt("Enter Movie Name : ")
// let rating = Number(prompt("Enter Movie's Rating : ")).toFixed(1)

// // console.log(name , rating);

// if(rating <= 2.0){
//     console.log(`${name} - ${rating} - Flop`);
// }else if(rating <= 3.4){
//     console.log(`${name} - ${rating} - Semi-hit`);
// }else if(rating <= 4.5){
//     console.log(`${name} - ${rating} - Hit`);
// }else{
//     console.log(`${name} - ${rating} - Super-Hit`);
// }







// Q3. write a program to calculate the salary as per the following table 
let gender = prompt("Enter your gender : ").toUpperCase()
let experience = Number(prompt("Enter your experience in year : "))
let qualification = prompt("Enter your qualification").toUpperCase()

let salary;

if(gender == "MALE"){
    console.log("You are male");
    if(experience >= 10 && qualification == "POST-GRADUATE"){
      salary = 15000
    }else if(experience >= 10 && qualification == "GRADUATE"){
       salary = 10000
    }else if(experience < 10 && qualification == "POST-GRADUATE"){
       salary = 10000
    }else{
        salary = 7000
    }
}else{
    console.log("You are female");
    if(experience >= 10 && qualification == "POST-GRADUATE"){
        salary = 12000
    }else if(experience >= 10 && qualification == "GRADUATE"){
        salary = 9000
    }else if(experience < 10 && qualification == "POST-GRADUATE"){
        salary = 10000
    }else{
        salary = 6000
    }
}

console.log(`Gender : ${gender} Year of Ecperience : ${experience} Qualification : ${qualification}  , And Your Salary is : ${salary}`);