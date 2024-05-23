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


const uniqueNumArrSum = (arr:number[]):number => {
    let uniqueValues = new Set(arr);
    let convUniqueValuesToArr = Array.from(uniqueValues);
    console.log(convUniqueValuesToArr)
    let sumOfArr:number = 0;
    for(let x of convUniqueValuesToArr){
        sumOfArr+=x;
    };
    return sumOfArr;
}
console.log(uniqueNumArrSum([1,2,3,4,5,6,7,8,3,4,5,66,7,]));