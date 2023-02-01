// SOLUTION 1

function sumOfIntegersInString(s) {
  return s
    .replace(/\D/g, " ")
    .split(" ")
    .reduce((acc, i) => acc + Number(i), 0);
}

// SOLUTION 2

function sumOfIntegersInString(s) {
  let result = 0;
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      temp += s[i];
    }
    if (isNaN(s[i]) && !isNaN(s[i - 1])) {
      result += Number(temp);
      temp = "";
    }
  }
  return result;
}

// TESTS.................................................................................................................

describe("Example test cases", () => {
  let = exampleTests = [
    ["12.4", 16],
    ["h3ll0w0rld", 3],
    ["2 + 3 = ", 5],
    [
      "Our company made approximately 1 million in gross revenue last quarter.",
      1,
    ],
    ["The Great Depression lasted from 1929 to 1939.", 3868],
    ["Dogs are our best friends.", 0],
    ["C4t5 are 4m4z1ng.", 18],
    ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635],
  ];

  exampleTests.forEach(([testString, correctAnswer]) =>
    Test.assertEquals(sumOfIntegersInString(testString), correctAnswer)
  );
});
