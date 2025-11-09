// The first user argument is at index 2
const arg1 = process.argv[2];

// The second user argument is at index 3
const arg2 = process.argv[3];

// Use a template literal to easily construct the required output string.
// If arg1 or arg2 is undefined, it is automatically converted to the string "undefined".
console.log(`${arg1} is ${arg2}`);
