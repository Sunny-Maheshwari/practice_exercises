// Tests using the lower case function
var fruit = 'Apple';
console.log("Is '".concat(fruit, "' in lowercase equal to 'apple'? I predict True."));
console.log(fruit.toLowerCase() === 'apple');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 20;
console.log("Is ".concat(num1, " equal to ").concat(num2, "? I predict False."));
console.log(num1 === num2);
console.log("Is ".concat(num1, " not equal to ").concat(num2, "? I predict True."));
console.log(num1 !== num2);
console.log("Is ".concat(num1, " greater than ").concat(num2, "? I predict False."));
console.log(num1 > num2);
console.log("Is ".concat(num1, " less than ").concat(num2, "? I predict True."));
console.log(num1 < num2);
console.log("Is ".concat(num1, " greater than or equal to ").concat(num2, "? I predict False."));
console.log(num1 >= num2);
console.log("Is ".concat(num1, " less than or equal to ").concat(num2, "? I predict True."));
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = true;
console.log("Is it sunny and warm outside? I predict True.");
console.log(isSunny && isWarm);
var isRaining = false;
var isCold = true;
console.log("Is it raining or cold outside? I predict True.");
console.log(isRaining || isCold);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange', 'kiwi'];
var searchFruit = 'banana';
console.log("Is '".concat(searchFruit, "' in the fruits array? I predict True."));
console.log(fruits.includes(searchFruit));
// Test whether an item is not in an array
var vegetables = ['carrot', 'broccoli', 'spinach', 'celery'];
var searchVegetable = 'potato';
console.log("Is '".concat(searchVegetable, "' not in the vegetables array? I predict True."));
console.log(!vegetables.includes(searchVegetable));
