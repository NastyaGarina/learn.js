// 1
// с помощью цикла
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
alert(sumTo(100));

// через рекурсию
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
alert(sumTo(100));

// sumTo(n) = n*(n+1)/2:
function sumTo(n) {
  return (n * (n + 1)) / 2;
}
alert(sumTo(100));

// 2
function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}

// 3
const GOLDEN_CUT = (1 + Math.sqrt(5)) / 2;
function fibonachi(n) {
  return (
    (GOLDEN_CUT ** n - (-1 * GOLDEN_CUT) ** -n) /
    (GOLDEN_CUT - (-1 * GOLDEN_CUT) ** -1)
  );
}

// 4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

// 5
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}
printReverseList(list);
