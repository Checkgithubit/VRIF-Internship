// Function to round off a number
function roundNumber(num, ndigits) {
  return num.toFixed(ndigits);
}

// Example usage (for testing)
let num = 0.778899;
let ndigits = 2;

console.log(roundNumber(num, ndigits));