"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="contact-wrapper glass-card"
        >
          <div className="contact-content">
            <h2 className="contact-title">
              Let&apos;s build something <span className="gradient-text">meaningful.</span>
            </h2>
            <p className="contact-subtitle">
              Always open to discussing product design, complex architectures, or partnership opportunities.
            </p>

            <a href="mailto:namanshipra@gmail.com" className="btn btn-primary contact-cta">
              Get in Touch <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-links-grid">
            <a href="mailto:namanshipra@gmail.com" className="contact-link-item group">
              <span className="contact-icon-wrapper"><Mail size={24} /></span>
              <div className="contact-link-text">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value group-hover:text-[var(--foreground)] transition-colors">namansharma.work.in@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/naman-sharma-a9a606216/" target="_blank" rel="noopener noreferrer" className="contact-link-item group">
              <span className="contact-icon-wrapper"><FaLinkedin size={24} /></span>
              <div className="contact-link-text">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value group-hover:text-[var(--foreground)] transition-colors">Connect with me</span>
              </div>
            </a>

            <a href="https://github.com/namanguru123" target="_blank" rel="noopener noreferrer" className="contact-link-item group">
              <span className="contact-icon-wrapper"><FaGithub size={24} /></span>
              <div className="contact-link-text">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value group-hover:text-[var(--foreground)] transition-colors">namanguru123</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
