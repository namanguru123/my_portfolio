"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench, Code2 } from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="skill-icon" size={24} />,
    skills: ["React.js", "HTML5", "CSS3", "GSAP", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Server className="skill-icon" size={24} />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"]
  },
  {
    title: "Database",
    icon: <Database className="skill-icon" size={24} />,
    skills: ["MongoDB", "SQL", "Mongoose", "Data Modeling"]
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="skill-icon" size={24} />,
    skills: ["Git", "GitHub", "Docker", "GitHub Actions (CI/CD)"]
  },
  {
    title: "Languages",
    icon: <Code2 className="skill-icon" size={24} />,
    skills: ["JavaScript", "TypeScript", "Python", "C++"]
  }
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>.
          </h2>
          <div className="about-divider"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="skill-category glass-card"
            >
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map(skill => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
