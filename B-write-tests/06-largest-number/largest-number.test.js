let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  // Act
  // Assert
  
  const numbers = [3, 21, 88, 4, 36];

  const outPut = getLargestNumber(numbers);
  const expected = 88;
  expect(outPut).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
