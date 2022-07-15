// Let's play mini FizzBuzz! For any given number, if the number is:

// divisible by 3, print "Fizz".
// divisible by "5", print "Buzz".
// divisible by both 3 and 5, print "FizzBuzz".
// That is, if any of the above conditions apply, print the above words instead of the number.

// Otherwise, just print theLet's play mini FizzBuzz! For any given number, if the number is:

// divisible by 3, print "Fizz".
// divisible by "5", print "Buzz".
// divisible by both 3 and 5, print "FizzBuzz".
// That is, if any of the above conditions apply, print the above words instead of the number.

// Otherwise, just print the number. number.

const twenty = 20;

if (twenty % 3) {
  console.log("Fizz");
} else if (twenty % 5) {
  console.log("Buzz");
} else if (twenty % 3 && twenty % 5) {
  console.log("fizzBuzz");
} else {
  console.log(twenty);
}
