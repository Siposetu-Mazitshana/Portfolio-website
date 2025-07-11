import React, { useState, useEffect } from 'react';
import { 
  User, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code, 
  Heart, 
  GraduationCap,
  Microscope,
  Robot,
  Users,
  Trophy,
  Certificate,
  Camera,
  FileText,
  Lightbulb,
  TrendingUp,
  Brain,
  Zap,
  Target,
  Globe,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'resume', 'skills', 'achievements', 'certificates', 'insights', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const exportResume = (format: 'pdf' | 'docx' | 'html') => {
    // In a real implementation, this would generate and download the resume
    alert(`Exporting resume as ${format.toUpperCase()}... This feature would be implemented with a backend service.`);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'insights', label: 'Insights' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Siposetu Mazitshana</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="text-lg text-gray-600 mb-2 block">Hello, I'm</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Siposetu Mihle Lelethu Mazitshana
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                  Biotechnology Professional & AI Technology Specialist
                </p>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  Biotechnology Honours graduate with academic distinction and expertise in AI, machine learning, 
                  and technical support. Passionate about leveraging cutting-edge technology to drive innovation 
                  in healthcare, research, and community development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('about')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ChevronDown size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/public/915591705281202643_IMG_8523.jpg"
                    alt="Siposetu Mazitshana - Professional Headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                  <Microscope size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging biotechnology and artificial intelligence for innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Graduated Summa Cum Laude with BSc Honours in Biotechnology from UWC, with extensive 
                research experience in precision medicine, DNA extraction, and PCR analysis.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Robot className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified in machine learning, generative AI, and cloud platforms with 25+ professional 
                certifications from leading institutions including Stanford, MIT, and Google.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated to public health initiatives and community service, from HIV/AIDS education 
                to COVID-19 vaccination coordination, making a positive impact in communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section with Export Options */}
      <section id="resume" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
            <p className="text-xl text-gray-600 mb-8">
              My professional journey from biotechnology to AI innovation
            </p>
            
            {/* Export Options */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => exportResume('pdf')}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                Export PDF
              </button>
              <button
                onClick={() => exportResume('docx')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                Export DOCX
              </button>
              <button
                onClick={() => exportResume('html')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                Export HTML
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-blue-600" size={28} />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">IT Support Candidate</h4>
                      <p className="text-blue-600 font-semibold">CAPACITI - Cape Town</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Apr 2025 - Present
                    </span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Provide first-line technical support and troubleshooting assistance</li>
                    <li>• Develop expertise in AI systems and cloud platforms (Azure AI, Google Cloud)</li>
                    <li>• Complete advanced certifications in communication, productivity, and AI</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Vaccine Site Administrator</h4>
                      <p className="text-green-600 font-semibold">UWC/Ruyterwacht - Cape Town</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Sep 2021 - Jul 2022
                    </span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Managed daily vaccination appointments and accurate patient recordkeeping</li>
                    <li>• Coordinated patient flow in high-volume clinic environment</li>
                    <li>• Assisted healthcare workers during critical COVID-19 vaccination campaign</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Academic Tutor</h4>
                      <p className="text-purple-600 font-semibold">University of the Western Cape</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Feb 2016 - Nov 2020
                    </span>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Delivered tutorials in biotechnology, life sciences, and laboratory safety</li>
                    <li>• Provided group and one-on-one academic support to diverse student groups</li>
                    <li>• Developed innovative teaching methods for complex scientific concepts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-600" size={28} />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">BSc Honours in Biotechnology</h4>
                  <p className="text-blue-600 font-semibold mb-2">University of the Western Cape</p>
                  <p className="text-sm text-gray-500 mb-4">Jan 2019 - Dec 2019</p>
                  <p className="text-gray-600">
                    Advanced studies in biotechnology with focus on molecular biology, genetics, 
                    and bioprocessing. Completed with academic distinction.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Science in Biotechnology</h4>
                  <p className="text-blue-600 font-semibold mb-2">University of the Western Cape</p>
                  <p className="text-sm text-gray-500 mb-4">Feb 2015 - Dec 2018</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="font-bold text-yellow-800">Graduated Summa Cum Laude</p>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive foundation in biotechnology, molecular biology, biochemistry, 
                    and research methodologies. Active as Peer Educator in UWC HIV/AIDS Unit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">
              Technical expertise spanning biotechnology, AI, and digital innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Code className="text-blue-600" size={28} />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Python Programming', level: 90 },
                  { name: 'Machine Learning', level: 85 },
                  { name: 'Biotechnology Research', level: 95 },
                  { name: 'Cloud Platforms (Azure/GCP)', level: 80 },
                  { name: 'Generative AI & LLMs', level: 85 },
                  { name: 'Data Analysis', level: 88 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Users className="text-blue-600" size={28} />
                Professional Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Research & Development', level: 95 },
                  { name: 'Technical Support', level: 90 },
                  { name: 'Academic Instruction', level: 92 },
                  { name: 'Project Management', level: 85 },
                  { name: 'Public Health', level: 88 },
                  { name: 'Leadership & Mentoring', level: 90 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-green-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-xl text-gray-600">
              Recognition for academic excellence and professional contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Summa Cum Laude Graduate',
                description: 'Graduated with highest academic distinction from University of the Western Cape',
                year: '2018',
                color: 'yellow'
              },
              {
                icon: Award,
                title: "Dean's Merit Award",
                description: 'Recognized for outstanding academic achievement and contribution to biotechnology program',
                year: '2019',
                color: 'blue'
              },
              {
                icon: Certificate,
                title: 'AI Certification Excellence',
                description: 'Completed 25+ professional certifications in AI, ML, and cloud technologies',
                year: '2025',
                color: 'green'
              },
              {
                icon: Users,
                title: 'Academic Mentorship Impact',
                description: 'Successfully tutored hundreds of students over 4+ years in biotechnology',
                year: '2016-2020',
                color: 'purple'
              },
              {
                icon: Heart,
                title: 'Community Health Leadership',
                description: 'Led public health initiatives including HIV/AIDS education and COVID-19 coordination',
                year: '2016-2022',
                color: 'red'
              },
              {
                icon: Microscope,
                title: 'Research Excellence',
                description: 'Contributed to precision medicine research with expertise in DNA extraction and PCR',
                year: '2018',
                color: 'indigo'
              }
            ].map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-${achievement.color}-600 rounded-full flex items-center justify-center mb-6`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                <span className={`inline-block bg-${achievement.color}-100 text-${achievement.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
            <p className="text-xl text-gray-600">
              Continuous learning in AI, technology, and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI and Public Health',
                issuer: 'DeepLearning.AI',
                date: 'June 2025',
                credential: '6KDTWKFKJD2F',
                description: 'Advanced course on applying AI in public health contexts, covering epidemiology and health data analysis'
              },
              {
                title: 'Advanced Learning Algorithms',
                issuer: 'DeepLearning.AI, Stanford',
                date: 'June 2025',
                credential: 'ZLTHKT1TX3UK',
                description: 'Comprehensive training in advanced ML algorithms including neural networks and ensemble methods'
              },
              {
                title: 'AI on Microsoft Azure',
                issuer: 'Microsoft',
                date: 'June 2025',
                credential: '5A501UU9S8IW',
                description: 'Professional certification in Azure AI services, cognitive services, and cloud ML solutions'
              },
              {
                title: 'Python for Data Science & AI',
                issuer: 'IBM',
                date: 'June 2025',
                credential: 'OXSPKCIQ10VV',
                description: 'Comprehensive Python programming for data science libraries and AI development'
              },
              {
                title: 'Generative AI with LLMs',
                issuer: 'DeepLearning.AI, AWS',
                date: 'May 2025',
                credential: 'M73DK66V13D6',
                description: 'Advanced training in generative AI, transformer architectures, and LLM implementation'
              },
              {
                title: 'Introduction to Responsible AI',
                issuer: 'Google Cloud',
                date: 'June 2025',
                credential: 'TAMRDJ9016B2',
                description: 'Ethics and responsible practices in AI development, covering bias mitigation and fairness'
              }
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Certificate size={24} />
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                  </div>
                  <p className="text-blue-100">{cert.issuer}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                  <p className="text-xs text-gray-400 font-mono">ID: {cert.credential}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 inline-block">
              <p className="text-blue-800 flex items-center gap-2">
                <Lightbulb size={20} />
                Showing 6 of 25+ completed certifications. Full portfolio available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Insights</h2>
            <p className="text-xl text-gray-600">
              My thoughts on the intersection of biotechnology, AI, and the future of healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI in Biotechnology</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The convergence of artificial intelligence and biotechnology represents one of the most 
                  promising frontiers in modern science. From drug discovery to personalized medicine, 
                  AI is revolutionizing how we approach biological challenges.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My experience in both fields has shown me that the key to successful integration lies 
                  in understanding the biological context behind the data. AI models are only as good 
                  as the biological insights that inform their design and interpretation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Future of Healthcare</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Healthcare is undergoing a digital transformation that will fundamentally change how 
                  we prevent, diagnose, and treat diseases. The integration of genomics, AI, and 
                  personalized medicine is creating unprecedented opportunities for precision healthcare.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I believe the future lies in democratizing access to these advanced technologies, 
                  ensuring that communities worldwide can benefit from the latest scientific breakthroughs.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Emerging Technologies</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Technologies like CRISPR gene editing, synthetic biology, and quantum computing are 
                  reshaping the biotechnology landscape. These tools offer unprecedented precision and 
                  capability in manipulating biological systems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The challenge lies not just in developing these technologies, but in ensuring they 
                  are applied ethically and responsibly, with proper consideration for their societal impact.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Career Philosophy</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  My career is driven by a simple principle: use science and technology to make a 
                  meaningful difference in people's lives. Whether through research, education, or 
                  community service, I strive to bridge the gap between cutting-edge science and 
                  practical applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I believe in the power of interdisciplinary collaboration and continuous learning. 
                  The most innovative solutions often emerge at the intersection of different fields.
                </p>
              </div>
            </div>
          </div>

          {/* Current Interests */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Globe className="text-blue-600" size={28} />
              Current Research Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'AI-driven drug discovery',
                'Precision medicine applications',
                'Biomarker identification',
                'Healthcare accessibility',
                'Ethical AI in healthcare',
                'Community health informatics',
                'Genomic data analysis',
                'Digital health solutions'
              ].map((interest, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <p className="text-blue-800 font-semibold">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">
              Professional moments, research activities, and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Microscope, title: 'Laboratory Research', description: 'Precision Medicine Lab Work' },
              { icon: GraduationCap, title: 'Graduation', description: 'UWC Graduation Ceremony' },
              { icon: Users, title: 'Academic Tutoring', description: 'Student Mentorship Sessions' },
              { icon: Heart, title: 'Community Service', description: 'Public Health Initiatives' },
              { icon: Code, title: 'AI Training', description: 'Technology Workshops' },
              { icon: Award, title: 'Recognition', description: "Dean's Merit Award" }
            ].map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square flex flex-col items-center justify-center p-8">
                  <item.icon className="text-gray-500 mb-4" size={64} />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-center">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-2xl p-12">
              <Camera className="mx-auto text-blue-400 mb-4" size={48} />
              <p className="text-blue-600 text-lg mb-4">Upload new photos here</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Choose Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-xl text-gray-600">
              Let's connect and explore opportunities in biotechnology and AI innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
                  <p className="text-gray-600 mb-2">Connect with me professionally</p>
                  <a
                    href="https://linkedin.com/in/siposetu-mazitshana-117604293"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    linkedin.com/in/siposetu-mazitshana-117604293
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">Send me a message</p>
                  <a
                    href="mailto:sethumazitsh@gmail.com"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    sethumazitsh@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600 mb-2">Give me a call</p>
                  <a
                    href="tel:+27812457431"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    +27 81 245 7431
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600 mb-2">Based in</p>
                  <span className="text-orange-600 font-semibold">
                    Cape Town, Western Cape, South Africa
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Siposetu Mihle Lelethu Mazitshana</h3>
              <p className="text-gray-300 mb-2">Biotechnology Professional & AI Technology Specialist</p>
              <p className="text-gray-400">Bridging science and technology for innovative solutions</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://linkedin.com/in/siposetu-mazitshana-117604293"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sethumazitsh@gmail.com"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+27812457431"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Siposetu Mihle Lelethu Mazitshana. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;