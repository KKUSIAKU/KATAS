describe("Same strucutre of array", function(){
  require("../../sameStructure");
  it("should work without test", function(){
    var test = [];
    test.sameStructure([]);
    expect(1).toBe(1);
  })
})