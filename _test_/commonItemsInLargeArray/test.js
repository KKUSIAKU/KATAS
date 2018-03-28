function randomArray(start, end, length) {
  var array = [], start = parseInt(start), end = parseInt(end), ln = parseInt(length);

  while (ln) {
    array.push(parseInt(Math.random() * Math.abs(end - start) + start));
    ln--;
  }

  return array;
}


describe("Common items in large three arrays", function () {

  var common = require("../../katas/commonItemsInLargeArray");
  var arg1 = [[1, 2, 3], [5, 3, 2], [7, 3, 2]],
    arg2 = [[1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]],
    arg3 = [[1], [1], [2]];

  it("Some basic cases", function () {
    expect(common(...arg1)).toBe(5);
    expect(common(...arg2)).toBe(7);
    expect(common(...arg3)).toBe(0);
  })

  it("Random arrays case", function () {
    let step1 = 100, step2 = 500, step3 = 1000, step4 = 2356, step5 = 25478;
    let base = randomArray(0, step1, 25),
      arr1 = [...randomArray(step1 + 1, step2), ...base],
      arr2 = [...randomArray(step2 + 1, step3), ...base],
      arr3 = [...randomArray(step3 + 1, step4), ...base],
      sum = 0,
      ln;

    ln = base.length;

    for (let i = 0; i < ln; i++) {
      sum += base[i];
    }
    expect(common(arr1, arr2, arr3)).toBe(sum);
  })
})