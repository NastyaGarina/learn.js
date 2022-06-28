// 1. Таблица с `id="age-table"`.
let table = document.getElementById("age-table");

// 2. Все элементы label внутри этой таблицы (их три).
table.getElementsByTagName("label");
// или
document.querySelectorAll("#age-table label");

// 3. Первый td в этой таблице (со словом «Age»).
table.rows[0].cells[0];
// или
table.getElementsByTagName("td")[0];
// или
table.querySelector("td");

// 4. Форму form с именем name="search".
let form = document.getElementsByName("search")[0];
// или
document.querySelector('form[name="search"]');

// 5. Первый input в этой форме.
form.getElementsByTagName("input")[0];
// или
form.querySelector("input");

// 6. Последний input в этой форме
let inputs = form.querySelectorAll("input");
inputs[inputs.length - 1];
