// 1
function f() {
  alert(this); // null
}
let user = {
  g: f.bind(null),
};
user.g();

// 2
function f() {
  alert(this.name);
}
f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
f(); // Вася

// 3
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;
let bound = sayHi.bind({
  name: "Вася",
});
alert(bound.test); // undefined Результатом работы bind является другой объект. У него уже нет свойства test

// 4
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };
// askPassword(user.login.bind(user, true), user.login.bind(user, false));
