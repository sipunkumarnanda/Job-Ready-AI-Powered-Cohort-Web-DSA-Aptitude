import promptSync from "prompt-sync"
let prompt = promptSync()


//  print ABCD triangle
// let n = Number(prompt("Enter the number of letters to print the ABCD triangle: "));

// for(let i = 1 ; i<=n ; i++){
//     let letters = ""
//     let ascii = 65
//     for(let j = 1; j<=i; j++){
//         letters = letters + String.fromCharCode(ascii) + " "
//         ascii++
//     }
//     console.log(letters);
// }




// -------------------------------------------------

// // Mirror right angle triangle 

// let n = Number(prompt("Enter the number of rows to print the mirrored right-angle triangle: "));

// for(let i = 1 ; i<=n; i++){
//     let print = ""
//     for(let j=1 ; j<=n-i; j++){
//         print = print + "  "
//     }
//     for(let k=1; k<=i; k++){
//         print = print + "*" + " " 
//     }
//     console.log(print);
// }


//  --------------------------------------------



// // print pyramid

// let n = Number(prompt("Enter the number of rows to print the pyramid pattern: "));

// for(let i = 1 ; i<=n; i++){
//     let print = ""
//     for(let j=1 ; j<=n-i; j++){
//         print = print + " "
//     }
//     for(let k=1; k<=i; k++){
//         print = print + "*" + " " 
//     }
//     console.log(print);
// }



// -------------------------------------------------



// // Print v 

// let n = Number(prompt("Enter the number of rows to print the V pattern: "));

// for(let i = 1 ; i<=n; i++){
//     let print = ""
//     for(let j=1 ; j<=n*2+1; j++){
//         if(i === j || i+j === 10){
//             print = print + "*"
//         }else{
//             print = print + " "
//         }
//     }
//     console.log(print);
// }




// -------------------------------------------------



// print x

let n = Number(prompt("Enter an odd number to print the X pattern: "));

for(let i = 1 ; i<=n; i++){
    let print = ""
    for(let j=1 ; j<=n; j++){
        if(i == j || i+j === n+1){
            print = print + "*"
        }else{
            print = print + " "
        }
    }
    console.log(print);
}