import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, HeartPulse, Trophy, Users, FileText, Target } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      title: 'Commenced B.Tech in CSE (Networks)',
      subtitle: 'Presidency University, Bangalore',
      description: 'Began academic specialization in Computer Science Engineering with a focus on networks, cybersecurity, and communication protocol architectures.',
      icon: <GraduationCap className="w-5 h-5 text-deep-cherry" />,
      tag: 'Academic Foundation'
    },
    {
      title: 'Deep Dive into Artificial Intelligence',
      subtitle: 'Self-Driven Learning Path',
      description: 'Explored Machine Learning pipelines, Deep Learning models, and natural language processing. Mastered model training, prompt engineering, and Whisper AI integration.',
      icon: <Brain className="w-5 h-5 text-deep-cherry" />,
      tag: 'Skill Expansion'
    },
    {
      title: 'Founding Healthcare AI Projects',
      subtitle: 'IoT & Medical Tech',
      description: 'Bridged engineering with healthcare. Built the Smart Pill Dispenser using Arduino C++ and researched AI models for predictive diagnostics and medical imaging.',
      icon: <HeartPulse className="w-5 h-5 text-deep-cherry" />,
      tag: 'Project Focus'
    },
    {
      title: 'Hackathon Competing & Rapid Prototyping',
      subtitle: 'Innovating Under Time Constraints',
      description: 'Participated in intense hackathons, developing Sethu (an AI crisis detection and missing persons framework) and IoT monitoring rigs from concept to working model.',
      icon: <Trophy className="w-5 h-5 text-deep-cherry" />,
      tag: 'Competitions'
    },
    {
      title: 'Student Leadership & Collaboration',
      subtitle: 'Orchestrating Tech Teams',
      description: 'Led technical groups, managed repositories, coordinated timelines, and delivered pitch decks during system design contests and academic assemblies.',
      icon: <Users className="w-5 h-5 text-deep-cherry" />,
      tag: 'Leadership'
    },
    {
      title: 'Academic Research & Literature Study',
      subtitle: 'AI & Network Security Focus',
      description: 'Researched Medical Image Analysis, Edge computing architectures, and cryptographic structures to secure private healthcare records over cloud infrastructure.',
      icon: <FileText className="w-5 h-5 text-deep-cherry" />,
      tag: 'Research Interest'
    },
    {
      title: 'Future Horizons & Collaboration',
      subtitle: 'Internships & Deep Research',
      description: 'Preparing for research collaborations, corporate AI internships, and building open-source systems that deliver real, measurable human benefits.',
      icon: <Target className="w-5 h-5 text-deep-cherry" />,
      tag: 'Vision'
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Vertical center bar for large screens, side bar for small screens */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-rich-charcoal/10 -translate-x-1/2" />

      <div className="space-y-12">
        {milestones.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-start md:items-center relative ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-8 md:left-1/2 top-1.5 md:top-auto w-10 h-10 rounded-full bg-warm-ivory border-2 border-deep-cherry flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                <div className="p-1 bg-soft-blush rounded-full">
                  {item.icon}
                </div>
              </div>

              {/* Empty spacing for desktop alignment */}
              <div className="hidden md:block w-1/2" />

              {/* Timeline Card */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[44%] pl-16 md:pl-0"
              >
                <div className="p-6 bg-white border border-rich-charcoal/10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
                  {/* Subtle edge highlight on hover */}
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-deep-cherry rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Pill Tag */}
                  <span className="inline-block px-3 py-1 bg-soft-blush border border-deep-cherry/10 text-[10px] font-semibold text-deep-cherry rounded-full uppercase tracking-wider mb-3">
                    {item.tag}
                  </span>

                  <h3 className="font-display font-bold text-lg text-rich-charcoal">
                    {item.title}
                  </h3>
                  
                  <span className="block text-xs font-medium text-rich-charcoal/60 mb-3 italic">
                    {item.subtitle}
                  </span>

                  <p className="text-sm text-rich-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
