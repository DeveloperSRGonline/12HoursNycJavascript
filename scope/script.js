// var a = 80;

// console.log(a) - instead of here what if i do this is about line number 34

// let a = 10; - script.js:33 Uncaught ReferenceError: Cannot access 'a' before initialization at script.js:33:13 (anonymous) @ script.js:33 - but js ko kaise pata ki a existkarta hai jab vo access hi nahi kar par raha ? 

// let only assess after declaration

// const a; // script.js:43 Uncaught SyntaxError: Missing initializer in const declaration (at script.js:43:7)

var a = 10;
console.log(a)

{
    var b = 23;
    let c = 23;
    console.log(c)
}
console.log(c)