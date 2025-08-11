
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
