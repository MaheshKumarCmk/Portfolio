import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Download,
  Zap,
  Layers,
  Power,
  Award
} from 'lucide-react';
import CircuitBackground from './components/CircuitBackground';
import { 
  PERSONAL_INFO, 
  EXPERIENCE, 
  PROJECTS, 
  SKILLS, 
  EDUCATION, 
  CERTIFICATIONS 
} from './constants';

// --- Microchip Component ---

interface MicrochipProps {
  onClick: () => void;
  isBooting: boolean;
}

const Microchip: React.FC<MicrochipProps> = ({ onClick, isBooting }) => {
  return (
    <div 
      className={`relative group cursor-pointer transform transition-all duration-500 ${isBooting ? 'scale-125' : 'hover:scale-105'}`} 
      onClick={!isBooting ? onClick : undefined}
    >
      {/* Outer Glow - Becomes intense when booting */}
      <div className={`absolute -inset-8 rounded-full blur-2xl transition-all duration-500 ${isBooting ? 'bg-white/80 opacity-100 animate-pulse' : 'bg-circuit-accent/20 group-hover:bg-circuit-accent/40 opacity-75'}`}></div>
      
      {/* Additional intense glow layer for boot sequence */}
      <div className={`absolute -inset-20 bg-cyan-400/30 rounded-full blur-3xl transition-opacity duration-300 ${isBooting ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className={`absolute -inset-1 bg-circuit-accent/40 rounded-lg blur-md transition-opacity duration-300 ${isBooting ? 'opacity-0' : 'group-hover:opacity-100 opacity-50'}`}></div>

      {/* The Chip Body */}
      <div className={`relative w-64 h-64 bg-slate-900 border-[6px] transition-colors duration-300 rounded-xl flex flex-col items-center justify-center z-10 overflow-hidden ${isBooting ? 'border-cyan-300 shadow-[0_0_100px_rgba(6,182,212,0.6)]' : 'border-slate-700 shadow-[0_0_50px_rgba(6,182,212,0.2)]'}`}>
        
        {/* Circuit Pattern on Chip Surface */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, #1e293b 1px, transparent 1px),
                 linear-gradient(to bottom, #1e293b 1px, transparent 1px)
               `, 
               backgroundSize: '20px 20px' 
             }}>
        </div>

        {/* Gold Corner Accents - Turn Blue when Booting */}
        <div className={`absolute top-3 left-3 w-3 h-3 rounded-full shadow-inner transition-colors duration-300 ${isBooting ? 'bg-cyan-400 shadow-[0_0_10px_cyan]' : 'bg-yellow-600'}`}></div>
        <div className={`absolute top-3 right-3 w-3 h-3 rounded-full shadow-inner transition-colors duration-300 ${isBooting ? 'bg-cyan-400 shadow-[0_0_10px_cyan]' : 'bg-yellow-600'}`}></div>
        <div className={`absolute bottom-3 left-3 w-3 h-3 rounded-full shadow-inner transition-colors duration-300 ${isBooting ? 'bg-cyan-400 shadow-[0_0_10px_cyan]' : 'bg-yellow-600'}`}></div>
        <div className={`absolute bottom-3 right-3 w-3 h-3 rounded-full shadow-inner transition-colors duration-300 ${isBooting ? 'bg-cyan-400 shadow-[0_0_10px_cyan]' : 'bg-yellow-600'}`}></div>

        {/* Inner Core (Label) */}
        <div className={`w-40 h-40 bg-slate-950 border-2 rounded-lg flex flex-col items-center justify-center relative shadow-inner transition-all duration-300 ${isBooting ? 'border-cyan-400 bg-slate-900' : 'border-slate-800 group-hover:border-circuit-accent/50'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent pointer-events-none"></div>
          
          <h1 className={`relative z-10 text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b tracking-tighter transition-all duration-300 ${isBooting ? 'from-white to-cyan-200 scale-110' : 'from-white to-slate-400 group-hover:from-circuit-accent group-hover:to-circuit-accentGlow'}`}>
            CV
          </h1>
          <div className={`relative z-10 mt-2 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${isBooting ? 'text-white opacity-100' : 'text-circuit-accent opacity-70'}`}>
            <Power className={`w-3 h-3 ${isBooting ? 'animate-spin' : ''}`} />
            {isBooting ? 'BOOTING...' : 'INITIALIZE'}
          </div>
        </div>
        
        {/* Animated Data Lines */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-circuit-accent/50 transition-all duration-300 ${isBooting ? 'h-full opacity-20 animate-pulse' : 'animate-[ping_3s_ease-in-out_infinite]'}`}></div>
      </div>

      {/* Pins - Vertical */}
      {[...Array(8)].map((_, i) => (
        <React.Fragment key={`v-${i}`}>
          <div className="absolute -top-4 left-1/2 w-3 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-sm border border-slate-800" style={{ marginLeft: (i - 3.5) * 20 + 'px', transform: 'translateX(-50%)' }}></div>
          <div className="absolute -bottom-4 left-1/2 w-3 h-6 bg-gradient-to-t from-slate-400 to-slate-600 rounded-sm border border-slate-800" style={{ marginLeft: (i - 3.5) * 20 + 'px', transform: 'translateX(-50%)' }}></div>
        </React.Fragment>
      ))}
      
      {/* Pins - Horizontal */}
      {[...Array(8)].map((_, i) => (
        <React.Fragment key={`h-${i}`}>
          <div className="absolute top-1/2 -left-4 w-6 h-3 bg-gradient-to-r from-slate-400 to-slate-600 rounded-sm border border-slate-800" style={{ marginTop: (i - 3.5) * 20 + 'px', transform: 'translateY(-50%)' }}></div>
          <div className="absolute top-1/2 -right-4 w-6 h-3 bg-gradient-to-l from-slate-400 to-slate-600 rounded-sm border border-slate-800" style={{ marginTop: (i - 3.5) * 20 + 'px', transform: 'translateY(-50%)' }}></div>
        </React.Fragment>
      ))}
    </div>
  );
};

