/**
 * Script that prints a square of 'X' characters, where the size is the first argument.
 * Prints "Missing size" if the argument is missing or not a positive integer.
 */

// Get the first argument
const argSize = process.argv[2];
const size = Number(argSize);

// Check if the argument is a positive integer
if (!Number.isInteger(size) || size <= 0) {
  // Check specifically for the missing case or invalid number
  if (argSize === undefined || isNaN(size)) {
    console.log("Missing size");
  } else if (size > 0) {
    // This case covers float numbers, which we treat as "Missing size" based on isInteger check,
    // although based on the examples, the main check is for conversion success.
    // If the requirement is strictly "can't be converted to an integer", we primarily check isNaN,
    // but Number.isInteger handles floats as non-integers. We stick to the examples' behavior.
    console.log("Missing size");
  }
} else {
  // Construct the row of X's
  const row = "X".repeat(size);

  // Loop 'size' times to print the square
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
