// write a function that computes the dominant writing direction
// in a string of text
// remember that each script object has a direction property
// that can be 'ltr', 'rtl', 'ttb'
// dominant direction is the direction of a majority of the characters
// that have a script associated with them
// the characterScript and countBy functions defined earlier
// in the chapter are probably useful here

import { SCRIPTS } from "../util/scripts.js";

function computeDominantWritingDirection(string) {
  const scripts = countBy(string, (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");

  const total = scripts.reduce((acc, { count }) => acc + count, 0);

  return scripts
    .map(({ name, count }) => `${Math.round(count * 100) / total}% ${name}`)
    .join(", ");
}

console.log(computeDominantWritingDirection("english"));
console.log(computeDominantWritingDirection("中國人")); // chinese
console.log(computeDominantWritingDirection("עִברִית")); // hebrew
console.log(computeDominantWritingDirection("english中國人עִברִית")); // all 3

// ------------------------- STARTER ------------------------

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
