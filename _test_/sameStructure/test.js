describe("Same strucutre of array", function () {
  
  require("../../katas/sameStructure");

  it("should work for basics test", function () {

    expect([1, 1, 1].sameStructureAs([2, 2, 2])).toBe(true);
    expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).toBe(true);

    expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).toBe(false);
    expect([1, [1, 1]].sameStructureAs([[2], 2])).toBe(false);

  })
})