// let arr = [10, 20.5, "shivam", true, null, undefined, Symbol("name")]

// indexing always start with "0"

// console.log(arr[0]);

// let arr2 = [...arr];

// arr2[4] = "bye"
// console.log(arr);
// console.log(arr2);

// (7) [10, 20.5, 'shivam', true, null, undefined, Symbol(name)] // arr
// (7) [10, 20.5, 'shivam', true, 'bye', undefined, Symbol(name)] // arr2

// array methods
// push,pop,shift,unshift,splice,slice,concat,join,indexOf,lastIndexOf,includes,sort,reverse

// mutates original array
// push, pop, shift, unshift, splice, sort, reverse

// return new array
// slice, concat, map,filter

// returns value
// find , includes,indexof,reduce,some,every

// push

// let arr = [1,2,3,4,5]
// console.log(arr)

// arr.push("Hello")
// console.log(arr)

// arr.pop()// last element remove
// console.log(arr)

// arr.shift() // first element remove
// console.log(arr);

// arr.unshift(789)
// console.log(arr);// adds element to the beginning

// arr.splice(1,3)
// console.log(arr)

// reverse

// arr.reverse()
// console.log(arr)

// anything then dot (.) operator then anything you are calling is called as method


// sort

// let arr = [10,20,1,2]

// arr.sort((a,b)=>{
//     // return a - b // accending
//     return b - a 
// })
// console.log(arr) // sorting only sort in string



// let fruits = ["apple","banana","orange","mango","guava","pineapple"]
// console.log(fruits)


// let ans = fruits.slice(3,4)
// console.log(ans)

// concat

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let arr3 = arr1.concat(arr2)
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)


// let boyNames = ["Rohan", "Naman", "Rohit", "Sarthak", "Roshani"];

// let newBoyNames = boyNames.map((name) => {
//     return name === "Naman" ? "😂" : name
// });

// // console.log(newBoyNames);

// let filteredNames = boyNames.forEach((val) => {
//     console.log(val)
//     return val;
// })
// console.log(filteredNames) // undefined return nahi karta forEach



// filter

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = numbers.filter((val) => {
//     return  val % 2 === 0
// })
// console.log(res)

// console.log(numbers) // original array


arr = [2,2,4,3,6,7,2,3,4,6,5,7];

// let result = arr.find((val) => {
//     return val === 2;
// })
// console.log(result);

// let res = arr.includes(2);
// console.log(res);


let arr1 = [1,2,3,4,"string",90]

// let res = arr1.indexOf("string") // returns index of first occurrence
// let res = arr1.some((val)=>{ // ek bhi value present to true nahi toh false
//     return val === "string"
// })
// console.log(res)

// let res = arr1.every((val) => {
//     return typeof val === "number"
// })
// console.log(res)

let arrForSum = [1,2,3,4,5]

// let sum = 0;
// for(let i = 0;i<arrForSum.length;i++){
//     sum += arrForSum[i];
// }

// console.log(sum)

let res = arrForSum.reduce((sum,val) => {
    return (sum += val);
},0) // 0 is a value of accumulator i.e sum

console.log(res)

