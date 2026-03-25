"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, Database, Code, Shield } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: "afterus",
    title: "AfterUs",
    subtitle: "Digital Life Access & Legacy Manager",
    github: "https://github.com/namanguru123/AfterUs.git",
    live: "https://after-us.vercel.app",
    flagship: true,
    description: "A privacy-first digital legacy platform that allows users to securely store sensitive digital assets and define conditional access rules for trusted individuals.",
    highlight: "This is not just a project, but a long-term product focused on privacy and digital legacy.",
    techDepth: [
      "Designed a condition engine to manage access execution logic",
      "Implemented secure authentication flow with token handling",
      "Built backend APIs with Node.js & Express",
      "Used MongoDB for flexible schema design",
      "Focus on security-first architecture"
    ],
    tags: ["Node.js", "Express", "MongoDB", "AES-256", "JWT"],
    features: [
      { icon: <Shield size={16} />, text: "AES-256 encryption" },
      { icon: <Lock size={16} />, text: "Condition-based access" },
      { icon: <Database size={16} />, text: "Audit logs" }
    ]
  },
  {
    id: "instaconnect",
    title: "InstaConnect",
    subtitle: "Social Platform",
    github: "https://github.com/namanguru123/instaConnect.git",
    live: "#",
    flagship: false,
    description: "A full-stack social media platform with core features of modern networking apps. Features user authentication, post creation, follow/unfollow system, and content discovery.",
    techDepth: [
      "REST API architecture with secure authentication",
      "Scalable backend design",
      "MongoDB optimization for performance"
    ],
    tags: ["React", "Node.js", "MongoDB", "JWT", "bcrypt"],
  },

  {
    id: "resume",
    title: "ATS Resume Builder",
    subtitle: "Utility Tool",
    github: "https://github.com/namanguru123/ATS-resume-creator.git",
    live: "https://naman-ats-resume-creator.vercel.app/",
    flagship: false,
    description: "A resume builder that generates ATS-friendly resumes with structured formatting. Focuses on practical utility and a clean UI/UX.",
    techDepth: [
      "Clean UI/UX for real-world use case"
    ],
    tags: ["React", "PDF Generation", "Tailwind CSS"],
  }
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="section-title">
            Selected <span className="gradient-text">Works</span>.
          </h2>
          <div className="about-divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`project-card glass-card ${project.flagship ? 'flagship-card' : ''}`}
            >
              <div className="project-content">
                {project.flagship && (
                  <div className="flagship-badge">
                    <span className="sparkle">✨</span> Flagship Product
                  </div>
                )}

                <div className="project-header-row">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="Github Repo">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.live} className="project-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                {project.flagship && project.features && (
                  <div className="project-features">
                    {project.features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-icon">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="project-tech-depth">
                  <h4 className="tech-depth-title">
                    <Code size={16} /> Technical Highlights
                  </h4>
                  <ul className="tech-depth-list">
                    {project.techDepth.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {project.flagship && (
                  <div className="flagship-highlight">
                    &quot;{project.highlight}&quot;
                  </div>
                )}

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
