// 1
{
  /* <html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html> */
}
// выведет 1

// 2
{
  /* <script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // BODY
</script> */
}

// 3
// Объектом какого класса является document?
// alert(document); // [object HTMLDocument]
// alert(document.constructor.name); // HTMLDocument
// Какое место он занимает в DOM-иерархии?
// alert(HTMLDocument.prototype.constructor === HTMLDocument); // true
// alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
// alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
// alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
// console.dir(document)
// Наследует ли он от Node или от Element, или может от HTMLElement?
// это узел, поэтому он точно наследует от Node


