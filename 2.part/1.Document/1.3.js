// 1
{
  /* <html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html> */
}

document.body.firstElementChild;
document.body.children[0];
document.body.childNodes[1];

document.body.lastElementChild;
document.body.children[1];

document.body.lastElementChild.lastElementChild;

// 2
// Правда, что elem.lastChild.nextSibling всегда равен null?
// Да. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling
// Правда, что elem.children[0].previousSibling всегда равен null ?
// Нет. Потому что elem.children[0] – потомок-элемент

// 3
table
  .querySelectorAll("tr")
  .forEach((row, i) => (row.cells[i].style.background = "red"));
