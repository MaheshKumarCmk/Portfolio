import { Experience, Project, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Mahesh Kumar Chandrappa",
  title: "Embedded Systems & Microelectronics Engineer",
  tagline: "Bridging the gap between hardware and software with precision.",
  email: "cmkmaheshkumar@gmail.com",
  phone: "(+49) 1786611690",
  location: "Reutlingen, Germany",
  about: "Graduate Master’s student in Microelectronics and Microsystems from Hamburg University of Technology (TUHH), with a strong foundation in semiconductor technology and embedded systems. My hands-on experience includes sensor characterization, bench-top measurements, and data acquisition and analysis. I am eager to apply my analytical skills, engineering expertise, and system-oriented mindset to create innovative solutions.",
};

export const EXPERIENCE: Experience[] = [
  {
    id: 'bosch',
    role: 'Development Engineer (Master Thesis & Internship)',
    company: 'Bosch Sensortec GmBH',
    period: '15/09/2024 – Current',
    techStack: ['Python', 'Matlab', 'MEMS', 'Data Analysis'],
    description: [
      'Thesis: Sensitivity error in MEMS Pressure Sensors. Identified key sensitivity sources from internal factors (MEMS, ASIC, trimming).',
      'Simulated analytical sensor models to verify factors contributing to output errors.',
      'Designed experiments, conducted measurements, and analysed data using Python/MATLAB to validate results and rank error sources.',
      'Proposed strategies to mitigate critical error sources to enhance sensor accuracy.',
      'Internship: Conducted bench-top experiments for sensor evaluation.',
      'Applied signal processing and frequency analysis to investigate correlations between various KPIs.',
      'Formulated hypotheses to understand underlying mechanisms of acoustic effects on inertial sensitivity.'
    ]
  },
  {
    id: 'airbus',
    role: 'Embedded Engineer (Working Student)',
    company: 'Airbus Operations GmBH',
    period: '15/09/2023 – 31/08/2024',
    techStack: ['Python', 'IoT', 'MQTT', 'CSMIM'],
    description: [
      'Retrofitted aircraft lavatory systems and designed interface boards for CSMIM-based cabin networks.',
      'Converted lavatory status info (occupancy, calls) into MQTT messages.',
      'Controlled features (return-to-seat, no-smoking signs) through MQTT commands.',
      'Embedded IoT capabilities making the lavatory a connected node, supporting future service enhancements.'
    ]
  },
  {
    id: 'tcs',
    role: 'Assistant System Engineer',
    company: 'TATA Consultancy Services',
    period: '06/01/2021 – 12/09/2022',
    techStack: ['JSP', 'Servlet', 'JDBC', 'Oracle SQL'],
    description: [
      'Client: Allianz Global Corporate and Specialty SE.',
      'Maintained, supported, and migrated the existing Global Program System (GPS) application.',
      'Developed, tested, and implemented changes in production based on client requirements.',
      'Managed CI/CD pipelines, resolved user issues via root cause analysis, and automated batch processes.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'tuhh',
    institution: 'Hamburg University of Technology (TUHH)',
    degree: 'MSc in Microelectronics and Microsystems',
    period: '01/10/2022 – Current',
    location: 'Hamburg, Germany',
    details: 'Focus on MEMS technologies, semiconductor fabrication (clean room experience), photolithography, etching, and FEM simulation using COMSOL. Experience with reduced-order models and sensor verification.'
  },
  {
    id: 'sairam',
    institution: 'Sri Sairam College of Engineering',
    degree: 'B.E in Electronics and Communication Engineering',
    period: '31/07/2016 – 29/08/2020',
    location: 'Bengaluru, India',
    details: 'Foundation in electronics, communication protocols, and embedded systems.'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Embedded C", "Java", "Verilog-HDL", "VHDL", "PL/SQL"]
  },
  {
    category: "Embedded & IoT",
    items: ["FreeRTOS", "Zephyr", "SPI", "I2C", "UART", "MQTT"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "MATLAB", "VS Code", "LabVIEW", "Xilinx", "COMSOL", "JIRA"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'auv',
    title: 'Autonomous Underwater Vehicle',
    techStack: ['Python', 'Embedded C', 'Sensors'],
    description: [
      'Developed an autonomous vehicle with a camera for fish skin disease analysis.',
      'Integrated sensors for pH, oxygen, and temperature monitoring.',
      'Implemented real-time alerts for fish farmers regarding environmental changes.'
    ]
  },
  {
    id: 'scr',
    title: 'SCR Efficiency Prediction',
    techStack: ['Python', 'PL/SQL', 'Machine Learning'],
    description: [
      'Developed a regression model to predict Selective Catalytic Reduction efficiency.',
      'Analyzed exhaust gas temperature, ammonia slip, and NOx concentration.',
      'Visualized data with heatmaps and scatter plots to support technical reports.'
    ]
  }
];

export const CERTIFICATIONS = [
  "Finalist: Smart India Hackathon – MHRD IEEE Scholarship",
  "Outstanding Performer: IOT Challenge (IIT Bombay i3 India)",
  "Team Excellence Award (TCS)",
  "The Complete Python Bootcamp (Udemy)",
  "The Complete SQL Bootcamp (Udemy)"
];