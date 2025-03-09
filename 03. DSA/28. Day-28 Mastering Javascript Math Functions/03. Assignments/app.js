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