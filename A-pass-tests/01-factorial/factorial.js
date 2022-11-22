// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

// first Solution

// function factorial(int) {
//     // your code here
//     let result = 1;
//     for (let i = 1; i <= int; i++) {
//         result *= i;
//     }
//     return result;
// }

// second Solution

function factorial(int) {
    // your code here
    if (int === 0) {
        return 1;
    }
    return int * factorial(int - 1);
}

console.log(factorial(5));

module.exports = factorial;
