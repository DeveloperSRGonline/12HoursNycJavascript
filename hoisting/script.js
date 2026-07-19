// greet();
// function greet(){
//     console.log("Hello");
// }


// console.log(a);

// var a = 10;

// hoisting kuchh nahi bar memory creatino phase and code execution phase in ki vajaha se hota hai

// scope ------------------

// {
//     {
//         {
//             var a = 10;
//         }
//     }
// }
// console.log(a)

// function fn(){
//     var a = 90;
// }

// fn();
// console.log(a);


// global scope means -> har jagah read kar sakte hai
// function greet(){
//     var a = 10;
// }

// greet()
// console.log(a)

// var is function scoped , blobal scoped

// var a = 10;
// function greet(){
//     // var a = 90; // if we comment this then it will read line number 42 
//     console.log(a)
// }

// function fn(){
//     var a = 100;
//     greet()
// }

// fn()


// ````` this is called shadowing ```````
// let a = 90;

// function greet(){
//     let a = 700;
//     console.log(a)
// }

// greet()
// `````````````````




// ````````scope chain`````````
let collage = "LNCT"

function department(){
    let branch = "cse"

    function classroom(){
        let student = "Raju"
        console.log(student)
        console.log(branch)
        console.log(collage)
    }
    
    classroom()
}

department()

// ``````````````
