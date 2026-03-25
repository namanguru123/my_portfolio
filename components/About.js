"use client";

import { motion } from "framer-motion";
import "./About.css";

const aboutParagraphs = [
  "I'm a final-year B.Tech CSE student at Medicaps University with a curious builder mindset. While many focus on writing code, my focus is on building meaningful products. I don't just build clones—I build real-world applications engineered for scale and security.",
  "As a Full Stack MERN Developer, my core expertise lies in crafting secure authentication systems, RESTful APIs, and robust data architectures. I believe that a great product is a perfect synthesis of top-tier performance, deep privacy, and an intuitive user experience.",
  "Beyond solo building, I've served as a Technical Executive for the ACM Student Chapter, actively participating in Hackathons like the Smart India Hackathon. I thrive in environments where complex problems meet elegant technical solutions."
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="about-grid"
        >
          <div className="about-header">
            <h2 className="section-title">
              Behind the <span className="gradient-text">Code</span>.
            </h2>
            <div className="about-divider"></div>
          </div>

          <div className="about-content glass-card">
            <div className="about-text-content">
              {aboutParagraphs.map((para, idx) => (
                <motion.p 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
                  className="about-paragraph"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <h3 className="highlight-number">Security</h3>
                <p className="highlight-desc">Encryption & protected architectures</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">Scale</h3>
                <p className="highlight-desc">Production-ready system design</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">Product</h3>
                <p className="highlight-desc">Focus on real-world utility</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
