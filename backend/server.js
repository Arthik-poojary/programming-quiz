
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// MongoDB Connection using environment variable
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));


// Question Schema
const questionSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: Number,
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

// Routes
// Get all available languages
app.get('/api/languages', async (req, res) => {
  try {
    const languages = await Question.distinct('language');
    res.json(languages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get questions by language
app.get('/api/questions/:language', async (req, res) => {
  try {
    const questions = await Question.find({ language: req.params.language });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new question (for manual insertion)
app.post('/api/questions', async (req, res) => {
  const question = new Question({
    language: req.body.language,
    question: req.body.question,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));