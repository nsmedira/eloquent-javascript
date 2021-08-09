// use the reduce method in combination with the concat method
// to flatten an array of arrays into a single array
// that has all the elements of the original arrays

const input = [
  [0, 1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(input.reduce((cur, acc) => acc.concat(cur)));
