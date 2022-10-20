// 1 way

function countSmileys(arr) {
  let smile = [
    ":)",
    ";)",
    ":D",
    ";D",
    ":-)",
    ";-)",
    ":-D",
    ";-D",
    ":~)",
    ";~)",
    ":~D",
    ";~D",
  ];

  return arr
    .map((i) => (smile.includes(i) ? 1 : 0))
    .reduce((acc, i) => acc + i, 0);
}

// 2 way

const faces = new Set();
for (let eyes of [":", ";"])
  for (let nose of ["-", "~", ""])
    for (let mouth of [")", "D"]) faces.add(eyes + nose + mouth);

countSmileys = (arr) => arr.filter((x) => faces.has(x)).length;

// TESTS........................................................................................................................

const { assert } = require("chai");

describe("Basic testing", function () {
  it("Example tests", () => {
    assert.strictEqual(countSmileys([]), 0);
    assert.strictEqual(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
    assert.strictEqual(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
    assert.strictEqual(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
  });
});
