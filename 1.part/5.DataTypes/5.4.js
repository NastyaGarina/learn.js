// 1
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert(fruits.length); // 4 ["Яблоки","Груша","Апельсин","Банан"]

// 2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

// 3
let arr = ["a", "b"];
arr.push(function () {
  alert(this);
});
arr[2](); // У массива в итоге 3 элемента: сначала их было 2, плюс функция.

// 4
function sumInput() {
  let arr = [];

  while (true) {
    let a = prompt("Введите число");
    if (isNaN(a) || !a) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
      }
      return sum;
    } else {
      arr.push(a);
    }
  }
}

// 5
function getMaxSubSum(arr) {
  let maxSum = 0;
  let top = 0;

  for (let value of arr) {
    if (value + top >= 0) {
      maxSum += value;
    } else {
      maxSum = 0;
    }
    if (maxSum > top) top = maxSum;
  }
  return top;
}
getMaxSubSum([-1, 2, 3, -9]);
