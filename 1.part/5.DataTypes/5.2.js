// 1
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
alert(a + b);

// 2
alert(Math.round(6.35 * 10) / 10);

// 3
function readNumber() {
  let num = prompt("Введите числовое значение", "");
  if (num === null || num === "") return null;
  if (isNaN(+num)) return readNumber();
  return num;
}

// 4
// Потому что i никогда не станет равным 10
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i);
}

// 5
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// 6
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger(1, 3));
