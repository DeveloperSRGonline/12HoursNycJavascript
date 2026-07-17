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

let arr = [1,2,3,4,5]
console.log(arr)

arr.push("Hello")
console.log(arr)

arr.pop()// last element remove
console.log(arr)

arr.shift() // first element remove
console.log(arr);

arr.unshift(789)
console.log(arr);// adds element to the beginning

// anything then dot (.) operator then anything you are calling is called as method
