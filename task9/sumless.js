function checkSumLessThanThird(num1, num2, num3) {
  // Calculate the sum and compare it to the third number
  return (num1 + num2) < num3;
}

// --- Console Testing ---
console.log(checkSumLessThanThird(5, 7, 15));   // Output: true  (12 < 15)
