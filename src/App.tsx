import React, { useState, useEffect } from 'react';
import { User, Download, Mail, MapPin, Linkedin, Award, BookOpen, Briefcase, Code, Heart, GraduationCap, Users, Trophy, Phone, Github, Calendar, Building, Star, CheckCircle, ExternalLink, FileText, Target, Lightbulb, TrendingUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'certificates', 'projects', 'insights', 'contact'];
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
    alert(`Exporting resume as ${format.toUpperCase()}... This feature would be implemented with a backend service.`);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'insights', label: 'Insights' },
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
              <h1 className="text-2xl font-bold text-blue-600">Sisanda Mazitshana</h1>
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
                {isMenuOpen ? '✕' : '☰'}
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
                  Sisanda Mazitshana
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                  Social Worker & Wellness Coordinator
                </p>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  Passionate social work professional with eight years of experience specializing in 
                  employee health and wellness, trauma-informed care, and community engagement. 
                  Dedicated to enhancing well-being and fostering supportive environments.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('about')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ExternalLink size={20} />
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
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sisanda Mazitshana - Professional Headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                  <Heart size={32} />
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
              Dedicated to making a meaningful difference in people's lives through social work and wellness initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Bachelor of Social Work from University of South Africa (UNISA), with comprehensive 
                training in counseling, community development, and social intervention strategies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Eight years of diverse experience from mining industry wellness programs to 
                human trafficking survivor support, with expertise in trauma-informed care and crisis intervention.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to community wellness and social justice, from coordinating vaccination programs 
                to leading student wellness initiatives and supporting vulnerable populations.
              </p>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Profile</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Passionate and results-driven professional with eight years of experience in social work, 
              specializing in employee health and wellness within the corporate and higher education sectors. 
              Skilled in counselling, communication, facilitation, and creating impactful wellness initiatives. 
              Known for tackling challenges with enthusiasm and adaptability, while continually seeking growth. 
              Recently worked as a caseworker in trauma-informed care for survivors of human trafficking and 
              now lead student wellness programs at a top institution, dedicated to enhancing student well-being 
              and fostering a healthy, supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 mb-8">
              My professional journey in social work and community wellness
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

          <div className="space-y-8">
            {/* Current Position */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">Student Wellness Coordinator</h3>
                  <p className="text-blue-600 font-semibold text-lg">Rosebank College</p>
                  <p className="text-gray-500 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    Cape Town, South Africa
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full font-medium">
                  June 2024 - Current
                </span>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Student Council Management: Oversee the council, implement community engagement projects, and manage elections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Project Oversight: Monitor and evaluate projects, budgets, and resources for impact and future planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Training & Engagement: Provide training and ensure active Student Council participation in campus life</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Wellness Programs: Plan and execute wellness initiatives, workshops, and provide counseling services</span>
                </li>
              </ul>
            </div>

            {/* Previous Positions */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">Caseworker</h3>
                  <p className="text-green-600 font-semibold text-lg">The A21 Campaign</p>
                  <p className="text-gray-500 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    Cape Town, South Africa
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                  August 2023 - May 2024
                </span>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Provide confidential, trauma-informed, and person-centered psycho-social support to human trafficking victims and survivors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Assist in interviewing potential trafficking victims and managing crisis situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Help survivors with documentation, shelter coordination, and repatriation services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Deliver professional training, presentations, and workshops to diverse audiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">Social Worker</h3>
                  <p className="text-purple-600 font-semibold text-lg">Sibanye Stillwater Mine</p>
                  <p className="text-gray-500 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    East Driefontein, South Africa
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                  March 2014 - February 2020
                </span>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Managed daily operations of Employee Wellbeing Center, offering confidential counseling and support services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Facilitated lifestyle and work development interventions including stress management and trauma support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Planned and coordinated wellness interventions, health promotion programs, and educational sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                  <span>Worked in multidisciplinary team with mine management, medical staff, and HR to provide comprehensive support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">
              Academic foundation in social work and continuous professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor of Social Work</h3>
                  <p className="text-blue-600 font-semibold">University of South Africa (UNISA)</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-gray-500" size={16} />
                <span className="text-gray-600">2013</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive education in social work theory, practice, and ethics. Specialized training 
                in community development, counseling techniques, and social intervention strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Matriculation</h3>
                  <p className="text-green-600 font-semibold">Strategie High School</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-gray-500" size={16} />
                <span className="text-gray-600">2005</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Completed secondary education with strong academic performance, laying the foundation 
                for higher education and professional development in social sciences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Competencies</h2>
            <p className="text-xl text-gray-600">
              Professional expertise in social work, wellness coordination, and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Users className="text-blue-600" size={28} />
                Core Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Counseling & Therapy', level: 95 },
                  { name: 'Crisis Intervention', level: 90 },
                  { name: 'Community Engagement', level: 92 },
                  { name: 'Program Management', level: 88 },
                  { name: 'Training & Facilitation', level: 85 },
                  { name: 'Case Management', level: 90 }
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
                <Heart className="text-blue-600" size={28} />
                Specialized Competencies
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'HIV/AIDS and Trauma Counselling',
                  'Gender-Based Violence Awareness',
                  'Employee Assistance Programs (EAP)',
                  'Solution Focused Brief Therapy',
                  'Supervisory Leadership',
                  'Event Planning & Coordination',
                  'Data Analysis and Reporting',
                  'Cultural Sensitivity',
                  'Motivational Interviewing',
                  'Wellness Technology Knowledge'
                ].map((competency, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="font-medium text-gray-800">{competency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { language: 'English', level: 'Fluent' },
                { language: 'IsiZulu', level: 'Native' },
                { language: 'IsiXhosa', level: 'Fluent' },
                { language: 'Sesotho', level: 'Conversational' }
              ].map((lang, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{lang.language}</h4>
                  <p className="text-blue-600 font-medium">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Registrations</h2>
            <p className="text-xl text-gray-600">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Solution Focused Brief Therapy for Clients in Crisis',
                issuer: 'Solution Focused Institute',
                date: '2024',
                type: 'Specialized Training',
                color: 'blue'
              },
              {
                title: 'Employee Assistance Programmes Certificate',
                issuer: 'University of Pretoria',
                date: '2019',
                type: 'Professional Certificate',
                color: 'green'
              },
              {
                title: 'Supervisory Leadership Development Certificate',
                issuer: 'Gordon Institute of Business Science',
                date: '2017',
                type: 'Leadership Training',
                color: 'purple'
              },
              {
                title: 'TEFL/TESOL Certificate',
                issuer: 'The International TEFL Organization',
                date: 'Certified',
                type: 'Teaching Qualification',
                color: 'orange'
              },
              {
                title: 'SACSSP Registration',
                issuer: 'South African Council for Social Service Professions',
                date: 'Active',
                type: 'Professional Registration',
                color: 'red'
              },
              {
                title: 'SAOSWA Membership',
                issuer: 'South African Organisation of Social Workers in Addictions',
                date: 'Active',
                type: 'Professional Membership',
                color: 'indigo'
              }
            ].map((cert, index) => (
              <div key={index} className={`bg-gradient-to-br from-${cert.color}-50 to-${cert.color}-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className={`bg-gradient-to-r from-${cert.color}-600 to-${cert.color}-700 p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Award size={24} />
                    <h3 className="text-lg font-bold">{cert.title}</h3>
                  </div>
                  <p className={`text-${cert.color}-100`}>{cert.issuer}</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{cert.date}</span>
                    <span className={`inline-block bg-${cert.color}-100 text-${cert.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                      {cert.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-gray-600">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Projects & Initiatives</h2>
            <p className="text-xl text-gray-600">
              Highlighting impactful projects and community initiatives I've led or contributed to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Student Wellness Program',
                organization: 'Rosebank College',
                description: 'Comprehensive wellness program including mental health support, crisis intervention, and community engagement initiatives for students.',
                impact: '500+ students supported',
                icon: Users,
                color: 'blue'
              },
              {
                title: 'Human Trafficking Survivor Support',
                organization: 'The A21 Campaign',
                description: 'Trauma-informed care and comprehensive support services for survivors of human trafficking, including shelter coordination and repatriation.',
                impact: '50+ survivors assisted',
                icon: Heart,
                color: 'red'
              },
              {
                title: 'Employee Wellbeing Center',
                organization: 'Sibanye Stillwater Mine',
                description: 'Managed comprehensive employee assistance program providing counseling, crisis intervention, and wellness education for mining employees.',
                impact: '2000+ employees served',
                icon: Building,
                color: 'green'
              },
              {
                title: 'COVID-19 Vaccination Coordination',
                organization: 'UWC/Ruyterwacht',
                description: 'Coordinated vaccination appointments, managed patient flow, and maintained accurate records during critical vaccination campaign.',
                impact: '1000+ vaccinations coordinated',
                icon: CheckCircle,
                color: 'purple'
              },
              {
                title: 'Community Health Education',
                organization: 'Various Organizations',
                description: 'HIV/AIDS education, gender-based violence awareness, and health promotion programs across multiple communities.',
                impact: 'Multiple communities reached',
                icon: Lightbulb,
                color: 'orange'
              },
              {
                title: 'Statistical Data Collection',
                organization: 'Statistics South Africa',
                description: 'Led field operations team for national census data collection, managing supervisors and fieldworkers across enumeration areas.',
                impact: 'District-wide coverage',
                icon: TrendingUp,
                color: 'indigo'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`bg-gradient-to-r from-${project.color}-600 to-${project.color}-700 p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon size={28} />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className={`text-${project.color}-100 font-medium`}>{project.organization}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`bg-${project.color}-100 text-${project.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                      {project.impact}
                    </span>
                    <Target className={`text-${project.color}-600`} size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Insights</h2>
            <p className="text-xl text-gray-600">
              My thoughts on social work, wellness, and community development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">The Future of Workplace Wellness</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The modern workplace is evolving to recognize the critical importance of employee mental health 
                  and wellbeing. Organizations that invest in comprehensive wellness programs see improved productivity, 
                  reduced absenteeism, and higher employee satisfaction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My experience across different sectors has shown that successful wellness programs require a 
                  holistic approach, combining individual support with systemic organizational changes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Trauma-Informed Care</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Working with survivors of human trafficking has reinforced my belief in the power of 
                  trauma-informed care. This approach recognizes the widespread impact of trauma and 
                  integrates knowledge about trauma into policies, procedures, and practices.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every interaction becomes an opportunity for healing when we approach it with understanding, 
                  patience, and respect for the individual's journey.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Community-Centered Approach</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Effective social work requires understanding that individuals exist within complex systems 
                  of relationships and communities. Sustainable change happens when we address not just 
                  individual needs but also the broader social determinants of wellbeing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My work in various settings has taught me that empowering communities to identify and 
                  address their own challenges leads to more lasting and meaningful outcomes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Philosophy</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  My approach to social work is grounded in the belief that every person has inherent dignity 
                  and the capacity for growth and change. I strive to create safe, supportive environments 
                  where individuals can explore their challenges and develop their strengths.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Continuous learning and adaptation are essential in this field. Each client, each situation 
                  teaches us something new about the human experience and resilience.
                </p>
              </div>
            </div>
          </div>

          {/* Current Focus Areas */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <TrendingUp className="text-blue-600" size={28} />
              Current Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Student Mental Health',
                'Crisis Intervention',
                'Community Engagement',
                'Wellness Program Development',
                'Trauma Recovery',
                'Leadership Development',
                'Cultural Competency',
                'Digital Wellness Tools'
              ].map((focus, index) => (
                <div key={index} className="bg-white border border-blue-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <p className="text-blue-800 font-semibold">{focus}</p>
                </div>
              ))}
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
              Let's connect and explore opportunities in social work and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">Send me a message</p>
                  <a
                    href="mailto:sisandamazitshana1@gmail.com"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    sisandamazitshana1@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600 mb-2">Call or WhatsApp</p>
                  <a
                    href="tel:+27788350000"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    +27 78 835 0000
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
                  <p className="text-gray-600 mb-2">Connect professionally</p>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    Connect on LinkedIn
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
                    placeholder="Tell me about your opportunity or project..."
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
              <h3 className="text-2xl font-bold mb-4">Sisanda Mazitshana</h3>
              <p className="text-gray-300 mb-2">Social Worker & Wellness Coordinator</p>
              <p className="text-gray-400">Dedicated to enhancing well-being and fostering supportive communities</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="mailto:sisandamazitshana1@gmail.com"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+27788350000"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Phone size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Sisanda Mazitshana. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;