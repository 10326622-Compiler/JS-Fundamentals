const firstArgument = process.argv[2];

if (firstArgument === undefined) {
  // If the argument is undefined, it means no user argument was provided.
  console.log("No argument");
} else {
  // Otherwise, print the value of the argument.
  console.log(firstArgument);
}
