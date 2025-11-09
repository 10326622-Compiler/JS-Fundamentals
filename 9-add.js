/**
 * Script that defines an add function and uses it to print the sum of
 * the first two command-line arguments.
 */

// Function definition as required: function add(a, b)
function add (a, b) {
  // We explicitly convert the arguments to integers before adding.
  // If the arguments are undefined (missing), Number() converts them to NaN,
  // which results in NaN when added, matching the required output behavior.
  return Number(a) + Number(b);
}

// Get arguments from the command line (index 2 and 3)
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Call the function with the arguments and print the result
console.log(add(arg1, arg2));
