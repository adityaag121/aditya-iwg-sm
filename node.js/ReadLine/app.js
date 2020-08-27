const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("Enter something:", (answer) => {
//   console.log("You have typed " + answer);
//   rl.close();
// });

const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
const ans = num1 + num2;

rl.on("close", () => {
  console.log("Correct!!");
});

console.log(`What is ${num1} + ${num2}?`);
rl.prompt();
rl.on("line", (input) => {
  if (input.trim() == ans) rl.close();
  else {
    console.log("Incorrect Response! Please try again");
    rl.prompt();
  }
});
