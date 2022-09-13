// slice = method that allows you to create  a new array from selected elements of the original array

//one argument larger than zero – all elements from the index given as an argument to the end of the array are copied;
//two arguments larger than zero – the element from the index specified as the first argument to the element specified as the second argument are copied;
//two arguments, first positive, second negative – all elements from the specified index to the end of the array are copied, except for the specified number of the last elements (e.g. argument -3 means that we do not copy the last three elements)
//one negative argument – the specified number of the last elements are copied to the end of the array (e.g. -2 means that you copy the last two elements)

let names = ["Olivia","Emma", "Mateo", "Samuel"];

let n1 = names.slice(2); 
console.log(n1);

let n2 = names.slice(1,3);
console.log(n2);

let n3 = names.slice(0, -1); 
console.log(n3); 

let n4 = names.slice(-1);
console.log(n4);

console.log(names); 