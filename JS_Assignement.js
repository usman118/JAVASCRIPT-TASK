// const prompt = require("prompt-sync")(); //for common js / nodejs
// ISLAMABAD SECTION F STUDENT NAME: MUHAMMAD USMAN
// PIAIC
import promptSync from "prompt-sync"; //for es6 / typescript /module js
const prompt = promptSync();

const array_find = () => {
  let arr = [11, 14, 17, 19];
  arr = arr.sort();

  let missingIndex = 0;
  arr.forEach((item, index) => {
    console.log(`index: ${index}, item: ${item}`);
    let missing = arr[index + 1] - item - 1;
    if (missing >= 1) {
      for (let i = 1; i <= missing; i++) {
        missingIndex = missingIndex + 1;
        console.log(`\tmissing: ${item + i}` + ` at index: ${missingIndex}`);
      }
    }
    missingIndex = missingIndex + 1;
  });
};

const calculaor = () => {
  console.log("Enter the first number");
  let firstNumber = prompt();
  console.log("Enter the second number");
  let secondNumber = prompt();
  console.log("Enter the operation");
  let operation = prompt();
  let result = 0;
  const check_input = (firstNumber, secondNumber, operation) => {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      console.log("Please enter a valid number");
      return false;
    }
    if (
      operation != "+" &&
      operation != "-" &&
      operation != "*" &&
      operation != "/"
    ) {
      console.log("Please enter a valid operation");
      return false;
    }
    return true;
  };
  let chk = check_input(firstNumber, secondNumber, operation);
  if (chk) {
    switch (operation) {
      case "+":
        result = parseInt(firstNumber) + parseInt(secondNumber);
        break;
      case "-":
        result = parseInt(firstNumber) - parseInt(secondNumber);
        break;
      case "*":
        result = parseInt(firstNumber) * parseInt(secondNumber);
        break;
      case "/":
        result = parseInt(firstNumber) / parseInt(secondNumber);
        break;
      default:
        console.log("Invalid operation");
        break;
    }
    console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
  }
};

const quiz_data = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "What is the capital of USA?",
    options: ["New York", "Washington DC", "Los Angeles", "Chicago"],
    answer: "Washington DC",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
    answer: "Ottawa",
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
    answer: "Brasilia",
  },
];

const quiz = () => {
  let score = 0;
  quiz_data.forEach((item, index) => {
    console.log(`Question ${index + 1}: ${item.question}`);
    item.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
    console.log("Enter your answer");
    let answer = prompt();
    if (
      answer == item.answer ||
      answer == item.options.indexOf(item.answer) + 1
    ) {
      score = score + 1;
    }
  });
  console.log(`Your score is ${score}`);
};

// console.log("Array Index find Program\n\n");
// array_find();
// console.log("\n\nBasic Calculator Program");
// calculaor();
// console.log("\n\nBasic Quiz Program");
// quiz();

console.log("1: Array Index find Program");
console.log("2: Basic Calculator Program");
console.log("3: Basic Quiz Program");
console.log("Enter your choice");
let choice = prompt();
switch (choice) {
  case "1":
    array_find();
    break;
  case "2":
    calculaor();
    break;
  case "3":
    quiz();
    break;
  default:
    console.log("Invalid choice");
    break;
}
