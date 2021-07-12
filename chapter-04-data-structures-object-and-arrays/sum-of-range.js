// write a range function that takes two arguments, start and end
// and returns an array containing all the numbers from start up to (and including) end
function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

// next, write a sum function
// takes an array of numbers
// returns sum of numbers
function sum(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

// test sum(range(1, 10))
console.log(sum(range(1, 10)));

// modify range function
// optional third argument that indicates step value
// if no step value given, step = 1
// must work with negative step
function rangeStep(start, end, step) {
  const arr = [];
  let i = start;

  const getContinue = () => {
    if (!step || step > 0) {
      return i <= end;
    }
    return i >= end;
  };

  for (i; getContinue(); i += step || 1) {
    arr.push(i);
  }

  console.log("arr:", arr);

  return arr;
}

console.log(sum(rangeStep(100, 10, -10)));
