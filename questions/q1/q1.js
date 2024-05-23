var myName = "Abdul Moiz";
var rollNo = 1014;
var isStudent = true;
var fruitArr = ["Apple", "Banana", "Orange"];
var typeArr = ["Sam", 101, true];
;
var printPersonInfo = function (person) {
    console.log("Name of Student is ".concat(person.name, ". \n Age of Student is ").concat(person.age, ". \n Student : ").concat(person.isStudent ? "Yes" : "No", ".\n"));
};
printPersonInfo({ name: "Tom", age: 10, isStudent: true });
printPersonInfo({ name: "Jerry", age: 7, isStudent: false });
