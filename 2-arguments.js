// Calculate the number of arguments supplied by the user
const userArgsCount = process.argv.length - 2;

if (userArgsCount === 0) {
  // If only node and the script path are present (length 2)
  console.log("No argument");
} else if (userArgsCount === 1) {
  // If one argument is passed (length 3)
  console.log("Argument found");
} else {
  // If more than one argument is passed (length > 3)
  console.log("Arguments found");
}
