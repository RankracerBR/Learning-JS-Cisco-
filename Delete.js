// 3.2.1.5 

let year = 10191; 
console.log(typeof year);
console.log(typeof false);

let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); 
console.log(name instanceof Array);

let user = { 
   name: "Alice",
   age: 38
};
console.log(user.age); 
delete user.age;
console.log(user.age);

console.log(true ? "Alice" : "Bob"); 
console.log(false ? "Alice" : "Bob");

let name2 = 1 > 2 ? "Alice" : "Bob";
console.log(name2); 