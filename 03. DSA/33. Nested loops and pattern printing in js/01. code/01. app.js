// 12345 bellow 12345 printing 5 times 
for(let i = 1 ; i<=5 ; i++){
    let print = ""
    for(let j = 1 ; j<=5 ; j++){
        // process.stdout.write(j.toString());
        print += j
    }
    console.log(print);
}


console.log("---------------------------");



//star printing 5 times each in 5 rows 
for(let i = 1 ; i<=5 ; i++){
    let print = ""
    for(let j = 1 ; j<=5 ; j++){
        // process.stdout.write(j.toString());
        print += "*"
    }
    console.log(print);
}

console.log("---------------------------");


// star printing 1 in 1st row 2 in 2nd row and so on
for(let i = 1 ; i<=5 ; i++){
    let print = ""
    for(let j = 1 ; j<=i ; j++){
        // process.stdout.write(j.toString());
        print += "*"
    }
    console.log(print);
}


console.log("---------------------------");


// 1 print in 1st row 12 print in 2nd row and 123 print in 3rd row and so on
for(let i = 1 ; i<=5 ; i++){
    let print = ""
    for(let j = 1 ; j<=i ; j++){
        // process.stdout.write(j.toString());
        print += j
    }
    console.log(print);
}

console.log("---------------------------");



// ABCD pattern printing
for(let i = 1 ; i<=5 ; i++){
    let start = 65
    for(let j = 1 ; j<=i ; j++){
        process.stdout.write(String.fromCharCode(start));
        start++
    }
    console.log();
}

console.log("---------------------------");


// reverse mirror printing 
let n = 5
for(let i = 1 ; i<=n ; i++){
    for(let j = 1 ; j<= n - i ; j++){
        process.stdout.write(" ");
    }
    for(let k = 1 ; k<=i ; k++){
        process.stdout.write("*");
    }
    console.log();
}


console.log("----------------------------------");

// printing pyramid
let x = 5
for(let i = 1 ; i <= x ; i++){
    for(let j = 1 ; j<= x - i ; j++){
        process.stdout.write(" ");
    }
    for(let k = 1 ; k<=i ; k++){
        process.stdout.write("* ");
    }
    console.log();
}