import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoCard from './BentoCard';
import { ArrowUpRight, Github, Code, HeartPulse, ShieldAlert, Trash2, Bot, Layers } from 'lucide-react';

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Projects', id: 'all' },
    { label: 'AI & Computer Vision', id: 'ai' },
    { label: 'IoT & Embedded', id: 'iot' },
    { label: 'Web & Chatbots', id: 'web' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Smart Pill Dispenser',
      category: 'iot',
      badge: 'Healthcare IoT',
      description: 'An automated medicine scheduling system designed to assist patients in taking their prescriptions on time. Features real-time tracking, sound alerts, and servo-motor container controls.',
      tech: ['Arduino', 'Embedded Systems', 'C++'],
      colSpan: 'md:col-span-7',
      links: { demo: '#', github: '#' },
      icon: <HeartPulse className="w-5 h-5 text-deep-cherry" />,
      svgThumbnail: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover text-deep-cherry/80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill="#FFF2F2" />
          <circle cx="200" cy="120" r="70" stroke="#7A1C1C" strokeWidth="2" strokeDasharray="6 4" className="animate-spin" style={{ transformOrigin: '200px 120px', animationDuration: '20s' }} />
          <circle cx="200" cy="120" r="50" fill="#FFFFFF" stroke="#DCAEAF" strokeWidth="1.5" />
          {/* Servo slots */}
          <line x1="200" y1="70" x2="200" y2="170" stroke="#7A1C1C" strokeWidth="2" />
          <line x1="150" y1="120" x2="250" y2="120" stroke="#7A1C1C" strokeWidth="2" />
          <circle cx="200" cy="120" r="12" fill="#7A1C1C" />
          {/* LCD screen wireframe */}
          <rect x="20" y="20" width="100" height="40" rx="8" fill="#FFFFFF" stroke="#33251E" strokeWidth="1" />
          <rect x="28" y="28" width="84" height="24" rx="4" fill="#F5EFEB" />
          <text x="36" y="44" fill="#7A1C1C" fontSize="10" fontFamily="monospace" fontWeight="bold">12:00 PM</text>
          {/* Status Indicator */}
          <circle cx="360" cy="40" r="6" fill="#10B981" className="animate-pulse" />
          <text x="310" y="43" fill="#33251E" fontSize="9" fontFamily="sans-serif">System Ready</text>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Sethu',
      category: 'ai',
      badge: 'AI Crisis Response',
      description: 'An AI-powered framework designed to identify and track missing individuals in real-time. Leverages deep facial recognition, geographic heatmaps, and automatic distress broadcast nodes.',
      tech: ['AI', 'Computer Vision', 'React', 'Python'],
      colSpan: 'md:col-span-5',
      links: { demo: '#', github: '#' },
      icon: <ShieldAlert className="w-5 h-5 text-deep-cherry" />,
      svgThumbnail: (
        <svg viewBox="0 0 300 240" className="w-full h-full object-cover text-deep-cherry/80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" rx="16" fill="#F5EFEB" />
          {/* Grid lines */}
          <path d="M0 40H300M0 80H300M0 120H300M0 160H300M0 200H300" stroke="#DCAEAF" strokeWidth="0.5" opacity="0.3" />
          <path d="M60 0V240M120 0V240M180 0V240M240 0V240" stroke="#DCAEAF" strokeWidth="0.5" opacity="0.3" />
          {/* Radar sweep */}
          <circle cx="150" cy="120" r="80" stroke="#7A1C1C" strokeWidth="1" opacity="0.2" />
          <circle cx="150" cy="120" r="40" stroke="#7A1C1C" strokeWidth="1" opacity="0.4" />
          <line x1="150" y1="120" x2="210" y2="65" stroke="#7A1C1C" strokeWidth="1.5" strokeLinecap="round" className="origin-center" style={{ transformOrigin: '150px 120px' }}>
            <animateTransform attributeName="transform" type="rotate" from="0 150 120" to="360 150 120" dur="5s" repeatCount="indefinite" />
          </line>
          {/* Map pins */}
          <circle cx="120" cy="90" r="6" fill="#7A1C1C" />
          <circle cx="120" cy="90" r="14" stroke="#7A1C1C" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ transformOrigin: '120px 90px', animationDuration: '3s' }} />
          <circle cx="180" cy="150" r="6" fill="#7A1C1C" />
          <circle cx="180" cy="150" r="14" stroke="#7A1C1C" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ transformOrigin: '180px 150px', animationDuration: '2.5s' }} />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Smart Waste Monitoring',
      category: 'iot',
      badge: 'Smart Cities & IoT',
      description: 'IoT-enabled refuse bin system utilizing ultrasonic sensors and microcontrollers to transmit real-time fill capacity telemetry to city planning dashboards.',
      tech: ['Arduino', 'Ultrasonic Sensors', 'C++'],
      colSpan: 'md:col-span-5',
      links: { demo: '#', github: '#' },
      icon: <Trash2 className="w-5 h-5 text-deep-cherry" />,
      svgThumbnail: (
        <svg viewBox="0 0 300 240" className="w-full h-full object-cover text-deep-cherry/80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="240" rx="16" fill="#F5EFEB" />
          {/* Canister outline */}
          <rect x="100" y="60" width="100" height="130" rx="12" stroke="#33251E" strokeWidth="2" fill="#FFFFFF" />
          {/* Fill level */}
          <rect x="104" y="110" width="92" height="76" rx="8" fill="#DCAEAF" opacity="0.6" />
          {/* Sensor beam */}
          <path d="M130 50 L130 110 M170 50 L170 110" stroke="#7A1C1C" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse" />
          <rect x="120" y="35" width="60" height="15" rx="4" fill="#7A1C1C" />
          {/* Status badge */}
          <rect x="125" y="130" width="50" height="20" rx="4" fill="#7A1C1C" />
          <text x="135" y="143" fill="#FCFAF7" fontSize="8" fontWeight="bold" fontFamily="sans-serif">68% FULL</text>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Presidency FAQ Chatbot',
      category: 'web',
      badge: 'Conversational AI',
      description: 'A contextual chatbot trained on academic parameters to assist university students and parents with schedules, fee queries, and admissions routing.',
      tech: ['LLMs', 'Python', 'React', 'FastAPI'],
      colSpan: 'md:col-span-7',
      links: { demo: '#', github: '#' },
      icon: <Bot className="w-5 h-5 text-deep-cherry" />,
      svgThumbnail: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover text-deep-cherry/80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" rx="16" fill="#FFF2F2" />
          {/* Chat mock */}
          <rect x="30" y="30" width="220" height="40" rx="12" fill="#FFFFFF" stroke="#DCAEAF" strokeWidth="1" />
          <text x="45" y="54" fill="#33251E" fontSize="9" fontFamily="sans-serif">How do I access the library catalog?</text>
          
          <rect x="150" y="85" width="220" height="50" rx="12" fill="#7A1C1C" />
          <text x="165" y="105" fill="#FCFAF7" fontSize="9" fontFamily="sans-serif" fontWeight="500">You can use your student credentials to log</text>
          <text x="165" y="120" fill="#FCFAF7" fontSize="9" fontFamily="sans-serif" fontWeight="500">in to the OPAC portal online at...</text>
          
          <rect x="30" y="150" width="140" height="35" rx="12" fill="#FFFFFF" stroke="#DCAEAF" strokeWidth="1" />
          <circle cx="50" cy="168" r="3" fill="#7A1C1C" className="animate-bounce" style={{ animationDelay: '0s' }} />
          <circle cx="60" cy="168" r="3" fill="#7A1C1C" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
          <circle cx="70" cy="168" r="3" fill="#7A1C1C" className="animate-bounce" style={{ animationDelay: '0.4s' }} />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Aura Portal Framework',
      category: 'web',
      badge: 'Interactive Design',
      description: 'A premium portfolio architecture integrating hardware telemetry simulations, custom-tuned animations, dark-mode overlays, and structured SEO systems.',
      tech: ['React', 'Vite', 'Framer Motion', 'TailwindCSS'],
      colSpan: 'md:col-span-12',
      links: { demo: '#', github: '#' },
      icon: <Layers className="w-5 h-5 text-deep-cherry" />,
      svgThumbnail: (
        <svg viewBox="0 0 800 240" className="w-full h-full object-cover text-deep-cherry/80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="240" rx="16" fill="#F5EFEB" />
          {/* Layout frame */}
          <rect x="40" y="30" width="720" height="180" rx="8" fill="#FFFFFF" stroke="#DCAEAF" strokeWidth="1" />
          {/* Hero header */}
          <rect x="70" y="60" width="300" height="20" rx="4" fill="#7A1C1C" />
          <rect x="70" y="90" width="220" height="12" rx="3" fill="#DCAEAF" />
          <rect x="70" y="110" width="240" height="12" rx="3" fill="#DCAEAF" />
          {/* Small bento mockups */}
          <rect x="480" y="55" width="110" height="130" rx="8" fill="#FFF2F2" stroke="#7A1C1C" strokeWidth="1" />
          <rect x="610" y="55" width="110" height="60" rx="8" fill="#FFFFFF" stroke="#33251E" strokeWidth="0.5" />
          <rect x="610" y="125" width="110" height="60" rx="8" fill="#7A1C1C" opacity="0.8" />
        </svg>
      )
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Dynamic Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
              activeFilter === filter.id
                ? 'bg-deep-cherry border-deep-cherry text-warm-ivory shadow-sm'
                : 'bg-white border-rich-charcoal/10 hover:border-deep-cherry text-rich-charcoal/70 hover:text-deep-cherry'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Bento Grid Gallery */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${project.colSpan}`}
            >
              <BentoCard className="h-full flex flex-col justify-between" delay={0.05 * idx}>
                {/* Project Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 bg-soft-blush border border-deep-cherry/10 text-[10px] font-bold text-deep-cherry rounded-full uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.links.github}
                        className="p-2 hover:bg-soft-blush rounded-full text-rich-charcoal/70 hover:text-deep-cherry transition-colors"
                        title="View Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.links.demo}
                        className="p-2 hover:bg-soft-blush rounded-full text-rich-charcoal/70 hover:text-deep-cherry transition-colors"
                        title="Live Demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <h3 className="font-display font-bold text-xl text-rich-charcoal">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-rich-charcoal/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Vector Visual Thumbnail & Tech Badges */}
                <div className="mt-6 space-y-6">
                  <div className="rounded-2xl overflow-hidden border border-rich-charcoal/5 shadow-inner">
                    {project.svgThumbnail}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-rich-charcoal/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-warm-beige text-[10px] font-bold text-rich-charcoal/80 rounded-md border border-rich-charcoal/5"
                      >
                        <Code className="w-3 h-3 text-deep-cherry/70" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
