// problem1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLocaleLowerCase();
  }
}

console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"

// problem 2
