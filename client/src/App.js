import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const Nav = styled.nav`
  width: 100%;
  background: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(245, 197, 24, 0.2);
`;

const Logo = styled(Link)`
  color: #f5c518;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 20px rgba(245, 197, 24, 0.5);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #f5c518, #ff6b6b);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #f5c518;
    
    &::after {
      width: 100%;
    }
  }
`;

const Footer = styled.footer`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
  overflow: hidden;
`;

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #1e3c72, #2a5298, #667eea, #764ba2);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  opacity: 0.3;
  z-index: 1;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled(motion.div)`
  text-align: center;
`;

const FooterTitle = styled.h3`
  color: #f5c518;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const FooterText = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(245, 197, 24, 0.2);
  color: #f5c518;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(245, 197, 24, 0.3);
  
  &:hover {
    background: rgba(245, 197, 24, 0.3);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 20px rgba(245, 197, 24, 0.3);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #999;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(245, 197, 24, 0.1);
  border: 1px solid rgba(245, 197, 24, 0.2);
`;

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <Nav>
        <Logo to="/">Ranbir Singh</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </Nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer>
        <FooterBackground />
        <FloatingElements>
          <FloatingCircle
            style={{ width: 60, height: 60, top: '20%', left: '10%' }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <FloatingCircle
            style={{ width: 40, height: 40, top: '60%', right: '15%' }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <FloatingCircle
            style={{ width: 50, height: 50, bottom: '30%', left: '20%' }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </FloatingElements>
        
        <FooterContent>
          <FooterGrid>
            <FooterSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FooterTitle>About Me</FooterTitle>
              <FooterText>
                Full-Stack Developer passionate about creating innovative web applications 
                with modern technologies and beautiful user experiences.
              </FooterText>
            </FooterSection>

            <FooterSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FooterTitle>Skills</FooterTitle>
              <FooterText>
                React.js • Node.js • MongoDB • Express.js • JavaScript • TypeScript • 
                HTML/CSS • Git • REST APIs • MERN Stack • Flutter
              </FooterText>
            </FooterSection>

            <FooterSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FooterTitle>Connect</FooterTitle>
              <FooterText>
                Let's work together on your next project. 
                Feel free to reach out!
              </FooterText>
              <SocialLinks>
                <SocialLink 
                  href="https://github.com/RanbirProjects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  📱
                </SocialLink>
                <SocialLink 
                  href="https://www.linkedin.com/in/ranbirsingh1001/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  💼
                </SocialLink>
                <SocialLink 
                  href="https://leetcode.com/u/ranbirsingh7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  🧮
                </SocialLink>
              </SocialLinks>
            </FooterSection>
          </FooterGrid>

          <FooterBottom>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} Ranbir Singh. All rights reserved. 
              Built with ❤️ using React & Node.js
            </motion.p>
          </FooterBottom>
        </FooterContent>
      </Footer>
    </Router>
  );
}

export default App;
