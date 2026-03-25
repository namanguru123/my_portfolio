"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("project-card")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: mousePosition.x === -100 ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(139, 92, 246, 0.8)" : "rgba(62, 139, 255, 0.5)",
          backgroundColor: isHovering ? "rgba(139, 92, 246, 0.1)" : "transparent",
          opacity: mousePosition.x === -100 ? 0 : 1
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />
    </>
  );
}
