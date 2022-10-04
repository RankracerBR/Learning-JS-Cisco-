// "length" (property that returns the number of character in a string).
//"charAt"(method that returns the character at the "index" position in  the string, (indexes start from 0)).
//"slice(beginIndex, [optional] endIndex)" a method that returns a new string and is created from the character between "beginIndex" and "endIndex". 
//"split(separator, [opttional] limit)" method that splits the string into substrings whenever a separator is found in the string, and return an array of those substrings.

let str = "Java script language"; 

console.log(str.length);
console.log('test'.length); 

console.log(str.charAt(0)); 
console.log('abc'.charAt(1)); 

console.log(str.slice(0, 4));
console.log('test' .slice(1,3));  

console.log(str.split(' '));  
console.log('192.168.1.1' .split(' . '));  