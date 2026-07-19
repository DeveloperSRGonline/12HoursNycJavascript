// pure function - functions that no need to get the things outside of its scope called pure function

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(2,3));


// Impure function - functions that need to get the things outside of its scope called impure function

// let qualtity = 10;

// function addQuantity(n){
//     return qualtity + n;
// }

// console.log(addQuantity(5));


// mutuablity - can be mutate (change)
// immutablity - can not be mutate (change)

// let a = {
//     name: "Ayush"
// }

// a.name = "Varun"
// console.log(a)


// immutability example
// let user = {
//     name:"Raju",
//     age:45
// }

// let user1 = {...user,address:"bihar"}

// console.log(user)
// console.log(user1)

// without currying
// function meal(burger,fries,drinks,extra){
//     console.log(burger,fries,drinks,extra);
// }
// meal("burger","fries","drinks","extra");


// currying
// function meal(burger){
//     return (fries) => {
//         return (drinks) => {
//             return (extra) => {
//                return {burger,fries,drinks,extra};
//             }
//         }
//     }
// }

// let burger = meal("regular")
// let fries = burger("large")
// let drinks = fries("medium")
// let extra = drinks("extra")

// console.log(extra)

// simple example

// function sum(a){
//     return (b)=>{
//         return a + b
//     }
// }

// console.log(sum(10)(20))


// memoization - if we need same thing again and again we can save that repeating thing and use it when need






