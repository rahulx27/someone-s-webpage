import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './BentoCard';
import { Cpu, Globe, Brain, Terminal } from 'lucide-react';

export default function SkillPills() {
  const allSkills = [
    'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'C',
    'Machine Learning', 'Deep Learning', 'TensorFlow', 'Whisper AI', 'Computer Vision',
    'Prompt Engineering', 'TCP/IP', 'Network Security', 'Cloud Computing', 'Cybersecurity',
    'IoT', 'Arduino', 'Git', 'GitHub', 'React', 'Vite', 'TailwindCSS', 'Node.js',
    'Problem Solving', 'Leadership'
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-5 h-5 text-deep-cherry" />,
      skills: ['Python', 'Java', 'JavaScript', 'C', 'HTML', 'CSS']
    },
    {
      title: 'Artificial Intelligence',
      icon: <Brain className="w-5 h-5 text-deep-cherry" />,
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Whisper AI', 'Computer Vision', 'Prompt Engineering']
    },
    {
      title: 'Networking & Security',
      icon: <Globe className="w-5 h-5 text-deep-cherry" />,
      skills: ['TCP/IP', 'Network Security', 'Cloud Computing', 'Cybersecurity']
    },
    {
      title: 'IoT & Web Ecosystem',
      icon: <Cpu className="w-5 h-5 text-deep-cherry" />,
      skills: ['Arduino', 'React', 'Vite', 'TailwindCSS', 'Node.js', 'Git', 'GitHub', 'Problem Solving', 'Leadership']
    }
  ];

  // Double the list for infinite scroll effect in marquee
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <div className="space-y-12">
      {/* Premium Infinite Skills Marquee */}
      <div className="relative w-full overflow-hidden py-4 border-y border-rich-charcoal/10 bg-warm-beige/30">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-ivory to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-8 w-max pl-4"
          animate={{ x: [0, -1000] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {marqueeSkills.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="text-sm font-display font-medium uppercase tracking-wider text-rich-charcoal/60 hover:text-deep-cherry transition-colors cursor-default"
            >
              {skill} &bull;
            </span>
          ))}
        </motion.div>
      </div>

      {/* Categorized Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <BentoCard key={category.title} delay={idx * 0.1} className="h-full">
            <div className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-soft-blush rounded-xl border border-deep-cherry/10">
                  {category.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-rich-charcoal">
                  {category.title}
                </h4>
              </div>

              {/* Skill Pills Container */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * skillIdx, type: 'spring', stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: '#7A1C1C', 
                      color: '#FCFAF7',
                      borderColor: '#7A1C1C',
                      boxShadow: '0 4px 12px rgba(122, 28, 28, 0.15)'
                    }}
                    className="px-4 py-2 bg-warm-ivory text-rich-charcoal border border-rich-charcoal/10 rounded-full text-xs font-medium transition-all duration-300 cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
}
