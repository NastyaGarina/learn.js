// 1
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
}

// 2
function delay(f, ms) {
  return function (...args) {
    let savedThis = this; // сохраняем this в промежуточную переменную
    setTimeout(function () {
      f.apply(savedThis, args); // используем её
    }, ms);
  };
}

// 3
function debounce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}

// 4
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;
  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments); // (1)
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}
