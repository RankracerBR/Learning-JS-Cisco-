// 3.1.1.9 

let nr = 0;
let year = 1970;
let name =  "Alice";
let empty = "";

console.log(!nr); 
console.log(!year); 
console.log(!name); 
console.log(!empty); 

console.log(!!nr); 
console.log(!!name);


console.log(true && 1991);
console.log(false && 1991);
console.log(2 && 5);
console.log(0 && 5);
console.log("Alice" && "Bob");
console.log("" && "Bob"); 

console.log(true || 1991);
console.log(false || 1991);
console.log(2 || 5);
console.log(0 || 5);
console.log("Alice" || "Bob");
console.log("" || "Bob");