// 1
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 2
const scrollbarWidth = div.offsetWidth - div.clientWidth - div.clientLeft;

// 3
ball.style.left =
  Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + "px";
ball.style.top =
  Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + "px";

// 4
// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
// clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце
// getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента
