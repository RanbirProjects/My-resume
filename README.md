# 🚀 Ranbir Singh - Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring beautiful animations and a professional design.

## ✨ Features

- **Modern UI/UX**: Beautiful gradient backgrounds and glassmorphism design
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Interactive Projects**: Showcase your GitHub projects with animated cards
- **Contact Form**: Functional contact form with backend integration
- **Professional Footer**: Animated footer with social media links
- **Real-time Updates**: Dynamic content loading from backend API

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI library
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **MongoDB** - Database (optional, currently using in-memory storage)

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   ├── pages/         # Page components
│   │   │   ├── Home.js
│   │   │   ├── Projects.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                 # Node.js backend
│   ├── server.js          # Express server
│   └── package.json
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RanbirProjects/My-resume.git
   cd My-resume
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   The backend will run on `http://localhost:5001`

2. **Start the frontend development server**
   ```bash
   cd client
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

## 📱 Pages

### 🏠 Home Page
- Animated hero section with floating elements
- Gradient background with smooth transitions
- Call-to-action button linking to projects

### 📂 Projects Page
- Grid layout showcasing your GitHub projects
- Animated project cards with hover effects
- Direct links to project repositories
- Loading states and error handling

### 👨‍💻 About Page
- Professional background information
- Skills grid with animated skill cards
- Experience timeline
- Responsive two-column layout

### 📧 Contact Page
- Functional contact form with validation
- Social media links
- Animated form elements
- Success/error message handling

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like UI elements
- **Gradient Backgrounds**: Beautiful color transitions
- **Floating Animations**: Subtle background animations
- **Hover Effects**: Interactive elements with smooth transitions
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Typography**: Professional font hierarchy and spacing

## 🔧 Customization

### Adding New Projects
Edit `server/server.js` to add new projects to the projects array:

```javascript
{
  _id: '7',
  title: 'Your New Project',
  description: 'Project description here',
  image: 'https://images.unsplash.com/photo-...',
  link: 'https://github.com/yourusername/project'
}
```

### Updating Personal Information
- **About page**: Edit `client/src/pages/About.js`
- **Contact links**: Update social media URLs in `client/src/App.js`
- **Navigation**: Modify the navigation in `client/src/App.js`

### Styling Changes
- **Colors**: Update color variables in styled components
- **Animations**: Modify Framer Motion animations
- **Layout**: Adjust grid and flexbox properties

## 🌐 Deployment

### Frontend (React)
- Build the project: `npm run build`
- Deploy to platforms like:
  - Vercel
  - Netlify
  - GitHub Pages
  - AWS S3

### Backend (Node.js)
- Deploy to platforms like:
  - Heroku
  - Railway
  - DigitalOcean
  - AWS EC2

## 📊 Performance

- **Optimized Images**: Using Unsplash for high-quality, optimized images
- **Lazy Loading**: Components load efficiently
- **Minified Builds**: Production-ready optimized code
- **Caching**: Proper cache headers for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ranbir Singh**
- GitHub: [@RanbirProjects](https://github.com/RanbirProjects)
- LinkedIn: [ranbirsingh1001](https://www.linkedin.com/in/ranbirsingh1001/)
- LeetCode: [ranbirsingh7](https://leetcode.com/u/ranbirsingh7/)

## 🙏 Acknowledgments

- **Framer Motion** for amazing animations
- **Styled Components** for modern styling
- **Unsplash** for beautiful images
- **React Community** for excellent documentation

---

⭐ **Star this repository if you found it helpful!** 