function checkPassOrFail(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}

// Call the function
console.log(checkPassOrFail(50)); // Pass
console.log(checkPassOrFail(30)); // Fail