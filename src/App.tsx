import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap, Mail, Phone, MapPin, Download, ExternalLink, Github, Sun, Moon, Linkedin, Twitter, Eye, Layers, Brush, Image as ImageIcon, Award, Briefcase, Calendar, Building } from 'lucide-react';
import aibetterImg from './assets/aibetter.png';
import cv from './assets/CV - Asma Belhiba.pdf';
import demo from './assets/Demo Video Created by Asma Belhiba.mp4';
import pageImg from './assets/home page.png';
import convert from './assets/convert.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('development');

  // Personal Information - Update these with your details
  const personalInfo = {
    name: "Asma Belhiba",
    title: "Full-Stack Developer & UI/UX Designer",
    description: "Crafting exceptional digital experiences with modern technologies and innovative design thinking.",
    email: "benhibaasma02@gmail.com",
    phone: "+216 92 677 186",
    location: "Ariana, Tunisia",
    linkedin: "https://www.linkedin.com/in/asma-b-9b7896213/",
    twitter: "https://x.com/asmabenhiba1/with_replies",
    github: "https://github.com/AsmaBelhiba",
    behance: "https://www.behance.net/asmaben_hiba",
    resumeUrl: cv // Add your resume URL here
  };

 const aboutInfo = {
  intro: "I'm a full-stack developer and engineering student specializing in Data Science and AI. My passion for coding started in high school and has grown through hands-on projects that sharpened both my technical and creative skills.",
  
  passion: "I'm also a freelance graphic designer, blending code and creativity to craft smart, user-friendly digital experiences. I enjoy learning new tech, designing sleek interfaces, and bringing ideas to life.",
  
  stats: {
    projects: "15+",
    experience: "5+ years",
    clients: "10+",
    satisfaction: "100%"
  }
};

  // Add your certifications here
  const certifications = [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "2025",
      description: "Learned core networking concepts including IP addressing, Ethernet, switching, and routing, and gained hands-on experience in configuring and troubleshooting basic networks.",
      skills: ["IP connectivity", "IP services", "IPv4 And IPv6 Addressing", "Network Fundamentals"],
      verifyUrl: "https://www.credly.com/badges/69407760-f368-4478-bd1b-7ad786eb0cde/linked_in_profile" // Add your verification URL
    },
    {
      title: "Introduction to Android Mobile Application Development",
      issuer: "Meta",
      date: "2023",
      description: "Learned the basics of Android app development using Kotlin, including user input handling, and app lifecycle management with Android Studio.",
      skills: ["Kotlin", "Mobile Applications", "User Interface"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/D3D7EHFH2M3D"
    },
    {
      title: " Using Python to Interact with the Operating System",
      issuer: "Google",
      date: "2023",
      description: "Learned to automate tasks by writing Python scripts to manage files, directories, and processes, and interact with the operating system using standard libraries.",
      skills: ["Operating Systems", "Regular Expressions", "Bash", "Python"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/5QHDTFLQHM6J"
    },
    {
      title: "Adobe Certified Expert - Photoshop",
      issuer: "Adobe",
      date: "2022",
      credentialId: "ADOBE-PS-901234",
      description: "Advanced certification demonstrating expertise in Adobe Photoshop for professional design work.",
      skills: ["Photo Editing", "Digital Design", "Creative Suite", "Visual Design"],
      verifyUrl: "#"
    }
  ];

  // Add your internships here
  const internships = [
    {
      company: "TechCorp Solutions",
      position: "Full-Stack Developer Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "Tunis, Tunisia",
      type: "Remote",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on client projects and contributed to the company's internal tools.",
      achievements: [
        "Built 3 client-facing web applications using React and TypeScript",
        "Improved application performance by 40% through code optimization",
        "Implemented responsive design principles across all projects",
        "Participated in daily standups and sprint planning meetings"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js"],
      companyUrl: "#"
    },
    {
      company: "Creative Design Studio",
      position: "UI/UX Design Intern",
      duration: "Jan 2024 - May 2024",
      location: "Ariana, Tunisia",
      type: "Hybrid",
      description: "Worked on user interface design for mobile and web applications. Conducted user research and created wireframes, prototypes, and final designs.",
      achievements: [
        "Designed UI for 5+ mobile applications with 95% client satisfaction",
        "Conducted user research sessions with 50+ participants",
        "Created comprehensive design systems and style guides",
        "Collaborated with development team to ensure design implementation"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
      companyUrl: "#"
    },
    {
      company: "DataTech Analytics",
      position: "Data Science Intern",
      duration: "Sep 2023 - Dec 2023",
      location: "Tunis, Tunisia",
      type: "On-site",
      description: "Analyzed large datasets to extract business insights and built predictive models. Worked with machine learning algorithms and data visualization tools.",
      achievements: [
        "Developed predictive models with 85% accuracy for customer behavior",
        "Created interactive dashboards using Tableau and Power BI",
        "Processed and analyzed datasets containing 1M+ records",
        "Presented findings to stakeholders and senior management"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"],
      companyUrl: "#"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certifications', 'internships', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: 'JavaScript', level: 95, icon: Code },
    { name: 'React', level: 90, icon: Code },
    { name: 'TypeScript', level: 85, icon: Code },
    { name: 'Node.js', level: 80, icon: Code },
    { name: 'UI/UX Design', level: 85, icon: Palette },
    { name: 'Performance', level: 88, icon: Zap }
  ];

  const developmentProjects = [
    {
      title: 'Smart Pricing API with Django & Reinforcement Learning',
      description: 'A Django-based API for dynamic e-commerce pricing using Reinforcement Learning (OpenAI Gym + Stable Baselines3). Built with my colleague, it lets products adjust prices based on stock, sales, and history.',
      image: aibetterImg,
      technologies: ['Django', 'Python', 'PostgreSQL', 'OpenAI Gym', 'Stable Baselines3'],
      liveUrl: demo, // Replace with your project URL
      githubUrl: 'https://github.com/AsmaBelhiba/Django-RL-Pricing' // Replace with your GitHub repo URL
    },
    {
      title: 'Nutra, a smart nutrient-tracking web app',
      description: 'Nutra is a smart nutrient-tracking web app built with Django, JavaScript, and Tailwind CSS. It offers secure authentication, detailed nutrient logging, and interactive dashboards to help users monitor their eating habits. Powered by Mistral AI, it delivers personalized, context-aware nutrition tips',
      image: pageImg,
      technologies: ['Django', 'JavaScript' , 'Tailwind CSS', 'PostgreSQL'],
      liveUrl: '#', // Replace with your project URL
      githubUrl: 'https://github.com/AsmaBelhiba/FoodTracker' // Replace with your GitHub repo URL
    },
    {
      title: 'Currency Converter',
      description: 'Currency Converter is a responsive web app built with HTML, CSS, and JavaScript that allows users to convert currencies in real time. It showcases practical use of API integration, DOM manipulation, and clean UI design.',
      image: convert,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#', // Replace with your project URL
      githubUrl: 'https://github.com/AsmaBelhiba/Currency-conversion' // Replace with your GitHub repo URL
    }
  ];

  // Add your graphic design projects here
  const designProjects = [
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines for a modern tech startup.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Branding',
      tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
      behanceUrl: personalInfo.behance
    },
    {
      title: 'Mobile App UI Design',
      description: 'Modern and intuitive mobile application interface design with focus on user experience and accessibility.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'UI/UX',
      tools: ['Figma', 'Adobe XD', 'Principle'],
      behanceUrl: personalInfo.behance
    },
    {
      title: 'Social Media Campaign',
      description: 'Creative social media graphics and campaign materials for various brands, focusing on engagement and brand consistency.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Social Media',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      behanceUrl: personalInfo.behance
    },
    {
      title: 'Website Redesign',
      description: 'Complete website redesign focusing on modern aesthetics, improved user experience, and conversion optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Design',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      behanceUrl: personalInfo.behance
    },
    {
      title: 'Print Design Collection',
      description: 'Various print materials including brochures, flyers, and business cards with focus on typography and visual hierarchy.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Print Design',
      tools: ['InDesign', 'Illustrator', 'Photoshop'],
      behanceUrl: personalInfo.behance
    },
    {
      title: 'Logo Design Portfolio',
      description: 'Collection of unique logo designs for various industries, showcasing versatility in style and brand representation.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Logo Design',
      tools: ['Illustrator', 'Photoshop'],
      behanceUrl: personalInfo.behance
    }
  ];

  const themeClasses = {
    bg: isDarkMode ? 'bg-slate-950' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-slate-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-slate-400' : 'text-gray-500',
    nav: isDarkMode ? 'bg-slate-950/80' : 'bg-white/80',
    navBorder: isDarkMode ? 'border-slate-700/50' : 'border-gray-200/50',
    card: isDarkMode ? 'bg-slate-900/50' : 'bg-white/70',
    cardBorder: isDarkMode ? 'border-slate-700/50' : 'border-gray-200/50',
    cardHover: isDarkMode ? 'hover:border-blue-500/50' : 'hover:border-blue-400/50',
    input: isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300',
    inputFocus: isDarkMode ? 'focus:border-blue-500' : 'focus:border-blue-400',
    section: isDarkMode ? 'bg-slate-900/30' : 'bg-gray-100/50'
  };

  return (
    <div className={`${themeClasses.bg} ${themeClasses.text} transition-colors duration-500 relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 ${isDarkMode 
          ? 'bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/20'
        }`}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse-slow delay-1000`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${isDarkMode ? 'bg-pink-500/10' : 'bg-pink-400/20'} rounded-full blur-3xl animate-pulse-slow delay-2000`}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${themeClasses.nav} backdrop-blur-xl border-b ${themeClasses.navBorder} z-50 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[0]} {/* Shows first name */}
            </h1>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'certifications', label: 'Certifications' },
                  { id: 'internships', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`transition-all duration-300 hover:text-blue-500 relative ${
                      activeSection === id ? 'text-blue-500' : themeClasses.textSecondary
                    }`}
                  >
                    {label}
                    {activeSection === id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.card} ${themeClasses.cardBorder} border backdrop-blur-sm transition-all duration-300 hover:scale-110`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className={`inline-block p-4 rounded-2xl ${themeClasses.card} backdrop-blur-xl border ${themeClasses.cardBorder} mb-8`}>
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className={`text-xl md:text-2xl ${themeClasses.textSecondary} mb-8 leading-relaxed`}>
              {personalInfo.title}
            </p>
            <p className={`text-lg ${themeClasses.textMuted} mb-12 max-w-2xl mx-auto`}>
              {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a
                href={personalInfo.resumeUrl}
                className={`${themeClasses.card} backdrop-blur-xl border ${themeClasses.cardBorder} px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg ${themeClasses.card} ${themeClasses.cardBorder} border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500/50`}
              >
                <Github size={20} className="text-gray-400 hover:text-blue-500 transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg ${themeClasses.card} ${themeClasses.cardBorder} border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500/50`}
              >
                <Linkedin size={20} className="text-gray-400 hover:text-blue-500 transition-colors" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg ${themeClasses.card} ${themeClasses.cardBorder} border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500/50`}
              >
                <Twitter size={20} className="text-gray-400 hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={themeClasses.textMuted} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 relative z-10 ${themeClasses.section} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
                {aboutInfo.intro}
              </p>
              <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
                {aboutInfo.passion}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="text-blue-500 font-semibold mb-2">Frontend</h4>
                  <p className={themeClasses.textMuted}>React, Vue.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="text-purple-500 font-semibold mb-2">Backend</h4>
                  <p className={themeClasses.textMuted}>Node.js, Python, PostgreSQL, MongoDB</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`${themeClasses.card} backdrop-blur-xl rounded-2xl p-8 border ${themeClasses.cardBorder} shadow-xl`}>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-500 mb-2">{aboutInfo.stats.projects}</div>
                    <div className={themeClasses.textMuted}>Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-500 mb-2">{aboutInfo.stats.experience}</div>
                    <div className={themeClasses.textMuted}>Years Project Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-500 mb-2">{aboutInfo.stats.clients}</div>
                    <div className={themeClasses.textMuted}>Freelance Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-500 mb-2">{aboutInfo.stats.satisfaction}</div>
                    <div className={themeClasses.textMuted}>Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className={`${themeClasses.textMuted} text-lg max-w-2xl mx-auto`}>
              A comprehensive toolkit of modern technologies and methodologies for building exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className={`${themeClasses.card} backdrop-blur-xl rounded-xl p-6 border ${themeClasses.cardBorder} ${themeClasses.cardHover} transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-blue-500 mr-3" size={24} />
                    <h3 className={`text-xl font-semibold ${themeClasses.text}`}>{skill.name}</h3>
                  </div>
                  <div className="relative">
                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-3 mb-2`}>
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className={`text-sm ${themeClasses.textMuted}`}>{skill.level}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-6 relative z-10 ${themeClasses.section} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className={`${themeClasses.textMuted} text-lg max-w-2xl mx-auto`}>
              Professional certifications that validate my expertise and commitment to continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className={`${themeClasses.card} backdrop-blur-xl rounded-xl p-6 border ${themeClasses.cardBorder} ${themeClasses.cardHover} transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`${isDarkMode ? 'bg-green-600/20' : 'bg-green-100'} p-3 rounded-lg mr-4`}>
                      <Award className="text-green-500" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${themeClasses.text} mb-1`}>{cert.title}</h3>
                      <p className="text-green-500 font-semibold">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`${themeClasses.textMuted} text-sm`}>{cert.date}</div>
                    <div className={`${themeClasses.textMuted} text-xs mt-1`}>{cert.credentialId}</div>
                  </div>
                </div>
                
                <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`${isDarkMode ? 'bg-green-600/20 text-green-300 border-green-500/30' : 'bg-green-100 text-green-700 border-green-300/50'} px-3 py-1 rounded-full text-sm border`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors font-semibold"
                >
                  <ExternalLink size={16} />
                  Verify Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className={`${themeClasses.textMuted} text-lg max-w-2xl mx-auto`}>
              Hands-on experience gained through internships and professional roles that shaped my career.
            </p>
          </div>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div key={index} className={`${themeClasses.card} backdrop-blur-xl rounded-xl p-8 border ${themeClasses.cardBorder} ${themeClasses.cardHover} transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl`}>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className={`${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'} p-3 rounded-lg mr-4`}>
                        <Briefcase className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${themeClasses.text} mb-1`}>{internship.position}</h3>
                        <a 
                          href={internship.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-400 transition-colors font-semibold"
                        >
                          {internship.company}
                        </a>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className={themeClasses.textMuted} />
                        <span className={themeClasses.textSecondary}>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className={themeClasses.textMuted} />
                        <span className={themeClasses.textSecondary}>{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building size={16} className={themeClasses.textMuted} />
                        <span className={`${internship.type === 'Remote' ? 'text-green-500' : internship.type === 'Hybrid' ? 'text-yellow-500' : 'text-blue-500'} font-semibold`}>
                          {internship.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>
                      {internship.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className={`${themeClasses.text} font-semibold mb-3`}>Key Achievements:</h4>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className={`${themeClasses.textSecondary} flex items-start gap-2`}>
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className={`${themeClasses.text} font-semibold mb-3`}>Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`${isDarkMode ? 'bg-blue-600/20 text-blue-300 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-300/50'} px-3 py-1 rounded-full text-sm border`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 relative z-10 ${themeClasses.section} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className={`${themeClasses.textMuted} text-lg max-w-2xl mx-auto mb-8`}>
              Explore my development projects and creative design work that showcase both technical expertise and artistic vision.
            </p>

            {/* Tab Navigation */}
            <div className={`inline-flex ${themeClasses.card} backdrop-blur-xl rounded-xl p-2 border ${themeClasses.cardBorder} mb-12`}>
              <button
                onClick={() => setActiveTab('development')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'development'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : `${themeClasses.textMuted} hover:${themeClasses.textSecondary}`
                }`}
              >
                <Code size={20} />
                Development
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'design'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : `${themeClasses.textMuted} hover:${themeClasses.textSecondary}`
                }`}
              >
                <Palette size={20} />
                Graphic Design
              </button>
            </div>
          </div>

          {/* Development Projects */}
          {activeTab === 'development' && (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {developmentProjects.map((project, index) => (
                <div key={index} className={`${themeClasses.card} backdrop-blur-xl rounded-xl overflow-hidden border ${themeClasses.cardBorder} ${themeClasses.cardHover} transition-all duration-300 group shadow-lg hover:shadow-xl`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-slate-900/80' : 'bg-gradient-to-t from-white/80'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${themeClasses.text}`}>{project.title}</h3>
                    <p className={`${themeClasses.textMuted} mb-4 leading-relaxed`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`${isDarkMode ? 'bg-blue-600/20 text-blue-300 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-300/50'} px-3 py-1 rounded-full text-sm border`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 ${themeClasses.textMuted} hover:${themeClasses.textSecondary} transition-colors`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Design Projects */}
          {activeTab === 'design' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProjects.map((project, index) => (
                <div key={index} className={`${themeClasses.card} backdrop-blur-xl rounded-xl overflow-hidden border ${themeClasses.cardBorder} ${themeClasses.cardHover} transition-all duration-300 group shadow-lg hover:shadow-xl`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`${isDarkMode ? 'bg-purple-600/20 text-purple-300 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-300/50'} px-3 py-1 rounded-full text-sm border backdrop-blur-sm`}>
                        {project.category}
                      </span>
                    </div>
                    <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-slate-900/80' : 'bg-gradient-to-t from-white/80'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300"
                      >
                        <Eye size={24} className="text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${themeClasses.text}`}>{project.title}</h3>
                    <p className={`${themeClasses.textMuted} mb-4 leading-relaxed`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`${isDarkMode ? 'bg-purple-600/20 text-purple-300 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-300/50'} px-3 py-1 rounded-full text-sm border`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors font-semibold"
                    >
                      <Brush size={16} />
                      View on Behance
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className={`${themeClasses.textMuted} text-lg`}>
              Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className={`${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'} p-3 rounded-lg`}>
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${themeClasses.text}`}>Email</h3>
                  <p className={themeClasses.textMuted}>{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`${isDarkMode ? 'bg-purple-600/20' : 'bg-purple-100'} p-3 rounded-lg`}>
                  <Phone className="text-purple-500" size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${themeClasses.text}`}>Phone</h3>
                  <p className={themeClasses.textMuted}>{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`${isDarkMode ? 'bg-pink-600/20' : 'bg-pink-100'} p-3 rounded-lg`}>
                  <MapPin className="text-pink-500" size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${themeClasses.text}`}>Location</h3>
                  <p className={themeClasses.textMuted}>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full ${themeClasses.input} border rounded-lg px-4 py-3 ${themeClasses.text} placeholder-gray-400 ${themeClasses.inputFocus} focus:outline-none transition-colors backdrop-blur-sm`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full ${themeClasses.input} border rounded-lg px-4 py-3 ${themeClasses.text} placeholder-gray-400 ${themeClasses.inputFocus} focus:outline-none transition-colors backdrop-blur-sm`}
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className={`w-full ${themeClasses.input} border rounded-lg px-4 py-3 ${themeClasses.text} placeholder-gray-400 ${themeClasses.inputFocus} focus:outline-none transition-colors resize-none backdrop-blur-sm`}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${themeClasses.navBorder} relative z-10`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={themeClasses.textMuted}>
            © 2025 {personalInfo.name}. Crafted with ❤️ and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;