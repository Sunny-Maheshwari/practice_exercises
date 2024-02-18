// Tests using the lower case function
let fruit = 'Apple';
console.log(`Is '${fruit}' in lowercase equal to 'apple'? I predict True.`);
console.log(fruit.toLowerCase() === 'apple');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
console.log(`Is ${num1} equal to ${num2}? I predict False.`);
console.log(num1 === num2);

console.log(`Is ${num1} not equal to ${num2}? I predict True.`);
console.log(num1 !== num2);

console.log(`Is ${num1} greater than ${num2}? I predict False.`);
console.log(num1 > num2);

console.log(`Is ${num1} less than ${num2}? I predict True.`);
console.log(num1 < num2);

console.log(`Is ${num1} greater than or equal to ${num2}? I predict False.`);
console.log(num1 >= num2);

console.log(`Is ${num1} less than or equal to ${num2}? I predict True.`);
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = true;
console.log(`Is it sunny and warm outside? I predict True.`);
console.log(isSunny && isWarm);

let isRaining = false;
let isCold = true;
console.log(`Is it raining or cold outside? I predict True.`);
console.log(isRaining || isCold);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange', 'kiwi'];
let searchFruit: string = 'banana';
console.log(`Is '${searchFruit}' in the fruits array? I predict True.`);
console.log(fruits.includes(searchFruit));

// Test whether an item is not in an array
let vegetables = ['carrot', 'broccoli', 'spinach', 'celery'];
let searchVegetable = 'potato';
console.log(`Is '${searchVegetable}' not in the vegetables array? I predict True.`);
console.log(!vegetables.includes(searchVegetable));
