// function something(value="default"){
//     console.log(value)
// }

// something()

// // default paramater
// let pizzaOrder = (size = "medium") => {
//     console.log("pizza preparing of sizee : ",size)
// }

// pizzaOrder("large")

// let numbers = (...rest) => {
//     console.log(...rest)// spread operator
// }
// numbers(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

// let a = 90;

// let b = a;

// b = 45;

// console.log(a)

// let a = {
//   name: "rahul",
//   age: 45,
// };

// a.name = "varun";

// console.log("a->", a);

// let b = a;
// let b = { ...a }; // spread operator only copy values from any reference data type

// b.name = "raj";

// console.log("b->", b);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = [...arr1, ...arr2];

// console.log(result);


// create a profile function which takes 2 arguments and 1 optional value with default value name, age and city(optional)

// function profile(name,age,city="Gondia"){
//     return {
//         name,
//         age,
//         city
//     }
// }

// console.log(profile("rahul",45))


// create a bill calculator function , jsmein user dishes ka price bhejega as a arguments , return a total cost

// let calculateBill = (...dishes) => {
//     let sum = 0;
//     for(let i = 0;i<dishes.length;i++){
//         sum = sum + dishes[i]
//     }
//     return sum
// }

// console.log(calculateBill(10,34,23,43))


// check the password length and return the result - rule if password length is greater than 8 return "strong", if password length is smaller than 8 return "weak"

// function checkPassword(pass){
//     if(pass.length > 8) return "Strong"
//     else return "Weak"
// }

// console.log(checkPassword("a;dhflaa"))


// first class function - function can be treat as value that it nothing more nothing less

// let greet = () => {
//     console.log("Hello")
// }

// // console.log(greet)

// let abcd = (callback) => {
//   callback()
// }

// abcd(greet) // greet is a callback function - aisa function jo ki as a argument pass hota hai in anaother function which accept function as a parameter


// let outer = () => {
//     console.log("callback called")
// }

// let global = (callback) => {
//     callback()
// }

// global(outer)

// let fn = () => {
//     return () => {
//         console.log("i am inner function")
//     }
// }

// console.log(fn);

// let global = () => {
//     return () => {
//         return () => {
//             return "deepest function"
//         }
//     }
// }

// console.log(global()()())


// recursion
// function greet(a){
//     if(a === 3) returnf
//     console.log(a)
//     greet(a - 1)
// }

// console.log(greet(10))
