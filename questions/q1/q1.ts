let myName:string = "Abdul Moiz";
let rollNo:number = 1014;
let isStudent:boolean = true;
let fruitArr:string[] = ["Apple","Banana","Orange"];
type MultList = [string,number,boolean];
let typeArr:MultList = ["Sam",101,true];
interface Person{
    name:string,
    age:number,
    isStudent:boolean
};
const printPersonInfo = (person:Person) => {
    console.log(`Name of Student is ${person.name}. \n Age of Student is ${person.age}. \n Student : ${person.isStudent ? "Yes" : "No" }.\n`);
};
printPersonInfo({name:"Tom",age:10,isStudent:true});
printPersonInfo({name:"Jerry",age:7,isStudent:false});