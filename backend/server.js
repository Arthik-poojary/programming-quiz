require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// MongoDB Connection using environment variable
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

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

// API Routes
// Get all available languages
app.get('/api/languages', async (req, res) => {
  try {
    const languages = await Question.distinct('language');
    console.log('📚 Languages found:', languages);
    res.json(languages);
  } catch (err) {
    console.error('❌ Error fetching languages:', err);
    res.status(500).json({ message: err.message });
  }
});

// Get questions by language
app.get('/api/questions/:language', async (req, res) => {
  try {
    const questions = await Question.find({ language: req.params.language });
    console.log(`📝 Found ${questions.length} questions for ${req.params.language}`);
    res.json(questions);
  } catch (err) {
    console.error('❌ Error fetching questions:', err);
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
    console.log('✅ Question added successfully');
    res.status(201).json(newQuestion);
  } catch (err) {
    console.error('❌ Error adding question:', err);
    res.status(400).json({ message: err.message });
  }
});

// Serve index.html for root route
app.get('/', (req, res) => {
  console.log('📄 Serving index.html');
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Serve quiz.html
app.get('/quiz.html', (req, res) => {
  console.log('📄 Serving quiz.html');
  res.sendFile(path.join(__dirname, '../frontend', 'quiz.html'));
});

// Handle 404 - catch all other routes
app.use((req, res) => {
  console.log('⚠️ 404 - Route not found:', req.url);
  res.status(404).sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`📁 Serving frontend from: ${path.join(__dirname, '../frontend')}`);
});