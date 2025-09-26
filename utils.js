/**
 * Basic utility functions for demonstration
 */

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Checks if a string is empty
 * @param {string} str - String to check
 * @returns {boolean} True if string is empty or only whitespace
 */
function isEmpty(str) {
  return !str || str.trim().length === 0;
}

module.exports = {
  add,
  multiply,
  isEmpty
};