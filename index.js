const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries=batteryBatches.reduce((accumulator,currentValue) => accumulator + currentValue);
console.log(totalBatteries)
// const totalBatteries=(accumulator,batteryBatches) =>{
//     console.log(accumulator,batteryBatches)
//     let total="sum of batteryBatches";
//     return accumulator +=total
// }
// let total=batteryBatches.reduce(reducer,4)

// console.log(totalBatteries)




// //    const reducer=(accumulator, item) =>{
// //     console.log(accumulator, item)
// //     let total= item.price * item.price
// //     return accumulator += total
// //    }

// //    let total= books.reduce(reducer,0)