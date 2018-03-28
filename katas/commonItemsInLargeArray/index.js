var assert = require("assert");

function createIndex(arr) {
  var objIndex = Object.create({}, { length: { value: 0, writable: true } }), ln;

  assert.ok(Array.isArray(arr));

  ln = arr.length;

  for (let i = 0; i < ln; i++) {
    if (objIndex.hasOwnProperty(arr[i])) {
      objIndex[arr[i]]++;
    } else {
      objIndex[arr[i]] = 1;
    }
  }
  return objIndex;
}


function common(a, b, c) {
  var aIndex = createIndex(a),
    bIndex = createIndex(b),
    cIndex = createIndex(c),
    result = 0, searchObject;
  
  searchObject = aIndex.length < bIndex.length ? aIndex : bIndex;
  searchObject = searchObject.length < cIndex.length ? searchObject : cIndex;

  for (let key in searchObject) {
    if (aIndex.hasOwnProperty(key) & bIndex.hasOwnProperty(key) & cIndex.hasOwnProperty(key)) {
      result += Math.min(aIndex[key], bIndex[key], cIndex[key]) * key;
    }
  }

  return result;

}

module.exports = common;