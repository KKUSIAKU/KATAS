
/**@function toPostFix 
 * 
 * Transform an infix expression into postfix expression
 * @param {string} infix - An infix expression.
 * @returns {array} A postifx representation of infix in an array.
*/

function toPostFix(infix) {
  // Convert infixItems to postfix here, and return result.
  
  var itemsRegx = /(\d+|[+-\/x()^])(\.\d+)?/g,// regex need to be fixed, not correct though working
    infixItems = [],
    postfix = [],
    operators = [],
    _ln,
    ln;

  // split the input string into number, operator and parentheses
  infixItems = infix.match(itemsRegx);
  ln = infixItems.length;

  for (let i = 0; i < ln; i++) {
    let char, opt;
    _ln = operators.length;

    if (operators[_ln - 1] === infixItems[i]) {
      postfix.push(infixItems[i]);
    } else {

      switch (infixItems[i]) {
        case "+":
        case "-":
          if (["^", "/", "x"].includes(operators[_ln - 1])) {
            opt = operators.pop();
            _ln--;
            while (_ln & !["+", "-"].includes(opt) ) {
              postfix.push(opt);
              opt = operators.pop();
              _ln--;
            }
            postfix.push(opt);
          } else if(["+","-"].includes(operators[_ln-1])){
            postfix.push(operators.pop());
          }

          operators.push(infixItems[i]);

          break;

        case "x":
          if (["^", "/"].includes(operators[_ln - 1])) {
            postfix.push(operators.pop());
          }
          operators.push(infixItems[i]);
          break;

        case "/":
          if (["^", "x"].includes(operators[_ln - 1])) {
            postfix.push(operators.pop());
          }
          operators.push(infixItems[i]);

          break;

        case "^":
          if (["/", "x"].includes(operators[_ln - 1])) {
            postfix.push(operators.pop());
          }
          operators.push(infixItems[i]);
          break;

        case "(":
          operators.push(infixItems[i]);
          break;

        case ")":
          char = operators.pop();
          
          while (char !== "(" ) {
            postfix.push(char);
            char = operators.pop();
          }
          break;
        default:
          // suppose it this digit then
          postfix.push(infixItems[i]);
      }
    }

  }

  _ln = operators.length;
  for (let i = _ln - 1; i >= 0; i--) {
    postfix.push(operators.pop());
  }
  return postfix;
}

module.exports = toPostFix;

