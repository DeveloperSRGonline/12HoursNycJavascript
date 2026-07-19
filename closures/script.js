// lexical scope

// let a = 90;

// function test(){
//     console.log(a);
// }

// function extra(){
//     let a = 790;
//     test();
// }

// extra();


function outer(){
    let count = 0;

    return function inner(){
        count++;
        console.log(count); 
    }
}
let counter = outer();
counter()
counter()
counter()
counter()


// inner function remembers the outer function's variables even it its completly gone - it always remember its values