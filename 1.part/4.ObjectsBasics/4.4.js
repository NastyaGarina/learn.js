// 1
let user = {
  name: "Джон",
  go: function () {
    alert(this.name);
  },
};
user.go(); // Джон

// 2
let obj, method;

obj = {
  go: function () {
    alert(this);
  },
};

obj.go(); // (1) [object Object] this ссылается на объект перед точкой

obj.go(); // (2) [object Object] this ссылается на объект перед точкой

(method = obj.go)(); // (3) undefined f() выполняется как функция, без передачи значения this

(obj.go || obj.stop)(); // (4) undefined f() выполняется как функция, без передачи значения this

// 3
// const makeUser = () => {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// alert(user.ref().name); // Джон

// 4
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 5
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().up().down().showStep(); // 1
