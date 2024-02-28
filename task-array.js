// EXERCISE:
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You will work with array `numbers` which will be generated by code (code below) in every task.
// Write these functions:

// This block generates array with random length with values between 1-100
export let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}


// a) Function which will print to console a whole array
export const printArray = (numbers) => {
  console.log(numbers);
};

// b) Function which will print to console the length of array
export const printLength = (numbers) => {
  console.log(numbers.length);
 
};

// c) Function which will print to console the first element of array
export const printFirstItem = (numbers) => {
  console.log(numbers[0]);
};

// d) Function which will print to console the last element
export const printLastItem = (numbers) => {
  console.log(numbers[numbers.length - 1]);
};

// e) Function which will print to console the largest number (You can check Math functions)
export const printLargestItem = (numbers) => {
  console.log(Math.max(...numbers));
};

// f) Function which will print to console the smallest number (You can check Math functions)
export const printSmallestItem = (numbers) => {
  console.log(Math.min(...numbers));

};

// g) Function which will print to console the sum of all numbers in array (You can check reduce function)
export const printSum = (numbers) => {
  let sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  })

  console.log(sum);
};

// h) Function which will print to console the difference between the largest and the smallest number (You can check Math functions)
export const printSALDifference = (numbers) => {
  console.log(Math.max(...numbers) - Math.min(...numbers));
};

// i) Function which will print to console the average of all numbers (You can check reduce function)
export const printAverage = (numbers) => {
  let avg = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }) / numbers.length

  console.log(avg);
};

// j) Function which will print to console the index of largest number (You can check Math functions)
export const printLargestsIndex = (numbers) => {
  const largest = Math.max(...numbers);
  console.log(numbers.indexOf(largest));
};

// k) Function which will print to console the even numbers (not the array of even numbers),
// if array doesn't contain any even number, show text "Even number isn't in array"
export const printEvenNums = (numbers) => {
  let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
  })

  console.log(evenNumbers.length === 0 ? "Even number isn't in array" : evenNumbers);
};

// l) Function which will multiple by 2 every number in array and print the array to console
// Example: printNumsMultipliedBy2([1,2,3]) -> [2,4,6]
export const printNumsMultipliedBy2 = (numbers) => {
  let multipleNumbers = numbers.map(num => num * 2);
  console.log(multipleNumbers);  
};