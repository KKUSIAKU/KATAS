

describe("Infix to Postfix test", function () {
 var toPostfix = require("../../katas/infixToPostfix");
  it("test cases", function () {
    //same priority operation (+ & -)
    expect(toPostfix("7+5-2")).toEqual(["7", "5", "+", "2", "-"]);
    expect(toPostfix("7-5+2")).toEqual(["7", "5", "-", "2", "+"]);
    expect(toPostfix("77-5+2.12")).toEqual(["77", "5", "-", "2.12", "+"]);
    //same priority operation (* & /)
    expect(toPostfix("7x5/2")).toEqual(["7", "5", "x", "2", "/"]);
    expect(toPostfix("7/5x2")).toEqual(["7", "5", "/", "2", "x"]);

    // mixed priorities operation 
    expect(toPostfix("2+7x5")).toEqual(["2", "7", "5", "x", "+"]);
    expect(toPostfix("7x5-2")).toEqual(["7", "5", "x", "2", "-"]);
    expect(toPostfix("2+7/5")).toEqual(["2", "7", "5", "/", "+"]);
    expect(toPostfix("7/5-2")).toEqual(["7", "5", "/", "2", "-"]);

    // parenthes cases
    expect(toPostfix("(2+7)")).toEqual(["2", "7", "+"]);
    expect(toPostfix("(6+5)x5")).toEqual(["6", "5", "+", "5", "x"]);

    // use cases 
    expect(toPostfix("(6+6)x6-6^(1+0)")).toEqual(["6", "6", "+", "6", "x", "6", "1", "0", "+", "^", "-"]);
    expect(toPostfix("3x3/(7+1)")).toEqual(["3", "3", "x", "7", "1", "+", "/"]);
    expect(toPostfix("5+(6-2.2)x12.39+3^(7-1)")).toEqual(["5", "6", "2.2", "-", "12.39", "x", "+", "3", "7", "1", "-", "^", "+"]);
    expect(toPostfix("(5-14-1)+9/5/2-1.27/1/7")).toEqual(["5", "14", "-", "1", "-", "9", "5", "/", "2", "/", "+", "1.27", "1", "/", "7", "/", "-"]);
  


  });

});

