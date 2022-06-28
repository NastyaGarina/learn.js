// 1
// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter2()); // 0
// alert(counter2()); // 1

// 2
function Counter() {
  let count = 0;
  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}
let counter = new Counter();
alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1

// 3
let phrase = "Hello";
if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // ошибка

// 4
function sum(a) {
  return function (b) {
    return a + b;
  };
}
alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

// 5
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// 6
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
users.sort(byField("name"));
users.forEach((user) => alert(user.name)); // Ann, John, Pete
users.sort(byField("age"));
users.forEach((user) => alert(user.name)); // Pete, Ann, John

// 7
function makeArmy() {
  let shooters = []; // Она создаёт пустой массив shooters
  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // функция shooter
      alert(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }
  return shooters;
}
let army = makeArmy();
army[0](); // 0
army[5](); // 5
