// 1 way

function pigIt(str) {
  str = str.replace(/(\S)(\S*)/g, "$2$1");
  let reg = "/[s.,!?:;]/g";

  let arr = str.split(" ").map((i) => (reg.includes(i) ? i : i + "ay"));
  return [...arr].join(" ");
}

// 2 way

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

// TESTS....................................................................................................................

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
    Test.assertEquals(pigIt("This is my string"), "hisTay siay ymay tringsay");
  });
});
