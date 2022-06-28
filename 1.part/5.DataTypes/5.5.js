// 1
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

// 2
function filterRange(arr, a, b) {
  for (let value of arr) {
    let filtered = arr.filter((value) => value >= a && value <= b);
    return filtered;
  }
}
console.log(filterRange([5, 3, 8, 1], 1, 4));

// 3
alert(arr1);
function filterRangeInPlace(arr, minRange, maxRange) {
  return arr.forEach((item) =>
    item < minRange || item > maxRange ? arr.splice(arr.indexOf(item), 1) : null
  );
}

// 4
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
alert(arr2);

// 5
function copySorted(arr3) {
  return arr3.slice().sort();
}
let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);
alert(sorted);
alert(arr3);

// 6
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map((item) => item.name);
// alert(names); // Вася, Петя, Маша

// 8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

// 9
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr) {
// arr.sort((a, b) => a.age - b.age)
// };
// sortByAge(arr)
// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// 10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr5 = [1, 2, 3];
shuffle(arr5);
alert(arr5);

// 11
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let result = users.reduce((acc, item) => acc + item.age, 0);
  return result / users.length;
}

console.log(getAverageAge(arr));

// 12
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O
