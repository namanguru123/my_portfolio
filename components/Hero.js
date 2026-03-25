"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Download } from "lucide-react";
import "./Hero.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // Simple particle background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero-section" id="hero" ref={containerRef}>
      <motion.div className="hero-background" style={{ opacity }}>
        <motion.div className="gradient-sphere blue-sphere" style={{ y: y1 }} />
        <motion.div className="gradient-sphere violet-sphere" style={{ y: y2 }} />
        <canvas ref={canvasRef} className="particle-canvas" />
      </motion.div>

      <div className="container hero-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="hero-content"
        >
          <motion.div 
            variants={itemReveal}
            className="hero-badge glass"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal size={14} className="badge-icon" />
            <span>Naman Sharma &mdash; Full Stack Developer</span>
          </motion.div>

          <motion.h1 
            variants={itemReveal}
            className="hero-headline"
          >
            I build <span className="gradient-text">secure, scalable</span> digital products that solve real-world problems.
          </motion.h1>

          <motion.p 
            variants={itemReveal}
            className="hero-subtext"
          >
            Full Stack MERN Developer specializing in modern web apps, authentication systems, and product-driven development.
          </motion.p>

          <motion.div 
            variants={itemReveal}
            className="hero-cta-group"
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary btn-large cta-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(62, 139, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="/resume.pdf" download="Naman_Sharma_Resume.pdf"
              className="btn btn-secondary btn-large"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} style={{marginRight: '0.5rem'}} />
              Resume
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary btn-large"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
