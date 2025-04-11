// String Methods 

// Length
let s = "Sheriyans"
console.log(s.length);  // 9


// Substring 
console.log(s.substring(3));  // riyans    (Starting from 3rd index to last if there is no 2nd parameter)
console.log(s.substring(3,8));  // riyan    (3rd index to 7th index)


// Slice(start, end) - Extracting Substring
console.log(s.slice(3));    // riyans
console.log(s.slice(3, 8));    // riyan


console.log("-----------In Negative-------------");
console.log(s.slice(-4, -1));    // yan

// if we want to print yans , then 
console.log(s.slice(-4, s.length));    // yans
console.log(s.slice(-4));    // yans

// Substring vs slice -> working same but in substring negative (-) not works 


// toUpperCase and toLowerCase 
console.log(s.toUpperCase());   // SHERIYANS
console.log(s.toLowerCase());   // sheriyans


// concat 
console.log(s.concat(" is ", " located ", "at " , "bhopal"));



// trim 
let naam = "    Hello    "
console.log(naam.trim());
naam = "     Akku       Nanda       "
console.log(naam.trim());

//  Indexof(substring)
console.log(s.indexOf('yan'));

// Startswith(subsstring)
console.log(s.startsWith('S'));  // True
console.log(s.startsWith('s'));  // false


// endsWith(substring)
console.log(s.endsWith('z'));  // false
console.log(s.endsWith('s'));  // true


// replace(old, new)
console.log(s.replace('yans', 'zebra'));    // Sherizebra
console.log(s);

// replaceAll(old, new)
console.log(s.replaceAll('yans', 'zebra'));   // Sherizebra
console.log(s);



// split
let x = 'SipunXAlan'
console.log(typeof x.split('X'));   // [ 'Sipun', 'Alan' ]  , Return in the form of Object



// charAt(index)
console.log(s.charAt(1));   // h
console.log(s.charAt(100));   // empty string print 


//  charCodeAt(index)
console.log(s.charCodeAt(1));   // 104  (return ASCII value)