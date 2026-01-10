# 🎯 Programming Quiz Application

A modern, interactive full-stack web application designed to help developers test and improve their programming knowledge across multiple languages. Built with cutting-edge web technologies, this quiz platform delivers an engaging learning experience with real-time feedback, stunning visual effects, and a premium dark-themed interface.

Whether you're a beginner learning the basics or an experienced developer brushing up on fundamentals, this application provides an intuitive and enjoyable way to challenge yourself across Python, JavaScript, HTML, CSS, and more.

🔗 **Live Demo:** [https://programming-quiz-6x7a.onrender.com](https://programming-quiz-6x7a.onrender.com)

📂 **GitHub Repository:** [https://github.com/Arthik-poojary/programming-quiz](https://github.com/Arthik-poojary/programming-quiz)

## 🛠️ Technology Stack

### **Frontend**
- HTML5 - Semantic markup and structure
- CSS3 - Advanced styling with glassmorphism, gradients, and animations
- Vanilla JavaScript (ES6+) - Dynamic content loading and quiz logic

### **Backend**
- Node.js (22.x) - JavaScript runtime environment
- Express.js (4.18.2) - Web application framework
- Mongoose (7.0.3) - MongoDB object modeling
- CORS (2.8.5) - Cross-origin resource sharing
- dotenv (16.0.3) - Environment variable management

### **Database**
- MongoDB Atlas - Cloud-hosted NoSQL database

### **Deployment**
- Render.com - Backend hosting and deployment
- GitHub - Version control and CI/CD

## ✨ Features

- 🎨 **Premium Dark Theme** with glassmorphism and advanced CSS effects
- 🌈 **Dynamic Gradient Backgrounds** with animated mesh patterns
- ⚡ **Real-time Answer Validation** - Green for correct, Red for wrong answers
- 🔄 **Instant Feedback** - Auto-advance on correct, retry on wrong
- 🏆 **Animated Completion Screen** with bouncing trophy
- 📱 **Fully Responsive Design** - Works on desktop, tablet, and mobile
- 🚀 **Fast Performance** - Optimized loading and smooth animations
- 🌐 **Multiple Programming Languages** - Python, JavaScript, HTML, CSS, and more
- 💾 **Cloud Database** - MongoDB Atlas for reliable data storage
- 🔐 **Secure Configuration** - Environment variables for sensitive data

## 📁 Project Structure

```
programming-quiz/
├── backend/
│   ├── server.js              # Express server with API routes
│   ├── addQuestions.js        # Script to populate database
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables (gitignored)
├── frontend/
│   ├── index.html             # Language selection page
│   ├── quiz.html              # Quiz interface page
│   ├── styles.css             # Premium styling with animations
│   └── script.js              # Quiz logic and API calls
├── .gitignore                 # Git ignore rules
├── .env.example               # Environment template
└── README.md                  # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Arthik-poojary/programming-quiz.git
cd programming-quiz
```

2. **Install dependencies**
```bash
cd backend
npm install
```

3. **Configure environment variables**
```bash
# Create .env file in backend folder
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
NODE_ENV=development
```

4. **Add sample questions to database**
```bash
node addQuestions.js
```

5. **Start the server**
```bash
npm start
```

6. **Open your browser**
```
http://localhost:5000
```

## 🗄️ Database Schema

```javascript
{
  language: String,        // e.g., "Python", "JavaScript"
  question: String,        // The question text
  options: [String],       // Array of 4 answer options
  correctAnswer: Number    // Index of correct answer (0-3)
}
```

## 🎮 How to Use

1. **Select a Language** - Click on any programming language card
2. **Answer Questions** - Click on your answer choice
3. **Get Feedback** - Correct answers flash green and advance, wrong answers shake red
4. **Complete Quiz** - See trophy screen after all questions
5. **Try Another** - Return to language selection

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/languages` | Get list of all available languages |
| GET | `/api/questions/:language` | Get all questions for a specific language |
| POST | `/api/questions` | Add a new question |

## 🚀 Deployment

**Live URL:** https://programming-quiz-6x7a.onrender.com

### Render Configuration
- **Environment:** Node.js 22.x
- **Root Directory:** `backend`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Auto-Deploy:** Enabled from GitHub

### Environment Variables
```
MONGODB_URI=mongodb+srv://...
NODE_ENV=production
```

## 🔧 Configuration

The app automatically detects the environment:
```javascript
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api'      // Local development
    : `${window.location.origin}/api`; // Production
```

## 🔐 Security Features

- Environment variables for sensitive data
- CORS configuration for API security
- MongoDB connection string encryption
- Secure HTTPS in production

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Arthik Poojary**
- GitHub: [@Arthik-poojary](https://github.com/Arthik-poojary)

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Render.com for hosting platform
- Express.js community
- Open source community

---

⭐ **Star this repository if you found it helpful!** ⭐