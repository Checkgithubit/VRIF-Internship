function convertToTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

// Example usage
let str = "hello world";
console.log(convertToTitleCase(str));