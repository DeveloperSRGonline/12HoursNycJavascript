// for (let i = 2; i < 101; i += 2) {
//   console.log(i);
// }

// for(start,end,change){

// }

// let i = 1;

// while(i <= 100){
//     console.log(i)
//     i++
// }

// let i = 1;

// let stopInstruction = "";

// while (i <= 100) {
//   console.log(i);

//   if (i === 10) {
//     stopInstruction = "sonam";
//   }

//   i++;
// }

// do while

// let i = 10;

// while (i < 9) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 9);

// let studentsData = [
//     "Rohan",
//     "Naman",
//     "Rohit",
//     "Sarthak",
//     "Roshani",
//     "Naveen",
//     "Sanjay"
// ]


// for(let i=0;i<studentsData.length;i++){
//     if(studentsData[i] === "Sarthak"){
//         continue;
//     }
//     console.log(studentsData[i])
// }

outerLoop:for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(i == 2 && j == 2){
            break outerLoop;
        }
        console.log(i,j)
    }
}