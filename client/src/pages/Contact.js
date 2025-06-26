import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 6rem 2rem 4rem 2rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  opacity: 0.1;
  z-index: 1;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(45deg, #fff, #f5c518);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: #f5c518;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(245, 197, 24, 0.3);
  }
`;

const Textarea = styled(motion.textarea)`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  min-height: 120px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  resize: vertical;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: #f5c518;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(245, 197, 24, 0.3);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem;
  border-radius: 25px;
  border: none;
  background: linear-gradient(45deg, #f5c518, #ff6b6b);
  color: #111;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(245, 197, 24, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(245, 197, 24, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled(motion.p)`
  color: #f5c518;
  margin-top: 1rem;
  font-size: 1.1rem;
  text-align: center;
  background: rgba(245, 197, 24, 0.1);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(245, 197, 24, 0.3);
`;

const ContactInfo = styled(motion.div)`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
`;

const ContactTitle = styled.h3`
  color: #f5c518;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(245, 197, 24, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(245, 197, 24, 0.3);
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section>
      <BackgroundAnimation />
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </Title>
        
        <Form 
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <Input 
            name="name" 
            placeholder="Your Name" 
            value={form.name} 
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <Input 
            name="email" 
            type="email"
            placeholder="Your Email" 
            value={form.email} 
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <Textarea 
            name="message" 
            placeholder="Your Message" 
            value={form.message} 
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <Button 
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </Form>
        
        {sent && (
          <Message
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you! I'll get back to you soon. 🚀
          </Message>
        )}

        <ContactInfo variants={itemVariants}>
          <ContactTitle>Connect With Me</ContactTitle>
          <div>
            <ContactLink href="https://github.com/RanbirProjects" target="_blank" rel="noopener noreferrer">
              GitHub
            </ContactLink>
            <ContactLink href="https://www.linkedin.com/in/ranbirsingh1001/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ContactLink>
            <ContactLink href="https://leetcode.com/u/ranbirsingh7/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </ContactLink>
          </div>
        </ContactInfo>
      </Container>
    </Section>
  );
};

export default Contact; 