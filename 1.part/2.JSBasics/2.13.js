// 1
let i = 3;
while (i) {
  alert(i--);
} // последнее 1. Потому что сначало выведет 3, затем уменьшит на единицу будет 2 потом выведет 2, и уменьшит на единицу будет 1 потом выведет 1, и уменьшит на единицу будет 0. 0 false

// 2
// let i = 0;
// while (++i < 5) alert(i); // от 1 до 4 сначала увеличит i, а потом произойдёт сравнение

// let i = 0;
// while (i++ < 5) alert( i ); // от 1 дл 5 сначала сравнтвает, а потом увеличит i

// 3
for (let i = 0; i < 5; i++) alert(i);
// от 0 до 4 в обоих случаях
for (let i = 0; i < 5; ++i) alert(i);

// 4
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// 5
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// 6
let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// 7
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
// alert( i );
