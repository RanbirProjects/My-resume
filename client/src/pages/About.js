import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 6rem 2rem 4rem 2rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%);
  opacity: 0.3;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #f5c518);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
`;

const SkillsSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #f5c518;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  background: rgba(245, 197, 24, 0.2);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(245, 197, 24, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(245, 197, 24, 0.3);
    transform: translateY(-2px);
  }
`;

const SkillName = styled.span`
  font-weight: bold;
  color: #f5c518;
`;

const ExperienceSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #f5c518;
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border-left: 4px solid #f5c518;
`;

const ExperienceRole = styled.h4`
  color: #f5c518;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.p`
  color: #ccc;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const ExperienceDescription = styled.p`
  color: #e0e0e0;
  font-size: 0.9rem;
`;

const About = () => {
  const skills = [
    'React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript',
    'HTML/CSS', 'Git', 'REST APIs', 'MERN Stack', 'Flutter', 'Mobile Development'
  ];

  const experiences = [
    {
      role: 'MERN Full-Stack Developer',
      company: 'Zedd Labz',
      description: 'Currently working as a MERN stack developer, building scalable web applications and contributing to innovative projects.'
    },
    {
      role: 'Teaching Assistant',
      company: 'Coding Ninjas',
      description: 'Mentored students in programming concepts, helped with code reviews, and provided guidance on web development projects.'
    },
    {
      role: 'Full-Stack Developer',
      company: 'Freelance',
      description: 'Building modern web applications using MERN stack with focus on user experience and performance.'
    },
    {
      role: 'Mobile App Developer',
      company: 'Personal Projects',
      description: 'Developing cross-platform mobile applications using Flutter and React Native.'
    }
  ];

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <Section>
      <BackgroundPattern />
      <Container>
        <Title
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </Title>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Content>
            <AboutText variants={itemVariants}>
              <Paragraph>
                I'm a passionate Full-Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and mobile development using Flutter. I love creating innovative web applications that provide exceptional user experiences.
              </Paragraph>
              <Paragraph>
                With a strong foundation in both frontend and backend development, I specialize in building scalable, responsive applications that solve real-world problems. My journey in software development has been driven by curiosity and a desire to create meaningful solutions.
              </Paragraph>
              <Paragraph>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
              </Paragraph>
            </AboutText>

            <SkillsSection variants={itemVariants}>
              <SkillsTitle>Skills & Technologies</SkillsTitle>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <SkillItem
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillName>{skill}</SkillName>
                  </SkillItem>
                ))}
              </SkillsGrid>
            </SkillsSection>
          </Content>

          <ExperienceSection variants={itemVariants}>
            <ExperienceTitle>Experience</ExperienceTitle>
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ExperienceRole>{exp.role}</ExperienceRole>
                <ExperienceCompany>{exp.company}</ExperienceCompany>
                <ExperienceDescription>{exp.description}</ExperienceDescription>
              </ExperienceItem>
            ))}
          </ExperienceSection>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About; 