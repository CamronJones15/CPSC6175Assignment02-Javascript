/**
 * Week 2 Assignment - Basic Modules
 * 
 * This file teaches you about ES6 modules - how to export functions so they
 * can be used in other files. Modules help organize code and avoid global
 * namespace pollution.
 * 
 * Key concepts:
 * - Named exports: export const myFunction = () => {};
 * - Multiple exports: export { func1, func2 };
 * - Default exports: export default myFunction;
 * - Imports: import { myFunction } from './file.js';
 */

/**
 * TODO 1: Create and export a utility function
 * 
 * Create a function called 'capitalize' that takes a string and returns it
 * with the first letter capitalized and the rest lowercase.
 * 
 * Example: "hello WORLD" becomes "Hello world"
 * 
 * Export it using named export syntax.
 */
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
/**
 * TODO 2: Create a function that works with arrays
 * 
 * Create a function called 'getLastItem' that takes an array and returns
 * the last item in the array. If the array is empty, return null.
 * 
 * Example: [1, 2, 3] returns 3
 * Example: [] returns null
 * 
 * Export it using named export.
 */
export const getLastItem = (arr) => {
    if (arr.length === 0) return null;
    return arr[arr.length - 1];
}

/**
 * TODO 3: Create a math utility function
 * 
 * Create a function called 'average' that takes an array of numbers
 * and returns their average. If the array is empty, return 0.
 * 
 * Example: [2, 4, 6] returns 4
 * Example: [] returns 0
 * 
 * Export it using named export.
 */
export const average = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

/**
 * TODO 4: Create a validation function
 * 
 * Create a function called 'isValidPassword' that takes a password string
 * and returns true if it meets these criteria:
 * - At least 8 characters long
 * - Contains at least one number
 * 
 * Use regex or string methods to check for numbers: /\d/.test(password)
 * 
 * Export it using named export.
 */
export const isValidPassword = (password) => {
    const hasNumber = /\d/.test(password);
    return password.length >= 8 && hasNumber;
}
/**
 * TODO 5: Create a formatter function
 * 
 * Create a function called 'formatCurrency' that takes a number and
 * returns it formatted as currency with $ sign and 2 decimal places.
 * 
 * Example: 12.5 becomes "$12.50"
 * Example: 100 becomes "$100.00"
 * 
 * Use toFixed(2) to ensure 2 decimal places.
 * 
 * Export it using named export.
 */
export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
}

/**
 * TODO 6: Export multiple functions at once
 * 
 * Create two simple functions and export them together:
 * 
 * 1. 'double' - takes a number and returns it doubled
 * 2. 'triple' - takes a number and returns it tripled
 * 
 * Then export both functions in a single export statement.
 */
const double = (num) => num * 2;
const triple = (num) => num * 3;

export { double, triple };

/**
 * EXAMPLE EXPORTS - Already completed to show the pattern
 */

// Example 1: Simple named export
export const greet = (name) => `Hello, ${name}!`;

// Example 2: Function with multiple operations
export const processText = (text) => {
    return text.trim().toLowerCase().replace(/\s+/g, '-');
};

// Example 3: Multiple exports
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export { add, subtract };

/**
 * NOTE: In a real application, these functions would be imported in other files like this:
 * 
 * import { capitalize, getLastItem, average } from './06-modules.js';
 * 
 * Then you could use them:
 * const result = capitalize('hello world');
 * const last = getLastItem([1, 2, 3]);
 * const avg = average([1, 2, 3, 4, 5]);
 */