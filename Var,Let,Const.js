// Var(variação) = Can be declared in the scope or outside{}(it can give wrong values).
//let = Can be updated inside the scope, not outside. 
//const(constante) = Can not be changed.

//3.1.1.3
const name = "Alice"; 
console.log(name);

let year = 2050;
let newYear = year = 2051;

// Or

let year2 = 2050; 
year2 = 2051;
let newYear2 = year; 
