import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer glass">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-heading">Let&apos;s build something meaningful.</h2>
            <p className="footer-subtext">Focusing on secure, scalable, real-world digital products.</p>
          </div>

          <div className="footer-socials">
            <a href="mailto:namansharma.work.in@gmail.com" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com/namanguru123" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/naman-sharma-a9a606216/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Naman Sharma. All rights reserved.</p>
          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
