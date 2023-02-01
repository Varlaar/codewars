// SOLUTION 1

const quarterOf = (month, quarter = 4) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;
    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;
    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;
  }
  return quarter;
};

// SOLUTION 2

const quarterOf = (month) => Math.ceil(month / 3);

// TESTS...........................................................................................

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1);
    assert.strictEqual(quarterOf(8), 3);
    assert.strictEqual(quarterOf(11), 4);
  });
});
