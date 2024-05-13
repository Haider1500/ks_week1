const isPassed = true;
if (isPassed) {
  console.log("you have passed");
} else "you have failed!";

// if else if

const marks = 65;
let grade;
if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else if (marks >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(grade, "grade");

// ternary operator
const msg = isPassed ? "congrats" : "better luck next time";

console.log(msg);
