import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll helper
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 nav-blur shadow-sm'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Home page"
          >
            <div className="w-10 h-10 rounded-full border-2 border-deep-cherry flex items-center justify-center font-display font-bold text-lg text-deep-cherry group-hover:bg-deep-cherry group-hover:text-warm-ivory transition-all duration-300">
              TP
            </div>
            <span className="font-display font-medium text-sm tracking-widest text-rich-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
              THARUN P.
            </span>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-semibold uppercase tracking-wider text-rich-charcoal/70 hover:text-deep-cherry transition-colors duration-250 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-deep-cherry transition-all duration-350 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Resume CTA (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="/resume.txt"
              download="Tharun_P_Resume.txt"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-deep-cherry hover:bg-muted-burgundy text-warm-ivory text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-1px]"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Hamburger Menu Icon (Mobile/Tablet) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-rich-charcoal hover:text-deep-cherry focus:outline-none z-50 relative"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 w-full h-screen bg-warm-ivory/98 z-30 flex flex-col justify-center px-12 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-3xl font-display font-semibold mb-12">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-rich-charcoal hover:text-deep-cherry transition-colors border-b border-rich-charcoal/10 pb-2 text-left"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 border-t border-rich-charcoal/10 pt-8"
            >
              <a
                href="/resume.txt"
                download="Tharun_P_Resume.txt"
                className="w-full flex items-center justify-center gap-2 py-4 bg-deep-cherry text-warm-ivory font-display font-medium rounded-2xl uppercase tracking-wider text-sm shadow-sm"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-rich-charcoal/50 text-center font-mono">
                THARUN P &copy; 2026 // AI & SOFTWARE ENGINEERING
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
