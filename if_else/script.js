// if else , elseif

let isRaining = true;

if (isRaining) {
  console.log("Bring Umbrella");
} else {
  console.log("No need of umbrella");
}

let battery = 23;

if (battery < 20) {
  console.log("charging par laga do");
} else {
  console.log("no need to charge");
}

let age = 56;
if (age < 18) {
  console.log("You cannot vote");
} else if (age > 55) {
  console.log("over aged");
} else {
  console.log("You can vote");
}

// if weather is rain -> take umbrela
// if weather is sunny -> wear sunglasses
// if weather is winter -> wear jacket
// else -> stay home

let weather = "rain";

if (weather === "rain") {
  console.log("take umbrella");
} else if (weather === "sunny") {
  console.log("wear sunglasses");
} else if (weather === "winter") {
  console.log("wear jacket");
} else {
  console.log("stay home");
}

// example for nested if else
if (50 > 20) {
  if (50 > 45) {
    console.log("Yes..");
  }
}

// falsy values : null , undefined , 0 , "" , NaN,0n
// other than this values all will be truthy values

let day = "Friday";

if (day === "Monday") console.log("Working day")
else if (day === "Tuesday") console.log("Working day")
else if (day === "Wednesday") console.log("Working day")
else if (day === "Thursday") console.log("Working day")
else if (day === "Friday") console.log("Working day")
else if (day === "Saturday") console.log("Weekend")
else if (day === "Sunday") console.log("Weekend it's holiday")
else console.log("Invalid day")

// switch case
switch (day) {
  case "Monday":
    console.log("working");
    break;
  case "Tuesday":
    console.log("working");
    break;
  case "Wednesday":
    console.log("working");
    break;
  case "Thursday":
    console.log("working");
    break;
  case "Friday":
    console.log("working");
    break;
  case "Saturday":
    console.log("weekend");
    break;
  case "Sunday":
    console.log("weekend");
    break;
  default:
    console.log("invalid day");
}

// division as per marks

let marks = 92;
if (marks >= 90) console.log("first division")
else if(marks >= 60) console.log("second division")
else if(marks >= 50) console.log("first division")
else if(marks >= 40) console.log("third division")
else console.log("fail")
