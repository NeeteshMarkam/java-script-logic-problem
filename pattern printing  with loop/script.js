// this js file for pattern printing
let star = "*";
for(let i =1;i<=5;i++){
    let pattern = "";
   for (let j =1; j<=i; j++) {
    pattern += "* "
   }
   console.log(pattern)
}

//  Q.2  
// We ask:

// How many rows? → 3

// How many columns in each row? → 5

// 🧠 Mindset:

// “Each row prints 5 stars → repeat 3 times.”
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * *
for (let i = 1; i <=4; i++) {
let pattern = ""
    for(let j =1;j<=5;j++){
    pattern += '* '
    }
    console.log(pattern);
}



//     *
//    **
//   ***
//  ****
// *****
// Ask:

// What changes? → spaces decrease, stars increase

// Formula:

// spaces = n - row

// stars = row

// 🧠 Mindset:

// “Every line has spaces first, then stars.”


for(let row =1;row<=5;row++){
let pattern ="";
let space = "";
    for(let k =1;k<=5-row;k++)
    {
       space +=" "
    }
    
    for(let col =1;col<=row;col++){
        pattern +="*"
    }
    console.log(space+pattern)
}


// When Hollow Appears — Think Conditions
// *****
// *   *
// *   *
// *****

for(let i =1;i<=5; i++){
let pattern =""
    for(let j =1;j<=5;j++){
        if (i==1 || i==5 || j==1 ||j==5) {
           pattern += "*"
        } else {
           pattern +=" "
        }
    }
    console.log(pattern)
}

//    *
//   ***
//  *****
//  Ask:

// How many spaces? → n - row

// How many stars? → 2 * row - 1

// 🧠 Mindset:

// “Each row = spaces + stars → formulas decide both.”
for(let i =1;i<=4;i++){
    let space ="";
    let pattern ="";
    for(let k =1;k<=4-i;k++){
        space +=" ";
    }
    for(let j = 1;j<=2*i-1;j++){
        pattern += "*"
    }
    console.log(space+pattern);
}


function printPyramid(rows,symbol = '*') {
    for (let i = 1; i <= rows; i++) {
        let space = ' '.repeat(rows-i);
        let pattern = symbol.repeat(2*i -1);
        console.log(space+pattern);
    }
}
printPyramid(5,"#")

