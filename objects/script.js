// objects

// let age = 29

// user - name , age , address , adhar number | so many things

// let user1 = {
    // key : value
//     name: "John",
//     age: 29,
//     address: "123 Main St",
//     adharNumber: "1234567890",
//     education:{
//         school: "ABC School",
//         college: "XYZ College"
//     }
// }

// let user2 = {
    // key : value
//     name: "Jane",
//     age: 25,
//     address: "456 Main St",
//     adharNumber: "0987654321"
// } 

// user1.name = "John Doe"

// console.log(user1.name)
// console.log(user2.age)
// dot notation updation and change dono mein kaam aata hai

// bracket notation
// user1["name"] = "John Doe Updated name"
// user1["data"] = "SecondName"
// console.log(user1)


// let obj = {
//     name: "John",
//     age: 2,
//     greet(){
//         console.log("Hello")
//     }
// }
// console.log(obj)
// obj.greet()

// let {name,age} = obj
// console.log(name,age)

// shallow and deep copy

let product = {
    name: "Chair",
    price: 100,
    material: "fibre",
    color: "brown",
    category:{
        noOfProducts:10,
        type:"furniture"
    }
}

// let product2 = product 
// let product2 = {...product} // shallow copy
// let str = JSON.stringify(product) 
// let product2 = JSON.parse(str) // deep copy


// product2.category.noOfProducts = 20
// product2.price = 340
// console.log(product)
// console.log(product2)


// object.freeze
// delete product.price;
// Object.freeze(product);
// product.price = 200;

// console.log(product);

// Object.seal(product) // allow us to updation but not deletion or addition of new properties



// object -- descriptors


Object.defineProperty(product, "price", {
    value: 100,
    writable: false,
    enumerable: true,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(product, "price"));

