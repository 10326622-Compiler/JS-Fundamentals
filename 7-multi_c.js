/**
 * Script that prints "C is fun" X times, where X is the first command-line argument.
 * * If the argument is not a number or is missing, it prints "Missing number of occurrences".
 * This solution respects the two console.log() call limit.
 */

// Get the first argument from the command line.
const argCount = process.argv[2];

// Try to convert the argument to an integer.
// The Number() constructor attempts conversion.
const x = Number(argCount);

// Check if x is a positive integer.
// isNaN(x) checks if the conversion failed (e.g., if argCount was "hello").
// x > 0 ensures we only proceed with positive values.
if (isNaN(x) || x <= 0) {
  // Use the first allowed console.log for the error message, but only if
  // the argument was completely missing (undefined) or not a valid positive number.
  if (argCount === undefined || isNaN(x)) {
    console.log("Missing number of occurrences");
  }
} else {
  // Use a standard for loop to iterate 'x' times.
  for (let i = 0; i < x; i++) {
    // This is the second allowed console.log, called inside the loop.
    console.log("C is fun");
  }
}
