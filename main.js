/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3 */

function calc(number, operation) {
  if (!operation) {
    return number;
  } else {
    return operation(number);
  }
}

function zero(operation) {
  return calc(0, operation);
}
function one(operation) {
  return calc(1, operation);
}
function two(operation) {
  return calc(2, operation);
}
function three(operation) {
  return calc(3, operation);
}
function four(operation) {
  return calc(4, operation);
}
function five(operation) {
  return calc(5, operation);
}
function six(operation) {
  return calc(6, operation);
}
function seven(operation) {
  return calc(7, operation);
}
function eight(operation) {
  return calc(8, operation);
}
function nine(operation) {
  return calc(9, operation);
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return Math.round(y * x);
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.round(y / x);
  };
}