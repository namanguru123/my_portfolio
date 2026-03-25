"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import "./Navbar.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar ${isScrolled ? "navbar-scrolled glass" : ""}`}
    >
      <div className="container navbar-container">
        <Link href="/" className="logo group">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name group-hover:gradient-text transition-all">Naman</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              whileHover={{ scale: 1.05, color: "var(--foreground)" }}
            >
              {link.name}
            </motion.a>
          ))}
          <a href="#projects" className="btn btn-primary ml-4" style={{marginLeft: '1rem'}}>
            View Work
          </a>
          <a href="/resume.pdf" download="Naman_Sharma_Resume.pdf" className="btn btn-secondary" style={{marginLeft: '0.5rem'}}>
            <Download size={16} style={{marginRight: '0.4rem'}} /> Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu glass"
          >
            <div className="mobile-menu-inner border-b border-[var(--glass-border)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary" 
                style={{width: '100%', marginTop: '1rem'}}
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </a>
              <a 
                href="/resume.pdf" download="Naman_Sharma_Resume.pdf"
                className="btn btn-secondary" 
                style={{width: '100%', marginTop: '0.5rem'}}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={18} style={{marginRight: '0.4rem'}} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
