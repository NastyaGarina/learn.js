// 1
function unique(arr) {
  return Array.from(new Set(arr));
}

// 2
function aclean(arr) {
  let obj = {};
  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    obj[sorted] = word;
  }
  return Object.values(obj);
}

// 3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more
