// 15. Number of Days in a Month

// Description: Find the number of days in a given month and year (to handle leap
// years).

// Exampl : 
// Input: Month = 2, Year = 2024
// Output: 29

// Hint: Use conditions
// 31 Days: Jan, Mar, May, Jul, Aug, Oct, Dec$
// 30 Days: Apr, Jun, Sep, Nov$
// February: 28 or 29 (check for leap year using year % 4 == 0 but not year %
// 100 != 0 unless year % 400 == 0).




function leapYearChecker(year){
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
 }


let year = Number(prompt("Enter year : "))
let month ;

if(isNaN(year) || year < 1){
    console.log("Enter a valid year") 
}else{
month = prompt("enter Month in full").toLowerCase().trim() ;

let isLeap = leapYearChecker(year)

switch(month){
    case "january" :
    case "march" :
    case "may" :
    case "july" :
    case "august" :
    case "october" :
    case "december" :
        console.log("31 Days");
        break
    case "april" :
    case "june" :
    case "september" :
    case "november" :
        console.log("30 Days");
        break
    case "february" : 
         console.log(isLeap ? "29 Days" : "28 Days");
         break
    default : console.log("enter a valid Month");
}

}