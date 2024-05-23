// const fizzBuzz = ():void => {
//     for(let i=1; i<=100; i++){
//         if(i%3===0 && i%5===0){
//             console.log(`${i}, FizzBuzz`);
//         }else if(i%3===0){
//             console.log(`${i}, Fizz`);
//         }else if(i%5===0){
//             console.log(`${i}, Buzz`)
//         }else if(i.toString().includes("3")){
//             console.log(`3 is includes in ${i}`)
//         }
//     }
// };
// fizzBuzz()
var uniqueNumArrSum = function (arr) {
    var uniqueValues = new Set(arr);
    var convUniqueValuesToArr = Array.from(uniqueValues);
    console.log(convUniqueValuesToArr);
    var sumOfArr = 0;
    for (var _i = 0, convUniqueValuesToArr_1 = convUniqueValuesToArr; _i < convUniqueValuesToArr_1.length; _i++) {
        var x = convUniqueValuesToArr_1[_i];
        sumOfArr += x;
    }
    ;
    return sumOfArr;
};
console.log(uniqueNumArrSum([1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 66, 7,]));
