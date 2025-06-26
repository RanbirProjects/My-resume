require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configure CORS to allow requests from React frontend
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://192.168.0.2:3000', 'http://192.168.0.2:3001', 'http://localhost:5001'],
  credentials: true
}));

app.use(express.json());

// Ranbir's actual projects from GitHub
let projects = [
  {
    _id: '1',
    title: 'English Bhashi MERN',
    description: 'A Flutter mobile app for learners with login, course enrollment, chapter navigation, question attempts, and progress tracking via APIs. Features nested data handling, role-based access, state preservation.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500',
    link: 'https://github.com/RanbirProjects/englishbhashi-mern'
  },
  {
    _id: '2', 
    title: 'Fitness Tracker',
    description: 'A MERN stack fitness app for tracking workouts, setting goals, and joining a vibrant community. Features user authentication, personalized goal setting, and responsive design. Built with React.js and TypeScript.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    link: 'https://github.com/RanbirProjects/Fitness-tracker-'
  },
  {
    _id: '3',
    title: 'Food Delivery App',
    description: 'A full-featured Food Delivery App built using the MERN stack with both web and mobile support. Users can browse menus, place orders, and track deliveries in real-time.',
    image: 'https://images.unsplash.com/photo-1504674900240-9a9049b7c63e?w=500',
    link: 'https://github.com/RanbirProjects/Food-delivery-app-'
  },
  {
    _id: '4',
    title: 'Meltano Project',
    description: 'MERN stack site inspired by Meltano, with lavender backdrop and playful animations. Concise copy and subtle animations ensure clear, engaging data management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    link: 'https://github.com/RanbirProjects/Meltano-project-'
  },
  {
    _id: '5',
    title: 'Snake Game',
    description: 'Snake game built with MERN stack! MongoDB stores high scores, Express & Node.js handle logic, React powers the UI. Features real-time gameplay, leaderboard, and user authentication.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500',
    link: 'https://github.com/RanbirProjects/Snake-game-by-Ranbir'
  },
  {
    _id: '6',
    title: 'Startup Simulator',
    description: 'Startup Simulator website built with MERN stack: User authentication, real-time task management, portfolio tracking, interactive UI, scalable MongoDB database.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500',
    link: 'https://github.com/RanbirProjects/Startup-Simulator'
  }
];

let contacts = [];

// Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/projects', (req, res) => {
  const { title, description, image, link } = req.body;
  const newProject = {
    _id: Date.now().toString(),
    title,
    description,
    image,
    link
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const newContact = {
    _id: Date.now().toString(),
    name,
    email,
    message,
    createdAt: new Date()
  };
  contacts.push(newContact);
  res.status(201).json({ message: 'Contact form submitted!' });
});

app.get('/api/contact', (req, res) => {
  res.json(contacts);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('✅ Backend is ready!');
  console.log('🎯 Showcasing Ranbir\'s GitHub projects!');
  console.log('🌐 CORS enabled for React frontend');
});
