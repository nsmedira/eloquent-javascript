/*
zero is even
one is odd
for any other number N, its evenness is the same as N - 2
*/

// define a recursive function isEven corresponding to this description.
// the function should accept a single paramter ( a positive, whole number)
// the function should return a boolean

const isEven = (number) => {
  // test that input is a number
  if (typeof number !== "number") throw new Error("input must be a number");

  // test that number is positive
  if (number < 0) throw new Error("input must be a positive number");

  // test that number is whole
  if (!Number.isInteger(number))
    throw new Error("number must be a whole number");

  if (number < 2) return !number;

  return isEven(number - 2);
};

const describeEvenness = (number) => (isEven(number) ? "even" : "odd");

console.log("0 is ", describeEvenness(0));
console.log("1 is ", describeEvenness(1));
console.log("2 is ", describeEvenness(2));
console.log("3 is ", describeEvenness(3));
console.log("17 is ", describeEvenness(17));
console.log("20 is ", describeEvenness(20));
