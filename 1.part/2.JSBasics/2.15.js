// 1
// отличий нет

// 2
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// 3
function min(a, b) {
  return a < b ? a : b;
}

// 4
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}
