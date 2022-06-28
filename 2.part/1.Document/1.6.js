// 1
let elem = document.querySelector("[data-widget-name]");
alert(elem.dataset.widgetName);

// 2
document
  .querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])')
  .forEach((a) => {
    a.style.color = "orange";
  });
