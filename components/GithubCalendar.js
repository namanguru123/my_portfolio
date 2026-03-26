"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);
import "./GithubCalendar.css"; // Ensure it has some local aesthetic alignment

export default function GithubContributionCalendar() {
  // An elegant custom orange/amber scale moving from light to saturated
  const theme = {
    light: ["#f3f4f6", "#fde68a", "#f59e0b", "#ea580c", "#9a3412"],
  };

  return (
    <motion.div
      className="github-calendar-wrapper glass-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="github-title">
        Days I <span className="gradient-text">Code</span>.
      </h3>
      <div className="calendar-container">
        <GitHubCalendar
          username="namanguru123"
          year={2026}
          colorScheme="light"
          theme={theme}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </motion.div>
  );
}
