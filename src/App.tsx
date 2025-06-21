import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap, Mail, Phone, MapPin, Download, ExternalLink, Github, Sun, Moon, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Personal Information - Update these with your details
  const personalInfo = {
    name: "Asma Belhiba",
    title: "Full-Stack Developer & UI/UX Designer",
    description: "Crafting exceptional digital experiences with modern technologies and innovative design thinking.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, State",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername",
    resumeUrl: "#" // Add your resume URL here
  };

  const aboutInfo = {
    intro: "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey began with a curiosity for how things work on the web, which evolved into a deep love for crafting exceptional user experiences.",
    passion: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentoring.",
    stats: {
      projects: "50+",
      experience: "5+",
      clients: "30+",
      satisfaction: "100%"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#', // Replace with your project URL
      githubUrl: '#' // Replace with your GitHub repo URL
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#', // Replace with your project URL
      githubUrl: '#' // Replace with your GitHub repo URL
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#', // Replace with your project URL
      githubUrl: '#' // Replace with your GitHub repo URL
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
                    <div className={themeClasses.textMuted}>Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-500 mb-2">{aboutInfo.stats.clients}</div>
                    <div className={themeClasses.textMuted}>Happy Clients</div>
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

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 relative z-10 ${themeClasses.section} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className={`${themeClasses.textMuted} text-lg max-w-2xl mx-auto`}>
              A selection of recent projects that showcase my skills and passion for creating impactful digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
            © 2024 {personalInfo.name}. Crafted with ❤️ and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;