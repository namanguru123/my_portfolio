"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, ChevronRight } from "lucide-react";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-grid">
          
          {/* Experience Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="experience-column"
          >
            <div className="column-header">
              <Briefcase className="column-icon" size={28} />
              <h2 className="column-title">Experience</h2>
            </div>
            
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="role-title">Technical Executive</h3>
                <p className="role-company">ACM Student Chapter</p>
                <ul className="role-achievements">
                  <li>
                    <ChevronRight size={14} className="list-icon" />
                    Built frontend architecture for the university event platform
                  </li>
                  <li>
                    <ChevronRight size={14} className="list-icon" />
                    Improved user engagement metrics by 15% through UI optimizations
                  </li>
                  <li>
                    <ChevronRight size={14} className="list-icon" />
                    Collaborated in a fast-paced team environment
                  </li>
                  <li>
                    <ChevronRight size={14} className="list-icon" />
                    Focused on continuous debugging & performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Current Focus Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="experience-column focus-column"
          >
            <div className="column-header">
              <Target className="column-icon focus-icon" size={28} />
              <h2 className="column-title">Current Focus</h2>
            </div>
            
            <div className="focus-card glass-card">
              <h3 className="focus-heading">What I&apos;m Building Now</h3>
              <p className="focus-desc">
                Currently dedicating my time to scaling <strong>AfterUs</strong> from a project into a comprehensive digital legacy product.
              </p>
              
              <div className="focus-areas">
                <div className="focus-area-item">
                  <div className="focus-area-orb"></div>
                  <span>Advanced Security Systems</span>
                </div>
                <div className="focus-area-item">
                  <div className="focus-area-orb"></div>
                  <span>Conditional Logic Engines</span>
                </div>
                <div className="focus-area-item">
                  <div className="focus-area-orb"></div>
                  <span>Scalable Backend Architecture</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
