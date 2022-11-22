// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

// first solution

// function average(numbers) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[i] === "number") {
//         sum += numbers[i];
//         count++;
//         }
//     }
//     return sum / count;
// }

// second solution

// function average(numbers) {
//     let sum = 0;
//     let count = 0;
//     numbers.forEach(function (number) {
//         if (typeof number === "number") {
//             sum += number;
//             count++;
//         }
//     });
//     return sum / count;
// }

// third solution

// function average(numbers) {
//     let sum = 0;
//     let count = 0;
//     numbers.forEach((number) => {
//         if (typeof number === "number") {
//             sum += number;
//             count++;
//         }
//     });
//     return sum / count;
// }

// fourth solution (Without using if statement)

// function average(numbers) {
//     let sum = 0;
//     let count = 0;
//     numbers.forEach((number) => {
//         sum += number;
//         count++;
//     });
//     return sum / count;
// }

// fifth solution (using reduce)

function average(numbers) {
    let sum = numbers.reduce((sum, number) => {
        if (typeof number === "number") {
            return sum + number;
        }
        return sum;
    }, 0);
    let count = numbers.reduce((count, number) => {
        if (typeof number === "number") {
            return count + 1;
        }
        return count;
    }, 0);
    return sum / count;
}


module.exports = average;
