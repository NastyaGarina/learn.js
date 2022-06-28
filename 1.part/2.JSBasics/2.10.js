// 1
if ("0") {
  alert("Привет");
} // Да выведется "Привет"

// 2
let value = prompt('Какое "официальное" название JavaScript?', "");
if (value == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// 3
let value1 = prompt("Введите число", 0);
if (value1 > 0) {
  alert(1);
} else if (value1 < 0) {
  alert(-1);
} else {
  alert(0);
}

// 4
let message =
  login === "Сотрудник"
    ? "Привет"
    : login === "Директор"
    ? "Здравствуйте"
    : login === ""
    ? "Нет логина"
    : "";