// --- Reusable UI Components ---

const SectionTitle: React.FC<{ children: React.ReactNode; icon: any }> = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
    <div className="p-2 bg-circuit-trace rounded-lg border border-circuit-accent/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
      <Icon className="w-6 h-6 text-circuit-accent" />
    </div>
    <h2 className="text-3xl font-bold font-mono text-gray-100 tracking-tight uppercase">
      {children}
    </h2>
  </div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ scale: 1.005, borderColor: 'rgba(6, 182, 212, 0.5)' }}
    className={`bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl relative overflow-hidden group ${className}`}
  >
    {/* Decorative corner accents */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-circuit-accent opacity-50 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-circuit-accent opacity-50 group-hover:opacity-100 transition-opacity" />
    {children}
  </motion.div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 text-xs font-mono font-medium rounded bg-circuit-accent/5 text-circuit-accentGlow border border-circuit-accent/20 hover:bg-circuit-accent/20 transition-colors">
    {children}
  </span>
);

// --- Main Application ---

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isBooting, setIsBooting] = useState(false);
  const [isSystemReady, setIsSystemReady] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBoot = () => {
    if (isBooting) return;
    setIsBooting(true);
    // Wait for animation to play before showing content
    setTimeout(() => {
      setIsSystemReady(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-circuit-bg text-slate-300 font-sans selection:bg-circuit-accent selection:text-circuit-bg overflow-x-hidden">
      <CircuitBackground />

      <AnimatePresence>
        {!isSystemReady ? (
          <motion.div 
            key="intro"
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Microchip onClick={handleBoot} isBooting={isBooting} />
              <div className={`mt-12 text-center font-mono text-circuit-accent transition-opacity duration-300 ${isBooting ? 'opacity-0' : 'animate-pulse'}`}>
                [ SYSTEM STANDBY ]<br/>
                <span className="text-xs text-slate-500">CLICK CHIP TO INITIALIZE PROTOCOLS</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
              <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
                <div className="font-mono font-bold text-xl text-circuit-accent flex items-center gap-2 border-r border-slate-700 pr-6">
                  <Zap className="w-5 h-5" />
                  MC.Dev
                </div>
                <div className="hidden md:flex gap-8 text-sm font-mono">
                  {['about', 'experience', 'projects', 'skills', 'education'].map((item) => (
                    <button 
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`hover:text-circuit-accent transition-colors uppercase tracking-widest text-xs ${activeSection === item ? 'text-circuit-accent border-b-2 border-circuit-accent' : 'text-slate-500'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            <main className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-6 pt-36 pb-20 relative z-10">
              
              {/* Hero Section */}
              <section id="about" className="min-h-[60vh] flex flex-col justify-center mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
                      System Online: Available for Hire
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">MAHESH KUMAR</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-circuit-accent to-emerald-400">CHANDRAPPA</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-slate-400 mb-8 font-light flex items-center gap-4">
                      <Terminal className="w-8 h-8 text-circuit-accent" />
                      <span className="border-b border-slate-700 pb-1">{PERSONAL_INFO.title}</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-4xl leading-relaxed mb-10 border-l-4 border-circuit-accent pl-6">
                      {PERSONAL_INFO.about}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 px-8 py-4 bg-circuit-accent text-slate-950 font-bold rounded hover:bg-circuit-accentGlow transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] uppercase tracking-wide">
                        <Mail className="w-5 h-5" /> Initialize Contact
                      </a>
                      <div className="flex items-center gap-6 px-6 py-3 text-slate-400 font-mono text-sm border border-slate-800 rounded bg-slate-900/50">
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-circuit-accent" /> {PERSONAL_INFO.location}</span>
                        <span className="w-px h-4 bg-slate-700"></span>
                        <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-circuit-accent" /> {PERSONAL_INFO.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Hero Graphic - Circuit Visual */}
                  <div className="hidden lg:block lg:col-span-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-circuit-accent/20 to-emerald-500/20 blur-3xl rounded-full"></div>
                    <div className="relative border border-slate-700 bg-slate-900/50 backdrop-blur p-8 rounded-2xl">
                      <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                        <div className="text-slate-500">STATUS</div>
                        <div className="text-emerald-400 text-right">ONLINE</div>
                        <div className="text-slate-500">UPTIME</div>
                        <div className="text-circuit-accent text-right">99.9%</div>
                        <div className="text-slate-500">LOCATION</div>
                        <div className="text-white text-right">DE</div>
                        <div className="col-span-2 h-px bg-slate-700 my-2"></div>
                        <div className="col-span-2 text-xs text-slate-600">
                          Scanning for opportunities in Embedded Systems, IoT, and Microelectronics...
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="mb-32">
                <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
                <div className="grid grid-cols-1 gap-8">
                  {EXPERIENCE.map((job, index) => (
                    <motion.div 
                      key={job.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex group"
                    >
                      {/* Timeline Line and Dot */}
                      <div className="hidden md:flex flex-col items-center mr-8">
                        <div className="w-px h-full bg-slate-800 group-last:h-8"></div>
                        <div className="w-4 h-4 rounded-full bg-circuit-bg border-2 border-circuit-accent shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0 my-2 relative z-10"></div>
                        <div className="w-px h-full bg-slate-800"></div>
                      </div>

                      <Card className="w-full">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-start mb-6 gap-4 border-b border-slate-800/50 pb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                            <h4 className="text-lg text-emerald-400 font-medium flex items-center gap-2">
                              {job.company}
                            </h4>
                          </div>
                          <span className="text-sm font-mono text-circuit-accent bg-circuit-accent/5 border border-circuit-accent/20 px-4 py-2 rounded whitespace-nowrap">
                            {job.period}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                          <div className="xl:col-span-9">
                            <ul className="space-y-3 mb-6 text-slate-400">
                              {job.description.map((desc, i) => (
                                <li key={i} className="flex gap-3">
                                  <span className="text-circuit-accent mt-1.5">›</span>
                                  <span className="leading-relaxed">{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="xl:col-span-3">
                             <div className="flex flex-wrap gap-2 content-start">
                              {job.techStack.map(tech => (
                                <Badge key={tech}>{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-32">
                <SectionTitle icon={Cpu}>Technical Projects</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PROJECTS.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col border-t-4 border-t-emerald-500">
                        <div className="mb-6 flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <Layers className="w-6 h-6 text-emerald-500 opacity-50" />
                        </div>
                        <div className="flex-grow">
                          <ul className="space-y-3 mb-8 text-slate-400">
                            {project.description.map((desc, i) => (
                              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto pt-6 border-t border-slate-800">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                              <Badge key={tech}>{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="mb-32">
                <SectionTitle icon={Code}>Technical Arsenal</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {SKILLS.map((skillGroup, index) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-gradient-to-b from-slate-900 to-slate-900/50">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                          <span className="w-2 h-8 bg-circuit-accent rounded-full"></span>
                          {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map(skill => (
                            <div key={skill} className="px-4 py-2 bg-slate-800/50 rounded-md text-sm text-slate-300 border border-slate-700 hover:border-circuit-accent hover:bg-slate-800 transition-all duration-300 cursor-default hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section id="education" className="mb-32">
                <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {EDUCATION.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col">
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <div>
                             <h3 className="text-xl font-bold text-white leading-tight">{edu.institution}</h3>
                             <div className="text-emerald-400 font-medium mt-1">{edu.degree}</div>
                          </div>
                          <div className="shrink-0 text-right">
                            <span className="block text-xs font-mono text-circuit-accent mb-1">{edu.period}</span>
                            <span className="inline-block text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-0.5 rounded bg-slate-900">{edu.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-4 mt-auto">
                          {edu.details}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <SectionTitle icon={Award}>Certifications & Achievements</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {CERTIFICATIONS.map((cert, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg hover:border-circuit-accent/50 transition-colors flex items-center gap-4 group h-full shadow-lg">
                           <div className="w-8 h-8 rounded bg-circuit-accent/10 flex items-center justify-center text-circuit-accent group-hover:bg-circuit-accent group-hover:text-slate-900 transition-colors shrink-0">
                              <span className="font-mono text-xs font-bold">0{index + 1}</span>
                           </div>
                           <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{cert}</span>
                        </div>
                      </motion.div>
                   ))}
                </div>
              </section>

              {/* Footer / Contact */}
              <footer className="border-t border-slate-800 pt-12 pb-8 text-center">
                <div className="flex justify-center gap-8 mb-12">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-circuit-accent hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-110 transition-all group">
                    <Mail className="w-6 h-6 text-slate-400 group-hover:text-circuit-accent" />
                  </a>
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-110 transition-all group cursor-default" title={PERSONAL_INFO.phone}>
                    <Phone className="w-6 h-6 text-slate-400 group-hover:text-emerald-500" />
                  </div>
                </div>
                <div className="text-slate-600 font-mono text-xs uppercase tracking-widest">
                  <p className="mb-2">System Architecture by {PERSONAL_INFO.name}</p>
                  <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
              </footer>

            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;