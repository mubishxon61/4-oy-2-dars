
function m(a) {
  let result = +(a);
  return function(operation) {
    if (operation === "+") {
      return function(b) {
        return function (equals) {
          if (equals === "=") {
            return result + +(b);
          }
        }
      };
    }
  };
}

console.log(m("5")("+")("4")("="));


function m(a) {
  let expression = a; 
  return function(op) {
    if (op === "=") {
      return eval(expression); 
    }
    return function(b) {
      expression += op + b; 
      return m(expression);
    };
  };
}

console.log(m("4")("+")("6")("*")("8")("/")("3")("=")); // 20