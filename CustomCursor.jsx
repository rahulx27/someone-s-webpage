import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Show cursor on mousemove
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Apply custom cursor-active class to body
    document.body.classList.add('custom-cursor-active');

    // Attach listeners to interactive elements to scale cursor
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.spotlight-card') ||
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA';

      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-deep-cherry pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? 'rgba(122, 28, 28, 0.05)' : 'rgba(122, 28, 28, 0)',
          borderColor: hovered ? '#7A1C1C' : 'rgba(122, 28, 28, 0.5)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-deep-cherry rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
          backgroundColor: hovered ? '#4A1016' : '#7A1C1C',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />
    </>
  );
}
