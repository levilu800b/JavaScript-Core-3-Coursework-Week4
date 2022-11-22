// first solution

// function sales(carsSold) {
//   let total = {};

//   carsSold.forEach((car) => {
//     total[car.make]
//       ? (total[car.make] += car.price)
//       : (total[car.make] = car.price);
//   });
//   return total;
// }

// second solution

// function sales(carsSold) {
//     let total = {};

//     carsSold.forEach((car) => {
//         if (total[car.make]) {
//             total[car.make] += car.price;
//         } else {
//             total[car.make] = car.price;
//         }
//     });
//     return total;
// }

// third solution

// function sales(carsSold) {
//     let total = {};

//     for (let car of carsSold) {
//         if (total[car.make]) {
//             total[car.make] += car.price;
//         } else {
//             total[car.make] = car.price;
//         }
//     }
//     return total;
// }

// fourth solution

function sales(carsSold) {
    let total = {};

    for (let car = 0; car < carsSold.length; car++) {
        if (total[carsSold[car].make]) {
            total[carsSold[car].make] += carsSold[car].price;
        } else {
            total[carsSold[car].make] = carsSold[car].price;
        }
    }
    return total;
}

module.exports = sales;
