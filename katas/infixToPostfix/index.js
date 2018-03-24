function toPostfix(infix) {
  // Convert infix to postfix here, and return result.
  var postfix = "", ln = infix.length, operators = [], _ln;

  for (let i = 0; i < ln; i++) {
    let char, opt;
    _ln = operators.length;

    if (operators[_ln - 1] === infix[i]) {
      postfix += infix[i]
    } else {
    
      switch (infix[i]) {
        case "+":
        case "-":
          if (["^", "/", "*"].includes(operators[_ln - 1])) {
            opt = operators.pop();
            while (!["+", "-"].includes(opt)) {
              postfix += opt;
              opt = operators.pop();
            }
            postfix += opt;
          }
          operators.push(infix[i]);
          break;

        case "*":
          if (["^", "/"].includes(operators[_ln - 1])) {
            postfix += operators.pop();
          }
          operators.push(infix[i])
          break;

        case "/":
          if (["^", "*"].includes(operators[_ln - 1])) {
            postfix += operators.pop();
          }
          operators.push(infix[i])

          break;

        case "^":
          if (["/", "*"].includes(operators[_ln - 1])) {
            postfix += operators.pop();
          }
          operators.push(infix[i])
          break;

        case "(":
          operators.push(infix[i]);
          break;

        case ")":
          char = operators.pop();
          while (char !== "(") {
            postfix += char;
            char = operators.pop();
          }
          break;
        default:
          // suppose it this digit then
          postfix += infix[i]
      }
    }

  }

  _ln = operators.length;
  for (let i = _ln - 1; i >= 0; i--) {
    postfix += operators.pop();
  }
  return postfix;
}

module.exports = toPostfix;