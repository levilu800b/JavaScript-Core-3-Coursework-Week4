let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  let words = ["irina", "etza", "daniel"];
  let actualResult = removeVowelsFromWords(words);
  let expectedResult = ["rn", "tz", "dnl"];

  expect(actualResult).toEqual(expectedResult);

});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
