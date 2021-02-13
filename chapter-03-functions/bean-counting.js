// write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string.

const countBs = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") count++;
  }

  return count;
};

console.log(countBs("Bumble Bee"));
console.log(countBs("BBBB"));

const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }

  return count;
};

console.log(countChar("Bumble Bee", "e"));
console.log(countChar("BBBB", "e"));
