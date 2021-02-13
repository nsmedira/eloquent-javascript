let string = "";

// make a board of any size with the length binding
let length = 16;

for (let row = 0; row < length; row++) {
  for (let col = 0; col < length; col++) {
    if (!((row + col) % 2)) {
      string += " ";
    } else {
      string += "#";
    }
  }

  if (row !== length - 1) {
    string += "\n";
  }
}

console.log(string);
