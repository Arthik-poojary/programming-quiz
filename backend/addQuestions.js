// Save this as addQuestions.js in the backend folder
// Run it once with: node addQuestions.js

const mongoose = require('mongoose');
require('dotenv').config();

// REPLACE WITH YOUR MONGODB CONNECTION STRING
// const MONGODB_URI = 'mongodb+srv://arthikpoojary92_db_user:I923Sww0jKVNfSp5@cluster0.bpyyexl.mongodb.net/';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

// Question Schema
const questionSchema = new mongoose.Schema({
  language: String,
  question: String,
  options: [String],
  correctAnswer: Number
});

const Question = mongoose.model('Question', questionSchema);

// Sample Questions
const sampleQuestions = [
  // Python Questions
  {
    language: "Python",
    question: "What is the correct way to create a function in Python?",
    options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
    correctAnswer: 1
  },
  {
    language: "Python",
    question: "Which keyword is used for exception handling in Python?",
    options: ["catch", "except", "error", "handle"],
    correctAnswer: 1
  },
  {
    language: "Python",
    question: "What does the len() function do?",
    options: ["Returns the length of an object", "Creates a list", "Loops through items", "Deletes an item"],
    correctAnswer: 0
  },
  {
    language: "Python",
    question: "How do you create a list in Python?",
    options: ["list = {}", "list = []", "list = ()", "list = <>"],
    correctAnswer: 1
  },
  {
    language: "Python",
    question: "Which of the following is used to comment in Python?",
    options: ["//", "#", "/* */", "--"],
    correctAnswer: 1
  },
  {
    language: "Python",
    question: "What is the output of: print(type([]))?",
    options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
    correctAnswer: 0
  },
  {
    language: "Python",
    question: "Which method is used to add an element to a list?",
    options: ["add()", "append()", "insert()", "push()"],
    correctAnswer: 1
  },
  {
    language: "Python",
    question: "What keyword is used to import modules?",
    options: ["include", "import", "require", "using"],
    correctAnswer: 1
  },
  {
    language: "Python",
    question: "How do you start a for loop in Python?",
    options: ["for (i = 0; i < 5; i++)", "for i in range(5):", "for i = 0 to 5:", "loop i to 5:"],
    correctAnswer: 1
  },
  {
    language: "Python",
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "exp", "pow"],
    correctAnswer: 1
  },

  // JavaScript Questions
  {
    language: "JavaScript",
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["#", "//", "/*", "--"],
    correctAnswer: 1
  },
  {
    language: "JavaScript",
    question: "How do you declare a variable in JavaScript?",
    options: ["var x = 5;", "variable x = 5;", "v x = 5;", "x := 5;"],
    correctAnswer: 0
  },
  {
    language: "JavaScript",
    question: "Which method is used to parse a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.read()"],
    correctAnswer: 0
  },
  {
    language: "JavaScript",
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Object Method", "Document Oriented Model"],
    correctAnswer: 0
  },
  {
    language: "JavaScript",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "add()", "append()", "insert()"],
    correctAnswer: 0
  },
  {
    language: "JavaScript",
    question: "How do you create a function in JavaScript?",
    options: ["function myFunc()", "def myFunc()", "create myFunc()", "func myFunc()"],
    correctAnswer: 0
  },
  {
    language: "JavaScript",
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "constant"],
    correctAnswer: 2
  },
  {
    language: "JavaScript",
    question: "What is the correct way to write an if statement?",
    options: ["if x = 5 then", "if (x == 5)", "if x == 5:", "if x = 5"],
    correctAnswer: 1
  },
  {
    language: "JavaScript",
    question: "Which operator is used for strict equality?",
    options: ["==", "===", "=", "!="],
    correctAnswer: 1
  },
  {
    language: "JavaScript",
    question: "How do you write a for loop in JavaScript?",
    options: ["for (i = 0; i < 5; i++)", "for i in range(5)", "for (i <= 5; i++)", "loop (i = 0; i < 5)"],
    correctAnswer: 0
  },

  // HTML Questions
  {
    language: "HTML",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correctAnswer: 0
  },
  {
    language: "HTML",
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    correctAnswer: 1
  },
  {
    language: "HTML",
    question: "Which HTML tag is used for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correctAnswer: 2
  },
  {
    language: "HTML",
    question: "Which tag is used to insert an image?",
    options: ["<image>", "<img>", "<pic>", "<photo>"],
    correctAnswer: 1
  },
  {
    language: "HTML",
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correctAnswer: 2
  },
  {
    language: "HTML",
    question: "Which attribute is used to specify a link destination?",
    options: ["src", "href", "link", "url"],
    correctAnswer: 1
  },
  {
    language: "HTML",
    question: "Which tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    correctAnswer: 0
  },
  {
    language: "HTML",
    question: "What is the correct HTML for creating a checkbox?",
    options: ["<input type='checkbox'>", "<checkbox>", "<check>", "<input type='check'>"],
    correctAnswer: 0
  },
  {
    language: "HTML",
    question: "Which tag is used to define a table row?",
    options: ["<table>", "<tr>", "<td>", "<row>"],
    correctAnswer: 1
  },
  {
    language: "HTML",
    question: "What does the <title> tag define?",
    options: ["Document heading", "Browser tab title", "Page header", "First paragraph"],
    correctAnswer: 1
  },

  // CSS Questions
  {
    language: "CSS",
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "bg-color"],
    correctAnswer: 2
  },
  {
    language: "CSS",
    question: "How do you select an element with id 'header'?",
    options: [".header", "#header", "*header", "header"],
    correctAnswer: 1
  },

  {
    language: "CSS",
    question: "Which property is used to change text color?",
    options: ["text-color", "font-color", "color", "text-style"],
    correctAnswer: 2
  },
  {
    language: "CSS",
    question: "How do you make text bold in CSS?",
    options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "bold: true;"],
    correctAnswer: 0
  },
  {
    language: "CSS",
    question: "Which property is used to change font size?",
    options: ["text-size", "font-size", "text-style", "size"],
    correctAnswer: 1
  },
  {
    language: "CSS",
    question: "How do you select all <p> elements?",
    options: [".p", "#p", "p", "*p"],
    correctAnswer: 2
  },
  {
    language: "CSS",
    question: "Which property adds space between the border and content?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correctAnswer: 1
  },
  {
    language: "CSS",
    question: "How do you make a list not display bullet points?",
    options: ["list-style: none;", "list: none;", "bullets: none;", "list-style-type: none;"],
    correctAnswer: 3
  },
  {
    language: "CSS",
    question: "Which property is used to align text to the center?",
    options: ["align: center;", "text-align: center;", "alignment: center;", "center-text: true;"],
    correctAnswer: 1
  },
  {
    language: "CSS",
    question: "What is the correct CSS syntax?",
    options: ["body {color: black;}", "{body: color=black;}", "body:color=black;", "{body; color: black;}"],
    correctAnswer: 0
  }
];

// Insert questions into database
async function addQuestions() {
  try {
    // Clear existing questions (optional)
    await Question.deleteMany({});
    console.log('Cleared existing questions');
    
    // Insert new questions
    await Question.insertMany(sampleQuestions);
    console.log(`Successfully added ${sampleQuestions.length} questions!`);
    
    // Close connection
    mongoose.connection.close();
  } catch (error) {
    console.error('Error adding questions:', error);
  }
}

// Run the function
addQuestions();