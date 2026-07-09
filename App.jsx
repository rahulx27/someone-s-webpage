import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowRight, ArrowUp, Download, Eye, MapPin, CheckCircle, 
  Sparkles, ShieldCheck, Cpu, Code2, Globe2, Award, BookOpen, 
  Lightbulb, Zap, HelpCircle, GraduationCap, Network, Activity
} from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import BentoCard from './components/BentoCard';
import SkillPills from './components/SkillPills';
import ProjectGallery from './components/ProjectGallery';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewWorkClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { value: '2nd Year', label: 'CSE (Networks) Student' },
    { value: 'Healthcare AI', label: 'Focus & Passion' },
    { value: '5+ IoT', label: 'Completed Projects' },
    { value: 'Hackathons', label: 'Active Competitor' },
    { value: 'Leadership', label: 'Team Facilitator' }
  ];

  const achievements = [
    {
      title: 'Hackathons',
      description: 'Competed in and pitched prototypes at top regional hackathons, specializing in IoT assemblies and rapid AI deployments.',
      icon: <Zap className="w-5 h-5 text-deep-cherry" />
    },
    {
      title: 'Leadership',
      description: 'Coordinated technical assemblies and Git workflows for development squads in academic and competitive environments.',
      icon: <Network className="w-5 h-5 text-deep-cherry" />
    },
    {
      title: 'Technical Workshops',
      description: 'Instructed peers in fundamental network packet routing structures and local database integration practices.',
      icon: <Code2 className="w-5 h-5 text-deep-cherry" />
    },
    {
      title: 'Azure AI Fundamentals',
      description: 'Earned the Microsoft AI-900 certification, establishing core competencies in cloud machine learning models and cognitive resources.',
      icon: <Award className="w-5 h-5 text-deep-cherry" />
    },
    {
      title: 'Industrial Visits',
      description: 'Visited enterprise technology headquarters to study large-scale network infrastructure configurations and cloud center models.',
      icon: <Globe2 className="w-5 h-5 text-deep-cherry" />
    },
    {
      title: 'Continuous Learning',
      description: 'Actively participating in specialized curricula involving prompt engineering, natural language parsing, and micro-controller rigs.',
      icon: <BookOpen className="w-5 h-5 text-deep-cherry" />
    }
  ];

  const researchInterests = [
    { name: 'Artificial Intelligence', desc: 'Neural modeling and predictive automation architectures.' },
    { name: 'Healthcare AI', desc: 'Deploying intelligence to diagnostics and therapeutic scheduling.' },
    { name: 'Medical Image Analysis', desc: 'Utilizing vision pipelines to extract anomalies from CT/MRI inputs.' },
    { name: 'Digital Health', desc: 'Secure, distributed medical logging and telemetry infrastructures.' },
    { name: 'Edge AI', desc: 'Compiling lightweight ML models to run directly on localized devices.' },
    { name: 'Cybersecurity', desc: 'Hardening cloud networks against cryptographic vulnerability routes.' },
    { name: 'Cloud Infrastructure', desc: 'Establishing robust container orchestration and virtual computing setups.' },
    { name: 'Human Computer Interaction', desc: 'Designing natural interfaces that simplify network and IoT complexity.' },
    { name: 'Generative AI', desc: 'Expanding LLM prompt pipelines and parsing contextual metadata.' },
    { name: 'Future of Intelligent Systems', desc: 'Studying autonomous reasoning networks and adaptive systems.' }
  ];

  return (
    <div className="relative min-h-screen selection:bg-deep-cherry/10 selection:text-deep-cherry">
      <CustomCursor />
      
      {/* Top scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-deep-cherry origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Background Animated Blob Layer */}
      <div className="gradient-mesh">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 overflow-visible">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center py-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-soft-blush border border-deep-cherry/10 rounded-full text-xs font-semibold text-deep-cherry uppercase tracking-wider shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Designing Solutions, Building Impact</span>
              </motion.div>

              {/* Title */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-rich-charcoal leading-[1.1]"
                >
                  Building AI that solves <br />
                  <span className="text-deep-cherry italic">real human</span> problems.
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg font-medium text-rich-charcoal/80 leading-relaxed font-sans max-w-xl"
                >
                  Computer Science Engineering (Networks) student passionate about Artificial Intelligence, Healthcare Technology, Cybersecurity, Cloud Computing and Human-Centered Design.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-sm sm:text-base text-rich-charcoal/60 leading-relaxed max-w-xl"
                >
                  I enjoy transforming complex ideas into impactful digital products. From AI-powered healthcare systems to IoT automation and public safety platforms, I love creating technology that improves everyday lives.
                </motion.p>
              </div>

              {/* Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="#projects"
                  onClick={handleViewWorkClick}
                  className="px-6 py-3.5 bg-deep-cherry hover:bg-muted-burgundy text-warm-ivory text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] flex items-center gap-2 group"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/resume.txt"
                  download="Tharun_P_Resume.txt"
                  className="px-6 py-3.5 bg-white border border-rich-charcoal/10 hover:border-deep-cherry text-rich-charcoal hover:text-deep-cherry text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <Download className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Stats Counters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-rich-charcoal/10"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-display font-extrabold text-xl text-deep-cherry block">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-semibold text-rich-charcoal/50 uppercase tracking-wider block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Decorative Mockups */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-sm aspect-square bg-white border border-rich-charcoal/10 rounded-[32px] p-6 shadow-sm relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Visual grid backgrounds */}
                <div className="absolute inset-0 bg-[radial-gradient(#E8DED1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-10" />
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-soft-blush rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 -z-10 group-hover:scale-110 transition-transform duration-700" />
                
                {/* Floating telemetry HUD elements */}
                <div className="flex items-center justify-between border-b border-rich-charcoal/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-deep-cherry animate-pulse" />
                    <span className="font-mono text-[10px] text-rich-charcoal/70 tracking-widest uppercase">System Telemetry</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Main HUD vector art */}
                <div className="py-6 flex items-center justify-center relative">
                  <svg className="w-36 h-36 text-rich-charcoal/80 group-hover:text-deep-cherry transition-colors duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                    <path d="M10 50 H90 M50 10 V90" stroke="currentColor" strokeWidth="0.25" opacity="0.3" />
                    {/* Sine wave heartbeat */}
                    <path d="M20 50 H35 L40 30 L45 70 L50 45 L55 52 L60 50 H80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="40" cy="30" r="2.5" fill="#7A1C1C" />
                    <circle cx="45" cy="70" r="2.5" fill="#7A1C1C" />
                  </svg>
                  
                  {/* Small floating UI tags */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-2 left-0 bg-white border border-rich-charcoal/10 px-3 py-1.5 rounded-full shadow-sm text-[9px] font-mono text-rich-charcoal/80"
                  >
                    AI Engine // Active
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-4 right-2 bg-white border border-rich-charcoal/10 px-3 py-1.5 rounded-full shadow-sm text-[9px] font-mono text-rich-charcoal/80"
                  >
                    IoT Network // Synced
                  </motion.div>
                </div>

                {/* Footer panel inside mock */}
                <div className="border-t border-rich-charcoal/10 pt-4 flex items-center justify-between text-[9px] font-mono text-rich-charcoal/50">
                  <span>PRESET: HEALTH_SYS</span>
                  <span>VER 4.0.9</span>
                </div>
              </motion.div>
            </div>
            
          </div>
        </section>

        {/* ABOUT IDENTITY */}
        <section id="about" className="py-24 border-t border-rich-charcoal/10">
          <div className="space-y-16">
            {/* Header */}
            <div>
              <span className="text-[11px] font-semibold text-deep-cherry uppercase tracking-widest block mb-2">01 // Identity Matrix</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-rich-charcoal">
                Philosophy & Technical Focus
              </h2>
            </div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Profile Bio Card (7 Columns) */}
              <div className="lg:col-span-7 flex flex-col">
                <BentoCard className="h-full flex flex-col justify-between" delay={0.1}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-deep-cherry" />
                      <span className="font-mono text-xs text-rich-charcoal/50 uppercase tracking-widest">Education & Drive</span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-rich-charcoal leading-snug">
                      Intersecting networking algorithms with intelligent medical systems.
                    </h3>

                    <div className="space-y-4 text-sm text-rich-charcoal/70 leading-relaxed font-sans">
                      <p>
                        Currently pursuing a B.Tech in Computer Science Engineering (Networks) at Presidency University in Bangalore, I focus on the critical points where connectivity, machine intelligence, and security overlap.
                      </p>
                      <p>
                        My focus is on healthcare technology, specifically applying computer vision and deep learning pipelines to medical image analysis. I believe that engineering is at its best when it solves real human crises, whether that means securing cloud networks or automating healthcare scheduling.
                      </p>
                      <p>
                        I work to maintain a balance between technical discipline and human-centered design. Every system I construct is built with safety, scale, and the end-user in mind.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-rich-charcoal/5 flex flex-wrap gap-4 text-xs font-mono text-rich-charcoal/60">
                    <div>
                      <span className="font-bold text-rich-charcoal block">Location:</span>
                      <span>Bangalore, India</span>
                    </div>
                    <div>
                      <span className="font-bold text-rich-charcoal block">Affiliation:</span>
                      <span>Presidency University</span>
                    </div>
                  </div>
                </BentoCard>
              </div>

              {/* Portrait Placeholder Card (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col">
                <BentoCard className="h-full flex flex-col justify-between bg-white text-rich-charcoal" delay={0.2}>
                  <div className="space-y-6">
                    {/* Portrait Abstract Illustration */}
                    <div className="aspect-[4/3] rounded-2xl bg-soft-blush border border-deep-cherry/10 flex items-center justify-center overflow-hidden relative group">
                      <div className="absolute inset-0 bg-[radial-gradient(#7A1C1C_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                      
                      {/* Premium abstract sketch mockup */}
                      <svg className="w-24 h-24 text-deep-cherry opacity-85 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M20 80 C20 60, 30 55, 50 55 C70 55, 80 60, 80 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
                      </svg>

                      {/* Small status tag */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-deep-cherry/10 flex items-center gap-1.5 shadow-sm text-[9px] font-semibold text-rich-charcoal">
                        <MapPin className="w-3 h-3 text-deep-cherry" />
                        <span>Presidency University, BLR</span>
                      </div>
                    </div>

                    {/* Status Info */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-lg text-rich-charcoal">
                        Status & Collaboration
                      </h4>
                      <p className="text-xs text-rich-charcoal/60 leading-relaxed">
                        Actively seeking internships, scientific collaborations, and hackathon networks. I am always open to discussions regarding AI deployments in biomedical environments or cloud networking architectures.
                      </p>
                    </div>
                  </div>

                  {/* List of interests/status badges */}
                  <div className="mt-6 space-y-2 pt-6 border-t border-rich-charcoal/5">
                    {[
                      'Open to Internships',
                      'Hackathons & Competitions',
                      'Collaborative Research',
                      'IoT / Network Prototyping'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-semibold text-rich-charcoal/80">
                        <CheckCircle className="w-4 h-4 text-deep-cherry flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </BentoCard>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-rich-charcoal/10">
          <div className="space-y-16">
            <div>
              <span className="text-[11px] font-semibold text-deep-cherry uppercase tracking-widest block mb-2">02 // Selected Works</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-rich-charcoal">
                Impact-Driven Technology
              </h2>
            </div>

            <ProjectGallery />
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section id="experience" className="py-24 border-t border-rich-charcoal/10">
          <div className="space-y-16">
            <div className="text-center">
              <span className="text-[11px] font-semibold text-deep-cherry uppercase tracking-widest block mb-2">03 // Engineering Journey</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-rich-charcoal">
                Milestones & Development
              </h2>
            </div>

            <Timeline />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 border-t border-rich-charcoal/10">
          <div className="space-y-16">
            <div>
              <span className="text-[11px] font-semibold text-deep-cherry uppercase tracking-widest block mb-2">04 // Skill Index</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-rich-charcoal">
                Technical Stack & Capability
              </h2>
            </div>

            <SkillPills />
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="py-24 border-t border-rich-charcoal/10">
          <div className="space-y-16">
            <div>
              <span className="text-[11px] font-semibold text-deep-cherry uppercase tracking-widest block mb-2">05 // Distinctions</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-rich-charcoal">
                Achievements & Key Activities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, idx) => (
                <BentoCard key={idx} delay={idx * 0.05} className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 bg-soft-blush border border-deep-cherry/10 rounded-2xl w-max">
                      {item.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-rich-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-sm text-rich-charcoal/70 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </BentoCard>
              ))}
            </div>
          </div>
        </section>

        {/* RESEARCH INTERESTS */}
        <section id="research" className="py-24 border-t border-rich-charcoal/10">
          <div className="space-y-16">
            <div>
              <span className="text-[11px] font-semibold text-deep-cherry uppercase tracking-widest block mb-2">06 // Academic Focus</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-rich-charcoal">
                Research Fields & Inquiries
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {researchInterests.map((interest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03, duration: 0.4 }}
                  whileHover={{ y: -4, borderColor: '#7A1C1C', boxShadow: '0 8px 24px rgba(122, 28, 28, 0.05)' }}
                  className="p-5 bg-white border border-rich-charcoal/10 rounded-2xl flex flex-col justify-between transition-all duration-300 group"
                >
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm text-rich-charcoal group-hover:text-deep-cherry transition-colors">
                      {interest.name}
                    </h4>
                    <p className="text-[11px] text-rich-charcoal/60 leading-relaxed">
                      {interest.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT TERMINAL */}
        <section id="contact" className="py-24 border-t border-rich-charcoal/10">
          <div className="space-y-12 text-center">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold text-deep-cherry uppercase tracking-widest block">07 // Transmission Channel</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-rich-charcoal">
                Let's Build Something Meaningful
              </h2>
              <p className="text-sm text-rich-charcoal/60 max-w-md mx-auto">
                Have a proposal, project cooperation offer, or internship inquiry? Submit a message below to establish contact.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-rich-charcoal/10 pt-12 pb-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-rich-charcoal/60">
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <p className="font-semibold text-rich-charcoal uppercase tracking-wider">
              &copy; 2026 Tharun P.
            </p>
            <p>Designed & Developed with ❤️</p>
          </div>

          {/* Scroll to Top button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="p-3 bg-white hover:bg-soft-blush border border-rich-charcoal/10 hover:border-deep-cherry text-rich-charcoal hover:text-deep-cherry rounded-full transition-all duration-300 shadow-sm focus:outline-none"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </footer>

      </main>
    </div>
  );
}
